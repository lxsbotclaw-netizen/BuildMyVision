import { z } from "zod";
import { MAX_DESCRIPTION_LENGTH } from "@/lib/constants";

export const waitlistSchema = z.object({
  name: z
    .string()
    .min(2, "Name muss mindestens 2 Zeichen lang sein")
    .max(100, "Name darf maximal 100 Zeichen lang sein"),
  email: z
    .string()
    .email("Bitte eine gültige E-Mail-Adresse eingeben"),
  address: z
    .string()
    .min(5, "Bitte eine vollständige Anschrift eingeben")
    .max(300, "Anschrift darf maximal 300 Zeichen lang sein"),
  contactType: z.enum(["unternehmen", "privatperson"], {
    error: "Bitte Unternehmen oder Privatperson wählen",
  }),
  projectDescription: z
    .string()
    .min(10, "Projektbeschreibung muss mindestens 10 Zeichen lang sein")
    .max(MAX_DESCRIPTION_LENGTH, `Projektbeschreibung darf maximal ${MAX_DESCRIPTION_LENGTH} Zeichen lang sein`),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
