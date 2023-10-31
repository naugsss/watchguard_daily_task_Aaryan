function x() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 3000);
  }
}

x();

function y() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 3000);
  }
}

y();
