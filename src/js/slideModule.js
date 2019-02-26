//Page variables
export let sideSkillsContent = document.querySelector(".key-skills_content");
export let sideWorkContent = document.querySelector(".work-skills_content");
export let addSidebar = document.querySelector(".candidate-add_info-bar");
let userTabletMenu = document.querySelector(".admin-bar");
let tabletMenuBtn = document.querySelector(".current-data");
let mobileMenuBtn = document.querySelector(".current-data_mobile");
let sideBarButton = document.querySelector(".swipe-btn_icon");

//Sidebar user tablet menu function
tabletMenuBtn.onclick = function(){
    userTabletMenu.classList.toggle("tablet-menu_state");
    if(addSidebar.classList.contains("toggled-bar")){
        userTabletMenu.classList.remove('tablet-menu_state');
    }
};

//Sidebar user mobile menu function
mobileMenuBtn.onclick = function(){
    userTabletMenu.classList.toggle("tablet-menu_state");
    if(addSidebar.classList.contains("toggled-bar")){
        userTabletMenu.classList.remove('tablet-menu_state');
    }
};

//Additional sidebar slide function
sideBarButton.onclick = function(){
    addSidebar.classList.toggle("toggled-bar");
    if(userTabletMenu.classList.contains("tablet-menu_state")){
        addSidebar.classList.remove('toggled-bar');
    }
    sideSkillsContent.classList.toggle("sidebar-grid_skills");
    sideWorkContent.classList.toggle("work-grid_skills");
};