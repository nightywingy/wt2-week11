"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var CountryService = /** @class */ (function () {
    function CountryService(http) {
        this.http = http;
    }
    CountryService.prototype.getCountries = function () {
        return this.http.get("~/assets/country-capitals.json");
    };
    // ~ -> dynamic (dia dimulai dari root(src-nya) lalu cari file assets)
    CountryService.prototype.getCountry = function (name) {
        console.log(name);
        return this.http.get("~/assets/country-capitals.json").pipe(operators_1.flatMap(function (response) { return response; }), operators_1.filter(function (res) { return res["CountryName"] === name; }));
    };
    CountryService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CountryService);
    return CountryService;
}());
exports.CountryService = CountryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY291bnRyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFrRDtBQUNsRCw0Q0FBaUQ7QUFLakQ7SUFDRSx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7SUFFeEMscUNBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsc0VBQXNFO0lBRXRFLG1DQUFVLEdBQVYsVUFBVyxJQUFZO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLElBQUksQ0FDekQsbUJBQU8sQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFLLFFBQVEsRUFBYixDQUFhLENBQUMsRUFDbEMsa0JBQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxJQUFJLEVBQTNCLENBQTJCLENBQUMsQ0FDM0MsQ0FBQztJQUNKLENBQUM7SUFmVSxjQUFjO1FBSDFCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUUwQixpQkFBVTtPQUR6QixjQUFjLENBZ0IxQjtJQUFELHFCQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IGZpbHRlciwgZmxhdE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIENvdW50cnlTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGdldENvdW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChcIn4vYXNzZXRzL2NvdW50cnktY2FwaXRhbHMuanNvblwiKTtcbiAgfVxuXG4gIC8vIH4gLT4gZHluYW1pYyAoZGlhIGRpbXVsYWkgZGFyaSByb290KHNyYy1ueWEpIGxhbHUgY2FyaSBmaWxlIGFzc2V0cylcblxuICBnZXRDb3VudHJ5KG5hbWU6IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKG5hbWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwifi9hc3NldHMvY291bnRyeS1jYXBpdGFscy5qc29uXCIpLnBpcGUoXG4gICAgICBmbGF0TWFwKHJlc3BvbnNlID0+IDxhbnk+cmVzcG9uc2UpLFxuICAgICAgZmlsdGVyKHJlcyA9PiByZXNbXCJDb3VudHJ5TmFtZVwiXSA9PT0gbmFtZSlcbiAgICApO1xuICB9XG59XG4iXX0=