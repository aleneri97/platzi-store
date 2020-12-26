"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var demo_component_1 = require("./demo/demo.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var layout_component_1 = require("./layout/layout.component");
var routes = [
    {
        path: "",
        component: layout_component_1.LayoutComponent,
        children: [
            {
                path: "",
                redirectTo: "/home",
                pathMatch: "full"
            },
            {
                path: "home",
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require("./home/home.module"); }).then(function (m) { return m.HomeModule; });
                }
            },
            {
                path: "products",
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require("./products/products.module"); }).then(function (m) { return m.ProductsModule; });
                }
            },
            {
                path: "contact",
                // canActivate: [AdminGuard],
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require("./contact/contact.module"); }).then(function (m) { return m.ContactModule; });
                }
            },
            {
                path: "about",
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require("./about-us/about-us.module"); }).then(function (m) { return m.AboutUsModule; });
                }
            },
            {
                path: "demo",
                component: demo_component_1.DemoComponent
            },
        ]
    },
    {
        path: "**",
        component: page_not_found_component_1.PageNotFoundComponent
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, {
                    preloadingStrategy: router_1.PreloadAllModules
                })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
