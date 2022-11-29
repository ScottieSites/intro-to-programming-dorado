//Date constructor to store the Date() object
const today = new Date();
// Storing the year with the getFullYear method
const thisYear = today.getFullYear()
let footer  = document.querySelector('footer')
let copyright = document.createElement('p')



copyright.innerHTML = `Scott Williams ${thisYear}`
footer.appendChild(copyright)

//Skills array
let skills = ['github', 'JavaScript', 'Python', 'NodeJS', 'MongoDB']
let skillsSection = document.querySelector('#skills')

let skillsList = skillsSection.lastElementChild
console.log(skillsList);

//Loop to add skills
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i]
    skillsList.appendChild(skill)
    
}
