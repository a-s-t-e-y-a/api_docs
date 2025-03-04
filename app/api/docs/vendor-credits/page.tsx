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

export default function VendorCreditsPage() {
  const pathname = usePathname();

  return (
    <>
      <div className='grid lg:grid-cols-6'>
        <div className='col-span-3 lg:p-3'>
          <MainHeading heading='Vendor Credits API Documentation' />
          
          <SubHeading heading='Introduction' />
          <Paragraph paragraph='The Vendor Credits API allows you to manage vendor credit notes, including creation and deletion of credit records.' />

          <SubHeading heading='Required Headers' />
          <DataTable
            columns={[
              { header: 'Header', accessorKey: 'header' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                header: 'organization-id',
                description: 'Organization identifier',
              },
              {
                header: 'Accept',
                description: 'application/json',
              },
              {
                header: 'Content-Type',
                description: 'application/json',
              },
            ]}
          />

          <SubHeading heading='Operations' />
          <DataTable
            columns={[
              { header: 'Operation', accessorKey: 'operation' },
              { header: 'Method', accessorKey: 'method' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                operation: 'Create Vendor Credit',
                method: 'POST',
                description: 'Create a new vendor credit note',
              },
              {
                operation: 'Delete Vendor Credit',
                method: 'DELETE',
                description: 'Remove a vendor credit record',
              },
            ]}
          />

          <SubHeading heading='Important Notes' />
          <OrderedList
            list={[
              'Vendor credits are permanent records',
              'Deleted credits cannot be recovered',
              'Credit amounts must match original invoices',
              'Credits are applied to vendor accounts automatically',
              'Credit references must be unique',
            ]}
          />

          <SubHeading heading='Status Codes' />
          <DataTable
            columns={[
              { header: 'Code', accessorKey: 'code' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                code: '200',
                description: 'Operation successful',
              },
              {
                code: '400',
                description: 'Invalid request parameters',
              },
              {
                code: '404',
                description: 'Vendor credit not found',
              },
              {
                code: '409',
                description: 'Credit reference already exists',
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