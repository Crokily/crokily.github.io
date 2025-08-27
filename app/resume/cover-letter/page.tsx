import DownloadButton from '../components/DownloadButton';
import Navigation from '../components/Navigation';
import { coverLetterData } from '../coverLetterData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${coverLetterData.personalInfo.name} - Cover Letter`,
  description: `${coverLetterData.personalInfo.name}'s cover letter for ${coverLetterData.recipient.position} position`,
};

export default function CoverLetterPage() {
  const { personalInfo, date, recipient, content } = coverLetterData;

  return (
    <main className="min-h-screen bg-gray-100 p-2 flex flex-col items-center">
      {/* Navigation */}
      <Navigation />

      {/* A4 Container */}
      <div
        id="cover-letter-content"
        className="bg-white text-gray-800 shadow-2xl"
        style={{
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          lineHeight: 1.6,
          width: '210mm',
          minHeight: '297mm',
          maxHeight: '297mm',
          padding: '25mm',
          boxSizing: 'border-box',
        }}
      >
        {/* Header */}
        <header className="mb-8">
          <div className="text-right mb-4">
            <p className="font-bold">{personalInfo.name}</p>
            <p>{personalInfo.phone}</p>
            <p>
              <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:text-blue-700">
                {personalInfo.email}
              </a>
            </p>
          </div>

          <div className="text-right mb-8">
            <p>{date}</p>
          </div>

          <div className="mb-8">
            <p>Dear Sir/Madam,</p>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-6">
          <p className="mb-4">
            With great excitement, I am writing in response to your advertisement for the{' '}
            <span className="font-semibold">{recipient.position}</span> position at{' '}
            <span className="font-semibold">{recipient.company}</span>.
          </p>
          <p>{content.introduction}</p>
        </section>

        {/* Highlights */}
        <section className="mb-6">
          <p className="mb-3 font-semibold">Let me tell you about my main skills and experience:</p>
          <ul className="list-disc pl-6 space-y-1">
            {content.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </section>

        {/* Conclusion */}
        <section className="mb-8">
          <p className="mb-4">{content.conclusion}</p>
          <p>I look forward to hearing from you to talk about my application.</p>
        </section>

        {/* Closing */}
        <section>
          <p className="mb-8">Yours sincerely,</p>
          <p className="font-bold">{personalInfo.name}</p>
        </section>
      </div>

      {/* Download Button Component */}
      <DownloadButton type="cover-letter" />
    </main>
  );
}
