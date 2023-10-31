const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoClickerUpgrade = document.getElementById("autoClickerUpgrade");

let numberOfCookies = 0;
let cookieIncreaseNumber = 1;
let autoclickerCookieIncreaseNumber = 0;
let autoclickerInterval;
let clickUpgradePrice = 50;

cookie.onclick = () => {
  numberOfCookies += cookieIncreaseNumber;

  counter.innerText = "SNUS: " + numberOfCookies;
};
clickUpgrade.onclick = () => {
  if (numberOfCookies >= clickUpgradePrice) {
    //odecist cenu nakupu
    numberOfCookies -= clickUpgradePrice;
    clickUpgradePrice *= 2;
    clickUpgrade.innerHTML = "Buy click upgrade: {clickUpgradePrice}"; 
    counter.innerText = "SNUS: " + numberOfCookies;
    //zvednout klikani o 1
    cookieIncreaseNumber++;
  }
};

autoClickerUpgrade.onclick = () => {
  if (numberOfCookies >= 100) {
    //odecteme cenu nakupu
    numberOfCookies -= 100;
    //zobrazeni textu
    counter.innerText = "SNUS: " + numberOfCookies;
    autoclickerCookieIncreaseNumber++;
    //zastavime interval
    clearInterval(autoclickerInterval);
    //spustime autoclicker
    autoclickerInterval = setInterval(() => {
      numberOfCookies += autoclickerCookieIncreaseNumber;
      counter.innerText = "SNUS: " + numberOfCookies;
    }, 1000);
  }
}