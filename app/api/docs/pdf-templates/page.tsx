'use client';
import CodeDisplay from '@/components/docs/codeDisplayComponent';
import { OrderedList } from '@/components/typography/listTypography';
import {
  MainHeading,
  Paragraph,
  SubHeading,
} from '@/components/typography/typographyHeadings';
import DocsSidebarConstantText from '../../../constants/DocsSidebarConstants';
import { usePathname } from 'next/navigation';
import { DataTable } from '@/components/tableComponent';

export default function PdfTemplatesPage() {
  const pathname = usePathname();

  return (
    <>
      <div className='grid lg:grid-cols-6'>
        <div className='col-span-3 lg:p-3'>
          <MainHeading heading='PDF Templates API Documentation' />
          
          <SubHeading heading='Introduction' />
          <Paragraph paragraph='The PDF Templates API allows you to manage document templates for generating PDFs, including creation, retrieval, and customization of organization branding.' />

          <SubHeading heading='Required Headers' />
          <DataTable
            columns={[
              { header: 'Header', accessorKey: 'header' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                header: 'x-access-token',
                description: 'Authentication token',
              },
              {
                header: 'organization-id',
                description: 'Organization identifier',
              },
              {
                header: 'Content-Type',
                description: 'application/json for POST requests',
              },
            ]}
          />

          <SubHeading heading='Template Management' />
          <Paragraph paragraph='Create and manage PDF templates for various document types.' />
          <DataTable
            columns={[
              { header: 'Operation', accessorKey: 'operation' },
              { header: 'Method', accessorKey: 'method' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                operation: 'Create Template',
                method: 'POST',
                description: 'Create a new PDF template',
              },
              {
                operation: 'List Templates',
                method: 'GET',
                description: 'Retrieve all available templates',
              },
              {
                operation: 'Get Template',
                method: 'GET',
                description: 'Retrieve a specific template',
              },
              {
                operation: 'Delete Template',
                method: 'DELETE',
                description: 'Remove a template',
              },
            ]}
          />

          <SubHeading heading='Branding' />
          <Paragraph paragraph='Manage organization branding settings for PDF templates.' />
          <DataTable
            columns={[
              { header: 'Feature', accessorKey: 'feature' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                feature: 'Branding State',
                description: 'Current organization branding configuration',
              },
              {
                feature: 'Template Resources',
                description: 'Resource-specific template configurations',
              },
            ]}
          />

          <SubHeading heading='Important Notes' />
          <OrderedList
            list={[
              'Templates are organization-specific',
              'Branding settings apply across all templates',
              'Resource-specific templates override default templates',
              'Deleted templates cannot be recovered',
              'Template changes affect all future PDF generations',
              'Custom fonts and images must be properly encoded',
            ]}
          />

          <SubHeading heading='Template Types' />
          <DataTable
            columns={[
              { header: 'Type', accessorKey: 'type' },
              { header: 'Usage', accessorKey: 'usage' },
            ]}
            data={[
              {
                type: 'Invoice',
                usage: 'Sales invoice documents',
              },
              {
                type: 'Receipt',
                usage: 'Sales receipt documents',
              },
              {
                type: 'Statement',
                usage: 'Account statements',
              },
              {
                type: 'Custom',
                usage: 'User-defined templates',
              },
            ]}
          />
        </div>

        <div className='col-span-3 lg:p-3'>
          {DocsSidebarConstantText.map((item) =>
            item.url === pathname
              ? item.curl.map((curl, index) => (
                  <CodeDisplay
                    key={index}
                    heading={curl.heading}
                    curlCommand={curl.curlCommand}
                  />
                ))
              : null,
          )}
        </div>
      </div>
    </>
  );
} 