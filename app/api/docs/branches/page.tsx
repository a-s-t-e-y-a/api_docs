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

export default function BranchesPage() {
  const pathname = usePathname();

  return (
    <>
      <div className='grid lg:grid-cols-6'>
        <div className='col-span-3 lg:p-3'>
          <MainHeading heading='Branches API Documentation' />
          <SubHeading heading='Introduction' />
          <Paragraph paragraph='The Branches API provides endpoints for managing organization branches, including creation, editing, and branch status management.' />

          <SubHeading heading='Create Branch' />
          <SubHeading2 heading='POST /branches' />
          <Paragraph paragraph='Create a new branch.' />
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
                description: 'Name of the branch',
              },
              {
                parameter: 'code',
                type: 'string',
                description: 'Branch code',
              },
            ]}
          />

          <SubHeading heading='Branch Management' />
          <SubHeading2 heading='POST /branches/{branch_id}' />
          <Paragraph paragraph='Edit an existing branch.' />

          <SubHeading2 heading='POST /branches/{branch_id}/mark-primary' />
          <Paragraph paragraph='Set a branch as primary.' />

          <SubHeading2 heading='POST /branches/{branch_id}/activate' />
          <Paragraph paragraph='Activate a branch.' />

          <SubHeading heading='Retrieve Branch' />
          <SubHeading2 heading='GET /branches/{branch_id}' />
          <Paragraph paragraph='Retrieve details of a specific branch.' />

          <SubHeading heading='Delete Branch' />
          <SubHeading2 heading='DELETE /branches/{branch_id}' />
          <Paragraph paragraph='Delete a specific branch.' />

          <SubHeading heading='Required Headers' />
          <OrderedList
            list={[
              'Content-Type: application/json',
              'Accept: application/json',
              'organization-id: <ORGANIZATION_ID>',
            ]}
          />

          <SubHeading heading='Request Body Example' />
          <CodeDisplay
            heading='Create/Edit Branch Request'
            curlCommand={`{
    "name": "Warehouse #1",
    "code": "1001"
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