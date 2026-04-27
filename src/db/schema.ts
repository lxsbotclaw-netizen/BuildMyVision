import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

/** Gültige Kontakttypen */
export const CONTACT_TYPES = [
  "privatperson",
  "startup",
  "unternehmen",
  "creator",
] as const;

export type ContactType = (typeof CONTACT_TYPES)[number];

/** Wartelisten-Einträge */
export const waitlistEntries = pgTable("waitlist_entries", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  address: text("address"),
  contactTypes: text("contact_types").notNull(),
  projectDescription: text("project_description"),
  wizardSelections: text("wizard_selections"),
  privacyAccepted: timestamp("privacy_accepted", { withTimezone: true }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
