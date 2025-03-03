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

export default function SalesEstimatesPage() {
  const pathname = usePathname();

  return (
    <>
      <div className='grid lg:grid-cols-6'>
        <div className='col-span-3 lg:p-3'>
          <MainHeading heading='Sales Estimates API Documentation' />
          <SubHeading heading='Introduction' />
          <Paragraph paragraph='The Sales Estimates API provides endpoints for managing sales estimates, including creation, approval, rejection, and various retrieval operations.' />

          <SubHeading heading='Create Sale Estimate' />
          <SubHeading2 heading='POST /sales/estimates' />
          <Paragraph paragraph='Create a new sale estimate.' />
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
                description: 'Date of the estimate (YYYY-MM-DD)',
              },
              {
                parameter: 'expiration_date',
                type: 'string',
                description: 'Expiration date (YYYY-MM-DD)',
              },
              {
                parameter: 'delivered',
                type: 'boolean',
                description: 'Delivery status',
              },
              {
                parameter: 'notes',
                type: 'string',
                description: 'Additional notes',
              },
              {
                parameter: 'branch_id',
                type: 'number',
                description: 'ID of the branch',
              },
              {
                parameter: 'entries',
                type: 'array',
                description: 'Array of estimate line items',
              },
            ]}
          />

          <SubHeading heading='Estimate Management' />
          <SubHeading2 heading='POST /sales/estimates/{sale_estimate_id}/approve' />
          <Paragraph paragraph='Approve a sale estimate.' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'status_note',
                type: 'string',
                description: 'Optional note for approval',
              }
            ]}
          />

          <SubHeading2 heading='POST /sales/estimates/{sale_estimate_id}/reject' />
          <Paragraph paragraph='Reject a sale estimate.' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'rejection_reason',
                type: 'string',
                description: 'Reason for rejection',
              }
            ]}
          />

          <SubHeading heading='Retrieve Estimates' />
          <SubHeading2 heading='GET /sales/estimates' />
          <Paragraph paragraph='Retrieve all sale estimates.' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'page',
                type: 'number',
                description: 'Page number for pagination',
              },
              {
                parameter: 'limit',
                type: 'number',
                description: 'Number of records per page',
              },
              {
                parameter: 'status',
                type: 'string',
                description: 'Filter by estimate status',
              }
            ]}
          />

          <SubHeading2 heading='GET /sales/estimates/{sale_estimate_id}' />
          <Paragraph paragraph='Retrieve a specific sale estimate.' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'include_details',
                type: 'boolean',
                description: 'Include detailed information',
              }
            ]}
          />

          <SubHeading heading='Customer Notifications' />
          <SubHeading2 heading='POST /sales/estimates/{sale_estimate_id}/sms' />
          <Paragraph paragraph='Send SMS notification to customer about the estimate.' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'message',
                type: 'string',
                description: 'Custom SMS message (optional)',
              },
              {
                parameter: 'phone_number',
                type: 'string',
                description: 'Override customer phone number',
              }
            ]}
          />

          <SubHeading2 heading='POST /sales/estimates/{sale_estimate_id}/mail' />
          <Paragraph paragraph='Send email notification to customer about the estimate.' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'subject',
                type: 'string',
                description: 'Email subject',
              },
              {
                parameter: 'message',
                type: 'string',
                description: 'Custom email message',
              },
              {
                parameter: 'email',
                type: 'string',
                description: 'Override customer email',
              }
            ]}
          />

          <SubHeading2 heading='GET /sales/estimates/{sale_estimate_id}/mail' />
          <Paragraph paragraph='Retrieve default email template for estimate.' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'template_id',
                type: 'string',
                description: 'Specific template ID (optional)',
              }
            ]}
          />

          <SubHeading heading='Document Management' />
          <SubHeading2 heading='GET /sales/estimates/{sale_estimate_id}/pdf' />
          <Paragraph paragraph='Retrieve PDF version of the estimate.' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'template',
                type: 'string',
                description: 'PDF template to use',
              },
              {
                parameter: 'language',
                type: 'string',
                description: 'Document language',
              }
            ]}
          />

          <SubHeading2 heading='DELETE /sales/estimates/{sale_estimate_id}' />
          <Paragraph paragraph='Delete a sale estimate.' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'force',
                type: 'boolean',
                description: 'Force delete even if estimate is approved',
              }
            ]}
          />

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