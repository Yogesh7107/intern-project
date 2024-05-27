const signinForm = document.getElementById("signin");
let isvalid=true;

signinForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("signin-password").value;

    if(email==""){
        isvalid=false;
        document.getElementById( "error_email" ).innerText="Please enter your Email";
        document.getElementById("email").style.border="1px solid red"
    }else{
      isvalid=true
      document.getElementById( "error_email" ).innerText="";
      document.getElementById("email").style.border="1px solid red"
    }
    if(password=="")
    {
      isvalid=false;
      document.getElementById( "error_password" ).innerText="Please enter your Password";
      document.getElementById("signin-password").style.border="1px solid red"
       
    } 
    else{
      isvalid=true
      document.getElementById( "error_password" ).innerText="";
      document.getElementById("signin-password").style.border="1px solid red"
    }
    const userData = JSON.parse(localStorage.getItem("userInfo"));
    const checkuser=userData.find((el)=>el.email==email)
    if(!checkuser && isvalid){
      alert("Your Account is not Created Please Create Account First And then Log in")
      return;
    }
    const user = userData.find((el) => el.email == email && el.password == password);

 if(isvalid){
  if (user){
    alert(`Login Succesfully ! Welcome ${user.name}`);
  window.location.href = 'http://127.0.0.1:5501/index.html'
  
  
}
  else
  {
    alert("Please Enter  Valid Username and Password!");
    signinForm.reset();
    return;
  }
 
 }else{
  alert ("Enter your Email || or password")
 }
    
})


