const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoClickerUpgrade = document.getElementById("autoClickerUpgrade");

let numberOfCookies = 0;
let cookieIncreaseNumber = 1;
let autoclickerCookieIncreaseNumber = 0;
let autoclickerInterval;
let clickUpgradePrice = 50;
let autoClickerUpgradePrice = 100;

cookie.onclick = () => {
  numberOfCookies += cookieIncreaseNumber;

  counter.innerText = "SNUS: " + numberOfCookies;
};
clickUpgrade.onclick = () => {
  if (numberOfCookies >= clickUpgradePrice) {
    //odecist cenu nakupu
    numberOfCookies -= clickUpgradePrice;
    clickUpgradePrice += 100;
    clickUpgrade.innerText = `Buy SNUS click upgrade: ${clickUpgradePrice} kč` ; 
    //zvednout klikani o 1
    cookieIncreaseNumber ++;
    counter.innerHTML = "SNUS: " + numberOfCookies;
  }
};

autoClickerUpgrade.onclick = () => {
  if (numberOfCookies >= autoClickerUpgradePrice) {
    //odecteme cenu nakupu
    numberOfCookies -= autoClickerUpgradePrice;
    autoClickerUpgradePrice += 200;
    autoClickerUpgrade.innerText = `Buy Free Delivery of SNUS: ${autoClickerUpgradePrice} kč`
    counter.innerText = "SNUS: " + numberOfCookies;
    autoclickerCookieIncreaseNumber += 2;
    //zastavime interval
    clearInterval(autoclickerInterval);
    //spustime autoclicker
    autoclickerInterval = setInterval(() => {
      numberOfCookies += autoclickerCookieIncreaseNumber;
      counter.innerHTML = "SNUS: " + numberOfCookies;
    }, 1000);
  }
}