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

export default function SalesInvoicesPage() {
  const pathname = usePathname();

  return (
    <>
      <div className='grid lg:grid-cols-6'>
        <div className='col-span-3 lg:p-3'>
          <MainHeading heading='Sales Invoices API Documentation' />
          
          <SubHeading heading='Introduction' />
          <Paragraph paragraph='The Sales Invoices API provides comprehensive functionality for managing sales invoices, including creation, modification, retrieval, and various invoice-related operations.' />

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
                description: 'application/json for POST/PUT requests',
              },
              {
                header: 'Accept',
                description: 'Specify response format (application/pdf, text/html)',
              },
            ]}
          />

          <SubHeading heading='Create Invoice' />
          <Paragraph paragraph='Create a new sales invoice with customer details, line items, and tax information.' />
          <DataTable
            columns={[
              { header: 'Field', accessorKey: 'field' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                field: 'customer_id',
                type: 'number',
                description: 'Customer identifier',
              },
              {
                field: 'invoice_date',
                type: 'string',
                description: 'Date of invoice (YYYY-MM-DD)',
              },
              {
                field: 'due_date',
                type: 'string',
                description: 'Payment due date (YYYY-MM-DD)',
              },
              {
                field: 'invoice_no',
                type: 'string',
                description: 'Unique invoice number',
              },
              {
                field: 'entries',
                type: 'array',
                description: 'Array of invoice line items',
              },
            ]}
          />

          <SubHeading heading='Email Operations' />
          <SubHeading2 heading='Send Invoice Email' />
          <Paragraph paragraph='Send invoice to customer via email with optional attachments.' />
          <DataTable
            columns={[
              { header: 'Field', accessorKey: 'field' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                field: 'to',
                type: 'string',
                description: 'Recipient email address',
              },
              {
                field: 'subject',
                type: 'string',
                description: 'Email subject line',
              },
              {
                field: 'body',
                type: 'string',
                description: 'Email body content (optional)',
              },
              {
                field: 'attach_invoice',
                type: 'boolean',
                description: 'Include invoice PDF attachment',
              },
            ]}
          />

          <SubHeading heading='Document Formats' />
          <Paragraph paragraph='Retrieve invoices in different formats by specifying the Accept header:' />
          <OrderedList
            list={[
              'PDF Format: Accept: application/pdf',
              'HTML Format: Accept: text/html',
              'JSON Format: Accept: application/json',
            ]}
          />

          <SubHeading heading='Write-off Operations' />
          <Paragraph paragraph='Manage invoice write-offs and their cancellation.' />
          <DataTable
            columns={[
              { header: 'Field', accessorKey: 'field' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                field: 'expense_account_id',
                type: 'string',
                description: 'Account for write-off expense',
              },
              {
                field: 'reason',
                type: 'string',
                description: 'Reason for write-off',
              },
            ]}
          />

          <SubHeading heading='Important Notes' />
          <OrderedList
            list={[
              'Invoice numbers must be unique within the organization',
              'All dates should be in YYYY-MM-DD format',
              'PDF responses include appropriate content-type headers',
              'Email operations require valid email addresses',
              'Write-offs cannot be undone after cancellation period',
              'Delivered status affects invoice visibility to customers',
              'Tax calculations are performed server-side',
              'Payment transactions are tracked automatically',
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