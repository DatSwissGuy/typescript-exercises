// Challenge description (part 1): 
// Als Lehrer einer Schule möchte ich ein Programm um
// meine Schüler inkl. deren Noten zu erfassen. Die Schüler sollen mit Vorname &
// Nachname erfasst werden können. Nachdem ich meine Schüler erfasst habe, soll
// das Program Abfragen auf einzelne Noten erlauben. Dabei müssen die Schüler
// nach Vorname & Nachname sortiert ausgegeben werden (Zuerst nach Nachname).
// Schreibe eine Klasse die das hinzufügen von Schüler und das Abfragen von
// einzelnen Noten als Funktionen möglich macht. Ich möchte zudem die Qualität
// durch Unit Tests sicherstellen.

// describing character: use an interface, implicits type
interface Student {
    id?: string,
    firstName: string,
    lastName: string,
}
interface Grade {
    student: Student, // nested stuff, neat :)
    grade: GradeType
}
// describes / defines type values for example, ->union type
type GradeType = 1 | 2 | 3 | 4 | 5 | 6;

class StudentManager {
    private grades: Grade[] = [];
    addStudent(studentParam: Student, gradeParam: GradeType): void {
        this.grades.push({ student: studentParam, grade: gradeParam });
    }

    getAllStudentsWithGrade(grade: GradeType): Student[] {
        let result = this.grades.filter((_grade: Grade) => _grade.grade === grade)
            .map((_grades: Grade) => _grades.student)
            .sort((a, b) => a.lastName.localeCompare(b.lastName) || 
                            a.firstName.localeCompare(b.firstName));
        console.log(result);
        return result;

        /* This was my initial attempt...
        let result: any = []
        this.grades.forEach(member => {
            member.grade.valueOf() === grade ? result.push(member.student) : result;
        });
        return result;
        */
    };
}
export default StudentManager;