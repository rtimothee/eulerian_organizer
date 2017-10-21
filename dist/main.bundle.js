webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"body\">\n  <div id=\"header\">\n    <h1>{{title}}!</h1>\n  </div>\n  <div id=\"container\">\n    <app-cleaner>Loading</app-cleaner>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-family: sans-serif; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Eulerian Organizer';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cleaner_cleaner_component__ = __webpack_require__("../../../../../src/app/cleaner/cleaner.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__cleaner_cleaner_component__["a" /* CleanerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/cleaner/cleaner.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"cleaner\">\n\n  <form [formGroup]=\"eaForm\" (ngSubmit)=\"onSubmit(eaForm)\">\n    <textarea\n      name=\"req\"\n      [formControl]=\"eaForm.controls['req']\">\n    </textarea>\n    <input type=\"submit\" value=\"Go\"/>\n  </form>\n\n<!-- *ngIf=\"result\" -->\n  <div *ngIf=\"result\">\n    <div  id=\"result\">\n      <h2>Result</h2>\n      <textarea>{{result}}</textarea>\n    </div>\n    <div  id=\"details\">\n      <h2>Details</h2>\n      <table>\n        <tr>\n          <th>Name</th>\n          <th>Value</th>\n        </tr>\n        <tr *ngFor=\"let i of JSObject.keys(details)\">\n          <td>{{i}}</td>\n          <td>{{URI_decode(details[i])}}</td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/cleaner/cleaner.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#cleaner form {\n  width: 100%;\n  margin: auto;\n  margin-bottom: 30px; }\n\n#cleaner #result, #cleaner #details {\n  width: 45%;\n  display: inline-block;\n  vertical-align: top; }\n\n#cleaner #result textarea {\n  height: 250px; }\n\n#cleaner #details table {\n  border-collapse: collapse;\n  width: 90%; }\n  #cleaner #details table, #cleaner #details table th, #cleaner #details table td {\n    border: 1px solid black; }\n  #cleaner #details table th {\n    font-weight: bold; }\n  #cleaner #details table td {\n    text-align: left;\n    padding: 5px 10px;\n    box-sizing: border-box; }\n\n#cleaner textarea {\n  width: 80%;\n  height: 150px;\n  max-width: 860px; }\n\n#cleaner input[type='submit'] {\n  display: block;\n  margin: auto;\n  border: none;\n  font-size: 20px;\n  background: #888;\n  color: #FFF;\n  padding: 5px 20px; }\n  #cleaner input[type='submit']:hover {\n    background: #666;\n    cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cleaner/cleaner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleanerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CleanerComponent = (function () {
    function CleanerComponent(fb) {
        this.JSObject = Object;
        this.URI_decode = function (str) {
            return decodeURIComponent(str);
        };
        this.eaForm = fb.group({
            'req': ''
        });
    }
    CleanerComponent.prototype.ngOnInit = function () { };
    CleanerComponent.prototype.onSubmit = function (form) {
        this.result = this.cleaner(form.value.req);
    };
    CleanerComponent.prototype.cleaner = function (request) {
        var tab_request = request.split('?');
        var params = this.sort_params(this.extract_params(tab_request[1]));
        params = this.organize_products(params);
        this.details = params;
        return this.construct_request(tab_request[0], params);
    };
    CleanerComponent.prototype.extract_params = function (str_params) {
        var params = str_params.split("&");
        var new_format = [];
        for (var i in params) {
            var param_tab = params[i].split('=');
            if (param_tab[0] && param_tab[0].match(/\w+/))
                new_format[param_tab[0]] = param_tab[1];
        }
        return new_format;
    };
    CleanerComponent.prototype.sort_params = function (params) {
        var ordered = {};
        Object.keys(params).sort().forEach(function (key) {
            ordered[key] = params[key];
        });
        return ordered;
    };
    CleanerComponent.prototype.organize_products = function (params) {
        var products = this.separate_products(params);
        var sort_params = [];
        for (var i_1 in params) {
            if (!i_1.match(/prd/g)) {
                sort_params[i_1] = params[i_1];
            }
        }
        for (var i = 0; i < products.length; i++) {
            sort_params = Object.assign({}, sort_params, products[i]);
        }
        return sort_params;
    };
    CleanerComponent.prototype.separate_products = function (params) {
        var products = [];
        var prdparams = [];
        var prd_regex = /prd([a-z])([0-9])/g;
        var prdparams_regex = /prdp([0-9])([kd])([0-9])/g;
        for (var p in params) {
            if (p.match(prd_regex)) {
                prd_regex.lastIndex = 0;
                var extract = prd_regex.exec(p);
                var i = extract[2];
                var letter = extract[1];
                //new product
                if (typeof products[i] == 'undefined') {
                    products[i] = [];
                    prdparams[i] = [];
                }
                //separate prdp and others
                if (letter === 'p') {
                    prdparams_regex.lastIndex = 0;
                    var pp_ex = prdparams_regex.exec(p);
                    if (pp_ex[2] == 'k') {
                        prdparams[i][p] = params[p]; //key
                        prdparams[i]['prdp' + pp_ex[1] + 'd' + pp_ex[3]] = params['prdp' + pp_ex[1] + 'd' + pp_ex[3]]; //value
                    }
                }
                else {
                    products[i][p] = params[p];
                }
            }
        }
        //fusion
        for (var i_2 in products) {
            products[i_2] = Object.assign({}, products[i_2], prdparams[i_2]);
        }
        return products;
    };
    CleanerComponent.prototype.construct_request = function (domain, params) {
        var array_params = [];
        for (var i in params) {
            array_params.push(i + "=" + params[i]);
        }
        return domain + '?' + array_params.join('&');
    };
    return CleanerComponent;
}());
CleanerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-cleaner',
        template: __webpack_require__("../../../../../src/app/cleaner/cleaner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cleaner/cleaner.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object])
], CleanerComponent);

var _a;
//# sourceMappingURL=cleaner.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map