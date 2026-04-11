

abstract class Content {
    public readonly title: string;
    public readonly author: string;
    private published: boolean = false;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    public publish() {
        this.published = true;
    }

    protected isPublished(): boolean {
        return this.published;
    }

    // Every content type must say what type it is
    abstract getType(): string;
  }


  class Assignment extends Content{
    private dueDate : Date;

    constructor(title : string, author : string, dueDate : Date) {
      super(title, author);
      this.dueDate = dueDate;
    }

      public setDueDate(newDate : Date, isInstructor : boolean) {
          if (!this.isPublished() && isInstructor) {
              this.dueDate = newDate;
          } else {
              throw new Error("Cannot edit due date after publishing or if not an instructor.");
          }
      }

      public getDueDate() : string {
          return this.dueDate.toISOString();
      }

    getType() : string {
      return "Assignment";
    }
  }

  const assignment = new Assignment("Math Assignment", "Prof. smith", new Date())

  assignment.setDueDate(new Date(), true);
  console.log(assignment.getDueDate());

  assignment.publish();