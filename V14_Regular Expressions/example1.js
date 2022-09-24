function Regular_Expression()
{
    //Get value from text boxes
    var uname=document.getElementById('uname') 
    var email=document.getElementById('email')
    var pwd=document.getElementById('pwd')
    var status=true

    //errors
    var uname_err=document.getElementById('uname_err') 
    var email_err=document.getElementById('email_err')
    var pwd_err=document.getElementById('pwd_err')

    // Bootstrap icons
    var wrong=`<i class="bi bi-patch-exclamation-fill"></i>`
    var right=`<i class="bi bi-patch-check-fill"></i>`
  
    //uname
    if(uname.value ==undefined || uname.value =="")
    {
        uname_err.innerHTML=`${wrong}Enter User Name`
        uname.style.border="#f52525 solid"
        status=false;  
    }
    else if(!uname.value.match(/^[a-z]+$/))
    {
        uname_err.innerHTML=`${wrong} Lowercase Alphabets[a-z].only`
        uname.style.border="#f52525 solid"
        uname_err.className="text-danger"
        status=false;  
    }
    else{
       uname_err.innerHTML=`${right} Thank You`
       uname.style.border="#27bd22 solid"
       uname_err.className="text-success"
    }
     
    //email
    if(email.value ==undefined || email.value =="")
    {
        email_err.innerHTML=`${wrong} Enter Email Name`
        email.style.border="#f52525 solid"
        status=false;  
    }
    else if(!email.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/))
    {
        email_err.innerHTML=`${wrong} must be name@domain.extention only`
        email.style.border="#f52525 solid"
        email_err.className="text-danger"
        status=false;  
    }
    else 
    {
        email_err.innerHTML=`${right} Thank You`
        email.style.border="#27bd22 solid"
        email_err.className="text-success"
    }

    //password
    if(pwd.value ==undefined || pwd.value =="")
    {
        pwd_err.innerHTML=`${wrong} Enter Password`
        pwd.style.border="#f52525 solid"
        status=false;   
    }
    else if(!pwd.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/))
    {
        pwd_err.innerHTML=`${wrong} must be 1 uppercase, 1 lowercase, 1 number, 1 special character`
        pwd.style.border="#f52525 solid"
        pwd_err.className="text-danger"
        status=false;  
    }
    else
    {
        pwd_err.innerHTML=`${right} Thank You`
        pwd.style.border="#27bd22 solid"
        pwd_err.className="text-success"
    }
   return status;
}
