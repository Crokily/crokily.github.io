'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-4 left-4 z-50">
      <div className="bg-white rounded-lg shadow-lg p-2 flex gap-2">
        <Link
          href="/resume"
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            pathname === '/resume'
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          Resume
        </Link>
        <Link
          href="/resume/cover-letter"
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            pathname === '/resume/cover-letter'
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          Cover Letter
        </Link>
      </div>
    </nav>
  );
}
