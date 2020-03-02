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

$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
function scrollToBottom() {
    window.scroll({
        top: 10000,
        left: 0,
        behavior: 'smooth'
    });
}
function togglePortfolioCollapsible() {
    $("#schoolCollapse").collapse('hide');
    $("#extraCollapse").collapse('hide');
}
function toggleSchoolCollapsible() {
    $("#portfolioCollapse").collapse('hide');
    $("#extraCollapse").collapse('hide');
}
function toggleExtraCollapsible() {
    $("#portfolioCollapse").collapse('hide');
    $("#schoolCollapse").collapse('hide');
}

function hideSchoolFolders(id) {
    if (id === '2740Folder') {
        document.getElementById("dgmFolders").style.display = "none";
        document.getElementById("2740Folders").style.display = "";
    } else if (id === '2760Folder') {
        document.getElementById("dgmFolders").style.display = "none";
        document.getElementById("2760Folders").style.display = "";
    } else if (id === '2780Folder') {
        document.getElementById("dgmFolders").style.display = "none";
        document.getElementById("2780Folders").style.display = "";
    } else if (id === '2341Folder') {
        document.getElementById("dgmFolders").style.display = "none";
        document.getElementById("2341Folders").style.display = "";
    } else if (id === '3740Folder') {
        document.getElementById("dgmFolders").style.display = "none";
        document.getElementById("3740Folders").style.display = "";
    }
}
function hideSchoolFoldersMobile(id) {
    if (id === '2740FolderM') {
        document.getElementById("dgmFoldersM").style.display = "none";
        document.getElementById("2740FoldersM").style.display = "";
    } else if (id === '2760FolderM') {
        document.getElementById("dgmFoldersM").style.display = "none";
        document.getElementById("2760FoldersM").style.display = "";
    } else if (id === '2341FolderM') {
        document.getElementById("dgmFoldersM").style.display = "none";
        document.getElementById("2341FoldersM").style.display = "";
    }
}
function hidePortfolioFolders(id) {
    if (id === 'skillsFolder') {
        document.getElementById("portfolioFolders").style.display = "none";
        document.getElementById("portfolioArticles").style.display = "";
    } else if (id === 'programmingFolder') {
        $("#portfolioCollapse").collapse('hide');
        $("#schoolCollapse").collapse('show');
    } else if (id === 'extraCurrFolder') {
        $("#portfolioCollapse").collapse('hide');
        $("#extraCollapse").collapse('show');
    }
}
function hidePortfolioFoldersMobile(id) {
    if (id === 'skillsFolderM') {
        document.getElementById("portfolioFoldersM").style.display = "none";
        document.getElementById("portfolioArticlesM").style.display = "";
    } else if (id === 'programmingFolderM') {
        document.getElementById("portfolioFoldersM").style.display = "none";
        document.getElementById("portfolioArticlesM").style.display = "none";
        document.getElementById("2740FoldersM").style.display = "none";
        document.getElementById("2760FoldersM").style.display = "none";
        document.getElementById("2341FoldersM").style.display = "none";
        document.getElementById("dgmFoldersM").style.display = "";
        $("#portfolioCollapse").collapse('hide');
        $("#schoolCollapse").collapse('show');
    } else if (id === 'extraCurrFolderM') {
        document.getElementById("portfolioFoldersM").style.display = "none";
        document.getElementById("portfolioArticlesM").style.display = "none";
        document.getElementById("2740FoldersM").style.display = "none";
        document.getElementById("2760FoldersM").style.display = "none";
        document.getElementById("2341FoldersM").style.display = "none";
        document.getElementById("extraCurrProjsM").style.display = "";
    }
}
function goBack(id) {
    if (id === '2760Projects' || id === '2740Projects' || id === '2341Projects' || id === '3740Projects') {
        document.getElementById("dgmFolders").style.display = "";
        document.getElementById("2740Folders").style.display = "none";
        document.getElementById("2760Folders").style.display = "none";
        document.getElementById("2341Folders").style.display = "none";
        document.getElementById("3740Folders").style.display = "none";
    } else if (id === 'skillArticles' ) {
        document.getElementById("portfolioArticles").style.display = "none";
        document.getElementById("portfolioFolders").style.display = "";
    } else if (id === 'webProjects') {
        $("#schoolCollapse").collapse('hide');
        $("#portfolioCollapse").collapse('show');
    } else if (id === 'extraCurr') {
        $("#extraCollapse").collapse('hide');
        $("#portfolioCollapse").collapse('show');
    }
}
function goBackMobile(id) {
    if (id === '2760ProjectsM' || id === '2740ProjectsM' || id === '2341ProjectsM') {
        document.getElementById("dgmFoldersM").style.display = "";
        document.getElementById("2740FoldersM").style.display = "none";
        document.getElementById("2760FoldersM").style.display = "none";
        document.getElementById("2341FoldersM").style.display = "none";
    } else if (id === 'skillArticlesM' ) {
        document.getElementById("portfolioArticlesM").style.display = "none";
        document.getElementById("portfolioFoldersM").style.display = "";
    } else if (id === 'webProjectsM') {
        document.getElementById("dgmFoldersM").style.display = "none";
        document.getElementById("portfolioFoldersM").style.display = "";
    } else if (id === 'extraCurrM') {
        document.getElementById("extraCurrProjsM").style.display = "none";
        document.getElementById("portfolioFoldersM").style.display = "";
    }
}

function open2740Proj(id) {
    switch(id) {
        case "unit01-40":
        case "unit01-40M":
            window.open('../school_projects/dgm2740/Unit01/index.html');
            break;
        case "unit02-40":
        case "unit02-40M":
            window.open('../school_projects/dgm2740/Unit02/index.html');
            break;
        case "unit03-40":
        case "unit03-40M":
            window.open('../school_projects/dgm2740/Unit03/index.html');
            break;
        case "unit04-40":
        case "unit04-40M":
            window.open('../school_projects/dgm2740/Unit04/index.html');
            break;
        case "unit05-40":
        case "unit05-40M":
            window.open('../school_projects/dgm2740/Unit05/index.html');
            break;
        case "unit06-40":
        case "unit06-40M":
            window.open('../school_projects/dgm2740/Unit06/index.html');
            break;
        case "unit07-40":
        case "unit07-40M":
            window.open('../school_projects/dgm2740/Unit07/index.html');
            break;
        case "unit08-40":
        case "unit08-40M":
            window.open('../school_projects/dgm2740/Unit08/index.html');
            break;
        case "unit09-40":
        case "unit09-40M":
            window.open('../school_projects/dgm2740/Unit09/index.html');
            break;
        case "unit10-40":
        case "unit10-40M":
            window.open('../school_projects/dgm2740/Unit10/index.html');
            break;
        case "unit11-40":
        case "unit11-40M":
            window.open('../school_projects/dgm2740/Unit11/index.html');
            break;
        case "unit12-40":
        case "unit12-40M":
            window.open('../school_projects/dgm2740/Unit12/index.html');
            break;
        case "unit15-40":
        case "unit15-40M":
            window.open('../school_projects/dgm2740/Unit15/index.html');
            break;
        case "capstone-40":
        case "capstone-40M":
            window.open('../school_projects/dgm2740/Capstone-Project/index.html');
            break;
        case "mainProj":
        case "mainProjM":
            window.open('../school_projects/dgm2341/main.html');
            break;
        default:
        // code block
    }
}

function open2760Proj(id) {
    switch(id) {
        case "unit01":
        case "unit01M":
            window.open('../school_projects/dgm2760/Unit01/index.html');
            break;
        case "unit02":
        case "unit02M":
            window.open('../school_projects/dgm2760/Unit02/index.html');
            break;
        case "unit03":
        case "unit03M":
            window.open('../school_projects/dgm2760/Unit03/index.html');
            break;
        case "unit04":
        case "unit04M":
            window.open('../school_projects/dgm2760/Unit04/index.html');
            break;
        case "unit05":
        case "unit05M":
            window.open('../school_projects/dgm2760/Unit05/index.html');
            break;
        case "unit06":
        case "unit06M":
            window.open('../school_projects/dgm2760/Unit06/index.html');
            break;
        case "unit07":
        case "unit07M":
            window.open('../school_projects/dgm2760/Unit07/index.html');
            break;
        case "unit08":
        case "unit08M":
            window.open('../school_projects/dgm2760/Unit08/index.html');
            break;
        case "unit09":
        case "unit09M":
            window.open('../school_projects/dgm2760/Unit09/index.html');
            break;
        case "unit10":
        case "unit10M":
            window.open('../school_projects/dgm2760/Unit10/index.html');
            break;
        case "unit11":
        case "unit11M":
            window.open('../school_projects/dgm2760/Unit11/index.html');
            break;
        case "unit12":
        case "unit12M":
            window.open('../school_projects/dgm2760/Unit12/index.html');
            break;
        case "unit13":
        case "unit13M":
            window.open('../school_projects/dgm2760/Unit13/index.html');
            break;
        case "unit14":
        case "unit14M":
            window.open('../school_projects/dgm2760/Unit14/index.html');
            break;
        case "capstoneProj":
        case "capstoneProjM":
            window.open('../school_projects/dgm2760/Capstone_Project/index.html');
            break;
        default:
    }
}
function open2780Proj(id) {
    switch(id) {
        case "unit01-2780":
        case "unit01-2780M":
            window.open('../school_project/');
            break;
    }
}
function open3740Proj(id) {
    switch(id) {
        case "unit01-3740":
        case "unit01-3740M":
            window.open('../school_projects/dgm3740/Unit01/index.html');
            break;
    }
}
function openArticles(id) {
    switch(id) {
        case "eduCareerArticle":
        case "eduCareerArticleM":
            window.open('https://medium.com/@tsivie/education-and-career-article-22cc8621efe3?source=friends_link&sk=ae050cda6035fdbd5062947095d29279');
            break;
        case "resumeArticle":
        case "resumeArticleM":
            window.open('https://medium.com/@tsivie/tyler-ivie-c6417f29a397?source=friends_link&sk=dad44f8cbf0f826907b94917cb8cb4df');
            break;
        case "article1":
        case "article1M":
            window.open('https://medium.com/@tsivie/best-practices-with-video-for-the-web-1a159eea3b13?source=friends_link&sk=3cf4d59c8c86cec41cfedad8da8a5862');
            break;
        case "article2":
        case "article2M":
            window.open('https://medium.com/@tsivie/why-i-use-sketch-as-my-wireframing-tool-of-choice-7d2129363322?source=friends_link&sk=24b7f92f3809f23cb8bb63aa37a319d7');
            break;
        case "article3":
        case "article3M":
            window.open('https://medium.com/@tsivie/the-importance-of-involving-the-user-in-the-design-development-process-337e9c3cec0a?source=friends_link&sk=dce7123e26435076307867e7b8877f5f');
            break;
        case "article4":
        case "article4M":
            window.open('https://medium.com/@tsivie/how-extensive-research-for-a-complex-design-project-provided-clarity-and-direction-3de745030b24?source=friends_link&sk=6694b3614219197386f70f650071966f');
            break;
        case "article5":
        case "article5M":
            window.open('https://medium.com/@tsivie/responsive-grids-and-how-i-learned-to-used-them-for-mobile-web-app-development-5eee0f026438?source=friends_link&sk=bfe9abbecd2d7f01e10ca90f24557017');
            break;
        case "article6":
        case "article6M":
            window.open('https://medium.com/@tsivie/digital-design-process-making-logos-for-the-web-ab13ee89f2fa?source=friends_link&sk=bd0e533041bbe15ae8559232de94e81d');
            break;
        case "article7":
        case "article7M":
            window.open('https://medium.com/@tsivie/agt-deliverable-628b2a91a883?source=friends_link&sk=3f68ba7be1ee82b3f6e4a1bf5cb7fb09');
            break;
        // case "transcript":
        //     $('#transcriptModal').modal('show');
        //     break;
        default:
        // code block
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