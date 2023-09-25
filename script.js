/*function validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value;  
      
    if  (name==""){  
      alert("name can't be blank");  

      return false;  
    }else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
    }
}*/





const form=document.getElementById('form');
const mail=document.getElementById('mail');
const password=document.getElementById('password');

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  validateInputs();
});

function setError (element,message){
  const inputcontrol =element.parentElement;
  const errorDisplay=inputcontrol.querySelector('.error');

  errorDisplay.innerText=message;
  inputcontrol.classList.add('error');
  inputcontrol.classList.remove('success');
}

function setSuccess(element) {
  const inputcontrol =element.parentElement;
  const errorDisplay=inputcontrol.querySelector('.error');

  errorDisplay.innerText='';
  inputcontrol.classList.add('success');
  inputcontrol.classList.remove('error');
  

}

const isValidEmail = (mail) => {
  return String(mail).toLowerCase().match(/^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/);
}

const validateInputs=()=>{
  const mailValue=mail.value.trim();
  const passwordValue=password.value.trim();

  if(mailValue===''){
    setError(mail,'mail is required');
  }else if(!isValidEmail(mailValue)){
    setError(mail,'please provide a valid mail');
  }else{
    setSuccess(mail);
  }
  if(passwordValue===''){
    setError(password,'password is required');

  }else if(passwordValue.length<8){
    setError(password,'password must be atleast 8 characters');
  }else{
    setSuccess(password);
  }

}

