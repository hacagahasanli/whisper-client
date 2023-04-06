/// <reference types="vite/client" />
/// <reference types="vite-plugin-react" />

//that is the just example
declare global {
    interface ImportMetaEnv {
        API_URL: string;
    }
}