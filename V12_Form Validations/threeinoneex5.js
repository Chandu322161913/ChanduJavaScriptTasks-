function formvalidations() {
    //target_uname_input
    var uname_input = document.getElementById('uname')
    var email_input = document.getElementById('mail')
    var pwd_input = document.getElementById('pwd')

    //errors
    var uname_span = document.getElementById('uname_span')
    var email_span = document.getElementById('mail_span')
    var pwd_span = document.getElementById('pwd_span')

    //icons
    var wrong = `<i class="bi bi-exclamation-circle-fill"></i>`
    var right = `<i class="bi bi-check-circle-fill"></i>`


    //uname
    if (uname_input.value == "" || uname_input.value == undefined) {
        uname_span.innerHTML = `${wrong} Enter Name`
        uname_input.style.border = "1px solid #f00c0c"
        uname_span.className = "text-danger"
        return false;
    }
    else if (!uname_input.value.match(/^[a-z]+$/)) {
        uname_span.innerHTML = `${wrong} Enter name lower alphebets only`
        uname_input.style.border = "1px solid blue"
        uname_span.className = "text-danger"
        return false;
    }
    else {
        uname_span.innerHTML = `${wrong} Thank You`
        uname_input.style.border = "1px solid #076604"
        uname_span.className = "text-success"
        return false;
    }

    //Email
    if (email_input.value == "" || email_input.value == undefined) {
        email_span.innerHTML = `${wrong} Enter email`
        email_input.style.border = "1px solid #f00c0c"
        email_span.className = "text-danger"
        return false;
    }
    else if (!email_input.value.match(/^[a-zA-Z0-9_\.\-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/)) {
        email_span.innerHTML = `${wrong} Enter valide email name@domain.com`
        email_input.style.border = "1px solid #f00c0c"
        email_span.className = "text-danger"
        return false;
    }
    else {
        email_span.innerHTML = `${wrong} Thank You`
        email_input.style.border = "1px solid #076604"
        email_span.className = "text-success"
        return false;
    }


    //pwd
    if (pwd_input.value == "" || pwd_input.value == undefined) {
        pwd_span.innerHTML = `${wrong} Enter password`
        pwd_input.style.border = "1px solid #f00c0c"
        pwd_span.className = "text-danger"
        return false;
    }
    else if (!pwd_input.value.match(/^(?=.*?[A-Z](?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/)) {
        pwd_span.innerHTML = `${wrong} Enter one upper case one lower case one number`
        pwd_input.style.border = "1px solid #f00c0c"
        pwd_span.className = "text-danger"
        return false;
    }
    else {
        pwd_span.innerHTML = `${wrong} Thank You`
        pwd_input.style.border = "1px solid #076604"
        pwd_span.className = "text-success"
        return false;
    }

}