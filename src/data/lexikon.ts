// Datenmodell und Inhalte für das SEO-Lexikon

export type LexikonCategory = "ki" | "digital" | "tech";

export interface LexikonEntry {
  slug: string;
  term: string;
  shortDefinition: string;
  category: LexikonCategory;
  content: {
    definition: string;
    examples: string[];
    relevance: string;
    buildMyVisionConnection: string;
  };
  relatedSlugs: string[];
}

export const CATEGORY_LABELS: Record<LexikonCategory, string> = {
  ki: "KI & Agents",
  digital: "Internet & Digital",
  tech: "Technologie",
};

const entries: LexikonEntry[] = [
  // === KI & Agents ===
  {
    slug: "ki-agent",
    term: "KI-Agent",
    shortDefinition:
      "Ein KI-Agent ist ein autonomes Softwareprogramm, das mithilfe künstlicher Intelligenz eigenständig Aufgaben ausführt, Entscheidungen trifft und mit seiner Umgebung interagiert.",
    category: "ki",
    content: {
      definition:
        "Ein KI-Agent (auch AI Agent) ist ein intelligentes Softwaresystem, das eigenständig Aufgaben erledigen kann. Anders als einfache Chatbots kann ein KI-Agent mehrere Schritte planen, Werkzeuge nutzen und komplexe Probleme lösen — ohne dass ein Mensch jeden einzelnen Schritt vorgeben muss.\n\nKI-Agents basieren auf Large Language Models (LLMs) und werden mit zusätzlichen Fähigkeiten ausgestattet: Sie können im Internet recherchieren, Datenbanken abfragen, E-Mails versenden oder Code ausführen. Dadurch werden sie zu vielseitigen digitalen Assistenten.\n\nDer Unterschied zu herkömmlicher Automatisierung liegt in der Flexibilität: Ein KI-Agent kann auf unerwartete Situationen reagieren und seinen Lösungsweg dynamisch anpassen, statt starren Regeln zu folgen.",
      examples: [
        "Ein Kundenservice-Agent, der Anfragen versteht, im CRM nachschlägt und passende Antworten formuliert",
        "Ein Recherche-Agent, der Marktdaten aus verschiedenen Quellen sammelt und einen Bericht erstellt",
        "Ein Coding-Agent, der Bugs in Software findet und eigenständig Lösungsvorschläge entwickelt",
      ],
      relevance:
        "KI-Agents revolutionieren die Art, wie Unternehmen arbeiten. Repetitive Aufgaben wie Datenerfassung, Kundenkommunikation oder Berichterstellung können automatisiert werden — und das auf einem Qualitätsniveau, das noch vor wenigen Jahren undenkbar war. Für Gründer und Unternehmer bedeutet das: mehr Effizienz bei geringeren Personalkosten.",
      buildMyVisionConnection:
        "Wir integrieren KI-Agents direkt in deine Plattform oder Web-App. Ob intelligenter Kundensupport, automatisierte Workflows oder datengetriebene Entscheidungshilfen — wir setzen die passende Lösung für dein Geschäftsmodell um.",
    },
    relatedSlugs: [
      "kuenstliche-intelligenz",
      "chatbot",
      "automatisierung",
      "large-language-model",
    ],
  },
  {
    slug: "kuenstliche-intelligenz",
    term: "Künstliche Intelligenz",
    shortDefinition:
      "Künstliche Intelligenz (KI) bezeichnet Computersysteme, die menschenähnliche kognitive Fähigkeiten wie Lernen, Problemlösung und Sprachverständnis nachbilden.",
    category: "ki",
    content: {
      definition:
        "Künstliche Intelligenz — oft abgekürzt als KI oder AI (Artificial Intelligence) — ist ein Teilgebiet der Informatik. Das Ziel: Maschinen so zu programmieren, dass sie Aufgaben erledigen können, die normalerweise menschliche Intelligenz erfordern. Dazu gehören Spracherkennung, Bilderkennung, Entscheidungsfindung und kreative Tätigkeiten.\n\nModerne KI basiert überwiegend auf maschinellem Lernen: Algorithmen werden mit großen Datenmengen trainiert und erkennen dabei Muster, die sie auf neue Situationen anwenden können. Besonders leistungsfähig sind sogenannte neuronale Netze, die dem menschlichen Gehirn nachempfunden sind.\n\nSeit dem Durchbruch von ChatGPT Ende 2022 hat KI den Mainstream erreicht. Unternehmen jeder Größe setzen KI ein — von der automatisierten Textgenerierung über Bildbearbeitung bis hin zu kompletten Geschäftsprozessen.",
      examples: [
        "Sprachassistenten wie Siri, Alexa oder Google Assistant, die gesprochene Befehle verstehen",
        "Empfehlungssysteme bei Netflix, Spotify oder Amazon, die Vorlieben vorhersagen",
        "Autonome Fahrzeuge, die Verkehrssituationen in Echtzeit einschätzen und darauf reagieren",
      ],
      relevance:
        "KI ist keine Zukunftstechnologie mehr — sie ist Gegenwart. Unternehmen, die KI nicht in ihre Prozesse integrieren, riskieren Wettbewerbsnachteile. Gleichzeitig eröffnet KI völlig neue Geschäftsmodelle: personalisierte Produkte, intelligente Datenauswertung und automatisierte Kundeninteraktion sind nur der Anfang.",
      buildMyVisionConnection:
        "Wir helfen dir, KI sinnvoll in dein digitales Produkt zu integrieren. Ob Chatbot, intelligente Suche oder automatisierte Inhalte — wir finden die richtige KI-Lösung für dein Vorhaben und setzen sie technisch sauber um.",
    },
    relatedSlugs: [
      "ki-agent",
      "machine-learning",
      "large-language-model",
      "generative-ki",
    ],
  },
  {
    slug: "large-language-model",
    term: "Large Language Model (LLM)",
    shortDefinition:
      "Ein Large Language Model (LLM) ist ein KI-Modell, das auf riesigen Textmengen trainiert wurde und menschliche Sprache verstehen, erzeugen und verarbeiten kann.",
    category: "ki",
    content: {
      definition:
        "Large Language Models — kurz LLMs — sind die Technologie hinter ChatGPT, Claude, Gemini und anderen KI-Assistenten. Es handelt sich um neuronale Netze mit Milliarden von Parametern, die mit enormen Textmengen aus dem Internet trainiert wurden.\n\nLLMs können Texte verfassen, Fragen beantworten, Code schreiben, übersetzen und komplexe Zusammenhänge analysieren. Ihre Stärke liegt darin, dass sie Kontext verstehen und kontextbezogene Antworten liefern — nicht nur Schlüsselwörter abgleichen.\n\nDie bekanntesten LLMs sind GPT (von OpenAI), Claude (von Anthropic), Gemini (von Google) und Llama (von Meta). Sie unterscheiden sich in Größe, Trainingsmethode und Spezialisierung, folgen aber alle dem gleichen Grundprinzip: vorhersagen, welches Wort als nächstes am wahrscheinlichsten kommt.",
      examples: [
        "ChatGPT beantwortet komplexe Fragen und erstellt strukturierte Texte in Sekundenschnelle",
        "GitHub Copilot nutzt ein LLM, um Programmierern Code-Vorschläge in Echtzeit zu machen",
        "Übersetzungstools wie DeepL verwenden LLM-Technologie für natürlich klingende Übersetzungen",
      ],
      relevance:
        "LLMs sind die Grundlage nahezu aller modernen KI-Anwendungen. Für Unternehmen bedeuten sie: automatische Texterstellung, intelligenter Kundensupport, Datenanalyse in natürlicher Sprache und vieles mehr. Wer versteht, was LLMs können (und wo ihre Grenzen liegen), kann sie gezielt für sein Geschäft einsetzen.",
      buildMyVisionConnection:
        "Wir bauen Anwendungen, die LLMs über APIs einbinden — von Chat-Interfaces über intelligente Suchfunktionen bis hin zu automatisierten Content-Pipelines. Du bekommst die Funktionalität eines LLM, eingebettet in deine eigene Plattform.",
    },
    relatedSlugs: [
      "kuenstliche-intelligenz",
      "ki-agent",
      "prompt-engineering",
      "generative-ki",
      "chatbot",
    ],
  },
  {
    slug: "prompt-engineering",
    term: "Prompt Engineering",
    shortDefinition:
      "Prompt Engineering ist die Kunst, Anweisungen (Prompts) so zu formulieren, dass KI-Modelle möglichst präzise und nützliche Ergebnisse liefern.",
    category: "ki",
    content: {
      definition:
        "Prompt Engineering beschreibt den Prozess, Eingaben — sogenannte Prompts — für KI-Modelle so zu gestalten, dass die Ausgabe optimal ist. Es ist die Schnittstelle zwischen Mensch und KI: Je besser der Prompt, desto besser das Ergebnis.\n\nDabei geht es nicht nur um die Wortwahl. Gutes Prompt Engineering umfasst Techniken wie Few-Shot-Learning (Beispiele mitgeben), Chain-of-Thought (schrittweises Denken anregen) und Rollenanweisungen (der KI eine bestimmte Perspektive zuweisen).\n\nPrompt Engineering ist eine eigenständige Disziplin geworden. Unternehmen stellen Prompt Engineers ein, um ihre KI-Systeme zu optimieren — denn die Qualität der Prompts entscheidet maßgeblich über den wirtschaftlichen Nutzen einer KI-Anwendung.",
      examples: [
        'Statt "Schreib mir einen Text" besser: "Schreib einen 200-Wort-Blogartikel über SEO für Einsteiger, Ton: professionell aber zugänglich"',
        "System-Prompts in Chatbots, die das Verhalten und den Tonfall der KI definieren",
        'Strukturierte Prompts für Datenextraktion: "Extrahiere aus folgendem Text: Name, E-Mail und Unternehmen"',
      ],
      relevance:
        "Für Unternehmen, die KI einsetzen, ist Prompt Engineering entscheidend. Ein gut designter Prompt kann den Unterschied zwischen einer brauchbaren und einer exzellenten KI-Anwendung ausmachen. Das spart Kosten (weniger API-Aufrufe), verbessert die Nutzererfahrung und erhöht die Genauigkeit.",
      buildMyVisionConnection:
        "Wenn wir KI-Features in deine Plattform integrieren, übernehmen wir auch das Prompt Engineering. Wir designen System-Prompts, die zu deiner Marke passen und optimale Ergebnisse für deine Nutzer liefern.",
    },
    relatedSlugs: [
      "large-language-model",
      "ki-agent",
      "chatbot",
      "generative-ki",
    ],
  },
  {
    slug: "chatbot",
    term: "Chatbot",
    shortDefinition:
      "Ein Chatbot ist ein Softwareprogramm, das automatisierte Konversationen mit Nutzern führt — textbasiert oder per Sprache, oft unterstützt durch künstliche Intelligenz.",
    category: "ki",
    content: {
      definition:
        "Ein Chatbot simuliert ein Gespräch mit einem menschlichen Gegenüber. Frühe Chatbots basierten auf starren Wenn-Dann-Regeln und konnten nur vordefinierte Fragen beantworten. Moderne Chatbots nutzen KI und Large Language Models, um natürliche Sprache zu verstehen und flexibel zu antworten.\n\nMan unterscheidet zwischen regelbasierten Chatbots (günstig, aber eingeschränkt) und KI-Chatbots (flexibel, aber komplexer). Die besten Lösungen kombinieren beides: KI für das Sprachverständnis, Regeln für geschäftskritische Prozesse wie Bestellungen oder Terminbuchungen.\n\nChatbots sind heute auf Webseiten, in Apps, bei WhatsApp, im Facebook Messenger und in internen Unternehmenssystemen im Einsatz. Sie arbeiten rund um die Uhr und können tausende Gespräche gleichzeitig führen.",
      examples: [
        "Ein Kundensupport-Chatbot auf einer Webseite, der häufige Fragen sofort beantwortet",
        "Ein Bestell-Bot bei einem Lieferdienst, der die Bestellung per Chat aufnimmt",
        "Ein interner HR-Bot, der Mitarbeitern Auskunft über Urlaubstage und Richtlinien gibt",
      ],
      relevance:
        "Chatbots reduzieren Support-Kosten drastisch und verbessern die Kundenzufriedenheit durch sofortige Antworten. Studien zeigen, dass über 60 % der Kundenanfragen von Chatbots gelöst werden können — ohne menschliches Eingreifen. Für Unternehmen mit wiederkehrenden Kundenanfragen sind sie ein klarer Effizienzgewinn.",
      buildMyVisionConnection:
        "Wir entwickeln maßgeschneiderte Chatbot-Lösungen für deine Webseite oder Plattform. Von der einfachen FAQ-Automatisierung bis zum intelligenten Verkaufsassistenten — wir setzen den Bot um, der zu deinem Geschäftsmodell passt.",
    },
    relatedSlugs: [
      "ki-agent",
      "large-language-model",
      "kuenstliche-intelligenz",
      "automatisierung",
    ],
  },
  {
    slug: "machine-learning",
    term: "Machine Learning",
    shortDefinition:
      "Machine Learning (maschinelles Lernen) ist ein Teilbereich der KI, bei dem Algorithmen aus Daten lernen und Vorhersagen treffen, ohne explizit programmiert zu werden.",
    category: "ki",
    content: {
      definition:
        "Machine Learning — auf Deutsch maschinelles Lernen — ist das Fundament moderner KI. Statt einem Computer Regeln vorzuschreiben, gibt man ihm Daten und lässt ihn selbst Muster erkennen. Je mehr Daten, desto besser wird das Modell.\n\nEs gibt drei Hauptarten: Supervised Learning (lernen aus gelabelten Beispielen), Unsupervised Learning (Muster in ungelabelten Daten finden) und Reinforcement Learning (lernen durch Belohnung und Bestrafung). Deep Learning, eine Unterform mit mehrschichtigen neuronalen Netzen, hat zu den größten Durchbrüchen der letzten Jahre geführt.\n\nMachine Learning steckt in mehr Produkten als den meisten Menschen bewusst ist: Spam-Filter, Gesichtserkennung, Preisvorhersagen, medizinische Diagnostik und Sprachassistenten basieren alle auf ML-Algorithmen.",
      examples: [
        "Spam-Filter in E-Mail-Programmen, die lernen, welche Nachrichten unerwünscht sind",
        "Betrugserkennung bei Banken, die ungewöhnliche Transaktionsmuster erkennt",
        "Predictive Maintenance in der Industrie, die Maschinenausfälle vorhersagt",
      ],
      relevance:
        "Machine Learning ermöglicht datengetriebene Entscheidungen in Echtzeit. Unternehmen nutzen ML für Preisoptimierung, Kundenanalyse, Qualitätskontrolle und Personalisierung. Der Einstieg ist dank Cloud-APIs und vortrainierten Modellen heute auch für kleine Unternehmen möglich.",
      buildMyVisionConnection:
        "Wir helfen dir, Machine-Learning-Modelle über APIs in dein Produkt zu integrieren — ob Empfehlungssystem, Bildklassifizierung oder Prognosetools. Du brauchst kein eigenes Data-Science-Team.",
    },
    relatedSlugs: [
      "kuenstliche-intelligenz",
      "large-language-model",
      "ki-agent",
      "automatisierung",
    ],
  },
  {
    slug: "natural-language-processing",
    term: "Natural Language Processing (NLP)",
    shortDefinition:
      "Natural Language Processing (NLP) ist ein KI-Bereich, der Computern ermöglicht, menschliche Sprache zu verstehen, zu analysieren und zu erzeugen.",
    category: "ki",
    content: {
      definition:
        "Natural Language Processing — kurz NLP — bildet die Brücke zwischen menschlicher Sprache und Computern. Es umfasst Technologien, die Text und Sprache maschinell verarbeiten: von einfacher Rechtschreibprüfung bis hin zu komplexer Stimmungsanalyse und Textgenerierung.\n\nNLP-Anwendungen analysieren die Struktur von Sätzen (Syntax), die Bedeutung von Wörtern im Kontext (Semantik) und die Absicht hinter einer Aussage (Pragmatik). Moderne NLP-Systeme basieren auf Transformer-Architekturen und sind die Grundlage für LLMs wie GPT und Claude.\n\nTypische NLP-Aufgaben sind: Sentimentanalyse (Stimmung erkennen), Named Entity Recognition (Personen, Orte, Firmen extrahieren), Textklassifizierung, Zusammenfassung und maschinelle Übersetzung.",
      examples: [
        "Google Translate übersetzt Texte zwischen über 100 Sprachen mithilfe von NLP",
        "Social-Media-Monitoring-Tools analysieren Tausende Posts auf Kundenstimmung",
        "E-Mail-Programme kategorisieren eingehende Nachrichten automatisch nach Priorität",
      ],
      relevance:
        "Für Unternehmen mit viel Textkommunikation — Kundenfeedback, Support-Tickets, Social Media — ist NLP ein Gamechanger. Statt Nachrichten manuell zu lesen und zu sortieren, erledigt das die KI in Sekundenbruchteilen. Das spart Zeit und liefert gleichzeitig wertvolle Erkenntnisse über Kundenbedürfnisse.",
      buildMyVisionConnection:
        "Wir setzen NLP-Features in deiner Plattform um: intelligente Suchfunktionen, automatische Textanalyse oder Chatbots, die natürliche Sprache wirklich verstehen. Alles nahtlos integriert in dein Produkt.",
    },
    relatedSlugs: [
      "large-language-model",
      "kuenstliche-intelligenz",
      "chatbot",
      "ki-agent",
    ],
  },
  {
    slug: "automatisierung",
    term: "Automatisierung",
    shortDefinition:
      "Automatisierung bedeutet, wiederkehrende Aufgaben und Prozesse durch Software oder Maschinen ausführen zu lassen — ohne manuellen Eingriff.",
    category: "ki",
    content: {
      definition:
        "Automatisierung im digitalen Kontext meint den Einsatz von Software, um manuelle, wiederkehrende Aufgaben zu ersetzen. Das reicht von einfachen Regeln (\"Wenn eine Bestellung eingeht, sende eine Bestätigung\") bis hin zu komplexen Workflows mit KI-Unterstützung.\n\nModerne Automatisierung unterscheidet sich grundlegend von klassischer Prozessautomatisierung: Dank KI können auch Aufgaben automatisiert werden, die bisher menschliches Urteilsvermögen erforderten — wie das Beantworten von E-Mails, das Erstellen von Berichten oder das Treffen von Entscheidungen auf Basis unstrukturierter Daten.\n\nTools wie Zapier, Make oder n8n ermöglichen einfache Automatisierungen ohne Code. Für komplexere Szenarien werden maßgeschneiderte Workflows entwickelt, die perfekt auf die Geschäftsprozesse eines Unternehmens abgestimmt sind.",
      examples: [
        "Automatische Rechnungserstellung nach Projektabschluss — ohne manuelles Eintippen",
        "E-Mail-Workflows, die Leads nach der Anmeldung in mehreren Schritten nachverfolgen",
        "Automatische Datenübertragung zwischen CRM, Buchhaltung und Projektmanagement",
      ],
      relevance:
        "Jede Minute, die ein Mitarbeiter mit repetitiven Aufgaben verbringt, fehlt für strategische Arbeit. Automatisierung setzt genau hier an: Sie übernimmt das Wiederkehrende, damit sich Menschen auf das Kreative und Strategische konzentrieren können. Studien zeigen, dass Unternehmen durch Automatisierung bis zu 30 % Zeitersparnis erzielen.",
      buildMyVisionConnection:
        "Wir bauen automatisierte Workflows direkt in deine Plattform ein. Ob Benachrichtigungen, Datenverarbeitung oder vollständige Geschäftsprozesse — wir automatisieren, was sich automatisieren lässt.",
    },
    relatedSlugs: [
      "ki-agent",
      "chatbot",
      "ki-integration",
      "devops",
    ],
  },
  {
    slug: "ki-integration",
    term: "KI-Integration",
    shortDefinition:
      "KI-Integration bezeichnet das Einbinden von künstlicher Intelligenz in bestehende Software, Plattformen oder Geschäftsprozesse.",
    category: "ki",
    content: {
      definition:
        "KI-Integration bedeutet, KI-Funktionalität in ein bestehendes System einzubauen — nicht als eigenständiges Produkt, sondern als intelligente Erweiterung. Statt eine separate KI-Anwendung zu nutzen, wird die Intelligenz direkt dort eingebettet, wo sie gebraucht wird.\n\nTechnisch erfolgt die Integration meist über APIs: Ein LLM wie GPT oder Claude wird über eine Schnittstelle angebunden und verarbeitet Anfragen im Hintergrund. Der Nutzer merkt davon oft nichts — er erlebt nur, dass das Produkt smarter geworden ist.\n\nKI-Integration reicht von einfachen Features (intelligente Suchvorschläge, automatische Textvervollständigung) bis hin zu komplexen Systemen (automatisierte Datenanalyse, personalisierte Empfehlungen, vorausschauende Wartung).",
      examples: [
        "Ein Online-Shop, der personalisierte Produktempfehlungen auf Basis des Nutzerverhaltens anzeigt",
        "Ein CRM-System, das eingehende E-Mails automatisch der richtigen Kategorie zuordnet",
        "Eine Projektmanagement-App, die Zeitaufwand für neue Aufgaben basierend auf historischen Daten schätzt",
      ],
      relevance:
        "KI-Integration ist der praktischste Weg, von KI zu profitieren. Statt alles neu zu bauen, werden bestehende Systeme intelligenter gemacht. Das senkt die Einstiegshürde und liefert schnell messbare Ergebnisse. Besonders für KMUs ist dieser Ansatz attraktiv: maximaler Nutzen bei überschaubarem Aufwand.",
      buildMyVisionConnection:
        "KI-Integration ist eine unserer Kernkompetenzen. Wir analysieren deine bestehenden Prozesse und identifizieren, wo KI den größten Hebel hat. Dann bauen wir die Integration — sauber, skalierbar und passend zu deinem Tech-Stack.",
    },
    relatedSlugs: [
      "kuenstliche-intelligenz",
      "ki-agent",
      "api",
      "automatisierung",
    ],
  },
  {
    slug: "generative-ki",
    term: "Generative KI",
    shortDefinition:
      "Generative KI bezeichnet KI-Systeme, die neue Inhalte erzeugen können — Texte, Bilder, Code, Musik oder Videos — statt nur vorhandene Daten zu analysieren.",
    category: "ki",
    content: {
      definition:
        "Generative KI (auch GenAI) ist die Kategorie von KI-Systemen, die eigenständig neue Inhalte erstellen können. Im Gegensatz zu analytischer KI, die Daten auswertet und Muster erkennt, produziert generative KI Outputs, die es vorher nicht gab: Texte, Bilder, Programmcode, Musik und sogar Videos.\n\nDie bekanntesten Vertreter sind ChatGPT (Text), DALL-E und Midjourney (Bilder), GitHub Copilot (Code) und Suno (Musik). Sie alle nutzen neuronale Netze, die auf riesigen Datensätzen trainiert wurden und gelernt haben, realistische neue Inhalte zu generieren.\n\nGenerative KI hat 2023 einen beispiellosen Hype ausgelöst und verändert ganze Branchen: Marketing, Design, Softwareentwicklung, Journalismus und Bildung werden grundlegend umgestaltet.",
      examples: [
        "Marketingteams erstellen mit KI Blogartikel, Social-Media-Posts und Werbetexte in Minuten",
        "Designer nutzen KI-Bildgeneratoren für Konzeptentwürfe und Mood Boards",
        "Entwickler lassen sich von KI komplette Funktionen und Testfälle schreiben",
      ],
      relevance:
        "Generative KI ist der größte Produktivitätssprung seit dem Smartphone. Unternehmen, die GenAI einsetzen, berichten von 40–70 % Zeitersparnis bei Content-Erstellung. Gleichzeitig sinken die Einstiegskosten für professionelle Inhalte: Was früher eine Agentur erforderte, kann heute teilweise intern erledigt werden.",
      buildMyVisionConnection:
        "Wir integrieren generative KI-Features in dein Produkt — ob Content-Generierung für deine Nutzer, KI-gestützte Bildbearbeitung oder intelligente Textvorlagen. Dein Produkt wird zum KI-Produkt.",
    },
    relatedSlugs: [
      "kuenstliche-intelligenz",
      "large-language-model",
      "prompt-engineering",
      "ki-integration",
    ],
  },
  {
    slug: "retrieval-augmented-generation",
    term: "RAG (Retrieval Augmented Generation)",
    shortDefinition:
      "RAG ist eine Methode, bei der KI-Modelle vor der Antwortgenerierung relevante Informationen aus einer Wissensdatenbank abrufen — für präzisere und aktuellere Ergebnisse.",
    category: "ki",
    content: {
      definition:
        "Retrieval Augmented Generation — kurz RAG — löst eines der größten Probleme von LLMs: veraltetes oder fehlendes Wissen. Statt sich nur auf das Trainingswissen zu verlassen, durchsucht ein RAG-System zuerst eine externe Wissensdatenbank und gibt die gefundenen Informationen als Kontext an das LLM weiter.\n\nDer Ablauf ist dreistufig: (1) Die Nutzeranfrage wird in einen Suchvektor umgewandelt, (2) relevante Dokumente werden aus der Datenbank abgerufen, (3) das LLM generiert eine Antwort basierend auf diesen Dokumenten. So bleibt die Antwort fundiert und nachprüfbar.\n\nRAG wird besonders dort eingesetzt, wo Genauigkeit entscheidend ist: interne Wissenssysteme, Kundensupport mit Produktdokumentation oder rechtliche und medizinische Anwendungen, bei denen Halluzinationen nicht akzeptabel sind.",
      examples: [
        "Ein internes Wissenssystem, das Mitarbeiterfragen anhand der Unternehmensdokumentation beantwortet",
        "Ein Support-Bot, der Antworten direkt aus der aktuellen Produktdokumentation generiert",
        "Ein Rechtsassistent, der relevante Paragraphen findet und im Kontext zusammenfasst",
      ],
      relevance:
        "RAG macht KI-Anwendungen für Unternehmen erst wirklich nutzbar. Ohne RAG halluzinieren LLMs regelmäßig — sie erfinden Fakten, die plausibel klingen aber falsch sind. Mit RAG werden Antworten auf verifizierbare Quellen gestützt, was Vertrauen schafft und rechtliche Risiken minimiert.",
      buildMyVisionConnection:
        "Wir implementieren RAG-Systeme für deine Plattform. Deine Dokumente, dein Wissen, deine Daten — abrufbar über eine intelligente KI-Schnittstelle, die zuverlässige Antworten liefert.",
    },
    relatedSlugs: [
      "large-language-model",
      "ki-agent",
      "kuenstliche-intelligenz",
      "datenbank",
    ],
  },
  {
    slug: "fine-tuning",
    term: "Fine-Tuning",
    shortDefinition:
      "Fine-Tuning ist der Prozess, ein vortrainiertes KI-Modell mit eigenen Daten nachzutrainieren, um es für spezifische Aufgaben oder Branchen zu optimieren.",
    category: "ki",
    content: {
      definition:
        "Fine-Tuning bedeutet, ein bereits trainiertes KI-Modell (Basismodell) mit zusätzlichen, spezifischen Daten weiterzutrainieren. Das Modell behält sein allgemeines Wissen, lernt aber gleichzeitig die Besonderheiten eines bestimmten Anwendungsfalls — wie branchenspezifisches Vokabular, einen bestimmten Schreibstil oder fachliche Zusammenhänge.\n\nDer Vorteil gegenüber reinem Prompt Engineering: Fine-Tuning verändert das Modell selbst, nicht nur die Eingabe. Das führt zu konsistenteren Ergebnissen und kann bei großem Anfragevolumen kostengünstiger sein, da kürzere Prompts ausreichen.\n\nFine-Tuning ist allerdings aufwändiger als RAG oder Prompt Engineering und erfordert saubere Trainingsdaten. Es lohnt sich besonders, wenn Standard-Prompts nicht die gewünschte Qualität liefern oder wenn das Modell einen sehr spezifischen Stil oder Fachsprache beherrschen soll.",
      examples: [
        "Ein E-Commerce-Unternehmen trainiert ein Modell auf seine Produktbeschreibungen für konsistenten Markenton",
        "Eine Kanzlei trainiert ein Modell mit juristischen Dokumenten für präzisere Rechtsauskünfte",
        "Ein Kundenservice trainiert ein Modell auf vergangene Tickets für bessere Antwortqualität",
      ],
      relevance:
        "Fine-Tuning ist der Weg zum eigenen KI-Modell — ohne eines von Grund auf trainieren zu müssen. Für Unternehmen mit spezifischen Anforderungen, die mit Standard-KI nicht zufriedenstellend gelöst werden, ist es die nächste Stufe der KI-Nutzung.",
      buildMyVisionConnection:
        "Wir beraten dich, ob Fine-Tuning, RAG oder Prompt Engineering die richtige Strategie für deinen Anwendungsfall ist — und setzen die gewählte Lösung technisch um.",
    },
    relatedSlugs: [
      "large-language-model",
      "machine-learning",
      "prompt-engineering",
      "retrieval-augmented-generation",
    ],
  },

  // === Internet & Digital ===
  {
    slug: "suchmaschinenoptimierung",
    term: "SEO (Suchmaschinenoptimierung)",
    shortDefinition:
      "SEO ist die Optimierung von Webseiten, damit sie in den Suchergebnissen von Google und anderen Suchmaschinen möglichst weit oben erscheinen.",
    category: "digital",
    content: {
      definition:
        "Suchmaschinenoptimierung — kurz SEO (Search Engine Optimization) — umfasst alle Maßnahmen, die eine Webseite in den organischen (unbezahlten) Suchergebnissen nach oben bringen. Das Ziel: mehr Sichtbarkeit, mehr Besucher, mehr Kunden.\n\nSEO gliedert sich in drei Bereiche: On-Page-SEO (Inhalte, Überschriften, Meta-Tags, interne Verlinkung), Technical SEO (Ladezeit, mobile Optimierung, Crawlbarkeit) und Off-Page-SEO (Backlinks, Erwähnungen, Domain-Autorität).\n\nSEO ist keine einmalige Aktion, sondern ein kontinuierlicher Prozess. Google aktualisiert seinen Algorithmus hunderte Male pro Jahr. Was gestern funktioniert hat, kann morgen veraltet sein. Erfolgreiches SEO erfordert aktuelle Inhalte, technische Exzellenz und Geduld — Ergebnisse zeigen sich oft erst nach Wochen oder Monaten.",
      examples: [
        "Ein Handwerksbetrieb optimiert seine Webseite für \"Elektriker Berlin\" und erscheint auf Seite 1 bei Google",
        "Ein Blog-Artikel mit der richtigen Keyword-Strategie zieht monatlich tausende Besucher an",
        "Technische Optimierung der Ladezeit verbessert die Google-Rankings um mehrere Plätze",
      ],
      relevance:
        "93 % aller Online-Erfahrungen beginnen mit einer Suchmaschine. Wer bei Google nicht auf Seite 1 steht, existiert für die meisten Nutzer nicht. SEO ist damit einer der wichtigsten Marketingkanäle — und im Gegensatz zu Werbung wird der Traffic langfristig nicht teurer.",
      buildMyVisionConnection:
        "Alle unsere Webseiten und Plattformen werden mit SEO-Grundlagen gebaut: saubere URL-Strukturen, schnelle Ladezeiten, semantisches HTML und Meta-Tags. Damit hast du von Tag 1 eine solide SEO-Basis.",
    },
    relatedSlugs: [
      "webdesign",
      "landing-page",
      "web-analytics",
      "conversion-rate",
      "hosting",
    ],
  },
  {
    slug: "webdesign",
    term: "Webdesign",
    shortDefinition:
      "Webdesign umfasst die visuelle Gestaltung und Benutzerführung einer Webseite — von Layout und Farben bis hin zu Typografie und Interaktionselementen.",
    category: "digital",
    content: {
      definition:
        "Webdesign ist die Disziplin, die sich mit dem Aussehen, der Struktur und der Benutzerfreundlichkeit von Webseiten beschäftigt. Es vereint Grafikdesign, UX-Design (User Experience) und UI-Design (User Interface) zu einem stimmigen Gesamterlebnis.\n\nModernes Webdesign folgt dem Prinzip Mobile First: Zuerst wird für Smartphones gestaltet, dann für größere Bildschirme erweitert. Weitere Grundprinzipien sind Barrierefreiheit (Zugänglichkeit für alle Nutzer), schnelle Ladezeiten und klare Hierarchien, die den Blick des Nutzers führen.\n\nDer Trend geht zu minimalistischem Design: klare Linien, viel Weißraum, große Typografie und zurückhaltende Farbpaletten. Gleichzeitig werden Micro-Interactions (subtile Animationen) eingesetzt, um die Nutzung intuitiver und angenehmer zu machen.",
      examples: [
        "Eine Unternehmenswebseite mit klarer Struktur, die Besucher intuitiv zum Kontaktformular führt",
        "Ein Online-Shop-Design, das Produkte in Szene setzt und den Kaufprozess vereinfacht",
        "Ein Portfolio mit ansprechender Bildergalerie und schnellen Ladezeiten",
      ],
      relevance:
        "Der erste Eindruck zählt: Nutzer entscheiden in weniger als einer Sekunde, ob eine Webseite vertrauenswürdig wirkt. Professionelles Webdesign ist damit keine Kosmetik, sondern ein Geschäftsfaktor. Schlechtes Design kostet Kunden — gutes Design gewinnt sie.",
      buildMyVisionConnection:
        "Webdesign ist unser Handwerk. Wir gestalten Webseiten, die professionell aussehen, schnell laden und deine Zielgruppe überzeugen — technisch sauber und visuell ansprechend.",
    },
    relatedSlugs: [
      "responsive-design",
      "suchmaschinenoptimierung",
      "landing-page",
      "content-management-system",
    ],
  },
  {
    slug: "responsive-design",
    term: "Responsive Design",
    shortDefinition:
      "Responsive Design sorgt dafür, dass eine Webseite auf allen Bildschirmgrößen — vom Smartphone bis zum Desktop — optimal dargestellt wird.",
    category: "digital",
    content: {
      definition:
        "Responsive Design (auch Responsive Webdesign) ist ein Gestaltungsansatz, bei dem sich das Layout einer Webseite automatisch an die Bildschirmgröße des Geräts anpasst. Texte, Bilder und Navigationselemente ordnen sich so um, dass die Seite auf jedem Gerät gut nutzbar ist.\n\nTechnisch basiert Responsive Design auf CSS Media Queries, flexiblen Rastern (Grid/Flexbox) und skalierbaren Bildern. Der Ansatz Mobile First hat sich durchgesetzt: Die Gestaltung beginnt mit der kleinsten Bildschirmgröße und wird für größere Screens erweitert.\n\nSeit Google 2015 die Mobile-Friendliness zum Rankingfaktor gemacht hat, ist Responsive Design kein Nice-to-have mehr, sondern Pflicht. Webseiten, die auf Smartphones schlecht funktionieren, werden in den Suchergebnissen abgestraft.",
      examples: [
        "Eine Navigation, die auf dem Desktop horizontal ist und auf dem Smartphone zum Hamburger-Menü wird",
        "Bilder, die sich automatisch verkleinern und auf kleinen Screens nicht abgeschnitten werden",
        "Eine dreispaltige Übersicht, die auf dem Tablet zweispaltig und auf dem Handy einspaltig wird",
      ],
      relevance:
        "Über 60 % des weltweiten Web-Traffics kommt von Mobilgeräten. Eine Webseite, die auf dem Smartphone nicht funktioniert, verliert mehr als die Hälfte ihrer potenziellen Besucher. Responsive Design ist damit keine Option, sondern eine Grundvoraussetzung.",
      buildMyVisionConnection:
        "Jedes Projekt, das wir umsetzen, ist selbstverständlich responsive. Wir testen auf verschiedenen Geräten und Bildschirmgrößen, damit deine Webseite überall perfekt aussieht.",
    },
    relatedSlugs: [
      "webdesign",
      "suchmaschinenoptimierung",
      "landing-page",
    ],
  },
  {
    slug: "domain",
    term: "Domain",
    shortDefinition:
      "Eine Domain ist die eindeutige Internetadresse einer Webseite — zum Beispiel buildmyvision.de — unter der sie im Browser erreichbar ist.",
    category: "digital",
    content: {
      definition:
        "Eine Domain ist der Name, unter dem eine Webseite im Internet erreichbar ist. Sie ersetzt die technische IP-Adresse (eine Zahlenfolge wie 192.168.1.1) durch einen lesbaren Namen wie beispiel.de. Das Domain Name System (DNS) übersetzt den Namen in die zugehörige IP-Adresse.\n\nDomains bestehen aus mehreren Teilen: der Top-Level-Domain (.de, .com, .io), der Second-Level-Domain (der eigentliche Name) und optional einer Subdomain (z. B. blog.beispiel.de). Die Wahl der richtigen Domain ist eine wichtige Geschäftsentscheidung — sie beeinflusst Markenwahrnehmung, SEO und Auffindbarkeit.\n\nDomains werden bei Registraren (z. B. DENIC für .de-Domains) registriert und jährlich verlängert. Eine Domain allein macht noch keine Webseite — dafür braucht es zusätzlich Hosting, also Serverplatz, auf dem die Webseite gespeichert ist.",
      examples: [
        "google.de ist die Domain der deutschen Google-Suchmaschine",
        "shop.meinunternehmen.de nutzt die Subdomain shop für den Online-Shop",
        "Eine .io-Domain wird häufig von Tech-Startups gewählt (z. B. notion.io)",
      ],
      relevance:
        "Die Domain ist die digitale Visitenkarte eines Unternehmens. Ein einprägsamer, kurzer Domainname stärkt die Marke und erleichtert es Kunden, die Webseite wiederzufinden. Außerdem ist die Domain ein SEO-Faktor: Keywords in der Domain können die Rankings positiv beeinflussen.",
      buildMyVisionConnection:
        "Bei jedem Webprojekt beraten wir dich zur Domain-Strategie: Welche Endung passt? Braucht es Subdomains? Wie richtest du DNS korrekt ein? Wir übernehmen die technische Einrichtung.",
    },
    relatedSlugs: [
      "hosting",
      "ssl-zertifikat",
      "suchmaschinenoptimierung",
    ],
  },
  {
    slug: "hosting",
    term: "Hosting",
    shortDefinition:
      "Hosting ist der Service, der Speicherplatz und Rechenleistung auf einem Server bereitstellt, damit eine Webseite im Internet erreichbar ist.",
    category: "digital",
    content: {
      definition:
        "Webhosting (kurz Hosting) stellt die technische Infrastruktur bereit, die eine Webseite benötigt, um im Internet abrufbar zu sein. Ein Hosting-Anbieter betreibt Server — leistungsstarke Computer in Rechenzentren — und vermietet Speicherplatz, Rechenleistung und Bandbreite.\n\nEs gibt verschiedene Hosting-Arten: Shared Hosting (mehrere Webseiten teilen sich einen Server — günstig, aber langsam), VPS (virtueller privater Server — mehr Kontrolle), Dedicated Server (eigener physischer Server) und Cloud Hosting (dynamische Ressourcen aus der Cloud). Moderne Plattformen wie Vercel oder Netlify bieten Serverless Hosting, bei dem keine Server manuell verwaltet werden müssen.\n\nDie Wahl des Hostings beeinflusst Geschwindigkeit, Sicherheit und Zuverlässigkeit einer Webseite direkt. Ein langsamer Server bedeutet lange Ladezeiten — und die kosten Besucher und Rankings.",
      examples: [
        "Ein kleines Unternehmen nutzt Shared Hosting bei einem Anbieter für 5 € im Monat",
        "Ein Online-Shop mit viel Traffic setzt auf Cloud Hosting mit automatischer Skalierung",
        "Eine Next.js-Anwendung wird auf Vercel gehostet — Serverless, global verteilt, ohne Serververwaltung",
      ],
      relevance:
        "Hosting ist das Fundament jeder Webpräsenz. Die falsche Hosting-Wahl führt zu langsamen Seiten, Ausfällen und Sicherheitslücken. Die richtige Wahl sorgt für schnelle Ladezeiten, hohe Verfügbarkeit und ein sorgenfreies Betriebsmodell.",
      buildMyVisionConnection:
        "Wir hosten dein Projekt auf modernen Plattformen wie Vercel — mit globaler Auslieferung, automatischer Skalierung und ohne Serververwaltung. Du konzentrierst dich auf dein Geschäft, wir auf die Technik.",
    },
    relatedSlugs: [
      "domain",
      "ssl-zertifikat",
      "cloud-computing",
      "suchmaschinenoptimierung",
    ],
  },
  {
    slug: "ssl-zertifikat",
    term: "SSL-Zertifikat",
    shortDefinition:
      "Ein SSL-Zertifikat verschlüsselt die Datenübertragung zwischen Browser und Server und sorgt für das HTTPS und das Schloss-Symbol in der Adressleiste.",
    category: "digital",
    content: {
      definition:
        "Ein SSL-Zertifikat (Secure Sockets Layer, heute technisch TLS — Transport Layer Security) verschlüsselt die Kommunikation zwischen dem Browser des Nutzers und dem Webserver. Dadurch können Dritte die übertragenen Daten nicht mitlesen — wichtig bei Formularen, Logins und besonders bei Zahlungen.\n\nErkennbar ist eine SSL-gesicherte Verbindung am https:// in der URL und dem Schloss-Symbol im Browser. Webseiten ohne SSL werden von modernen Browsern als Nicht sicher markiert — ein absolutes No-Go für Unternehmensseiten.\n\nSSL-Zertifikate gibt es kostenlos (Let's Encrypt) oder kostenpflichtig mit erweiterter Validierung (EV-Zertifikate, die den Firmennamen in der Adressleiste anzeigen). Moderne Hosting-Plattformen wie Vercel stellen SSL-Zertifikate automatisch bereit.",
      examples: [
        "Ein Online-Shop verschlüsselt Kreditkartendaten beim Checkout per SSL",
        "Ein Kontaktformular überträgt Name, E-Mail und Nachricht verschlüsselt",
        "Let's Encrypt stellt kostenlose SSL-Zertifikate bereit, die automatisch erneuert werden",
      ],
      relevance:
        "SSL ist heute Pflicht — nicht optional. Seit 2018 ist HTTPS ein Google-Rankingfaktor. Browser warnen aktiv vor Seiten ohne SSL. Für die DSGVO ist verschlüsselte Datenübertragung bei personenbezogenen Daten sogar rechtlich vorgeschrieben.",
      buildMyVisionConnection:
        "Alle unsere Projekte werden mit automatischem SSL ausgeliefert. Du musst dich um nichts kümmern — die Verschlüsselung ist von Anfang an aktiv.",
    },
    relatedSlugs: [
      "hosting",
      "domain",
      "suchmaschinenoptimierung",
    ],
  },
  {
    slug: "content-management-system",
    term: "Content Management System (CMS)",
    shortDefinition:
      "Ein Content Management System ermöglicht das Erstellen, Bearbeiten und Verwalten von Webseiteninhalten — ohne Programmierkenntnisse.",
    category: "digital",
    content: {
      definition:
        "Ein Content Management System — kurz CMS — ist eine Software, mit der Webseiteninhalte verwaltet werden können, ohne Code schreiben zu müssen. Texte, Bilder, Videos und Seiten lassen sich über eine grafische Oberfläche erstellen und bearbeiten.\n\nDas bekannteste CMS ist WordPress, das über 40 % aller Webseiten weltweit antreibt. Weitere populäre Systeme sind Strapi, Sanity, Contentful (Headless CMS) und Webflow (visueller Website-Builder). Headless CMS trennen die Inhaltsverwaltung vom Frontend — Inhalte werden per API ausgeliefert und können auf Webseiten, Apps oder anderen Kanälen angezeigt werden.\n\nDie Wahl des richtigen CMS hängt vom Anwendungsfall ab: WordPress ist ideal für Blogs und einfache Unternehmensseiten. Headless CMS eignen sich für komplexere Projekte, bei denen Inhalte auf mehreren Plattformen ausgespielt werden.",
      examples: [
        "Ein Unternehmen pflegt seinen Blog und seine Teamseite über WordPress — ohne Entwickler einzubinden",
        "Ein E-Commerce-Projekt nutzt Sanity als Headless CMS und zeigt Inhalte per API auf der Next.js-Seite an",
        "Eine Marketingabteilung erstellt Landingpages eigenständig über einen visuellen CMS-Editor",
      ],
      relevance:
        "Ein CMS gibt dir die Kontrolle über deine Inhalte zurück. Statt für jede Textänderung einen Entwickler beauftragen zu müssen, aktualisierst du Inhalte selbst — sofort und ohne technische Hürden. Das spart Zeit, Geld und beschleunigt die Reaktion auf Marktveränderungen.",
      buildMyVisionConnection:
        "Wir integrieren das passende CMS in dein Projekt. Ob Headless CMS für maximale Flexibilität oder ein klassisches System für einfache Handhabung — du bekommst die Lösung, die zu deinem Workflow passt.",
    },
    relatedSlugs: [
      "webdesign",
      "api",
      "hosting",
      "landing-page",
    ],
  },
  {
    slug: "landing-page",
    term: "Landing Page",
    shortDefinition:
      "Eine Landing Page ist eine speziell gestaltete Webseite mit einem einzigen Ziel: Besucher zu einer bestimmten Aktion zu bewegen — z. B. Anmeldung, Kauf oder Kontaktanfrage.",
    category: "digital",
    content: {
      definition:
        "Eine Landing Page (Zielseite) ist eine eigenständige Webseite, die auf ein einziges Konversionsziel ausgerichtet ist. Im Gegensatz zu einer normalen Webseite mit vielen Navigationsoptionen führt eine Landing Page den Besucher gezielt zu einer Aktion: Formular ausfüllen, Produkt kaufen, Newsletter abonnieren.\n\nEffektive Landing Pages folgen bewährten Prinzipien: eine klare Überschrift (Value Proposition), ein überzeugender Untertext, Social Proof (Kundenstimmen, Logos), ein sichtbarer Call-to-Action (CTA-Button) und möglichst wenig Ablenkung. Keine Hauptnavigation, keine Sidebar, kein Footer mit Dutzenden Links.\n\nLanding Pages werden im Marketing für Werbekampagnen, Produktlaunches, Event-Anmeldungen und Lead-Generierung eingesetzt. Sie sind messbar — Conversion Rate und Bounce Rate zeigen sofort, ob die Seite funktioniert.",
      examples: [
        "Eine SaaS-Firma schaltet Google Ads und leitet Klicks auf eine Landing Page mit kostenlosem Trial",
        "Ein Event-Veranstalter erstellt eine Landing Page für Ticketverkäufe mit Countdown-Timer",
        "Ein Startup sammelt E-Mail-Adressen über eine Wartelisten-Landing-Page vor dem Launch",
      ],
      relevance:
        "Landing Pages sind das Arbeitspferd des digitalen Marketings. Sie konvertieren Traffic in Leads, Leads in Kunden. Eine gut optimierte Landing Page kann Conversion Rates von 10–25 % erreichen — im Vergleich zu 2–3 % bei einer normalen Webseite.",
      buildMyVisionConnection:
        "Landing Pages sind unsere Spezialität. Wir gestalten konversionsstarke Seiten, die deine Zielgruppe überzeugen — mit klarem Design, schneller Ladezeit und messbaren Ergebnissen.",
    },
    relatedSlugs: [
      "conversion-rate",
      "suchmaschinenoptimierung",
      "webdesign",
      "web-analytics",
    ],
  },
  {
    slug: "conversion-rate",
    term: "Conversion Rate",
    shortDefinition:
      "Die Conversion Rate gibt an, welcher Prozentsatz der Webseitenbesucher eine gewünschte Aktion ausführt — z. B. einen Kauf abschließt oder ein Formular ausfüllt.",
    category: "digital",
    content: {
      definition:
        "Die Conversion Rate (Konversionsrate) ist eine der wichtigsten Kennzahlen im Online-Marketing. Sie misst, wie viele Besucher einer Webseite die gewünschte Aktion durchführen — in Prozent. Die Formel: (Anzahl Conversions / Anzahl Besucher) × 100.\n\nEine Conversion kann vieles sein: ein Kauf, eine Newsletter-Anmeldung, ein Download, eine Kontaktanfrage oder ein Klick auf einen Button. Was als Conversion zählt, definiert das Unternehmen selbst — abhängig vom Geschäftsziel.\n\nConversion Rate Optimization (CRO) ist die systematische Verbesserung der Konversionsrate. Dazu gehören A/B-Tests (zwei Versionen einer Seite gegeneinander testen), Heatmaps (sehen, wo Nutzer klicken) und Nutzerforschung. Kleine Änderungen — wie eine andere Button-Farbe oder ein kürzeres Formular — können die Conversion Rate signifikant steigern.",
      examples: [
        "Ein Online-Shop hat 10.000 Besucher und 300 Käufe pro Monat — Conversion Rate: 3 %",
        "Durch Verkürzung des Checkout-Prozesses steigt die Conversion Rate von 2 % auf 4 %",
        "Ein A/B-Test zeigt, dass ein grüner CTA-Button 15 % mehr Klicks bekommt als ein roter",
      ],
      relevance:
        "Mehr Traffic bringt nichts, wenn die Webseite nicht konvertiert. Die Conversion Rate entscheidet, ob sich Marketingausgaben lohnen. Eine Verdopplung der Conversion Rate hat den gleichen Effekt wie eine Verdopplung des Traffics — ist aber deutlich günstiger.",
      buildMyVisionConnection:
        "Wir bauen Webseiten und Plattformen mit Conversion im Fokus. Klare CTAs, schnelle Ladezeiten, intuitive Nutzerführung — jedes Element dient dem Ziel, Besucher in Kunden zu verwandeln.",
    },
    relatedSlugs: [
      "landing-page",
      "web-analytics",
      "suchmaschinenoptimierung",
      "webdesign",
    ],
  },
  {
    slug: "web-analytics",
    term: "Web Analytics",
    shortDefinition:
      "Web Analytics umfasst die Erfassung und Auswertung von Webseitendaten — wie Besucherzahlen, Verweildauer und Nutzerverhalten — um datenbasierte Entscheidungen zu treffen.",
    category: "digital",
    content: {
      definition:
        "Web Analytics (Webanalyse) liefert Antworten auf die Fragen: Wer besucht meine Webseite? Woher kommen die Besucher? Was machen sie auf der Seite? Und warum verlassen sie sie wieder? Durch die systematische Auswertung dieser Daten können Webseiten gezielt verbessert werden.\n\nDie bekanntesten Tools sind Google Analytics, Plausible, Fathom und Vercel Web Analytics. Sie erfassen Metriken wie Seitenaufrufe, Verweildauer, Absprungrate (Bounce Rate), Traffic-Quellen und Konversionspfade. Datenschutzfreundliche Alternativen wie Plausible oder Fathom setzen keine Cookies und sind DSGVO-konform.\n\nModerne Web Analytics geht über einfache Zählung hinaus: Event-Tracking misst spezifische Nutzeraktionen (Klicks, Scrolltiefe, Formularabbrüche), Funnel-Analysen zeigen, wo Nutzer im Konversionsprozess abspringen, und Kohortenanalysen verfolgen das Verhalten von Nutzergruppen über Zeit.",
      examples: [
        "Ein Unternehmen erkennt über Analytics, dass 70 % der Besucher die Seite auf dem Smartphone nutzen",
        "Event-Tracking zeigt, dass Nutzer das Kontaktformular oft erst auf der Pricing-Seite aufrufen",
        "Traffic-Analyse enthüllt, dass ein Blogartikel 40 % des gesamten organischen Traffics bringt",
      ],
      relevance:
        "Ohne Daten ist jede Entscheidung ein Ratespiel. Web Analytics liefert die Fakten, die du brauchst, um deine Webseite zu optimieren, dein Marketing zu steuern und dein Geschäft zu verstehen. Wer seine Zahlen kennt, trifft bessere Entscheidungen.",
      buildMyVisionConnection:
        "Wir richten datenschutzfreundliche Analytics für dein Projekt ein — damit du verstehst, wie Nutzer dein Produkt verwenden, ohne ihre Privatsphäre zu verletzen.",
    },
    relatedSlugs: [
      "conversion-rate",
      "suchmaschinenoptimierung",
      "landing-page",
    ],
  },

  // === Technologie ===
  {
    slug: "api",
    term: "API (Application Programming Interface)",
    shortDefinition:
      "Eine API ist eine Schnittstelle, über die verschiedene Softwaresysteme miteinander kommunizieren und Daten austauschen können.",
    category: "tech",
    content: {
      definition:
        "Eine API — Application Programming Interface — ist eine definierte Schnittstelle, über die zwei Softwaresysteme miteinander kommunizieren. Man kann sich eine API wie einen Kellner im Restaurant vorstellen: Du (die Anwendung) gibst deine Bestellung auf, der Kellner (die API) bringt sie in die Küche (den Server) und kommt mit dem Ergebnis zurück.\n\nDie gebräuchlichste API-Art im Web sind REST-APIs: Sie nutzen HTTP-Anfragen (GET, POST, PUT, DELETE), um Daten im JSON-Format auszutauschen. Neuere Alternativen sind GraphQL (flexible Datenabfragen) und gRPC (besonders performant).\n\nAPIs sind das Rückgrat moderner Software. Fast jede App, die du täglich nutzt, kommuniziert über APIs: Wetterdaten, Zahlungsabwicklung, Maps-Integration, Social-Media-Einbindung — all das funktioniert über Schnittstellen.",
      examples: [
        "Ein Online-Shop nutzt die Stripe-API, um Kreditkartenzahlungen zu verarbeiten",
        "Eine Wetter-App ruft aktuelle Daten über eine Wetter-API ab und zeigt sie an",
        "Google Maps wird über eine API in Webseiten eingebunden, um Standorte anzuzeigen",
      ],
      relevance:
        "APIs ermöglichen es, auf Funktionen zuzugreifen, die du nie selbst entwickeln könntest oder wolltest. Statt ein Zahlungssystem zu bauen, nutzt du die Stripe-API. Statt eigene Karten zu zeichnen, nutzt du Google Maps. APIs beschleunigen die Entwicklung und senken die Kosten massiv.",
      buildMyVisionConnection:
        "APIs sind unser täglich Brot. Wir integrieren externe Services und bauen eigene APIs für deine Plattform. Dein System kommuniziert nahtlos mit Zahlungsanbietern, CRM, E-Mail-Services und KI-Modellen.",
    },
    relatedSlugs: [
      "saas",
      "ki-integration",
      "cloud-computing",
      "full-stack-entwicklung",
    ],
  },
  {
    slug: "datenbank",
    term: "Datenbank",
    shortDefinition:
      "Eine Datenbank ist ein organisiertes System zur Speicherung, Verwaltung und Abfrage von Daten — das Herzstück jeder datengetriebenen Anwendung.",
    category: "tech",
    content: {
      definition:
        "Eine Datenbank speichert Daten strukturiert und macht sie schnell abrufbar. Im Kern beantwortet eine Datenbank die Frage: Wie speichere ich Informationen so, dass ich sie später effizient wiederfinden kann?\n\nRelational Datenbanken (SQL) wie PostgreSQL, MySQL oder SQLite organisieren Daten in Tabellen mit Zeilen und Spalten. Sie eignen sich hervorragend für strukturierte Daten mit klaren Beziehungen — Kunden, Bestellungen, Produkte. NoSQL-Datenbanken wie MongoDB oder Redis verzichten auf feste Tabellenstrukturen und sind flexibler bei unstrukturierten Daten.\n\nModerne Cloud-Datenbanken wie Neon (Serverless Postgres), PlanetScale oder Supabase bieten Datenbank-Funktionalität als Service: kein eigener Server, automatische Skalierung, eingebaute Backups. Das macht Datenbanken auch für kleine Projekte zugänglich und bezahlbar.",
      examples: [
        "Ein Online-Shop speichert Produkte, Kunden und Bestellungen in einer PostgreSQL-Datenbank",
        "Eine Social-Media-App nutzt Redis als schnellen Cache für häufig abgerufene Daten",
        "Eine Analytics-Plattform speichert Milliarden von Events in einer spezialisierten Zeitreihendatenbank",
      ],
      relevance:
        "Daten sind das wertvollste Gut eines digitalen Unternehmens. Die richtige Datenbank-Architektur entscheidet über Performance, Skalierbarkeit und letztlich über den Geschäftserfolg. Eine falsche Wahl kann zu langsamen Abfragen, Datenverlust oder explodierenden Kosten führen.",
      buildMyVisionConnection:
        "Wir wählen die passende Datenbank für dein Projekt und setzen sie professionell auf. Von der Schemaplanung über die API-Integration bis zur Backup-Strategie — deine Daten sind bei uns in guten Händen.",
    },
    relatedSlugs: [
      "api",
      "cloud-computing",
      "full-stack-entwicklung",
      "hosting",
    ],
  },
  {
    slug: "cloud-computing",
    term: "Cloud Computing",
    shortDefinition:
      "Cloud Computing stellt Rechenleistung, Speicherplatz und Software über das Internet bereit — statt auf lokalen Servern oder Computern.",
    category: "tech",
    content: {
      definition:
        "Cloud Computing bedeutet, IT-Ressourcen über das Internet zu nutzen, statt sie selbst zu betreiben. Statt eigene Server zu kaufen und zu warten, mietet man Rechenleistung, Speicher und Dienste bei Cloud-Anbietern — und zahlt nur, was man tatsächlich nutzt.\n\nDie drei großen Cloud-Anbieter sind Amazon Web Services (AWS), Microsoft Azure und Google Cloud Platform (GCP). Daneben gibt es spezialisierte Plattformen wie Vercel (Webseiten und Apps), Neon (Datenbanken) oder Cloudflare (CDN und Edge Computing).\n\nCloud Computing gibt es in drei Abstraktionsebenen: IaaS (Infrastructure as a Service — virtuelle Server), PaaS (Platform as a Service — Entwicklungsplattformen) und SaaS (Software as a Service — fertige Anwendungen). Je höher die Ebene, desto weniger Infrastruktur musst du selbst verwalten.",
      examples: [
        "Ein Startup nutzt AWS, um Server bei Bedarf hochzufahren — statt eigene Hardware zu kaufen",
        "Google Docs ist eine SaaS-Anwendung: Software in der Cloud, erreichbar über den Browser",
        "Netflix streamt Filme über Cloud-Server, die weltweit verteilt sind und automatisch skalieren",
      ],
      relevance:
        "Cloud Computing hat die Einstiegshürden für Technologie dramatisch gesenkt. Ein Startup kann heute mit wenigen Euro pro Monat die gleiche Infrastruktur nutzen wie ein Konzern. Flexibilität, Skalierbarkeit und Kosteneffizienz machen die Cloud zur Standardwahl für digitale Projekte.",
      buildMyVisionConnection:
        "Wir setzen auf moderne Cloud-Infrastruktur für dein Projekt. Vercel für das Frontend, Neon für die Datenbank, Resend für E-Mails — alles aus der Cloud, automatisch skalierend und ohne Serververwaltung.",
    },
    relatedSlugs: [
      "hosting",
      "saas",
      "datenbank",
      "devops",
    ],
  },
  {
    slug: "saas",
    term: "SaaS (Software as a Service)",
    shortDefinition:
      "SaaS ist ein Geschäftsmodell, bei dem Software über das Internet bereitgestellt und per Abonnement bezahlt wird — statt sie zu kaufen und selbst zu installieren.",
    category: "tech",
    content: {
      definition:
        "SaaS — Software as a Service — ist das dominierende Geschäftsmodell der Softwareindustrie. Statt eine Software einmalig zu kaufen und auf dem eigenen Rechner zu installieren, nutzt man sie über den Browser und zahlt monatlich oder jährlich eine Gebühr.\n\nDer Anbieter kümmert sich um alles: Hosting, Updates, Sicherheit und Verfügbarkeit. Der Nutzer braucht nur einen Browser und eine Internetverbindung. Das macht SaaS besonders attraktiv für Unternehmen, die keine eigene IT-Abteilung haben.\n\nBeispiele für erfolgreiche SaaS-Produkte: Slack (Kommunikation), Notion (Projektmanagement), Shopify (E-Commerce), HubSpot (CRM/Marketing) und Figma (Design). Gemeinsam haben sie: einfacher Einstieg, monatliche Abrechnung, kontinuierliche Updates.",
      examples: [
        "Shopify ermöglicht es Händlern, einen Online-Shop zu betreiben — ohne eigene Server oder Programmierer",
        "Figma läuft komplett im Browser und lässt Teams in Echtzeit an Designs zusammenarbeiten",
        "Notion ersetzt Notizen, Wikis und Projektmanagement in einer einzigen SaaS-Anwendung",
      ],
      relevance:
        "SaaS ist eines der profitabelsten Geschäftsmodelle im digitalen Bereich. Wiederkehrende Einnahmen, hohe Skalierbarkeit und niedrige Grenzkosten machen es attraktiv für Gründer. Gleichzeitig erwarten Nutzer heute SaaS-Standard: einfache Anmeldung, sofortige Nutzung, transparente Preise.",
      buildMyVisionConnection:
        "Du willst ein eigenes SaaS-Produkt bauen? Wir setzen deine Idee um — von der Nutzerverwaltung über die Abo-Abrechnung bis zum Dashboard. Technisch sauber, skalierbar und bereit für deine ersten Kunden.",
    },
    relatedSlugs: [
      "cloud-computing",
      "api",
      "full-stack-entwicklung",
      "mvp-minimum-viable-product",
    ],
  },
  {
    slug: "full-stack-entwicklung",
    term: "Full-Stack-Entwicklung",
    shortDefinition:
      "Full-Stack-Entwicklung umfasst die Programmierung sowohl des sichtbaren Teils einer Webanwendung (Frontend) als auch der Serverlogik und Datenverarbeitung (Backend).",
    category: "tech",
    content: {
      definition:
        "Full-Stack-Entwicklung bedeutet, beide Seiten einer Webanwendung zu beherrschen: das Frontend (was der Nutzer sieht und bedient) und das Backend (die Serverlogik, Datenbanken und APIs im Hintergrund).\n\nDas Frontend wird mit HTML, CSS und JavaScript/TypeScript gebaut, oft mit Frameworks wie React, Next.js oder Vue. Das Backend umfasst Serverlogik (Node.js, Python, Go), Datenbanken (PostgreSQL, MongoDB) und APIs, die Frontend und Backend verbinden.\n\nModerne Frameworks wie Next.js verwischen die Grenze zwischen Frontend und Backend: Server Components rendern auf dem Server, API-Routen laufen als Serverless Functions, und ein Entwickler kann die gesamte Anwendung in einem Projekt bauen. Das macht Full-Stack-Entwicklung effizienter als je zuvor.",
      examples: [
        "Ein Entwickler baut die Benutzeroberfläche eines Dashboards (React) und die API dahinter (Node.js)",
        "Eine Next.js-Anwendung kombiniert Server-seitiges Rendering und API-Endpunkte in einem Projekt",
        "Ein Full-Stack-Entwickler setzt einen kompletten Online-Shop um: von der Produktseite bis zur Zahlungsabwicklung",
      ],
      relevance:
        "Full-Stack-Entwicklung ermöglicht es, mit einem kleinen Team (oder sogar als Einzelperson) vollständige Webanwendungen zu bauen. Für Startups und KMU ist das entscheidend: statt Frontend- und Backend-Spezialisten separat zu engagieren, liefert ein Full-Stack-Entwickler alles aus einer Hand.",
      buildMyVisionConnection:
        "Wir sind Full-Stack-Entwickler. Du bekommst bei uns alles: Design, Frontend, Backend, Datenbank, Deployment. Ein Ansprechpartner, ein kohärentes Produkt, keine Schnittstellenprobleme.",
    },
    relatedSlugs: [
      "api",
      "datenbank",
      "saas",
      "mvp-minimum-viable-product",
    ],
  },
  {
    slug: "mvp-minimum-viable-product",
    term: "MVP (Minimum Viable Product)",
    shortDefinition:
      "Ein MVP ist die einfachste Version eines Produkts, die gerade genug Funktionen hat, um von ersten Nutzern getestet und validiert zu werden.",
    category: "tech",
    content: {
      definition:
        "Ein Minimum Viable Product — kurz MVP — ist die schnörkelloseste Version eines Produkts, die den Kernnutzen demonstriert. Es hat nur die Features, die unbedingt nötig sind, um das Grundproblem zu lösen und von echten Nutzern getestet zu werden.\n\nDas Konzept stammt aus der Lean-Startup-Methodik von Eric Ries: Statt monatelang ein perfektes Produkt zu entwickeln, bringt man schnell eine einfache Version auf den Markt, sammelt Feedback und verbessert iterativ. So vermeidet man, an der Zielgruppe vorbeizuentwickeln.\n\nEin MVP ist kein Prototyp und kein Proof of Concept. Es ist ein echtes Produkt, das echte Nutzer verwenden können — nur eben mit bewusst reduziertem Funktionsumfang. Die Kunst liegt darin, das Richtige wegzulassen.",
      examples: [
        "Dropbox startete als MVP mit einem einzigen Erklärvideo — bevor auch nur eine Zeile Code geschrieben wurde",
        "Airbnb begann als einfache Webseite, auf der die Gründer ihre eigene Wohnung zur Miete anboten",
        "Ein SaaS-MVP könnte nur 3 von 20 geplanten Features haben — aber die 3 wichtigsten",
      ],
      relevance:
        "80 % aller Startups scheitern, weil sie ein Produkt bauen, das niemand will. Ein MVP minimiert dieses Risiko: Du investierst Wochen statt Monate, testest deine Hypothese am Markt und sparst Geld für Features, die sich als unnötig herausstellen. Fail fast, learn faster.",
      buildMyVisionConnection:
        "MVPs sind unser Sweet Spot. Wir helfen dir, deine Idee auf das Wesentliche zu reduzieren und schnell ein funktionierendes Produkt zu launchen. Kein Feature-Bloat, kein Over-Engineering — nur das, was zählt.",
    },
    relatedSlugs: [
      "saas",
      "full-stack-entwicklung",
      "landing-page",
    ],
  },
  {
    slug: "devops",
    term: "DevOps",
    shortDefinition:
      "DevOps ist eine Arbeitskultur und Sammlung von Praktiken, die Softwareentwicklung (Dev) und IT-Betrieb (Ops) zusammenführt, um Software schneller und zuverlässiger bereitzustellen.",
    category: "tech",
    content: {
      definition:
        "DevOps steht für die Verschmelzung von Development (Entwicklung) und Operations (Betrieb). Statt dass Entwickler Code schreiben und ihn über den Zaun an ein Betriebsteam werfen, ist bei DevOps das gleiche Team für beides verantwortlich: Code schreiben und ihn in Produktion betreiben.\n\nKernpraktiken von DevOps sind: Continuous Integration (Code wird häufig zusammengeführt und automatisch getestet), Continuous Deployment (Code wird automatisch ausgeliefert), Infrastructure as Code (Servereinrichtung als Code statt manuell) und Monitoring (Überwachung der laufenden Anwendung).\n\nModerne Plattformen wie Vercel, Netlify oder Railway abstrahieren viele DevOps-Aufgaben: Deploy-Pipelines, SSL, Skalierung und Monitoring sind eingebaut. Trotzdem bleibt das Verständnis von DevOps-Prinzipien wichtig — um Probleme zu diagnostizieren und Entscheidungen zu treffen.",
      examples: [
        "Ein Entwickler pusht Code auf GitHub → automatische Tests laufen → bei Erfolg wird automatisch deployed",
        "Infrastructure as Code: Servereinrichtung ist in einer Datei definiert und versioniert, nicht manuell konfiguriert",
        "Ein Monitoring-System alarmiert das Team, wenn die Antwortzeiten einer API über 500ms steigen",
      ],
      relevance:
        "DevOps-Praktiken beschleunigen die Softwareauslieferung dramatisch: von vierteljährlichen Releases zu täglichen oder sogar stündlichen Deployments. Für Unternehmen bedeutet das: schnellere Feature-Releases, weniger Ausfälle und die Fähigkeit, schnell auf Marktveränderungen zu reagieren.",
      buildMyVisionConnection:
        "Wir setzen moderne DevOps-Praktiken von Anfang an ein: automatische Deployments, Preview-Umgebungen für jede Änderung und Monitoring in Produktion. Dein Projekt ist von Tag 1 professionell betrieben.",
    },
    relatedSlugs: [
      "cloud-computing",
      "hosting",
      "full-stack-entwicklung",
      "automatisierung",
    ],
  },
  {
    slug: "open-source",
    term: "Open Source",
    shortDefinition:
      "Open Source bezeichnet Software, deren Quellcode öffentlich zugänglich ist und von jedem eingesehen, genutzt, verändert und weiterverbreitet werden darf.",
    category: "tech",
    content: {
      definition:
        "Open Source Software (OSS) ist Software, deren Quellcode offen einsehbar ist. Jeder kann den Code lesen, verändern und für eigene Projekte nutzen — im Rahmen der jeweiligen Lizenz. Das Gegenteil ist proprietäre Software, deren Code geheim bleibt.\n\nOpen Source ist kein Nischenphenomen: Linux betreibt über 90 % aller Server weltweit, Android basiert auf Open Source, und die meisten modernen Webanwendungen nutzen Hunderte von Open-Source-Bibliotheken. Frameworks wie React, Next.js und Tailwind CSS sind alle Open Source.\n\nDas Open-Source-Ökosystem lebt von Community-Beiträgen: Entwickler weltweit verbessern gemeinsam Software, finden Sicherheitslücken und teilen Wissen. Unternehmen wie Google, Meta und Microsoft sind gleichzeitig die größten Open-Source-Beitragenden.",
      examples: [
        "Next.js ist ein Open-Source-Framework — jeder kann den Quellcode auf GitHub einsehen und Verbesserungen einreichen",
        "Linux ist das meistgenutzte Server-Betriebssystem und vollständig Open Source",
        "Ein Startup nutzt Open-Source-Bibliotheken für Authentifizierung, Datenbank-Zugriff und UI-Komponenten",
      ],
      relevance:
        "Open Source senkt Entwicklungskosten drastisch: Statt alles von Grund auf zu bauen, nutzt man bewährte, von der Community gepflegte Lösungen. Gleichzeitig bietet Open Source Transparenz — du kannst den Code überprüfen und bist nicht von einem einzelnen Anbieter abhängig.",
      buildMyVisionConnection:
        "Unser Tech-Stack ist zu großen Teilen Open Source: Next.js, React, Tailwind CSS, Drizzle ORM. Du profitierst von stabiler, gut dokumentierter Software ohne Vendor Lock-in.",
    },
    relatedSlugs: [
      "full-stack-entwicklung",
      "api",
      "cloud-computing",
    ],
  },
];

// === Hilfsfunktionen ===

/** Alle Einträge alphabetisch nach Term sortiert */
export function getAllEntries(): LexikonEntry[] {
  return [...entries].sort((a, b) => a.term.localeCompare(b.term, "de"));
}

/** Einzelnen Eintrag anhand des Slugs finden */
export function getEntryBySlug(slug: string): LexikonEntry | undefined {
  return entries.find((e) => e.slug === slug);
}

/** Einträge nach Kategorie filtern */
export function getEntriesByCategory(
  category: LexikonCategory
): LexikonEntry[] {
  return getAllEntries().filter((e) => e.category === category);
}

/** Verwandte Einträge anhand von Slugs laden */
export function getRelatedEntries(slugs: string[]): LexikonEntry[] {
  return slugs
    .map((slug) => entries.find((e) => e.slug === slug))
    .filter((e): e is LexikonEntry => e !== undefined);
}

/** Alle verfügbaren Slugs (für generateStaticParams) */
export function getAllSlugs(): string[] {
  return entries.map((e) => e.slug);
}
