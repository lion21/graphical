<?php
$email="test@geemail.com";
if (isValidEmail($email))
{
       echo "Hooray! Adress is correct.";
}
else
{
       echo "Sorry! No way.";
}

//Check-Function
function isValidEmail($email)
{
       //Perform a basic syntax-Check
       //If this check fails, there's no need to continue
       if(!filter_var($email, FILTER_VALIDATE_EMAIL))
       {
               return false;
       }

       //extract host
       list($user, $host) = explode("@", $email);
       //check, if host is accessible
       if (!checkdnsrr($host, "MX") && !checkdnsrr($host, "A"))
       {
               return false;
       }

       return true;
}
?>
