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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var User_1 = require("../shared/model/User");
var UserFormComponent = (function () {
    function UserFormComponent() {
        this.userCreated = new core_1.EventEmitter();
        this.newUser = new User_1.User();
        this.active = true;
    }
    UserFormComponent.prototype.onSubmit = function () {
        var _this = this;
        //user created event
        this.userCreated.emit({ user: this.newUser });
        // console.log('working');
        //console.log(this.newUser);
        this.newUser = new User_1.User(); //to clear fields after submitting
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], UserFormComponent.prototype, "userCreated", void 0);
    UserFormComponent = __decorate([
        core_1.Component({
            selector: 'user-form',
            styles: ["\n    form   {\n      padding: 10px;\n      background: #ECF0F1;\n      border-radius: 3px;\n      margin-bottom: 30px;\n    }\n  "],
            template: "\n    <form #form=\"ngForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"active\">\n\n    <!-- {{form.valid}} you can use it here for developing purposewill show true or false for the form on te webpage     -->\n      <div class=\"form-group\" [ngClass]=\"{'has-error':name.invalid && name.touched}\">\n        <input type=\"text\" class=\"form-control\" \n        name=\"name\" placeholder=\"Name\" required\n        [(ngModel)]=\"newUser.name\" #name=\"ngModel\">\n        <span class=\"help-block\" *ngIf=\"name.invalid && name.touched\">Name is required</span>\n      </div>\n      <div class=\"form-group\"  [ngClass]=\"{'has-error':username.invalid && username.touched}\">\n        <input type=\"text\" class=\"form-control\" \n        name=\"username\" placeholder=\"Username\" required\n        [(ngModel)]=\"newUser.username\" #username=\"ngModel\">\n        <span class=\"help-block\" *ngIf=\"username.invalid && username.touched\">Username is required</span>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-lg btn-block btn-primary\"\n      [disabled]=\"form.invalid\">Create User</button>\n\n    </form>\n  "
        })
    ], UserFormComponent);
    return UserFormComponent;
}());
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map