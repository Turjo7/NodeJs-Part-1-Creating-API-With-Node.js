const express = require('express');
const app = express();

app.use((req, res, next)=>{
  res.status(200).json({
    message: "Server Is Working, Team : Woadce Ninja, Testing : Local, Integrate: Firebase Back",
	txt : "hi"
	
	
	
  });
});

module.exports=app;
