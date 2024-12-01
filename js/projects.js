const data = [
    {
        title: "Be Well",
        source:"https://github.com/bijali-jlakshmi123/",
        external:"https://github.com/bijali-jlakshmi123/",
        description: "To build an application to reduce the manual activities of pharmacy",
        tech:[
            {stack:"PHP"},
            {stack:"Laravel"},
            {stack:"MYSQL"}
        ]
    },

    {
        title: "Smart Waste",
        source:"https://github.com/bijali-jlakshmi123/",
        external:"https://github.com/bijali-jlakshmi123/",
        description: "To cover all types of e-waste in an integrated manner from all the waste sources",
        tech:[
            {stack:"Java"},
            {stack:"JSP"},
            {stack:"MYSQL"}
        ]
    },


    {
        title: "Automated Pet Feeder",
        source:"https://github.com/bijali-jlakshmi123/",
        external:"https://github.com/bijali-jlakshmi123/",
        description: "To feed the food of pets in automatic ways, it is a IOT project",
        tech:[
            {stack:"Arduino"},
            {stack:"HTML"},
            {stack:"Javascript"}
        ]
    },


    {
        title: "Online Turf Booking",
        source:"https://github.com/bijali-jlakshmi123/",
        external:"https://github.com/bijali-jlakshmi123/",
        description: "Efficient way of Playground and sports activities",
        tech:[
            {stack:"Python"},
            {stack:"Django"},
            {stack:"MYSQL"}
        ]
    },


    {
        title: "Event Management System",
        source:"https://github.com/bijali-jlakshmi123/",
        external:"https://github.com/bijali-jlakshmi123/",
        description: "Based on all events, according to our available times",
        tech:[
            {stack:"Python"},
            {stack:"Django"},
            {stack:"MYSQL"}
        ]
    },


    {
        title: "Portfolio",
        source:"https://github.com/bijali-jlakshmi123/",
        external:"https://github.com/bijali-jlakshmi123/",
        description: "My Personal Website",
        tech:[
            {stack:"HTML"},
            {stack:"CSS"},
            {stack:"Bootstrap"}
        ]
    },

];
const projectContainer = document.getElementById("projectContents");
const projects = data.map((project, i) => {

    return (
        `
        <div class="col-lg-6" key=${i}>
        <div class="card shadow">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h5>Featured Project</h5>
                    <div class="links">
                        <a href="${project.source}"<i class="fa fa-github" aria-hidden="true"></i></a>
                       <a href="${project.external}" <i class="fa fa-external-link" aria-hidden="true"></i></a>
                    </div>
                </div>
                <h3>${project.title}</h3>
                <p class="mt-3">${project.description}</p>
                ${project.tech.map((stack, i) => {
                    return `
                    <span class="badge rounded-pill">${stack.stack}</span>
                    `
                })}
            </div>
        </div>
    </div>

    `
    )
}).join('');
projectContainer.innerHTML = projects;
