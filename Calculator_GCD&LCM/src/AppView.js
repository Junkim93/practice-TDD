const AppView = {};

AppView.createPTag = (GCD, LCM) => {
  const p = document.createElement("p");
  p.innerHTML = `최대공약수: ${GCD}, 최소공배수: ${LCM}`;
  return p;
};

AppView.appendChild = p => {
  output.appendChild(p);
};

AppView.initInput = () => {
  firstNum.value = "";
  secondNum.value = "";
  numArr.splice(0, 2);
};

// module.exports = AppView;
