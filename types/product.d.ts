export interface PaystackTransactionResult {
  reference: string
  trans: string
  status: string
  message: string
  transaction: string
  trxref: string
  redirecturl: string
}

export interface PaystackTransaction {
  status: boolean
  message: string
  data: {
    id: number
    domain: string
    status: string
    reference: string
    receipt_number: null | string
    amount: number
    message: null | string
    gateway_response: string
    helpdesk_link: null | string
    paid_at: string
    created_at: string
    channel: string
    currency: string
    ip_address: string
    metadata: {
      referrer: string
    }
    log: {
      start_time: number
      time_spent: number
      attempts: number
      errors: number
      success: boolean
      mobile: boolean
      input: any[]
      history: {
        type: string
        message: string
        time: number
      }[]
    }
    fees: number
    fees_split: null
    authorization: {
      authorization_code: string
      bin: string
      last4: string
      exp_month: string
      exp_year: string
      channel: string
      card_type: string
      bank: string
      country_code: string
      brand: string
      reusable: boolean
      signature: string
      account_name: null
      receiver_bank_account_number: null
      receiver_bank: null
    }
    customer: {
      id: number
      first_name: string
      last_name: string
      email: string
      customer_code: string
      phone: string
      metadata: null
      risk_action: string
      international_format_phone: null
    }
    plan: {}
    subaccount: {}
    split: {}
    order_id: null
    paidAt: string
    createdAt: string
    requested_amount: number
    pos_transaction_data: null
    source: {
      type: string
      source: string
      identifier: null
    }
    fees_breakdown: null
  }
}

export interface PaystackTransactionResult {
  reference: string
  trans: string
  status: string
  message: string
  transaction: string
  trxref: string
  redirecturl: string
}
