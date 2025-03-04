'use client';
import CodeDisplay from '@/components/docs/codeDisplayComponent';
import { OrderedList } from '@/components/typography/listTypography';
import {
  MainHeading,
  Paragraph,
  SubHeading,
  SubHeading2,
} from '@/components/typography/typographyHeadings';
import DocsSidebarConstantText from '../../../constants/DocsSidebarConstants';
import { usePathname } from 'next/navigation';
import { DataTable } from '@/components/tableComponent';

export default function ImportPage() {
  const pathname = usePathname();

  return (
    <>
      <div className='grid lg:grid-cols-6'>
        <div className='col-span-3 lg:p-3'>
          <MainHeading heading='Import API Documentation' />
          <SubHeading heading='Introduction' />
          <Paragraph paragraph='The Import API allows you to import data from XLSX/CSV files into your organization. The import process involves multiple steps including file upload, field mapping, preview, and final import.' />

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
                description: 'ID of the organization',
              },
            ]}
          />

          <SubHeading heading='Upload File' />
          <SubHeading2 heading='POST /import/file' />
          <Paragraph paragraph='Upload an XLSX/CSV file to begin the import process.' />

          <SubHeading heading='Map Fields' />
          <SubHeading2 heading='POST /import/{{import_id}}/mapping' />
          <Paragraph paragraph='Map the columns in your file to the appropriate fields in the system.' />

          <SubHeading heading='Preview Import' />
          <SubHeading2 heading='GET /import/{{import_id}}/preview' />
          <Paragraph paragraph='Preview how the data will be imported before processing.' />

          <SubHeading heading='Import Metadata' />
          <SubHeading2 heading='GET /import/{{import_id}}/preview' />
          <Paragraph paragraph='Retrieve metadata about the import process.' />

          <SubHeading heading='Sample File' />
          <SubHeading2 heading='GET /import/{{import_id}}/sample' />
          <Paragraph paragraph='Download a sample file with the correct format for import.' />

          <SubHeading heading='Process Import' />
          <SubHeading2 heading='POST /import/{{import_id}}/import' />
          <Paragraph paragraph='Process the import after mapping and preview are complete.' />

          <SubHeading heading='Request Parameters' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'file',
                type: 'file',
                description: 'XLSX/CSV file to import',
              },
              {
                parameter: 'import_id',
                type: 'string',
                description: 'ID received from initial file upload',
              },
            ]}
          />

          <SubHeading heading='Important Notes' />
          <OrderedList
            list={[
              'Files must be in XLSX or CSV format',
              'Maximum file size is determined by your plan limits',
              'Field mapping is required before preview and import',
              'Preview step is recommended to verify data accuracy',
              'Import process is asynchronous for large files',
              'Sample files are available for each import type'
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