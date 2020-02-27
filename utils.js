export function showHeader(jsonObj){
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