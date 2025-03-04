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

export default function ExchangeRatesPage() {
  const pathname = usePathname();

  return (
    <>
      <div className='grid lg:grid-cols-6'>
        <div className='col-span-3 lg:p-3'>
          <MainHeading heading='Exchange Rates API Documentation' />
          
          <SubHeading heading='Introduction' />
          <Paragraph paragraph='The Exchange Rates API provides access to current currency exchange rates. It allows you to retrieve the latest exchange rates for different currencies.' />

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

          <SubHeading heading='Query Parameters' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'to_currency',
                type: 'string',
                description: 'Target currency code (e.g., LYD, USD)',
              },
            ]}
          />

          <SubHeading heading='Response Format' />
          <DataTable
            columns={[
              { header: 'Field', accessorKey: 'field' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                field: 'rate',
                type: 'number',
                description: 'Current exchange rate',
              },
              {
                field: 'last_updated',
                type: 'string',
                description: 'Timestamp of last rate update',
              },
            ]}
          />

          <SubHeading heading='Important Notes' />
          <OrderedList
            list={[
              'Exchange rates are updated periodically',
              'Currency codes should follow ISO 4217 format',
              'Rates are provided relative to the organization\'s base currency',
              'Historical rates may not be available',
              'Rate precision is maintained up to 6 decimal places',
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
                description: 'Successfully retrieved exchange rate',
              },
              {
                code: '400',
                description: 'Invalid currency code',
              },
              {
                code: '404',
                description: 'Exchange rate not found',
              },
              {
                code: '429',
                description: 'Rate limit exceeded',
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