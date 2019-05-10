"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var country_service_1 = require("../country.service");
var weather_service_1 = require("../weather.service");
var Page2Component = /** @class */ (function () {
    function Page2Component(route, cs, ws) {
        this.route = route;
        this.cs = cs;
        this.ws = ws;
        this.countryName = null;
        this.country = null;
        this.weather = null;
    }
    Page2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (element) {
            _this.countryName = element.get("countryName");
            console.log(_this.countryName);
            _this.cs.getCountry(_this.countryName).subscribe(function (country) {
                _this.country = country;
                _this.ws.getWeather(country["CapitalLatitude"], country["CapitalLongitude"]).subscribe(function (weather) {
                    _this.weather = weather;
                    console.log(weather);
                });
            });
        });
    };
    Page2Component = __decorate([
        core_1.Component({
            selector: 'ns-page2',
            templateUrl: './page2.component.html',
            styleUrls: ['./page2.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, country_service_1.CountryService, weather_service_1.WeatherService])
    ], Page2Component);
    return Page2Component;
}());
exports.Page2Component = Page2Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnZTIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCxzREFBb0Q7QUFDcEQsc0RBQW9EO0FBUXBEO0lBS0Usd0JBQW9CLEtBQXFCLEVBQVUsRUFBa0IsRUFBVSxFQUFrQjtRQUE3RSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLE9BQUUsR0FBRixFQUFFLENBQWdCO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBZ0I7UUFKakcsZ0JBQVcsR0FBVyxJQUFJLENBQUM7UUFDM0IsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLFlBQU8sR0FBRyxJQUFJLENBQUM7SUFFcUYsQ0FBQztJQUVyRyxpQ0FBUSxHQUFSO1FBQUEsaUJBY0M7UUFiQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQSxPQUFPO1lBQ25DLEtBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUU5QixLQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTztnQkFDcEQsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBRXZCLEtBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTztvQkFDM0YsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7b0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFyQlUsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FNMkIsdUJBQWMsRUFBYyxnQ0FBYyxFQUFjLGdDQUFjO09BTHRGLGNBQWMsQ0F1QjFCO0lBQUQscUJBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IENvdW50cnlTZXJ2aWNlIH0gZnJvbSBcIi4uL2NvdW50cnkuc2VydmljZVwiO1xuaW1wb3J0IHsgV2VhdGhlclNlcnZpY2UgfSBmcm9tIFwiLi4vd2VhdGhlci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXBhZ2UyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFnZTIuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlMkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvdW50cnlOYW1lOiBzdHJpbmcgPSBudWxsO1xuICBjb3VudHJ5ID0gbnVsbDtcbiAgd2VhdGhlciA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgY3M6IENvdW50cnlTZXJ2aWNlLCBwcml2YXRlIHdzOiBXZWF0aGVyU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtTWFwLnN1YnNjcmliZShlbGVtZW50ID0+IHtcbiAgICAgIHRoaXMuY291bnRyeU5hbWUgPSBlbGVtZW50LmdldChcImNvdW50cnlOYW1lXCIpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5jb3VudHJ5TmFtZSk7XG5cbiAgICAgIHRoaXMuY3MuZ2V0Q291bnRyeSh0aGlzLmNvdW50cnlOYW1lKS5zdWJzY3JpYmUoY291bnRyeSA9PiB7XG4gICAgICAgIHRoaXMuY291bnRyeSA9IGNvdW50cnk7XG5cbiAgICAgICAgdGhpcy53cy5nZXRXZWF0aGVyKGNvdW50cnlbXCJDYXBpdGFsTGF0aXR1ZGVcIl0sIGNvdW50cnlbXCJDYXBpdGFsTG9uZ2l0dWRlXCJdKS5zdWJzY3JpYmUod2VhdGhlciA9PiB7XG4gICAgICAgICAgdGhpcy53ZWF0aGVyID0gd2VhdGhlcjtcbiAgICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=