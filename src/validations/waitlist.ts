import { z } from "zod";
import { MAX_DESCRIPTION_LENGTH } from "@/lib/constants";
import { CONTACT_TYPES } from "@/db/schema";

export const waitlistSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name muss mindestens 2 Zeichen lang sein")
      .max(100, "Name darf maximal 100 Zeichen lang sein"),
    email: z
      .string()
      .email("Bitte eine gültige E-Mail-Adresse eingeben"),
    phone: z
      .string()
      .max(30, "Telefonnummer darf maximal 30 Zeichen lang sein")
      .optional()
      .or(z.literal("")),
    address: z
      .string()
      .max(300, "Anschrift darf maximal 300 Zeichen lang sein")
      .optional()
      .or(z.literal("")),
    contactTypes: z
      .array(z.enum(CONTACT_TYPES))
      .min(1, "Bitte mindestens einen Typ wählen"),
    projectDescription: z
      .string()
      .max(MAX_DESCRIPTION_LENGTH, `Projektbeschreibung darf maximal ${MAX_DESCRIPTION_LENGTH} Zeichen lang sein`)
      .optional()
      .or(z.literal("")),
    wizardSelections: z.string().optional().or(z.literal("")),
    privacyAccepted: z.literal(true, {
      error: "Bitte stimme der Datenschutzerklärung zu",
    }),
  })
  .refine(
    (data) =>
      (data.projectDescription && data.projectDescription.length >= 10) ||
      (data.wizardSelections && data.wizardSelections.length > 0),
    {
      message:
        "Bitte nutze den Projekt-Wizard oder beschreibe dein Vorhaben im Freitext",
      path: ["projectDescription"],
    },
  );

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
