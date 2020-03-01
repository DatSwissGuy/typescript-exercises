// This is a small "student manager" written in TypeScript

// helper functions
function swissDateFormat(date: Date){
    let day = date.getDate().toString();
    let monthOneDigit = (date.getMonth()+1).toString();
    let month = monthOneDigit.padStart(2,'0');
    let year = date.getFullYear();
    let swissDate = `${day}.${month}.${year}`
    return swissDate;
}

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

    getStudentsByName(search: string): Student[] | undefined {
        let result = undefined;
        return result;
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


    getWrittenExams(search: string){
        let result = undefined
        return result;
    }


    //getWrittenExamsByName(){}

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
