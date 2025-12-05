/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PAYSTACK_PUBLIC_KEY?: string;
    readonly VITE_PAYPAL_CLIENT_ID?: string;
    readonly VITE_PAYPAL_BACKEND_URL?: string;
    readonly VITE_SUCCESS_URL?: string;
    readonly VITE_FAIL_URL?: string;
}
