function validation(){
  var name=document.Submission.name.value;
  var email=document.Submission.email.value;
  var subject=document.Submission.subject.value;
  var message=document.Submission.message.value; 
  var regex=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/gm;
 var error=document.getElementById("error-message");
  
if(name==""){
     error.innerHTML='The box is Empty'
     return false;
}
if(name.length<5){
 error.innerHTML='Name Should Contain atleast five Elements'
     return false;
}
if(email==""){
 error.innerHTML='The box is Empty'
     return false;
}  
if(regex.test(email)==false){
 error.innerHTML='Invalid Email Id, try another one'
     return false;
}
if(subject.length<5){
 error.innerHTML='subject Should Contain atleast 5 Elements'
     return false;
} 
if(message.length<10){
 error.innerHTML='Should Contain 10 Words'
     return false;
} 
if(message.length>100){
 error.innerHTML='Exceeds Limit'
     return false;
} 
     return true;
}