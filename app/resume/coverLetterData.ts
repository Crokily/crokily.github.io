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
    company: "LITSAS & CO",
    position: "Full Stack Developer"
  },
  content: {
    highlights: [
      "Good knowledge of React and JavaScript for front-end development",
      "Experience with Python, Django, Node.js, and Express for back-end development",
      "Skills in building RESTful APIs and database systems with PostgreSQL",
      "Experience with authentication systems including JWT and OAuth",
      "Familiar with Docker, CI/CD pipelines, and cloud deployment practices", 
      "Strong problem-solving abilities and collaborative team experience"
    ],
    conclusion: "I believe I can contribute to your digital transformation initiatives by developing secure, scalable solutions for client engagement and business automation. I am eager to bring my technical expertise to your innovative team."
  }
};
