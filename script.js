document.addEventListener("DOMContentLoaded", function(){
    console.log("Enjoy our website!");
        
    var els = {
        areas: {
            home:       document.querySelector("#home"),
            oNama:      document.querySelector("#o-nama"),
            usluge:     document.querySelector("#usluge"),
            kontakt:    document.querySelector("#footer")
        },
        header:     document.querySelector("header"),
        homeLogo:   document.querySelector("#home-logo"),
        mainLinks: {
            home:       document.querySelector("#home-link"),
            oNama:      document.querySelector("#o-nama-link"),
            usluge:     document.querySelector("#usluge-link"),
            kontakt:    document.querySelector("#kontakt-link")
        },
        main:       document.querySelector("main"),
        menuButton: document.querySelector("#menu-trigger"),
        responsiveLinks: {
            home:       document.querySelector("#home-link-res"),
            oNama:      document.querySelector("#o-nama-link-res"),
            usluge:     document.querySelector("#usluge-link-res"),
            kontakt:    document.querySelector("#kontakt-link-res")
        },
        nav:        document.querySelector("nav")
    }

    activateLink();
    
    els.menuButton.addEventListener('click', function(){
        var headerTopMargin = window.getComputedStyle(els.header, null)
                                .getPropertyValue("margin-top");
        var mainWidth = window.getComputedStyle(els.main, null)
                                .getPropertyValue("width");
        var bodyWidth = window.getComputedStyle(document.body, null)
                                .getPropertyValue("width");
                                   
        if(parseInt(headerTopMargin) < 0) {
            els.header.style.marginTop = 0;
        } else {
            els.header.style.marginTop = -170;
        }

        if(window.innerWidth > 900 && mainWidth !== bodyWidth){
            els.main.style.width = "100%";
            els.nav.style.width = "0";
        } else if(window.innerWidth > 900 && mainWidth === bodyWidth){
            els.main.style.width = "85%";
            els.nav.style.width = "15%";
        }
    });


    els.mainLinks.home.addEventListener("click", function(e){
        e.preventDefault();
        var rect = els.areas.home.getBoundingClientRect();
        window.scrollBy(0, rect.top);
    });

    els.responsiveLinks.home.addEventListener("click", function(e){
        e.preventDefault();
        var rect = els.areas.home.getBoundingClientRect();
        window.scrollBy(0, rect.top);
    });

    
    
    els.mainLinks.oNama.addEventListener("click", function(e){
        e.preventDefault();
        var rect = els.areas.oNama.getBoundingClientRect();
        window.scrollBy(0, rect.top);
    });

    els.responsiveLinks.oNama.addEventListener("click", function(e){
        e.preventDefault();
        var rect = els.areas.oNama.getBoundingClientRect();
        window.scrollBy(0, rect.top);
    });


    
    els.mainLinks.usluge.addEventListener("click", function(e){
        e.preventDefault();
        var rect = els.areas.usluge.getBoundingClientRect();
        window.scrollBy(0, rect.top);
    });

    els.responsiveLinks.usluge.addEventListener("click", function(e){
        e.preventDefault();
        var rect = els.areas.usluge.getBoundingClientRect();
        window.scrollBy(0, rect.top);
    });
    

    
    els.mainLinks.kontakt.addEventListener("click", function(e){
        e.preventDefault();
        var rect = els.areas.kontakt.getBoundingClientRect();
        window.scrollBy(0, rect.top);
    });

    els.responsiveLinks.kontakt.addEventListener("click", function(e){
        e.preventDefault();
        var rect = els.areas.kontakt.getBoundingClientRect();
        window.scrollBy(0, rect.top);
    });


    window.addEventListener("scroll", function(){
        activateLink();
    });
    
    window.addEventListener("resize", function(){
        els.header.style.marginTop = -170;
        els.main.style.width = "100%";
        els.nav.style.width = 0;
    });

    function activateLink() {
        var homeOffset = els.areas.home.getBoundingClientRect(),
            oNamaOffset = els.areas.oNama.getBoundingClientRect(),
            uslugeOffset = els.areas.usluge.getBoundingClientRect(),
            kontaktOffset = els.areas.kontakt.getBoundingClientRect();
        
        removeActiveLinks();
        
        if(homeOffset.top <= 100 && homeOffset.bottom > 0) {
            removeActiveLinks()
            els.responsiveLinks.home.classList.add("active");
            els.mainLinks.home.classList.add("active");
        }
        else if(oNamaOffset.top <= 100 && oNamaOffset.bottom > 0) {
            removeActiveLinks();
            els.responsiveLinks.oNama.classList.add("active");
            els.mainLinks.oNama.classList.add("active");
        }
        else if(uslugeOffset.top <= 100 && uslugeOffset.bottom > 0) {
            removeActiveLinks();
            els.responsiveLinks.usluge.classList.add("active");
            els.mainLinks.usluge.classList.add("active");
        }
        else if(kontaktOffset.top <= 200 && kontaktOffset.bottom > 0){
            removeActiveLinks();
            els.responsiveLinks.kontakt.classList.add("active");
            els.mainLinks.kontakt.classList.add("active");
        }
    }

    function removeActiveLinks() {
        for (var el in els.mainLinks) {
            els.mainLinks[el].classList.remove("active");
            els.responsiveLinks[el].classList.remove("active");
        }
    }
});

