import PaystackPop from '@paystack/inline-js'
import type { PaystackTransactionResult } from '~/types/products'
const config = useRuntimeConfig()

export const usePay = () => {
  const paystack = (email: string, amount: number, ref: string) => {
    return new Promise((resolve, reject) => {
      const paystack = new PaystackPop()
      paystack.newTransaction({
        key: config.public.paystackKey,
        email,
        amount: Math.round(amount * 100),
        currency: 'NGN',
        ref,
        onSuccess: (transaction: PaystackTransactionResult) => {
          resolve(transaction)
        },
        onCancel: () => {
          reject(new Error('Payment Cancelled'))
        }
      })
    })
  }

  return reactive({
    paystack,
  })
}
