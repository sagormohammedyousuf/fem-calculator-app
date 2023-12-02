const calcApp = document.getElementById("app");
const calcTitle = document.getElementById("calc-title");
const tText = document.getElementById("t-text");
const themeNumber = document.getElementById("theme-number");
const themeGroup = document.getElementById("theme-group")
const theme1 = document.getElementById("theme-1");
const theme2 = document.getElementById("theme-2");
const theme3 = document.getElementById("theme-3");

const calcDisplay = document.getElementById("dpDiv");
const dpText = document.getElementById("display");

const calcKyeArea = document.getElementById("keyList");
const key = document.querySelectorAll(".key");
const del = document.getElementById("del");
const reset = document.getElementById("reset");
const equal = document.getElementById("equal")


theme2.addEventListener("click", () => {
    theme1.style.background = "none";
    theme3.style.background = "none";
    theme2.style.background = "var(--red)";
    calcApp.style.background = "var(--light-gray)";

    colorArray = [calcTitle, tText, themeNumber, dpText];
    colorArray.forEach(element => {
        element.style.color = "var(--very-dark-grayish-yellow)";
    });

    themeGroup.style.background = "var(--grayish-red)";
    calcDisplay.style.background = "var(--very-light-gray)";
    calcKyeArea.style.background = "var(--grayish-red)";
    key.forEach(element => {
        element.style.background = "var(--light-grayish-yellow)";
        element.style.color = "var(--very-dark-grayish-yellow)";
        element.style.boxShadow = "0px 2px 0px 0px rgba(166,157,145,0.66)";
    });

    delRest = [del, reset];
    delRest.forEach(element => {
        element.style.background = "var(--dark-moderate-cyan)"
        element.style.boxShadow = "0px 2px 0px 1px var(--very-dark-cyan)"
    });

    equal.style = `
        
    background : var(--orange);
    box-shadow : 0px 2px 0px 1px var(--dark-red);
`


})






theme1.addEventListener("click", () => {
    theme2.style.background = "none"
    theme3.style.background = "none"
    theme1.style.background = "var(--red)"
    calcApp.style.background = "var(--very-dark-desaturated-blue)"

    colorArray = [calcTitle, tText, themeNumber, dpText];
    colorArray.forEach(element => {
        element.style.color = "var(--white)";
    });

    themeGroup.style.background = "hsl(223, 31%, 20%)";
    calcDisplay.style.background = "hsl(224, 36%, 15%)";
    calcKyeArea.style.background = "hsl(223, 31%, 20%)";
    key.forEach(element => {
        element.style.background = "var(--light-grayish-orange)";
        element.style.color = "var(--very-dark-grayish-blue)";
        element.style.boxShadow = "0px 2px 0px 0px rgba(166,157,145,0.66)";
    });

    delRest = [del, reset];
    delRest.forEach(element => {
        element.style.background = "hsl(225, 21%, 49%)"
        element.style.boxShadow = "0px 2px 0px 1px hsl(224, 28%, 35%)"
    });

    equal.style = `
        
        background : var(--red);
        box-shadow : 0px 2px 0px 1px var(--dark-red);
    `


})




theme3.addEventListener("click", () => {
    theme2.style.background = "none";
    theme1.style.background = "none";
    theme3.style.background = "var(--pure-cyan)"
    calcApp.style.background = "var(--very-dark-violet)"

    colorArray = [calcTitle, tText, themeNumber, dpText];
    colorArray.forEach(element => {
        element.style.color = "var(--light-yellow)";
    });

    themeGroup.style.background = "hsl(223, 31%, 20%)";
    calcDisplay.style.background = "hsl(268, 71%, 12%)";
    calcKyeArea.style.background = "hsl(223, 31%, 20%)";
    key.forEach(element => {
        element.style.background = " hsl(268, 47%, 21%)";
        element.style.color = "var(--light-yellow)";
        element.style.boxShadow = "0px 2px 0px 0px var(--vivid-magenta)";
    });

    delRest = [del, reset];
    delRest.forEach(element => {
        element.style.background = "var(--dark-magenta)"
        element.style.boxShadow = "0px 2px 0px 1px hsl(285, 91%, 52%)"
    });

    equal.style = `
    color : black;
    background : var(--pure-cyan);
    box-shadow : 0px 2px 0px 1px var(--soft-cyan);
    `
})