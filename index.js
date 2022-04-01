const $city = document.querySelector("#city");
const $buttonSend = document.querySelector("button");
const $card = document.querySelector("#card");
// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e9cadf834cfc1d5fa98b66aeeb6dd6cf

const contendCard = (data) => {
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  let strong = document.createElement("strong");
  let div = document.createElement("div");
  let p1 = document.createElement("p");
  poblarCard(data, h3, p, strong, p1, div);
};

const poblarCard = (data, h3, p, strong, p1, div) => {
  h3.textContent = `city : ${data.name}`;
  let tem = (data.main.temp - 273.17).toFixed(2);
  p.textContent = tem;
  strong.textContent = "ºC";
  p.append(strong);
  p1.textContent = `Humidity : ${data.main.humidity} %`;
  p1.className = "humidity";
  climateImage(div, tem);
  $card.append(h3, p, div, p1);
  $city.value = "";
};

const climateImage = (div, tem) => {
  if (tem >= 19) {
    div.className = "m1 soleado";
  }
  if (tem > 2 && tem <= 18) {
    div.className = "m1 nublado";
  }
  if (tem < 2) {
    div.className = "m1 nevando";
  }
};

const search = async () => {
  let city = $city.value;
  if (!city) {
    return window.alert("write city");
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=e9cadf834cfc1d5fa98b66aeeb6dd6cf`;
  let data = await fetch(url);
  if (data.ok) {
    $card.innerHTML = "";
    let res = await data.json();
    contendCard(res);
  }
};

$buttonSend.addEventListener("click", search);

// practice=================
