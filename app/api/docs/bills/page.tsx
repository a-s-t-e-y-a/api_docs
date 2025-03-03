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

export default function BillsPage() {
  const pathname = usePathname();

  return (
    <>
      <div className='grid lg:grid-cols-6'>
        <div className='col-span-3 lg:p-3'>
          <MainHeading heading='Bills API Documentation' />
          <SubHeading heading='Introduction' />
          <Paragraph paragraph='The Bills API provides endpoints for managing purchase bills, including creation, editing, deletion, and various retrieval operations.' />

          <SubHeading heading='Create Bill' />
          <SubHeading2 heading='POST /purchases/bills' />
          <Paragraph paragraph='Create a new bill.' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'vendor_id',
                type: 'number',
                description: 'ID of the vendor',
              },
              {
                parameter: 'bill_date',
                type: 'string',
                description: 'Date of the bill (YYYY-MM-DD)',
              },
              {
                parameter: 'due_date',
                type: 'string',
                description: 'Due date of the bill (YYYY-MM-DD)',
              },
              {
                parameter: 'bill_number',
                type: 'string',
                description: 'Unique bill number',
              },
              {
                parameter: 'delivered',
                type: 'boolean',
                description: 'Delivery status',
              },
              {
                parameter: 'open',
                type: 'boolean',
                description: 'Bill open status',
              },
              {
                parameter: 'reference_no',
                type: 'string',
                description: 'Reference number',
              },
              {
                parameter: 'exchange_rate',
                type: 'number',
                description: 'Exchange rate for the bill',
              },
              {
                parameter: 'entries',
                type: 'array',
                description: 'Array of bill line items',
              },
            ]}
          />

          <SubHeading heading='Bill Management' />
          <SubHeading2 heading='POST /purchases/bills/{bill_id}/open' />
          <Paragraph paragraph='Mark a bill as open.' />

          <SubHeading2 heading='POST /purchases/bills/{bill_id}' />
          <Paragraph paragraph='Edit an existing bill.' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'vendor_id',
                type: 'number',
                description: 'ID of the vendor',
              },
              {
                parameter: 'bill_date',
                type: 'string',
                description: 'Date of the bill (YYYY-MM-DD)',
              },
              {
                parameter: 'due_date',
                type: 'string',
                description: 'Due date of the bill (YYYY-MM-DD)',
              },
              {
                parameter: 'bill_number',
                type: 'string',
                description: 'Unique bill number',
              },
              {
                parameter: 'entries',
                type: 'array',
                description: 'Array of bill line items',
              },
            ]}
          />

          <SubHeading heading='Retrieve Bills' />
          <SubHeading2 heading='GET /purchases/bills' />
          <Paragraph paragraph='Retrieve all bills.' />

          <SubHeading2 heading='GET /purchases/bills/{bill_id}' />
          <Paragraph paragraph='Retrieve a specific bill.' />

          <SubHeading2 heading='GET /purchases/bills/{bill_id}/payment-transactions' />
          <Paragraph paragraph='Retrieve payment transactions for a specific bill.' />

          <SubHeading2 heading='GET /purchases/bills/due' />
          <Paragraph paragraph='Retrieve all due bills.' />

          <SubHeading heading='Delete Bill' />
          <SubHeading2 heading='DELETE /purchases/bills/{bill_id}' />
          <Paragraph paragraph='Delete a specific bill.' />

          <SubHeading heading='Required Headers' />
          <OrderedList
            list={[
              'Content-Type: application/json',
              'x-access-token: <TOKEN>',
              'organization-id: <ORGANIZATION_ID>',
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