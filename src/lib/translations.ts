export type Language = "en" | "nl";

export interface Translations {
  nav: {
    focus: string;
    principles: string;
    approach: string;
    contact: string;
  };
  hero: {
    subtitle: string;
  };
  focus: {
    sectionTitle: string;
    cardTitle: string;
    description: string;
  };
  values: {
    sectionTitle: string;
    readMore: string;
    readLess: string;
    cards: Array<{
      title: string;
      subtitle: string;
      description: string;
    }>;
  };
  approach: {
    sectionTitle: string;
    subtitle: string;
    intro: string;
    steps: Array<{
      number: string;
      title: string;
      content: string;
    }>;
  };
  contact: {
    sectionTitle: string;
    intro: string;
    cta: string;
    footer: {
      tagline: string;
      contactTitle: string;
      email: string;
      linkedin: string;
      partnersTitle: string;
      partnersDescription: string;
      disclaimer: string;
      disclaimerTitle: string;
      disclaimerText: string;
    };
  };
  cookie: {
    message: string;
    accept: string;
    decline: string;
  };
}

const en: Translations = {
  nav: {
    focus: "Focus",
    principles: "Principles",
    approach: "Approach",
    contact: "Contact",
  },
  hero: {
    subtitle: "Real Estate Development",
  },
  focus: {
    sectionTitle: "Our Focus",
    cardTitle: "Developing Turnkey Care Real Estate",
    description:
      "We find, acquire, and develop real estate for private residential care and senior housing. We work closely with care operators to translate their care concept and operational requirements into the right locations and buildings. From sourcing, often off-market, to development and delivery, we create high-quality, turnkey care residences built for long-term use.",
  },
  values: {
    sectionTitle: "Our Value Creating Principles",
    readMore: "Read More",
    readLess: "Read Less",
    cards: [
      {
        title: "Vitality & Well-being",
        subtitle: "Health-Focused Design",
        description:
          "We design care residences that support quality of life at every level of care. Our environments promote natural movement, social interaction, access to outdoor space, and a strong sense of home. Comfort, orientation, and calm are embedded in the architecture, ensuring residents can live with dignity, safety, and well-being within high quality care concepts.",
      },
      {
        title: "Location Fit",
        subtitle: "Care-Oriented Locations",
        description:
          "We focus on locations that match the spatial, residential, and operational requirements of high quality care concepts. Location selection takes place in close collaboration with care operators, combining our analyses with the operator's own insights and criteria. This approach ensures locations that support daily operations and long-term growth strategies.",
      },
      {
        title: "Data-driven Development",
        subtitle: "Fact-Based Decision Making",
        description:
          "Every project starts with a robust business case. We support decision-making by combining demographic analysis, location data, and building assessments with the operator's own market knowledge and internal analyses. Our inhouse built development discovery tool is used to explore, compare, and validate potential locations together with the operator.",
      },
      {
        title: "Quality & Historical Awareness",
        subtitle: "Spirit of Place",
        description:
          "We respect the character and history of each location. Whether transforming heritage buildings or developing new residences, our focus is on timeless quality, spatial generosity, and architectural coherence. The result is high quality care environments that feel residential, refined, and built to last.",
      },
      {
        title: "Partnership",
        subtitle: "Aligned with the Operator",
        description:
          "We operate as an extension of the care operator. From early feasibility to final delivery, we align development decisions with operational models, care concepts, and long-term growth strategies. This creates a clear and efficient development process that supports the operator's objectives from start to finish.",
      },
      {
        title: "Innovation & Applied Intelligence",
        subtitle: "Supported by Data and AI",
        description:
          "We integrate advanced data analysis and AI across the development process to support, not replace, human expertise. Together with the operator, we use these tools to improve site selection, optimise layouts, and reduce development risk. This results in care real estate that supports high quality care concepts and remains efficient and future-proof over time.",
      },
    ],
  },
  approach: {
    sectionTitle: "Our Approach",
    subtitle: "A Fully Managed Growth Partner for Healthcare Operators",
    intro:
      "We act as a development partner for healthcare operators with growth ambitions. We fully manage the identification, acquisition and redevelopment of new locations, enabling operators to expand their portfolio while we deliver assets aligned with their care concept and growth strategy.",
    steps: [
      {
        number: "01",
        title: "Strategic Operator Alignment",
        content:
          "We begin by understanding the operator's care concept, growth ambitions, and operational model. Through structured workshops and analysis, we define what the ideal location and building should offer. This alignment creates a shared development framework that guides every subsequent decision.",
      },
      {
        number: "02",
        title: "Location Identification & Development Shaping",
        content:
          "Using our Development Discovery Tool combined with local market knowledge, we identify and evaluate potential locations. Each opportunity is assessed on demographic fit, regulatory context, building suitability, and alignment with the operator's criteria. We shape the development concept in close collaboration, ensuring feasibility before commitment.",
      },
      {
        number: "03",
        title: "Acquisition, Development & Delivery",
        content:
          "Once a location is validated, we manage the full acquisition and development process. From negotiations and due diligence to permits, construction oversight, and final handover, we deliver turnkey care residences ready for operation. Throughout this phase, we maintain continuous alignment with the operator to ensure the end result matches their vision.",
      },
    ],
  },
  contact: {
    sectionTitle: "Partner with M-RED",
    intro:
      "We partner with healthcare operators who share our commitment to quality care environments. If you are looking for a development partner to support your growth strategy, we would like to hear from you.",
    cta: "Get in Touch",
    footer: {
      tagline: "Healthcare Real Estate Development",
      contactTitle: "Contact",
      email: "info@m-red.tech",
      linkedin: "LinkedIn",
      partnersTitle: "Who We Work With",
      partnersDescription:
        "Private care operators, senior housing providers, and healthcare organisations with growth ambitions.",
      disclaimer: "Disclaimer",
      disclaimerTitle: "Disclaimer",
      disclaimerText:
        "The information on this website is for general informational purposes only. M Real Estate Development B.V. makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information. Any reliance you place on such information is strictly at your own risk. This website does not constitute an offer, solicitation, or recommendation to buy or sell any property or enter into any transaction. Past performance and projections are not indicative of future results. M Real Estate Development B.V. shall not be held liable for any loss or damage arising from the use of this website or its contents.",
    },
  },
  cookie: {
    message:
      "We use cookies to analyse website traffic and improve your experience. By accepting, you consent to the use of analytical cookies.",
    accept: "Accept",
    decline: "Decline",
  },
};

const nl: Translations = {
  nav: {
    focus: "Focus",
    principles: "Principes",
    approach: "Aanpak",
    contact: "Contact",
  },
  hero: {
    subtitle: "Real Estate Development",
  },
  focus: {
    sectionTitle: "Onze Focus",
    cardTitle: "Ontwikkeling van Turnkey Zorgvastgoed",
    description:
      "Wij vinden, verwerven en ontwikkelen vastgoed voor particuliere woonzorg en seniorenwoningen. Wij werken nauw samen met zorgexploitanten om hun zorgconcept en operationele eisen te vertalen naar de juiste locaties en gebouwen. Van sourcing, vaak off-market, tot ontwikkeling en oplevering, cre\u00EBren wij hoogwaardige, turnkey zorgresidenties gebouwd voor langdurig gebruik.",
  },
  values: {
    sectionTitle: "Onze waardecre\u00EBrend principes",
    readMore: "Lees Meer",
    readLess: "Lees Minder",
    cards: [
      {
        title: "Vitaliteit & Welzijn",
        subtitle: "Gezondheidsgericht Ontwerp",
        description:
          "Wij ontwerpen zorgresidenties die de kwaliteit van leven ondersteunen op elk zorgniveau. Onze omgevingen bevorderen natuurlijke beweging, sociale interactie, toegang tot buitenruimte en een sterk thuisgevoel. Comfort, ori\u00EBntatie en rust zijn verankerd in de architectuur, zodat bewoners met waardigheid, veiligheid en welzijn kunnen leven binnen hoogwaardige zorgconcepten.",
      },
      {
        title: "Locatiegeschiktheid",
        subtitle: "Zorggerichte Locaties",
        description:
          "Wij richten ons op locaties die voldoen aan de ruimtelijke, residenti\u00EBle en operationele eisen van hoogwaardige zorgconcepten. Locatieselectie vindt plaats in nauwe samenwerking met zorgexploitanten, waarbij wij onze analyses combineren met de inzichten en criteria van de exploitant. Deze aanpak garandeert locaties die de dagelijkse operatie en langetermijngroeistrategieën ondersteunen.",
      },
      {
        title: "Datagestuurde Ontwikkeling",
        subtitle: "Feiten-Gebaseerde Besluitvorming",
        description:
          "Elk project begint met een robuuste business case. Wij ondersteunen besluitvorming door demografische analyse, locatiedata en gebouwevaluaties te combineren met de marktkennis en interne analyses van de exploitant. Onze in-house ontwikkelde development discovery tool wordt gebruikt om potenti\u00EBle locaties samen met de exploitant te verkennen, vergelijken en valideren.",
      },
      {
        title: "Kwaliteit & Historisch Besef",
        subtitle: "Spirit of Place",
        description:
          "Wij respecteren het karakter en de geschiedenis van elke locatie. Of we nu erfgoed transformeren of nieuwe residenties ontwikkelen, onze focus ligt op tijdloze kwaliteit, ruimtelijke generositeit en architecturale samenhang. Het resultaat zijn hoogwaardige zorgomgevingen die residentieel en verfijnd aanvoelen en gebouwd zijn voor de toekomst.",
      },
      {
        title: "Partnerschap",
        subtitle: "Op E\u00E9n Lijn Met de Exploitant",
        description:
          "Wij opereren als een verlengstuk van de zorgexploitant. Van vroege haalbaarheid tot uiteindelijke oplevering stemmen wij ontwikkelingsbeslissingen af op operationele modellen, zorgconcepten en langetermijngroeistrategieën. Dit cre\u00EBert een helder en effici\u00EBnt ontwikkelingsproces dat de doelstellingen van de exploitant van begin tot eind ondersteunt.",
      },
      {
        title: "Innovatie & Toegepaste Intelligentie",
        subtitle: "Ondersteund Door Data en AI",
        description:
          "Wij integreren geavanceerde data-analyse en AI in het ontwikkelingsproces om menselijke expertise te ondersteunen, niet te vervangen. Samen met de exploitant gebruiken wij deze tools om locatieselectie te verbeteren, indelingen te optimaliseren en ontwikkelingsrisico's te verminderen. Dit resulteert in zorgvastgoed dat hoogwaardige zorgconcepten ondersteunt en effici\u00EBnt en toekomstbestendig blijft.",
      },
    ],
  },
  approach: {
    sectionTitle: "Onze Aanpak",
    subtitle: "De Volwaardige Groeipartner voor Zorgexploitanten",
    intro:
      "Wij zijn de ontwikkelpartner voor zorgexploitanten met ambitie. Wij nemen het volledige traject van identificatie en acquisitie tot herontwikkeling uit handen. Zo kunnen exploitanten zich richten op hun groei, terwijl wij zorgen voor vastgoed dat naadloos aansluit bij hun zorgconcept en strategie.",
    steps: [
      {
        number: "01",
        title: "Strategische Afstemming",
        content:
          "We beginnen met het begrijpen van het zorgconcept, de groeiambities en het operationele model van de exploitant. Door gestructureerde workshops en analyse defini\u00EBren we wat de ideale locatie en het gebouw moeten bieden. Deze afstemming cre\u00EBert een gedeeld ontwikkelkader dat elke volgende beslissing stuurt.",
      },
      {
        number: "02",
        title: "Locatieselectie & Conceptontwikkeling",
        content:
          "Met onze Development Discovery Tool, gecombineerd met lokale marktkennis, identificeren en evalueren we potenti\u00EBle locaties. Elke kans wordt beoordeeld op demografische geschiktheid, regelgevingscontext, geschiktheid van het gebouw en afstemming met de criteria van de exploitant. We vormen het ontwikkelconcept in nauwe samenwerking, zodat haalbaarheid verzekerd is voor commitment.",
      },
      {
        number: "03",
        title: "Acquisitie, Ontwikkeling & Oplevering",
        content:
          "Zodra een locatie is gevalideerd, beheren wij het volledige acquisitie- en ontwikkelingsproces. Van onderhandelingen en due diligence tot vergunningen, bouwtoezicht en uiteindelijke overdracht leveren wij turnkey zorgresidenties die klaar zijn voor gebruik. Gedurende deze fase onderhouden we continue afstemming met de exploitant om te garanderen dat het eindresultaat overeenkomt met hun visie.",
      },
    ],
  },
  contact: {
    sectionTitle: "Partner met M-RED",
    intro:
      "Wij werken samen met zorgexploitanten die onze toewijding aan kwalitatieve zorgomgevingen delen. Als u op zoek bent naar een ontwikkelpartner ter ondersteuning van uw groeistrategie, horen wij graag van u.",
    cta: "Neem Contact Op",
    footer: {
      tagline: "Zorgvastgoed Ontwikkeling",
      contactTitle: "Contact",
      email: "info@m-red.tech",
      linkedin: "LinkedIn",
      partnersTitle: "Met Wie We Werken",
      partnersDescription:
        "Particuliere zorgexploitanten, aanbieders van seniorenhuisvesting en zorginstellingen met groeiambities.",
      disclaimer: "Disclaimer",
      disclaimerTitle: "Disclaimer",
      disclaimerText:
        "De informatie op deze website is uitsluitend bedoeld voor algemene informatiedoeleinden. M Real Estate Development B.V. doet geen uitspraken of garanties van welke aard dan ook, expliciet of impliciet, over de volledigheid, nauwkeurigheid, betrouwbaarheid of geschiktheid van de informatie. Elk vertrouwen dat u stelt in dergelijke informatie is strikt op eigen risico. Deze website vormt geen aanbod, uitnodiging of aanbeveling om onroerend goed te kopen of te verkopen of een transactie aan te gaan. Resultaten uit het verleden en prognoses zijn geen indicatie voor toekomstige resultaten. M Real Estate Development B.V. kan niet aansprakelijk worden gesteld voor enig verlies of schade voortvloeiend uit het gebruik van deze website of de inhoud ervan.",
    },
  },
  cookie: {
    message:
      "Wij gebruiken cookies om websiteverkeer te analyseren en uw ervaring te verbeteren. Door te accepteren stemt u in met het gebruik van analytische cookies.",
    accept: "Accepteren",
    decline: "Weigeren",
  },
};

const translations: Record<Language, Translations> = { en, nl };

export function getTranslations(lang: Language): Translations {
  return translations[lang];
}
