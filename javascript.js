var second=document.querySelector('.container .top #second');
var minute=document.querySelector('.container .top #minute');
var hour=document.querySelector('.container .top #hour');

var startbtn=document.querySelector('.container .bottom #start');
var stoptbtn=document.querySelector('.container .bottom #stop');
var resetbtn=document.querySelector('.container .bottom #reset');

var inputnum=document.querySelector('.container #num');

var timer;
var timer_on=0;

startbtn.addEventListener('click' , f1);
stoptbtn.addEventListener('click' , f2);
resetbtn.addEventListener('click' , f3);

inputnum.addEventListener('change' , setTime);

function f1(event){
    
    if(timer_on==0){
        timer_on=1;
        timer=setInterval(count , 1000);
    }
    
}

function setTime(){
    let x=Number(inputnum.value);
    let min=x%60;
    let hr=Math.floor(x/60);

    second.querySelector('.left').innerHTML=0;
    second.querySelector('.right').innerHTML=0;

    minute.querySelector('.left').innerHTML=Math.floor(min/10);
    minute.querySelector('.right').innerHTML=min%10;

    hour.querySelector('.left').innerHTML=Math.floor(hr/10);
    hour.querySelector('.right').innerHTML=hr%10;
}


function count(){
    if(Number(second.querySelector('.right').innerHTML) == 0 && Number(second.querySelector('.left').innerHTML) == 0 && Number(minute.querySelector('.right').innerHTML) == 0 && Number(minute.querySelector('.left').innerHTML) == 0 && Number(hour.querySelector('.right').innerHTML) == 0 && Number(hour.querySelector('.left').innerHTML) == 0){
        clearInterval(timer);
        location.reload(true);
        return;
    }

    if(Number(second.querySelector('.right').innerHTML)>0){
        second.querySelector('.right').innerHTML=Number(second.querySelector('.right').innerHTML)-1;   
    }
    else{
        second.querySelector('.right').innerHTML=9;
        if(Number(second.querySelector('.left').innerHTML) > 0)
        {
            second.querySelector('.left').innerHTML=Number(second.querySelector('.left').innerHTML)-1;
        }
        else{
            second.querySelector('.left').innerHTML=5;
            if(Number(minute.querySelector('.right').innerHTML)>0){
                minute.querySelector('.right').innerHTML=Number(minute.querySelector('.right').innerHTML)-1;
            }
            else{
                minute.querySelector('.right').innerHTML=9;
                if(Number(minute.querySelector('.left').innerHTML) > 0){
                    minute.querySelector('.left').innerHTML=Number(minute.querySelector('.left').innerHTML)-1;
                }
                else{
                    minute.querySelector('.left').innerHTML=5;
                    if(Number(hour.querySelector('.right').innerHTML) > 0){
                        hour.querySelector('.right').innerHTML=Number(hour.querySelector('.right').innerHTML)-1;
                    }
                    else{
                        hour.querySelector('.right').innerHTML=9;
                        hour.querySelector('.left').innerHTML=Number(hour.querySelector('.left').innerHTML)-1;
                    }  
                }
            } 
        } 
    }
}

function f2(){
    if(timer_on==1){
        timer_on=0;
        clearInterval(timer);
    }
}

function f3(){
    timer_on=0;
    clearInterval(timer);
    location.reload(true);
    
}
