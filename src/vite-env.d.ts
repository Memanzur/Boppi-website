/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Origin of the Boppi Cloud control plane, no trailing slash.
   * Primary CTAs use `${VITE_APP_URL}/signup`.
   * Falls back to https://app.boppi.io when unset.
   */
  readonly VITE_APP_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
