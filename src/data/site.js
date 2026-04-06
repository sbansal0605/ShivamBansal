import { publicUrl } from '../utils/publicUrl.js'
import { aabopayGallery } from './aabopayGallery.js'
import { aabopayDetailSections } from './aabopayProjectDetail.js'
import { cricketCoachGallery } from './cricketCoachGallery.js'
import { cricketCoachDetailSections } from './cricketCoachProjectDetail.js'
import { frontlineReadyGallery } from './frontlineReadyGallery.js'
import { frontlineReadyDetailSections } from './frontlineReadyProjectDetail.js'

export const site = {
  name: 'Shivam Bansal',
  brand: 'Shivam Bansal',
  mastheadRole: 'Aspiring Computer Engineer',
  /** Lines cycled in the masthead typewriter (edit to match you). */
  mastheadTypewriterPhrases: [
    "Hi, I'm Shivam Bansal",
    'I build with Python & React',
    { type: 'replaceTail', prefix: 'I like playing ', tail: 'cricket', replacement: '🏏' },
    'I like learning new ML ideas',
    'Open to internships & collabs',
  ],
  profileImage: publicUrl('/shivam-profile.png'),
  /** Navbar: `sectionId` = hash on `/`; `path` = separate route. */
  nav: [
    { label: 'Home', sectionId: 'home' },
    { label: 'Certifications', sectionId: 'certifications' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Competitions', path: '/competitions' },
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
  resumeUrl: publicUrl('/resume.pdf'),
  about: {
    title: 'About Me',
    /** Photo shown only in the About section (home masthead uses `profileImage`). */
    profileImage: publicUrl('/shivam-about.png'),
    journeyTitle: 'My Journey',
    journeyParagraphs: [
      'I have always been fascinated by how code turns into real-world solutions—computer science became my passion from my first “Hello World.” To me, programming is a way to express myself and build something unique; the blend of creativity, problem-solving, and critical thinking is what feels distinctive about the field.',
      'Computer science never sits still—there is always something new to invent or improve. With machine learning, I am especially drawn to systems that learn from data and adapt on their own. Working on projects over the years has taught me that here, there is always more to learn.',
      'Long term, I aim to become an innovative data scientist who pairs rigorous data work with AI engineering—so models and pipelines turn into tools people actually use, not just slides. I want to apply that in my community: helping schools and local organizations make better use of data, and building solutions that address real inequities and everyday problems. That goal pushes me to deepen statistics and machine learning while I keep shipping full-stack projects that make analysis actionable.',
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
    tools: [
      'React, Next.js, TypeScript, Tailwind & Vite',
      'FastAPI & SQLite',
      'MediaPipe, OpenCV & Gemini API',
      'Git, GitHub & VS Code',
    ],
  },
  certifications: [
    {
      title: 'C++ Certificate of Excellence',
      issuer: 'CodingNinjas',
      year: '',
      pdf: publicUrl('/certificates/cpp-certificate-of-excellence.pdf'),
    },
    {
      title: 'Python Course Completion Certificate',
      issuer: 'Udemy',
      year: '',
      pdf: publicUrl('/certificates/python-course-completion-certificate.pdf'),
    },
    {
      title: "Certificate — BYJU'S Coding",
      issuer: "BYJU'S",
      year: '',
      pdf: publicUrl('/certificates/certificate-byjus-coding.pdf'),
    },
    {
      title: 'C++ Certificate',
      issuer: 'CodingNinjas',
      year: '',
      pdf: publicUrl('/certificates/cpp-certificate.pdf'),
    },
    {
      title: 'Udemy Web Development Certificate',
      issuer: 'Udemy',
      year: '',
      pdf: publicUrl('/certificates/udemy-web-development-certificate.pdf'),
    },
    {
      title: 'Android App Development',
      issuer: 'App development course',
      year: '',
      pdf: publicUrl('/certificates/shivam-certificate-android-app-development.pdf'),
    },
    {
      title: 'USACO Silver',
      issuer: 'USA Computing Olympiad',
      year: '',
      image: publicUrl('/certificates/usaco-silver-verification.png'),
    },
    {
      title: 'Harvard CS50',
      issuer: 'Harvard University',
      year: '',
    },
    {
      title: 'Competent Communicator',
      issuer: 'Toastmasters International',
      year: '',
    },
  ],
  projects: [
    {
      title: 'CricketCoach: AI analysis Tool',
      slug: 'cricketcoach',
      description: 'AI-powered analysis for cricket coaching—technique, performance, and actionable feedback.',
      href: null,
      status: 'View More',
      detailSections: cricketCoachDetailSections,
      gallery: cricketCoachGallery,
    },
    {
      title: 'FrontlineReady: Empowering frontline workers to help the economy',
      slug: 'frontlineready',
      description:
        'AI-assisted rehearsal for frontline workers—Gemini-powered scenarios, speech-aware coaching, and an AccentCoach narrative built for MLH Cyberwave × Reach Capital.',
      href: null,
      status: 'View More',
      detailSections: frontlineReadyDetailSections,
      gallery: frontlineReadyGallery,
    },
    {
      title: 'AaboPay: Securing Payments in Nigeria',
      slug: 'aabopay',
      description:
        'A trust-first companion concept for Nigerian mobile money—voice verification, BVN/NIN safeguards, multilingual UI, and USSD trust cues; finalist at KSU FinTech.',
      href: null,
      status: 'View More',
      detailSections: aabopayDetailSections,
      gallery: aabopayGallery,
    },
  ],
  /**
   * /competitions — append new items at the end of this array. Each entry needs `sortDate`
   * (`YYYY-MM-DD`). The Competitions page sorts newest-first: larger / later dates appear at the
   * top, older at the bottom. New wins should use a sortDate after your latest existing one.
   * Optional: extraImages: [{ src, alt, caption? }] on a detail page (in addition to `image`).
   */
  competitions: [
    {
      slug: 'gastc-2026-cricketcoach-web-mobile',
      sortDate: '2026-03-01',
      title: 'Georgia Student Technology Competition (GASTC)',
      date: 'March 2026',
      result: '1st place · Web & Mobile Apps',
      projectName: 'CricketCoach',
      summary:
        'State-level GASTC in March 2026—Evan Saran from Northview and I entered Web & Mobile Apps with CricketCoach, an AI analysis tool for cricket coaching, and earned 1st place.',
      image: publicUrl('/competitions/gastc-cricketcoach-2026.png'),
      imageAlt:
        'GASTC 25th anniversary stage: team with medals after winning 1st place in Web & Mobile Apps for CricketCoach.',
      body: [
        'GASTC’s Web & Mobile Applications track rewards software you can explain, inspect, and run live—exactly how we pitched CricketCoach. Cricket is massive globally yet hard to grow in the U.S. partly because elite coaching is scarce and expensive; many players cite cost and distance as the barriers to even starting. Evan Saran and I built CricketCoach at Northview High School as a computer-vision pipeline that turns a short phone or laptop upload into personalized coaching feedback on form and positioning—so a player far from an academy still gets structured guidance. We both play school and club cricket and have represented Georgia at the interstate conference, so the problem and demo came from lived experience, not a hypothetical slide story.',
        'Our walkthrough matched the script judges saw at state: sign-in, upload a roughly three- to eight-second clip, explicitly pick side or front camera geometry because accuracy collapses without that context, then analyze. The UI stays transparent—loading states, confidence warnings, and dashboards tuned for beginners through advanced users. After analysis, a pose-overlay replay sketches the skeleton our model tracks; coach tips call out the biggest mechanical priorities. A color-coded Metrics Snapshot translates head stability, knee angle, stride, and alignment into coaching language, while the Kinematic Sequence charts how power should flow pelvis → torso → shoulder → wrist and surfaces timing issues. For bowling we surface biomechanical risk cues such as mixed-action patterns tied to stress, mirror warnings when frames are missing, and exports so athletes can e-mail a report to a remote coach. Profiles personalize feedback, the runs log ties each upload to an account, and benchmarks compare progress once five linked sessions exist.',
        'We argued the same story we believe on the field: high-quality analysis should be free at the point of use and reachable with everyday devices. Our presentation highlighted academy partners and teammates—including Northview players who cannot access private lessons—using the workflow in real practices, and we connected that adoption to our silver-medal finish at the Georgia High School Cricket Tournament. The broader point is closing the coaching gap for anyone limited by money, geography, or schedule.',
        'Under the hood, a FastAPI and Python service wraps MediaPipe pose estimation, NumPy/OpenCV geometry, DTW alignment against pro reference clips for ghost overlays, and SQLite-backed run metadata, while the Next.js/React/TypeScript/Tailwind client handles routing, Recharts kinematic plots, mobile capture via getUserMedia/MediaRecorder, and bilingual UI scaffolding. That stack let us open code, narrate design trade-offs, and drive a live browser demo end-to-end—the bar GASTC sets for Web & Mobile—and first place in March 2026 affirmed that judges bought both the mission and the engineering.',
      ],
      videoUrl: null,
      links: [],
    },
    {
      slug: 'kennesaw-fintech-hackathon-aabopay',
      sortDate: '2026-03-15',
      title: 'KSU FinTech High School Hackathon',
      date: 'March 2026',
      result: 'Finalist · Top 10',
      projectName: 'AaboPay',
      summary:
        'Kennesaw State University’s one-day high school FinTech challenge focused on safer mobile payments in Africa—we built AaboPay around a real Nigerian payments context with Alvin (Forsyth Central), Bala (Lambert High), and Allen (West Forsyth), earned finalist, and finished in the top 10.',
      image: publicUrl('/competitions/ksu-fintech-hackathon.png'),
      imageAlt:
        'Team photo with KSU mascot Scrappy the Owl at the FinTech hackathon; celebrating a top-10 finish.',
      body: [
        'Hosted at Kennesaw State University, the FinTech High School Hackathon asked teams to pick an African country or mobile-money market, research a genuine payment challenge, and in a single day design something that makes mobile payments safer, easier, and more accessible—then explain and demo it clearly. The official theme was safer mobile payments across Africa, with emphasis on practical ideas judges could understand from a prototype, mockup, or interactive demo plus a concise concept brief.',
        'The brief pushed us to name who we were designing for, surface at least two real fraud or security pains (from SIM swaps and scam messages to fake agents, stolen phones, or false confirmations), and shape a solution that could take the form of an app, SMS/USSD flow, agent verification, or fraud-detection concept—while staying mindful of regulation and consumer protection. Two constraints stood out: the product had to stay usable when connectivity drops, and it had to work for people with limited literacy through plain language, icons, voice, or guided steps.',
        'Judges circulated during the event to ask questions, probe our thinking, and see how we responded to surprise challenges—so progress and teamwork mattered as much as the final deck. We closed with a ten-minute pitch covering our country and users, the security problem, how the solution works, a sample journey, and why the idea was simple, practical, and scalable—the same storyline we refined through morning research, midday building, and afternoon presentations.',
        'I worked alongside Alvin from Forsyth Central, Bala from Lambert High, and Allen from West Forsyth. We presented AaboPay as a real-time companion to Nigerian wallets like OPay and PalmPay—phone trust checks, voice-verified payments, BVN/NIN-backed safeguards, and a demo path where a suspicious agent number triggers pause, warning, and cancel before money moves. Color-coded trust signals, icon navigation, English with Yoruba and Igbo, voice confirmations, and USSD access to trust scores without internet spoke directly to the brief’s low-literacy and offline requirements, grounded in Nigeria’s documented fraud losses and NIBSS-scale payment data. Finalist recognition and a top-ten finish showed judges connected with that problem-to-prototype story.',
      ],
      videoUrl: null,
      links: [],
    },
    {
      slug: 'mit-zero-robotics-2026-compilers-collective',
      sortDate: '2026-02-15',
      title: 'MIT Zero Robotics',
      date: 'February 2026',
      result: 'Finalists · 3rd in the world (bronze)',
      projectName: "Compiler's Collective",
      summary:
        "MIT Zero Robotics High School Tournament (Feb 2026)—as Compiler's Collective on Alliance 10 with teammates in Greece, Madison Highland Prep, and Northview, we reached the ISS finals broadcast and placed third in the world.",
      image: publicUrl('/competitions/zero-robotics-compilers-collective.png'),
      imageAlt:
        "Compiler's Collective team logo: Zero Robotics crest with space-themed robot mark.",
      extraImages: [
        {
          src: publicUrl('/competitions/zero-robotics-tournament-bracket.png'),
          alt: 'MIT Zero Robotics high school tournament bracket showing Alliance 10 through winners, redemption, and finals to third place.',
          caption: 'High School Tournament bracket — Alliance 10’s path to 3rd place worldwide',
        },
      ],
      body: [
        'MIT Zero Robotics is built around SPHERES satellites and a new challenge every season. Teams write autonomous code to command satellite speed, rotation, and direction—navigating obstacles, collecting virtual targets, and budgeting fuel and power. After virtual rounds hosted on the program’s site, a smaller set of finalists advances to a live championship aboard the International Space Station: an astronaut runs student programs in real microgravity while the world watches a live broadcast, with no manual piloting allowed once execution starts.',
        'Day to day you iterate in a simulator that mirrors flight-like constraints, stress-testing strategies before any hardware touches orbit. The High School Tournament serves grades 9–12, runs internationally from September through December each year, and is free to enter for U.S. teams and schools in European Space Agency member states—so the bracket mixes time zones, rule interpretations, and engineering cultures long before finals week.',
        "Our alliance—Alliance 10—combined students from Greece, Madison Highland Prep, and Northview High School under the Compiler's Collective identity we brought to judges and partners. Coordinating across those schools meant shared repositories, synchronized test plans, and clear handoffs between simulation sprints and integration lockdowns.",
        'Earning finalist status and bronze—third place worldwide—in February 2026 capped a season where our autonomous stack had to survive both digital leaderboards and the ultimate hardware check on ISS. The outcome reinforced how I scope risk, document interfaces, and communicate under deadlines when teammates are continents apart.',
      ],
      videoUrl: null,
      links: [],
    },
    {
      slug: 'mlh-cyberwave-hackathon-2026',
      sortDate: '2026-02-01',
      title: 'Major League Hacking Cyberwave Hackathon',
      date: 'February 2026',
      result: '1st Place',
      projectName: 'FrontlineReady',
      summary:
        'February 2026 MLH Cyberwave with Reach Capital—Evan Saran from Northview and I took 1st place with FrontlineReady, using our AccentCoach slides to show accent clarity, realistic customer scenarios, and Gemini-powered coaching for frontline workers; we also received Logitech Brio 101 webcams.',
      image: publicUrl('/competitions/mlh-cyberwave-frontlineready-win.png'),
      imageAlt:
        'Shivam and Evan Saran holding Logitech Brio 101 webcam boxes after winning first place at the MLH Cyberwave hackathon.',
      body: [
        'Cyberwave featured a Reach Capital × Major League Hacking prompt anchored in the future of work, introduced to participants by Reach Capital partner Wai Chu. The firm invests across education, the future of work, and healthcare—including companies such as Replit, GPTZero, ClassDojo, and MLH—and challenged hackers to design AI learning experiences for frontline staff who are often last in line for new workplace technology. The brief was explicit: uplevel and upskill the labor force rather than replace it, with tools that work on the job and on the go inside day-to-day workflows.',
        'Our slides grounded the story in U.S. labor reality: roughly 70% of the American workforce is frontline-based, national frontline unemployment had recently jumped to about 4.5%, and tens of millions of workers use English as a second language while customers still report disappointing service experiences. Hiring managers, meanwhile, face a persistent training and staffing gap—exactly the kind of “future of work” friction Reach Capital asked us to address with AI that supports people instead of sidelining them.',
        'The submission remained FrontlineReady, but the deck’s AccentCoach narrative explained why customer conversations matter—safety, trust, tips, reviews, and advancement—and why the hardest moments are staying clear under stress. We pitched a private, low-cost way to rehearse realistic service scenarios rather than generic language drills: specialized for retail-style frontline roles, an easy-to-read UI, and a story about accessibility without stacking subscriptions or paid APIs on top of workers who are already stretched thin.',
        'Technically we showcased how Gemini could power real-time speech understanding, dynamically generated “mistake” scenarios, bite-sized personalized coaching, customer-role impersonation, and multimodal reasoning so feedback felt contextual—not a one-size lecture. Evan Saran from Northview High School and I ran the weekend like a product sprint, stitched the demo to that storyline, and closed with judges in a place where Reach’s mandate met something frontline staff could imagine using between tasks. First place—and Logitech Brio 101 webcams—was the cherry on top.',
      ],
      videoUrl: null,
      links: [],
    },
  ],
  experience: {
    title: 'Experience',
    items: [
      {
        title: 'Incoming Trainee — SUMMET Program',
        range: 'Colorado School of Mines · June 2026',
        logo: publicUrl('/logos/colorado-school-of-mines.png'),
        logoAlt: 'Colorado School of Mines',
        logoSquare: true,
        highlights: [
          'Selected as an incoming trainee for the SUMMET Program at Colorado School of Mines, beginning June 2026.',
          'Preparing for a summer engineering and STEM immersion at a leading applied-sciences and research university.',
        ],
      },
      {
        title: 'Participant — Rice University Precollege Program (Computer Engineering)',
        range: 'Rice University · Dec 2025',
        logo: publicUrl('/logos/rice.png'),
        logoAlt: 'Rice University',
        logoSquare: true,
        highlights: [
          'Completed intensive college-level computer engineering coursework and hands-on projects in programming, hardware, and engineering principles and won the Rice University Precollege Scholarship Award ($900).',
          'Developed a culminating capstone project that helps frontline workers benefit the economy, with direct feedback and mentorship from AI architect Steven Greulich.',
        ],
        pdf: publicUrl('/certificates/rice-university-precollege-completion-certificate.pdf'),
      },
      {
        title: 'Trainee — Honeywell Leadership Challenge Academy',
        range: 'US Space and Rocket Center, Alabama · Oct 2025',
        logo: publicUrl('/logos/honeywell.png'),
        logoAlt: 'Honeywell',
        highlights: [
          'Collaborated with students from around the world on engineering and leadership challenges, applying analytical thinking and problem-solving to real-world STEM scenarios and simulated space environments.',
          'Developed programming, problem-solving, and decision-making skills in a fast-paced academic environment.',
          'Our team earned Best Team by staying organized under tight deadlines, dividing work by strengths, and delivering thoughtful solutions across HLCA’s engineering and leadership missions—from design checkpoints to final presentations in front of staff and peers.',
          'I was named Best Delegate for helping drive discussion, keeping our group aligned on priorities, and representing the team with clear communication, accountability, and professionalism throughout the academy.',
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
    schoolLogo: publicUrl('/northview-logo.png'),
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

export function getCompetitionBySlug(slug) {
  return site.competitions.find((c) => c.slug === slug) ?? null
}

export function getProjectBySlug(slug) {
  return site.projects.find((p) => p.slug === slug) ?? null
}
