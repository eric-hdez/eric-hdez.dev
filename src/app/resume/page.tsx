'use client';

import { useState } from 'react';

import BackDrop from '../components/backdrop';
import { ExitIcon, NewTabIcon } from '../components/icons';
import Link from 'next/link';

const FileList = [
  {
    name: 'Software Engineer Resume',
    link: '/eric_hdez_resume.pdf',
  },
];

export default function Example() {
  const [viewingPdf, setViewingPdf] = useState<string | null>(null);
  const [currentFileName, setCurrentFileName] = useState('');

  const handleView = (link: string, name: string) => {
    setViewingPdf(link);
    setCurrentFileName(name);
  };

  const closeViewer = () => {
    setViewingPdf(null);
  };

  return (
    <>
      <dd className="mt-1 text-sm/6 sm:col-span-2 sm:mt-0">
        <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
          {FileList.map(({ name, link }, idx) => (
            <li key={idx} className="flex flex-col sm:flex-row items-center justify-between py-4 pr-5 sm:pl-4 text-sm/6">
              <div className="flex flex-1 items-center pb-2 sm:pb-0">
                <div className="flex min-w-0 flex-1 gap-2">
                  <span className="font-medium text-gray-700">{name}</span>
                </div>
              </div>

              <div className="flex shrink-0 space-x-4">
                <a href={link} download className="rounded-md bg-white font-medium underline hover:text-gray-500 hover:cursor-pointer">
                  Download
                </a>
                <span aria-hidden="true" className="text-gray-300">|</span>
                <button
                  type="button"
                  onClick={() => handleView(link, name)}
                  className="rounded-md bg-white font-medium hover:text-gray-500 underline hover:cursor-pointer"
                >
                  View
                </button>
              </div>
            </li>
          ))}
        </ul>
      </dd>

      {viewingPdf && (
        <>
          <BackDrop />
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            <div className="relative w-full max-w-5xl h-5/6 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col">
              <div className="p-4 flex justify-between items-center border-b bg-[#fcfcfc]">
                <div className="pl-3 flex flex-row items-center">
                  <h3 className="text-lg font-medium truncate">{currentFileName}</h3>
                  <Link
                    href={viewingPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 p-1 rounded-md hover:cursor-pointer hover:bg-gray-300"
                  >
                    <NewTabIcon />
                  </Link>
                </div>
                <div className="flex space-x-2 pr-2">
                  <button
                    onClick={closeViewer}
                    className="p-1 rounded-md hover:cursor-pointer rounded-md hover:bg-gray-300"
                  >
                    <ExitIcon />
                  </button>
                </div>
              </div>
              <div className="flex-grow w-full h-full">
                <iframe
                  src={viewingPdf}
                  className="w-full h-full"
                  title="PDF Viewer"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}