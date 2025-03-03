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

export default function TransactionsLockingPage() {
  const pathname = usePathname();

  return (
    <>
      <div className='grid lg:grid-cols-6'>
        <div className='col-span-3 lg:p-3'>
          <MainHeading heading='Transactions Locking API Documentation' />
          <SubHeading heading='Introduction' />
          <Paragraph paragraph='The Transactions Locking API provides endpoints for managing transaction locks, which prevent modifications to transactions before a specified date.' />

          <SubHeading heading='Submit Transactions Locking' />
          <SubHeading2 heading='PUT /transactions-locking/lock' />
          <Paragraph paragraph='Lock transactions up to a specified date.' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'module',
                type: 'string',
                description: 'Module to lock (e.g., "all")',
              },
              {
                parameter: 'lock_to_date',
                type: 'string',
                description: 'Date until which to lock transactions (YYYY-MM-DD)',
              },
              {
                parameter: 'reason',
                type: 'string',
                description: 'Reason for locking transactions',
              },
            ]}
          />

          <SubHeading heading='Unlock Operations' />
          <SubHeading2 heading='PUT /transactions-locking/unlock-partial' />
          <Paragraph paragraph='Partially unlock transactions that were previously locked.' />

          <SubHeading heading='Cancel Operations' />
          <SubHeading2 heading='PUT /transactions-locking/cancel-partial' />
          <Paragraph paragraph='Cancel a partial transactions lock.' />

          <SubHeading2 heading='PUT /transactions-locking/cancel-lock' />
          <Paragraph paragraph='Cancel a full transactions lock.' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'module',
                type: 'string',
                description: 'Module to unlock (e.g., "all")',
              },
              {
                parameter: 'reason',
                type: 'string',
                description: 'Reason for canceling the lock',
              },
            ]}
          />

          <SubHeading heading='Retrieve Operations' />
          <SubHeading2 heading='GET /transactions-locking/all' />
          <Paragraph paragraph='Retrieve all transaction locking information.' />

          <SubHeading2 heading='GET /transactions-locking' />
          <Paragraph paragraph='Retrieve a list of transaction locks.' />

          <SubHeading heading='Required Headers' />
          <OrderedList
            list={[
              'x-access-token: Required for listing operations',
              'organization-id: Required for listing operations',
            ]}
          />

          <SubHeading heading='Important Notes' />
          <OrderedList
            list={[
              'Locked transactions cannot be modified until unlocked',
              'Partial unlocking allows for specific modules to be unlocked',
              'Full cancellation removes all transaction locks',
              'Lock dates should be in YYYY-MM-DD format',
              'Always provide a reason for locking/unlocking operations',
            ]}
          />

          <SubHeading heading='Request Examples' />
          <SubHeading2 heading='Lock Transactions' />
          <CodeDisplay
            heading='Form Data'
            curlCommand={`module: all
lock_to_date: 2029-02-25
reason: Reason description here...`}
          />

          <SubHeading2 heading='Cancel Lock' />
          <CodeDisplay
            heading='Form Data'
            curlCommand={`module: all
reason: Description...`}
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