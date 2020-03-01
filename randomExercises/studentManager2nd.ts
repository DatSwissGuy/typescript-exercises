// Challenge description (part 1): 
// Als Lehrer einer Schule möchte ich ein
// Programm um meine Schüler inkl. deren Noten zu erfassen. Die Schüler sollen
// mit Vorname & Nachname erfasst werden können. Nachdem ich meine Schüler
// erfasst habe, soll das Program Abfragen auf einzelne Noten erlauben. Dabei
// müssen die Schüler nach Vorname & Nachname sortiert ausgegeben werden (Zuerst
// nach Nachname). Schreibe eine Klasse die das hinzufügen von Schüler und das
// Abfragen von einzelnen Noten als Funktionen möglich macht. Ich möchte zudem
// die Qualität durch Unit Tests sicherstellen.

// Challenge description (part 2):
// Dein Programm kam bei der Schule sehr gut an. Die Schule ist sehr daran
// Interessiert dass das Tool weiterentwickelt wird. Ein Lehrer konnte schon
// ziemlich konkret sagen, wie er das Tool zukünftig nutzen möchten. Dabei
// spielen Ihm die Erfassung & Durchführung von Prüfungen/Examen eine
// wesentliche Rolle. Später möchte er daraus Analysen ziehen können welche
// Studenten welche Prüfung geschrieben und welche Note sie haben.

// Eine Prüfung enthält daher einen Namen, ein Datum (wann sie geschrieben
// worden ist), sowie die Note und den Studenten. Die Logik für die Erfassung
// von Studenten und die Abfrage nach individuellen Noten soll bestehen bleiben.
// Neu soll es möglich sein Prüfungen zu bestehenden Studenten zu erfassen.
// Zudem soll es möglich sein alle Studenten inkl. der Note die eine Prüfung
// geschrieben haben, abzufragen.

// Erweitere dein Programm so um die neuen Anforderungen zu realisieren.

// helper functions
function swissDateFormat(date: Date){
    let day = date.getDate().toString();
    let monthOneDigit = (date.getMonth()+1).toString();
    let month = monthOneDigit.padStart(2,'0');
    let year = date.getFullYear();
    let swissDate = `${day}.${month}.${year}`
    return swissDate;
}

// describing character: use an interface, implicits type
interface Grade {
    student: Student,
    exam: Exam,
    grade: GradeType,
}

interface Student {
    id: string,
    firstName: string,
    lastName: string,
}

interface Exam {
    id: string,
    name: string,
    date?: Date,
}

// describes / defines type values for example, ->union type
type GradeType = 1 | 2 | 3 | 4 | 5 | 6;

class StudentManager {
    private students: Student[] = [];
    private exams: Exam[] = [];
    private grades: Grade[] = [];

    addStudent(student: Student): void {
        this.students.push(student);
    }

    addStudentByName(id: string, firstName: string, lastName: string): void {
        this.addStudent({ id: id, firstName: firstName, lastName: lastName });
    }

    getStudentById(id: string): Student | undefined {
        return this.students.find((student: Student) => student.id === id);
    }
    

    addExam(exam: Exam): void {
        this.exams.push(exam);
    }

    addExamByName(id: string, name: string, date: Date) {
        this.addExam({ id: id, name: name, date: date });
    }

    getExamById(id: string): Exam | undefined {
        return this.exams.find((exam: Exam) => exam.id === id);
    }

    addGrade(studentId: string, examId: string, grade: GradeType): void {
        const student: Student | undefined = this.getStudentById(studentId);
        const exam: Exam | undefined = this.getExamById(examId);
        if (student && exam) {
            this.grades.push({ student: student, exam: exam, grade: grade });
        }
    }

    getAllStudentsByExamId(id: string) {
        const result = this.grades.filter((exammId: Grade) => exammId.exam.id === id)
                                  .sort((a, b) => a.student.lastName.localeCompare(b.student.lastName) ||
                                  a.student.firstName.localeCompare(b.student.firstName));
        console.log(result);
        return result;
    }

    getAllStudentsWithGrade(grade: GradeType): Student[] {
        let result = this.grades.filter((gradevalue: Grade) => gradevalue.grade === grade)
            .map((grades: Grade) => grades.student)
            .sort((a, b) => a.lastName.localeCompare(b.lastName) ||
                a.firstName.localeCompare(b.firstName));
        return result;
    };
}
export default StudentManager;