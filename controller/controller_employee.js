var express = require('express');
var router = express.Router();
var objid= require('mongoose').Types.ObjectId;

var {Employee} = require('../model/model_employee');


router.get('/',(req,res)=>{
	Employee.find((err,docs)=>{
		if(!err){ 
			console.log(docs);
			res.send(docs);
		}else{
			console.log('Error retrieving docs... '+JSON.stringify(err,undefined,2));
		}
	});
});

router.get('/:id',(req,res)=>{
	if(!objid.isValid(req.params.id)){
		return res.status(400).send('No record found with id : ${req.params.id}');
	}
	Employee.findById(req.params.id,(err,docs)=>{
		if(!err){
			console.log(docs);
			res.send(docs);
		}else{
			console.log("Error retrieving Docs "+JSON.stringify(err,undefined,2));
		}
	});
});

router.post('/',(req,res)=>{
	var emp=new Employee({
		name : req.body.name,
		position : req.body.position,
		office : req.body.office,
		salary : req.body.salary
	});
	emp.save((err,docs)=>{
		if(!err){
			console.log(docs);
			res.send(docs);
		}else{
			console.log("Error saving docs"+JSON.stringify(err,undefined,2));
		}
	});
});

router.put('/:id',(req,res)=>{
	if(!objid.isValid(req.params.id)){
		return res.status(400).send("No record found to update with id  : ${req.params.id}");
	}
	var emp={
		name : req.body.name,
		position: req.body.position,
		office : req.body.office,
		salary : req.body.salary
	};
	Employee.findByIdAndUpdate(req.params.id,{$set : emp},{new : true},(err,docs)=>{
		if(!err){
			console.log(docs);
			res.send(docs);
		}else{
			console.log("Error saving record "+JSON.stringify(err,undefined,2));
		}
	});
});

router.delete('/:id',(req,res)=>{
	if(!objid.isValid(req.params.id)){
		return res.status(400).send("No record found to delete with id : ${req.params.id}");
	}
	Employee.findByIdAndRemove(req.params.id,(err,docs)=>{
		if(!err){
			console.log(docs);
			res.send(docs);
		}else{
			console.log("Error deleting record "+JSON.stringify(err,undefined,2));
		}
	});
});
module.exports=router;