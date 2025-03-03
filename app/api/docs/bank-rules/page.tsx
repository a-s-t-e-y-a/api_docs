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

export default function BankRulesPage() {
  const pathname = usePathname();

  return (
    <>
      <div className='grid lg:grid-cols-6'>
        <div className='col-span-3 lg:p-3'>
          <MainHeading heading='Bank Rules API Documentation' />
          <SubHeading heading='Introduction' />
          <Paragraph paragraph='The Bank Rules API provides endpoints for managing banking rules, including creation, editing, retrieval, and deletion of rules.' />

          <SubHeading heading='Retrieve Bank Rules' />
          <SubHeading2 heading='GET /banking/rules' />
          <Paragraph paragraph='Retrieve all bank rules.' />

          <SubHeading2 heading='GET /banking/rules/{rule_id}' />
          <Paragraph paragraph='Retrieve a specific bank rule.' />

          <SubHeading heading='Create Bank Rule' />
          <SubHeading2 heading='POST /banking' />
          <Paragraph paragraph='Create a new bank rule.' />
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
                description: 'Name of the bank rule',
              },
              {
                parameter: 'order',
                type: 'number',
                description: 'Order of rule execution',
              },
              {
                parameter: 'apply_if_account_id',
                type: 'number',
                description: 'Account ID to apply rule to',
              },
              {
                parameter: 'apply_if_transaction_type',
                type: 'string',
                description: 'Transaction type (e.g., deposit)',
              },
              {
                parameter: 'conditions_type',
                type: 'string',
                description: 'Type of conditions (and/or)',
              },
              {
                parameter: 'conditions',
                type: 'array',
                description: 'Array of rule conditions',
              },
              {
                parameter: 'assign_category',
                type: 'string',
                description: 'Category to assign',
              },
              {
                parameter: 'assign_account_id',
                type: 'string',
                description: 'Account to assign',
              },
            ]}
          />

          <SubHeading heading='Edit Bank Rule' />
          <SubHeading2 heading='POST /banking/rules/{rule_id}' />
          <Paragraph paragraph='Edit an existing bank rule.' />

          <SubHeading heading='Delete Bank Rule' />
          <SubHeading2 heading='DELETE /banking/rules/{rule_id}' />
          <Paragraph paragraph='Delete a specific bank rule.' />

          <SubHeading heading='Required Headers' />
          <OrderedList
            list={[
              'Content-Type: application/json',
              'x-access-token: <TOKEN>',
              'organization-id: <ORGANIZATION_ID>',
            ]}
          />

          <SubHeading heading='Request Body Example' />
          <CodeDisplay
            heading='Create/Edit Bank Rule Request'
            curlCommand={`{
    "name": "Ahmed Mohamed",
    "order": 1,
    "apply_if_account_id": 1001,
    "apply_if_transaction_type": "deposit",
    "conditions_type": "or",
    "conditions": [
        {
            "field": "description",
            "comparator": "contains",
            "value": "shell"
        }
    ],
    "assign_category": "interest_income",
    "assign_account_id": "1001"
}`}
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