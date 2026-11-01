/**
 * Origin of the Boppi Cloud control plane.
 *
 * Set `VITE_APP_URL` to that origin with no path and no trailing slash,
 * for example `https://app.boppi.io`. Vite only exposes variables that
 * start with `VITE_` to the browser, so this is the one knob for signup.
 *
 * When the variable is missing or blank, links fall back to
 * https://app.boppi.io, which is the deployed control plane. Signup is
 * `${origin}/signup`. Sign-in is `${origin}/login`.
 */
const DEFAULT_APP_URL = "https://app.boppi.io";

export function controlPlaneOrigin(): string {
  const raw = import.meta.env.VITE_APP_URL;
  const value = typeof raw === "string" ? raw.trim() : "";
  const origin = value.length > 0 ? value : DEFAULT_APP_URL;
  return origin.replace(/\/+$/, "");
}

export function signupUrl(): string {
  return `${controlPlaneOrigin()}/signup`;
}

export function signInUrl(): string {
  return `${controlPlaneOrigin()}/login`;
}
