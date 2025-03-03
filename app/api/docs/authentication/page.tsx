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

export default function AuthenticationPage() {
  const pathname = usePathname();
  console.log(pathname);
  1;
  return (
    <>
      <div className='grid lg:grid-cols-6'>
        <div className='col-span-3 lg:p-3'>
          <MainHeading heading='Authentication API Documentation' />
          <SubHeading heading='Introduction' />
          <Paragraph paragraph='The Authentication API provides endpoints for user authentication, registration, and password management. All requests should be made using JSON format and proper authentication headers where required.' />

          <SubHeading heading='Login Authentication' />
          <SubHeading2 heading='POST /auth/login' />
          <Paragraph paragraph='Authenticate a user and receive an access token.' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'credential',
                type: 'string',
                description: 'User email address',
              },
              {
                parameter: 'password',
                type: 'string',
                description: 'User password',
              },
            ]}
          />

          <SubHeading heading='User Registration' />
          <SubHeading2 heading='POST /auth/register' />
          <Paragraph paragraph='Register a new user and organization in the system.' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'organization_name',
                type: 'string',
                description: 'Name of the organization',
              },
              {
                parameter: 'first_name',
                type: 'string',
                description: 'User first name',
              },
              {
                parameter: 'last_name',
                type: 'string',
                description: 'User last name',
              },
              {
                parameter: 'email',
                type: 'string',
                description: 'User email address',
              },
              {
                parameter: 'phone_number',
                type: 'number',
                description: 'Contact phone number',
              },
              {
                parameter: 'password',
                type: 'string',
                description: 'User password',
              },
              {
                parameter: 'country',
                type: 'string',
                description: 'Country code (e.g., "LY")',
              },
            ]}
          />

          <SubHeading heading='Password Reset' />
          <SubHeading2 heading='POST /auth/send_reset_password' />
          <Paragraph paragraph='Request a password reset link to be sent to your email.' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'email',
                type: 'string',
                description: 'Registered email address',
              },
            ]}
          />

          <SubHeading2 heading='POST /auth/reset/{reset_password_token}' />
          <Paragraph paragraph='Reset password using the token received via email.' />
          <DataTable
            columns={[
              { header: 'Parameter', accessorKey: 'parameter' },
              { header: 'Type', accessorKey: 'type' },
              { header: 'Description', accessorKey: 'description' },
            ]}
            data={[
              {
                parameter: 'password',
                type: 'string',
                description: 'New password',
              },
              {
                parameter: 'confirm_password',
                type: 'string',
                description: 'Confirm new password',
              },
            ]}
          />

          <SubHeading heading='Authentication Meta' />
          <SubHeading2 heading='GET /auth/meta' />
          <Paragraph paragraph='Retrieve authentication metadata and user information.' />
          <Paragraph paragraph='This endpoint requires no request body but must include valid authentication headers.' />

          <SubHeading heading='Required Headers' />
          <OrderedList
            list={[
              'Content-Type: application/json',
              'Authorization: Bearer <TOKEN> (for authenticated endpoints)',
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
