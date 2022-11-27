function speedDetector(){
    let speed = document.getElementById("speed").value;
    if(speed  < 0){
        document.getElementById('points').innerHTML= "Invalid Speed"
    }

    else if(speed >= 0 && speed  <= 70){
        document.getElementById('points').innerHTML= "Your speed is okay"
    }
    else if(speed >= 80 && speed < 90){
    
       document.getElementById('points').innerHTML= "Exceeded reqular speed limit, Get 2 points"
    }
    
    else if(speed >=90 && speed < 100){
        document.getElementById('points').innerHTML= "Exeeded reqular speed limit, get  plus 4 points"
    }
    else if (speed >=100 && speed < 110){
        document.getElementById('points').innerHTML= "Exceeded reqular speed limit, get plus 6 points"
    }
    else if (speed >= 110 && speed < 120){
        document.getElementById('points').innerHTML= "Exceeded reqular speed limit, get plus 8 points"
    }
    else if (speed >= 120 && speed < 130){
        document.getElementById('points').innerHTML= "Exceeded reqular speed limit, get plus 10 points"
    }
    else if (speed >= 130){
        document.getElementById('points').innerHTML= "Exceeded 130 speed limit, your licence is suspended"
    }
    else {
        document.getElementById('points').innerHTML = "Input your Speed."
    }
}