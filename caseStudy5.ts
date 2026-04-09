
let surveyAnswers: { [key: number]: any } = {};

function recordAnswer(questionId:number, answer:any): void{
    surveyAnswers[questionId] = answer;
}

recordAnswer(1, "Yes");
recordAnswer(2, 42);
recordAnswer(3, [ "Option A", "Option B", "Option C"]);

for(let ans in surveyAnswers){
    console.log(`QuestionId ${ans}:`,surveyAnswers[ans]); 
}   

