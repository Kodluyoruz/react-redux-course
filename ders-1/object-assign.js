// Object assign
const obj = {
  name: "Burak",
  surname: "Şahin"
};

const obj2 = {
  name1: "Fatih",
  surname2: "Şen"
};

const obj3 = Object.assign({}, obj2);
obj3.name1 = "Onur";

console.log("obj3 =>    ", obj3);
console.log("obj2 =>    ", obj2);

const nested = {
  info: {
    name: "Hilmi",
    surname: "Yüksel"
  }
};

const nested1 = JSON.parse(JSON.stringify(nested));

nested1.info.name = "Mahmut";

console.log("nested =>  ", nested);
console.log("nested1 =>  ", nested1);
