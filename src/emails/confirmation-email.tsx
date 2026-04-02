import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ConfirmationEmailProps {
  name: string;
  confirmUrl: string;
}

export function ConfirmationEmail({ name, confirmUrl }: ConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Bestaetige deine Anfrage bei BuildMyVision</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <Heading style={headingStyle}>BuildMyVision</Heading>
          <Text style={textStyle}>Hallo {name},</Text>
          <Text style={textStyle}>
            vielen Dank fuer deine Anfrage. Bitte bestaetige deine E-Mail-Adresse,
            indem du auf den folgenden Link klickst:
          </Text>
          <Section style={buttonContainerStyle}>
            <Link href={confirmUrl} style={buttonStyle}>
              E-Mail bestätigen
            </Link>
          </Section>
          <Text style={smallTextStyle}>
            Dieser Link ist 24 Stunden gueltig. Falls du diese Anfrage nicht
            gestellt hast, kannst du diese E-Mail ignorieren.
          </Text>
          <Text style={smallTextStyle}>
            Falls der Button nicht funktioniert, kopiere diesen Link in deinen Browser:
          </Text>
          <Text style={linkTextStyle}>{confirmUrl}</Text>
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
  maxWidth: "480px",
  padding: "40px",
};

const headingStyle: React.CSSProperties = {
  color: "#09090b",
  fontSize: "24px",
  fontWeight: "700",
  marginBottom: "24px",
};

const textStyle: React.CSSProperties = {
  color: "#3f3f46",
  fontSize: "16px",
  lineHeight: "24px",
};

const buttonContainerStyle: React.CSSProperties = {
  textAlign: "center" as const,
  margin: "32px 0",
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: "#09090b",
  borderRadius: "6px",
  color: "#fafafa",
  display: "inline-block",
  fontSize: "16px",
  fontWeight: "600",
  padding: "12px 32px",
  textDecoration: "none",
};

const smallTextStyle: React.CSSProperties = {
  color: "#71717a",
  fontSize: "13px",
  lineHeight: "20px",
};

const linkTextStyle: React.CSSProperties = {
  color: "#3b82f6",
  fontSize: "13px",
  lineHeight: "20px",
  wordBreak: "break-all",
};
