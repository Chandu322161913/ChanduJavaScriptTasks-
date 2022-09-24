function DealOfTheDay(){

    var countDownTime=new Date("July 23, 2022 00:00:00").geTtime();
    
    var x=setInterval(function(){

        var now= new Date().geTtime();

        var distance=countDownDate-now;

        var days=Math.floor(distance/(1000*60*60*24));

        var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60*24));

        var minutes=Math.floor((distance%(1000*60*60))/(1000*60*60*24));

        var seconds=Math.floor((distance%(1000*60))/1000);

        document.getElementById("demo").innerHTML=days+"days"+hours+"h"+minutes+"m"+seconds+"s";

        // if(distance<0){
        //      clearInterval(x);
        //     document.getElementById("demo").innerHTML="Offer Experied";
        // }
    },1000)
}