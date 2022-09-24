function Number_Object()
{
    //Get value from text boxes
    var x=document.getElementById('x') 
    var y=document.getElementById('y')
    var status=true;

    //errors
    var x_err=document.getElementById('x_err') 
    var y_err=document.getElementById('y_err')
   

    // Bootstrap icons
    var wrong=`<i class="bi bi-patch-exclamation-fill"></i>`
    var right=`<i class="bi bi-patch-check-fill"></i>`
  
    //uname
    if(x.value ==undefined || x.value =="")
    {
        x_err.innerHTML=`${wrong}Enter X value`
        x.style.border="#f52525 solid"
        status=false;  
    }
    else if(!x.value.match(/^[0-9]+$/))
    {
        x_err.innerHTML=`${wrong} Numbers only.[0-9].only`
        x.style.border="#f52525 solid"
        x_err.className="text-danger"
        status=false;  
    }
    else{
       x_err.innerHTML=`${right} Thank You`
       x.style.border="#27bd22 solid"
       x_err.className="text-success"
    }
     
    //email
    if(y.value ==undefined || y.value =="")
    {
        y_err.innerHTML=`${wrong} Enter Y value`
        y.style.border="#f52525 solid"
        status=false;  
    }
    else if(!y.value.match(/^[0-9]+$/))
    {
        y_err.innerHTML=`${wrong} Numbers only.[0-9].only`
        y.style.border="#f52525 solid"
        y_err.className="text-danger"
        status=false;  
    }
    else 
    {
        y_err.innerHTML=`${right} Thank You`
        y.style.border="#27bd22 solid"
        y_err.className="text-success"
    }
    if (status)
    {
        alert(`
             x vlaue is: ${x.value} \n
             y vlaue is: ${y.value} \n
             x+y  is: ${Number.parseInt(x.value)+Number.parseInt(y.value)} 
        `)

    }
   
   return status;
}
