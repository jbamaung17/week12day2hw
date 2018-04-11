const initialize = function(){
  const container = document.querySelector('#main-map');
  const center = {lat: 0, lng: 0}
const zoom = 5;

const santaClause = {lat: 38.11887, lng: -86.921422};
const idiotville = {lat: 45.6192772, lng: -123.419283};
const dingDong = {lat: 30.974632, lng: -123.419283};
const hotCoffee = {lat: 31.7402, lng: -89.4452};
const cookietown = {lat: 34.2750, lng: -98.4531};
const anus = {lat: 47.5999976, lng:3.5333312};
const arse = {lat: 1.71141, lng: 99.34511};
const bastardsTown = {lat: 52.18930, lng: -6.54316};
const batman = {lat: 37.88952, lng: 41.12928};
const bellEnd = {lat: 52.39256, lng: -2.08997};
const buttHoleRoad = {lat: 53.484691, lng: 1.211447};
const buttzville = {lat: 40.829846, lng: -75.004178};
const dinosaur = {lat: 40.241560, lng: -109.008747};
const disappointmentIsland = {lat: 50.3625, lng: 165.5838};
const hell = {lat: 63.5519, lng: 10.9227};
const meatMountain = {lat: 63.4444, lng: -160.4830};
const poop = {lat: 20.320833, lng: -88.395833};
const wankum = {lat: 51.3999984, lng: 6.2999988};

const map = new MapWrapper(container, center, zoom);
map.addMarker(santaClause);
map.addMarker(idiotville);
map.addMarker(dingDong);
map.addMarker(hotCoffee);
map.addMarker(cookietown);
map.addMarker(anus);
map.addMarker(arse);
map.addMarker(bastardsTown);
map.addMarker(batman);
map.addMarker(bellEnd);
map.addMarker(buttHoleRoad);
map.addMarker(buttzville);
map.addMarker(dinosaur);
map.addMarker(disappointmentIsland);
map.addMarker(hell);
map.addMarker(meatMountain);
map.addMarker(poop);
map.addMarker(wankum);

const button1 = document.getElementById('us-stupid1');
button1.addEventListener('click', function(){
  map.addClickEvent(santaClause);
});

const button2 = document.getElementById('us-stupid2');
button2.addEventListener('click', function(){
  map.addClickEvent(idiotville);
});

const button3 = document.getElementById('us-stupid3');
button3.addEventListener('click', function(){
  map.addClickEvent(dingDong);
});

const button4 = document.getElementById('us-stupid4');
button4.addEventListener('click', function(){
  map.addClickEvent(hotCoffee);
});

const button5 = document.getElementById('us-stupid5');
button5.addEventListener('click', function(){
  map.addClickEvent(cookietown);
});

const button6 = document.getElementById('us-stupid6');
button6.addEventListener('click', function(){
  map.addClickEvent(bastardsTown);
});

const button7 = document.getElementById('us-stupid7');
button7.addEventListener('click', function(){
  map.addClickEvent(buttzville);
});

const button8 = document.getElementById('us-stupid8');
button8.addEventListener('click', function(){
  map.addClickEvent(dinosaur);
});

const button9 = document.getElementById('us-stupid9');
button9.addEventListener('click', function(){
  map.addClickEvent(meatMountain);
});

const button10 = document.getElementById('europe-stupid1');
button10.addEventListener('click', function(){
  map.addClickEvent(anus);
});

const button11 = document.getElementById('europe-stupid2');
button1.addEventListener('click', function(){
  map.addClickEvent(batman);
});

const button12 = document.getElementById('europe-stupid3');
button12.addEventListener('click', function(){
  map.addClickEvent(bellEnd);
});

const button13 = document.getElementById('europe-stupid4');
button13.addEventListener('click', function(){
  map.addClickEvent(buttHoleRoad);
});

const button14 = document.getElementById('europe-stupid5');
button14.addEventListener('click', function(){
  map.addClickEvent(hell);
});

const button15 = document.getElementById('europe-stupid6');
button15.addEventListener('click', function(){
  map.addClickEvent(wankum);
});

const button16 = document.getElementById('elsewhere-stupid1');
button16.addEventListener('click', function(){
  map.addClickEvent(arse);
});

const button17 = document.getElementById('elsewhere-stupid2');
button1.addEventListener('click', function(){
  map.addClickEvent(disappointmentIsland);
});

const button18 = document.getElementById('elsewhere-stupid3');
button18.addEventListener('click', function(){
  map.addClickEvent(poop);
});




}

window.addEventListener('DOMContentLoaded', initialize);
