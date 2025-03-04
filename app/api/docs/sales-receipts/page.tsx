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

export default function SalesReceiptsPage() {
  const pathname = usePathname();

  return (
    <>
      <div className='grid lg:grid-cols-6'>
        <div className='col-span-3 lg:p-3'>
          <MainHeading heading='Sales Receipts API Documentation' />
          
          <SubHeading heading='Introduction' />
          <Paragraph paragraph='The Sales Receipts API enables management of sales receipts, including creation, retrieval, email notifications, and receipt closure.' />

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
              {
                header: 'Accept',
                description: 'application/pdf for PDF responses',
              },
            ]}
          />

          <SubHeading heading='Create Receipt' />
          <Paragraph paragraph='Create a new sales receipt with item details.' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'customer_id',
                type: 'number',
                description: 'Customer identifier',
              },
              {
                parameter: 'deposit_account_id',
                type: 'number',
                description: 'Deposit account for the receipt',
              },
              {
                parameter: 'receipt_date',
                type: 'string',
                description: 'Date of receipt (YYYY-MM-DD)',
              },
              {
                parameter: 'entries',
                type: 'array',
                description: 'Array of receipt line items',
              },
            ]}
          />

          <SubHeading heading='Email Operations' />
          <Paragraph paragraph='Send receipt notifications via email.' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'to',
                type: 'string',
                description: 'Recipient email address',
              },
              {
                parameter: 'subject',
                type: 'string',
                description: 'Email subject line',
              },
              {
                parameter: 'body',
                type: 'string',
                description: 'Optional email body text',
              },
            ]}
          />

          <SubHeading heading='Important Notes' />
          <OrderedList
            list={[
              'Receipt numbers must be unique within the organization',
              'PDF format is available for receipt downloads',
              'Email notifications can include PDF attachments',
              'Closed receipts cannot be modified',
              'Branch and warehouse IDs must be valid',
              'All monetary values should be in base currency',
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