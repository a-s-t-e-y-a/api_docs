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

export default function InventoryAdjustmentsPage() {
  const pathname = usePathname();

  return (
    <>
      <div className='grid lg:grid-cols-6'>
        <div className='col-span-3 lg:p-3'>
          <MainHeading heading='Inventory Adjustments API Documentation' />
          <SubHeading heading='Introduction' />
          <Paragraph paragraph='The Inventory Adjustments API allows you to manage inventory quantity adjustments, including quick adjustments, publishing, retrieval, and deletion of adjustment records.' />

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

          <SubHeading heading='Quick Adjustment' />
          <SubHeading2 heading='POST /inventory_adjustments/quick' />
          <Paragraph paragraph='Create a quick inventory adjustment for immediate processing.' />
          
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'item_id',
                type: 'number',
                description: 'ID of the inventory item',
              },
              {
                parameter: 'quantity',
                type: 'number',
                description: 'Adjustment quantity (positive or negative)',
              },
              {
                parameter: 'date',
                type: 'string',
                description: 'Date of adjustment (YYYY-MM-DD)',
              },
            ]}
          />

          <SubHeading heading='Publish Adjustment' />
          <SubHeading2 heading='POST /inventory_adjustments/{{inventory_adjustment_id}}/publish' />
          <Paragraph paragraph='Publish a draft inventory adjustment to make it effective.' />

          <SubHeading heading='Delete Adjustment' />
          <SubHeading2 heading='DELETE /inventory_adjustments/{{inventory_adjustment_id}}' />
          <Paragraph paragraph='Delete an existing inventory adjustment record.' />

          <SubHeading heading='Retrieve Adjustment' />
          <SubHeading2 heading='GET /inventory_adjustments/{{inventory_adjustment_id}}' />
          <Paragraph paragraph='Retrieve details of a specific inventory adjustment.' />

          <SubHeading heading='List Adjustments' />
          <SubHeading2 heading='GET /inventory_adjustments' />
          <Paragraph paragraph='Retrieve a list of all inventory adjustments.' />

          <SubHeading heading='Query Parameters' />
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
                parameter: 'page_size',
                type: 'number',
                description: 'Number of records per page',
              },
              {
                parameter: 'from_date',
                type: 'string',
                description: 'Start date filter (YYYY-MM-DD)',
              },
              {
                parameter: 'to_date',
                type: 'string',
                description: 'End date filter (YYYY-MM-DD)',
              },
            ]}
          />

          <SubHeading heading='Important Notes' />
          <OrderedList
            list={[
              'Quick adjustments are processed immediately',
              'Draft adjustments must be published to take effect',
              'Deleted adjustments cannot be recovered',
              'Date filters are inclusive of the specified dates',
              'Pagination is available for listing adjustments',
              'Adjustment quantities can be positive or negative'
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