document.addEventListener("DOMContentLoaded", function(){
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
        trans:      document.querySelectorAll("trans")
    }



    var content = {
        links: {
            main: {
                home: document.querySelector("#home-link a"),
                oNama: document.querySelector("#o-nama-link a"),
                usluge: document.querySelector("#usluge-link a"),
                kontakt: document.querySelector("#kontakt-link a")
            },
            res: {
                home: document.querySelector("#home-link-res a"),
                oNama: document.querySelector("#o-nama-link-res a"),
                usluge: document.querySelector("#usluge-link-res a"),
                kontakt: document.querySelector("#kontakt-link-res a")
            }
        },
        home: {
            h1: document.querySelector("#home h1"),
            p: document.querySelector("#home p")
        },
        oNama:{
            h1: document.querySelector("#o-nama h1"),
            h3: document.querySelector("#o-nama h3"),
            p: document.querySelector("#o-nama p")
        },
        usluge:{
            h1: document.querySelector("#usluge h1"),
            promidzba: {
                h2: document.querySelector("#promidzba h2"),
                p: document.querySelector("#promidzba p")
            },
            marketing: {
                h2: document.querySelector("#marketing h2"),
                p: document.querySelector("#marketing p")
            },
            edukacija: {
                h2: document.querySelector("#edukacija h2"),
                p: document.querySelector("#edukacija p")
            }
        },
        kontakt:{
            h1: document.querySelector("#footer h1"),
            adresa: document.querySelector("#adresa h3"),
            tel: document.querySelector("#tel h3")
        }
    }

    var engTranslations = {
        links: {
            main: {
                oNama: "About us",
                usluge: "Services",
                kontakt: "Contact"
            },
            res: {
                oNama: "About us",
                usluge: "Services",
                kontakt: "Contact"
            }
        },
        home: {
            h1: "Welcome!",
            p: "This is the place for everybody who wishes to know more about digital world, whether you are private or public person, product, service or brand."
        },
        oNama:{
            h1: "About us",
            h3: "We are Diano & Maya and social networks are our passion!",
            p: "After several years of using, learning and exploring Facebook, Instagram & YouTube, we decided to share all knowledge with you! Today you need more than „knowing the basic“ to advertise your product or service on social networks.",
            span: "Don't waste your money!"
        },
        usluge:{
            h1: "Services",
            promidzba: {
                h2: "Review",
                p: "Advertise your product on our channels."
            },
            marketing: {
                h2: "Community manager",
                p: "Strategically posting on YOUR social network."
            },
            edukacija: {
                h2: "Training",
                p: "Book your group or individual training in Facebook and/or Instagram!"
            }
        },
        kontakt:{
            h1: "Contact",
            adresa: "Address",
            tel: "Telephone"
        }
    }
    

    var hrvTranslations = {
        links: {
            main: {
                oNama: "O nama",
                usluge: "Usluge",
                kontakt: "Kontakt"
            },
            res: {
                oNama: "O nama",
                usluge: "Usluge",
                kontakt: "Kontakt"
            }
        },
        home: {
            h1: "Dobro došli!",
            p: "Ovo je mjesto za sve koji žele znati više o digitalnom svijetu, bilo da se radi o privatnoj ili javnoj osobi, proizvodu, usluzi ili brandu."
        },
        oNama:{
            h1: "O nama",
            h3: "Mi smo Diano & Maya i društvene mreže su naša strast!",
            p: "Nakon višegodišnjeg korištenja, učenja i istraživanja Facebook-a, Instagram-a i YouTube-a, odlučili smo svo naše znanje podijeliti sa vama! Danas nam je potrebno mnogo više od osnova poznavanja društvenih mreža kako bi oglašavali svoj proizvod ili uslugu na društvenim mrežama.",
            span: "Ne trošite novce uzalud!"
        },
        usluge:{
            h1: "Usluge",
            promidzba: {
                h2: "Review",
                p: "Promidžba Vaše usluge/proizvoda na NAŠIM društvenim mrežama."
            },
            marketing: {
                h2: "Marketing na društvenim mrežama",
                p: "Sadržajno i strateško vođenje VAŠIH društvenih stranica."
            },
            edukacija: {
                h2: "Edukacija",
                p: "Dogovori individualnu ili grupnu Facebook i/ili Instagram radionicu."
            }
        },
        kontakt:{
            h1: "Kontakt",
            adresa: "Adresa",
            tel: "Telefon"
        }
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
            (function() {
                var l = link;
                links[l].addEventListener("click", function(e){
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
        setTimeout(function() {
            ann.style.opacity = 0;
        }, 3000);

        setTimeout(function() {
            ann.style.visibility = "hidden";
        }, 5000);
    }

    function translatePage(con, trans) {
        for(var part in trans){
            if(Object.keys(trans[part]).length !== 0) {
                translatePage(con[part], trans[part]);
            }
            console.log(trans[part]);
            //con[part].innerHTML = trans[part];
        }
    }


    
    //Initialization
    
    activateLink();
    armLinks(els.mainLinks);
    armLinks(els.responsiveLinks);

    

    //Events

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

    els.eng.addEventListener("click", function(e) {
        e.preventDefault();
        showAnnounce();
        if(e.target.classList.contains("active-trans")){
            return;
        }
        e.target.classList.add("active-trans");
        els.hrv.classList.remove("active-trans");
        translatePage(content, engTranslations);
    });

    els.hrv.addEventListener("click", function(e) {
        e.preventDefault();
        showAnnounce();
        if(e.target.classList.contains("active-trans")){
            return;
        }
        e.target.classList.add("active-trans");
        els.eng.classList.remove("active-trans");
        translatePage(content, engTranslations);
    });

    window.addEventListener("scroll", function(){
        activateLink();
    });
    
    window.addEventListener("resize", function(){
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

