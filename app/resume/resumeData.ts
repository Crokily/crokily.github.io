export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    phone: string;
    email: string;
    location: string;
    visa: string;
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
    title: string;
    company: string;
    duration: string;
    location?: string;
    achievements: string[];
  }[];
  projects: {
    name: string;
    url?: string;
    description: string;
    highlights: string[];
  }[];
}

// 关键词列表 - 这些词会被高亮显示
export const keywords = [
  'AI-powered', 'Next.js', 'Python', 'Tailwind CSS', 'Supabase', 'GPT API', 'discord.py',
  'agile methodologies', 'GitHub Issues', 'v0.dev', 'real-time transcription', 
  'automatic meeting summarization', 'SPF', 'DKIM', 'DMARC', 'product requirement documents',
  'technical requirements', 'React', 'TypeScript', 'useRef', 'useCallback hooks',
  'Docker', 'GitHub Actions', 'Vercel', 'Vue.js', 'Django', 'MySQL', 'Redis',
  'AWS EC2', 'Node.js', 'MongoDB', '10+', '46.9%', '7-day', '150+'
];

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Colin Zheng",
    title: "Full Stack Developer",
    phone: "0481908116",
    email: "Crokily@gmail.com",
    location: "Kingsford, Sydney",
    visa: "500 Visa",
    links: {
      github: "https://github.com/Crokily",
      linkedin: "https://linkedin.com/in/Crokily",
      website: "https://coly.cc"
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
      title: "UNSW AI Society (Sydney) | IT Director",
      company: "",
      duration: "2024.12 – Now",
      achievements: [
        "Designed technology stack and system architecture for website, admin system, educational platform, and AI-powered Discord bot. Prioritized task management system using Next.js, Python, Tailwind CSS, Supabase, GPT API, and discord.py.",
        "Led weekly meetings to define goals and gather feedback. Applied agile methodologies with GitHub Issues for task management, and hosting weekly team meetings to ensure progress.",
        "Built a Discord bot for task creation, management, and notifications [s.coly.cc/taskbot].",
        "Created management panel prototype with v0.dev, generating production-ready code and accelerating development.",
        "Integrating website with Discord API to sync event data and enable advanced features including real-time transcription, automatic meeting summarization, and intelligent task assignments.",
        "Configured association's email system on Lark with SPF, DKIM, and DMARC protocols to enhance security."
      ]
    },
    {
      title: "NetEase (Hangzhou) | Product Operations Intern",
      company: "",
      duration: "2018.01 – 2020.10",
      achievements: [
        "Created 10+ product requirement documents for feature development of children's coding platform \"CodeCombat.\"",
        "Designed AI-powered educational features, including \"AI Teacher\" that generated 46.9% of annual revenue.",
        "Created Python-based training courses, including a 7-day beginner's course that boosted user conversion.",
        "Interviewed 150+ users and converted insights into technical requirements to enhance product usability."
      ]
    }
  ],
  projects: [
    {
      name: "Word Dictation Application",
      url: "https://d.coly.cc",
      description: "Designed and implemented an English word dictation application using React, Next.js, TypeScript, Tailwind CSS, and Shadcn/UI.",
      highlights: [
        "Implemented smooth dictation experience using Web Speech API (TTS) with customizable playback settings",
        "Optimized audio playback and auto-dictation logic using useRef and useCallback hooks",
        "Developed data management system supporting .txt/.csv dictionary uploads with word definitions",
        "Implemented persistent storage using localStorage for seamless user experience without login",
        "Automated deployment using Docker, GitHub Actions, and Vercel"
      ]
    },
    {
      name: "Factory Management System",
      description: "Developed a comprehensive factory management system for order, product, inventory, and production status tracking",
      highlights: [
        "Built frontend using Vue.js and Element UI, backend with Django framework and MySQL database",
        "Implemented Redis caching for real-time order status updates and improved response times",
        "Integrated OCR API for automated data extraction from PDF/images to reduce manual entry errors",
        "Developed custom Excel export functionality for factory invoices using Python",
        "Deployed system on AWS EC2 for reliable production use"
      ]
    },
    {
      name: "Online Classroom System",
      url: "https://gitee.com/Crokily/ykt",
      description: "Developed an online education platform using Vue.js, Node.js, MongoDB, and Redis",
      highlights: [
        "Implemented features for recorded courses, smart question banks, and online examinations",
        "Integrated learning analytics tools for tracking student progress and optimizing teaching outcomes",
        "Built real-time communication features for interactive learning experiences"
      ]
    }
  ]
}; 