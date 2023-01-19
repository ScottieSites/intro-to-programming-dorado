//Date constructor to store the Date() object
const today = new Date();
// Storing the year with the getFullYear method
const thisYear = today.getFullYear()
let footer = document.querySelector('footer')
let copyright = document.createElement('p')
let message = document.querySelector('#message')
let messageItems = document.querySelector('#list')
let sectionMessages = document.querySelector('#messages')


//Show Messages function
// function showMessages() {

//     if (Boolean(messageItems.firstElementChild) === false) {
//         sectionMessages.style.display = 'none'
//     } else
//         sectionMessages.style.display = 'block'
// }


// showMessages()


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

const messageForm = document.querySelector('[name="leave_message"]')


//Create message 
messageForm.addEventListener('submit', event => {
    event.preventDefault();
    let getName = document.querySelector('[name="name"]').value
    let getEmail = document.querySelector('[name="email"]').value
    let getMessage = document.querySelector('[name="message"]').value
    let messageSection = document.querySelector('#messages')
    let newMessage = document.createElement('li');
     newMessage.setAttribute('id', 'inputs')
     
    let removeButton = document.createElement('button')
    let editButton = document.createElement('button')
    let messageList = messageSection.lastElementChild

    // console.log(h2);
    // console.log(messageSection);

// Remove and Edit button creation 
    removeButton.innerText = 'remove'
    removeButton.setAttribute('type', 'button')
    editButton.innerText = 'edit'
    editButton.setAttribute('type', 'button')
    newMessage.innerHTML = `<a href=mailto: ${getEmail}>${getName}</a>  <span>wrote:${getMessage}</span>`
    newMessage.appendChild(removeButton)
    messageList.appendChild(newMessage)
    newMessage.appendChild(editButton)
    


    messageForm.reset();

    // Remove button
    removeButton.addEventListener('click', () => {
        let enrty = removeButton.parentNode
        enrty.remove()
    })

    //Edit button 
    editButton.addEventListener('click', () => {
        newMessage.contentEditable = true;
        console.log();
        // let editText = newMessage.children
        // for(let i=0; i<editText.length; i++){
        //     messageItems = editText[i].innerText
             
        //        console.log(messageItems);
        //       }
        
        //console.log(editText[0].innerText);

        //  email.value = messageItems.firstElementChild.innerText
        // console.log(editText.value);
        //   for(let i=0; i<editText.length; i++){
        // //     console.log(editText);
        //  }
        
        //let editText = document.querySelector('email')
        //let editText = messageItems.children
        //editText.value = messageItems.firstElementChild.firstElementChild.nextElementSibling.innerText
        //console.log(editText.value);
        // console.log(editText);
        // //  for(let i=0; i<editText.length; i++) {
        //     //  let editTextChild = editText[i].innerText
        //     //  editText.value = editTextChild
        //     // editText.value = editTextChild.innerText
        // }
// //         editText.value = messageItems.firstElementChild.firstElementChild.nextElementSibling.innerText
        //   let parent = editButton.parentElement
        // parent.parentElement.removeChild(parent)
// // // ;
    })




});

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
