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

export default function WarehousesPage() {
  const pathname = usePathname();

  return (
    <>
      <div className='grid lg:grid-cols-6'>
        <div className='col-span-3 lg:p-3'>
          <MainHeading heading='Warehouses API Documentation' />
          
          <SubHeading heading='Introduction' />
          <Paragraph paragraph='The Warehouses API enables management of warehouse locations, including creation, modification, and status changes. It supports inventory management across multiple locations.' />

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

          <SubHeading heading='Warehouse Creation' />
          <Paragraph paragraph='Create and manage warehouse locations.' />
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
                description: 'Name of the warehouse',
              },
              {
                parameter: 'code',
                type: 'string',
                description: 'Unique warehouse code',
              },
            ]}
          />

          <SubHeading heading='Warehouse Status' />
          <Paragraph paragraph='Manage warehouse status and priority.' />
          <DataTable
            columns={[
              { header: 'Operation', accessorKey: 'operation' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                operation: 'Mark as Primary',
                description: 'Set warehouse as the primary location',
              },
              {
                operation: 'Activate',
                description: 'Enable warehouse for operations',
              },
            ]}
          />

          <SubHeading heading='Important Notes' />
          <OrderedList
            list={[
              'Warehouse codes must be unique within the organization',
              'Only one warehouse can be primary at a time',
              'Inactive warehouses cannot process transactions',
              'Primary warehouse cannot be deleted',
              'Warehouse codes cannot be changed after creation',
              'Deleting a warehouse requires moving all inventory first',
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
                description: 'Warehouse not found',
              },
              {
                code: '409',
                description: 'Warehouse code already exists',
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