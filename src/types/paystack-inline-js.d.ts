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


