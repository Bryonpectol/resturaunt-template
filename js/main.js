let mobileNav = document.getElementById("mobilenavdiv");

let iconImg = document.getElementById("iconimg");

let hamBtn = document.getElementById("ham");

let homeLink = document.createElement("a");
let homeLi = document.createElement("li");

let productLink = document.createElement("a");
let productLi = document.createElement("li");

let supportLink = document.createElement("a");
let supportLi = document.createElement("li");

function hamburger() {
    iconImg.setAttribute("src", "/images/icons/x.png");

    hamBtn.setAttribute("onclick", "exit()");

    mobileNav.className = "mobilenavdiv";
    
    homeLink.setAttribute("href", "https://pectolprints.netlify.app/");
    productLink.setAttribute("href", "/html/products.html");
    supportLink.setAttribute("href", "/html/support.html");

    homeLi.textContent = "Home";
    productLi.textContent = "Products";
    supportLi.textContent = "Support";

    homeLi.className = "mobilenavli";
    productLi.className = "mobilenavli";
    supportLi.className = "mobilenavli";

    homeLink.className = "mobilenava";
    productLink.className = "mobilenava";
    supportLink.className = "mobilenava";

    mobileNav.appendChild(homeLink);
    homeLink.appendChild(homeLi);

    mobileNav.appendChild(productLink);
    productLink.appendChild(productLi);

    mobileNav.appendChild(supportLink);
    supportLink.appendChild(supportLi);

}

function exit() {
    iconImg.setAttribute("src", "/images/icons/ham.png");

    hamBtn.setAttribute("onclick", "hamburger()");

    mobileNav.className = "mobilenavdivhidden";

    // homeLink.setAttribute("href", "");
    // productLink.setAttribute("href", "/html/products.html");
    // supportLink.setAttribute("href", "/html/support.html");

    // homeLi.textContent = "Home";
    // productLi.textContent = "Products";
    // supportLi.textContent = "Support";

    mobileNav.removeChild(homeLink);
    homeLink.removeChild(homeLi);

    mobileNav.removeChild(productLink);
    productLink.removeChild(productLi);

    mobileNav.removeChild(supportLink);
    supportLink.removeChild(supportLi);
}
