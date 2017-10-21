"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ws_regex_1 = require("ws-regex");
var FormatTime = /** @class */ (function () {
    function FormatTime(param, zone) {
        if (zone === void 0) { zone = 0; }
        this.time = new Date(1970, 1, 1, 0, 0, 0, 0);
        if (param instanceof Array) {
            this.time = new (Date.bind.apply(Date, [void 0].concat(param)))();
        }
        else if (!param && param instanceof (Date)) {
            this.time = param;
        }
        if (Math.abs(zone) > 12) {
            zone = 0;
        }
        this.time = new Date(this.time.getTime() + zone * 3600000);
    }
    Object.defineProperty(FormatTime.prototype, "Years", {
        get: function () { return this.time.getFullYear(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatTime.prototype, "Months", {
        get: function () { return this.time.getMonth(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatTime.prototype, "Days", {
        get: function () { return this.time.getDate(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatTime.prototype, "Hours", {
        get: function () { return this.time.getHours(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatTime.prototype, "Minutes", {
        get: function () { return this.time.getMinutes(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatTime.prototype, "Seconds", {
        get: function () { return this.time.getSeconds(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatTime.prototype, "Milliseconds", {
        get: function () { return this.time.getMilliseconds(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatTime.prototype, "FormatDate", {
        get: function () { return this.Years + "-" + (this.Months >= 10 ? this.Months : '0' + this.Months) + "-" + (this.Days >= 10 ? this.Days : '0' + this.Days); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatTime.prototype, "FormatTime", {
        get: function () { return this.Hours + ":" + (this.Minutes >= 10 ? this.Minutes : '0' + this.Minutes) + ":" + (this.Seconds >= 10 ? this.Seconds : '0' + this.Seconds); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatTime.prototype, "FormatDateTime", {
        get: function () { return this.FormatDate + " " + this.FormatTime; },
        enumerable: true,
        configurable: true
    });
    FormatTime.Create = function (param, zone) {
        if (zone === void 0) { zone = 0; }
        return new FormatTime(param, zone);
    };
    FormatTime.Parse = function (pattern, target, zone, keys) {
        if (zone === void 0) { zone = 0; }
        if (keys === void 0) { keys = ['Yr', 'Mth', 'Dy', 'h', 'm', 's', 'ms']; }
        var coll = (_a = ws_regex_1.Regex.Create(pattern)).SetKeys.apply(_a, keys).Matches(target);
        return new FormatTime([coll[keys[0]], coll[keys[1]], coll[keys[2]], coll[keys[3]], coll[keys[4]], coll[keys[5]], coll[keys[6]]], zone);
        var _a;
    };
    return FormatTime;
}());
exports.FormatTime = FormatTime;
