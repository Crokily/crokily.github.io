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
  summary?: string;
}

// 关键词列表 - 这些词会被高亮显示
export const keywords = [
  // Original technical skills
  'Full-stack Development', 'Python', 'Docker', 'Linux', 'AWS EC2',
  'API knowledge', 'RESTful API', 'containerization', 'CI/CD', 'JWT',
  'MySQL', 'PostgreSQL', 'Redis', 'Nginx', 'GitHub Actions',

  // IT Support specific keywords
  'Technical Support Engineer', 'IT Support', 'ticketing system', 'troubleshooting',
  'customer support', 'problem-solving', 'knowledge base articles', 'SOPs',
  'Linux console', 'log analysis', 'customer communication', 'multitasking',
  '24x7 support', 'technical assistance', 'analytical thinking', 'cultural differences',
  'system administration', 'technical troubleshooting', 'user support', 'issue resolution',
  'remote support', 'global team', 'follow-the-sun', 'technical expertise',

  // Communication and documentation
  'customer communication', 'technical documentation', 'knowledge base',
  'SOP documentation', 'product requirement documents', 'technical writing',

  // Languages and soft skills
  'Mandarin Chinese', 'native Mandarin speaker', 'cross-cultural communication',
  'team collaboration', 'stakeholder management', 'agile methodologies',

  // Performance metrics
  '90%', '3x', '7-day', '150+', '46.9%'
];

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Colin Zheng",
    title: "IT Support Engineer",
    phone: "0481908116",
    email: "Crokily@gmail.com",
    location: " Kingsford, Sydney",
    links: {
      github: "https://github.com/Crokily",
      linkedin: "https://linkedin.com/in/Crokily",
      website: " https://coly.cc"
    }
  },
  education: [
    {
      degree: "Master of Information Technology",
      institution: "The University of New South Wales",
      duration: "2023.09-2025.09",
      location: "Sydney, Australia",
      wam: "82"
    },
    {
      degree: "Bachelor of Software Engineering",
      institution: "Zhongkai University of Agriculture and Engineering",
      duration: "2017.09-2021.06",
      location: "Guangzhou, China",
      wam: "81.7"
    }
  ],
  experience: [
    {
      company: "UNSW AI Society",
      title: "IT Director",
      duration: "2024.12 – Now",
      location: "Sydney",
      overview: "Provided technical support services. Coordinated requirement design and drove project development.",
      contributions: [
        "Created and maintained ticketing system and provided technical support to 200+ student members.",
        "Maintained Linux servers and Docker containers for project deployment, performing log analysis and troubleshooting system performance issues.",
        "Led AI Discord collaboration project, covered frontend/backend and AI workflow development, provided user and technical documentation.",
        "Configured CI/CD pipelines using GitHub Actions and Docker, ensuring reliable automated deployments and system updates."
      ],
      techStack: [
        "Linux", "Docker", "PostgreSQL", "Python", "FastAPI", "RESTful APIs",
        "JWT", "GitHub Actions", "System Administration", "Ticketing Systems"
      ]
    },
    {
      company: "Yongbin Adhesive Products Co., Ltd.",
      title: "Software Engineer",
      duration: "2021.07 - 2022.09",
      location: "Dongguan, China",
      overview: "Provided technical support and system maintenance for manufacturing ERP system",
      project: {
        name: "ERP System Maintenance",
        description: "Maintained and supported ERP system, handling customer issues and system improvements."
      },
      contributions: [
        "Developed and maintained automated ERP order workflow (Python, Django, Baidu OCR), optimized APIs and reporting, integrated Redis for performance, provided documentation and support to improve team efficiency.",
        "Independently completed multiple React page development and maintenance for production, customer, and order management modules.",
        "Provided technical support for ERP system users, troubleshooting system issues and resolving customer-reported problems efficiently. Maintained system uptime and resolved critical issues affecting production workflow.",
        "Managed system maintenance tasks including Docker container updates, log analysis, and performance monitoring using Linux console tools."
      ],
      techStack: [
        "Linux", "Docker", "Python", "Django", "PostgreSQL", "Redis",
        "RESTful APIs", "JWT", "System Troubleshooting", "Customer Support"
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
        "Technical Documentation", "Customer Support", "Knowledge Base Management",
        "Problem Analysis", "User Interviewing", "SOP Development"
      ]
    }
  ],
  summary: "I have a Master's degree in IT from UNSW and I am a native Mandarin speaker. I use Linux and Docker often, and I am familiar with cloud services like AWS EC2 for project deployment. I have one year of full-stack development experience, so I know Python and APIs very well. As the IT Director at UNSW AI Society, I managed the ticketing system and handled IT support tasks. I also worked as a product manager at Netease, where I communicated with customers and wrote hundreds of product documents, SOPs, and knowledge base articles. I enjoy learning new technologies and have worked in different roles, so I understand how to work with different teams and customers, solve their problems, and help teams work better together."
}; 