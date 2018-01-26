document.addEventListener("DOMContentLoaded", () => {
    console.log("Enjoy our website!");
        
    var els = {
        areas: {
            home:       document.querySelector("#home"),
            oNama:      document.querySelector("#o-nama"),
            usluge:     document.querySelector("#usluge"),
            kontakt:    document.querySelector("#footer")
        },
        eng:        document.querySelector("#eng"),
        header:     document.querySelector("header"),
        homeLogo:   document.querySelector("#home-logo"),
        hrv:        document.querySelector("#hrv"),
        mainLinks: {
            home:       document.querySelector("#home-link"),
            oNama:      document.querySelector("#o-nama-link"),
            usluge:     document.querySelector("#usluge-link"),
            kontakt:    document.querySelector("#kontakt-link")
        },
        main:       document.querySelector("main"),
        menuButton: document.querySelector("#menu-trigger"),
        nav:        document.querySelector("nav"),
        responsiveLinks: {
            home:       document.querySelector("#home-link-res"),
            oNama:      document.querySelector("#o-nama-link-res"),
            usluge:     document.querySelector("#usluge-link-res"),
            kontakt:    document.querySelector("#kontakt-link-res")
        },
    }



    var content = {
        oNamaL: document.querySelector("#o-nama-link a"),
        uslugeL: document.querySelector("#usluge-link a"),
        kontaktL: document.querySelector("#kontakt-link a"),
        oNamaR: document.querySelector("#o-nama-link-res a"),
        uslugeR: document.querySelector("#usluge-link-res a"),
        kontaktR: document.querySelector("#kontakt-link-res a"),
        homeh1: document.querySelector("#home h1"),
        homep: document.querySelector("#home p"),
        oNamah1: document.querySelector("#o-nama h1"),
        oNamah2: document.querySelector("#o-nama h2"),
        oNamap: document.querySelector("#o-nama p"),
        uslugeh1: document.querySelector("#usluge h1"),
        uslugePromidzbah3: document.querySelector("#promidzba h3"),
        uslugePromidzbap: document.querySelector("#promidzba p"),
        uslugeMarketingh3: document.querySelector("#marketing h3"),
        uslugepMarketingp: document.querySelector("#marketing p"),
        uslugeEdukacijah3: document.querySelector("#edukacija h3"),
        uslugeEdukacijap: document.querySelector("#edukacija p"),
        kontakth1: document.querySelector("#footer h1"),
        kontaktadresa: document.querySelector("#adresa h3"),
        kontakttel: document.querySelector("#tel h3")
    }

    const engTranslations = {
        oNamaL: "About us",
        uslugeL: "Services",
        kontaktL: "Contact",
        oNamaR: "About us",
        uslugeR: "Services",
        kontaktR: "Contact",
        homeh1: "Welcome!",
        homep: "This is the place for everybody who wishes to know more about digital world, whether you are private or public person, product, service or brand.",
        oNamah1: "About us",
        oNamah2: "We are Diano &amp; Maya and social networks are our passion!",
        oNamap: "After several years of using, learning and exploring Facebook, Instagram & YouTube, we decided to share all knowledge with you! Today you need more than „knowing the basic“ to advertise Your product or service on social networks.<br /><span>Don't waste your money!</span>",
        uslugeh1: "Services",
        uslugePromidzbah3: "Review",
        uslugePromidzbap: "Advertise your product on OUR channels.",
        uslugeMarketingh3: "Community management",
        uslugepMarketingp: "Strategically posting on YOUR social network.",
        uslugeEdukacijah3: "Training",
        uslugeEdukacijap: "Book group or individual training in Facebook and/or Instagram.",
        kontakth1: "Contact",
        kontaktadresa: "Address",
        kontakttel: "Telephone"
    }

    const hrvTranslations = {
        oNamaL: "O nama",
        uslugeL: "Usluge",
        kontaktL: "Kontakt",
        oNamaR: "O nama",
        uslugeR: "Usluge",
        kontaktR: "Kontakt",
        homeh1: "Dobro došli!",
        homep: "Ovo je mjesto za sve koji žele znati više o digitalnom svijetu, bilo da se radi o privatnoj ili javnoj osobi, proizvodu, usluzi ili brandu.",
        oNamah1: "O nama",
        oNamah2: "Mi smo Diano &amp; Maya i društvene mreže su naša strast!",
        oNamap: "Nakon višegodišnjeg korištenja, učenja i istraživanja Facebook-a, Instagram-a i YouTube-a, odlučili smo svo naše znanje podijeliti sa vama! Danas nam je potrebno mnogo više od osnova poznavanja društvenih mreža kako bi oglašavali svoj proizvod ili uslugu na društvenim mrežama.<br /> <span>Ne trošite novac uzalud!</span>",
        uslugeh1: "Usluge",
        uslugePromidzbah3: "Review",
        uslugePromidzbap: "Promidžba Vaše usluge/proizvoda na NAŠIM društvenim mrežama.",
        uslugeMarketingh3: "Marketing na društvenim mrežama",
        uslugepMarketingp: "Sadržajno i strateško vođenje VAŠIH društvenih stranica.",
        uslugeEdukacijah3: "Edukacija",
        uslugeEdukacijap: "Dogovori individualnu ili grupnu Facebook i/ili Instagram radionicu.",
        kontakth1: "Kontakt",
        kontaktadresa: "Adresa",
        kontakttel: "Telefon"
    }

    //Functions

    function activateLink() {
        var homeOffset = els.areas.home.getBoundingClientRect(),
            oNamaOffset = els.areas.oNama.getBoundingClientRect(),
            uslugeOffset = els.areas.usluge.getBoundingClientRect(),
            kontaktOffset = els.areas.kontakt.getBoundingClientRect();
        
        removeActiveLinks();
        
        if((kontaktOffset.bottom - window.innerHeight < 10)
        || (kontaktOffset.top <= 100 && kontaktOffset.bottom > 100)) {
            removeActiveLinks();
            els.responsiveLinks.kontakt.classList.add("active");
            els.mainLinks.kontakt.classList.add("active");
        }
        else if(uslugeOffset.top <= 100 && uslugeOffset.bottom > 100) {
            removeActiveLinks();
            els.responsiveLinks.usluge.classList.add("active");
            els.mainLinks.usluge.classList.add("active");
        }
        else if(oNamaOffset.top <= 100 && oNamaOffset.bottom > 100) {
            removeActiveLinks();
            els.responsiveLinks.oNama.classList.add("active");
            els.mainLinks.oNama.classList.add("active");
        }
        else if(homeOffset.top <= 100 && homeOffset.bottom > 100) {
            removeActiveLinks()
            els.responsiveLinks.home.classList.add("active");
            els.mainLinks.home.classList.add("active");
        }
    }

        
    function armLinks(links){
        for(var link in links) {
            (() => {
                var l = link;
                links[l].addEventListener("click", (e) => {
                    e.preventDefault();
                    var rect = els.areas[l].getBoundingClientRect();
                    window.scrollBy(0, rect.top);
                });
            })();
        }    
    }

    function removeActiveLinks() {
        for (var el in els.mainLinks) {
            els.mainLinks[el].classList.remove("active");
            els.responsiveLinks[el].classList.remove("active");
        }
    }

    function showAnnounce() {
        var ann = document.querySelector("#najava");
        ann.style.visibility = "visible"
        ann.style.opacity = 1;
        setTimeout(() =>  {
            ann.style.opacity = 0;
        }, 3000);

        setTimeout(() =>  {
            ann.style.visibility = "hidden";
        }, 5000);
    }


    
    //Initialization
    
    activateLink();
    armLinks(els.mainLinks);
    armLinks(els.responsiveLinks);

    

    //Events

    els.eng.addEventListener("click", () => {
        if(els.eng.classList.contains("active-trans")){
            return;
        }
        els.hrv.classList.remove("active-trans");
        els.eng.classList.add("active-trans");
        for(var part in content){
            (() => {
                p = part;
                content[p].innerHTML = engTranslations[p];
            })();
        }
    });

    els.hrv.addEventListener("click", () => {
        if(els.hrv.classList.contains("active-trans")){
            return;
        }
        els.eng.classList.remove("active-trans");
        els.hrv.classList.add("active-trans");
        for(var part in content){
            (() => {
                p = part;
                content[p].innerHTML = hrvTranslations[p];
            })();
        }
    });
    
    els.menuButton.addEventListener('click', () => {
        var headerTopMargin = window.getComputedStyle(els.header, null)
                                .getPropertyValue("margin-top");
        var mainWidth = window.getComputedStyle(els.main, null)
                                .getPropertyValue("width");
        var bodyWidth = window.getComputedStyle(document.body, null)
                                .getPropertyValue("width");
                                   
        if(parseInt(headerTopMargin) < 0) {
            els.header.style.marginTop = 0;
        } else {
            els.header.style.marginTop = "-190px";
        }

        if(window.innerWidth > 900 && mainWidth !== bodyWidth){
            els.main.style.width = "100%";
            els.nav.style.width = "0";
        } else if(window.innerWidth > 900 && mainWidth === bodyWidth){
            els.main.style.width = "85%";
            els.nav.style.width = "15%";
        }

        var fa = els.menuButton.querySelector("i");

        if(fa.classList.contains("fa-bars")){
            fa.classList.remove("fa-bars");
            fa.classList.add("fa-times");
        } else {
            fa.classList.remove("fa-times");
            fa.classList.add("fa-bars");
        }
    });

    window.addEventListener("scroll", () => {
        activateLink();
    });
    
    window.addEventListener("resize", () => {
        els.header.style.marginTop = -190;
        els.main.style.width = "100%";
        els.nav.style.width = 0;
        var fa = els.menuButton.querySelector("i");
        if(window.innerWidth > 900 && !fa.classList.contains("fa-2x")) {
            fa.classList.add("fa-2x");
        } else if(window.innerWidth < 900) {
            fa.classList.remove("fa-2x");
        }
    });

    window.dispatchEvent(new Event("resize"));

});


