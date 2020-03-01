
import StudentManager from './studentManager';
// might be important to import those things
import Student from './studentManager';
import Grade from './studentManager';

describe('studentClasses()', () => {
  let studentManager = new StudentManager();
  // add some objects a.k.a students
  studentManager.addStudent({firstName: 'Hans', lastName: 'Muster'}, 5);
  studentManager.addStudent({firstName: 'Andreas', lastName: 'Muster'}, 5);
  studentManager.addStudent({firstName: 'Thomas', lastName: 'Anderson'}, 6);
  studentManager.addStudent({firstName: 'Christoph', lastName: 'Blocker'}, 3);
  studentManager.addStudent({firstName: 'Jennifer', lastName: 'Ibanez'}, 5);
  // edge case empty string?
  studentManager.addStudent({firstName: '', lastName: ''}, 2);
    it("return all students with grade 5", () => {
        const expectedResult = [
          {firstName: 'Jennifer', lastName: 'Ibanez'},
          {firstName: 'Andreas', lastName: 'Muster'},
          {firstName: 'Hans', lastName: 'Muster'},
        ];
        expect(studentManager.getAllStudentsWithGrade(5)).toEqual(expectedResult)     
      });

      it("return all students with grade 1 (no students)", () => {
        const expectedResult: any[] = [];
        expect(studentManager.getAllStudentsWithGrade(1)).toEqual(expectedResult)
      });
      /*
      // edge case empty string?
      it("testcase for an empty string entry!", () => {
        const expectedResult: any[] = [];
        expect(studentManager.getAllStudentsWithGrade(2)).toEqual(expectedResult)
      });
      */

})

