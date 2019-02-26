import { candidateInfo } from './data.js';
import { sideSkillsContent, addSidebar, sideWorkContent } from "./slideModule";

let editTextControls = document.querySelector(".editable-controls");
let alignItems = document.querySelectorAll(".align-item");
let areaAddText = document.querySelector(".add-candidate_content");
let sizeSelect = document.querySelector("#size-select");
let saveAddTextBtn = document.querySelector(".update-content_btn");

editTextControls.onclick = formatData;
saveAddTextBtn.onclick = saveAddTextData;
sizeSelect.onchange = selectFontSize;

export function initText(){
    renderAddTextData();
    saveAddTextData();
}

function renderAddTextData() {
    areaAddText.innerHTML = candidateInfo.editdata.addtext;
}

function selectFontSize(e){
    let selectedOption = e.target;
    let optionValue = selectedOption.value;
    if(optionValue == "12"){
        areaAddText.style.fontSize = "12px";
    }else if(optionValue == "14"){
        areaAddText.style.fontSize = "14px";
    }else if(optionValue == "16"){
        areaAddText.style.fontSize = "16px";
    }else if(optionValue == "18"){
        areaAddText.style.fontSize = "18px";
    }else if(optionValue == "20"){
        areaAddText.style.fontSize = "20px";
    }else {
        return;
    }
}

function formatData(e){
    let target = e.target;
    if(target.classList.contains("font-item")){
        target.classList.toggle("active-edit_icon");
    }else if (target.classList.contains("align-item")){
        alignItems.forEach(function (elem) {
            if(elem == target){
                elem.classList.add("active-edit_icon");
            }else {
                elem.classList.remove("active-edit_icon");
            }
        })
    }
    if(target.classList.contains("underline-item")){
        areaAddText.style.textDecoration =
            target.classList.contains("active-edit_icon") ? "underline" : "none";
    }else if(target.classList.contains("bold-item")){
        areaAddText.style.fontWeight =
            target.classList.contains("active-edit_icon") ? "bold" : "normal";
    }else if(target.classList.contains("italic-item")){
        areaAddText.style.fontStyle =
            target.classList.contains("active-edit_icon") ? "italic" : "normal";
    }else if(target.classList.contains("align-item") && target.classList.contains("active-edit_icon")){
        areaAddText.style.textAlign =
            target.classList.contains("center-item") ? "center" :
            target.classList.contains("left-item") ? "left" :
            target.classList.contains("right-item") ? "right" : "left";
    }
    else {
        return;
    }
}


function saveAddTextData(){
    let newData = {};
    let areaName = areaAddText.name;
    newData[areaName] = areaAddText.value;
    candidateInfo['editdata'] = newData;
    //to see data changes
    console.log(newData);
    //Close add sidebar after update add Info
    addSidebar.classList.remove("toggled-bar");
    sideSkillsContent.classList.remove("sidebar-grid_skills");
    sideWorkContent.classList.remove("work-grid_skills");
}