'use client';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import DocsSidebarConstantText from '../constants/DocsSidebarConstants';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Example curl command - can be replaced with your own
  return (
    <div>
      <div className='mx-auto grid h-screen grid-cols-1 lg:grid-cols-6 xl:max-w-[80%] 2xl:max-w-[80%]'>
        <div className='col-span-1 border-r'>
          {DocsSidebarConstantText.map((item, index) => (
            <Accordion key={index} type='single' collapsible className='w-full'>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className='text-lg'>
                  {item.heading}
                </AccordionTrigger>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <div className='col-span-5 p-3'>{children}</div>
      </div>
    </div>
  );
}
