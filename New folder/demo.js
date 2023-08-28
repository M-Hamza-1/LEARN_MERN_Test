const projectsData = [
  {
    id: 1,
    projectName: "Employee Management",
    projectDesc:
      "This project aims to build an employee management system that consolidates all information of a company",
    tags: ["React", "CSS", "Material Ui"],
    code: "https://github.com/hhhrrrttt222111/developer-portfolio",
    demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
    image: 1,
  },
  {
    id: 2,
    projectName: "Railway Tracking",
    projectDesc:
      "This project is a railway tracking system that allows users to obtain relevant information about train timing.",
    tags: ["Django", "Tailwind CSS"],
    code: "https://github.com/hhhrrrttt222111/developer-portfolio",
    demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
    image: 2,
  },
  {
    id: 3,
    projectName: "Weather App",
    projectDesc:
      "Weather forecast systems and applications predict weather conditions based on multiple parameters.",
    tags: ["Django", "CSS", "Material Ui"],
    code: "https://github.com/hhhrrrttt222111/developer-portfolio",
    demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
    image: 3,
  },
  {
    id: 4,
    projectName: "Android Patient Tracker",
    projectDesc:
      "This project involves the development of an Android application for viewing and managing patient data.",
    tags: ["Flutter", "Firebase"],
    code: "https://github.com/hhhrrrttt222111/developer-portfolio",
    demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
    image:4,
  },
  {
    id: 5,
    projectName: "E-Commerce App",
    projectDesc: "A Simple E-commerce application",
    tags: ["React Native", "Firebase"],
    code: "https://github.com/hhhrrrttt222111/developer-portfolio",
    demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
    image: 5,
  },
  {
    id: 6,
    projectName: "Uber Lite",
    projectDesc: "Uber clone",
    tags: ["Flutter"],
    code: "https://github.com/hhhrrrttt222111/developer-portfolio",
    demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
    image: 6,
  },
  {
    id: 7,
    projectName: "Stock Market App",
    projectDesc: "A simple stock market API app",
    tags: ["React", "Redux", "Bootstrap"],
    code: "https://github.com/hhhrrrttt222111/developer-portfolio",
    demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
    image: 7,
  },
  {
    id: 8,
    projectName: "Car Pooling System",
    projectDesc:
      "The carpooling system merges multiple people in a car which leads to meet new people, reduces pollution",
    tags: ["Flutter", "React"],
    code: "https://github.com/hhhrrrttt222111/developer-portfolio",
    demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
    image: 9,
  },
];

 function serch(search){
   const filteredArticles = projectsData.filter((project) => {
     const content = project.projectName + project.projectDesc + project.tags;
     return content.toLowerCase().includes(search.toLowerCase());
   });

    console.log(filteredArticles);
 }


serch("emp");