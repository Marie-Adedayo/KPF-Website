declare module '@paystack/inline-js' {
    export default class PaystackPop {
        newTransaction(options: {
            key: string;
            email: string;
            amount: number; // kobo
            reference?: string;
            currency?: string;
            metadata?: any;
            onSuccess?: (transaction: { reference: string }) => void;
            onCancel?: () => void;
            channels?: string[];
            label?: string;
            firstname?: string;
            lastname?: string;
        }): void;
    }
}
/* 
declare module "@paystack/inline-js" {
  interface PaystackPopOptions {
    key: string;
    email: string;
    amount: number;
    ref?: string;
    currency?: string;
    metadata?: Record<string, any>;
    callback?: (response: any) => void;
    onClose?: () => void;
  }

  class PaystackPop {
    static setup(options: PaystackPopOptions): PaystackPop;
    openIframe(): void;
  }

  export = PaystackPop;
}



 */