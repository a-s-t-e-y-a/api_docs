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

export default function ItemsPage() {
  const pathname = usePathname();

  return (
    <>
      <div className='grid lg:grid-cols-6'>
        <div className='col-span-3 lg:p-3'>
          <MainHeading heading='Items API Documentation' />
          
          <SubHeading heading='Introduction' />
          <Paragraph paragraph='The Items API provides comprehensive functionality for managing products and services in your inventory system, including creation, modification, and transaction tracking.' />

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
            ]}
          />

          <SubHeading heading='Item Creation' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'name',
                type: 'string',
                description: 'Item name',
              },
              {
                parameter: 'code',
                type: 'string',
                description: 'Unique item code',
              },
              {
                parameter: 'type',
                type: 'string',
                description: 'Item type (service, product)',
              },
              {
                parameter: 'purchasable',
                type: 'boolean',
                description: 'Can be purchased',
              },
              {
                parameter: 'sellable',
                type: 'boolean',
                description: 'Can be sold',
              },
              {
                parameter: 'category_id',
                type: 'number',
                description: 'Item category identifier',
              },
            ]}
          />

          <SubHeading heading='Transaction Types' />
          <DataTable
            columns={[
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                type: 'Invoices',
                description: 'Sales invoice transactions',
              },
              {
                type: 'Bills',
                description: 'Purchase bill transactions',
              },
              {
                type: 'Receipts',
                description: 'Sales receipt transactions',
              },
              {
                type: 'Estimates',
                description: 'Sales estimate transactions',
              },
            ]}
          />

          <SubHeading heading='Item Status' />
          <Paragraph paragraph='Manage item activation status and availability.' />
          <DataTable
            columns={[
              { header: 'Status', accessorKey: 'status' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                status: 'Active',
                description: 'Item available for transactions',
              },
              {
                status: 'Inactive',
                description: 'Item suspended from use',
              },
            ]}
          />

          <SubHeading heading='Important Notes' />
          <OrderedList
            list={[
              'Item codes must be unique within an organization',
              'Inactive items cannot be used in new transactions',
              'Transaction history is preserved when items are deleted',
              'Category assignment is required for proper organization',
              'Both purchase and sales accounts must be valid',
              'Items can be both purchasable and sellable',
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