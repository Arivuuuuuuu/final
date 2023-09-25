<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>login</title>
        <link rel="stylesheet" href="./style.css">
        
    </head>
    <body>  
        <div class="container">
            <h1 class="heading">Login-form</h1>
            <form name="" id="form" method ="post" action="connect.php" >  
                <div class="input-control">
                    <label for="mail"><e-mail>E-mail</label>
                    <input type="text" id="mail" name="mail" placeholder="Enter your e-mail">
                    <div class="error"></div>
                    
                </div>
                <br/>
                <br/>
                
                <div class="input-control">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="enter your password">
                    <div class="error"></div>
                </div>
                
                <br/>  
                <br/>
                <button class="click" type="submit">Login</button>
               
                
                
                <br/>
                <p>Don't have an account? <a href="./register-form/register.php">Register Now</a></p>
                
                
                </form>  
        </div>
        
    <script src="./script.js"></script>
    </body>
</html>