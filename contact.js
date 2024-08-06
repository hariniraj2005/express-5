const path=require('path');

const express=require('express');

const router=express.Router();

router.get('/contactus',(req,res,next)=>{
  res.sendFile(path.join(__dirname,'../','views','contact.html'))
})

router.post('/contactus', (req, res, next) => {
    // You can process the form data here if needed
    const { name, email } = req.body;
    console.log(`Name: ${name}, Email: ${email}`);
    
    // Redirect to the success page
    res.redirect('/success');
})

module.exports=router;