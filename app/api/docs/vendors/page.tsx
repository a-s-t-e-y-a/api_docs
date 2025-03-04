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

export default function VendorsPage() {
  const pathname = usePathname();

  return (
    <>
      <div className='grid lg:grid-cols-6'>
        <div className='col-span-3 lg:p-3'>
          <MainHeading heading='Vendors API Documentation' />
          
          <SubHeading heading='Introduction' />
          <Paragraph paragraph='The Vendors API allows you to manage vendor information, including creation, modification, and deletion of vendor records. You can also manage vendor opening balances and retrieve vendor information.' />

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

          <SubHeading heading='Create Vendor' />
          <Paragraph paragraph='Create a new vendor in the system.' />
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
                description: 'Type of vendor (business, individual)',
              },
              {
                parameter: 'display_name',
                type: 'string',
                description: 'Name to display for the vendor',
              },
            ]}
          />

          <SubHeading heading='Opening Balance' />
          <Paragraph paragraph='Manage vendor opening balance details.' />
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
                description: 'Initial balance amount',
              },
              {
                parameter: 'opening_balance_at',
                type: 'string',
                description: 'Date of opening balance (YYYY-MM-DD)',
              },
              {
                parameter: 'opening_balance_exchange_rate',
                type: 'number',
                description: 'Exchange rate for the opening balance',
              },
              {
                parameter: 'opening_balance_branch_id',
                type: 'number',
                description: 'Branch ID associated with the opening balance',
              },
            ]}
          />

          <SubHeading heading='List Operations' />
          <Paragraph paragraph='Retrieve vendor information individually or as a list.' />
          <DataTable
            columns={[
              { header: 'Operation', accessorKey: 'operation' },
              { header: 'Method', accessorKey: 'method' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                operation: 'Get All Vendors',
                method: 'GET',
                description: 'Retrieve a list of all vendors',
              },
              {
                operation: 'Get Single Vendor',
                method: 'GET',
                description: 'Retrieve details of a specific vendor',
              },
            ]}
          />

          <SubHeading heading='Important Notes' />
          <OrderedList
            list={[
              'Vendor display names should be unique within an organization',
              'Opening balance dates must be in YYYY-MM-DD format',
              'Exchange rates must be positive numbers',
              'Branch IDs must reference existing branches',
              'Deleted vendors cannot be recovered',
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