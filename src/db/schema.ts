import { pgTable, text, timestamp, uuid, pgEnum } from "drizzle-orm/pg-core";

/** Kontakttyp: Unternehmen oder Privatperson */
export const contactTypeEnum = pgEnum("contact_type", [
  "unternehmen",
  "privatperson",
]);

/** Verifizierungsstatus für Double-Opt-In */
export const verificationStatusEnum = pgEnum("verification_status", [
  "pending",
  "confirmed",
  "expired",
]);

/** Wartelisten-Einträge */
export const waitlistEntries = pgTable("waitlist_entries", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  address: text("address").notNull(),
  contactType: contactTypeEnum("contact_type").notNull(),
  projectDescription: text("project_description").notNull(),
  status: verificationStatusEnum("status").default("pending").notNull(),
  confirmationToken: text("confirmation_token").notNull().unique(),
  tokenExpiresAt: timestamp("token_expires_at", { withTimezone: true }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  confirmedAt: timestamp("confirmed_at", { withTimezone: true }),
});
