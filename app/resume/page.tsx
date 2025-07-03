import DownloadButton from './components/DownloadButton';
import { resumeData } from './resumeData';
import { highlightKeywords, processLinksInText, processQuotes } from './utils';

export default function ResumePage() {
  const { personalInfo, education, experience, projects } = resumeData;

  return (
    <main className="min-h-screen bg-gray-100 p-2 flex flex-col items-center">
      {/* A4 Container */}
      <div
        id="resume-content"
        className="bg-white text-gray-800 shadow-2xl"
                  style={{
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            lineHeight: 1.2,
            width: '210mm',
            minHeight: '297mm',
            maxHeight: '297mm',
            padding: '5mm',
            boxSizing: 'border-box',
          }}
      >
        {/* Header */}
        <header className="flex flex-row flex-nowrap justify-between mb-2">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold leading-5 text-blue-600 tracking-wide">
              {personalInfo.name}
            </h1>
            <span className="text-xs text-gray-500">{personalInfo.title}</span>
          </div>

          <address className="justify-items-end not-italic text-sm">
            <p>
              {personalInfo.phone} | 
              <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:text-blue-700 ml-1 mr-1">
                {personalInfo.email}
              </a> | 
              {personalInfo.location} | {personalInfo.visa}
            </p>
            <p>
              <a href={personalInfo.links.github} target="_blank" className="text-blue-600 hover:text-blue-700">
                {personalInfo.links.github.replace('https://', '')}
              </a> | 
              <a href={personalInfo.links.linkedin} target="_blank" className="text-blue-600 hover:text-blue-700 ml-1 mr-1">
                {personalInfo.links.linkedin.replace('https://', '')}
              </a> | 
              <a href={personalInfo.links.website} target="_blank" className="text-blue-600 hover:text-blue-700">
                {personalInfo.links.website.replace('https://', '')}
              </a>
            </p>
          </address>
        </header>

        {/* Education */}
        <section className="flex flex-col space-y-0.5 mb-2" aria-label="Education">
          <h2 className="font-bold text-base text-blue-700 border-b-2 border-gray-200 pb-0.5 mb-1">Education</h2>
          {education.map((edu, index) => (
                          <article key={index} className="flex flex-row flex-nowrap justify-between mb-1">
              <div>
                <div className="flex items-center">
                  <h3 className="font-bold">{edu.degree}</h3>
                  {edu.wam && <span className="text-sm text-gray-500 ml-2">WAM {edu.wam}</span>}
                </div>
                <p className="text-sm">{edu.institution}</p>
              </div>
              <div className="text-right">
                <time className="text-sm text-gray-600">{edu.duration}</time>
                <p className="text-sm text-gray-600">{edu.location}</p>
              </div>
            </article>
          ))}
        </section>

        {/* Work Experience */}
        <section className="flex flex-col space-y-0.5 mb-2" aria-label="Experience">
          <h2 className="font-bold text-base text-blue-700 border-b-2 border-gray-200 pb-0.5 mb-1">Work Experience</h2>
          
                      {experience.map((exp, index) => (
              <article key={index} className="flex flex-col mb-1.5" aria-label={exp.title}>
              <div className="flex flex-row flex-nowrap justify-between">
                <div>
                  <h3 className="font-bold">{exp.title}</h3>
                </div>
                <div className="text-right">
                  <time className="text-sm text-gray-600">{exp.duration}</time>
                  {exp.location && <p className="text-sm text-gray-600">{exp.location}</p>}
                </div>
              </div>
                              <ul className="list-disc list-inside mt-0.5 mb-0.5 text-sm text-gray-700 space-y-0">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex}>
                    {processLinksInText(processQuotes(achievement))}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        {/* Projects */}
        <section className="flex flex-col space-y-0.5" aria-label="Project">
          <h2 className="font-bold text-base text-blue-700 border-b-2 border-gray-200 pb-0.5 mb-1">Projects</h2>
          
                      {projects.map((project, index) => (
              <article key={index} className="flex flex-col mb-1" aria-label={project.name}>
              <div className="flex items-center">
                <h3 className="font-bold">{project.name}</h3>
                {project.url && (
                  <a href={project.url} target="_blank" className="text-sm text-gray-500 ml-2">
                    {project.url.replace('https://', '')}
                  </a>
                )}
              </div>
                              <p className="text-sm mb-0">
                  {highlightKeywords(project.description)}
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-0">
                {project.highlights.map((highlight, hlIndex) => (
                  <li key={hlIndex}>
                    {highlightKeywords(highlight)}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </div>

      {/* Download Button Component */}
      <DownloadButton />
    </main>
  );
} 