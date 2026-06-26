const form = document.getElementById("jobForm");

form.addEventListener("submit", postJob);

async function postJob(event) {

    event.preventDefault();

    const job = {
        jobTitle: form.jobTitle.value,
        companyName: form.companyName.value,
        location: form.location.value,
        jobType: form.jobType.value,
        salary: form.salary.value,
        experience: form.experience.value,
        skillsRequired: form.skillsRequired.value,
        jobDescription: form.jobDescription.value,
        jobDeadline: form.jobDeadline.value
    };
console.log(job);
try {

        const response = await fetch("http://localhost:8080/jobapp", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(job)

        });

        if (!response.ok) {
            throw new Error("Failed to post job");
        }

        const result = await response.json();

        alert("Job posted successfully!");
        console.log(result);

        form.reset();

    } catch (error) {
        console.error(error);
        alert("Error posting job.");
    }
}


// const button = document.getElementById("searchBtn");

// button.addEventListener("click", () => {

//     const keyword = document.getElementById("searchInput").value;
//     console.log(keyword);
//     window.location.href =
//     "search.html?keyword=" + keyword;
//     // loadJobs();
// });

// const params = new URLSearchParams(window.location.search);

// const keyword = params.get("keyword");

// console.log(keyword);
