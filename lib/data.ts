import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'zaidnachit77@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Zaid, I am reaching out to you because...',

    oldPortfolio: 'https://github.com/nachitzaid/zaid-sportfolio',
    upworkProfile: 'https://github.com/nachitzaid',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/nachitzaid' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/zaid-nachit-9419b430b/' },
    { name: 'instagram', url: 'https://www.instagram.com/znx_studio/' },
    { name: 'tiktok', url: 'https://www.tiktok.com/@znx.studio1' },
    { name: 'whatsapp', url: 'https://wa.me/212691241422?text=Hello%20Zaid!%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project%20with%20you.' },
];

export const MY_STACK = {
    'Web Development': [
        { name: 'Next.js', icon: '/logo/next.png' },
        { name: 'React', icon: '/logo/react.png' },
        { name: 'Angular', icon: '/logo/angular.svg' },
        { name: 'Flask', icon: '/logo/flask.svg' },
        { name: 'TypeScript', icon: '/logo/ts.png' },
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'HTML', icon: '/logo/html.svg' },
        { name: 'CSS', icon: '/logo/css.svg' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
        { name: 'Framer Motion', icon: '/logo/framer-motion.png' },
    ],
    'Databases & Cloud': [
        { name: 'MongoDB', icon: '/logo/mongodb.svg' },
        { name: 'MySQL', icon: '/logo/mysql.svg' },
        { name: 'SQLite', icon: '/logo/sqlite.svg' },
        { name: 'Oracle SQL' },
        { name: 'Firebase', icon: '/logo/firebase.svg' },
    ],
    'AI & Data Science': [
        { name: 'Python', icon: '/logo/python.svg' },
        { name: 'Scikit-learn', icon: '/logo/scikitlearn.svg' },
        { name: 'Pandas', icon: '/logo/pandas.svg' },
        { name: 'Machine Learning' },
    ],
    'Graphic Design & UI': [
        { name: 'Photoshop', icon: '/logo/photoshop.svg' },
        { name: 'Illustrator', icon: '/logo/illustrator.svg' },
        { name: 'Figma', icon: '/logo/figma.svg' },
    ],
    'Tools & OOP': [
        { name: 'Java', icon: '/logo/java.svg' },
        { name: 'Maven', icon: '/logo/maven.svg' },
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'Jupyter', icon: '/logo/jupyter.svg' },
        { name: 'Anaconda', icon: '/logo/anaconda.svg' },
        { name: 'Kali Linux', icon: '/logo/kalilinux.svg' },
        { name: 'Agile / Scrum' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'SBG Academy',
        slug: 'sbg-academy',
        liveUrl: 'https://sbg-academy-iota.vercel.app/',
        year: 2025,
        description: `
      SBG Academy is a modern, responsive school website featuring an interactive multi-step admissions portal, direct email contact, and rich program & student-activity showcases. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>📝 Admissions Portal: Multi-step inquiry form with submissions saved automatically to Google Sheets</li>
        <li>📧 Contact by Email: Direct email submissions via EmailJS with phone field and CC configuration — no backend needed</li>
        <li>📱 Mobile-First Design: Fluid scrolling and smooth scroll animations, optimized for all devices</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      <ul>
        <li>✅ Built the full multi-page experience (Home, About, Activities, Admissions, Contact) with React & TypeScript</li>
        <li>✅ Integrated EmailJS contact flow and Google Sheets admissions storage via Apps Script</li>
        <li>✅ Crafted the modern SBG branding, custom favicon, and responsive layouts with Tailwind CSS</li>
      </ul>
      `,
        techStack: [
            'React 18',
            'TypeScript',
            'Vite',
            'Tailwind CSS',
            'EmailJS',
            'Google Sheets API',
        ],
        thumbnail: '/projects/thumbnail/sbg-academy.png',
        longThumbnail: '/projects/thumbnail/sbg-academy.png',
        images: [
            '/projects/thumbnail/sbg-academy.png',
        ],
    },
    {
        title: 'CrystalDent',
        slug: 'crystaldent',
        liveUrl: 'https://crystaldent-site-main.vercel.app/',
        year: 2025,
        description: `
      CrystalDent is a premium dental clinic website (Viena Dental) built as a static, performance-first experience with a dark ink design system, buttery GSAP + Lenis motion, and a booking widget. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>🦷 Clinic Showcases: Services, doctors, tri-panel treatments, and FAQ sections driven by a single content data file</li>
        <li>🎬 Premium Motion: GSAP scroll-triggered animations with Lenis smooth scrolling, respecting prefers-reduced-motion</li>
        <li>♿ Accessibility-First: Lighthouse 100 in Accessibility, Best Practices & SEO; WCAG AA contrast throughout</li>
      </ul>
      `,
        role: `
      Frontend & Motion Developer <br/>
      <ul>
        <li>✅ Built all page sections as Astro components with a centralized site content data layer</li>
        <li>✅ Implemented the motion system (GSAP + Lenis) and interactive booking widget</li>
        <li>✅ Designed the OKLCH design-token system, self-hosted Unbounded/Jost typography, and SVG brand lockup</li>
      </ul>
      `,
        techStack: [
            'Astro',
            'Tailwind CSS 4',
            'GSAP',
            'Lenis',
            'TypeScript',
        ],
        thumbnail: '/projects/thumbnail/crystaldent.png',
        longThumbnail: '/projects/thumbnail/crystaldent.png',
        images: [
            '/projects/thumbnail/crystaldent.png',
        ],
    },
    {
        title: 'Elementis Awwwards Rebuild',
        slug: 'elementis-rebuild',
        liveUrl: 'https://elementis-rebuild.vercel.app/',
        year: 2025,
        description: `
      A full rebuild of the Awwwards-winning Elementis skincare brand website, focusing on cinematic video hero sections, masked text reveals, and physics-based smooth scrolling. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>🎬 Cinematic Hero: Fullscreen video player with parallax and scroll-driven reveals</li>
        <li>✍️ Masked Text Animations: Line-by-line clip-path text reveals and responsive marquees</li>
        <li>🧲 Premium UX Details: Custom cursor, animated sidebar navigation, and Lenis buttery smooth scrolling</li>
      </ul>
      `,
        role: `
      Frontend & Motion Developer <br/>
      <ul>
        <li>✅ Recreated the award-winning layout and scroll experience from scratch with Next.js 15 and React 19</li>
        <li>✅ Built the motion system (Motion variants, useScroll, useTransform) and Lenis integration</li>
        <li>✅ Engineered responsive Server/Client component splits for optimal streaming performance</li>
      </ul>
      `,
        techStack: [
            'Next.js 15',
            'React 19',
            'Motion',
            'Lenis',
            'Tailwind CSS 4',
            'TypeScript',
        ],
        thumbnail: '/projects/thumbnail/elementis.png',
        longThumbnail: '/projects/thumbnail/elementis.png',
        images: [
            '/projects/thumbnail/elementis.png',
        ],
    },
    {
        title: 'Atlas Estate',
        slug: 'atlas-estate',
        liveUrl: 'https://atlas-estate-neon.vercel.app/',
        year: 2025,
        description: `
      Atlas Estate is a luxury property search and listings booking platform built to demonstrate high-performance real estate exploration. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>🏠 Real Estate Listings: Dynamic search queries, category filters, and detail sheets</li>
        <li>⚡ Server Optimization: Leveraged React Server Components (RSC) for quick catalog loads</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      <ul>
        <li>✅ Designed interactive filtering query hooks and state management</li>
        <li>✅ Structured clean, modular layouts for cards and listings detail views</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/atlas-estate.jpg',
        longThumbnail: '/projects/thumbnail/atlas-estate.jpg',
        images: [
            '/projects/thumbnail/atlas-estate.jpg',
        ],
    },
    {
        title: 'Lando Norris Rebuild',
        slug: 'lando-norris-rebuild',
        liveUrl: 'https://lando-noris.vercel.app/',
        year: 2025,
        description: `
      A rebuild of an Awwwards-winning landing page design highlighting F1 Driver Lando Norris, focusing on high-end desktop web animations and physics-based scrolls. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>🏎️ Premium Motion: Parallax scroll-triggered GSAP animations</li>
        <li>⚡ Award-winning Layouts: Complex CSS grid overlays and custom visual effects</li>
      </ul>
      `,
        role: `
      Frontend & Motion Developer <br/>
      <ul>
        <li>✅ Recreated the core scroll timeline mechanisms from the ground up</li>
        <li>✅ Fine-tuned timeline GSAP easing formulas and SVG animations</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'GSAP ScrollTrigger',
            'Tailwind CSS',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/landonorris.png',
        longThumbnail: '/projects/thumbnail/landonorris.png',
        images: [
            '/projects/thumbnail/landonorris.png',
        ],
    },
    {
        title: 'Food4U',
        slug: 'food4u',
        liveUrl: 'https://v0-food4u-6i884p8vq-zaidnachit77-1491s-projects.vercel.app/',
        year: 2025,
        description: `
      Food4U is a comprehensive customer journey fast-food ordering web application featuring a shopping cart, favorites lists, and real-time order tracking, alongside a dedicated admin management back-office. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🛒 Customer Journey: Seamless cart addition, favorites lists, and tracking</li>
        <li>🔐 Role-Based Access: Firebase Authentication integration with customized user roles</li>
        <li>🎨 Responsive Interface: Engineered a premium, fluid UI with Tailwind CSS and Framer Motion animations</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      <ul>
        <li>✅ Engineered the user journey flow and ordering backend logic</li>
        <li>🎨 Built animated responsive interfaces using Framer Motion and Tailwind</li>
        <li>🔐 Configured Firebase Auth & role-based dashboard security</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'TypeScript',
            'Firebase Auth',
            'Firestore',
            'Tailwind CSS',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/food4u.png',
        longThumbnail: '/projects/thumbnail/food4u.png',
        images: [
            '/projects/thumbnail/food4u.png',
        ],
    },
    {
        title: 'OxyCare',
        slug: 'oxycare',
        liveUrl: 'https://oxycare-project.vercel.app/',
        year: 2025,
        description: `
      OxyCare is an integrated web management system designed for patients, medical equipment tracking, and technical field interventions. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🏥 Patient & Asset Management: Complete tracking of medical equipment and patient records</li>
        <li>⚙️ Role-Based Auth: Advanced authentication levels (Admin / Technician) for secure dashboards</li>
        <li>📊 Data Insights: Interactive statistics and reporting modules for administrators</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      <ul>
        <li>✅ Developed the patient and device database schemas and core APIs</li>
        <li>🔒 Implemented JWT-based role authentication and authorization routes</li>
        <li>📉 Built interactive charts and statistical reporting views</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'Flask',
            'SQLAlchemy',
            'MySQL',
            'Tailwind CSS',
            'JWT',
        ],
        thumbnail: '/projects/thumbnail/oxycare.jpg',
        longThumbnail: '/projects/thumbnail/oxycare.jpg',
        images: [
            '/projects/thumbnail/oxycare.jpg',
        ],
    },
    {
        title: 'OxyLife Breathe',
        slug: 'oxylife-breathe',
        liveUrl: 'https://oxylife-breathe-intro.vercel.app/',
        year: 2025,
        description: `
      OxyLife Breathe is an interactive web interface built to introduce and manage advanced oxygen respiratory solutions and patient dashboards. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>💨 Respiratory Analytics: Real-time patient oxygen flow monitoring widgets</li>
        <li>🧩 shadcn/ui Components: Beautifully designed and uniform accessibility-first blocks</li>
        <li>⚡ Lightweight & Quick: Highly optimized client performance</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      <ul>
        <li>✅ Developed accessible interactive panels using React & shadcn/ui</li>
        <li>🎨 Customized component-level design tokens with Tailwind CSS</li>
        <li>⚡ Enhanced overall UI performance and page load metrics</li>
      </ul>
      `,
        techStack: [
            'React',
            'Vite',
            'Tailwind CSS',
            'shadcn/ui',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/oxylife.jpg',
        longThumbnail: '/projects/thumbnail/oxylife.jpg',
        images: [
            '/projects/thumbnail/oxylife.jpg',
        ],
    },
    {
        title: 'World Cup 2030 Hotels',
        slug: 'world-cup-hotels',
        liveUrl: 'https://github.com/nachitzaid/hotel_recomondation',
        year: 2025,
        description: `
      A capstone project booking platform that integrates a Machine Learning recommendation engine to suggest hotels based on tourist preferences for the World Cup 2030. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🤖 ML Recommendation Engine: Powered by TF-IDF and Nearest Neighbors algorithm</li>
        <li>🛠️ Full Admin Suite: Complete CRUD functionality for hotel management and reservation systems</li>
        <li>📦 Scalable Backend: Asynchronous search APIs and MongoDB database integration</li>
      </ul>
      `,
        role: `
      Machine Learning & Full-Stack Developer <br/>
      <ul>
        <li>✅ Researched, designed, and deployed the TF-IDF hotel recommendation engine</li>
        <li>✅ Built the Next.js frontend and Flask REST API endpoints</li>
        <li>✅ Configured MongoDB data pipelines and model integration</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'Flask',
            'MongoDB',
            'Scikit-learn',
            'Pandas',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/worldcup.jpg',
        longThumbnail: '/projects/thumbnail/worldcup.jpg',
        images: [
            '/projects/thumbnail/worldcup.jpg',
        ],
    },
    {
        title: 'Aura Hotel',
        slug: 'aura-hotel',
        liveUrl: 'https://github.com/AbdelmajidSabiri/aura_hotel',
        year: 2024,
        description: `
      Aura Hotel is a robust desktop application built using JavaFX to manage room allocations, client bookings, and invoicing modules. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>💻 Desktop Dashboard: Clean JavaFX (FXML/CSS) dashboards for frontdesk operations</li>
        <li>🗃️ Data Access: Structured Data Access Object (DAO) pattern with MongoDB</li>
        <li>🔧 Maven Orchestration: Standardized build lifecycle management</li>
      </ul>
      `,
        role: `
      Desktop Software Engineer <br/>
      <ul>
        <li>✅ Designed the desktop layouts and FXML components</li>
        <li>✅ Structured the MongoDB connection pool and database access interfaces</li>
      </ul>
      `,
        techStack: [
            'Java 11',
            'JavaFX',
            'MongoDB',
            'Maven',
        ],
        thumbnail: '',
        longThumbnail: '',
        images: [],
    },
    {
        title: 'Smart Weather App',
        slug: 'smart-weather',
        liveUrl: 'https://github.com/nachitzaid/weather_app_py',
        year: 2024,
        description: `
      A modern weather application consuming the Open-Meteo API to calculate probabilistic weather conditions and store search histories. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🌤️ Real-Time Forecasts: Aggregated hourly weather forecasts and metric calculations</li>
        <li>💾 Search History: Local SQL database history tracking for logged searches</li>
      </ul>
      `,
        role: `
      Developer <br/>
      <ul>
        <li>✅ Developed API integration and JSON parsing routines</li>
        <li>✅ Styled standard layouts using Bootstrap</li>
      </ul>
      `,
        techStack: [
            'Python',
            'Flask',
            'SQLite',
            'SQLAlchemy',
            'Bootstrap',
        ],
        thumbnail: '',
        longThumbnail: '',
        images: [],
    },
    {
        title: 'Capsule',
        slug: 'capsule',
        liveUrl: 'https://capsule-lovat-ten.vercel.app/',
        year: 2025,
        description: `
      Capsule is a modern landing page design delivering premium, fluid visual interactions and custom layouts. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>✨ Rich Animations: Fluid hover effects and scroll transitions</li>
        <li>📱 Mobile First: Beautifully responsive layout across all device viewports</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      <ul>
        <li>✅ Rebuilt mock UX layouts and tailored components</li>
        <li>✅ Coded interactive animations using Framer Motion</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/capsule.jpg',
        longThumbnail: '/projects/thumbnail/capsule.jpg',
        images: [
            '/projects/thumbnail/capsule.jpg',
        ],
    },
    {
        title: 'NeuroDent UI Design',
        slug: 'neurodent-ui-design',
        year: 2025,
        description: `
      NeuroDent is a premium, AI-powered dental care platform UI/UX design. It features a modern, clean healthcare landing page optimized for conversion and client trust. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🎨 High-Fidelity Design: Carefully curated dental visual aesthetics and balanced white space</li>
        <li>🦷 AI Dentistry Showcase: Sections designed to clearly communicate neural networks integration in diagnosis and planning</li>
        <li>📱 Responsive Layouts: Crafted with flexible grids and components inside Figma</li>
      </ul>
      `,
        role: `
      UI/UX Designer <br/>
      <ul>
        <li>✅ Created target user personas and designed user flows</li>
        <li>✅ Created cohesive design system (color palette, typography, responsive elements) in Figma</li>
        <li>✅ Produced high-fidelity mockups for landing pages and registration flow</li>
      </ul>
      `,
        techStack: [
            'Figma',
            'UI/UX Design',
            'Design Systems',
            'Wireframing',
        ],
        thumbnail: '/projects/thumbnail/neurodent.png',
        longThumbnail: '/projects/thumbnail/neurodent.png',
        images: [
            '/projects/thumbnail/neurodent.png',
        ],
    },
    {
        title: 'Nestly UI Design',
        slug: 'nestly-ui-design',
        year: 2025,
        description: `
      Nestly is a luxury real-estate exploration and booking UI/UX design. Made to deliver a premium property exploration experience with immersive 3D-tour hooks. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🏡 Modern Real Estate Visuals: Minimalist yet bold editorial layout style</li>
        <li>🕶️ Immersive Call to Action: Designed components for booking 3D virtual tours</li>
        <li>💎 Premium Color Palette: Curated soft beige, dark slate, and vibrant highlights</li>
      </ul>
      `,
        role: `
      UI/UX Designer <br/>
      <ul>
        <li>✅ Outlined layout structures and visual hierarchies</li>
        <li>✅ Custom-designed high-fidelity components and card systems in Figma</li>
        <li>✅ Standardized responsive desktop/mobile layouts</li>
      </ul>
      `,
        techStack: [
            'Figma',
            'UI/UX Design',
            'Visual Design',
            'Design Systems',
        ],
        thumbnail: '/projects/thumbnail/nestly.png',
        longThumbnail: '/projects/thumbnail/nestly.png',
        images: [
            '/projects/thumbnail/nestly.png',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Full-Stack Developer Intern (Advanced Internship)',
        company: 'OXYLIFE RESPIR AIR',
        duration: 'Oct 2025 - Apr 2026',
    },
    {
        title: 'Web Developer Intern',
        company: 'OXYLIFE RESPIR AIR',
        duration: 'Apr 2025 - Jun 2025',
    },
    {
        title: 'Web Developer Intern',
        company: 'Vivace Consulting',
        duration: 'Jun 2024 - Jul 2024',
    },
];
