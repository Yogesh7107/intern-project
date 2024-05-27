const signupForm = document.getElementById("signup");

signupForm.addEventListener("submit",(e)=>{
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if(name=="")
  {
    isvalid=false;
    document.getElementById( "error_name" ).innerHTML="Please enter your Password";
    document.getElementById("name").style.border="1px solid red"
  }
  if(email==""){
    isvalid=false;
    document.getElementById( "error_email" ).innerHTML="Please enter your Email";
      document.getElementById("email").style.border="1px solid red"
  }
  if(password==""){
    isvalid=false;
      document.getElementById( "error_password" ).innerHTML="Please enter your Password";
      document.getElementById("password").style.border="1px solid red"
      return; 
  }
  const userData = JSON.parse(localStorage.getItem("userInfo")) || [];
  const exitingUser=userData.find(user => user.email === email);
  if(exitingUser){
    alert("This email is already used please insert another mail or Log in same email")
    return;
  }
  userData.push({ name, email, password });
  localStorage.setItem("userInfo", JSON.stringify(userData));


  Swal.fire({
    title: "Account Created",
    text: "Your Account Is Created Successfully❤️",
    icon: "success"
  });
   setInterval(()=>{
    
  window.location.href = 'http://127.0.0.1:5501/login.html'
  signupForm.reset();
   },1500)
  
})
