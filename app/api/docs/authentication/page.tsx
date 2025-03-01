"use client";
import { OrderedList } from "@/components/typography/listTypography";
import {
  MainHeading,
  Paragraph,
  SubHeading,
  SubHeading2,
} from "@/components/typography/typographyHeadings";
import { Copy } from "lucide-react";
import { useState } from "react";

export default function AuthenticationPage() {
  const [copied, setCopied] = useState(false);

  // Example curl command - can be replaced with your own
  const curlCommand = `curl -X POST https://api.example.com/v1/endpoint \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "prompt": "Write a poem about coding",
    "max_tokens": 100,
    "temperature": 0.7
  }'`;

  const handleCopy = () => {
    navigator.clipboard.writeText(curlCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
    <div className="grid lg:grid-cols-6">
    <div className=" col-span-3 lg:p-3">
        <MainHeading heading="Books easy API Documentation" />
        <SubHeading heading="Introduction" />
        <Paragraph paragraph="The Book Easy API is an interface for accessing your Book Easy data using JSON. The API makes it easy to create web and desktop applications that integrate with your account. Possible uses for it include automatically creating and sending invoices when users sign up on your website, pulling lists of client information, copying data to 3rd party services, and more." />
        <Paragraph paragraph="Check out our Scenarios and API Reference sections to see what to expect, and when you're ready, sign up for a Book Easy account if you don't have one, and proceed to the developer page to create an application and start development." />
        <SubHeading heading="Quick Start" />

        <Paragraph paragraph="Be sure to check out the Tools and Libraries page where we list our SDKs and some example code to help you get started." />

        <Paragraph paragraph="In our documentation, the column on the right-hand side will have cURL calls that demonstrate the required Headers and general format of requests to the Book Easy API." />

        <Paragraph paragraph="Requests are authenticated using OAuth2 access tokens which you receive in exchange for a code we issue after a logged-in user performs an authorization grant request. You can create an OAuth application and get a client id and secret in your Book Easy developer page. See our Authentication documentation or the Get Authenticated On The Book Easy API tutorial for more information." />

        <SubHeading heading="Creating your application on Book Easy" />

        <Paragraph paragraph="Create an account by visiting our sign up page. If you already have a Book Easy account, log in by visiting our log in page. You can reach out to our support team to have your account put on our partner plan." />

        <OrderedList
          list={[
            "Now visit the developer page and create a new app.",
            "Make sure to include the name of the application and redirect URI in the application form.",
            "The name of the application has to be unique as it will be used to display on the Book Easy app store and on a Book Easy user's integrations page once they have connected with your application. The redirect URI should be an endpoint in your application that will receive the authorization code and will use it to retrieve the bearer token and refresh token. These will be necessary to make authenticated calls to the Book Easy API. To get more information on our authentication process visit our OAuth documentation.",
            "Save your application.",
          ]}
        />

        <SubHeading heading="Make a Test Call" />
        <SubHeading heading="Required Headers" />
        <Paragraph paragraph="There are two required headers for most calls:" />
        <OrderedList
          list={[
            "Content-Type: application/json",
            "Authorization: Bearer <TOKEN>",
          ]}
        />
        <Paragraph paragraph="We need those two to understand and authenticate your call. The black code pane on this page shows an example of a call that sends these headers correctly." />

        <SubHeading heading="Test Call" />
        <Paragraph paragraph="Copy, paste, and run the command from the code pane on any Mac or Linux computer, or a Windows computer with cURL installed." />

        <SubHeading heading="Getting Help" />
        <Paragraph paragraph="If there's no one around to help, we've got your back. Shoot us an email at api@Book Easy.com and tell us what you're aiming to accomplish, what you've done so far, and what went wrong. Maybe we can find the missing piece of the puzzle together." />

        <SubHeading heading="Join the Book Easy Developer Community!" />
        <Paragraph paragraph="Stay connected to the latest with the Book Easy API by joining our mailing list" />
        <Paragraph paragraph="Follow us on Twitter @ freshbooksdevs" />
      </div>
      <div className="col-span-3 lg:p-3">
        <div className="w-full max-w-3xl mx-auto mb-2">
          <SubHeading2 heading="Authentication" />
          <div className="bg-brand-primary rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-brand-secondary">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <SubHeading2 heading="Authentication" />
              <button
                onClick={handleCopy}
                className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center text-sm"
              >
                <Copy size={16} className="mr-1" />
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Command content */}
            <div className="p-4 overflow-x-auto">
              <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
                {curlCommand}
              </pre>
            </div>
          </div>
        </div>
        <div className="w-full max-w-3xl mx-auto mb-2">
          <SubHeading2 heading="Test Call" />
          <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-gray-400 text-sm font-mono">
                curl command
              </div>
              <button
                onClick={handleCopy}
                className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center text-sm"
              >
                <Copy size={16} className="mr-1" />
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Command content */}
            <div className="p-4 overflow-x-auto">
              <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
                {curlCommand}
              </pre>
            </div>
          </div>
        </div>
        <div className="w-full max-w-3xl mx-auto mb-2">
          <SubHeading2 heading="Notes" />
          <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-gray-400 text-sm font-mono">
                curl command
              </div>
              <button
                onClick={handleCopy}
                className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center text-sm"
              >
                <Copy size={16} className="mr-1" />
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Command content */}
            <div className="p-4 overflow-x-auto">
              <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
                {curlCommand}
              </pre>
            </div>
          </div>
        </div>
        <div className="w-full max-w-3xl mx-auto mb-2">
          <SubHeading2 heading="Response" />
          <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-gray-400 text-sm font-mono">
                curl command
              </div>
              <button
                onClick={handleCopy}
                className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center text-sm"
              >
                <Copy size={16} className="mr-1" />
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Command content */}
            <div className="p-4 overflow-x-auto">
              <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
                {curlCommand}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
     
     
    </>
  );
}
