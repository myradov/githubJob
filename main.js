// import { showHeader } from 'utils.js'
// const { showHeader } = require('utils.js');

const jobTitle = document.querySelector('.title');
const company = document.querySelector('.company');




const article = document.querySelector('ul');
let baseURL = 'https://jobs.github.com/positions.json'


const searchPosition = document.querySelector('.search-position')
searchPosition.addEventListener('keypress', setQuery)

function setQuery(e){
    if(e.keyCode == 13){
        getResults(searchPosition.value)
        // console.log(searchPosition.value, "Retrieving results")
    }
}
function getResults(qposition){
    fetch(`${baseURL}?description=${qposition}`)
        .then(res => {
            return res.json();
        })
        .then(reverseList)
        .then(displayResults);
}




function reverseList(array){
    const arrays = array
    let reversedList = []
    for( let i = 0; i < arrays.length; i++){
        reversedList.push(arrays[i])
    }
    return reversedList.reverse();

}


const totalCounter = document.querySelector('#results')
function displayResults(position){
    let count = 0;
    clear();
    const arrayList = position;


    arrayList.forEach((element) => {
        count++;
        const results = `
            <li class="list">
                <img src="${element.company_logo}">
                <a href="#" onclick="window.open('${element.url}', '_blank')">
                    <h2 class="job_title">${element.title}</h2>
                </a>
                <p class="job_company">${element.company}</p>
                <p class="job_location">${element.location}</p>
                <p class="job_type">${element.type}</p>
                <small class="job_date">Published: ${element.created_at}</small>
            </li>       
        `;
    article.insertAdjacentHTML('afterbegin', results);
    // searchPosition.value = '';
    });
    
    const total = `
    <span class="countStyle">Total ${count} jobs for ${searchPosition.value}</span>
    `; 
    clearCount()
    console.log(count)
    totalCounter.insertAdjacentHTML("afterbegin", total);
    
    // console.log(typeof(results));
    // console.log("result is running")
}


// function clearInput(e){
//     e.target.value = ' ';
// }
// const clearableInput = document.querySelector('.clearInput')
// clearableInput.addEventListener('click', )

function clear(){
    while(article.firstChild) 
    article.removeChild(article.firstChild);
}

function clearCount(){
    while (totalCounter.firstChild)
        totalCounter.removeChild(totalCounter.firstChild);
}



// window.onload = getData();
/**
 * Some other way
 */

function getData(){
    let requestURL = 'https://jobs.github.com/positions.json'
    let request = new XMLHttpRequest()

    request.open('GET', requestURL, true)
    request.responseType = 'json'
    request.onload = () =>{
        const jobs = request.response;

        showHeader(jobs)
        // showJobs(jobs)
        // showDetails(jobs) 
    }
    request.send()
}




function showHeader(jsonObj){
   const testJobs = jsonObj
   testJobs.slice().sort((a,b)=> a-b);
//    let count = 0
   for( let i = 0; i < testJobs.length; i++ ){
    // count++
    const test =  `
            <li class="list">
                <img src="${testJobs[i].company_logo}">
                <a href="${testJobs[i].url}" id="clinkLink">
                    <h2 class="job_title">${testJobs[i].title}</h2>
                </a>
                <p class="job_company">${testJobs[i].company}</p>
                <p class="job_location">${testJobs[i].location}</p>
                <p class="job_type">${testJobs[i].type}</p>
                <small class="job_date">Published: ${testJobs[i].created_at}</small>
            </li>
        <br>
    `;
    article.insertAdjacentHTML("afterbegin", test); //options ="beforebegin", "afterbegin","beforeend", "afterend"
     //options ="beforebegin", "afterbegin","beforeend", "afterend"
   }
    // const total = `
    //     <span class="countStyle">Total ${count} jobs for ${searchPosition.value}</span>
    //     `; 
    //     console.log(count)
    // article.insertAdjacentHTML("beforebegin", total);
    
}


//reverse the list elements



function showJobs(jsonObj){   
    const allJobs = jsonObj;
    
    for( let i = 0; i < allJobs.length; i++ ){
        const ulList = document.querySelector('ul')
        const lists = document.createElement('li')
        const myList = document.createElement('h1')
        const myH2 = document.createElement('h2')
        const myP = document.createElement('p')

        
        myList.textContent = allJobs[i].title
        myH2.textContent = allJobs[i].type
        myP.textContent = allJobs[i].company
        lists.appendChild(myList)
        lists.appendChild(myH2)
        lists.appendChild(myP)

        // console.log(allJobs[i].type)
        // console.log(allJobs[i].company)
        // console.log(allJobs[i].title)
        ulList.appendChild(lists)
    }
        

}
