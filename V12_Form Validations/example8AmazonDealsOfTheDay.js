function DealsOfTheDay(){
    //count down to
    var countDownDate=new Date("July 27, 2022 00:00:00").getTime();

    // update count every second
    var x= setInterval( function(){

        //get today date and time
        var now= new Date().getTime();

        //find distance now and count down date
        var distance=countDownDate-now;

        //time calculations days, months, date, time, h,m,s
        var days=Math.floor(distance/(1000*60*60*24));
        var hours=Math.floor((distance % (1000*60*60*24))/(1000*60*60));
        var minutes=Math.floor((distance %(1000*60*60*24))/(1000*60*60));
        var seconds=Math.floor((distance %(1000*60))/1000);

        // o/p result with id
        document.getElementsByClassName("demo").innerHTML=days+"days"+hours+"h"+minutes+"m"+seconds+"s";

        for(i=0;i<document.getElementsByClassName("demo").length; i++)
        {
            document.getElementsByClassName("demo")[i].innerHTML=days+"days"+hours+"h"+minutes+"m"+seconds+"s";
        }

        //if count down is over,
         if(distance<0){
             clearInterval(x); //stop
             document.getElementById("demo").innerHTML="Offer Experied";
        }
    },1000);
}