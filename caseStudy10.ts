
function checkSign(num: number): void {
    if(num >0){
        console.log(`${num} is positive`);
    }
}

function evenOrOdd(num : number) : void {
    if( num %2 === 0) {
        console.log(`${num} is even`);
    }
    else {
        console.log(`${num} is odd`);
    }
}

function getGrade(score: number) : string {
    if(score >= 90){
        return "A";
    }
    else if(score >= 80){
        return "B";
    }
    else if(score >= 70){
        return "C";
    }
    else if(score >= 60){
        return "D";
    }
    else {
        return "F";
    }

}


function provideFeedback(grade: string) : void {
    switch(grade){
        case "A": console.log("Excellent work!");
                  break;
        case "B":
            console.log("Good job!");
            break;
        case "C":
            console.log("Satisfactory performance.");
            break;
        case "D":
            console.log("You need to improve.");
            break;
        case "F":
            console.log("Failed. Please review the material.");
            break;
        default:
            console.log("Invalid grade.");
    }
}