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

export default function CreditNotesPage() {
  const pathname = usePathname();

  return (
    <>
      <div className='grid lg:grid-cols-6'>
        <div className='col-span-3 lg:p-3'>
          <MainHeading heading='Credit Notes API Documentation' />
          <SubHeading heading='Introduction' />
          <Paragraph paragraph='The Credit Notes API provides comprehensive endpoints for managing credit notes, including creation, application to invoices, refunds, and notifications.' />

          <SubHeading heading='Credit Note Management' />
          <SubHeading2 heading='POST /sales/credit_notes' />
          <Paragraph paragraph='Create a new credit note.' />
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
                description: 'ID of the customer',
              },
              {
                parameter: 'estimate_date',
                type: 'string',
                description: 'Date of the credit note (YYYY-MM-DD)',
              },
              {
                parameter: 'estimate_number',
                type: 'string',
                description: 'Credit note number',
              },
              {
                parameter: 'entries',
                type: 'array',
                description: 'Array of line items',
              },
              {
                parameter: 'attachments',
                type: 'string',
                description: 'Attachment IDs',
              },
            ]}
          />

          <SubHeading2 heading='POST /sales/credit_notes/{id}' />
          <Paragraph paragraph='Edit an existing credit note.' />

          <SubHeading2 heading='DELETE /sales/credit_notes/{id}' />
          <Paragraph paragraph='Delete a credit note.' />

          <SubHeading heading='Invoice Applications' />
          <SubHeading2 heading='GET /sales/credit_notes/{id}/apply-to-invoices' />
          <Paragraph paragraph='Apply credit note to specific invoices.' />
          
          <SubHeading2 heading='DELETE /sales/credit_notes/apply-to-invoices/{id}' />
          <Paragraph paragraph='Remove credit note application from invoices.' />

          <SubHeading2 heading='GET /sales/credit_notes/apply-to-invoices/{id}' />
          <Paragraph paragraph='Get credit note associated invoices available for application.' />

          <SubHeading2 heading='GET /sales/credit_notes/apply-to-invoices/{id}' />
          <Paragraph paragraph='Get credit note associated applied invoices.' />

          <SubHeading heading='Refund Management' />
          <SubHeading2 heading='POST /sales/credit_notes/{id}/refund' />
          <Paragraph paragraph='Create a refund for a credit note.' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'from_account_id',
                type: 'number',
                description: 'Source account ID',
              },
              {
                parameter: 'reference_no',
                type: 'string',
                description: 'Reference number',
              },
              {
                parameter: 'amount',
                type: 'number',
                description: 'Refund amount',
              },
              {
                parameter: 'exchange_rate',
                type: 'number',
                description: 'Exchange rate for the refund',
              },
              {
                parameter: 'date',
                type: 'string',
                description: 'Refund date (YYYY-MM-DD)',
              },
              {
                parameter: 'description',
                type: 'string',
                description: 'Refund description',
              },
              {
                parameter: 'branch_id',
                type: 'number',
                description: 'Branch ID (optional)',
              },
            ]}
          />

          <SubHeading2 heading='DELETE /sales/credit_notes/refunds/{id}' />
          <Paragraph paragraph='Delete a credit note refund.' />

          <SubHeading2 heading='GET /sales/credit_notes/refunds/{id}' />
          <Paragraph paragraph='Retrieve a specific refund transaction.' />

          <SubHeading2 heading='GET /sales/credit_notes/{id}/refund' />
          <Paragraph paragraph='Retrieve all refund transactions for a credit note.' />

          <SubHeading heading='Notifications' />
          <SubHeading2 heading='POST /sales/credit_notes/{id}/mail' />
          <Paragraph paragraph='Send credit note notification via email.' />

          <SubHeading heading='Retrieve Operations' />
          <SubHeading2 heading='GET /sales/credit_notes' />
          <Paragraph paragraph='Retrieve all credit notes.' />

          <SubHeading2 heading='GET /sales/credit_notes/{id}' />
          <Paragraph paragraph='Retrieve a specific credit note.' />

          <SubHeading2 heading='GET /sales/credit_notes/{id}' />
          <Paragraph paragraph='Retrieve credit note as PDF (use Accept: application/pdf header).' />

          <SubHeading heading='Required Headers' />
          <OrderedList
            list={[
              'x-access-token: <TOKEN>',
              'organization-id: <ORGANIZATION_ID>',
              'Content-Type: application/json',
              'Accept: application/json (or application/pdf for PDF retrieval)',
            ]}
          />

          <SubHeading heading='Request Body Examples' />
          <SubHeading2 heading='Create/Edit Credit Note' />
          <CodeDisplay
            heading='Request Body'
            curlCommand={`{
    "customer_id": 1,
    "estimate_date": "2020-02-02",
    "estimate_number": "1",
    "entries": [
        {
            "item_id": 1,
            "quantity": 1,
            "rate": 1000,
            "description": "Item description"
        }
    ],
    "attachments": "1716721810462"
}`}
          />

          <SubHeading2 heading='Apply to Invoices' />
          <CodeDisplay
            heading='Request Body'
            curlCommand={`{
    "entries": [
        {
            "invoice_id": 1,
            "amount": 1000
        }
    ]
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