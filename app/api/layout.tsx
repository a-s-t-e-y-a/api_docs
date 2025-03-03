'use client';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react'; // for hamburger icon
import { useEffect, useState } from 'react';
import DocsSidebarConstantText from '../constants/DocsSidebarConstants';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is the 'lg' breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Example curl command - can be replaced with your own
  return (
    <div>
      <div className='mx-auto grid h-screen grid-cols-1 lg:grid-cols-6 xl:max-w-[80%] 2xl:max-w-[80%]'>
        <div className='col-span-1 border-r'>
          {isMobile ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="p-2">
                <Menu className="h-6 w-6" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {DocsSidebarConstantText.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    {item.heading}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            DocsSidebarConstantText.map((item, index) => (
              <Accordion key={index} type='single' collapsible className='w-full'>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className='text-lg'>
                    {item.heading}
                  </AccordionTrigger>
                </AccordionItem>
              </Accordion>
            ))
          )}
        </div>
        <div className='col-span-5 p-3'>{children}</div>
      </div>
    </div>
  );
}
