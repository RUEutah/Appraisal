const express = require("express");
const router = express.Router();
const { check , query} = require('express-validator');

const {createAnswers, getAnswers, deleteAnswers, updateAnswers} = require("../controllers/answersController");
const { getAppraisalForms, createAppraisalForms, deleteAppraisalForms, updateAppraisalForms } = require("../controllers/appraisalFormsController");
const { getAppraisalSessions, createAppraisalSessions, deleteAppraisalSessions, updateAppraisalSessions, getAppraisalSession } = require("../controllers/appraisalSessionsController");
const { getDepartments, createDepartments, deleteDepartments, updateDepartments } = require("../controllers/departmentsController");
const { getRespondents, createRespondents, deleteRespondents, updateRespondents } = require("../controllers/respondentsController");
const { getRoles, createRoles, deleteRoles, updateRoles } = require("../controllers/rolesController");
const { getUsers, createUsers, deleteUsers, updateUsers, changePassword, resetPassword, login, register, totalEmployees } = require("../controllers/usersController");

router.get('/getanswers', getAnswers);
router.post('/addanswers', createAnswers);
router.delete('/deleteanswers', deleteAnswers);
router.patch('/updateanswers', updateAnswers);

router.get('/getappraisalForms', getAppraisalForms);
router.post('/addappraisalForms', createAppraisalForms);
router.delete('/deleteappraisalForms', deleteAppraisalForms);
router.patch('/updateappraisalForms', updateAppraisalForms);

router.get('/getappraisalSessions', getAppraisalSessions);
router.post('/addappraisalSessions', createAppraisalSessions);
router.delete('/deleteappraisalSessions', deleteAppraisalSessions);
router.patch('/updateappraisalSessions', updateAppraisalSessions);
router.get('/getappraisalSession/:id', getAppraisalSession);

router.get('/getdepartments', getDepartments);
router.post('/adddepartments', createDepartments);
router.delete('/deletedepartments', deleteDepartments);
router.patch('/updatedepartments', updateDepartments);

router.get('/getrespondents/:id', getRespondents);
router.post('/addrespondents', createRespondents);
router.delete('/deleterespondents', deleteRespondents);
router.patch('/updaterespondents', updateRespondents);

router.get('/getroles', getRoles);
router.post('/addroles', createRoles);
router.delete('/deleteroles', deleteRoles);
router.patch('/updateroles', updateRoles);

router.get('/getusers', getUsers);
router.post('/addusers', createUsers);
router.delete('/deleteusers', deleteUsers);
router.patch('/updateusers', updateUsers);
router.post('/login', login);
router.post('/register', register);
router.patch('/changepassword', changePassword);
router.post('/resetpassword', resetPassword);
router.get('/employees', totalEmployees);


module.exports = router;