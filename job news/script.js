// Fetch job news when the page loads
fetchJobNews();

async function fetchJobNews() {
    const jobList = document.getElementById('job-list');
    jobList.innerHTML = '<span class="loader"></span>'

    try {
        const response = await fetch('https://remotive.com/api/remote-jobs'); // RemoteOK API
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        jobList.innerHTML = '';

        const jobs = data.jobs; // Array of jobs from the API

        jobs.forEach(job => {
            const jobItem = document.createElement('div');
            jobItem.classList.add('job-item');
            jobItem.innerHTML = `
                <div class="feed">
                <h2 style= "color: #045be6;margin-left: 250px" >${job.title}</h2>
                <p><strong>Company:</strong>${job.company_name}</p>
                <p><strong>Location:</strong> ${job.candidate_required_location || 'Remote'}</p>
                <p>${job.description}</p>
                <p><a href="${job.url}" style="text-decoration: none;margin-left: 350px" target="_blank"><button>Apply Here</button></a></p>
                </div><br><br>
            `;
            jobList.appendChild(jobItem);
        });
    } catch (error) {
        jobList.innerHTML = 'Failed to fetch job news: ' + error.message;
    }
}
 