const express =require('express');
const Studentcontroller = require('../controllers/studentcontroller');
const router = express.Router();
router.use(express.urlencoded({extended: false}));


router.get('/',(req,res)=>{
    res.render('home')
})
router.post('/add/student',(req,res)=>{
    Studentcontroller.addStudent(req,res)
    
})
router.get('/students',(req,res)=>{
    Studentcontroller.getStudents(req,res);
})
router.get('/student/edit/page/:id',(req,res)=>{
    Studentcontroller.getStudentForEdit(req,res)

})
router.post('/update/student/:id',(req,res)=>{
    Studentcontroller.updateStudent(req,res)
})
router.get('/delete/student/:id',(req,res)=>{
    Studentcontroller.DeleteStudent(req,res)
})

module.exports = router
