import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface NotificationEmailProps {
  name: string;
  email: string;
  address: string;
  contactType: string;
  projectDescription: string;
  createdAt: Date;
  confirmedAt: Date;
}

export function NotificationEmail({
  name,
  email,
  address,
  contactType,
  projectDescription,
  createdAt,
  confirmedAt,
}: NotificationEmailProps) {
  const formatDate = (date: Date) =>
    new Date(date).toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <Html>
      <Head />
      <Preview>Neue bestaetigte Anfrage von {name}</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <Heading style={headingStyle}>Neue Anfrage bestätigt</Heading>
          <Text style={textStyle}>
            Ein neuer Interessent hat seine E-Mail-Adresse bestätigt:
          </Text>

          <Section style={detailsStyle}>
            <Text style={labelStyle}>Name</Text>
            <Text style={valueStyle}>{name}</Text>

            <Text style={labelStyle}>E-Mail</Text>
            <Text style={valueStyle}>{email}</Text>

            <Text style={labelStyle}>Anschrift</Text>
            <Text style={valueStyle}>{address}</Text>

            <Text style={labelStyle}>Typ</Text>
            <Text style={valueStyle}>
              {contactType === "unternehmen" ? "Unternehmen" : "Privatperson"}
            </Text>

            <Text style={labelStyle}>Projektwünsche</Text>
            <Text style={valueStyle}>{projectDescription}</Text>

            <Text style={labelStyle}>Registriert am</Text>
            <Text style={valueStyle}>{formatDate(createdAt)}</Text>

            <Text style={labelStyle}>Bestätigt am</Text>
            <Text style={valueStyle}>{formatDate(confirmedAt)}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const bodyStyle: React.CSSProperties = {
  backgroundColor: "#f4f4f5",
  fontFamily: "system-ui, -apple-system, sans-serif",
  padding: "40px 0",
};

const containerStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  margin: "0 auto",
  maxWidth: "560px",
  padding: "40px",
};

const headingStyle: React.CSSProperties = {
  color: "#09090b",
  fontSize: "22px",
  fontWeight: "700",
  marginBottom: "16px",
};

const textStyle: React.CSSProperties = {
  color: "#3f3f46",
  fontSize: "15px",
  lineHeight: "24px",
};

const detailsStyle: React.CSSProperties = {
  backgroundColor: "#fafafa",
  borderRadius: "6px",
  marginTop: "24px",
  padding: "24px",
};

const labelStyle: React.CSSProperties = {
  color: "#71717a",
  fontSize: "12px",
  fontWeight: "600",
  letterSpacing: "0.05em",
  marginBottom: "2px",
  textTransform: "uppercase" as const,
};

const valueStyle: React.CSSProperties = {
  color: "#09090b",
  fontSize: "15px",
  lineHeight: "22px",
  marginBottom: "16px",
  marginTop: "0",
};
