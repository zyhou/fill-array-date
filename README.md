# fill-array-date

Fill dates in an array containing range of dates.


```javascript
  const arrayDate = [{ str: "foo", date: new Date("2017-08-31") }];
  const result = fillArrayDate(arrayDate);

  // result :
  //[{str: "foo", date: new Date("2017-08-31")},
  // {str: "foo", date: new Date("2017-09-30")}
  //];
```

You can see other example in [index.spec.js](/index.spec.js)
