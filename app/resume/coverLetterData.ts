export interface CoverLetterData {
  personalInfo: {
    name: string;
    phone: string;
    email: string;
  };
  date: string;
  recipient: {
    company: string;
    position: string;
  };
  content: {
    highlights: string[];
    conclusion: string;
  };
}

export const coverLetterData: CoverLetterData = {
  personalInfo: {
    name: "Colin Zheng",
    phone: "0481908116",
    email: "Crokily@gmail.com"
  },
  date: new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }),
  recipient: {
    company: "Microsoft",
    position: "Software Engineer"
  },
  content: {
    highlights: [
      "Strong skills in JavaScript, TypeScript, and Python programming",
      "Experience building web applications with React and Next.js",
      "Knowledge of RESTful API development with FastAPI and Express",
      "Familiar with database systems including PostgreSQL",
      "Experience with Docker and CI/CD deployment practices",
      "Team leadership and agile development methodology experience"
    ],
    conclusion: "I am excited to start my career at Microsoft. I want to learn and grow with your team. I will work hard to help build great software solutions. I look forward to contributing to your projects."
  }
};
