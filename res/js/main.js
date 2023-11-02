const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoClickerUpgrade = document.getElementById("autoClickerUpgrade");
const snusUpgrade = document.getElementById("snusUpgrade");

let numberOfCookies = 0;
let cookieIncreaseNumber = 1;
let autoclickerCookieIncreaseNumber = 0;
let autoclickerInterval;
let clickUpgradePrice = 50;
let autoClickerUpgradePrice = 100;
let snuscost = 10000;

cookie.onclick = () => {
  numberOfCookies += cookieIncreaseNumber;

  counter.innerText = "SNUS: " + numberOfCookies;
};
clickUpgrade.onclick = () => {
  if (numberOfCookies >= clickUpgradePrice) {
    //odecist cenu nakupu
    numberOfCookies -= clickUpgradePrice;
    clickUpgradePrice += 325;
    clickUpgrade.innerText = `More customers: ${clickUpgradePrice} kč`;
    cookieIncreaseNumber += 3;
    counter.innerHTML = "SNUS: " + numberOfCookies;
  }
};

autoClickerUpgrade.onclick = () => {
  if (numberOfCookies >= autoClickerUpgradePrice) {
    //odecteme cenu nakupu
    numberOfCookies -= autoClickerUpgradePrice;
    autoClickerUpgradePrice += 770;
    autoClickerUpgrade.innerText = `Buy Delivery of SNUS: ${autoClickerUpgradePrice} kč`;
    counter.innerText = "SNUS: " + numberOfCookies;
    autoclickerCookieIncreaseNumber += 5;
    //zastavime interval
    clearInterval(autoclickerInterval);
    //spustime autoclicker
    autoclickerInterval = setInterval(() => {
      numberOfCookies += autoclickerCookieIncreaseNumber;
      counter.innerHTML = "SNUS: " + numberOfCookies;
    }, 1000);
  }
};
snusUpgrade.onclick = () => {
  if (numberOfCookies >= snuscost) {
    cookieIncreaseNumber *= 2;
    autoclickerCookieIncreaseNumber *= 2;
    numberOfCookies -= snuscost;
    counter.innerHTML = "SNUS: " + numberOfCookies;
    if (cookie.getAttribute('src') == "./res/img/SNUSstage1.png") {
      cookie.src = "./res/img/SNUSstage2.png";
      snuscost = 100000;
      snusUpgrade.innerHTML = `Buy better SNUS: ${snuscost} kč`  ;
    } else if (cookie.getAttribute('src') == "./res/img/SNUSstage2.png") {
      cookie.src = "./res/img/SNUSstage3.png";
      snuscost = 500000;
      snusUpgrade.innerHTML = `Buy better SNUS: ${snuscost} kč`  ;
    } else if (cookie.getAttribute('src') == "./res/img/SNUSstage3.png") {
      cookie.src = "./res/img/SNUSstage4.png";
      snuscost = 1000000;
      snusUpgrade.innerHTML = `Buy better SNUS: ${snuscost} kč` ;
    } else if (cookie.getAttribute('src') == "./res/img/SNUSstage4.png") {
      cookie.src = "./res/img/SNUSstage5.png";
      snusUpgrade.innerText = "You have all SNUS ";
    }else{

    }

  }



  
}
