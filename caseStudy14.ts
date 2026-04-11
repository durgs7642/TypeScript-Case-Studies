
class FeedbackBox<T>{
    private feedbacks:T[] = []; 

    addFeedback(feedback: T) {
        this.feedbacks.push(feedback);
    }
    getAllFeedback() : T[] {
        return [...this.feedbacks];
      }
}

const quizFeedback = new FeedbackBox<string>();
quizFeedback.addFeedback("Great quiz!");
quizFeedback.addFeedback("Too hard!");
console.log(quizFeedback.getAllFeedback()); // ["Great quiz!", "Too hard!"]

// For lesson feedback (as objects)
type LessonFeedback = { rating: number; comment: string };
const lessonFeedback = new FeedbackBox<LessonFeedback>();
lessonFeedback.addFeedback({ rating: 5, comment: "Loved it!" });
console.log(lessonFeedback.getAllFeedback());



function getFirstItem<T>(items: T[]): T | undefined {
    return items[0];
}

const firstQuizFeedback = getFirstItem(quizFeedback.getAllFeedback()); 
console.log(firstQuizFeedback); 

const firstLessonFeedback = getFirstItem(lessonFeedback.getAllFeedback());
console.log(firstLessonFeedback); 