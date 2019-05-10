"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var country_service_1 = require("../country.service");
var Page1Component = /** @class */ (function () {
    function Page1Component(countryService) {
        this.countryService = countryService;
        this.countries = null;
    }
    Page1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.countryService.getCountries().subscribe(function (country) {
            _this.countries = country;
        });
    };
    Page1Component = __decorate([
        core_1.Component({
            selector: 'ns-page1',
            templateUrl: './page1.component.html',
            styleUrls: ['./page1.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [country_service_1.CountryService])
    ], Page1Component);
    return Page1Component;
}());
exports.Page1Component = Page1Component;
/*
1. tns create nama project

2. tns platform add android

3. tns generate component page1

4. tns generate component page2

5. copy paste country.service, weather.service, dan folder assetsnya

6. di dalam file app.routing.module dan app.module itu ada yang diganti

*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnZTEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUFvRDtBQVFwRDtJQUdFLHdCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGbEQsY0FBUyxHQUFHLElBQUksQ0FBQztJQUVxQyxDQUFDO0lBRXZELGlDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUNsRCxLQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFUVSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3BDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQUlvQyxnQ0FBYztPQUh2QyxjQUFjLENBVzFCO0lBQUQscUJBQUM7Q0FBQSxBQVhELElBV0M7QUFYWSx3Q0FBYztBQVkzQjs7Ozs7Ozs7Ozs7OztFQWFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvdW50cnlTZXJ2aWNlIH0gZnJvbSAnLi4vY291bnRyeS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtcGFnZTEnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZTEuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYWdlMS5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2UxQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY291bnRyaWVzID0gbnVsbDtcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY291bnRyeVNlcnZpY2U6IENvdW50cnlTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNvdW50cnlTZXJ2aWNlLmdldENvdW50cmllcygpLnN1YnNjcmliZShjb3VudHJ5ID0+IHtcbiAgICAgIHRoaXMuY291bnRyaWVzID0gY291bnRyeTtcbiAgICB9KTtcbiAgfVxuXG59XG4vKlxuMS4gdG5zIGNyZWF0ZSBuYW1hIHByb2plY3RcblxuMi4gdG5zIHBsYXRmb3JtIGFkZCBhbmRyb2lkXG5cbjMuIHRucyBnZW5lcmF0ZSBjb21wb25lbnQgcGFnZTFcblxuNC4gdG5zIGdlbmVyYXRlIGNvbXBvbmVudCBwYWdlMlxuXG41LiBjb3B5IHBhc3RlIGNvdW50cnkuc2VydmljZSwgd2VhdGhlci5zZXJ2aWNlLCBkYW4gZm9sZGVyIGFzc2V0c255YVxuXG42LiBkaSBkYWxhbSBmaWxlIGFwcC5yb3V0aW5nLm1vZHVsZSBkYW4gYXBwLm1vZHVsZSBpdHUgYWRhIHlhbmcgZGlnYW50aVxuXG4qL1xuIl19