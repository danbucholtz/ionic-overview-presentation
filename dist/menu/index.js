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
var ionic_angular_1 = require('ionic-angular');
var Page1 = (function () {
    function Page1(menu) {
        this.menu = menu;
        this.menu1Active();
    }
    Page1.prototype.menu1Active = function () {
        this.activeMenu = 'menu1';
        this.menu.enable(true, 'menu1');
        this.menu.enable(false, 'menu2');
    };
    Page1.prototype.menu2Active = function () {
        this.activeMenu = 'menu2';
        this.menu.enable(false, 'menu1');
        this.menu.enable(true, 'menu2');
    };
    Page1 = __decorate([
        ionic_angular_1.Page({ templateUrl: 'page1.html' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_angular_1.MenuController !== 'undefined' && ionic_angular_1.MenuController) === 'function' && _a) || Object])
    ], Page1);
    return Page1;
    var _a;
}());
var ApiDemoApp = (function () {
    function ApiDemoApp() {
        this.rootView = Page1;
    }
    ApiDemoApp = __decorate([
        ionic_angular_1.App({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ApiDemoApp);
    return ApiDemoApp;
}());