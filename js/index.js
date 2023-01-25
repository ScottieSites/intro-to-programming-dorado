//Date constructor to store the Date() object
const today = new Date();
// Storing the year with the getFullYear method
const thisYear = today.getFullYear()
let footer = document.querySelector('footer')
let copyright = document.createElement('p')



copyright.innerHTML = `Scott Williams ${thisYear}`
footer.appendChild(copyright)

//Skills array
let skills = ['github', 'JavaScript', 'Python', 'NodeJS', 'MongoDB']
let skillsSection = document.querySelector('#skills')

let skillsList = skillsSection.lastElementChild


//Loop to add skills
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.setAttribute('id', 'web-skills')
    skill.innerText = skills[i]
    skillsList.appendChild(skill)

}

let submitButton = document.querySelector('#submit')
let editButton = document.querySelector('#edit')
let deleteButton = document.querySelector('#delete')
let rIndex, table = document.querySelector('table')


function emptyInput () {
    let isEmpty = false;
    let nameInput = document.querySelector('#name').value
    let emailInput = document.querySelector('#email').value
    let messageInput = document.querySelector('#message').value

    if(nameInput === ''){
        alert("Name can't be empty")
        isEmpty = true
    } else if(emailInput === ''){
        alert("Email can't be empty")
        isEmpty = true
    } else if(messageInput === ''){
        alert("Message can't be empty")
        isEmpty = true
    } 
    return isEmpty
}

submitButton.addEventListener('click', () => {

    if(!emptyInput ()) {
    let newRow = table.insertRow(table.length);
    let cellOne = newRow.insertCell(0);
    let cellTwo = newRow.insertCell(1);
    let cellThree = newRow.insertCell(2);
    let nameInput = document.querySelector('#name').value
    let emailInput = document.querySelector('#email').value
    let messageInput = document.querySelector('#message').value

    cellOne.innerHTML = nameInput;
    cellTwo.innerHTML =   `<a href=mailto: ${emailInput}>${emailInput}</a>`
    console.log(cellTwo);
    cellThree.innerHTML = messageInput;

    clickedRowtoInput()
    }
})


function clickedRowtoInput() {
    
    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].addEventListener('click', function () {
            rIndex = this.rowIndex;
            document.querySelector('#name').value = this.cells[0].innerHTML;
            document.querySelector('#email').value = this.cells[1].innerHTML;
            document.querySelector('#message').value = this.cells[2].innerHTML;
        })
    }
}

clickedRowtoInput()

editButton.addEventListener('click', () => {
    
    let nameInput = document.querySelector('#name').value
    let emailInput = document.querySelector('#email').value
    let messageInput = document.querySelector('#message').value
    if(!emptyInput ()) {
    table.rows[rIndex].cells[0].innerHTML = nameInput;
    table.rows[rIndex].cells[1].innerHTML = `<a href=mailto: ${emailInput}>${emailInput}</a>`
    table.rows[rIndex].cells[2].innerHTML = messageInput;
    }
})

deleteButton.addEventListener ('click', () =>  {
    table.deleteRow(rIndex);
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#message').value = '';

})


// const githubRequest = new XMLHttpRequest();


// githubRequest.addEventListener("load", function () {
    
//     let repositories = JSON.parse(this.responseText);
//     console.log(repositories);
//     let projectSection = document.querySelector('#projects')
//     let projectList = projectSection.querySelector('ul')
    
//     for(let i=0; i<repositories.length; i++){
//         let project = document.createElement('li');
//         projectList.appendChild(project)
//         let repoName = repositories[i].name
//         let repoUrl = repositories[i].html_url
//         let repoDescription  = repositories[i].description
//         project.innerHTML = `<a href=${repoUrl}>${repoName}</a> <span>${repoDescription}<span>`
//         console.log(repositories[i]);
    
// }
    
// });
// githubRequest.open('GET', "https://api.github.com/users/ScottieSites/repos")
// githubRequest.send(null);




const repositories = "https://api.github.com/users/ScottieSites/repos"



    fetch(repositories)
        .then (res => res.json())
        .then(data => {
            console.log(data);
            let projectSection = document.querySelector('#projects')
            let projectList = projectSection.querySelector('ul')
            for(let i=0; i<data.length; i++){
                        let project = document.createElement('li');
                        projectList.appendChild(project)
                        let repoName = data[i].name
                        let repoUrl = data[i].html_url
                        let repoDescription  = data[i].description
                        project.innerHTML = `<a href=${repoUrl}>${repoName}</a> <span>${repoDescription}<span>`
                        console.log(data[i]);
                    
                }
        })
        .catch(err => {
            console.log(`error ${err}`);
        })
