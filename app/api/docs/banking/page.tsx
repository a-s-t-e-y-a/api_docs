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

export default function BankingPage() {
  const pathname = usePathname();

  return (
    <>
      <div className='grid lg:grid-cols-6'>
        <div className='col-span-3 lg:p-3'>
          <MainHeading heading='Banking API Documentation' />
          <SubHeading heading='Introduction' />
          <Paragraph paragraph='The Banking API provides comprehensive endpoints for managing bank transactions, cash flow, and transaction matching.' />

          <SubHeading heading='Transaction Matching' />
          <SubHeading2 heading='POST /banking/matches/match' />
          <Paragraph paragraph='Match a bank transaction with existing records.' />

          <SubHeading2 heading='POST /banking/matches/{id}' />
          <Paragraph paragraph='Unmatch a previously matched transaction.' />

          <SubHeading2 heading='GET /banking/matches' />
          <Paragraph paragraph='Retrieve best matches for transactions and recognized bank transactions.' />

          <SubHeading heading='Cash Flow Management' />
          <SubHeading2 heading='POST /cashflow/transactions' />
          <Paragraph paragraph='Create a new cash flow transaction.' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'amount',
                type: 'number',
                description: 'Transaction amount',
              },
              {
                parameter: 'date',
                type: 'string',
                description: 'Transaction date (YYYY-MM-DD)',
              },
              {
                parameter: 'reference_no',
                type: 'string',
                description: 'Reference number',
              },
              {
                parameter: 'exchange_rate',
                type: 'number',
                description: 'Exchange rate for the transaction',
              },
              {
                parameter: 'cashflow_account_id',
                type: 'number',
                description: 'ID of the cash flow account',
              },
              {
                parameter: 'credit_account_id',
                type: 'number',
                description: 'ID of the credit account',
              },
              {
                parameter: 'description',
                type: 'string',
                description: 'Transaction description',
              },
              {
                parameter: 'publish',
                type: 'boolean',
                description: 'Whether to publish the transaction',
              },
              {
                parameter: 'transaction_type',
                type: 'string',
                description: 'Type of transaction',
              },
            ]}
          />

          <SubHeading heading='Transaction Exclusion' />
          <SubHeading2 heading='PUT /cashflow/transactions/{id}/exclude' />
          <Paragraph paragraph='Exclude a specific bank transaction.' />

          <SubHeading2 heading='PUT /cashflow/transactions/exclude' />
          <Paragraph paragraph='Exclude multiple bank transactions.' />

          <SubHeading2 heading='GET /cashflow/excluded' />
          <Paragraph paragraph='Retrieve excluded bank transactions.' />

          <SubHeading heading='Bank Account Information' />
          <SubHeading2 heading='GET /banking/bank_accounts/{id}/meta' />
          <Paragraph paragraph='Get summary information for a bank account.' />

          <SubHeading heading='Transaction Categorization' />
          <SubHeading2 heading='POST /cashflow/transactions/{id}/categorize' />
          <Paragraph paragraph='Categorize a cash flow transaction.' />

          <SubHeading2 heading='POST /cashflow/transactions/{id}/uncategorize' />
          <Paragraph paragraph='Remove categorization from a transaction.' />

          <SubHeading heading='Transaction Management' />
          <SubHeading2 heading='POST /cashflow/transactions/{id}' />
          <Paragraph paragraph='Edit an existing cash flow transaction.' />

          <SubHeading2 heading='DELETE /cashflow/transactions/{id}' />
          <Paragraph paragraph='Delete a cash flow transaction.' />

          <SubHeading2 heading='GET /cashflow/transactions' />
          <Paragraph paragraph='Retrieve all cash flow transactions.' />

          <SubHeading2 heading='GET /cashflow/transactions/uncategorized' />
          <Paragraph paragraph='Retrieve uncategorized transactions.' />

          <SubHeading heading='Required Headers' />
          <OrderedList
            list={[
              'x-access-token: <TOKEN>',
              'organization-id: <ORGANIZATION_ID>',
              'Content-Type: application/json',
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