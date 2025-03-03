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

export default function ManualJournalsPage() {
  const pathname = usePathname();

  return (
    <>
      <div className='grid lg:grid-cols-6'>
        <div className='col-span-3 lg:p-3'>
          <MainHeading heading='Manual Journals API Documentation' />
          <SubHeading heading='Introduction' />
          <Paragraph paragraph='The Manual Journals API provides endpoints for creating and managing manual journal entries in the accounting system.' />

          <SubHeading heading='Create Manual Journal' />
          <SubHeading2 heading='POST /manual-journals' />
          <Paragraph paragraph='Create a new manual journal entry.' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'date',
                type: 'string',
                description: 'Journal entry date (YYYY-MM-DD)',
              },
              {
                parameter: 'reference',
                type: 'string',
                description: 'Reference number for the journal',
              },
              {
                parameter: 'publish',
                type: 'boolean',
                description: 'Whether to publish the journal immediately',
              },
              {
                parameter: 'entries',
                type: 'array',
                description: 'Array of journal entry lines',
              },
            ]}
          />

          <SubHeading2 heading='Journal Entry Structure' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'index',
                type: 'number',
                description: 'Line item index',
              },
              {
                parameter: 'credit',
                type: 'number',
                description: 'Credit amount (0 if debit entry)',
              },
              {
                parameter: 'debit',
                type: 'number',
                description: 'Debit amount (0 if credit entry)',
              },
              {
                parameter: 'account_id',
                type: 'number',
                description: 'ID of the account for this entry',
              },
            ]}
          />

          <SubHeading heading='Edit Manual Journal' />
          <SubHeading2 heading='POST /manual-journals/{manual_journal_id}' />
          <Paragraph paragraph='Update an existing manual journal entry. Uses the same request body structure as create.' />

          <SubHeading heading='Publish Manual Journal' />
          <SubHeading2 heading='POST /manual-journals/{manual_journal_id}/publish' />
          <Paragraph paragraph='Publish a draft manual journal entry. No request body required.' />

          <SubHeading heading='Delete Manual Journal' />
          <SubHeading2 heading='DELETE /manual-journals/{manual_journal_id}' />
          <Paragraph paragraph='Delete a manual journal entry. Cannot delete published journals.' />

          <SubHeading heading='Retrieve Operations' />
          <SubHeading2 heading='GET /manual-journals/{manual_journal_id}' />
          <Paragraph paragraph='Retrieve a specific manual journal entry with all its details.' />

          <SubHeading2 heading='GET /manual-journals' />
          <Paragraph paragraph='List all manual journal entries. Returns a paginated list of journals.' />

          <SubHeading heading='Required Headers' />
          <OrderedList
            list={[
              'Content-Type: application/json',
            ]}
          />

          <SubHeading heading='Important Notes' />
          <OrderedList
            list={[
              'The sum of credits must equal the sum of debits in journal entries',
              'Each journal must have at least two entries (one debit and one credit)',
              'Published journals cannot be edited or deleted',
              'Reference numbers should be unique within the organization',
            ]}
          />

          <SubHeading heading='Request Body Example' />
          <CodeDisplay
            heading='Create/Edit Journal Request'
            curlCommand={`{
    "date": "2022-06-01",
    "reference": "REF-100",
    "publish": true,
    "entries": [
        {
            "index": 1,
            "credit": 1000,
            "debit": 0,
            "account_id": 1003
        },
        {
            "index": 2,
            "credit": 0,
            "debit": 1000,
            "account_id": 1004
        }
    ]
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