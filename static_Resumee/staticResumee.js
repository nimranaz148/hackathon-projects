"use strict";
let objectivebtn = document.getElementById('objectivebtn');
let educationbtn = document.getElementById('educationbtn');
let skillsbtn = document.getElementById('skillsbtn');
let workexpbtn = document.getElementById('workexpbtn');
let objectivesec = document.getElementById('objectivesec');
let edusec = document.getElementById('edusec');
let skillsec = document.getElementById('skillsec');
let workexpsec = document.getElementById('workexpsec');
objectivebtn?.addEventListener('click', () => {
    if (objectivesec.style.display == 'block') {
        objectivesec.style.display = 'none';
    }
    else {
        objectivesec.style.display = 'block';
    }
});
educationbtn?.addEventListener('click', () => {
    if (edusec.style.display == 'block') {
        edusec.style.display = 'none';
    }
    else {
        edusec.style.display = 'block';
    }
});
skillsbtn?.addEventListener('click', () => {
    if (skillsec.style.display == 'block') {
        skillsec.style.display = 'none';
    }
    else {
        skillsec.style.display = 'block';
    }
});
workexpbtn?.addEventListener('click', () => {
    if (workexpsec.style.display == 'block') {
        workexpsec.style.display = 'none';
    }
    else {
        workexpsec.style.display = 'block';
    }
});
