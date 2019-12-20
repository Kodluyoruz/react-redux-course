const fun1 = callback => {
  setTimeout(() => {
    console.log("fun1 çalıştı");
    callback(fun3);
  }, 5000);
};

const fun2 = callback => {
  setTimeout(() => {
    console.log("fun2 çalıştı");
    callback();
  }, 3000);
};
const fun3 = async () => {
  setTimeout(() => {
    console.log("fun3 çalıştı");
  }, 4000);
};

fun1(fun2);
