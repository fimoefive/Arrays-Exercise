import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function named getStudentNames
// It should not accept any parameters`
// It should return an array of strings. Each string should be the full name of the student
// let stringArray = [];
export const getStudentNames = () => {
    const studentByName = students.map((student) => {
      return student.firstName.toUpperCase() + " " + student.lastName.toUpperCase()
    })
    return studentByName;
};
console.log(getStudentNames);
// Export a function named StudentList
// It should not accept any parameters
// It should return a single HTMLString that contains a <div> element for every student that looks like the following:
// Ex:
/*
  <div>
    <h1>Summer Smith</h1>
    <h2>Cohort 43</h2>
  </div>
*/
let HTMLString = [];
export const StudentList = () => {
  const studentString = students.map((student) => {
    const fullName = student.firstName.toUpperCase()  + " " + student.lastName.toUpperCase() 
    return HTMLString += `
      <div>
      <h1>Summer Smith</h1>
      <h2>Cohort 43</h2>
      </div>
    `
  })
  return studentString.join(" ");
};
console.log(StudentList);