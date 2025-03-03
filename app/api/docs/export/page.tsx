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

export default function ExportPage() {
  const pathname = usePathname();

  return (
    <>
      <div className='grid lg:grid-cols-6'>
        <div className='col-span-3 lg:p-3'>
          <MainHeading heading='Export API Documentation' />
          <SubHeading heading='Introduction' />
          <Paragraph paragraph='The Export API allows you to export data from various resources in different formats (Excel, PDF).' />

          <SubHeading heading='Export Data' />
          <SubHeading2 heading='GET /export' />
          <Paragraph paragraph='Export data from a specified resource.' />

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

          <SubHeading heading='Request Body Parameters' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'resource',
                type: 'string',
                description: 'Name of the resource to export (e.g., "Account")',
              },
            ]}
          />

          <SubHeading heading='Response' />
          <OrderedList
            list={[
              'Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
              'Content-Disposition: attachment; filename=output.xlsx',
            ]}
          />

          <SubHeading heading='Important Notes' />
          <OrderedList
            list={[
              'The response will be a downloadable file',
              'Supported export formats include Excel and PDF',
              'Large datasets may take longer to export',
              'Authentication is required for all export operations',
            ]}
          />

          <SubHeading heading='Example Request' />
          <CodeDisplay
            heading='Request Body'
            curlCommand={`{
    "resource": "Account"
}`}
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