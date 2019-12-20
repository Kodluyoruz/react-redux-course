// Array-map
const array = ["hilmi", "şahin", "anıl"];

console.log("Array =>", array);

array.map((item, i) => {
  if (i % 2 === 1) {
    return console.log("Arra-map =>  ", item);
    console.log("Arra-map =>  ", i);
  }
});

array.map(item => console.log("Array-map-data =>  ", item));
