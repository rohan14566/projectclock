function getTime(){
    let time= new Date();
    let hr=time.getHours();
    let min=time.getMinutes();
    let sec=time.getSeconds();

    if(hour>12){        
        hr=hr-12;
        document.getElementById("am").innerText="PM"        
    }
    if(hour<10){
        hr="0"+hr;
    }
    if(minute<10){
        min="0"+min;
    }
    if(second<10){
        sec="0"+sec;
    }
  
if(((hr==6)||(hr==7)||(hr==8)||(hr==9)||(hr==10)||(hr==11))&&(document.getElementById("am").innerText=="PM")){
    document.getElementById("text").innerText="GRAB SOME HEALTHY BREAKFAST!!!"
    document.getElementById("imag").src="msun img.svg"
    document.getElementById("word").innerText="GOOD MORNING!! WAKE UP !!"
}
if(((hr==12)||(hr==1)||(hr==2)||(hr==3))&&(document.getElementById("am").innerText=="PM")){
    document.getElementById("text").innerText="LET'S HAVE SOME LUNCH !!"
    document.getElementById("imag").src="aft image.svg"
    document.getElementById("word").innerText="GOOD AFTERNOON !! TAKE SOME SLEEP"
}
if(((hr==4)||(hr==5)||(hr==6)||(hr==7))&&(document.getElementById("am").innerText=="PM")){
    document.getElementById("text").innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
    document.getElementById("imag").src="lunch_time.png"
    document.getElementById("word").innerText="GOOD EVENING !!"
}
if(((hr==8)||(hr==9)||(hr==10)||(hr==11))&&(document.getElementById("am").innerText=="PM")){
    document.getElementById("text").innerText="CLOSE YOUR EYES AND GO TO SLEEP"
    document.getElementById("imag").src= "NIGHT IMG.SVG"
    document.getElementById("word").innerText="GOOD NIGHT !!"
}
document.getElementById("hour").innerText=hr
document.getElementById("minute").innerText=min
document.getElementById("second").innerText=sec

setTimeout(getTime,1000);
}
getTime();

function set(){
    
    let ftext = document.getElementById("first" ).options[document.getElementById("first" ).selectedIndex].innerText;
    document.getElementById("one").innerText=ftext

    let stext = document.getElementById("second").options[document.getElementById("second").selectedIndex].innerText;
    document.getElementById("two").innerText=stext

    let ttext = document.getElementById("third").options[document.getElementById("third").selectedIndex].innerText;
    document.getElementById("three").innerText=ttext

    let fotext = document.getElementById("fourth").options[document.getElementById("fourth").selectedIndex].innerText;
    document.getElementById("four").innerText=fotext

}
