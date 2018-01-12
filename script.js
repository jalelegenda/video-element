document.addEventListener("DOMContentLoaded", function(){
    console.log("Enjoy our website!");

    var animEls = {
        header:     document.querySelector("header"),
        homeLogo:   document.querySelector("#home-logo")
    }

    var triggers =  {
        menuButton: document.querySelector("header button")
    }

    triggers.menuButton.addEventListener('click', function(){
        var menuTopPadding = window.getComputedStyle(animEls.header, null)
                                   .getPropertyValue("margin-top");

        if(parseInt(menuTopPadding) < 0) {
            animEls.header.style.marginTop = 0;
        } else {
            animEls.header.style.marginTop = -170;
        }
    });
});

