hideLayer = (el) => {
  el.style.visibility = "hidden";
};

linkHCM = () => {
  document.querySelector("svg #btn1_hcm");
  location.href = "hcm.html";
};

linkVUS = () => {
  document.querySelector("svg #btn2_vus");
  location.href = "vus.html";
};

linkNoKnown = () => {
  document.querySelector("svg #btn3");
  location.href = "noKnown.html";
};

reset = () => {
  document.querySelector("svg #btn_reset");
  location.href = "index.html";
};
