import { candidateInfo } from './data.js';

//List of elements for data inputs
let dataUser = document.querySelectorAll("[data-change]");
let experienceData = document.querySelector("#experience");
let formationData = document.querySelector("#formation");
let btnExp = experienceData.querySelector(".show-more_link");
let btnFor = formationData.querySelector(".show-more_link");
let ulExperience = experienceData.querySelector(".key-work_skills-list");
let ulFormation = formationData.querySelector(".key-work_skills-list");

btnExp.onclick = listToggle;
btnFor.onclick = listToggle;


export function setUserData(){
    dataUser.forEach(function (elem, arr, index) {
        let key = elem.dataset.change;
        elem.innerHTML = candidateInfo.persinfo[key];
    })
}

export function renderCart(obj){
    return `
        <li class="key-work_skills-item">
            <div class="skills-item_represent-cover">
                <!--img url should be added into the object-->
                <img src="${obj.img}" alt="agency-img">
                <div class="agency-contacts_text">
                    <p class="position_name">${obj.userposition}</p>
                    <p class="agency-name">${obj.jobplace}</p>
                    <p class="location-area">${obj.location}</p>
                </div>
                <div class="skills-item_represent-cover">
                    <p class="work-period">${obj.from + " - " + obj.to}</p>
                </div>
            </div>
        </li>
    `
}


export function renderExperience(){
    candidateInfo.experience.forEach(function(elem, arr, index){
        ulExperience.innerHTML += renderCart(elem);
    });
}

export function renderFormation(){
    candidateInfo.formation.forEach(function(elem, arr, index){
        ulFormation.innerHTML += renderCart(elem);
    });
}

export function listToggle(){
    let btn = this;
    let parentId = this.closest("article").id;
    let parent = this.closest("article").querySelector(".key-work_skills-list");

    if(btn.classList.contains("show-less_link")){
        btn.innerHTML = `Show less`;
        parent.classList.add("full-skills_item");
    }else {
        if(parentId == "formation"){
            btn.innerHTML = `Show ${candidateInfo.formation.length - 1} more`;

        }else if(parentId == "experience"){
            btn.innerHTML = `Show ${candidateInfo.experience.length - 1} more`;
        }
        parent.classList.remove("full-skills_item");
    }
    btn.classList.toggle("show-less_link");
}

export function firstClick() {
    btnExp.onclick();
    btnFor.onclick();
}



