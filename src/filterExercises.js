import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function named getStudentsInCohort
// It should accept one integer parameter named `cohort`
// It should return an array of just the students who are in that cohort
export const getStudentsInCohort = (cohort) => {
    const studentArray = students.filter((student) => {
        return student.cohort === cohort
    });
    return studentArray;
};

// Export a function called getFullTimeStudents
// It should not accept any parameters
// It should return an array of only the full time students

export const getFullTimeStudents = () => {
    const fullTimeStudents = students.filter((student) => {
        return student.fullTime === true;
    })
    return fullTimeStudents;
};

// Export a function called getStudentsByInstructorId
// It should accept one integer parameter name `instructorId`
// It should return an array of students with that instructor

export const getStudentsByInstructorId = (instructorId) => {
    const studentInstuctor = students.filter((students) => {
        return students.instructorId === instructorId;
    })
        return studentInstuctor;
};

// Export a function called getPolyglotStudents
// It should accept one integer parameter named `languageCount`
// It should return an array of students who know as many (or more) languages than `languageCount`
// Ex: If the number 2 is passed to the function, only the students who know 2 or more languages should be returned

export const getPolyglotStudents = (languageCount) => {
    const foundLanguage = students.filter((studentLanguage) => {
        return studentLanguage.languages.length >= languageCount;
    })
    return foundLanguage;
};
 
// Export a function called getAvailableInstructors
// It should not accept any parameters
// It should return an array of instructors that don't have any students


export const getAvailableInstructors = () => {
    const noClasses = students.filter((instructor) => {
        return instructor.instructorId
    })
        return noClasses;
};
// in progress

// Export a function called getStudentsByLanguage
// It should accept one string parameter named `language`
// It should return an array of students who know the given language
// HINT: In addition to the `filter` method, you might also look up the `some` method

export const getStudentsByLanguage = (language) => {
    const studentLanguages = students.filter((student) => {
        return student.languages === true
    })
        return studentLanguages;
};

/******** ADVANCED CHALLENGE ********/
/******** Only do this if all other tests are passing ****/
/******** To test, uncomment the code at the bottom of tests/filter.spec.js  *****/

// Export a function called getStudentsByLanguages
// It should accept an array of strings as a parameter named `languages`
// It should return an array of students who know ALL of the given languages
// Ex: getStudentsByLanguages(["Javascript", "C#"])
let languageArray = [];

const getStudentsByLanguages = (languages) => {
    const givenLanguage = students.filter((student) => {
        return student.languages 
    })
        return languageArray;
};
// in progress