'use client';

import { useState } from 'react';

export default function DownloadButton() {
  // Hide the button in production environment (Vercel)
  if (process.env.NODE_ENV === 'production') {
    return null;
  }
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/generate-pdf');

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resume.pdf';
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

  return (
    <div className="fixed bottom-8 right-8 print:hidden">
      <button
        onClick={handleDownload}
        disabled={isLoading}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Generating...' : 'Download PDF'}
      </button>
    </div>
  );
} 