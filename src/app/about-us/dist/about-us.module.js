"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AboutUsModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var about_us_component_1 = require("./components/about-us/about-us.component");
var about_us_router_module_1 = require("./about-us-router.module");
var material_module_1 = require("../material/material.module");
var AboutUsModule = /** @class */ (function () {
    function AboutUsModule() {
    }
    AboutUsModule = __decorate([
        core_1.NgModule({
            declarations: [about_us_component_1.AboutUsComponent],
            imports: [
                common_1.CommonModule, about_us_router_module_1.AboutUsRoutingModule, material_module_1.MaterialModule
            ]
        })
    ], AboutUsModule);
    return AboutUsModule;
}());
exports.AboutUsModule = AboutUsModule;
