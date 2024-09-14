window.addEventListener('load',() =>{
    let name = localStorage.getItem('form_name')
    let jobtitle = localStorage.getItem('form_jobtitle')
    let Phone = localStorage.getItem('form_Phone')
    let email = localStorage.getItem('form_email')
    let linkedin = localStorage.getItem('form_linkedin')
    let degree = localStorage.getItem('form_degree')
    let university = localStorage.getItem('form_university')
    let skill1 = localStorage.getItem('form_skill1')
    let skill2 = localStorage.getItem('form_skill2')
    let skill3 = localStorage.getItem('form_skill3')
    let jobtitleexp = localStorage.getItem('jobtitleexp')
    let company = localStorage.getItem('company')
    let startyear =localStorage.getItem('startyear')
    let endyear =localStorage.getItem('endyear')

    
    document.getElementById('form_name')!.textContent = name
    document.getElementById('jobtitle')!.textContent = jobtitle
    document.getElementById('Phone')!.textContent = Phone
    document.getElementById('email')!.textContent = email
    document.getElementById('linkedin')!.textContent = linkedin
    document.getElementById('degree')!.textContent = degree
    document.getElementById('university')!.textContent = university
    document.getElementById('skill1')!.textContent = skill1
    document.getElementById('skill2')!.textContent = skill2
    document.getElementById('skill3')!.textContent = skill3
    document.getElementById('jobtitleexp')!.textContent = jobtitleexp
    document.getElementById('company')!.textContent = company
    document.getElementById('startyear')!.textContent =startyear
    document.getElementById('endyear')!.textContent = endyear

 

    const username = name ? name.toLowerCase().replace(/\s+/g, '-') : 'user'; // Generate username from the name
const baseUrl = 'http://127.0.0.1:5501/dynamicresume/previewresumee/dynamic_Resumee.html'; // Your Vercel deployment URL
const uniqueResumeUrl = `${baseUrl}?/${username}`; // Create unique URL

// Set the resume link in the DOM
const resumeLink = document.getElementById('resumeLink') as HTMLAnchorElement;
resumeLink.setAttribute('href', uniqueResumeUrl);




// Copy link to clipboard functionality
document.getElementById('copyLinkBtn')!.addEventListener('click', () => {
 navigator.clipboard.writeText(uniqueResumeUrl).then(() => {
   alert('Resume link copied to clipboard!');
 });
});
})






document.getElementById('printBtn')!.addEventListener('click', () => {
    window.print(); // Simply trigger the print action
  });


  document.getElementById('editBtn')!.addEventListener('click', () => {
    window.history.back();
  });