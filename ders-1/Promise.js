const method1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("method1");
      resolve("Çalıştı 1");
    }, 5000);
  });
};

const method2 = params => {
  return new Promise((resolve, reject) => {
    if (params) {
      setTimeout(() => {
        console.log("method2");
        resolve("Çalıştı 2");
      }, 3000);
    }
    reject("Hata 2");
  });
};

const method3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("method3");
      resolve("Çalıştı 3");
    }, 4000);
  });
};

method1()
  .then(res => console.log(res))
  .then(() => method2())
  .then(res => console.log(res))
  .catch(err => console.log(err));
