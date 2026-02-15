let resumeData = {
  name: 'Bommanaveni Chaithanya',
  role: 'Frontend Developer and a Competitive Programmer',
  linkedinId: 'linkedin.com/in/chaithanya-bommanaveni-95b935289/',
  roleDescription:
    "A final-year B.Tech CSE student at RGUKT Basar. I am a passionate Frontend Developer and Competitive Programmer, ML Beginner, eager to start my professional career.",

  socialLinks: [
    {
      name: 'linkedin',
      url: 'https://linkedin.com/in/chaithanya-bommanaveni-95b935289/',
      className: 'fa fa-linkedin',
    },
    {
      name: 'github',
      url: 'https://github.com/sreyachaithu',
      className: 'fa fa-github',
    },
    {
      name: 'mail',
      url: 'mailto:chaithanyabommanaveni@gmail.com',
      className: 'fa fa-envelope',
    },
    {
      name: 'Leetcode',
      url: 'https://leetcode.com/u/chaithanyabommanaveni/',
      className: 'fa fa-code',
    },
  ],

  aboutme:
    "A final-year B.Tech CSE student at RGUKT Basar. I am a passionate MERN Stack Developer and Competitive Programmer eager to contribute to real-world projects.",

  address: 'India',

  education: [
    {
      UniversityName: 'Indian Institutes of Information Technology (IIIT) Basar',
      specialization: 'B.Tech in Computer Science and Engineering',
      duration: 'July 2021 - May 2026',
      Achievements: 'CGPA - 8.45',
    },
    {
      UniversityName: 'Zilla Parishad High School (ZPHS) Laxmipur',
      specialization: 'SSC',
      duration: 'April 2015 - May 2020',
      Achievements: 'Scored 10.0',
    },
  ],

  skills: [
    {
      category: 'Programming Languages',
      list: [
        {
          img: process.env.PUBLIC_URL + '/media/javascript.png',
          name: 'JavaScript',
        },
        {
          img: process.env.PUBLIC_URL + '/media/python.png',
          name: 'Python',
        },
        {
          img: process.env.PUBLIC_URL + '/media/c.png',
          name: 'C',
        },
      ],
    },
    {
      category: 'Databases',
      list: [
        {
          img: process.env.PUBLIC_URL + '/media/mongo.png',
          name: 'MongoDB',
        },
      ],
    },
    {
      category: 'Web Development',
      list: [
        {
          img: process.env.PUBLIC_URL + '/media/react.png',
          name: 'React',
        },
        {
          img: process.env.PUBLIC_URL + '/media/bootstrap.png',
          name: 'Bootstrap',
        },
        {
          img: process.env.PUBLIC_URL + '/media/html.png',
          name: 'HTML',
        },
        {
          img: process.env.PUBLIC_URL + '/media/express.png',
          name: 'Express.js',
        },
      ],
    },
    {
      category: 'Tools',
      list: [
        {
          img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
          name: 'Git',
        },
      ],
    },
  ],

  portfolio: [
    {
      title: 'Todo List Web App',
      intro: "Project developed using HTML, CSS, JavaScript.",
      des: "A simple Todo list application storing data in local storage.",
      points: [
        "User can add tasks",
        "Tasks stored in local storage",
        "Real-time update",
      ],
      imgurl: process.env.PUBLIC_URL + '/media/portfolio/socialMedia.png',
      techstack: ['JavaScript', 'HTML', 'CSS'],
      links: {
        launch: 'https://sreyachaithu.github.io/TO-DO_LIST/',
        github: 'https://github.com/sreyachaithu/TO-DO_LIST',
      },
    },
    {
      title: 'Weather Forecast Web Application',
      intro: 'Real-time city weather search app.',
      des: 'Weather app using API integration.',
      points: [
        'Search city weather',
        'Live temperature display',
        'Responsive UI',
      ],
      imgurl: process.env.PUBLIC_URL + '/media/portfolio/dash.png',
      techstack: ['HTML', 'CSS', 'JavaScript'],
      links: {
        launch: 'https://sreyachaithu.github.io/WeatherApp/',
        github: 'https://github.com/sreyachaithu/WeatherApp',
      },
    },
    {
      title: 'Cube Game',
      intro: 'Interactive cube-based game.',
      des: 'Simple JavaScript game.',
      points: [
        'Interactive gameplay',
        'User controls',
        'Responsive design',
      ],
      imgurl: process.env.PUBLIC_URL + '/media/portfolio/cube.png',
      techstack: ['JavaScript', 'HTML', 'CSS'],
      links: {
        launch: 'https://sreyachaithu.github.io/Cube-game/',
        github: 'https://github.com/sreyachaithu/Cube-game/',
      },
    },
    {
      title: 'Rock Paper Scissor Game',
      intro: 'Classic game against computer.',
      des: 'Random computer choice logic.',
      points: [
        'Random computer move',
        'Score tracking',
        'Interactive UI',
      ],
      imgurl: process.env.PUBLIC_URL + '/media/portfolio/rock.png',
      techstack: ['JavaScript', 'HTML', 'CSS'],
      links: {
        launch: 'https://sreyachaithu.github.io/Rock_Paper_Scissor-Game/',
        github: 'https://github.com/sreyachaithu/Rock_Paper_Scissor-Game/',
      },
    },
    {
      title: 'Calculator',
      intro: 'Basic arithmetic calculator.',
      des: 'Performs standard calculations.',
      points: [
        'Addition',
        'Subtraction',
        'Multiplication',
        'Division',
      ],
      imgurl: process.env.PUBLIC_URL + '/media/portfolio/calculator.png',
      techstack: ['JavaScript', 'HTML', 'CSS'],
      links: {
        launch: 'https://sreyachaithu.github.io/Calculator/',
        github: 'https://github.com/sreyachaithu/Calculator',
      },
    },
    {
      title: 'Traffic Signals',
      intro: 'Traffic signal simulation.',
      des: 'Signal color transition logic.',
      points: [
        'Red, Yellow, Green logic',
        'Automatic transition',
      ],
      imgurl: process.env.PUBLIC_URL + '/media/portfolio/traffic.png',
      techstack: ['HTML', 'CSS', 'JavaScript'],
      links: {
        launch: 'https://sreyachaithu.github.io/TRAFFIC_SIGNALS/',
        github: 'https://github.com/sreyachaithu/TRAFFIC_SIGNALS/',
      },
    },
  ],
};

export default resumeData;

