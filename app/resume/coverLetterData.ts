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
    introduction: string;
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
    company: "LITSAS & CO",
    position: "Full Stack Developer"
  },
  content: {
    introduction: "I am writing to apply for the Full Stack Developer position at LITSAS & CO.",
    highlights: [
      "Experience with React and TypeScript for building responsive front-end applications",
      "Skills in Python, Django, and FastAPI for robust back-end development",
      "Knowledge of PostgreSQL databases and RESTful API design and integration",
      "Experience with authentication systems including JWT and OAuth",
      "Familiar with Docker, CI/CD pipelines, and cloud deployment practices",
      "Strong problem-solving abilities and collaborative team experience"
    ],
    conclusion: "I believe I can contribute to your digital transformation initiatives by developing secure, scalable solutions for client engagement and business automation. I am eager to bring my technical expertise to your innovative team."
  }
};
