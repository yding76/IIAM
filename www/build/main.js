webpackJsonp([6],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddmedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AddmedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddmedPage = /** @class */ (function () {
    function AddmedPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddmedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddmedPage');
    };
    AddmedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addmed',template:/*ion-inline-start:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/pages/addmed/addmed.html"*/'<!--\n  Generated template for the AddmedPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>Add a medication to your profile</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <!--Generates medication name and dose input lines-->\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Medication Name:</ion-label>\n        <ion-input type="text" value=""></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label floating>Dose:</ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n    </ion-list>\n  \n    <!--Generates grid layout for medication dose-->\n    <ion-grid>\n        <ion-row align-items-center >\n          <ion-col >\n              <h1 ion-text color="primary">Unit</h1>\n          </ion-col>\n          <ion-col>\n              <button ion-button full>mg</button>\n          </ion-col>\n          <ion-col>\n              <button ion-button full>mg/ml</button>\n          </ion-col>\n          <ion-col>\n              <button ion-button full>mcg/ml</button>\n          </ion-col>\n          <ion-col>\n              <button ion-button full>U/ml</button>\n          </ion-col>\n        </ion-row >\n        <ion-row align-items-center>\n          <ion-col>\n              \n          </ion-col>\n          <ion-col>\n              <button ion-button full>Other</button>\n          </ion-col>\n          <ion-col>\n              <ion-list>\n                  <ion-item>\n                    <ion-label floating>Specify other unit:</ion-label>\n                    <ion-input type="text" value=""></ion-input>\n                  </ion-item>\n                </ion-list>\n          </ion-col>\n          <ion-col>\n              <!--Filler slot-->\n          </ion-col>\n          <ion-col>\n              <!--Filler slot-->\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n    <!--Generates grid layout for administration route-->\n    <ion-grid>\n        <ion-row align-items-center >\n          <ion-col >\n              <h1 ion-text color="primary">Route:</h1>\n          </ion-col>\n          <ion-col>\n              <button ion-button full>Oral</button>\n          </ion-col>\n          <ion-col>\n              <button ion-button full>Injection</button>\n          </ion-col>\n          <ion-col>\n              <button ion-button full>Ocular</button>\n          </ion-col>\n          <ion-col>\n              <button ion-button full>Otic</button>\n          </ion-col>\n        </ion-row >\n  \n        <ion-row align-items-center>\n          <ion-col>\n              <!--Filler slot-->\n          </ion-col>\n          <ion-col>\n              <button ion-button full>Inhaled</button>\n          </ion-col>\n          <ion-col>\n              <button ion-button full>Topical</button>\n          </ion-col>\n          <ion-col>\n              <button ion-button full>Other</button>\n          </ion-col>\n          <ion-col>\n              <ion-list>\n                  <ion-item>\n                    <ion-label floating>Specify other route:</ion-label>\n                    <ion-input type="text" value=""></ion-input>\n                  </ion-item>\n                </ion-list>\n          </ion-col>\n        </ion-row>\n  \n    \n      </ion-grid>\n  \n  <!--Generates grid layout for frequency-->\n  <ion-grid>\n      <ion-row align-items-center >\n          <ion-col >\n              <h1 ion-text color="primary">Frequency (how often do you take this medication):</h1>\n          </ion-col>\n      </ion-row>\n  \n      <ion-row align-items-center >\n          <ion-col >\n              <ion-item>\n                  <ion-label floating>Specify frequency:</ion-label>\n                  <ion-input type="text" value=""></ion-input>\n                </ion-item>\n          </ion-col>\n          <ion-col >\n              <!--Filler-->\n          </ion-col>\n      </ion-row>\n  \n  \n  \n  </ion-grid>\n  \n  <!--Creates submission button-->\n  <ion-grid>\n  <ion-row align-items-center >\n      <ion-col >\n        <!--Filler-->\n      </ion-col>\n      <ion-col >\n          <button ion-button full>Complete</button>\n      </ion-col>\n      <ion-col >\n        <!--Filler-->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </ion-content>\n'/*ion-inline-end:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/pages/addmed/addmed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AddmedPage);
    return AddmedPage;
}());

//# sourceMappingURL=addmed.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FirstPage = /** @class */ (function () {
    function FirstPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FirstPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FirstPage');
    };
    FirstPage.prototype.openHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    FirstPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-first',template:/*ion-inline-start:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/pages/first/first.html"*/'<!--\n  Generated template for the FirstPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label fixed>Username</ion-label>\n      <ion-input type="text" value=""></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label fixed>Password</ion-label>\n      <ion-input type="password"></ion-input>\n    </ion-item>\n    \n    <button ion-button clear>View terms and conditions</button>\n    \n    <ion-item no-lines >\n      <ion-label>I hereby agree to the terms and conditions </ion-label> \n      <ion-checkbox color="dark" checked="false"></ion-checkbox>\n    </ion-item>\n\n\n    <button ion-button (click)="openHomePage()" full >Submit</button>\n  </ion-list>\n  \n  \n\n</ion-content>\n'/*ion-inline-end:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/pages/first/first.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FirstPage);
    return FirstPage;
}());

//# sourceMappingURL=first.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addmed_addmed__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MedicationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MedicationsPage = /** @class */ (function () {
    function MedicationsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MedicationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicationsPage');
    };
    MedicationsPage.prototype.openPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addmed_addmed__["a" /* AddmedPage */]);
    };
    MedicationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-medications',template:/*ion-inline-start:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/pages/medications/medications.html"*/'<!--\n  Generated template for the MedicationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n\n  <ion-navbar> \n    <ion-title>Medications</ion-title> \n\n     <!-- Generates add button on upper right of page -->\n    <ion-fab middle right upper>\n      <button ion-fab (click)="openPage()">\n        <ion-icon name = "add">\n        </ion-icon>\n      </button>\n    </ion-fab>\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/pages/medications/medications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MedicationsPage);
    return MedicationsPage;
}());

//# sourceMappingURL=medications.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrachPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TrachPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrachPage = /** @class */ (function () {
    function TrachPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.displayDate = '2018-01-01T15:03:46.789';
        this.bjork = "n";
    }
    TrachPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrachPage');
    };
    TrachPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trach',template:/*ion-inline-start:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/pages/trach/trach.html"*/'<!--\n  Generated template for the TrachPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Tracheostomy Page</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n\n        <ion-card-header ion-text color="primary">\n          Important information about my tracheostomy\n        </ion-card-header>\n      \n        <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>When was the tracheostomy placed?</ion-label>\n                <ion-datetime displayFormat="MMM DD, YYYY" min="2010-01-01" max="2030-01-01" [(ngModel)]="displayDate"></ion-datetime>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n                <!--Filler space-->\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>Is a Bjork flap present?</ion-label>\n                <ion-select [(ngModel)]="bjork">\n                  <ion-option value="y">Yes</ion-option>\n                  <ion-option value="n">No</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <!--Filler space-->\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label floating>What is the size of the tracheostomy?</ion-label>\n                <ion-input type="text" value=""></ion-input>\n             </ion-item>\n            </ion-col>\n            <ion-col>\n                <!--Filler space-->\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label floating>What was the type of tracheostomy placed?</ion-label>\n                <ion-input type="text" value=""></ion-input>\n             </ion-item>\n            </ion-col>\n            <ion-col>\n                <!--Filler space-->\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n            <ion-item>\n            <ion-label floating>Cleaning protocol?</ion-label>\n            <ion-input type="text"></ion-input>\n            </ion-item>\n            </ion-col>\n            <ion-col>\n            <!--Filler space-->\n            </ion-col>\n          </ion-row>\n         \n          <ion-row>\n            <ion-col>\n            <ion-item>\n            <ion-label floating>Home supplies:</ion-label>\n            <ion-input type="text"></ion-input>\n            </ion-item>\n            </ion-col>\n            <ion-col>\n            <!--Filler space-->\n            </ion-col>\n            </ion-row>\n\n            <ion-row>\n            <ion-col>\n            <ion-item>\n            <ion-label floating>Emergency management:</ion-label>\n            <ion-input type="text"></ion-input>\n            </ion-item>\n            </ion-col>\n            <ion-col>\n            <!--Filler space-->\n            </ion-col>\n            </ion-row>\n\n            <ion-row>\n            <ion-col>\n            <ion-item>\n            <ion-label floating>ENT doctor name and contact information:</ion-label>\n            <ion-input type="text"></ion-input>\n            </ion-item>\n            </ion-col>\n            <ion-col>\n            <!--Filler space-->\n            </ion-col>\n            </ion-row>\n  \n        </ion-grid>\n\n        <button ion-button full>Submit</button>\n            \n          \n        </ion-card-content>\n      \n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/pages/trach/trach.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TrachPage);
    return TrachPage;
}());

//# sourceMappingURL=trach.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addmed/addmed.module": [
		282,
		5
	],
	"../pages/detail/detail.module": [
		283,
		4
	],
	"../pages/first/first.module": [
		284,
		3
	],
	"../pages/medications/medications.module": [
		285,
		2
	],
	"../pages/trach/trach.module": [
		286,
		1
	],
	"../pages/whiteboard/whiteboard.module": [
		287,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Whiteboard\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Whiteboard" tabIcon="color-palette"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = /** @class */ (function () {
    function DetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = navParams.get('item');
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/pages/detail/detail.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h2>Welcome</h2>\n  <p>\n    Coming soon!\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/pages/detail/detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhiteboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the WhiteboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WhiteboardPage = /** @class */ (function () {
    function WhiteboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WhiteboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WhiteboardPage');
    };
    WhiteboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-whiteboard',template:/*ion-inline-start:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/pages/whiteboard/whiteboard.html"*/'<!--\n  Generated template for the WhiteboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Whiteboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-bounce>\n    <canvas-draw></canvas-draw>\n</ion-content>\n'/*ion-inline-end:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/pages/whiteboard/whiteboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], WhiteboardPage);
    return WhiteboardPage;
}());

//# sourceMappingURL=whiteboard.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_consent_consent__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_medications_medications__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_addmed_addmed__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_first_first__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_trach_trach__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_whiteboard_whiteboard__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_canvas_draw_canvas_draw__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_consent_consent__["a" /* ConsentPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_medications_medications__["a" /* MedicationsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_addmed_addmed__["a" /* AddmedPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_first_first__["a" /* FirstPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_trach_trach__["a" /* TrachPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_whiteboard_whiteboard__["a" /* WhiteboardPage */],
                __WEBPACK_IMPORTED_MODULE_18__components_canvas_draw_canvas_draw__["a" /* CanvasDraw */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addmed/addmed.module#AddmedPageModule', name: 'AddmedPage', segment: 'addmed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/first/first.module#FirstPageModule', name: 'FirstPage', segment: 'first', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medications/medications.module#MedicationsPageModule', name: 'MedicationsPage', segment: 'medications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trach/trach.module#TrachPageModule', name: 'TrachPage', segment: 'trach', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/whiteboard/whiteboard.module#WhiteboardPageModule', name: 'WhiteboardPage', segment: 'whiteboard', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_consent_consent__["a" /* ConsentPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_medications_medications__["a" /* MedicationsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_addmed_addmed__["a" /* AddmedPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_first_first__["a" /* FirstPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_trach_trach__["a" /* TrachPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_whiteboard_whiteboard__["a" /* WhiteboardPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_first_first__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, loadingCtrl, storage) {
        var _this = this;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.presentLoading();
        this.platform.ready().then(function () {
            _this.storage.get('introShown').then(function (result) {
                if (result) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_first_first__["a" /* FirstPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_first_first__["a" /* FirstPage */];
                    _this.storage.set('introShown', true);
                }
                _this.loader.dismiss();
            });
        });
    }
    MyApp.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Authenticating..."
        });
        this.loader.present();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
//platform.ready().then(() => {
// Okay, so the platform is ready and our plugins are available.
// Here you can do any higher level native things you might need.
//statusBar.styleDefault();
//splashScreen.hide();
//});
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConsentPage = /** @class */ (function () {
    function ConsentPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [
            {
                title: "Welcome to IIAM!",
                description: "<b>IIAM (IIAM)</b> empowers patients with tracheostomies.",
                image: "assets/img/IIAM_logo.png",
            },
            {
                title: "What is IIAM?",
                description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "assets/img/ica-slidebox-img-2.png",
            },
            {
                title: "What is Ionic Cloud?",
                description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "assets/img/ica-slidebox-img-3.png",
            }
        ];
    }
    ConsentPage.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    ConsentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'consent-page',template:/*ion-inline-start:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/pages/consent/consent.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Slides</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="tutorial-page">\n\n  <ion-slides pager="true">\n    <ion-slide *ngFor="let slide of slides">\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button color="primary">Skip</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img [src]="slide.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n      <h2 class="slide-title">Ready to Use?</h2>\n      <button ion-button large clear icon-end color="primary" (click)="goToHome()">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/pages/consent/consent.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ConsentPage);
    return ConsentPage;
}());

//# sourceMappingURL=consent.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasDraw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CanvasDraw = /** @class */ (function () {
    function CanvasDraw(platform, renderer) {
        this.platform = platform;
        this.renderer = renderer;
        this.currentColour = '#1abc9c';
        this.brushSize = 10;
        console.log('Hello CanvasDraw Component');
        this.availableColours = [
            '#1abc9c',
            '#3498db',
            '#9b59b6',
            '#e67e22',
            '#e74c3c'
        ];
    }
    CanvasDraw.prototype.ngAfterViewInit = function () {
        this.canvasElement = this.canvas.nativeElement;
        this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
        this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');
    };
    CanvasDraw.prototype.changeColour = function (colour) {
        this.currentColour = colour;
    };
    CanvasDraw.prototype.changeSize = function (size) {
        this.brushSize = size;
    };
    CanvasDraw.prototype.handleStart = function (ev) {
        this.lastX = ev.touches[0].pageX;
        this.lastY = ev.touches[0].pageY;
    };
    CanvasDraw.prototype.handleMove = function (ev) {
        var ctx = this.canvasElement.getContext('2d');
        var currentX = ev.touches[0].pageX;
        var currentY = ev.touches[0].pageY;
        ctx.beginPath();
        ctx.lineJoin = "round";
        ctx.moveTo(this.lastX, this.lastY);
        ctx.lineTo(currentX, currentY);
        ctx.closePath();
        ctx.strokeStyle = this.currentColour;
        ctx.lineWidth = this.brushSize;
        ctx.stroke();
        this.lastX = currentX;
        this.lastY = currentY;
    };
    CanvasDraw.prototype.clearCanvas = function () {
        var ctx = this.canvasElement.getContext('2d');
        ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myCanvas'),
        __metadata("design:type", Object)
    ], CanvasDraw.prototype, "canvas", void 0);
    CanvasDraw = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'canvas-draw',template:/*ion-inline-start:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/components/canvas-draw/canvas-draw.html"*/'<!-- Generated template for the CanvasDrawComponent component -->\n<ion-toolbar id="top-toolbar">\n    <ion-buttons left>\n        <button *ngFor="let colour of availableColours" icon-only ion-button (click)="changeColour(colour)">\n            <ion-icon [style.color]="colour" name="brush"></ion-icon>\n        </button>\n    </ion-buttons>\n    <ion-buttons right>\n        <button style="border: 1px solid #cecece;" ion-button icon-only style.color="#fff" (click)="changeColour(\'#fff\')">\n            <ion-icon style="color: #fff;" name="square"></ion-icon>\n        </button>\n    </ion-buttons>\n</ion-toolbar>\n\n<canvas #myCanvas (touchstart)="handleStart($event)" (touchmove)="handleMove($event)"></canvas>\n\n<ion-toolbar id="bottom-toolbar">\n    <ion-buttons left>\n        <button color="dark" ion-button icon-only (click)="clearCanvas()"><ion-icon name="trash"></ion-icon></button>\n    </ion-buttons>\n    <ion-buttons right>\n        <button color="dark" ion-button icon-only (click)="changeSize(5)"><ion-icon style="font-size: 0.25em;" name="radio-button-on"></ion-icon></button>\n        <button color="dark" ion-button icon-only (click)="changeSize(10)"><ion-icon style="font-size: 0.5em;" name="radio-button-on"></ion-icon></button>\n        <button color="dark" ion-button icon-only (click)="changeSize(20)"><ion-icon style="font-size: 1em;" name="radio-button-on"></ion-icon></button>\n        <button color="dark" ion-button icon-only (click)="changeSize(50)"><ion-icon style="font-size: 2em;" name="radio-button-on"></ion-icon></button>\n        <button color="dark" ion-button icon-only (click)="changeSize(200)"><ion-icon style="font-size: 3em;" name="radio-button-on"></ion-icon></button>\n    </ion-buttons>\n</ion-toolbar>\n'/*ion-inline-end:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/components/canvas-draw/canvas-draw.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]) === "function" && _b || Object])
    ], CanvasDraw);
    return CanvasDraw;
    var _a, _b;
}());

//# sourceMappingURL=canvas-draw.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medications_medications__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trach_trach__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__whiteboard_whiteboard__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [];
        this.items.push({
            text: 'About Me',
            icon: 'happy',
            color: '#BC254B',
            id: 0
        });
        this.items.push({
            text: 'About My Tracheostomy',
            icon: 'body',
            color: '#BC254B',
            id: 1
        });
        this.items.push({
            text: 'Care',
            icon: 'heart',
            color: '#BC254B',
            id: 2
        });
        this.items.push({
            text: 'Assistance',
            icon: 'hand',
            color: '#BC254B',
            id: 3
        });
        this.items.push({
            text: 'Documents',
            icon: 'list-box',
            color: '#BC254B',
            id: 4
        });
        this.items.push({
            text: 'Medical',
            icon: 'clipboard',
            color: '#BC254B',
            id: 5
        });
        this.items.push({
            text: 'Medications',
            icon: 'medkit',
            color: '#BC254B',
            id: 6
        });
        this.items.push({
            text: 'Contacts',
            icon: 'people',
            color: '#BC254B',
            id: 7
        });
        this.items.push({
            text: 'View Summary',
            icon: 'locate',
            color: '#BC254B',
            id: 8
        });
        this.items.push({
            text: 'Whiteboard',
            icon: 'brush',
            color: '#BC254B',
            id: 9
        });
    }
    HomePage.prototype.itemSelected = function (item) {
        if (item.id == 0) {
        }
        if (item.id == 1) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__trach_trach__["a" /* TrachPage */], { item: item });
        }
        if (item.id == 2) {
        }
        if (item.id == 3) {
        }
        if (item.id == 4) {
        }
        if (item.id == 5) {
        }
        if (item.id == 6) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__medications_medications__["a" /* MedicationsPage */], { item: item });
        }
        if (item.id == 7) {
        }
        if (item.id == 8) {
        }
        if (item.id == 9) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__whiteboard_whiteboard__["a" /* WhiteboardPage */], { item: item });
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemSelected(item)" icon-start>\n      <ion-icon [name]="item.icon" [ngStyle]="{\'color\': item.color}" item-start></ion-icon>\n      {{ item.text }}\n    </button>\n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/Users/yding/Documents/Johns Hopkins University/Fall 2018/Research/IIAM/IIAM-kevinzxin-patch-2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var _a;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map