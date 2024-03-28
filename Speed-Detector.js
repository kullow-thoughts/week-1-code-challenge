function speedDetector (speed){// a function called speedDetector
    if(speed <=70){// checking for the speed within its speed limit
        console.log('ok')
    }else{// if it exceeds the limit calculate the demeritPoints
        let demeritPoints=(speed-70)/5
        if(demeritPoints >12){// check if the threshold exceeds the demeritPoints
            console.log('license suspended')//if the demeritpoint exceeds print this message
        }else{
            console.log(`points: ${demeritPoints}`)//if they are within the demeritPoints print the number of points
        }
    }
}
speedDetector(80)// calls and invokes the function speedDetector and passes a speed of 80 as an arguement