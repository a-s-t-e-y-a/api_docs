import { useState } from 'react';
import {  SubHeading3 } from '../typography/typographyHeadings';
import { Copy } from 'lucide-react';

interface CodeDisplay {
  heading: string;
  curlCommand: string;
}
export default function CodeDisplay({ heading, curlCommand }: CodeDisplay) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(curlCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className='col-span-3 lg:p-3'>
      <div className='mx-auto mb-2 w-full max-w-3xl'>
        <SubHeading3 heading={heading} className='text-white' />
        <div className='overflow-hidden rounded-lg bg-[#2B2B2B] shadow-lg'>
          {/* Header */}
          <div className='flex items-center justify-between bg-[#343A40] px-4 py-2'>
            <div className='flex space-x-2'>
              <div className='h-3 w-3 rounded-full bg-red-500'></div>
              <div className='h-3 w-3 rounded-full bg-yellow-500'></div>
              <div className='h-3 w-3 rounded-full bg-green-500'></div>
            </div>
            <SubHeading3 heading={heading} className='text-white' />
            <button
              onClick={handleCopy}
              className='flex items-center text-sm text-gray-400 transition-colors duration-200 hover:text-white'
            >
              <Copy size={16} className='mr-1' />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          {/* Command content */}
          <div className='overflow-x-auto p-4'>
            <pre className='whitespace-pre-wrap font-mono text-sm text-green-400'>
              {curlCommand}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
