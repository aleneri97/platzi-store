"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var material_module_1 = require("../material/material.module");
var contact_component_1 = require("./components/contact/contact.component");
var contact_router_module_1 = require("./contact-router.module");
var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        core_1.NgModule({
            declarations: [contact_component_1.ContactComponent],
            imports: [contact_router_module_1.ContactRoutingModule, common_1.CommonModule, material_module_1.MaterialModule]
        })
    ], ContactModule);
    return ContactModule;
}());
exports.ContactModule = ContactModule;
