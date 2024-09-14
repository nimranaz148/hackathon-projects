let objectivebtn = document.getElementById('objectivebtn')
let educationbtn = document.getElementById('educationbtn')
let skillsbtn = document.getElementById('skillsbtn')
let workexpbtn = document.getElementById('workexpbtn')

let objectivesec:any = document.getElementById('objectivesec')
let edusec:any = document.getElementById('edusec')
let skillsec: any = document.getElementById('skillsec')
let workexpsec: any = document.getElementById('workexpsec')


objectivebtn?.addEventListener('click',()=>{

    if(objectivesec.style.display == 'block'){
        objectivesec.style.display = 'none';
    }else{
        objectivesec.style.display = 'block'
    }

})

educationbtn?.addEventListener('click',()=>{

    if(edusec.style.display == 'block'){
        edusec.style.display = 'none';
    }else{
        edusec.style.display = 'block'
    }

})

skillsbtn?.addEventListener('click',()=>{

    if(skillsec.style.display == 'block'){
        skillsec.style.display = 'none';
    }else{
        skillsec.style.display = 'block'
    }

})

workexpbtn?.addEventListener('click',()=>{

    if(workexpsec.style.display == 'block'){
        workexpsec.style.display = 'none';
    }else{
        workexpsec.style.display = 'block'
    }

})