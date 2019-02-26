import { candidateInfo } from './data.js';
let statusCollection = document.querySelectorAll(".add-work_skills-item");
let statusContainer = document.querySelector(".work-skills_content");

statusContainer.addEventListener('click', statusControl, true);

export function initStatus(){
    renderStatusData();
    setInputState();
}

function renderStatusData() {
    statusCollection.forEach(function(elem, arr, index){
        let inputItems = elem.querySelectorAll("input[type='text']");
        let parentId = elem.id;
        let currentObj = candidateInfo[parentId];
        for (let input of inputItems){
            let key = input.name;
            input.value = currentObj[key];
        }
    })
}

function setInputState (){
    statusCollection.forEach(function(elem, arr, index){
        let inputItems = elem.querySelectorAll("input[type='text']");
        if(elem.classList.contains("skills-active_item")){
            for (let input of inputItems){
                input.removeAttribute("disabled");
            }
        }else {
            for (let input of inputItems){
                input.setAttribute("disabled","disabled");
            }
        }
    })
}

function activeEdit(target) {
    let parent = target.closest(".add-work_skills-item");
    parent.classList.add("skills-active_item");
    setInputState();
}
function cancelEdit(target, parent = target.closest(".add-work_skills-item")) {
    parent.classList.remove("skills-active_item");
    setInputState();
}

function statusControl(e) {
    let target = e.target;
    if(target.parentNode.classList.contains("edit-icon_link") || target.classList.contains("edit-icon_link")){
        activeEdit(target);
    }else if(target.parentNode.classList.contains("action-cancel") || target.classList.contains("action-cancel")){
        cancelEdit(target);
    }else if(target.parentNode.classList.contains("action-confirm") || target.classList.contains("action-confirm")) {
        saveStatusData(target);
    }
}

function saveStatusData(target){
    let parent = target.closest(".add-work_skills-item");
    let parentId = parent.id;
    let inputs = parent.querySelectorAll("input[type='text']");
    let newData = {};
    for(let input of inputs){
        let key = input.name;
        let value = input.value;
        newData[key] = value;
    }
    candidateInfo[parentId] = newData;
    cancelEdit(target, parent);
}

