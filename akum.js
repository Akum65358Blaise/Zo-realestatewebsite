
function myfunction(){
  var a=document.getElementById('fname').value;
  var b=document.getElementById('lname').value;
    var c=document.getElementById('email').value;
      var d=document.getElementById('password').value;
  if(a==""){
    document.getElementById("finame").innerHTML= "please enter your first name";
    return false;
  }
  if(b==""){
    document.getElementById("liname").innerHTML= "please enter your last name";
    return false;
  }
  if(c==""){
    document.getElementById("zmail").innerHTML= "please enter your email Address";
    return false;
  }
  if(d==""){
    document.getElementById("phone").innerHTML= "please enter your password";
    return false;
  }
}
