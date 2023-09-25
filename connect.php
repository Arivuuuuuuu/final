<?php

 if($_SERVER['REQUEST_METHOD']=='POST'){
    $username=$_POST['username'];
    $password=$_POST['password']; 
    $mail=$_POST['mail']; 
    $cpassword=$_POST['cpassword']; 
    $number=$_POST['number']; 
   



$con=new mysqli('localhost','root','','final');
if($con){
    echo "connection successful";
    $sql="insert into `final_db`(username,password,cpassword,mail,number)values('$username','$password','$cpassword','$mail','$number')";
    $result=mysqli_query($con,$sql);
    if($result){
        echo "data inserted successfully";
    }else{
        die(mysqli_error($con));

    }
}else{
    die(mysqli_error($con));
}
}
?>
