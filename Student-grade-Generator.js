const marks=prompt('enter your score')// Prompt user to enter score and store it in the  'marks' variable
if(marks <=100 && marks >=0){// Check if the score is within the valid range (0 to 100)
    // Calculate the grade based on the marks
    let grade = '';
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

}else{// if the score does not follow the above conditions , display an error message
    console.log('enter valid marks')
}
