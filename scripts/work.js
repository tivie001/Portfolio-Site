function openProjects(id) {
    switch(id) {
        case "moabSite":
            window.open('../school_projects/dgm2341/main.html');
            break;
        case "cozyCornerSite":
            window.open('../school_projects/dgm2780/marketing-website/website/index.html');
            break;
        case "italiaSite":
            window.open('../school_projects/dgm2740/Capstone-Project/index.html');
            break;
        case "cardsExample":
            window.open('../work_projects/cards.html');
            break;
        case "pokedexApp":
            window.open('https://pokedex-app.now.sh/', '_blank');
            break;
        case "starWarsApp":
            window.open('../school_projects/dgm3780/assignment02/index.html');
            break;
        case "weatherApp":
            window.open('https://suspicious-hoover-31ae51.netlify.com/', '_blank');
            break;
        case "checksExample":
            window.open('../work_projects/checks.html');
            break;
    }
}

// *** hrefs to external pages ***

function goToHome() {
    location.href = "../index.html";
}
function goToContact() {
    location.href = "../index.html";
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    $('body').toggleClass('noScroll');
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $('body').toggleClass('enableScroll');
}