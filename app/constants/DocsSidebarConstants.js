const DocsSidebarConstantText = [
  {
    page: 'authentication',
    heading: 'Authentication',
    url: '/api/docs/authentication',
    curl: [
      {
        heading: 'Register',
        curlCommand: `curl --location --globoff '{{base}}/auth/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "organization_name": "Bigcapital",
    "first_name": "Ahmed",
    "last_name": "Bouhuolia",
    "email": "woo22@woo23.com",
    "phone_number": 2189279183813,
    "password": "123123123",
    "country": "LY"
}'`,
      },
      {
        heading: 'Login',
        curlCommand: `curl --location --globoff '{{base}}/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "crediential": "admin2@admin2.com",
    "password": "123123"
}'`,
      },
      {
        heading: 'Send Reset Password',
        curlCommand: `curl --location --globoff '{{base}}/auth/send_reset_password' \
--form 'email="admin@admin.com"'`,
      },
      {
        heading: 'Reset Password',
        curlCommand: `curl --location --globoff '{{base}}/auth/reset/{{reset_password_token}}' \
--form 'password="123123"' \
--form 'confirm_password="123123"'`,
      },
      {
        heading: 'Get Meta',
        curlCommand: `curl --location --globoff --request GET '{{base}}/auth/meta' \
--form 'password="123123"' \
--form 'confirm_password="123123"'`,
      },
      {
        heading: 'Send Reset Password',
        curlCommand: `curl --location --globoff '{{base}}/auth/send_reset_password' \
--form 'email="admin@admin.com"'`,
      },
      {
        heading: 'Reset Password',
        curlCommand: `curl --location --globoff '{{base}}/auth/reset/{{reset_password_token}}' \
--form 'password="123123"' \
--form 'confirm_password="123123"'`,
      },
      {
        heading: 'Get Meta',
        curlCommand: `curl --location --globoff --request GET '{{base}}/auth/meta'`,
      },
    ],
  },
  {
    page: 'sale-estimate',
    heading: 'Sale Estimate',
    url: '/api/docs/sales-estimates',
    curl: [
      {
        heading: 'Create Sale Estimate',
        curlCommand: `curl --location --globoff '{{base}}/sales/estimates' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--header 'Content-Type: application/json' \\
--data '{
    "customer_id": 1,
    "estimate_date": "2022-02-02",
    "expiration_date": "2020-03-02",
    "delivered": false,
    "notes": "search by google search by google ",
    "branch_id": 1,
    "entries": [
        {
            "index": 1,
            "item_id": 1001,
            "quantity": 3,
            "rate": 1000,
            "description": "It\\'s description here."
        }
    ]
}'`,
      },
      {
        heading: 'Approve Sale Estimate',
        curlCommand: `curl --location --globoff '{{base}}/sales/estimates/{{sale_estimate_id}}/approve' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--header 'Content-Type: application/json' \\
--data '{
    "customer_id": 1,
    "estimate_date": "9022-02-02",
    "expiration_date": "2020-02-02",
    "delivered": false,
    "notes": "search by google search by google ",
    "branch_id": 1,
    "entries": [
        {
            "index": 1,
            "item_id": 1001,
            "quantity": 3,
            "rate": 1000,
            "description": "It\\'s description here."
        }
    ]
}'`,
      },
      {
        heading: 'Reject Sale Estimate',
        curlCommand: `curl --location --globoff '{{base}}/sales/estimates/{{sale_estimate_id}}/reject' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--header 'Content-Type: application/json' \\
--data '{
    "customer_id": 1,
    "estimate_date": "9022-02-02",
    "expiration_date": "2020-02-02",
    "delivered": false,
    "notes": "search by google search by google ",
    "branch_id": 1,
    "entries": [
        {
            "index": 1,
            "item_id": 1001,
            "quantity": 3,
            "rate": 1000,
            "description": "It\\'s description here."
        }
    ]
}'`,
      },
      {
        heading: 'Get All Sale Estimates',
        curlCommand: `curl --location --globoff '{{base}}/sales/estimates' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Get Sale Estimate by ID',
        curlCommand: `curl --location --globoff '{{base}}/sales/estimates/{{sale_estimate_id}}' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Send SMS to Customer',
        curlCommand: `curl --location --globoff --request POST '{{base}}/sales/estimates/{{sale_estimate_id}}/sms' \
--header 'x-access-token: {{token}}' \
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Send Email to Customer',
        curlCommand: `curl --location --globoff --request POST '{{base}}/sales/estimates/{{sale_estimate_id}}/mail' \
--header 'x-access-token: {{token}}' \
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Get mail templates',
        curlCommand: `curl --location --globoff '{{base}}/sales/estimates/mail' \
--header 'x-access-token: {{token}}' \
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Delete Sale Estimate',
        curlCommand: `curl --location --globoff --request DELETE '{{base}}/sales/estimates/{{sale_estimate_id}}' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Get Sale Estimate as PDF',
        curlCommand: `curl --location --globoff '{{base}}/sales/estimates/{{sale_estimate_id}}/pdf' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--header 'accept: application/pdf'`,
      },
    ],
  },
  {
    page: 'bills',
    heading: 'Bills',
    url: '/api/docs/bills',
    curl: [
      {
        heading: 'Create Bill',
        curlCommand: `curl --location --globoff '{{base}}/purchases/bills' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--header 'Content-Type: application/json' \\
--data '{
    "vendor_id": 3,
    "bill_date": "2000-03-03",
    "due_date": "2050-01-01",
    "bill_number": "B2-A442444s1",
    "delivered": true,
    "open": true,
    "reference_no": "1223", 
    "exchange_rate": 4.5,
    
    "entries": [
        {
            "index": 1,
            "item_id": 1001,
            "quantity": 1,
            "rate": 2000,
            "description": "It is aaaasda..."
        }
    ]
}'`,
      },
      {
        heading: 'Open Bill',
        curlCommand: `curl --location --globoff --request POST '{{base}}/purchases/bills/{{bill_id}}/open' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Update Bill',
        curlCommand: `curl --location --globoff '{{base}}/purcahses/bills/{{bill_id}}' \\
--header 'Content-Type: application/json' \\
--data '{
    "vendor_id": 3,
    "bill_date": "2000-03-03",
    "due_date": "2050-01-01",
    "bill_number": "B2-A442444s1",
    "delivered": true,
    "open": true,
    "reference_no": "1223",
    "exchange_rate": 4.5,
    
    "entries": [
        {
            "index": 1,
            "item_id": 1001,
            "quantity": 1,
            "rate": 2000,
            "description": "It is aaaasda..."
        }
    ]
}'`,
      },
      {
        heading: 'Delete Bill',
        curlCommand: `curl --location --globoff --request DELETE '{{base}}/purchases/bills/{{bill_id}}' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--header 'Content-Type: application/json'`,
      },
      {
        heading: 'Get Bill by ID',
        curlCommand: `curl --location --globoff '{{base}}/purchases/bills/{{bill_id}}' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Get All Bills',
        curlCommand: `curl --location --globoff '{{base}}/purchases/bills' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Get Bill Payment Transactions',
        curlCommand: `curl --location --globoff '{{base}}/purchases/bills/{{bill_id}}/payment-transactions' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Get Due Bills',
        curlCommand: `curl --location --globoff '{{base}}/purchases/bills/due' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
    ],
  },
  {
    page: 'accounts',
    heading: 'Accounts',
    url: '/api/docs/accounts',
    curl: [
      {
        heading: 'Retrieve Account Types',
        curlCommand: `curl --location --globoff '{{base}}/account_types' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Create Account',
        curlCommand: `curl --location --globoff '{{base}}/accounts' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--header 'Content-Type: application/json' \\
--data '{
    "name": "Account name",
    "code": "100100",
    "account_type": "expense",
    "parent_account_id": ""
}'`,
      },
      {
        heading: 'Edit Account',
        curlCommand: `curl --location --globoff '{{base}}/accounts/{{account_id}}' \\
--header 'Content-Type: application/json' \\
--data '{
    "name": "Account name",
    "code": "100100",
    "account_type": "expense",
    "parent_account_id": ""
}'`,
      },
      {
        heading: 'Activate Account',
        curlCommand: `curl --location --globoff --request POST '{{base}}/accounts/{{account_id}}/activate' \\
--header 'Content-Type: application/json' \\
--data '{
    "name": "Account name",
    "code": "100100",
    "account_type": "expense",
    "parent_account_id": ""
}'`,
      },
      {
        heading: 'Inactivate Account',
        curlCommand: `curl --location --globoff --request POST '{{base}}/accounts/{{account_id}}/inactivate' \\
--header 'Content-Type: application/json' \\
--data '{
    "name": "Account name",
    "code": "100100",
    "account_type": "expense",
    "parent_account_id": ""
}'`,
      },
      {
        heading: 'Delete Account',
        curlCommand: `curl --location --globoff --request DELETE '{{base}}/accounts/{{account_id}}' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Retrieve Accounts',
        curlCommand: `curl --location --globoff '{{base}}/accounts' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Retrieve Account',
        curlCommand: `curl --location --globoff '{{base}}/accounts/{{account_id}}' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Retrieve Account Transactions',
        curlCommand: `curl --location --globoff '{{base}}/accounts/{{account_id}}/transactions'`,
      },
    ],
  },
  {
    page: 'bank-rules',
    heading: 'Bank Rules',
    url: '/api/docs/bank-rules',
    curl: [
      {
        heading: 'Retrieve Bank Rules',
        curlCommand: `curl --location --globoff '{{base}}/banking/rules' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Retrieve Bank Rule',
        curlCommand: `curl --location --globoff '{{base}}/banking/rules/1' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Create Bank Rule',
        curlCommand: `curl --location --globoff '{{base}}/banking' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--header 'Content-Type: application/json' \\
--data '{
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
}'`,
      },
      {
        heading: 'Edit Bank Rule',
        curlCommand: `curl --location --globoff '{{base}}/banking/rules/1001' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--header 'Content-Type: application/json' \\
--data '{
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
}'`,
      },
      {
        heading: 'Delete Bank Rule',
        curlCommand: `curl --location --globoff --request DELETE '{{base}}/banking/rules/1001' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
    ],
  },
  {
    page: 'currencies',
    heading: 'Currencies',
    url: '/api/docs/currencies',
    curl: [],
  },
  {
    page: 'attachments',
    heading: 'Attachments',
    url: '/api/docs/attachments',
    curl: [
      {
        heading: 'Upload Attachment',
        curlCommand: `curl --location --globoff '{{base}}/attachments' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--form 'file=@"/path/to/file"'`,
      },
      {
        heading: 'Link Attachment',
        curlCommand: `curl --location --globoff '{{base}}/attachments/1716572699381/link' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--header 'Content-Type: application/json' \\
--data '{
    "modelRef": "ManualJournal",
    "modelId": 1000
}'`,
      },
      {
        heading: 'Unlink Attachment',
        curlCommand: `curl --location --globoff '{{base}}/attachments/1716572699381/link' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--header 'Content-Type: application/json' \\
--data '{
    "modelRef": "ManualJournal",
    "modelId": 1000
}'`,
      },
      {
        heading: 'Get Attachment Presigned URL',
        curlCommand: `curl --location --globoff '{{base}}/attachments/1716984044340/presigned-url' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Get Attachment',
        curlCommand: `curl --location --globoff '{{base}}/attachments/1716542837759' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Delete Attachment',
        curlCommand: `curl --location --globoff --request DELETE '{{base}}/attachments/1716542837759' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
    ],
  },
  {
    page: 'branches',
    heading: 'Branches',
    url: '/api/docs/branches',
    curl: [
      {
        heading: 'Create Branch',
        curlCommand: `curl --location --globoff '{{base}}/branches' \\
--header 'organization-id: {{organization_id}}' \\
--header 'Accept: application/json' \\
--header 'Content-Type: application/json' \\
--data '{
    "name": "Warehouse #1",
    "code": "1001"
}'`,
      },
      {
        heading: 'Edit Branch',
        curlCommand: `curl --location --globoff '{{base}}/branches/{{branch_id}}' \\
--header 'Content-Type: application/json' \\
--data '{
    "name": "Warehouse #1",
    "code": "1001"
}'`,
      },
      {
        heading: 'Mark Branch as Primary',
        curlCommand: `curl --location --globoff '{{base}}/branches/{{branch_id}}/mark-primary'`,
      },
      {
        heading: 'Activate Branch',
        curlCommand: `curl --location --globoff '{{base}}/branches/{{branch_id}}/activate'`,
      },
      {
        heading: 'Get Branch',
        curlCommand: `curl --location --globoff '{{base}}/branches/{{branch_id}}'`,
      },
      {
        heading: 'Delete Branch',
        curlCommand: `curl --location --globoff --request DELETE '{{base}}/branches/{{branch_id}}'`,
      },
    ],
  },
  {
    page: 'banking-plaid',
    heading: 'Banking Plaid',
    url: '/api/docs/banking-plaid',
    curl: [
      {
        heading: 'Get Link Token',
        curlCommand: `curl --location --globoff '{{base}}/banking/plaid/link-token' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Exchange Token',
        curlCommand: `curl --location --globoff '{{base}}/banking/plaid/link-token' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
    ],
  },
  {
    page: 'banking',
    heading: 'Banking',
    url: '/api/docs/banking',
    curl: [
      {
        heading: 'Match Bank Transaction',
        curlCommand: `curl --location --globoff '{{base}}/banking/matches/match' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--header 'Content-Type: application/json'`,
      },
      {
        heading: 'Unmatch Transaction',
        curlCommand: `curl --location --globoff '{{base}}/banking/matches/4' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Get Best Matches',
        curlCommand: `curl --location --globoff '{{base}}/banking/matches' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Create Cash Flow Transaction',
        curlCommand: `curl --location --globoff '{{base}}/cashflow/transactions' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--header 'Content-Type: application/json' \\
--data '{
    "amount": 1000,
    "date": "2023-01-01",
    "reference_no": "REF-100",
    "exchange_rate": 1,
    "cashflow_account_id": 1000,
    "credit_account_id": 1014,
    "description": "Hello world 2",
    "publush": true,
    "transaction_type": "owner_contribution"
}'`,
      },
      {
        heading: 'Exclude Transaction',
        curlCommand: `curl --location --globoff --request PUT '{{base}}/cashflow/transactions/5/exclude' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Get Bank Account Summary',
        curlCommand: `curl --location --globoff '{{base}}/banking/bank_accounts/1000/meta' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Categorize Transaction',
        curlCommand: `curl --location --globoff '{{base}}/cashflow/transactions/{{cash_flow_transaction_id}}/categorize' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--header 'Content-Type: application/json'`,
      },
      {
        heading: 'Get Cash Flow Transactions',
        curlCommand: `curl --location --globoff '{{base}}/cashflow/transactions' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Get Uncategorized Transactions',
        curlCommand: `curl --location --globoff '{{base}}/cashflow/transactions/uncategorized' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
    ],
  },
  {
    page: 'credit-notes',
    heading: 'Credit Notes',
    url: '/api/docs/credit-notes',
    curl: [
      {
        heading: 'Create Credit Note',
        curlCommand: `curl --location --globoff '{{base}}/sales/credit_notes' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--header 'Content-Type: application/json' \\
--data '{
    "customer_id": 1,
    "estimate_date": "2020-02-02",
    "estimate_number": "1",
    "entries": [
        {
            "item_id": 1,
            "quantity": 1,
            "rate": 1000,
            "description": "It'\''s description here."
        }
    ],
    "attachments": "1716721810462"
}'`,
      },
      {
        heading: 'Apply Credit Note to Invoices',
        curlCommand: `curl --location --globoff '{{base}}/sales/credit_notes/{{credit_note_id}}/apply-to-invoices' \\
--header 'Content-Type: application/json' \\
--data '{
    "entries": [
        {
            "invoice_id": 1,
            "amount": 1000
        }
    ]
}'`,
      },
      {
        heading: 'Delete Applied Credit',
        curlCommand: `curl --location --globoff --request DELETE '{{base}}/sales/credit_notes/apply-to-invoices/{{credit_note_apply_invoice_id}}' \\
--header 'Content-Type: application/json'`,
      },
      {
        heading: 'Get Associated Invoices',
        curlCommand: `curl --location --globoff '{{base}}/sales/credit_notes/apply-to-invoices/{{credit_note_apply_invoice_id}}'`,
      },
      {
        heading: 'Create Refund',
        curlCommand: `curl --location --globoff '{{base}}/sales/credit_notes/{{credit_note_id}}/refund' \\
--header 'Content-Type: application/json' \\
--data '{
    "from_account_id": 1002,
    "reference_no": "REF-100",
    "amount": 1000,
    "exchange_rate": 1,
    "date": "2020-02-02",
    "description": "Description",
    "branch_id": 1
}'`,
      },
      {
        heading: 'Delete Refund',
        curlCommand: `curl --location --globoff --request DELETE '{{base}}/sales/credit_notes/refunds/{{credit_note_refund_id}}'`,
      },
      {
        heading: 'Get Refund Transaction',
        curlCommand: `curl --location --globoff '{{base}}/sales/credit_notes/refunds/{{credit_note_refund_id}}'`,
      },
      {
        heading: 'Get Refund Transactions',
        curlCommand: `curl --location --globoff '{{base}}/sales/credit_notes/{{credit_note_id}}/refund'`,
      },
      {
        heading: 'Send Email Notification',
        curlCommand: `curl --location --globoff '{{base}}/sales/credit_notes/{{credit_note_id}}/mail' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--header 'Content-Type: application/json'`,
      },
      {
        heading: 'Get All Credit Notes',
        curlCommand: `curl --location --globoff '{{base}}/sales/credit_notes' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Get Credit Note',
        curlCommand: `curl --location --globoff '{{base}}/sales/credit_notes/{{credit_note_id}}' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Get Credit Note PDF',
        curlCommand: `curl --location --globoff '{{base}}/sales/credit_notes/{{credit_note_id}}' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--header 'Accept: application/pdf'`,
      },
      {
        heading: 'Get Credit Note Associated Invoices to Apply',
        curlCommand: `curl --location --globoff '{{base}}/sales/credit_notes/apply-to-invoices/{{credit_note_apply_invoice_id}}' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Get Credit Note Associated Applied Invoices',
        curlCommand: `curl --location --globoff '{{base}}/sales/credit_notes/apply-to-invoices/{{credit_note_apply_invoice_id}}' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Edit Credit Note',
        curlCommand: `curl --location --globoff --request POST '{{base}}/sales/credit_notes/{{credit_note_id}}' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--header 'Content-Type: application/json' \\
--data '{
    "customer_id": 1,
    "estimate_date": "2020-02-02",
    "estimate_number": "1",
    "entries": [
        {
            "item_id": 1,
            "quantity": 1,
            "rate": 1000,
            "description": "Updated description"
        }
    ]
}'`,
      },
      {
        heading: 'Delete Credit Note',
        curlCommand: `curl --location --globoff --request DELETE '{{base}}/sales/credit_notes/{{credit_note_id}}' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
    ],
  },
  {
    page: 'manual-journals',
    heading: 'Manual Journals',
    url: '/api/docs/manual-journals',
    curl: [
      {
        heading: 'Create Manual Journal',
        curlCommand: `curl --location --globoff '{{base}}/manual-journals' \\
--header 'Content-Type: application/json' \\
--data '{
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
}'`,
      },
      {
        heading: 'Edit Manual Journal',
        curlCommand: `curl --location --globoff '{{base}}/manual-journals/{{manual_journal_id}}' \\
--header 'Content-Type: application/json' \\
--data '{
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
}'`,
      },
      {
        heading: 'Publish Manual Journal',
        curlCommand: `curl --location --globoff '{{base}}/manual-journals/{{manual_journal_id}}/publish' \\
--header 'Content-Type: application/json'`,
      },
      {
        heading: 'Delete Manual Journal',
        curlCommand: `curl --location --globoff --request DELETE '{{base}}/manual-journals/{{manual_journal_id}}'`,
      },
      {
        heading: 'Get Manual Journal',
        curlCommand: `curl --location --globoff '{{base}}/manual-journals/{{manual_journal_id}}'`,
      },
      {
        heading: 'List Manual Journals',
        curlCommand: `curl --location --globoff '{{base}}/manual-journals'`,
      },
    ],
  },
  {
    page: 'expenses',
    heading: 'Expenses',
    url: '/api/docs/expenses',
    curl: [],
  },
  {
    page: 'transactions-locking',
    heading: 'Transactions Locking',
    url: '/api/docs/transactions-locking',
    curl: [
      {
        heading: 'Submit Transactions Locking',
        curlCommand: `curl --location --globoff --request PUT '{{base}}/transactions-locking/lock' \\
--form 'module="all"' \\
--form 'lock_to_date="2029-02-25"' \\
--form 'reason="Reason description here..."'`,
      },
      {
        heading: 'Unlock Transactions Partially',
        curlCommand: `curl --location --globoff --request PUT '{{base}}/transactions-locking/unlock-partial'`,
      },
      {
        heading: 'Cancel Partial Transactions Locking',
        curlCommand: `curl --location --globoff --request PUT '{{base}}/transactions-locking/cancel-partial'`,
      },
      {
        heading: 'Cancel Full Transactions Locking',
        curlCommand: `curl --location --globoff --request PUT '{{base}}/transactions-locking/cancel-lock' \\
--form 'module="all"' \\
--form 'reason="Description..."'`,
      },
      {
        heading: 'Get Transactions Locking',
        curlCommand: `curl --location --globoff '{{base}}/transactions-locking/all'`,
      },
      {
        heading: 'List Transactions Locking',
        curlCommand: `curl --location --globoff '{{base}}/transactions-locking' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
    ],
  },
  {
    page: 'export',
    heading: 'Export',
    url: '/api/docs/export',
    curl: [
      {
        heading: 'Export Data',
        curlCommand: `curl --location --globoff '{{base}}/export' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--header 'Content-Type: application/json' \\
--data '{
    "resource": "Account"
}'`,
      },
    ],
  },
  {
    page: 'customers',
    heading: 'Customers',
    url: '/api/docs/customers',
    curl: [
      {
        heading: 'Create New Customer',
        curlCommand: `curl --location --globoff '{{base}}/customers' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--form 'customer_type="business"' \\
--form 'display_name="Ahmed Bouhuolia"'`,
      },
      {
        heading: 'Edit Customer',
        curlCommand: `curl --location --globoff --request POST '{{base}}/customers/{{customer_id}}' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--form 'customer_type="business"' \\
--form 'display_name="Updated Name"'`,
      },
      {
        heading: 'Delete Customer',
        curlCommand: `curl --location --globoff --request DELETE '{{base}}/customers/{{customer_id}}' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'List Customers',
        curlCommand: `curl --location --globoff '{{base}}/customers' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
      {
        heading: 'Edit Customer Opening Balance',
        curlCommand: `curl --location --globoff '{{base}}/customers/{{customer_id}}/opening_balance' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--form 'opening_balance="100"' \\
--form 'opening_balance_at="2020-02-02"' \\
--form 'opening_balance_exchange_rate="1"' \\
--form 'opneing_balance_branch_id="1"'`,
      },
      {
        heading: 'Get Customer Details',
        curlCommand: `curl --location --globoff '{{base}}/customers/{{customer_id}}' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`,
      },
    ],
  },
  {
    page: 'financial-statements',
    heading: 'Financial Statements',
    url: '/api/docs/financial-statements',
    curl: [
      {
        heading: 'Balance Sheet',
        curlCommand: `curl --location --globoff '{{base}}/financial_statements/balance_sheet' \\
--header 'Accept: application/xlsx' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`
      },
      {
        heading: 'Trial Balance Sheet',
        curlCommand: `curl --location --globoff '{{base}}/financial_statements/trial_balance_sheet' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`
      },
      {
        heading: 'Cashflow Sheet',
        curlCommand: `curl --location --globoff '{{base}}/financial_statements/cash-flow' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`
      },
      {
        heading: 'Receivable Aging Summary',
        curlCommand: `curl --location --globoff '{{base}}/financial_statements/receivable_aging_summary' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--header 'Accept: application/json+table'`
      },
      {
        heading: 'Payable Aging Summary',
        curlCommand: `curl --location --globoff '{{base}}/financial_statements/payable_aging_summary' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--header 'Accept: application/json+table'`
      },
      {
        heading: 'General Ledger',
        curlCommand: `curl --location --globoff '{{base}}/financial_statements/general_ledger' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--header 'Accept: application/xlsx'`
      },
      {
        heading: 'Journal',
        curlCommand: `curl --location --globoff '{{base}}/financial_statements/journal' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--header 'Accept: application/json+table'`
      },
      {
        heading: 'Sales Tax Liability Summary',
        curlCommand: `curl --location --globoff '{{base}}/financial_statements/sales-tax-liability-summary' \\
--header 'Accept: application/json+table' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`
      },
      {
        heading: 'Transactions by Customers',
        curlCommand: `curl --location --globoff '{{base}}/financial_statements/transactions-by-customers' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}' \\
--header 'Accept: application/pdf'`
      },
      {
        heading: 'Transactions by Vendors',
        curlCommand: `curl --location --globoff '{{base}}/financial_statements/transactions-by-vendors' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`
      },
      {
        heading: 'Vendors Balance Summary',
        curlCommand: `curl --location --globoff '{{base}}/financial_statements/vendor-balance-summary' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`
      },
      {
        heading: 'Customers Balance Summary',
        curlCommand: `curl --location --globoff '{{base}}/financial_statements/customer-balance-summary' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`
      },
      {
        heading: 'Sales By Items',
        curlCommand: `curl --location --globoff '{{base}}/financial_statements/sales-by-items' \\
--header 'Accept: application/json+table' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`
      },
      {
        heading: 'Purchases By Items',
        curlCommand: `curl --location --globoff '{{base}}/financial_statements/purchases-by-items' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`
      },
      {
        heading: 'Inventory Valuation',
        curlCommand: `curl --location --globoff '{{base}}/financial_statements/inventory-valuation' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`
      },
      {
        heading: 'Inventory Item Details',
        curlCommand: `curl --location --globoff '{{base}}/financial_statements/inventory-item-details' \\
--header 'x-access-token: {{token}}' \\
--header 'organization-id: {{organization_id}}'`
      }
    ],
  },
  {
    page: 'import',
    heading: 'Import',
    url: '/api/docs/import',
    curl: [],
  },
  {
    page: 'inventory-adjustments',
    heading: 'Inventory Adjustments',
    url: '/api/docs/inventory-adjustments',
    curl: [],
  },
  {
    page: 'sale-invoices',
    heading: 'Sale Invoices',
    url: '/api/docs/sale-invoices',
    curl: [],
  },
  {
    page: 'vendors',
    heading: 'Vendors',
    url: '/api/docs/vendors',
    curl: [],
  },
  {
    page: 'sale-receipts',
    heading: 'Sale Receipts',
    url: '/api/docs/sale-receipts',
    curl: [],
  },
  {
    page: 'pdf-templates',
    heading: 'PDF Templates',
    url: '/api/docs/pdf-templates',
    curl: [],
  },
  {
    page: 'warehouses',
    heading: 'Warehouses',
    url: '/api/docs/warehouses',
    curl: [],
  },
  {
    page: 'exchange-rate',
    heading: 'Exchange Rate',
    url: '/api/docs/exchange-rate',
    curl: [],
  },
  {
    page: 'items',
    heading: 'Items',
    url: '/api/docs/items',
    curl: [],
  },
  {
    page: 'vendor-credits',
    heading: 'Vendor Credits',
    url: '/api/docs/vendor-credits',
    curl: [],
  },
];

export default DocsSidebarConstantText;
