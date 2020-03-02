function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    $('body').toggleClass('noScroll');
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $('body').toggleClass('enableScroll');
}
function scrollToContact() {
    window.scroll({
        top: 10000,
        left: 0,
        behavior: 'smooth'
    });
}
function scrollToAboutMe() {
    window.scroll({
        top: 1200,
        left: 0,
        behavior: 'smooth'
    });
}
function scrollToMyWorkMobile() {
    window.scroll({
        top: 350,
        left: 0,
        behavior: 'smooth'
    });
}
function scrollToAboutMeMobile() {
    window.scroll({
        top: 2100,
        left: 0,
        behavior: 'smooth'
    });
}
function myWorkPage() {
    location.href = "subpages/myWork.html";
}
function cardsTablePage() {
    location.href = "work_projects/cards.html";
}
function moabTravelPage() {
    location.href = "school_projects/dgm2341/main.html";
}
