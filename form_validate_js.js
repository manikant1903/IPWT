function validate(){
    var fname=document.getElementById('firstname').value;
    var lname=document.getElementById('lastname').value;
    var register=document.getElementById('registrationno').value;
    var email=document.getElementById('email').value;

    var pwd=document.getElementById('password').value;
    var cpwd=document.getElementById('repassword').value;

    var phn=document.getElementById('phoneno').value;


    var namepattern=/[A-Za-z]{3,20}/;
    var registerpattern=/[0-9]{8,8}/;
    var emailpattern=/^[a-zA-Z0-9\.\_\#]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
    var phnpattern=/[0-9]{10,10}/;




    var gender=document.getElementById('gndr').value;


    if(!namepattern.test(fname) || fname=="" || !namepattern.test(lname) || lname==""){
        alert("invalid name or blank !");
        return false;
    }

    if(!registerpattern.test(register) || register==""){
        alert("Invalid register no. or blank !");
        return false;
    }

    if(!emailpattern.test(email)||email==""){
        alert("Invalid or blank email !");
        return false;
    }

    if(pwd=="" || cpwd==""){
        alert("Password can't be blank !");
        return false;
    }
    else{
        if(pwd!=cpwd){
            alert("Password mismatch !");
            return false;
        }
    }

    if(!phnpattern.test(phn)||phn==""){
        alert("Invalid phone number or blank !");
        return false;
    }

    if(document.myform.gndr[0].checked==false && document.myform.gndr[1].checked==false){
        alert("Please select gender !");
        return false;
    }

    alert("All fields are validated and form is submitting press OK to submit !");

    return true;

}