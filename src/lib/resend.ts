import { Resend } from "resend";

/** Lazy-initialisierter Resend Client */
function createResendClient() {
  return new Resend(process.env.RESEND_API_KEY);
}

let _resend: Resend | null = null;

export function getResend() {
  if (!_resend) _resend = createResendClient();
  return _resend;
}
