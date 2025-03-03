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


export default function BankingPlaidPage() {
  const pathname = usePathname();

  return (
    <>
      <div className='grid lg:grid-cols-6'>
        <div className='col-span-3 lg:p-3'>
          <MainHeading heading='Banking Plaid API Documentation' />
          <SubHeading heading='Introduction' />
          <Paragraph paragraph='The Banking Plaid API provides endpoints for integrating with Plaid services, allowing secure bank account connections and token management.' />

          <SubHeading heading='Get Link Token' />
          <SubHeading2 heading='POST /banking/plaid/link-token' />
          <Paragraph paragraph='Generate a Plaid Link token for initiating the bank account connection process.' />

          <SubHeading heading='Exchange Token' />
          <SubHeading2 heading='POST /banking/plaid/exchange-token' />
          <Paragraph paragraph='Exchange a temporary Plaid Link token for a permanent access token.' />

          <SubHeading heading='Required Headers' />
          <OrderedList
            list={[
              'x-access-token: <TOKEN>',
              'organization-id: <ORGANIZATION_ID>',
            ]}
          />

          <SubHeading heading='Security Note' />
          <Paragraph paragraph='All Plaid-related tokens should be handled securely and never exposed in client-side code or logged. These tokens provide access to sensitive financial data.' />

          <SubHeading heading='Integration Flow' />
          <OrderedList
            list={[
              '1. Request a Link token using the Get Link Token endpoint',
              '2. Use the Link token with Plaid Link to allow user bank selection',
              '3. Exchange the temporary token for a permanent access token',
              '4. Store the access token securely for future bank data access',
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