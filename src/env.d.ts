interface ImportMetaEnv {
  readonly WHATSAPP_URL: string;
  readonly INSTAGRAM_URL: string;
  readonly LINKEDIN_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}