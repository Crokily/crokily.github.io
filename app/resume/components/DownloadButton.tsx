'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { resumeData } from '../resumeData';
import { coverLetterData } from '../coverLetterData';

interface DownloadButtonProps {
  type?: 'resume' | 'cover-letter';
}

export default function DownloadButton({ type = 'resume' }: DownloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Hide the button in production environment (Vercel)
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      const apiEndpoint = type === 'cover-letter' ? '/api/generate-cover-letter-pdf' : '/api/generate-pdf';
      const response = await fetch(apiEndpoint);

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;

      // 动态生成文件名
      let fileName: string;
      if (type === 'cover-letter') {
        const { name } = coverLetterData.personalInfo;
        const { position } = coverLetterData.recipient;
        fileName = `${name} - ${position} - Cover Letter.pdf`;
      } else {
        const { name, title } = resumeData.personalInfo;
        fileName = `${name} - ${title}.pdf`;
      }
      a.download = fileName;

      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error('Failed to download PDF:', error);
      alert('Failed to download PDF, please check the console for more information.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSwitchMode = () => {
    if (type === 'resume') {
      router.push('/resume/cover-letter');
    } else {
      router.push('/resume');
    }
  };

  return (
    <div className="fixed bottom-8 right-8 print:hidden flex flex-col gap-3">
      <button
        onClick={handleDownload}
        disabled={isLoading}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Generating...' : `Download ${type === 'cover-letter' ? 'Cover Letter' : 'Resume'} PDF`}
      </button>

      <button
        onClick={handleSwitchMode}
        className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105"
      >
        Switch to {type === 'resume' ? 'Cover Letter' : 'Resume'}
      </button>
    </div>
  );
} 