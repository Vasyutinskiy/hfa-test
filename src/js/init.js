//Init future tabs
import initTabs from "future-tabs";
import * as enteredData from './addData.js';
import * as statusData from './status.js';
import * as textData from './textData.js';
initTabs('.tabs');

window.addEventListener('load', init);

function init() {
    enteredData.setUserData();
    enteredData.renderExperience();
    enteredData.renderFormation();
    enteredData.firstClick();
    statusData.initStatus();
    textData.initText();
}