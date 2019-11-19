export default {
  navigation: {
    // key : 'singular | plural'
    dashboard: 'Dashboard',
    customers: 'Customers',
    items: 'Items',
    invoices: 'Invoices',
    expenses: 'Expenses',
    estimates: 'Estimates',
    payments: 'Payments',
    reports: 'Reports',
    settings: 'Settings',
    logout: 'Logout'
  },
  general: {
    view_pdf: 'View PDF',
    download_pdf: 'Download PDF',
    save: 'Save',
    cancel: 'Cancel',
    update: 'Update',
    download: 'Download',
    from_date: 'From Date',
    to_date: 'To Date',
    from: 'From',
    to: 'To',
    go_back: 'Go Back',
    back_to_login: 'Back to Login?',
    home: 'Home',
    filter: 'Filter',
    delete: 'Delete',
    edit: 'Edit',
    view: 'View',
    add_new_item: 'Add New Item',
    clear_all: 'Clear All',
    showing: 'Showing',
    of: 'of',
    actions: 'Actions',
    subtotal: 'SUBTOTAL',
    discount: 'DISCOUNT',
    fixed: 'Fixed',
    percentage: 'Percentage',
    tax: 'TAX',
    total_amount: 'TOTAL AMOUNT',
    bill_to: 'Bill to',
    ship_to: 'Ship to',
    due: 'Due',
    draft: 'Draft',
    sent: 'Sent',
    all: 'All',
    select_all: 'Select All',
    choose_file: 'Click here to choose a file',
    choose_template: 'Choose a template',
    choose: 'Choose',
    remove: 'Remove',
    powered_by: 'Powered by',
    bytefury: 'Bytefury',
    select_a_status: 'Select a status',
    select_a_tax: 'Select a tax',
    search: 'Search',
    are_you_sure: 'Are you sure?',
    list_is_empty: 'List is empty.',
    no_tax_found: 'No tax found!',
    four_zero_four: '404',
    you_got_lost: 'Whoops! You got Lost!',
    go_home: 'Go Home',

    setting_updated: 'Setting updated successfully',
    select_state: 'Select state',
    select_country: 'Select Country',
    select_city: 'Select City',
    street_1: 'Street 1',
    street_2: 'Street 2',
    action_failed: 'Action Failed'
  },
  dashboard: {
    select_year: 'Select year',
    cards: {
      due_amount: 'Amount Due',
      customers: 'Customers',
      invoices: 'Invoices',
      estimates: 'Estimates'
    },
    chart_info: {
      total_sales: 'Sales',
      total_receipts: 'Receipts',
      total_expense: 'Expenses',
      net_income: 'Net Income',
      year: 'Select year'
    },
    weekly_invoices: {
      title: 'Weekly Invoices'
    },
    monthly_chart: {
      title: 'Sales & Expenses'
    },
    recent_invoices_card: {
      title: 'Due Invoices',
      due_on: 'Due On',
      customer: 'Customer',
      amount_due: 'Amount Due',
      actions: 'Actions',
      view_all: 'View All'
    },
    recent_estimate_card: {
      title: 'Recent Estimates',
      date: 'Date',
      customer: 'Customer',
      amount_due: 'Amount Due',
      actions: 'Actions',
      view_all: 'View All'
    }
  },
  tax_types: {
    name: 'Name',
    description: 'Description',
    percent: 'Percent',
    compound_tax: 'Compound Tax'
  },
  customers: {
    title: 'Customers',
    add_customer: 'Add Customer',
    contacts_list: 'Customer List',
    name: 'Name',
    display_name: 'Display Name',
    primary_contact_name: 'Primary Contact Name',
    contact_name: 'Contact Name',
    amount_due: 'Amount Due',
    email: 'Email',
    address: 'Address',
    phone: 'Phone',
    website: 'Website',
    country: 'Country',
    state: 'State',
    city: 'City',
    zip_code: 'Zip Code',
    added_on: 'Added On',
    action: 'Action',
    password: 'Password',
    street_number: 'Street Number',
    primary_currency: 'Primary Currency',
    add_new_customer: 'Add New Customer',
    save_customer: 'Save Customer',
    update_customer: 'Update Customer',
    customer: 'Customer | Customers',
    new_customer: 'New Customer',
    edit_customer: 'Edit Customer',
    basic_info: 'Basic Info',
    billing_address: 'Billing Address',
    shipping_address: 'Shipping Address',
    copy_billing_address: 'Copy from Billing',
    no_customers: 'No customers yet!',
    no_customers_found: 'No customers found!',
    list_of_customers: 'This section will contain the list of customers.',
    primary_display_name: 'Primary Display Name',
    select_currency: 'Select currency',
    select_a_customer: 'Select a customer',
    type_or_click: 'Type or click to select',

    confirm_delete: 'You will not be able to recover this Customer | You will not be able to recover these Customers',
    created_message: 'Customer created successfully',
    updated_message: 'Customer updated successfully',
    deleted_message: 'Customer deleted successfully | Customers deleted successfully'
  },
  items: {
    title: 'Items',
    items_list: 'Items List',
    name: 'Name',
    unit: 'Unit',
    description: 'Description',
    added_on: 'Added On',
    price: 'Price',
    date_of_creation: 'Date Of Creation',
    action: 'Action',
    add_item: 'Add Item',
    save_item: 'Save Item',
    update_item: 'Update Item',
    item: 'Item | Items',
    add_new_item: 'Add New Item',
    new_item: 'New Item',
    edit_item: 'Edit Item',
    no_items: 'No items yet!',
    list_of_items: 'This section will contain the list of items.',
    select_a_unit: 'select unit',

    item_attached_message: 'Cannot delete an item which is already in use',
    confirm_delete: 'You will not be able to recover this Item | You will not be able to recover these Items',
    created_message: 'Item created successfully',
    updated_message: 'Item updated successfully',
    deleted_message: 'Item deleted successfully | Items deleted successfully'
  },
  estimates: {
    title: 'Estimates',
    estimate: 'Estimate | Estimates',
    estimates_list: 'Estimates List',
    days: '{days} Days',
    months: '{months} Month',
    years: '{years} Year',
    all: 'All',
    paid: 'Paid',
    unpaid: 'Unpaid',
    customer: 'CUSTOMER',
    ref_no: 'REF NO.',
    number: 'NUMBER',
    amount_due: 'AMOUNT DUE',
    partially_paid: 'Partially Paid',
    total: 'Total',
    discount: 'Discount',
    sub_total: 'Sub Total',
    estimate_number: 'Estimate Number',
    ref_number: 'Ref Number',
    contact: 'Contact',
    add_item: 'Add an Item',
    date: 'Date',
    due_date: 'Due Date',
    expiry_date: 'Expiry Date',
    status: 'Status',
    add_tax: 'Add Tax',
    amount: 'Amount',
    action: 'Action',
    notes: 'Notes',
    tax: 'Tax',
    estimate_template: 'Template',
    convert_to_invoice: 'Convert to Invoice',
    mark_as_sent: 'Mark as Sent',
    send_estimate: 'Send Estimate',
    record_payment: 'Record Payment',
    add_estimate: 'Add Estimate',
    save_estimate: 'Save Estimate',
    confirm_conversion: 'You want to convert this Estimate into Invoice?',
    conversion_message: 'Invoice created successful',
    confirm_send_estimate: 'This estimate will be sent via email to the customer',
    confirm_mark_as_sent: 'This estimate will be marked as sent',
    confirm_mark_as_accepted: 'This estimate will be marked as Accepted',
    confirm_mark_as_rejected: 'This estimate will be marked as Rejected',
    no_matching_estimates: 'There are no matching estimates!',
    mark_as_sent_successfully: 'Estimate marked as sent successfully',
    send_estimate_successfully: 'Estimate sent successfully',
    errors: {
      required: 'Field is required'
    },
    accepted: 'Accepted',
    sent: 'Sent',
    draft: 'Draft',
    declined: 'Declined',
    new_estimate: 'New Estimate',
    add_new_estimate: 'Add New Estimate',
    update_Estimate: 'Update Estimate',
    edit_estimate: 'Edit Estimate',
    items: 'items',
    Estimate: 'Estimate | Estimates',
    add_new_tax: 'Add New Tax',
    no_estimates: 'No estimates yet!',
    list_of_estimates: 'This section will contain the list of estimates.',
    mark_as_rejected: 'Mark as rejected',
    mark_as_accepted: 'Mark as accepted',

    marked_as_accepted_message: 'Estimate marked as accepted',
    marked_as_rejected_message: 'Estimate marked as rejected',
    confirm_delete: 'You will not be able to recover this Estimate | You will not be able to recover these Estimates',
    created_message: 'Estimate created successfully',
    updated_message: 'Estimate updated successfully',
    deleted_message: 'Estimate deleted successfully | Estimates deleted successfully',
    user_email_does_not_exist: 'User email does not exist',
    something_went_wrong: 'something went wrong',
    item: {
      title: 'Item Title',
      description: 'Description',
      quantity: 'Quantity',
      price: 'Price',
      discount: 'Discount',
      total: 'Total',
      total_discount: 'Total Discount',
      sub_total: 'Sub Total',
      tax: 'Tax',
      amount: 'Amount',
      select_an_item: 'Type or click to select an item',
      type_item_description: 'Type Item Description (optional)'
    }
  },
  invoices: {
    title: 'Invoices',
    invoices_list: 'Invoices List',
    days: '{days} Days',
    months: '{months} Month',
    years: '{years} Year',
    all: 'All',
    paid: 'Paid',
    unpaid: 'Unpaid',
    customer: 'CUSTOMER',
    paid_status: 'PAID STATUS',
    ref_no: 'REF NO.',
    number: 'NUMBER',
    amount_due: 'AMOUNT DUE',
    partially_paid: 'Partially Paid',
    total: 'Total',
    discount: 'Discount',
    sub_total: 'Sub Total',
    invoice: 'Invoice | Invoices',
    invoice_number: 'Invoice Number',
    ref_number: 'Ref Number',
    contact: 'Contact',
    add_item: 'Add an Item',
    date: 'Date',
    due_date: 'Due Date',
    status: 'Status',
    add_tax: 'Add Tax',
    amount: 'Amount',
    action: 'Action',
    notes: 'Notes',
    view: 'View',
    send_invoice: 'Send Invoice',
    invoice_template: 'Invoice Template',
    template: 'Template',
    mark_as_sent: 'Mark as sent',
    confirm_send_invoice: 'This invoice will be sent via email to the customer',
    invoice_mark_as_sent: 'This invoice will be marked as sent',
    confirm_send: 'This invoice will be sent via email to the customer',
    invoice_date: 'Invoice Date',
    record_payment: 'Record Payment',
    add_new_invoice: 'Add New Invoice',
    update_expense: 'Update Expense',
    edit_invoice: 'Edit Invoice',
    new_invoice: 'New Invoice',
    save_invoice: 'Save Invoice',
    update_invoice: 'Update Invoice',
    add_new_tax: 'Add New Tax',
    no_invoices: 'No Invoices yet!',
    list_of_invoices: 'This section will contain the list of invoices.',
    select_invoice: 'Select Invoice',
    no_matching_invoices: 'There are no matching invoices!',
    mark_as_sent_successfully: 'Invoice marked as sent successfully',
    send_invoice_successfully: 'Invoice sent successfully',
    item: {
      title: 'Item Title',
      description: 'Description',
      quantity: 'Quantity',
      price: 'Price',
      discount: 'Discount',
      total: 'Total',
      total_discount: 'Total Discount',
      sub_total: 'Sub Total',
      tax: 'Tax',
      amount: 'Amount',
      select_an_item: 'Type or click to select an item',
      type_item_description: 'Type Item Description (optional)'
    },

    payment_attached_message: 'One of the selected invoices already have a payment attached to it. Make sure to delete the attached payments first in order to go ahead with the removal',
    confirm_delete: 'You will not be able to recover this Invoice | You will not be able to recover these Invoices',
    created_message: 'Invoice created successfully',
    updated_message: 'Invoice updated successfully',
    deleted_message: 'Invoice deleted successfully | Invoices deleted successfully',
    marked_as_sent_message: 'Invoice marked as sent successfully',
    user_email_does_not_exist: 'User email does not exist',
    something_went_wrong: 'something went wrong',
    invalid_due_amount_message: 'Total Invoice amount cannot be less than total paid amount for this Invoice. Please update the invoice or delete the associated payments to continue.'
  },
  credit_notes: {
    title: 'Credit Notes',
    credit_notes_list: 'Credit Notes List',
    // Fields
    credit_notes: 'Credit Notes',
    contact: 'Contact',
    date: 'Date',
    amount: 'Amount',
    action: 'Action',
    credit_number: 'Credit Number',
    notes: 'Notes',
    confirm_delete: 'Do you want to delete this credit note?',
    item: {
      title: 'Item Title',
      description: 'Description',
      quantity: 'Quantity',
      price: 'Price',
      discount: 'Discount',
      total: 'Total',
      total_discount: 'Total Discount',
      sub_total: 'Sub Total',
      tax: 'Tax'
    }
  },
  payments: {
    title: 'Payments',
    payments_list: 'Payments List',
    record_payment: 'Record Payment',
    // Fields
    customer: 'Customer',
    date: 'Date',
    amount: 'Amount',
    action: 'Action',
    payment_number: 'Payment Number',
    payment_mode: 'Payment Mode',
    invoice: 'Invoice',
    note: 'Note',
    add_payment: 'Add Payment',
    new_payment: 'New Payment',
    edit_payment: 'Edit Payment',
    view_payment: 'View Payment',
    add_new_payment: 'Add New Payment',
    save_payment: 'Save Payment',
    update_payment: 'Update Payment',
    payment: 'Payment | Payments',
    no_payments: 'No payments yet!',
    list_of_payments: 'This section will contain the list of payments.',
    select_payment_mode: 'Select payment mode',

    confirm_delete: 'You will not be able to recover this Payment | You will not be able to recover these Payments',
    created_message: 'Payment created successfully',
    updated_message: 'Payment updated successfully',
    deleted_message: 'Payment deleted successfully | Payments deleted successfully',
    invalid_amount_message: 'Payment amount is invalid'
  },
  expenses: {
    title: 'Expenses',
    expenses_list: 'Expenses List',
    // Fields
    expense_title: 'Title',
    contact: 'Contact',
    category: 'Category',
    from_date: 'From Date',
    to_date: 'To Date',
    expense_date: 'Date',
    description: 'Description',
    receipt: 'Receipt',
    amount: 'Amount',
    action: 'Action',
    note: 'Note',
    category_id: 'Category Id',
    date: 'Expense Date',
    add_expense: 'Add Expense',
    add_new_expense: 'Add New Expense',
    save_expense: 'Save Expense',
    update_expense: 'Update Expense',
    download_receipt: 'Download Receipt',
    edit_expense: 'Edit Expense',
    new_expense: 'New Expense',
    expense: 'Expense | Expenses',
    no_expenses: 'No expenses yet!',
    list_of_expenses: 'This section will contain the list of expenses.',

    confirm_delete: 'You will not be able to recover this Expense | You will not be able to recover these Expenses',
    created_message: 'Expense created successfully',
    updated_message: 'Expense updated successfully',
    deleted_message: 'Expense deleted successfully | Expenses deleted successfully',
    categories: {
      categories_list: 'Categories List',
      title: 'Title',
      name: 'Name',
      description: 'Description',
      amount: 'Amount',
      actions: 'Actions',
      add_category: 'Add Category',
      new_category: 'New Category',
      category: 'Category | Categories',
      select_a_category: 'Select a category'
    }
  },
  login: {
    email: 'Email',
    password: 'Password',
    forgot_password: 'Forgot Password?',
    or_signIn_with: 'or Sign in with:',
    login: 'Login',
    register: 'Register',
    reset_password: 'Reset Password',
    password_reset_successfully: 'Password Reset Successfully',
    enter_email: 'Enter email',
    enter_password: 'Enter Password',
    retype_password: 'Retype Password',
    login_placeholder: 'mail@example.com'
  },
  reports: {
    title: 'Report',
    from_date: 'From Date',
    to_date: 'To Date',
    status: 'Status',
    paid: 'Paid',
    unpaid: 'Unpaid',
    download_pdf: 'Download PDF',
    view_pdf: 'View PDF',
    update_report: 'Update Report',
    report: 'Report | Reports',
    profit_loss: {
      profit_loss: 'Profit & Loss',
      to_date: 'To Date',
      from_date: 'From Date',
      date_range: 'Select Date Range'
    },
    sales: {
      sales: 'Sales',
      date_range: 'Select Date Range',
      to_date: 'To Date',
      from_date: 'From Date',
      report_type: 'Report Type'
    },
    taxes: {
      taxes: 'Taxes',
      to_date: 'To Date',
      from_date: 'From Date',
      date_range: 'Select Date Range'
    },
    errors: {
      required: 'Field is required'
    },
    invoices: {
      invoice: 'Invoice',
      invoice_date: 'Invoice Date',
      due_date: 'Due Date',
      amount: 'Amount',
      contact_name: 'Contact Name',
      status: 'Status'
    },
    estimates: {
      estimate: 'Estimate',
      estimate_date: 'Estimate Date',
      due_date: 'Due Date',
      estimate_number: 'Estimate Number',
      ref_number: 'Ref Number',
      amount: 'Amount',
      contact_name: 'Contact Name',
      status: 'Status'
    },
    expenses: {
      expenses: 'Expenses',
      category: 'Category',
      date: 'Date',
      amount: 'Amount',
      to_date: 'To Date',
      from_date: 'From Date',
      date_range: 'Select Date Range'
    }
  },
  settings: {
    menu_title: {
      account_settings: 'Account Settings',
      company_information: 'Company Information',
      preferences: 'Preferences',
      notifications: 'Notifications',
      tax_types: 'Tax Types',
      expense_category: 'Expense Categories',
      update_app: 'Update App'
    },
    title: 'Settings',
    setting: 'Settings | Settings',
    general: 'General',
    language: 'Language',
    primary_currency: 'Primary Currency',
    timezone: 'Time Zone',
    date_format: 'Date Format',
    currencies: {
      title: 'Currencies',
      currency: 'Currency | Currencies',
      currencies_list: 'Currencies List',
      select_currency: 'Select Currency',
      name: 'Name',
      code: 'Code',
      symbol: 'Symbol',
      precision: 'Precision',
      thousand_separator: 'Thousand Separator',
      decimal_separator: 'Decimal Separator',
      position: 'Position',
      position_of_symbol: 'Position Of Symbol',
      right: 'Right',
      left: 'Left',
      action: 'Action',
      add_currency: 'Add Currency'
    },
    mail: {
      host: 'Mail Host',
      port: 'Mail Port',
      driver: 'Mail Driver',
      secret: 'Secret',
      sparkpost_secret: 'Sparkpost Secret',
      mailgun_secret: 'Mailgun Secret',
      mailgun_domain: 'Domain',
      mailgun_endpoint: 'Mailgun Endpoint',
      ses_secret: 'SES Secret',
      ses_key: 'SES Key',
      mandrill_secret: 'Mandrill Secret',
      password: 'Mail Password',
      username: 'Mail Username',
      mail_config: 'Mail Configuration',
      from_name: 'From Mail Name',
      from_mail: 'From Mail Address',
      encryption: 'Mail Encryption',
      mail_config_desc: 'Below details will be used to update the mail environment. Also you can change the details anytime after logging in.'
    },
    pdf: {
      title: 'PDF Setting',
      footer_text: 'Footer Text',
      pdf_layout: 'PDF Layout'
    },
    company_info: {
      company_info: 'Company info',
      company_name: 'Company Name',
      company_logo: 'Company Logo',
      section_description: 'Information about your company that will be displayed on invoices, estimates and other documents created by Crater.',
      phone: 'Phone',
      country: 'Country',
      state: 'State',
      city: 'City',
      address: 'Address',
      zip: 'Zip',
      save: 'Save',
      updated_message: 'Company information updated successfully'
    },
    account_settings: {
      name: 'Name',
      email: 'Email',
      password: 'Password',
      confirm_password: 'Confirm Password',
      account_settings: 'Account Settings',
      save: 'Save',
      section_description: 'You can update your name, email & password using the form below.',
      updated_message: 'Account Settings updated successfully'
    },
    user_profile: {
      name: 'Name',
      email: 'Email',
      password: 'Password',
      confirm_password: 'Confirm Password'
    },
    notification: {
      title: 'Notification',
      email: 'Send Notifications to',
      description: 'Which email notifications would you like to receive when something changes?',
      invoice_viewed: 'Invoice viewed',
      invoice_viewed_desc: 'When your customer views the invoice sent via crater dashboard.',
      estimate_viewed: 'Estimate viewed',
      estimate_viewed_desc: 'When your customer views the estimate sent via crater dashboard.',
      save: 'Save',
      email_save_message: 'Email saved successfully',
      please_enter_email: 'Please Enter Email'
    },
    tax_types: {
      title: 'Tax Types',
      add_tax: 'Add Tax',
      description: 'You can add or Remove Taxes as you please. Crater supports Taxes on Individual Items as well as on the invoice.',
      add_new_tax: 'Add New Tax',
      tax_settings: 'Tax Settings',
      tax_per_item: 'Tax Per Item',
      tax_name: 'Tax Name',
      compound_tax: 'Compound Tax',
      percent: 'Percent',
      action: 'Action',
      tax_setting_description: 'Enable this if you want to add taxes to individual invoice items. By default, taxes are added directly to the invoice.',
      created_message: 'Sales tax created successfully',
      updated_message: 'Sales tax updated successfully',
      deleted_message: 'Sales tax deleted successfully',
      confirm_delete: 'You will not be able to recover this Tax Type',
      already_in_use: 'Tax is already in use'
    },
    expense_category: {
      title: 'Expense Categories',
      action: 'Action',
      description: 'Categories are required for adding expense entries. You can Add or Remove these categories according to your preference.',
      add_new_category: 'Add New Category',
      category_name: 'Category Name',
      category_description: 'Description',
      created_message: 'Category created successfully',
      deleted_message: 'Expense category deleted successfully',
      updated_message: 'Expense category updated successfully',
      confirm_delete: 'You will not be able to recover this Expense Category',
      already_in_use: 'Category is already in use'
    },
    preferences: {
      currency: 'Currency',
      language: 'Language',
      time_zone: 'Time Zone',
      fiscal_year: 'Financial Year',
      date_format: 'Date Format',
      discount_setting: 'Discount Setting',
      discount_per_item: 'Discount Per Item ',
      discount_setting_description: 'Enable this if you want to add Discount to individual invoice items. By default, Discount are added directly to the invoice.',
      save: 'Save',
      preference: 'Preference | Preferences',
      general_settings: 'Default preferences for the system.',
      updated_message: 'Preferences updated successfully',
      select_language: 'select language',
      select_time_zone: 'select Time Zone',
      select_date_formate: 'select Date Formate',
      select_financial_year: 'select financial year'
    },
    update_app: {
      title: 'Update App',
      description: 'You can easily update Crater by checking for a new update by clicking the button below',
      check_update: 'Check for updates',
      avail_update: 'New Update available',
      next_version: 'Next version',
      update: 'Update Now',
      update_progress: 'Update in progress...',
      progress_text: 'It will just take a few minutes. Please do not refresh the screen or close the window before the update finishes',
      update_success: 'App has been updated successfully',
      latest_message: 'No update available! You are on the latest version.',
      current_version: 'Current Version'
    }
  },
  wizard: {
    account_info: 'Account Information',
    account_info_desc: 'Below details will be used to create the main Administrator account. Also you can change the details anytime after logging in.',
    name: 'Name',
    email: 'Email',
    password: 'Password',
    confirm_password: 'Confirm Password',
    save_cont: 'Save & Continue',
    company_info: 'Company Information',
    company_info_desc: 'This information will be displayed on invoices. Note that you can edit this later on settings page.',
    company_name: 'Company Name',
    company_logo: 'Company Logo',
    logo_preview: 'Logo Preview',
    preferences: 'Preferences',
    preferences_desc: 'Default preferences for the system.',
    country: 'Country',
    state: 'State',
    city: 'City',
    address: 'Address',
    street: 'Street1' | 'Street2',
    phone: 'Phone',
    zip_code: 'Zip Code',
    go_back: 'Go Back',
    currency: 'Currency',
    language: 'Language',
    time_zone: 'Time Zone',
    fiscal_year: 'Financial Year',
    date_format: 'Date Format',
    from_address: 'From Address',
    username: 'Username',
    next: 'Next',
    continue: 'Continue',
    skip: 'Skip',
    database: {
      database: 'Site URL & Database',
      connection: 'Database Connection',
      host: 'Database Host',
      port: 'Database Port',
      password: 'Database Password',
      app_url: 'App URL',
      username: 'Database Username',
      db_name: 'Database Name',
      desc: 'Create a database on your server and set the credentials using the form below.'
    },
    permissions: {
      permissions: 'Permissions',
      permission_desc: 'Below is the list of folder permissions which are required in order for the app to work. If the permission check fails, make sure to update your folder permissions.'
    },
    mail: {
      host: 'Mail Host',
      port: 'Mail Port',
      driver: 'Mail Driver',
      secret: 'Secret',
      sparkpost_secret: 'Sparkpost Secret',
      mailgun_secret: 'Mailgun Secret',
      mailgun_domain: 'Domain',
      mailgun_endpoint: 'Mailgun Endpoint',
      ses_secret: 'SES Secret',
      ses_key: 'SES Key',
      mandrill_secret: 'Mandrill Secret',
      password: 'Mail Password',
      username: 'Mail Username',
      mail_config: 'Mail Configuration',
      from_name: 'From Mail Name',
      from_mail: 'From Mail Address',
      encryption: 'Mail Encryption',
      mail_config_desc: 'Below details will be used to update the mail environment. Also you can change the details anytime after logging in.'
    },
    req: {
      system_req: 'System Requirements',
      php_req_version: 'Php (version {version} required)',
      check_req: 'Check Requirements',
      system_req_desc: 'Crater has a few server requirements. Make sure that your server has the required php version and all the extensions mentioned below.'
    },
    errors: {
      migrate_failed: 'Migrate Failed',
      database_variables_save_error: 'Unable to connect to the DB with Provided Values.',
      mail_variables_save_error: 'Email configuration failed.',
      connection_failed: 'Database connection failed',
      database_should_be_empty: 'Database should be empty'
    },
    success: {
      mail_variables_save_successfully: 'Email configured successfully',
      database_variables_save_successfully: 'Database configured successfully.'
    }
  },
  layout_login: {
    copyright_crater: 'Copyright @ Crater - 2019',
    super_simple_invoicing: 'Super Simple Invoicing',
    for_freelancer: 'for Freelancers &',
    small_businesses: 'Small Businesses ',
    crater_help: 'Crater helps you track expenses, record payments & generate beautiful',
    invoices_and_estimates: 'invoices & estimates with ability to choose multiple templates.'
  },
  validation: {
    invalid_url: 'Invalid url (ex: http://www.crater.com)',
    required: 'Field is required',
    email_incorrect: 'Incorrect Email.',
    email_already_taken: 'The email has already been taken.',
    email_does_not_exist: "User with given email doesn't exist",
    send_reset_link: 'Send Reset Link',
    not_yet: 'Not yet? Send it again',
    password_min_length: 'Password must contain {count} characters',
    name_min_length: 'Name must have at least {count} letters.',
    enter_valid_tax_rate: 'Enter valid tax rate',
    numbers_only: 'Numbers Only.',
    characters_only: 'Characters Only.',
    password_incorrect: 'Passwords must be identical',
    password_length: 'Password must be {count} character long.',
    qty_must_greater_than_zero: 'Quantity must be greater than zero.',
    price_greater_than_zero: 'Price must be greater than zero.',
    payment_greater_than_zero: 'Payment must be greater than   zero.',
    payment_greater_than_due_amount: 'Entered Payment is more than due amount of this invoice.',
    quantity_maxlength: 'Quantity should not be greater than 20 digits.',
    price_maxlength: 'Price should not be greater than 20 digits.',
    price_minvalue: 'Price should be greater than 0.',
    amount_maxlength: 'Amount should not be greater than 20 digits.',
    amount_minvalue: 'Amount should be greater than 0.',
    description_maxlength: 'Description should not be greater than 255 characters.',
    maximum_options_error: 'Maximum  of {max} options selected. First remove a selected option to select another.',
    notes_maxlength: 'Notes should not be greater than 255 characters.',
    address_maxlength: 'Address should not be greater than 255 characters.',
    ref_number_maxlength: 'Ref Number should not be greater than 255 characters.'
  }
}
