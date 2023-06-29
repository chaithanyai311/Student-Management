const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

//load middleware
app.use(bodyParser.json());

let studentList = [];

const { StudentList } = require('./db/models/studentList.model');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );
    next();
  });

app.get('/studentList', (req, res) => {
    //get the student list
    StudentList.find({}).then((studentList) => {
        res.send(studentList);
    });
})

/*
app.get('/studentList/:id', (req, res) => {
  //get the student list
  StudentList.findOne({
    _id: req.params.id
  }).then((studentList) => {
      res.send(studentList);
  });
})
*/

app.post('/studentList', (req, res) => {
    //create the student in a list
    let rollno = req.body.rollno;
    let name = req.body.name;
    let studentClass = req.body.studentClass;
    let gender = req.body.gender;
    let studentid = req.body.studentid;
    let contact = req.body.contact;

    let newStudentList = new StudentList({
        rollno,
        name,
        studentClass,
        gender,
        studentid,
        contact
    });
    newStudentList.save().then((studentlistDoc) => {
        res.send(studentlistDoc);
    })
});

  
app.patch('/studentList/:id', (req, res) => {
  const { rollno, name, studentClass, gender, studentid, contact } = req.body;

  // Update student data
  StudentList.findByIdAndUpdate(req.params.id, {
    $set: {
      rollno: rollno,
      name: name,
      studentClass: studentClass,
      gender: gender,
      studentid: studentid,
      contact: contact
    }
  })
    .then(() => {
      res.send({ message: 'Updated successfully' });
    })
    .catch((error) => {
      console.log('Error updating student:', error);
      res.status(500).send('Error updating student');
    });
});


app.delete('/studentList/:id', (req, res) => {
    //delete the student from list
    StudentList.findOneAndRemove({_id: req.params.id}).then((removedListDoc) => {
       res.send(removedListDoc);
    })
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})