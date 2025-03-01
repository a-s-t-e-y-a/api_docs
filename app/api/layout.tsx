"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Copy } from "lucide-react";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <div>
      <div className="grid grid-cols-1 h-screen xl:max-w-[80%] lg:grid-cols-6 2xl:max-w-[80%] mx-auto">
        <div className="col-span-1 border-r">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">
                Getting Started
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Quick Setup Guide
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">
                Authorization
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Access Control
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">
                Scenarios and Concepts
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Common Use Cases
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">Tutorials</AccordionTrigger>
              <AccordionContent className="text-base">
                Learn Basics
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg">
                API Changelog
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Recent Updates
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg">Clients</AccordionTrigger>
              <AccordionContent className="text-base">
                Manage Customers
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg">Invoices</AccordionTrigger>
              <AccordionContent className="text-base">
                Billing Management
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg">Expenses</AccordionTrigger>
              <AccordionContent className="text-base">
                Track Costs
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-lg">Estimates</AccordionTrigger>
              <AccordionContent className="text-base">
                Price Quotes
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-10">
              <AccordionTrigger className="text-lg">
                Time Tracking
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Monitor Hours
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-11">
              <AccordionTrigger className="text-lg">Projects</AccordionTrigger>
              <AccordionContent className="text-base">
                Manage Tasks
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-12">
              <AccordionTrigger className="text-lg">My Team</AccordionTrigger>
              <AccordionContent className="text-base">
                Team Overview
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-13">
              <AccordionTrigger className="text-lg">Reports</AccordionTrigger>
              <AccordionContent className="text-base">
                View Analytics
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-14">
              <AccordionTrigger className="text-lg">
                Accounting
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Financial Overview
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-15">
              <AccordionTrigger className="text-lg">Webhooks</AccordionTrigger>
              <AccordionContent className="text-base">
                API Integration
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-16">
              <AccordionTrigger className="text-lg">Settings</AccordionTrigger>
              <AccordionContent className="text-base">
                Configure System
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="col-span-5 p-3">{children}</div>
      
      </div>
    </div>
  );
}
