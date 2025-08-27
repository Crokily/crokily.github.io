export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    phone: string;
    email: string;
    location: string;
    links: {
      github: string;
      linkedin: string;
      website: string;
    };
  };
  summary: string;
  education: {
    degree: string;
    institution: string;
    duration: string;
    location: string;
    wam?: string;
  }[];
  experience: {
    company: string;
    title: string;
    duration: string;
    location?: string;
    overview: string;
    project?: {
      name: string;
      description: string;
    };
    contributions: string[];
    techStack: string[];
  }[];
  projects: {
    name: string;
    comment?: string;
    url?: string;
    duration?: string;
    description: string;
    contributions: string[];
    techStack?: string[];
  }[];
}

// 关键词列表 - 这些词会被高亮显示
export const keywords = [
  'AI-powered', 'AI Agent', 'AI Workflow', 'Full-stack Development', 'Frontend', 'Backend', 
  'Next.js', 'Python', 'Tailwind CSS', 'Supabase', 'GPT API', 'discord.py', 
  'agile methodologies', 'GitHub Issues', 'v0.dev', 'real-time transcription', 
  'automatic meeting summarization', 'SPF', 'DKIM', 'DMARC', 'product requirement documents',
  'technical requirements', 'React', 'TypeScript', 'useRef', 'useCallback hooks',
  'Docker', 'GitHub Actions', 'Vercel', 'Vue.js', 'Django', 'MySQL', 'Redis',
  'AWS EC2', 'Node.js', 'MongoDB', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic',
  'Py-Cord', 'OpenAI', 'Gemini APIs', 'PydanticAI', 'VPS', 'MUI', 'Zustand',
  'OCR API', 'Material-UI', 'Vite', 'Express', 'Drizzle ORM', 'Upstash Redis',
  'AI SDK', 'Zod', 'Linux VPS', 'JWT', 'RESTful API', 'CI/CD', 'Nginx', 'Ant Design',
  'Axios', 'Openpyxl', 'pytest', 'MVC', 'Custom Hooks', 'responsive', 'containerization',
  'query optimization', 'data persistence', 'asynchronous task queue', 'Worker process',
  'scalable', 'high availability',
  '10+', '46.9%', '7-day', '150+', '50%', '90%', '3x'
];

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Colin Zheng",
    title: "Software Engineer",
    phone: "0481908116",
    email: "Crokily@gmail.com",
    location: " Kingsford, Sydney",
    links: {
      github: "https://github.com/Crokily",
      linkedin: "https://linkedin.com/in/Crokily",
      website: " https://coly.cc"
    }
  },
  // Summary length: about 340 words
  summary: "Experienced Full Stack Developer with 1+ years of React/JavaScript expertise, leading complex web applications. Familiar with Node.js, Express.js, Python, Django, and cloud deployment, passionate about exploring new technologies. Experienced with PostgreSQL databases and API integrations for business applications.",
  education: [
    {
      degree: "Master of Information Technology",
      institution: "The University of New South Wales",
      duration: "2023.09-2025.09",
      location: "Sydney, Australia",
      wam: "82"
    }
  ],
  experience: [
    {
      company: "UNSW AI Society",
      title: "IT Director",
      duration: "2024.12 – Now",
      location: "Sydney",
      overview: "Led team using Agile, coordinated requirement design, and drove project development and maintenance.",
      project: {
        name: "Collaborative Task Platform",
        description: "A comprehensive task collaboration system with frontend, backend, and AI agent workflow."
      },
      contributions: [
        "As Team Leader, led the entire project from 0 to 1. Used agile to coordinate team development.",
        "Developed 50% of frontend including meeting, permission and task management pages with OAuth authentication, improving UX through 3 design iterations.",
        "Designed and implemented 10+ REST endpoints (tasks, meeting records, portfolios, roles, assignments). Used Pytest for unit testing. Solved N+1 Query Problem through query optimization, improving performance by 90%.",
        "Utilized PydanticAI to achieve AI agent workflow for automatically generating tasks from Discord meeting.",
        "Developed CI/CD pipeline using GitHub Actions and Docker Compose for automated deployment on VPS."
      ],
      techStack: [
        "Next.js", "TypeScript", "MUI", "Zustand", "Python", "FastAPI", 
        "PostgreSQL", "SQLAlchemy", "Alembic", "Py-Cord", "PydanticAI", 
        "VPS", "Vercel", "Docker", "GitHub Actions"
      ]
    },
    {
      company: "Yongbin Adhesive Products Co., Ltd.",
      title: "Software Engineer",
      duration: "2021.07 - 2022.09",
      location: "Dongguan, China",
      overview: "Responsible for the website portion of the ERP system.",
      project: {
        name: "ERP System",
        description: "A ERP system for manufacturing with OCR automated processing, production, and analysis workflows. "
      },
      contributions: [
        "Responsible for full-stack development of ERP system's automated order entry workflow, integrating Baidu OCR API to improve efficiency by 90%, with long-term maintenance and development of semi-automated entry features.",
        "Completed multiple React page development and maintenance for production, customer, and order management modules. Configured Axios global interceptors for JWT user authentication and route guards.",
        "Backend based on Django REST Framework, designed and implemented 15+ RESTful API endpoints. Used Openpyxl to develop automatic generation of delivery notes, product labels, monthly reconciliation statements and other Excel reports. Introduced Redis for hot API data caching, improving order list page loading speed by 3x."
      ],
      techStack: [
        "JavaScript", "React", "React Router", "TailwindCSS", "Axios", "Python", 
        "Django", "PostgreSQL", "Redis", "Baidu OCR API", "Openpyxl", "Docker", "Nginx"
      ]
    },
    {
      company: "NetEase Game",
      title: "Product Manager Intern",
      duration: "2018.01 – 2020.10",
      location: "Hangzhou, China",
      overview: "Designed product solutions, coordinated team collaboration, and drove business growth.",
      contributions: [
        "Created 10+ product requirement documents for feature development of children's coding platform \"CodeCombat.\"",
        "Designed AI-powered educational features, including \"AI Teacher\" that generated 46.9% of annual revenue.",
        "Created Python-based training courses, including a 7-day beginner's course that boosted user conversion.",
        "Interviewed 150+ users and converted insights into technical requirements to enhance product usability."
      ],
      techStack: [
      ]
    }
  ],
  projects: [
    {
      name: "Atlassian AI Whiteboard Tool",
      comment: "The client from Atlassian",
      duration: "2025.05 - 2025.08",
      description: "A whiteboard organization tool using AI to convert messy meeting whiteboard images into structured Confluence pages.",
      contributions: [
        "Responsible for frontend architecture design and initial development, built responsive user interface using React, Material-UI, and Vite, and completed core functions such as image upload and content preview editing.",
        "Independently undertook backend API service development and implementation, built RESTful API with MVC + Service architecture based on Node.js and Express, utilized Drizzle ORM for type-safe data persistence operations. Completed AI agent workflow using AI SDK + Zod to provide structured multi-model intelligent image analysis functionality.",
        "Implemented an asynchronous task queue system based on Upstash Redis. After users upload images, analysis tasks are pushed to the queue and consumed by an independent Worker process, achieving decoupling from main API service and ensuring system scalability and high availability.",
        "Used Docker and Docker Compose to containerize backend API and asynchronous Worker services, configured GitHub Actions CI/CD workflow, and implemented automated deployment on Linux VPS."
      ],
      techStack: [
        "JavaScript", "React", "React Router", "Material-UI", "Vite", "Node.js", 
        "Express", "Drizzle ORM", "Upstash Redis", "AI SDK", "Zod", "Docker", 
        "GitHub Actions", "Linux VPS"
      ]
    }
  ]
}; 