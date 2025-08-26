import DownloadButton from './components/DownloadButton';
import { resumeData } from './resumeData';
import { highlightKeywords, processLinksInText, processQuotes } from './utils';

export default function ResumePage() {
  const { personalInfo, summary, education, experience, projects } = resumeData;

  return (
    <main className="min-h-screen bg-gray-100 p-2 flex flex-col items-center">
      {/* A4 Container */}
      <div
        id="resume-content"
        className="bg-white text-gray-800 shadow-2xl"
        style={{
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          lineHeight: 1.1,
          width: '210mm',
          minHeight: '297mm',
          maxHeight: '297mm',
          padding: '3.25mm',
          boxSizing: 'border-box',
        }}
      >
        {/* Header */}
        <header className="flex flex-row flex-nowrap justify-between">
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
              </a>|
              {personalInfo.location}
            </p>
            <p>
              <a href={personalInfo.links.github} target="_blank" className="text-blue-600 hover:text-blue-700">
                {personalInfo.links.github.replace('https://', '')}
              </a> |
              <a href={personalInfo.links.linkedin} target="_blank" className="text-blue-600 hover:text-blue-700 ml-1 mr-1">
                {personalInfo.links.linkedin.replace('https://', '')}
              </a>|
              <a href={personalInfo.links.website} target="_blank" className="text-blue-600 hover:text-blue-700">
                {personalInfo.links.website.replace('https://', '')}
              </a>
            </p>
          </address>
        </header>

        {/* Summary */}
        <section className="flex flex-col space-y-0.5 mb-1" aria-label="Summary">
          <h2 className="font-bold text-base text-blue-700 border-b-2 border-gray-200">Summary</h2>
          <p className="text-sm text-gray-700">
            {highlightKeywords(summary)}
          </p>
        </section>

        {/* Education */}
        <section className="flex flex-col space-y-0.5 mb-1" aria-label="Education">
          <h2 className="font-bold text-base text-blue-700 border-b-2 border-gray-200">Education</h2>
          {education.map((edu, index) => (
            <article key={index} className="flex flex-row flex-nowrap justify-between">
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

        {/* Projects */}
        <section className="flex flex-col space-y-0.5 mb-1" aria-label="Project">
          <h2 className="font-bold text-base text-blue-700 border-b-2 border-gray-200">Projects</h2>
          
          {projects.map((project, index) => (
            <article key={index} className="flex flex-col" aria-label={project.name}>
              {/* Project Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <h3 className="font-bold">{project.name}</h3>
                  {project.comment && (
                    <span className="text-sm text-gray-500 ml-2">
                      {project.comment}
                    </span>
                  )}
                  {project.url && (
                    <a href={project.url} target="_blank" className="text-sm text-gray-500 ml-2">
                      {project.url.replace('https://', '')}
                    </a>
                  )}
                </div>
                {project.duration && (
                  <time className="text-sm text-gray-600">{project.duration}</time>
                )}
              </div>
              
              {/* Project Description */}
              <p className="text-sm mb-0.5 text-gray-700">
                {highlightKeywords(project.description)}
              </p>

              {/* Tech Stack */}
              <div className="text-xs text-blue-600 italic">
                <span>{project.techStack?.join(', ')}</span>
              </div>
              
              {/* Contributions */}
              <div className="mb-0.5">
                <ul className="list-disc text-sm text-gray-700 space-y-0 pl-3.5">
                  {project.contributions.map((contribution, contIndex) => (
                    <li key={contIndex}>
                      {highlightKeywords(contribution)}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        {/* Work Experience */}
        <section className="flex flex-col space-y-0.5 mb-1" aria-label="Experience">
          <h2 className="font-bold text-base text-blue-700 border-b-2 border-gray-200">Work Experience</h2>
          
          {experience.map((exp, index) => (
            <article key={index} className="flex flex-col mb-2" aria-label={`${exp.company} ${exp.title}`}>
              {/* Company and Role Header */}
              <div className="flex flex-row flex-nowrap justify-between">
                <div>
                  <h3 className="font-bold">{exp.company} | {exp.title}</h3>
                </div>
                <div className="text-right">
                  <time className="text-sm text-gray-600">{exp.duration}</time>
                </div>
              </div>
              
              {/* Overview and Location */}
              <div className="flex flex-row flex-nowrap justify-between mt-0.5 mb-0.5">
                {/* 在className中限制p的长度 */ }
                <p className="text-sm text-gray-700 w-6/7">
                  {highlightKeywords(exp.overview)}
                </p>
                {exp.location && <p className="text-sm text-gray-600">{exp.location}</p>}
              </div>

              {/* Project Description (if exists), project name 和 description 在同一行 */}
              {exp.project && (
                <div className="mb-0.5">
                  <span className="font-semibold text-sm">{exp.project.name}: </span>
                  <span className="text-sm text-gray-700 w-8/9">
                    {highlightKeywords(exp.project.description)}
                  </span>
                </div>
              )}
              {/* Tech Stack, 字体更小且斜体，和正文对比更明显 */}
              <div className="text-xs text-blue-600 italic">
                <span>{exp.techStack.join(', ')}</span>
              </div>

              {/* Contributions */}
              <div className="mb-0.5">
                {/* <h4 className="font-semibold text-sm">Key Contributions:</h4> */}
                <ul className="list-disc text-sm text-gray-700 space-y-0 pl-3.5">
                  {exp.contributions.map((contribution, contIndex) => (
                    <li key={contIndex}>
                      {processLinksInText(processQuotes(contribution))}
                    </li>
                  ))}
                </ul>
              </div>


            </article>
          ))}
        </section>

      </div>

      {/* Download Button Component */}
      <DownloadButton />
    </main>
  );
} 