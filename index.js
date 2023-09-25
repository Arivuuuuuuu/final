/*function form(){
    var name=document.myform.name.value;
    var password=document.myform.password.value;
    var mail=document.myform.mail.value;
    // const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
    // var emailCheck =  regex.test(mail);
    // console.log(emailCheck);
    // alert(emailCheck);
    alert('hi');
    if(name==""){
        alert("name can't be blank");
        return false;
    }else if(password.length<8){
        alert("Password must be at least 8 characters long.");
        return false;
    
    }else if(number!="10 numbers"){
        alert("Enter upto 10 numbers");
        return false;
    }else if(!emailCheck){
        alert("Not a valid email");
        return false;
    }
}*/

//function form(){

const form=document.getElementById('form');
const username=document.getElementById('username');
const mail=document.getElementById('mail');
const password=document.getElementById('password');
const cpassword=document.getElementById('cpassword');
const number=document.getElementById('number');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
});

function setError (element,message){
    const inputgroup =element.parentElement;
    const errorDisplay=inputgroup.querySelector('.error');

    errorDisplay.innerText=message;
    inputgroup.classList.add('error');
    inputgroup.classList.remove('success');
}

function setSuccess(element) {
    const inputgroup =element.parentElement;
    const errorDisplay=inputgroup.querySelector('.error');

    errorDisplay.innerText='';
    inputgroup.classList.add('success');
    inputgroup.classList.remove('error');
    

}

const isValidEmail = (mail) => {
    return String(mail).toLowerCase().match(/^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/);
}

const validateInputs=()=>{
    const usernameValue=username.value.trim();
    const mailValue=mail.value.trim();
    const passwordValue=password.value.trim();
    const cpasswordValue=cpassword.value.trim();
    const numberValue=number.value.trim();

    if(usernameValue ===''){
        setError(username, 'username is required');

    }else{
        setSuccess(username);
    }

    if(mailValue ===''){
        setError(mail,'mail id is required');
    }
    else if(!isValidEmail(mailValue)){
        setError(mail,'provide a valid e-mail');

    }else{
        setSuccess(mail);
    }

    if(passwordValue === ''){
        setError(password,'password is required');

    }else if(passwordValue.length<8){
        setError(password,'password must be atleast 8 characters');
        
    }else{
        setSuccess(password);
    }

    

    if(cpasswordValue === ''){
        setError(cpassword,'please confirm your password');

    }else if(cpasswordValue!==passwordValue){
        setError(password,'password does not match');
        
    }else{
        setSuccess(cpassword);
    }

    if(numberValue===''){
        setError(number,'number is required');
    }else if(numberValue.length<10){
        setError(number,'please enter upto 10 numbers');

    }else{
        setSuccess(number);
    }


    
}

//}