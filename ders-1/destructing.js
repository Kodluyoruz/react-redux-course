// destructing
const prop = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3"
};

// es5
// const data1 = prop.prop1;
// const data2 = prop.prop2;

//es6
const { prop1, prop2 } = prop;

console.log("data1 =>   ", prop1);
console.log("data2 =>   ", prop2);
