/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly VITE_GOOGLE_SHEETS_ENDPOINT?: string;
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}


