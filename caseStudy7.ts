

enum Role {Doctor, Nurse, Admin}    

interface Staff {
    id: number,
    name: string, 
    role: Role,
}

let staff : Staff[] = [
    {id:1, name: "Alice", role: Role.Doctor},
    {id:2, name: "Bob", role: Role.Nurse},
    {id:3, name: "John", role: Role.Admin},
] 

 function staffSummary(staff: Staff[]): void {
    for(let member of staff) {
        console.log(` Name: ${member.name}, Role: ${Role[member.role]}`);
    }
 };

 staffSummary(staff);