var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost:27017/CrudDB',(err) =>{
	if(!err){
		console.log("Connection Established..");
	}else{
		console.log("error occured  connecting.."+JSON.stringify(err,undefined,2));
	}
});

module.exports=mongoose;