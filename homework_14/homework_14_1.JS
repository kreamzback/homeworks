function Student(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.courses = [];
  this.grades = {};
  this.attendance = {};

  this.addCourse = function (course) {
    if (!this.courses.includes(course)) {
      this.courses.push(course);
      this.grades[course] = [];
      this.attendance[course] = [];
    }
  };

  this.addGrade = function (course, grade) {
    if (this.courses.includes(course)) {
      this.grades[course].push(grade);
    }
  };

  this.addAttendance = function (course, isPresent) {
    if (this.courses.includes(course)) {
      this.attendance[course].push(isPresent);
    }
  };

  this.getAverageGrade = function (course) {
    if (this.grades[course] && this.grades[course].length > 0) {
      const sum = this.grades[course].reduce((acc, grade) => acc + grade, 0);
      return sum / this.grades[course].length;
    }
    return 0;
  };

  this.getAverageAttendance = function (course) {
    if (this.attendance[course] && this.attendance[course].length > 0) {
      const presentDays = this.attendance[course].filter(day => day === true).length;
      return presentDays / this.attendance[course].length;
    }
    return 0;
  };
}

function Group() {
  this.students = [];

  this.addStudent = function (student) {
    this.students.push(student);
  };

  this.removeStudent = function (student) {
    this.students = this.students.filter(s => s !== student);
  };

  this.getPerformanceRanking = function (course) {
    return this.students
      .map(student => ({
        student: `${student.firstName} ${student.lastName}`,
        averageGrade: student.getAverageGrade(course),
      }))
      .sort((a, b) => b.averageGrade - a.averageGrade);
  };

  this.getAttendanceRanking = function (course) {
    return this.students
      .map(student => ({
        student: `${student.firstName} ${student.lastName}`,
        averageAttendance: student.getAverageAttendance(course),
      }))
      .sort((a, b) => b.averageAttendance - a.averageAttendance); // Сортуємо від більшого до меншого
  };
}

const student1 = new Student('Іван', 'Петров', 2000);
const student2 = new Student('Олена', 'Сидоренко', 2001);

student1.addCourse('Математика');
student2.addCourse('Математика');

student1.addGrade('Математика', 85);
student1.addGrade('Математика', 90);
student2.addGrade('Математика', 95);
student2.addGrade('Математика', 88);

student1.addAttendance('Математика', true);
student1.addAttendance('Математика', false);
student2.addAttendance('Математика', true);
student2.addAttendance('Математика', true);

const group = new Group();
group.addStudent(student1);
group.addStudent(student2);

console.log('Рейтинг за успішністю:');
console.log(group.getPerformanceRanking('Математика'));

console.log('Рейтинг за відвідуваністю:');
console.log(group.getAttendanceRanking('Математика'));
