# fill-array-date

Fill dates in an array containing range of dates.


```javascript
  const arrayDate = [{ str: "foo", date: new Date("2017-08-30") }];
  const endDate = new Date("2017-09-26");
  const result = fillArrayDate(arrayDate, endDate);
  
  // result :
  //[{str: "foo", date: new Date("2017-08-30")},
  // {str: "foo", date: new Date("2017-09-30")}
  //];
```

You can see other example in [index.spec.js](/index.spec.js)
