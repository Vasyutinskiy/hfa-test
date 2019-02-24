import initTabs from "future-tabs";
//Init future tabs
initTabs('.tabs');

let styleSelect = require('styleSelect');

let userTabletMenu = document.querySelector(".admin-bar");
let tabletMenuBtn = document.querySelector(".current-data");
let mobileMenuBtn = document.querySelector(".current-data_mobile");
let addSidebar = document.querySelector(".candidate-add_info-bar");
let sideBarButton = document.querySelector(".swipe-btn_icon");

let sideSkillsContent = document.querySelector(".key-skills_content");
let sideWorkContent = document.querySelector(".work-skills_content");



let showFullListBtn = document.querySelector(".show-more_link");
let editWorkInfoBtn = document.querySelector(".edit-icon_link");
console.log(editWorkInfoBtn);
let editWorkItem = document.querySelector(".add-work_skills-item");





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

//Sidebar add bar slide function
sideBarButton.onclick = function(){
    addSidebar.classList.toggle("toggled-bar");
    if(userTabletMenu.classList.contains("tablet-menu_state")){
        addSidebar.classList.remove('toggled-bar');
    }
    sideSkillsContent.classList.toggle("sidebar-grid_skills");
    sideWorkContent.classList.toggle("work-grid_skills");
};

//Should be this click and toggle
showFullListBtn.onclick = function(){
    let toggledItemList = document.querySelectorAll(".key-work_skills-list");
    for (let i = 0; i < toggledItemList.length; i++) {
        // let currentItem = toggledItemList[i];
            console.log(this);
            toggledItemList[i].classList.toggle("full-skills_item");

    }
};

function currentCounter() {

}

editWorkInfoBtn.onclick = function(){
    editWorkItem.classList.toggle("active-item");
};



//Main user obj
let candidateInfo = {
    jobs: [
        {
            id: 1,
            title: 'Google',
            href: 'https://google.com',
            img: 'https://picsum.photos/97/97/?random',
            from: 'sept 2018',
            to: 'now',
        },
        {
            id: 2,
            title: 'Facebook',
            href: 'https://facebook.com',
            img: 'https://picsum.photos/97/97/?random',
            from: 'sept 2018',
            to: 'now',
        }

    ],
    universities: [
        {
            id: 1,
            title: 'Google',
            href: 'https://google.com',
            img: 'https://picsum.photos/97/97/?random',
            from: 'sept 2018',
            to: 'now',
        },
        {
            id: 2,
            title: 'Facebook',
            href: 'https://facebook.com',
            img: 'https://picsum.photos/97/97/?random',
            from: 'sept 2018',
            to: 'now',
        }

    ],
    currentstatus: {
        id: 1,
        salarybase: '$100k',
        salaryvariable: '$10k',
        advantages: '',
        location: 'Dnipro',
    },
    whishedstatus: {
        id: 2,
        salarybase: '$120k',
        salaryvariable: '$5k',
        advantages: '',
        location: 'Chicago',
    },
    languages: [
        {
            id: 1,
            title: 'english',
        },
        {
            id: 2,
            title: 'french',
        }
    ],
    texts: {
        name: 'John White',
        position: 'Front-end developer',
        experience: '12 years',
        phone: '+1234567890',
        profesionalemail: '123123@noweb.com',
        personalemail: '123123@gmail.com',
        linkedin: 'linkedin.com',
    },
    editdate: {
        text: '',
    },
};