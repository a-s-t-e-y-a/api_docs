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

export default function AttachmentsPage() {
  const pathname = usePathname();

  return (
    <>
      <div className='grid lg:grid-cols-6'>
        <div className='col-span-3 lg:p-3'>
          <MainHeading heading='Attachments API Documentation' />
          <SubHeading heading='Introduction' />
          <Paragraph paragraph='The Attachments API provides endpoints for managing file attachments, including uploading, linking, and managing attachment metadata.' />

          <SubHeading heading='Upload Attachment' />
          <SubHeading2 heading='POST /attachments' />
          <Paragraph paragraph='Upload a new file attachment.' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'file',
                type: 'file',
                description: 'The file to be uploaded',
              },
            ]}
          />

          <SubHeading heading='Link/Unlink Attachment' />
          <SubHeading2 heading='POST /attachments/{attachment_id}/link' />
          <Paragraph paragraph='Link an attachment to a specific model.' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'modelRef',
                type: 'string',
                description: 'Reference model name (e.g., ManualJournal)',
              },
              {
                parameter: 'modelId',
                type: 'number',
                description: 'ID of the referenced model',
              },
            ]}
          />

          <SubHeading heading='Retrieve Attachments' />
          <SubHeading2 heading='GET /attachments/{attachment_id}' />
          <Paragraph paragraph='Retrieve a specific attachment.' />

          <SubHeading2 heading='GET /attachments/{attachment_id}/presigned-url' />
          <Paragraph paragraph='Get a presigned URL for attachment access.' />

          <SubHeading heading='Delete Attachment' />
          <SubHeading2 heading='DELETE /attachments/{attachment_id}' />
          <Paragraph paragraph='Delete a specific attachment.' />

          <SubHeading heading='Required Headers' />
          <OrderedList
            list={[
              'x-access-token: <TOKEN>',
              'organization-id: <ORGANIZATION_ID>',
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