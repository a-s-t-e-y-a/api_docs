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
        heading: 'Update Sale Estimate',
        curlCommand: `curl --location --globoff --request POST '{{base}}/sales/estimates/{{sale_estimate_id}}' \\
--header 'x-access-token: {{token}}' \\
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
        curlCommand: `curl --location --globoff '{{base}}/sales/estimates/{{sale_estimate_id}}' \\
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
    curl: [],
  },
  {
    page: 'accounts',
    heading: 'Accounts',
    url: '/api/docs/accounts',
    curl: [],
  },
  {
    page: 'bank-rules',
    heading: 'Bank Rules',
    url: '/api/docs/bank-rules',
    curl: [],
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
    curl: [],
  },
  {
    page: 'branches',
    heading: 'Branches',
    url: '/api/docs/branches',
    curl: [],
  },
  {
    page: 'banking-plaid',
    heading: 'Banking Plaid',
    url: '/api/docs/banking-plaid',
    curl: [],
  },
  {
    page: 'banking',
    heading: 'Banking',
    url: '/api/docs/banking',
    curl: [],
  },
  {
    page: 'credit-notes',
    heading: 'Credit Notes',
    url: '/api/docs/credit-notes',
    curl: [],
  },
  {
    page: 'manual-journals',
    heading: 'Manual Journals',
    url: '/api/docs/manual-journals',
    curl: [],
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
    curl: [],
  },
  {
    page: 'export',
    heading: 'Export',
    url: '/api/docs/export',
    curl: [],
  },
  {
    page: 'customers',
    heading: 'Customers',
    url: '/api/docs/customers',
    curl: [],
  },
  {
    page: 'financial-statements',
    heading: 'Financial Statements',
    url: '/api/docs/financial-statements',
    curl: [],
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
