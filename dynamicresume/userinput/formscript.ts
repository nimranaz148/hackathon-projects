const nameinput = document.getElementById('name') as HTMLInputElement
const jobtitle = document.getElementById('jobtitle') as HTMLInputElement
const Phone = document.getElementById('Phone') as HTMLInputElement
const email = document.getElementById('email') as HTMLInputElement
const linkedin = document.getElementById('linkedin') as HTMLInputElement
const degree = document.getElementById('degree') as HTMLInputElement
const university = document.getElementById('university') as HTMLInputElement
const skill1 =  document.getElementById('skill1') as HTMLInputElement
const skill2 = document.getElementById('skill2') as HTMLInputElement
const skill3 = document.getElementById('skill3') as HTMLInputElement
const jobtitleexp = document.getElementById('jobtitleexp') as HTMLInputElement
const company = document.getElementById('company') as HTMLInputElement
const startyear = document.getElementById('startyear') as HTMLInputElement
const endyear = document.getElementById('endyear') as HTMLInputElement

const form = document.getElementById('resumeForm') as HTMLFormElement

form.addEventListener('submit' , (e) =>{
    e.preventDefault();

    localStorage.setItem('form_name', nameinput.value)
    localStorage.setItem('form_jobtitle', jobtitle.value)
    localStorage.setItem('form_Phone', Phone.value)
    localStorage.setItem('form_email', email.value)
    localStorage.setItem('form_linkedin', linkedin.value)
    localStorage.setItem('form_degree', degree.value)
    localStorage.setItem('form_university', university.value)
    localStorage.setItem('form_skill1', skill1.value)
    localStorage.setItem('form_skill2', skill2.value)
    localStorage.setItem('form_skill3', skill3.value)
    localStorage.setItem('jobtitleexp', jobtitle.value)
    localStorage.setItem('company', company.value)
    localStorage.setItem('startyear', startyear.value)
    localStorage.setItem('endyear', endyear.value)

    window.location.href = '../previewresumee/dynamic_Resumee.html'
});