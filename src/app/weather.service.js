"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
        this.apiKey = "5f1ea22a92e9fd7de17d44976ec4252a";
        this.baseUrl = "https://api.darksky.net/forecast/" + this.apiKey + "/";
    }
    WeatherService.prototype.getWeather = function (lat, lng) {
        var url = "" + this.baseUrl + lat + "," + lng + "?units=si&exclude=minutely,hourly,flags,alert";
        return this.http.get(url);
    };
    WeatherService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VhdGhlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFrRDtBQUtsRDtJQUlFLHdCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSHBDLFdBQU0sR0FBRyxrQ0FBa0MsQ0FBQztRQUM1QyxZQUFPLEdBQUcsc0NBQW9DLElBQUksQ0FBQyxNQUFNLE1BQUcsQ0FBQztJQUV0QixDQUFDO0lBRXhDLG1DQUFVLEdBQVYsVUFBVyxHQUFXLEVBQUUsR0FBVztRQUNqQyxJQUFJLEdBQUcsR0FBRyxLQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxTQUFJLEdBQUcsa0RBQStDLENBQUM7UUFFdEYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBVlUsY0FBYztRQUgxQixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FLMEIsaUJBQVU7T0FKekIsY0FBYyxDQVcxQjtJQUFELHFCQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBXZWF0aGVyU2VydmljZSB7XG4gIGFwaUtleSA9IFwiNWYxZWEyMmE5MmU5ZmQ3ZGUxN2Q0NDk3NmVjNDI1MmFcIjtcbiAgYmFzZVVybCA9IGBodHRwczovL2FwaS5kYXJrc2t5Lm5ldC9mb3JlY2FzdC8ke3RoaXMuYXBpS2V5fS9gO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBnZXRXZWF0aGVyKGxhdDogbnVtYmVyLCBsbmc6IG51bWJlcikge1xuICAgIGxldCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9JHtsYXR9LCR7bG5nfT91bml0cz1zaSZleGNsdWRlPW1pbnV0ZWx5LGhvdXJseSxmbGFncyxhbGVydGA7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpO1xuICB9XG59XG4iXX0=