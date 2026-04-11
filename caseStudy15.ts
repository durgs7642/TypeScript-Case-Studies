type Instructor = { id: string; coursesTaught: number };
type Admin = { id: string; accessLevel: "basic" | "super" };

type InstructorOrAdmin = Instructor | Admin;   //---->>>

type Assignment = { title: string; dueDate: Date; points: number; }

type ReadonlyAssignment = Readonly<Assignment>; //// ----->>>

type LearnerStats = { quizzes: number; videos: number; assignments: number; }

type StatsAsStrings = {
    [k in keyof LearnerStats]: string;
}                                            ///------->>>>


const user1: InstructorOrAdmin = { id: "1", coursesTaught: 5 };
const user2: InstructorOrAdmin = { id: "2", accessLevel: "super" };

const task : ReadonlyAssignment = {
    title: "Math Homework",
    dueDate: new Date(),
    points: 100
};

const stats: StatsAsStrings={
    quizzes : "10",
    videos : "5",
    assignments : "3"
}

console.log(user1, "\n", user2, "\n", task, "\n", stats);