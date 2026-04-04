export const site = {
  name: 'Shivam Bansal',
  brand: 'Shivam Bansal',
  mastheadRole: 'Software Engineer',
  /** Lines cycled in the masthead typewriter (edit to match you). */
  mastheadTypewriterPhrases: [
    "Hi, I'm Shivam Bansal",
    'I build with Python & React',
    'I like learning new ML ideas',
    'I_like_to_code.py',
    'Open to internships & collabs',
  ],
  profileImage: '/shivam-profile.png',
  /** Navbar: `sectionId` = hash on `/`; `path` = separate route. */
  nav: [
    { label: 'Home', sectionId: 'home' },
    { label: 'Certifications', sectionId: 'certifications' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Competitions', path: '/competitions' },
    { label: 'Leadership/Extras', path: '/leadership-extras' },
  ],
  contactSectionId: 'contact',
  contactNavLabel: 'Contact me',
  social: {
    github: 'https://github.com',
    linkedin: 'https://www.linkedin.com/in/shivam-bansal-58223a379/',
    email: 'shivambansal0605@gmail.com',
    phone: '+14709896893',
    phoneDisplay: '(470) 989-6893',
  },
  resumeUrl: '/resume.pdf',
  about: {
    title: 'About Me',
    /** Photo shown only in the About section (home masthead uses `profileImage`). */
    profileImage: '/shivam-about.png',
    journeyTitle: 'My Journey',
    journeyParagraphs: [
      'I was born and brought up in Dubai, United Arab Emirates. I am passionate about artificial intelligence, machine learning, and building things that feel intuitive. I like understanding how systems work end-to-end—from data and models to the interfaces people actually use.',
      'I am an 11th-grade student at Northview High School in Johns Creek, Georgia, sharpening my skills in Python, C++, web fundamentals, and SQL while staying active in competitive programming and personal projects.',
    ],
    info: [
      { icon: 'location', text: 'Johns Creek, Georgia · Born & raised in Dubai, UAE' },
      { icon: 'education', text: 'Northview High School · 11th grade' },
      { icon: 'work', text: 'Student & builder' },
    ],
  },
  skills: {
    title: 'Skills & Tools',
    technicalTitle: 'Technical Skills',
    technical: [
      { name: 'Python', percent: 90 },
      { name: 'C++', percent: 75 },
      { name: 'HTML/CSS', percent: 80 },
      { name: 'SQL', percent: 70 },
      { name: 'Java', percent: 65 },
    ],
    toolsTitle: 'Tools & Platforms',
    tools: ['Git & GitHub', 'VS Code', 'Azure Cloud', 'Google Cloud', 'Video Editing'],
  },
  certifications: [
    {
      title: 'C++ Certificate of Excellence',
      issuer: 'CodingNinjas',
      year: '',
      pdf: '/certificates/cpp-certificate-of-excellence.pdf',
    },
    {
      title: 'Python Course Completion Certificate',
      issuer: 'Udemy',
      year: '',
      pdf: '/certificates/python-course-completion-certificate.pdf',
    },
    {
      title: "Certificate — BYJU'S Coding",
      issuer: "BYJU'S",
      year: '',
      pdf: '/certificates/certificate-byjus-coding.pdf',
    },
    {
      title: 'C++ Certificate',
      issuer: 'CodingNinjas',
      year: '',
      pdf: '/certificates/cpp-certificate.pdf',
    },
    {
      title: 'Udemy Web Development Certificate',
      issuer: 'Udemy',
      year: '',
      pdf: '/certificates/udemy-web-development-certificate.pdf',
    },
    {
      title: 'Android App Development',
      issuer: 'App development course',
      year: '',
      pdf: '/certificates/shivam-certificate-android-app-development.pdf',
    },
  ],
  projects: [
    {
      title: 'CricketCoach: AI analysis Tool',
      description: 'AI-powered analysis for cricket coaching—technique, performance, and actionable feedback.',
      href: null,
      status: 'View More',
    },
    {
      title: 'FrontlineReady: Empowering frontline workers to help the economy',
      description: 'Tools and guidance designed to support frontline workers and strengthen their impact.',
      href: null,
      status: 'View More',
    },
    {
      title: 'AaboPay: Securing Payments in Nigeria',
      description: 'Payment security focused on safer transactions and trust for users in Nigeria.',
      href: null,
      status: 'View More',
    },
  ],
  /** Standalone /competitions page only (not on home). */
  competitions: [],
  /** Standalone /leadership-extras page only (not on home). Navbar says "Leadership/Extras". */
  leadershipExtras: {
    pageTitle: 'My other half',
    items: [],
  },
  experience: {
    title: 'Experience',
    items: [
      {
        title: 'Participant — Rice University Precollege Program (Computer Engineering)',
        range: 'Rice University · Dec 2025',
        highlights: [
          'Completed intensive college-level computer engineering coursework and hands-on projects in programming, hardware, and engineering principles and won the Rice University Precollege Scholarship Award ($900).',
          'Developed a culminating capstone project under professional mentorship from AI architects that helps frontline workers benefit the economy.',
        ],
        pdf: '/certificates/rice-university-precollege-completion-certificate.pdf',
      },
      {
        title: 'Trainee — Honeywell Leadership Challenge Academy',
        range: 'US Space and Rocket Center, Alabama · Oct 2025',
        highlights: [
          'Collaborated with students from around the world on engineering and leadership challenges, applying analytical thinking and problem-solving to real-world STEM scenarios and simulated space environments.',
          'Developed programming, problem-solving, and decision-making skills in a fast-paced academic environment.',
        ],
      },
    ],
    footerNote: 'More experiences coming soon…',
  },
  education: {
    title: 'Education',
    degree: '11th grade',
    school: 'Northview High School',
    range: 'Johns Creek, Georgia',
    schoolLogo: '/northview-logo.png',
  },
  contact: {
    title: 'Get In Touch',
    formTitle: 'Send a Message',
    socialTitle: 'Connect With Me',
    socialLinks: [
      { label: 'Email', href: 'mailto:shivambansal0605@gmail.com', icon: 'mail' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivam-bansal-58223a379/', icon: 'linkedin' },
      { label: 'GitHub', href: 'https://github.com', icon: 'github' },
    ],
  },
}
