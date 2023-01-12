var seconds =0 ;
var milisec =0 ;

var timer = false;

function start(){
    timer = true;
    main();
}

function stop(){
    timer = false;
}

function reset(){
    timer = false;

    seconds = 0;
    milisec = 0;

    // document.getElementById("min").innerHTML = miniute;
    // document.getElementById("milisecond").innerHTML = sec;

    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("miliseconds").innerHTML = "00";

}

function main(){
    if(timer == true){
        milisec = milisec+1;

        if(milisec == 100){
            seconds = seconds + 1;
            milisec = 0;
        }

        if(seconds == 60){
            seconds = 0 ;
            milisec = 0 ;
        }
      
        document.getElementById("seconds").innerHTML = seconds;
        document.getElementById("miliseconds").innerHTML = milisec;

        setTimeout("main()" , 10)
    }
}