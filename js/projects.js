const projects = [{
    title: "Tinder Landing Page",
    description: "Tinder Landing Page built using HTML and CSS",
    coverUrl: "project_img/Screenshot_of_tinder_landing_page.png",
    demoLink: "https://crazyboi14dz.github.io/tinderLandingPage/",
    sourceLink: "https://github.com/crazyboi14dz/tinderLandingPage"
},
{
    title: "Consultancy Page",
    description: "Consultancy Page built using HTML, CSS, Vanilla JS and Bootstrap",
    coverUrl: "project_img/Screenshot_of_consultancy_service_for_business_single_web_page.png",
    demoLink: "https://crazyboi14dz.github.io/bootstrap-02C/",
    sourceLink: "https://github.com/crazyboi14dz/bootstrap-02C/"
},
{
    title: "Vehicle Rental System",
    description: "Vehicle Rental Management System created using Bootstrap, jQuery",
    coverUrl: "project_img/Screenshot_of_vehicle_management_system_web.png",
    demoLink: "https://crazyboi14dz.github.io/vehicleRentalManagmentSystem/",
    sourceLink: ""
},
];


function loadProjects() {
    const projectsList = document.querySelector("#projects .projects-list");

    let innerHTML = "";
    for (const { title, description, coverUrl, demoLink, sourceLink } of projects) {
        innerHTML += `
        <section class="project shadow move-y">
            <section class="image-container">
              <img loading="lazy" src="${coverUrl}" alt="">
            </section>
            <h3>${title}</h3>
            <p>${description}</p>
            <ul class="links">
              <li><a href="${demoLink}" target="_blank">Demo</a></li>
              <li><a href="${sourceLink}" target="_blank"><img width="30" height="30" src="svg/github.svg" alt="octocat iamge"> Source Code</a></li>
            </ul>
          </section >

        `
    }
    projectsList.innerHTML = innerHTML;


    // </section >
}

document.addEventListener("DOMContentLoaded", () => {
    loadProjects();
})