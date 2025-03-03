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

export default function CustomersPage() {
  const pathname = usePathname();

  return (
    <>
      <div className='grid lg:grid-cols-6'>
        <div className='col-span-3 lg:p-3'>
          <MainHeading heading='Customers API Documentation' />
          <SubHeading heading='Introduction' />
          <Paragraph paragraph='The Customers API provides endpoints for managing customer information, including creation, updates, and retrieval of customer data.' />

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

          <SubHeading heading='Create Customer' />
          <SubHeading2 heading='POST /customers' />
          <Paragraph paragraph='Create a new customer record.' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'customer_type',
                type: 'string',
                description: 'Type of customer (e.g., "business")',
              },
              {
                parameter: 'display_name',
                type: 'string',
                description: 'Name of the customer',
              },
            ]}
          />

          <SubHeading heading='Edit Customer Opening Balance' />
          <SubHeading2 heading='POST /customers/{customer_id}/opening_balance' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'opening_balance',
                type: 'number',
                description: 'Opening balance amount',
              },
              {
                parameter: 'opening_balance_at',
                type: 'string',
                description: 'Date of opening balance (YYYY-MM-DD)',
              },
              {
                parameter: 'opening_balance_exchange_rate',
                type: 'number',
                description: 'Exchange rate for opening balance',
              },
              {
                parameter: 'opneing_balance_branch_id',
                type: 'number',
                description: 'Branch ID for opening balance',
              },
            ]}
          />

          <SubHeading heading='Delete Customer' />
          <SubHeading2 heading='DELETE /customers/{customer_id}' />
          <Paragraph paragraph='Remove a customer record from the system.' />

          <SubHeading heading='List Customers' />
          <SubHeading2 heading='GET /customers' />
          <Paragraph paragraph='Retrieve a list of all customers.' />

          <SubHeading heading='Get Customer Details' />
          <SubHeading2 heading='GET /customers/{customer_id}' />
          <Paragraph paragraph='Retrieve detailed information about a specific customer.' />

          <SubHeading heading='Important Notes' />
          <OrderedList
            list={[
              'Customer IDs are required for update and delete operations',
              'Opening balance can be set only once for new customers',
              'All monetary values should be provided in the default currency',
              'Customer type must be specified during creation',
            ]}
          />

          <SubHeading heading='Example Requests' />
          <SubHeading2 heading='Create Customer' />
          <CodeDisplay
            heading='Form Data'
            curlCommand={`customer_type: business
display_name: Ahmed Bouhuolia`}
          />

          <SubHeading2 heading='Edit Opening Balance' />
          <CodeDisplay
            heading='Form Data'
            curlCommand={`opening_balance: 100
opening_balance_at: 2020-02-02
opening_balance_exchange_rate: 1
opneing_balance_branch_id: 1`}
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