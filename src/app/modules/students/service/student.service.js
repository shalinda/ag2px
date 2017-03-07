System.register(["../service/student-mock.data"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var student_mock_data_1, StudentService;
    return {
        setters: [
            function (student_mock_data_1_1) {
                student_mock_data_1 = student_mock_data_1_1;
            }
        ],
        execute: function () {
            StudentService = (function () {
                function StudentService() {
                }
                StudentService.prototype.getStudentList = function () {
                    return Promise.resolve(student_mock_data_1.STUDENTS);
                };
                StudentService.prototype.getStudentById = function (id) {
                    return this.getStudentList().then(function (students) { return students.find(function (stud) { return stud.id === id; }); });
                };
                StudentService.prototype.add = function (student) {
                    student_mock_data_1.STUDENTS.push(student);
                };
                StudentService.prototype.getNextStudentId = function () {
                    return student_mock_data_1.STUDENTS.length + 1;
                };
                StudentService.prototype.delete = function (id) {
                    for (var i = 0; i < student_mock_data_1.STUDENTS.length; i++) {
                        if (student_mock_data_1.STUDENTS[i].id == id) {
                            student_mock_data_1.STUDENTS.splice(i, 1);
                            break;
                        }
                    }
                };
                StudentService.prototype.update = function (student) {
                    for (var i = 0; i < student_mock_data_1.STUDENTS.length; i++) {
                        if (student_mock_data_1.STUDENTS[i].id == student.id) {
                            student_mock_data_1.STUDENTS[i].name = student.name;
                            student_mock_data_1.STUDENTS[i].gender = student.gender;
                            break;
                        }
                    }
                };
                return StudentService;
            }());
            exports_1("StudentService", StudentService);
        }
    };
});
