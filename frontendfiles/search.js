// const btn = document.getElementById("searchBtn");

// if (btn) {
//     btn.addEventListener("click", () => {
//         const keyword = document.getElementById("searchInput").value;
//         window.location.href = "search.html?keyword=" + encodeURIComponent(keyword);
//         // loadJobs();
//     });
// }

// const params = new URLSearchParams(window.location.search);

// const keyword = params.get("keyword");

// console.log(keyword);

// async function loadJobs(){

//     const response = await fetch(
//       `http://localhost:8080/SpecificJob?title=${keyword}`
//     );

//     const jobs = await response.json();

//     console.log(jobs);

//     displayJobs(jobs);

// }

// function displayJobs(jobs){

//     const jobList = document.getElementById("jobList");

//     jobList.innerHTML = "";

//     jobs.forEach(job=>{

//         jobList.innerHTML += `

//         <div class="card">

//             <h3>${job.jobTitle}</h3>

//             <p>${job.companyName}</p>

//             <p>${job.location}</p>

//         </div>

//         `;

//     });

    

//     }
// if (keyword) {
//     loadJobs();
// }

const btn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

const params = new URLSearchParams(window.location.search);
const keyword = params.get("keyword");

if (keyword && searchInput) {
  searchInput.value = keyword;
}
if (btn) {
  btn.addEventListener("click", () => {
      const val = searchInput.value;
	  if(val === ""){
	    alert("Search any job..!!");
	  }else{
	  window.location.href = "search.html?keyword=" + encodeURIComponent(val);
   }
    }); 
}


if (keyword) {
  loadJobs(keyword);
}

async function loadJobs(title) {
  try {
    const response = await fetch(`http://localhost:8080/SpecificJob?title=${encodeURIComponent(title)}`);
    const jobs = await response.json();
    displayJobs(jobs);
  } catch (err) {
    document.getElementById("resultCount").textContent = "Failed to load jobs.";
    console.error(err);
  }
}

function displayJobs(jobs) {
  const jobList = document.getElementById("jobList");
  const resultCount = document.getElementById("resultCount");

  resultCount.textContent = `${jobs.length} job${jobs.length !== 1 ? 's' : ''} found`;
  jobList.innerHTML = "";

  if (jobs.length === 0) {
    jobList.innerHTML = `<p style="padding:16px;color:#999;">No jobs found.</p>`;
    return;
  }

  jobs.forEach((job, i) => {
    const card = document.createElement("div");
    card.className = "job-card";
    card.id = "card-" + i;
    card.innerHTML = `
      <div class="jc-title">${job.jobTitle}</div>
      <div class="jc-company">${job.companyName}</div>
      <div class="jc-meta">
        <span class="badge badge-type">${job.jobType}</span>
        <span class="badge badge-loc">📍 ${job.location}</span>
        <span class="badge badge-sal">💰 ${job.salary}</span>
      </div>`;
    card.addEventListener("click", () => showDetail(job, i));
    jobList.appendChild(card);
  });
}

function showDetail(job, index) {
  document.querySelectorAll(".job-card").forEach(c => c.classList.remove("active"));
  document.getElementById("card-" + index).classList.add("active");

  const skills = job.skillsRequired
    .split(",")
    .map(s => `<span class="skill-tag">${s.trim()}</span>`)
    .join("");

  document.getElementById("detailPanel").innerHTML = `
    <div class="detail-title">${job.jobTitle}</div>
    <div class="detail-company">${job.companyName}</div>
    <div class="detail-badges">
      <span class="badge badge-type">${job.jobType}</span>
      <span class="badge badge-loc">📍 ${job.location}</span>
      <span class="badge badge-sal">💰 ${job.salary}</span>
    </div>
    <button onclick="document.getElementById('applyBtn').innerHTML = 'Applied!'"  id="applyBtn" class="apply-btn">Apply now</button>
    <hr class="divider">

    <div class="info-grid">
      <div class="info-item"><div class="label">Experience</div><div class="value">${job.experience}</div></div>
      <div class="info-item"><div class="label">Job type</div><div class="value">${job.jobType}</div></div>
      <div class="info-item"><div class="label">Location</div><div class="value">${job.location}</div></div>
      <div class="info-item"><div class="label">Salary</div><div class="value">${job.salary}</div></div>
    </div>
    <hr class="divider">
    <div class="section-label">Job description</div>
    <p class="desc">${job.jobDescription}</p>
    <hr class="divider">
    <div class="section-label">Skills required</div>
    <div class="skills-wrap">${skills}</div>
    <div class="deadline">⏳ Deadline: ${job.jobDeadline}</div>`;
}
// const applyBtn = document.getElementById("applyBtn");
// if (applyBtn) {
//   applyBtn.addEventListener("click", () => {
//     alert("Application submitted!");    
//   });
// }