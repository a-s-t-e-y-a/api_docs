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

export default function FinancialStatementsPage() {
  const pathname = usePathname();

  return (
    <>
      <div className='grid lg:grid-cols-6'>
        <div className='col-span-3 lg:p-3'>
          <MainHeading heading='Financial Statements API Documentation' />
          <SubHeading heading='Introduction' />
          <Paragraph paragraph='The Financial Statements API provides endpoints for retrieving various financial reports including balance sheets, income statements, cash flow statements, and more.' />

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

          <SubHeading heading='Balance Sheet' />
          <SubHeading2 heading='GET /financial_statements/balance_sheet' />
          <Paragraph paragraph='Retrieve the balance sheet report in XLSX format.' />

          <SubHeading heading='Trial Balance Sheet' />
          <SubHeading2 heading='GET /financial_statements/trial_balance_sheet' />
          <Paragraph paragraph='Get the trial balance report with detailed account balances.' />

          <SubHeading heading='General Ledger' />
          <SubHeading2 heading='GET /financial_statements/general_ledger' />
          <Paragraph paragraph='Retrieve general ledger entries with detailed transaction history.' />

          <SubHeading heading='Journal' />
          <SubHeading2 heading='GET /financial_statements/journal' />
          <Paragraph paragraph='Get journal entries for the specified period.' />

          <SubHeading heading='Aging Reports' />
          <SubHeading2 heading='GET /financial_statements/receivable_aging_summary' />
          <Paragraph paragraph='Retrieve accounts receivable aging summary.' />
          
          <SubHeading2 heading='GET /financial_statements/payable_aging_summary' />
          <Paragraph paragraph='Retrieve accounts payable aging summary.' />

          <SubHeading heading='Balance Summaries' />
          <SubHeading2 heading='GET /financial_statements/customer-balance-summary' />
          <Paragraph paragraph='Get summary of customer balances.' />

          <SubHeading2 heading='GET /financial_statements/vendor-balance-summary' />
          <Paragraph paragraph='Get summary of vendor balances.' />

          <SubHeading heading='Sales and Purchases' />
          <SubHeading2 heading='GET /financial_statements/sales-by-items' />
          <Paragraph paragraph='Retrieve sales analysis by items.' />

          <SubHeading2 heading='GET /financial_statements/purchases-by-items' />
          <Paragraph paragraph='Retrieve purchases analysis by items.' />

          <SubHeading heading='Inventory Reports' />
          <SubHeading2 heading='GET /financial_statements/inventory-valuation' />
          <Paragraph paragraph='Get current inventory valuation.' />

          <SubHeading2 heading='GET /financial_statements/inventory-item-details' />
          <Paragraph paragraph='Retrieve detailed inventory item movements.' />

          <SubHeading heading='Tax Reports' />
          <SubHeading2 heading='GET /financial_statements/sales-tax-liability-summary' />
          <Paragraph paragraph='Get summary of sales tax liabilities.' />

          <SubHeading heading='Transaction Reports' />
          <SubHeading2 heading='GET /financial_statements/transactions-by-customers' />
          <Paragraph paragraph='Retrieve transactions grouped by customers.' />

          <SubHeading2 heading='GET /financial_statements/transactions-by-vendors' />
          <Paragraph paragraph='Retrieve transactions grouped by vendors.' />

          <SubHeading heading='Common Query Parameters' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'from_date',
                type: 'string',
                description: 'Start date for the report (YYYY-MM-DD)',
              },
              {
                parameter: 'to_date',
                type: 'string',
                description: 'End date for the report (YYYY-MM-DD)',
              },
              {
                parameter: 'number_format',
                type: 'object',
                description: 'Formatting options for numerical values',
              },
              {
                parameter: 'none_zero',
                type: 'boolean',
                description: 'Exclude zero balance accounts',
              },
              {
                parameter: 'none_transactions',
                type: 'boolean',
                description: 'Exclude accounts with no transactions',
              },
              {
                parameter: 'only_active',
                type: 'boolean',
                description: 'Include only active records',
              },
            ]}
          />

          <SubHeading heading='Number Format Options' />
          <DataTable
            columns={[
              { header: 'Option', accessorKey: 'option' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                option: 'precision',
                type: 'number',
                description: 'Number of decimal places',
              },
              {
                option: 'divide_on_1000',
                type: 'boolean',
                description: 'Divide values by 1000',
              },
              {
                option: 'show_zero',
                type: 'boolean',
                description: 'Show zero values',
              },
              {
                option: 'format_money',
                type: 'string',
                description: 'Money formatting style (always, total)',
              },
              {
                option: 'negative_format',
                type: 'string',
                description: 'Negative number format (mines, parentheses)',
              },
            ]}
          />

          <SubHeading heading='Important Notes' />
          <OrderedList
            list={[
              'All dates should be in YYYY-MM-DD format',
              'Reports can be retrieved in various formats (JSON, CSV, XLSX)',
              'Some reports support additional filtering parameters',
              'Currency values are in the organization\'s base currency unless specified',
              'The number_format object can be customized for each report',
              'Some reports may require additional headers for specific formats',
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