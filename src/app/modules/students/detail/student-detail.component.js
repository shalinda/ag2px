System.register(["@angular/core", "@angular/router", "@angular/common", "@angular/forms", "../model/student", "../service/student.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, common_1, forms_1, student_1, student_service_1, StudentDetailComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (student_1_1) {
                student_1 = student_1_1;
            },
            function (student_service_1_1) {
                student_service_1 = student_service_1_1;
            }
        ],
        execute: function () {
            StudentDetailComponent = (function () {
                function StudentDetailComponent(studentService, route, location, genderList, router) {
                    this.studentService = studentService;
                    this.route = route;
                    this.location = location;
                    this.genderList = genderList;
                    this.router = router;
                    this.formErrors = {
                        'name': '',
                        'gender': ''
                    };
                    this.validationMessages = {
                        'name': {
                            'required': 'Name is required.',
                            'minlength': 'Name must be at least 4 characters long.',
                            'maxlength': 'Name cannot be more than 24 characters long.',
                            'forbiddenName': 'Someone named "Bob" cannot be a hero.'
                        },
                        'gender': {
                            'required': 'Power is required.'
                        }
                    };
                }
                StudentDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.switchMap(function (params) { return _this.studentService.getStudentById(+params['id']); }).subscribe(function (student) {
                        if (student == null) {
                            _this.newStudent();
                        }
                        else {
                            _this.student = JSON.parse(JSON.stringify(student));
                        }
                    });
                };
                StudentDetailComponent.prototype.ngAfterViewChecked = function () {
                    this.formChanged();
                };
                StudentDetailComponent.prototype.formChanged = function () {
                    var _this = this;
                    if (this.currentForm === this.studentForm) {
                        return;
                    }
                    this.studentForm = this.currentForm;
                    if (this.studentForm) {
                        this.studentForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
                    }
                };
                StudentDetailComponent.prototype.onValueChanged = function (data) {
                    if (!this.studentForm) {
                        return;
                    }
                    var form = this.studentForm.form;
                    for (var field in this.formErrors) {
                        // clear previous error message (if any)
                        this.formErrors[field] = '';
                        var control = form.get(field);
                        if (control && control.dirty && !control.valid) {
                            var messages = this.validationMessages[field];
                            for (var key in control.errors) {
                                this.formErrors[field] += messages[key] + ' ';
                            }
                        }
                    }
                };
                StudentDetailComponent.prototype.add = function () {
                    this.student.id = this.studentService.getNextStudentId();
                    this.studentService.add(this.student);
                    this.router.navigate(['students']);
                };
                StudentDetailComponent.prototype.goBack = function () {
                    this.location.back();
                };
                StudentDetailComponent.prototype.update = function () {
                    this.studentService.update(this.student);
                    this.router.navigate(['students']);
                };
                StudentDetailComponent.prototype.delete = function () {
                    this.studentService.delete(this.student.id);
                    this.router.navigate(['students']);
                };
                StudentDetailComponent.prototype.newStudent = function () {
                    this.student = new student_1.Student(this.studentService.getNextStudentId(), '', '');
                };
                return StudentDetailComponent;
            }());
            __decorate([
                core_1.ViewChild('studentForm'),
                __metadata("design:type", forms_1.NgForm)
            ], StudentDetailComponent.prototype, "currentForm", void 0);
            StudentDetailComponent = __decorate([
                core_1.Component({
                    moduleId: __moduleName,
                    selector: 'student-detail',
                    templateUrl: 'student-detail.component.html',
                    styleUrls: ['student-detail.component.css']
                }),
                __param(3, core_1.Inject('genderList')),
                __metadata("design:paramtypes", [student_service_1.StudentService,
                    router_1.ActivatedRoute,
                    common_1.Location, Object, router_1.Router])
            ], StudentDetailComponent);
            exports_1("StudentDetailComponent", StudentDetailComponent);
        }
    };
});
//# sourceMappingURL=student-detail.component.js.map