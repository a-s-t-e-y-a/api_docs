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

export default function AccountsPage() {
  const pathname = usePathname();

  return (
    <>
      <div className='grid lg:grid-cols-6'>
        <div className='col-span-3 lg:p-3'>
          <MainHeading heading='Accounts API Documentation' />
          <SubHeading heading='Introduction' />
          <Paragraph paragraph='The Accounts API provides endpoints for managing financial accounts, including creation, editing, activation/deactivation, and retrieval operations.' />

          <SubHeading heading='Account Types' />
          <SubHeading2 heading='GET /account_types' />
          <Paragraph paragraph='Retrieve all available account types.' />

          <SubHeading heading='Create Account' />
          <SubHeading2 heading='POST /accounts' />
          <Paragraph paragraph='Create a new account.' />
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
                description: 'Name of the account',
              },
              {
                parameter: 'code',
                type: 'string',
                description: 'Account code',
              },
              {
                parameter: 'account_type',
                type: 'string',
                description: 'Type of account (e.g., expense)',
              },
              {
                parameter: 'parent_account_id',
                type: 'string',
                description: 'ID of the parent account (if any)',
              },
            ]}
          />

          <SubHeading heading='Account Management' />
          <SubHeading2 heading='POST /accounts/{account_id}' />
          <Paragraph paragraph='Edit an existing account.' />

          <SubHeading2 heading='POST /accounts/{account_id}/activate' />
          <Paragraph paragraph='Activate an account.' />

          <SubHeading2 heading='POST /accounts/{account_id}/inactivate' />
          <Paragraph paragraph='Inactivate an account.' />

          <SubHeading heading='Retrieve Accounts' />
          <SubHeading2 heading='GET /accounts' />
          <Paragraph paragraph='Retrieve all accounts.' />

          <SubHeading2 heading='GET /accounts/{account_id}' />
          <Paragraph paragraph='Retrieve a specific account.' />

          <SubHeading2 heading='GET /accounts/{account_id}/transactions' />
          <Paragraph paragraph='Retrieve transactions for a specific account.' />

          <SubHeading heading='Delete Account' />
          <SubHeading2 heading='DELETE /accounts/{account_id}' />
          <Paragraph paragraph='Delete a specific account.' />

          <SubHeading heading='Required Headers' />
          <OrderedList
            list={[
              'Content-Type: application/json',
              'x-access-token: <TOKEN>',
              'organization-id: <ORGANIZATION_ID>',
            ]}
          />

          <SubHeading heading='Account Types' />
          <Paragraph paragraph='The following account types are supported:' />
          <OrderedList
            list={[
              'Income',
              'Expense',
              'Asset',
              'Liability',
              'Equity',
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