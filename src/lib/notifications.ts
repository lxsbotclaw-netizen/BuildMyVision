import { Resend } from "resend";

interface WaitlistNotificationData {
  name: string;
  email: string;
  phone?: string | null;
  address?: string | null;
  contactTypes: string;
  projectDescription?: string | null;
  wizardSelections?: string | null;
}

/**
 * Sendet eine Admin-Benachrichtigung über eine neue Wartelisten-Anmeldung.
 * Wirft keine Fehler — Mail-Probleme dürfen den Erfolg der Anmeldung nicht blockieren.
 */
export async function sendWaitlistNotification(
  data: WaitlistNotificationData,
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const to = process.env.CONTACT_EMAIL;

  if (!apiKey || !from || !to) {
    console.warn(
      "[notifications] RESEND_API_KEY/EMAIL_FROM/CONTACT_EMAIL fehlen — Benachrichtigung übersprungen.",
    );
    return;
  }

  const resend = new Resend(apiKey);

  let wizardLines = "";
  if (data.wizardSelections) {
    try {
      const wizard = JSON.parse(data.wizardSelections) as {
        projectTypeLabel?: string;
        purposeLabel?: string;
        statusLabel?: string;
      };
      const parts = [
        wizard.projectTypeLabel,
        wizard.purposeLabel,
        wizard.statusLabel,
      ].filter(Boolean);
      if (parts.length) wizardLines = parts.join(" → ");
    } catch {
      // Ignorieren — wizardSelections ist nicht parsebar
    }
  }

  const subject = `Neue Wartelisten-Anmeldung: ${data.name}`;

  const text = [
    `Neue Anmeldung auf der Warteliste:`,
    ``,
    `Name: ${data.name}`,
    `E-Mail: ${data.email}`,
    data.phone ? `Telefon: ${data.phone}` : null,
    data.address ? `Anschrift: ${data.address}` : null,
    `Zielgruppe: ${data.contactTypes}`,
    wizardLines ? `Projekt-Wizard: ${wizardLines}` : null,
    data.projectDescription
      ? `\nBeschreibung:\n${data.projectDescription}`
      : null,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <div style="font-family: system-ui, sans-serif; max-width: 560px; padding: 16px;">
      <h2 style="margin: 0 0 12px;">Neue Wartelisten-Anmeldung</h2>
      <table style="border-collapse: collapse; width: 100%; font-size: 14px;">
        <tr><td style="padding: 6px 8px; color: #64748b;">Name</td><td style="padding: 6px 8px;"><strong>${escapeHtml(data.name)}</strong></td></tr>
        <tr><td style="padding: 6px 8px; color: #64748b;">E-Mail</td><td style="padding: 6px 8px;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
        ${data.phone ? `<tr><td style="padding: 6px 8px; color: #64748b;">Telefon</td><td style="padding: 6px 8px;">${escapeHtml(data.phone)}</td></tr>` : ""}
        ${data.address ? `<tr><td style="padding: 6px 8px; color: #64748b;">Anschrift</td><td style="padding: 6px 8px;">${escapeHtml(data.address)}</td></tr>` : ""}
        <tr><td style="padding: 6px 8px; color: #64748b;">Zielgruppe</td><td style="padding: 6px 8px;">${escapeHtml(data.contactTypes)}</td></tr>
        ${wizardLines ? `<tr><td style="padding: 6px 8px; color: #64748b;">Projekt-Wizard</td><td style="padding: 6px 8px;">${escapeHtml(wizardLines)}</td></tr>` : ""}
      </table>
      ${
        data.projectDescription
          ? `<h3 style="margin: 20px 0 8px; font-size: 14px;">Beschreibung</h3>
        <div style="white-space: pre-wrap; padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 14px;">${escapeHtml(data.projectDescription)}</div>`
          : ""
      }
    </div>
  `;

  const result = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject,
    text,
    html,
  });

  if (result.error) {
    throw new Error(
      `Resend-Fehler: ${result.error.name ?? ""} ${result.error.message ?? ""}`,
    );
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
