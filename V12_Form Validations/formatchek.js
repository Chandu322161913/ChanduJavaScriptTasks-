function formvalidations()
{

     //textbox-values
    var uname = document.getElementById('uname')
    var email = document.getElementById('email')
    var pwd = document.getElementById('pwd')
    var status = true

     //errors
    var uname_err = document.getElementById('uname_err')
    var email_err = document.getElementById('email_err')
    var pwd_err = document.getElementById('pwd_err')

    //BS-Icons
    var wrong=`<i class="bi bi-exclamation-circle-fill"></i>`
    var right=`<i class="bi bi-check-circle-fill"></i>`

    //uname

    if(uname.value==undefined || uname.value=="")
    {
        uname_err.innerHTML=`<i class="bi bi-exclamation-circle-fill"></i> Enter username`
        uname.style.border="#f52525 solid"
        status = false;
    }
    else if(!uname.value.match(/^[a-z]+$/))
    {
        uname_err.innerHTML=`<i class="bi bi-exclamation-circle-fill"></i> only small cases [a-z]`
        uname.style.border="#f52525 solid"
        uname_err.className="text-danger"
        status = false;
    }
    else
    {
        uname_err.innerHTML=`${wrong} Thank you`
        uname.style.border="f52525 solid"
        uname_err.className="text-success"
    }

    //email
    if(email.value==undefined || email.value=="")
    {
        email_err.innerHTML=`<i class="bi bi-exclamation-circle-fill"></i> Enter valid email`
        email.style.border="#f52525 solid"
        status = false;
    }
    else if(!email.value.match(/^[a-zA-Z0-9_\.\-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/))
    {
        email_err.innerHTML=`<i class="bi bi-exclamation-circle-fill"></i> must name@domainextention only`
        email.style.border="#f52525 solid"
        email_err.className="text-danger"
        status = false;
    }
    else
    {
        email_err.innerHTML=`${wrong} Thank you`
        email.style.border="f52525 solid"
        email_err.className="text-success"
    }


    //Password
    if(pwd.value==undefined || pwd.value=="")
    {
        pwd_err.innerHTML=`<i class="bi bi-exclamation-circle-fill"></i> Enter valid pwd only`
        pwd.style.border="#f52525 solid"
        status = false;
    }
    else if(!pwd.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/))
    {
        pwd_err.innerHTML=`<i class="bi bi-exclamation-circle-fill"></i> must enter 1 number, 1 lower, 1 upper , 1 special char only`
        pwd.style.border="#f52525 solid"
        pwd_err.className="text-danger"
        status = false;
    }
    else
    {
        pwd_err.innerHTML=`${wrong} Thank you`
        pwd.style.border="f52525 solid"
        pwd_err.className="text-success"
    }
    return false;
}