# ws-format-time : Nice date helper
Easy for showing time in formnat string in ES5/Typescript.

This is a library to make logger service more powerful. 
There are 4 level and each level' consola-print has its colors and styles, also support to custom them.

## Add the package into your project
```npm
npm install ws-format-time --save
```
This package also need my regex package "ws-regex", it will be add in automatically, but try to add it if any mistake.
```npm
npm install ws-regex --save
```

## How to make it work
1. you can create the instance by constructor:
```typescript
const time = new FormatTime([1926,5,13,6,23,56,0],8);
console.log(time.Years);
console.log(time.FormatDate);
console.log(time.FormatTime);
console.log(time.FormatDateTime);
// output: 1926
// output: 1926-05-13
// output: 14:23:56
// output: 1926-05-13 14:23:56
const time2 = new FormatTime(['1926','5','13','6','23','56','0'],8);
console.log(time.Years);
console.log(time.FormatDate);
console.log(time.FormatTime);
console.log(time.FormatDateTime);
// output: 1926
// output: 1926-05-13
// output: 14:23:56
// output: 1926-05-13 14:23:56
```

2. or you can create the instance by static parser:
```typescript
const update_time = '2017-09-03T11:24:59.893564';
const time = FormatTime.Parse(/(.+?)-(.+?)-(.+?)T(.+?):(.+?):(.+?).([0-9]{3}).+/, update_time, 8);
console.log(time.FormatDateTime);
// output: 2017-09-03 19:24:59
```
## More format extensions methods will come later.