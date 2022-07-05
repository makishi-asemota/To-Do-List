// function createProject() {

//     let myProjectList = [];

//     function Project(title) {
//         this.title = title
//     };

//     function addProjectToList(title) {
//         let project = new Project(title);
//         myProjectList.push(project);
//         displayProjects();
//     };

//     function displayProjects() {
//         const projList = document.querySelector(".projList")

//         const removeDivs = document.querySelectorAll(".eachproject");
//         for (let i = 0; i < removeDivs.length; i++) {
//             removeDivs[i].remove()
//         };

//         let index = 0

//         myProjectList.forEach(myProjectLists => {
//             const eachProject = document.createElement('li');
//             eachProject.classList.add("eachproject");
//             projList.appendChild(eachProject);

//             for (let key in myProjectLists) {
//                 const name = document.createElement('p');
//                 name.textContent = (`${myProjectLists[key]}`);
//                 eachProject.appendChild(name)
//             }

//             const removeProjectBtn = document.createElement("button");
//             removeProjectBtn.classList.add("remove-project");
//             removeProjectBtn.textContent = "Delete";

//             removeProjectBtn.dataset.linkedArray = index;
//             eachProject.appendChild(removeProjectBtn);

//             removeProjectBtn.addEventListener('click', removeProjectFromList);

//             function removeProjectFromList() {
//                 let projectToRemove = removeProjectBtn.dataset.linkedArray;
//                 myProjectList.splice(parseInt(projectToRemove), 1);
//                 eachProject.remove();
//                 displayProjects();
//             };
//             index++                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
//         });
//     };
    
//     const addProject = document.querySelector(".addProject");
//     addProject.addEventListener('click', newProject);
//     function newProject() {
//         document.getElementById("projectList").style.display = ''
//     };

//     const addProjectBtn = document.querySelector(".addProjectBtn");
//     addProjectBtn.addEventListener('click', projectData)
//     function projectData() {
//         let Title = document.getElementById("projectTitle").value;

//         if (Title == "") {
//             return
//         }

//         addProjectToList(Title)

//         document.getElementById('projectForm').reset();

//         document.getElementById("projectList").style.display = 'none'
//     };

//     const cancelProjectBtn = document.querySelector(".cancelProjectBtn");
//     cancelProjectBtn.addEventListener('click', cancelProject)
//     function cancelProject() {
//         document.getElementById("projectList").style.display = 'none'
//     }


// };

// export default createProject();