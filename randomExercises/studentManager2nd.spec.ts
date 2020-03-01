
import StudentManager from './studentManager2nd';
// might be important to import those things
import Student from './studentManager';
import Grade from './studentManager';
import { STATUS_CODES } from 'http';

describe('studentClasses()', () => {
  let studentManager = new StudentManager();
  const date = new Date('2019-08-22T09:00:00.000Z');

  // add exams
  studentManager.addExamByName('ExEn-1', 'English', date);
  studentManager.addExamByName('ExMa-1', 'Mathe', date);
  studentManager.addExamByName('ExDe-1', 'Deutsch', date);
  studentManager.addExamByName('ExPhy-1', 'Physik', date);

  // add students and grades
  studentManager.addStudentByName('HaMu-1', 'Hans', 'Muster')
  studentManager.addGrade('HaMu-1', 'ExMa-1', 5);

  studentManager.addStudentByName('JeIb-1', 'Jennifer', 'Ibanez');
  studentManager.addGrade('JeIb-1', 'ExMa-1', 5);

  studentManager.addStudentByName('AnMu-1', 'Andreas', 'Muster');
  studentManager.addGrade('AnMu-1', 'ExDe-1', 5);

  studentManager.addStudentByName('ChBl-1', 'Christoph', 'Blocker');
  studentManager.addGrade('ChBl-1', 'ExPhy-1', 3);

  // edge case empty string?
  studentManager.addStudentByName('', '', '');

  // the date part of this test is very dumb, it actually has to pass...
  it('get exam by id', () => {
    const expectedResult = { id: 'ExMa-1', name: 'Mathe', date: date };
    expect(studentManager.getExamById('ExMa-1')).toEqual(expectedResult);
  })

  it('get student by id', () => {
    const expectedResult = { id: 'JeIb-1', firstName: 'Jennifer', lastName: 'Ibanez' }
    expect(studentManager.getStudentById('JeIb-1')).toEqual(expectedResult);
  })

  it('return all students with grade 5', () => {
    const expectedResult = [
      { id: 'JeIb-1', firstName: 'Jennifer', lastName: 'Ibanez' },
      { id: 'AnMu-1', firstName: 'Andreas', lastName: 'Muster' },
      { id: 'HaMu-1', firstName: 'Hans', lastName: 'Muster' },
    ];
    expect(studentManager.getAllStudentsWithGrade(5)).toEqual(expectedResult)
  });

  it('return all students with grade 1 (no students)', () => {
    const expectedResult: any[] = [];
    expect(studentManager.getAllStudentsWithGrade(1)).toEqual(expectedResult)
  });

  it('get all students and grades by exam id', () => {
    const expectedResult = [
      {
        student: { id: 'JeIb-1', firstName: 'Jennifer', lastName: 'Ibanez', },
        exam: { id: 'ExMa-1', name: 'Mathe', date: date },
        grade: 5
      },
      {
        student: { id: 'HaMu-1', firstName: 'Hans', lastName: 'Muster' },
        exam: { id: 'ExMa-1', name: 'Mathe', date: date },
        grade: 5
      }
    ];
    expect(studentManager.getAllStudentsByExamId('ExMa-1')).toEqual(expectedResult)
  });

  /*
  it('return all students from a search string', () => {
    const expectedResult = [
      {id: 'AnMu-1', firstName: 'Andreas', lastName: 'Muster'},
      {id: 'HaMu-1', firstName: 'Hans', lastName: 'Muster'},
    ];
    expect(studentManager.getStudentsByName('Muster')).toEqual(expectedResult)
  });
  */

  /*
  // edge case empty string?
  it("testcase for an empty string entry!", () => {
    const expectedResult: any[] = [];
    expect(studentManager.getAllStudentsWithGrade(2)).toEqual(expectedResult)
  });
  */

})

