const data = [
    {
        title: "Software Trainer",
        date: "March 28, 2024 to Present",
        description: "Currently, I'm working Software Trainer at Gtec Computer Education"
    },
    {
        title: "MSc Computer Science",
        date: "March 30, 2024",
        description: "Completed Msc Computer Science at BVMHCC Cherpunkal, MG University Kottayam"
    },
    {
        title: "BCA",
        date: "March 30, 2022",
        description: "Completed Bachelor of Computer Application at Mar Kuriakose Arts and Science College Puthuvely, MG University Kottayam"
    },
    {
        title: "Started Web Designing",
        date: "August 19, 2020",
        description: "To explore more on Web Designing"
    },
    {
        title: "Computer Science",
        date: "March 30, 2019",
        description: "Completed my schooling in Computer Science at OLLHSS Uzhavoor"
    },
    {
        title: "NSS",
        date: "June 01, 2017",
        description: "Participated National Service Scheme"
    },
    {
        title: "NCC",
        date: "July 25, 2015",
        description: "Participated National Cadet Crops"
    },

    {
        title: "School Education",
        date: "June 01, 2006",
        description: "Started my Schooling at St.Joannas UPS, Uzhavoor"
    },

    {
        title: "Born",
        date: "August 30, 2001",
        description: "Born to a sweet parents who are very much loving and caring"
    }
];
const timelineContainer = document.getElementById('timelineContainer');
const timelines = data.map((timeline, i) => {

    return (
        `
        <div class="row content" key='${i}' >
    <div class="col-lg-1">
        <div class="verticalLine"></div>
        <div class="badgeEle mt-2 mb-2"></div>
        <div class="verticalLine"></div>
    </div>
    <div class="col-lg-11">
        <div class="card shadow">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h5>${timeline.title}</h5>
              <h4>${timeline.date}</h4>
            </div>
            <p class="mt-3">${timeline.description}</p>
          </div>
        </div>
    </div>
  </div>
    `
    )
}).join('');
timelineContainer.innerHTML = timelines;
