export type HomeLocale = "fr" | "en" | "ar";

export const supportedHomeLocales: HomeLocale[] = ["fr", "en", "ar"];

export const homeLocaleLabels: Record<HomeLocale, string> = {
  fr: "FR",
  en: "EN",
  ar: "AR",
};

type SectionHeaderCopy = {
  eyebrow: string;
  title: string;
  description?: string;
};

type HomeContent = {
  htmlLang: string;
  direction: "ltr" | "rtl";
  localeLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  navLinks: Array<[string, string]>;
  mapLabel: string;
  callLabel: string;
  heroBadge: string;
  heroTitleTop: string;
  heroTitleBottom: string;
  heroDescription: string;
  heroImageAlt: string;
  trustBadges: string[];
  servicesHeader: SectionHeaderCopy;
  services: Array<{ title: string; desc: string }>;
  resultsHeader: SectionHeaderCopy;
  beforeLabel: string;
  afterLabel: string;
  resultsCaption: string;
  whyHeader: SectionHeaderCopy;
  reasons: Array<{ title: string; desc: string }>;
  cabinetEyebrow: string;
  cabinetTitle: string;
  cabinetSubtitle: string;
  cabinetBody: string;
  credentials: string[];
  journeyHeader: SectionHeaderCopy;
  journeySteps: Array<{ step: string; title: string; desc: string }>;
  practicalHeader: SectionHeaderCopy;
  practicalCards: Array<{ name: string; treatment: string; text: string }>;
  faqHeader: SectionHeaderCopy;
  faqs: Array<[string, string]>;
  bookingTitle: string;
  bookingDescription: string;
  bookingFormTitle: string;
  bookingPlaceholders: {
    name: string;
    phone: string;
    email: string;
    service: string;
    message: string;
    submit: string;
    successTitle: string;
    successBody: string;
    helper: string;
  };
  footerDescription: string;
  footerLabels: {
    navigation: string;
    contact: string;
    hours: string;
    openNow: string;
    closed: string;
    monday: string;
    mondayHours: string;
    otherHours: string;
    googleMaps: string;
  };
  aiSummaryHeader: string;
  aiSummaryText: string;
};

export const homeContent: Record<HomeLocale, HomeContent> = {
  fr: {
    htmlLang: "fr-MA",
    direction: "ltr",
    localeLabel: "Francais",
    title: "Cabinet dentaire Dr Dardar Karim",
    metaTitle: "Dentiste a Tanger",
    metaDescription:
      "Cabinet dentaire Dr Dardar Karim a Tanger. Consultation, soins dentaires, esthetique du sourire, adresse, telephone, note Google et acces Google Maps.",
    navLinks: [
      ["Soins", "#services"],
      ["Le sourire", "#results"],
      ["Pourquoi choisir", "#why-us"],
      ["Le cabinet", "#team"],
      ["Infos pratiques", "#testimonials"],
      ["FAQ", "#faq"],
    ],
    mapLabel: "Voir l'itineraire",
    callLabel: "Appeler le cabinet",
    heroBadge: "4,8 sur 5 d'apres 17 avis Google",
    heroTitleTop: "Cabinet dentaire",
    heroTitleBottom: "Dr Dardar Karim",
    heroDescription:
      "Le Cabinet dentaire Dr Dardar Karim accueille ses patients a Tanger pour la consultation, les soins dentaires et l'esthetique du sourire, avec une attention particuliere au confort, a l'ecoute et a la qualite de la prise en charge.",
    heroImageAlt: "Interieur du cabinet dentaire",
    trustBadges: [
      "Cabinet dentaire a Tanger",
      "Note Google 4,8 sur 17 avis",
      "Lot . Corbo 45 ETAGE 1 app 2",
      "Contact direct au 08 08 56 63 17",
    ],
    servicesHeader: {
      eyebrow: "Soins",
      title: "Les soins proposes au cabinet",
      description:
        "Consultation, dentisterie generale, esthetique du sourire, implants et accompagnement du patient a Tanger.",
    },
    services: [
      {
        title: "Dentisterie generale",
        desc: "Consultation, controle et soins du quotidien pour prendre en charge la sante bucco-dentaire avec clarte.",
      },
      {
        title: "Esthetique du sourire",
        desc: "Des soins esthetiques pour retrouver un sourire plus harmonieux, avec une attention particuliere au resultat.",
      },
      {
        title: "Implants dentaires",
        desc: "Evaluation des besoins et orientation pour restaurer le confort, la fonction et l'esthetique du sourire.",
      },
      {
        title: "Suivi et conseils",
        desc: "Un accompagnement avant et apres la consultation pour repondre aux questions et guider le patient.",
      },
      {
        title: "Soins du sourire",
        desc: "Une prise en charge attentive, pensee pour le confort, la douceur du geste et la confiance du patient.",
      },
      {
        title: "Prise de rendez-vous",
        desc: "Le cabinet reste facile a joindre pour une demande de consultation, un renseignement ou un rendez-vous.",
      },
    ],
    resultsHeader: {
      eyebrow: "Le sourire",
      title: "Le sourire au coeur des soins",
      description:
        "Une illustration de l'attention portee a l'esthetique dentaire, a l'harmonie du sourire et a la qualite du resultat.",
    },
    beforeLabel: "Avant",
    afterLabel: "Apres",
    resultsCaption: "Illustration avant/apres autour des soins esthetiques du sourire proposes au cabinet.",
    whyHeader: {
      eyebrow: "Pourquoi choisir le cabinet",
      title: "Un cabinet qui rassure avant meme la consultation",
      description:
        "Adresse claire, contact direct, informations pratiques visibles et approche humaine : l'essentiel pour venir avec plus de confiance.",
    },
    reasons: [
      {
        title: "Acces simple",
        desc: "Le cabinet se situe a Tanger dans un emplacement facile a retrouver, avec un itineraire direct.",
      },
      {
        title: "Cabinet de confiance",
        desc: "La note Google de 4,8 sur 17 avis renforce une impression de serieux et de confiance.",
      },
      {
        title: "Informations utiles",
        desc: "Adresse, telephone, note Google et horaires essentiels sont visibles avant la visite.",
      },
      {
        title: "Accueil rassurant",
        desc: "L'approche du cabinet privilegie l'ecoute, la clarte des explications et une atmosphere plus sereine.",
      },
      {
        title: "Contact direct",
        desc: "Un appel suffit pour poser une question, preparer une consultation ou demander un rendez-vous.",
      },
      {
        title: "Prise en charge claire",
        desc: "Du premier contact jusqu'a la consultation, le patient sait ou aller et comment se preparer.",
      },
    ],
    cabinetEyebrow: "Le cabinet",
    cabinetTitle: "Cabinet dentaire Dr Dardar Karim",
    cabinetSubtitle: "Dentiste - Tanger",
    cabinetBody:
      "Situe Lot . Corbo 45 ETAGE 1 app 2, Tanger 90000, le Cabinet dentaire Dr Dardar Karim accompagne les patients pour les soins du quotidien, l'esthetique du sourire et le suivi, dans une relation fondee sur l'ecoute et la clarte.",
    credentials: [
      "Cabinet dentaire a Tanger",
      "4,8 sur 5 d'apres 17 avis Google",
      "Telephone du cabinet : 08 08 56 63 17",
    ],
    journeyHeader: {
      eyebrow: "Parcours patient",
      title: "Un parcours simple, du premier appel a la venue au cabinet",
      description:
        "Le patient peut prendre contact rapidement, expliquer son besoin et venir au cabinet avec des informations claires.",
    },
    journeySteps: [
      {
        step: "01",
        title: "Prendre contact",
        desc: "Appelez le cabinet pour un renseignement, une consultation ou une demande de rendez-vous.",
      },
      {
        step: "02",
        title: "Expliquer votre besoin",
        desc: "Precisez s'il s'agit d'un controle, d'une douleur, d'un soin ou d'une question sur votre sourire.",
      },
      {
        step: "03",
        title: "Recevoir les informations utiles",
        desc: "Le cabinet vous oriente sur la venue, l'acces et la suite a donner a votre demande.",
      },
      {
        step: "04",
        title: "Venir au cabinet",
        desc: "Rendez-vous au cabinet a Tanger dans un cadre professionnel pense pour vous recevoir sereinement.",
      },
    ],
    practicalHeader: {
      eyebrow: "Infos pratiques",
      title: "Les informations essentielles avant la visite",
      description: "Avis, adresse, telephone et horaires utiles pour preparer la consultation.",
    },
    practicalCards: [
      {
        name: "Avis patients",
        treatment: "Google",
        text: "Le cabinet affiche une note Google de 4,8 sur 17 avis, un signal rassurant avant une premiere visite.",
      },
      {
        name: "Adresse du cabinet",
        treatment: "Tanger 90000",
        text: "Le cabinet se situe Lot . Corbo 45 ETAGE 1 app 2, Tanger 90000, pour un acces plus simple le jour du rendez-vous.",
      },
      {
        name: "Ouverture du lundi",
        treatment: "Informations horaires",
        text: "Les informations disponibles indiquent une ouverture a 11:00 le lundi. La fiche Google Maps peut etre consultee pour les autres horaires.",
      },
      {
        name: "Prise de contact",
        treatment: "Telephone",
        text: "Le 08 08 56 63 17 permet de joindre directement le cabinet pour un renseignement ou une demande de rendez-vous.",
      },
    ],
    faqHeader: {
      eyebrow: "FAQ",
      title: "Questions frequentes avant la visite",
      description: "Les reponses aux questions les plus utiles avant de contacter ou de visiter le cabinet.",
    },
    faqs: [
      ["Quel est le nom du cabinet ?", "Il s'agit du Cabinet dentaire Dr Dardar Karim."],
      ["Ou se situe le cabinet ?", "Lot . Corbo 45 ETAGE 1 app 2, Tanger 90000."],
      ["Quels types de soins sont proposes ?", "Le cabinet prend en charge la consultation, la dentisterie generale, l'esthetique du sourire, les implants et le suivi du patient."],
      ["Quel est le numero du cabinet ?", "Vous pouvez appeler le 08 08 56 63 17 pour contacter directement le cabinet."],
      ["Quelle est la note Google affichee ?", "Le cabinet affiche une note de 4,8 sur 17 avis."],
      ["Quand le cabinet ouvre-t-il ?", "Les informations disponibles indiquent une ouverture a 11:00 le lundi."],
      ["Comment trouver le cabinet ?", "Utilisez le bouton itineraire pour ouvrir l'adresse dans Google Maps."],
    ],
    bookingTitle: "Prendre contact avec le cabinet",
    bookingDescription:
      "Pour un renseignement, une consultation ou un rendez-vous, le cabinet reste joignable directement par telephone et facile d'acces a Tanger.",
    bookingFormTitle: "Demande de rendez-vous",
    bookingPlaceholders: {
      name: "Nom complet",
      phone: "Telephone",
      email: "Adresse email",
      service: "Choisir un service",
      message: "Precisez votre besoin (optionnel)",
      submit: "Envoyer la demande",
      successTitle: "Merci",
      successBody:
        "Votre demande a ete envoyee. Pour une reponse immediate, vous pouvez aussi appeler directement le cabinet au 08 08 56 63 17.",
      helper: "Pour une reponse plus rapide, vous pouvez appeler directement le cabinet au 08 08 56 63 17.",
    },
    footerDescription:
      "Cabinet dentaire Dr Dardar Karim a Tanger. Consultation, soins dentaires, esthetique du sourire et informations pratiques pour preparer votre visite.",
    footerLabels: {
      navigation: "Navigation",
      contact: "Contact",
      hours: "Horaires",
      openNow: "Actuellement",
      closed: "Ferme",
      monday: "Lundi",
      mondayHours: "Ouverture a 11:00",
      otherHours: "Autres horaires",
      googleMaps: "Consulter la fiche Google Maps",
    },
    aiSummaryHeader: "Le cabinet en bref",
    aiSummaryText:
      "Cabinet dentaire Dr Dardar Karim, dentiste a Tanger, note Google 4,8 sur 17 avis, adresse Lot . Corbo 45 ETAGE 1 app 2, telephone 08 08 56 63 17.",
  },
  en: {
    htmlLang: "en",
    direction: "ltr",
    localeLabel: "English",
    title: "Dr Dardar Karim Dental Clinic",
    metaTitle: "Dentist in Tangier",
    metaDescription:
      "Dr Dardar Karim Dental Clinic in Tangier. Dental consultations, general dentistry, smile aesthetics, address, phone number, Google rating, and Google Maps access.",
    navLinks: [
      ["Treatments", "#services"],
      ["Smile", "#results"],
      ["Why choose us", "#why-us"],
      ["Clinic", "#team"],
      ["Practical info", "#testimonials"],
      ["FAQ", "#faq"],
    ],
    mapLabel: "Get directions",
    callLabel: "Call the clinic",
    heroBadge: "4.8 out of 5 from 17 Google reviews",
    heroTitleTop: "Dental clinic",
    heroTitleBottom: "Dr Dardar Karim",
    heroDescription:
      "Dr Dardar Karim Dental Clinic welcomes patients in Tangier for consultation, dental care, and smile aesthetics, with special attention to comfort, clear guidance, and patient confidence.",
    heroImageAlt: "Dental clinic interior",
    trustBadges: [
      "Dental clinic in Tangier",
      "Google rating 4.8 from 17 reviews",
      "Lot . Corbo 45 ETAGE 1 app 2",
      "Direct phone contact: 08 08 56 63 17",
    ],
    servicesHeader: {
      eyebrow: "Treatments",
      title: "Dental care available at the clinic",
      description:
        "Consultation, general dentistry, smile aesthetics, implants, and patient support in Tangier.",
    },
    services: [
      {
        title: "General dentistry",
        desc: "Consultation, check-ups, and everyday dental care with a clear and reassuring approach.",
      },
      {
        title: "Smile aesthetics",
        desc: "Aesthetic care designed to improve smile harmony with careful attention to the final result.",
      },
      {
        title: "Dental implants",
        desc: "Evaluation of patient needs and guidance to restore comfort, function, and smile aesthetics.",
      },
      {
        title: "Follow-up and guidance",
        desc: "Support before and after consultation to answer questions and guide the patient clearly.",
      },
      {
        title: "Smile care",
        desc: "Attentive care focused on comfort, gentle treatment, and restoring confidence.",
      },
      {
        title: "Appointment request",
        desc: "The clinic remains easy to reach for consultation requests, information, or appointments.",
      },
    ],
    resultsHeader: {
      eyebrow: "Smile",
      title: "The smile at the center of care",
      description:
        "An illustration of the attention given to dental aesthetics, smile harmony, and the quality of the outcome.",
    },
    beforeLabel: "Before",
    afterLabel: "After",
    resultsCaption: "Before-and-after illustration related to aesthetic smile treatments offered at the clinic.",
    whyHeader: {
      eyebrow: "Why choose the clinic",
      title: "A clinic that reassures patients before the consultation",
      description:
        "Clear address, direct contact, visible practical information, and a human approach to help patients arrive with confidence.",
    },
    reasons: [
      {
        title: "Easy access",
        desc: "The clinic is located in Tangier in an easy-to-find area with direct Google Maps access.",
      },
      {
        title: "Trusted clinic",
        desc: "A 4.8 Google rating from 17 reviews helps reinforce trust before a first visit.",
      },
      {
        title: "Useful information",
        desc: "Address, phone number, Google rating, and key opening information are visible before the visit.",
      },
      {
        title: "Reassuring welcome",
        desc: "The clinic approach prioritizes listening, clarity, and a calmer patient experience.",
      },
      {
        title: "Direct contact",
        desc: "One phone call is enough to ask a question, prepare a consultation, or request an appointment.",
      },
      {
        title: "Clear patient journey",
        desc: "From first contact to consultation, patients know where to go and how to prepare.",
      },
    ],
    cabinetEyebrow: "The clinic",
    cabinetTitle: "Dr Dardar Karim Dental Clinic",
    cabinetSubtitle: "Dentist - Tangier",
    cabinetBody:
      "Located at Lot . Corbo 45 ETAGE 1 app 2, Tangier 90000, Dr Dardar Karim Dental Clinic supports patients for everyday dental care, smile aesthetics, and follow-up in a relationship based on listening and clarity.",
    credentials: [
      "Dental clinic in Tangier",
      "4.8 out of 5 from 17 Google reviews",
      "Clinic phone number: 08 08 56 63 17",
    ],
    journeyHeader: {
      eyebrow: "Patient journey",
      title: "A simple path from first contact to the clinic visit",
      description:
        "Patients can contact the clinic quickly, explain their needs, and come to the clinic with clear information.",
    },
    journeySteps: [
      {
        step: "01",
        title: "Make contact",
        desc: "Call the clinic for information, a consultation, or an appointment request.",
      },
      {
        step: "02",
        title: "Explain your need",
        desc: "Mention whether you need a check-up, have pain, need treatment, or have a smile-related question.",
      },
      {
        step: "03",
        title: "Receive practical guidance",
        desc: "The clinic helps you understand access, timing, and the next steps before your visit.",
      },
      {
        step: "04",
        title: "Come to the clinic",
        desc: "Visit the clinic in Tangier in a professional setting designed to welcome patients calmly.",
      },
    ],
    practicalHeader: {
      eyebrow: "Practical information",
      title: "Essential details before the visit",
      description: "Reviews, address, phone number, and opening details to prepare the consultation.",
    },
    practicalCards: [
      {
        name: "Patient reviews",
        treatment: "Google",
        text: "The clinic shows a 4.8 Google rating from 17 reviews, which is reassuring before a first visit.",
      },
      {
        name: "Clinic address",
        treatment: "Tangier 90000",
        text: "The clinic is located at Lot . Corbo 45 ETAGE 1 app 2, Tangier 90000 for easier access on the day of the visit.",
      },
      {
        name: "Monday opening",
        treatment: "Opening information",
        text: "Available information indicates opening at 11:00 on Monday. Google Maps can be checked for other opening times.",
      },
      {
        name: "Contact",
        treatment: "Phone",
        text: "08 08 56 63 17 connects patients directly with the clinic for information or appointment requests.",
      },
    ],
    faqHeader: {
      eyebrow: "FAQ",
      title: "Common questions before visiting",
      description: "Direct answers to practical questions patients often ask before contacting the clinic.",
    },
    faqs: [
      ["What is the clinic name?", "It is Dr Dardar Karim Dental Clinic."],
      ["Where is the clinic located?", "Lot . Corbo 45 ETAGE 1 app 2, Tangier 90000."],
      ["What treatments are available?", "The clinic covers consultation, general dentistry, smile aesthetics, implants, and patient follow-up."],
      ["What is the clinic phone number?", "You can call 08 08 56 63 17 to contact the clinic directly."],
      ["What is the Google rating?", "The clinic has a 4.8 rating from 17 Google reviews."],
      ["When does the clinic open?", "Available information indicates opening at 11:00 on Monday."],
      ["How can I find the clinic?", "Use the directions button to open the place in Google Maps."],
    ],
    bookingTitle: "Contact the clinic",
    bookingDescription:
      "For information, a consultation, or an appointment request, the clinic remains easy to reach by phone and easy to find in Tangier.",
    bookingFormTitle: "Appointment request",
    bookingPlaceholders: {
      name: "Full name",
      phone: "Phone number",
      email: "Email address",
      service: "Choose a treatment",
      message: "Describe your need (optional)",
      submit: "Send request",
      successTitle: "Thank you",
      successBody:
        "Your request has been sent. For an immediate answer, you can also call the clinic directly at 08 08 56 63 17.",
      helper: "For a faster reply, you can call the clinic directly at 08 08 56 63 17.",
    },
    footerDescription:
      "Dr Dardar Karim Dental Clinic in Tangier. Consultation, dental care, smile aesthetics, and practical information to prepare your visit.",
    footerLabels: {
      navigation: "Navigation",
      contact: "Contact",
      hours: "Opening hours",
      openNow: "Currently",
      closed: "Closed",
      monday: "Monday",
      mondayHours: "Opens at 11:00",
      otherHours: "Other hours",
      googleMaps: "Check Google Maps listing",
    },
    aiSummaryHeader: "Clinic summary",
    aiSummaryText:
      "Dr Dardar Karim Dental Clinic is a dentist practice in Tangier with a 4.8 Google rating from 17 reviews, located at Lot . Corbo 45 ETAGE 1 app 2, Tangier 90000, phone number 08 08 56 63 17.",
  },
  ar: {
    htmlLang: "ar-MA",
    direction: "rtl",
    localeLabel: "العربية",
    title: "عيادة الدكتور داردار كريم لطب الاسنان",
    metaTitle: "طبيب اسنان في طنجة",
    metaDescription:
      "عيادة الدكتور داردار كريم لطب الاسنان في طنجة. استشارة وعلاجات الاسنان وتجميل الابتسامة مع العنوان ورقم الهاتف وتقييم جوجل والوصول عبر خرائط جوجل.",
    navLinks: [
      ["العلاجات", "#services"],
      ["الابتسامة", "#results"],
      ["لماذا العيادة", "#why-us"],
      ["العيادة", "#team"],
      ["معلومات عملية", "#testimonials"],
      ["الاسئلة", "#faq"],
    ],
    mapLabel: "عرض الاتجاه",
    callLabel: "اتصل بالعيادة",
    heroBadge: "4.8 من 5 بناء على 17 تقييما على جوجل",
    heroTitleTop: "عيادة طب الاسنان",
    heroTitleBottom: "الدكتور داردار كريم",
    heroDescription:
      "تستقبل عيادة الدكتور داردار كريم المرضى في طنجة من اجل الاستشارة وعلاجات الاسنان وتجميل الابتسامة مع اهتمام خاص بالراحة ووضوح الشرح وجودة المتابعة.",
    heroImageAlt: "داخل عيادة الاسنان",
    trustBadges: [
      "عيادة اسنان في طنجة",
      "تقييم جوجل 4.8 من 17 مراجعة",
      "Lot . Corbo 45 ETAGE 1 app 2",
      "اتصال مباشر على 08 08 56 63 17",
    ],
    servicesHeader: {
      eyebrow: "العلاجات",
      title: "العلاجات المتوفرة في العيادة",
      description: "استشارة وطب اسنان عام وتجميل الابتسامة وزراعة الاسنان ومرافقة المريض في طنجة.",
    },
    services: [
      {
        title: "طب الاسنان العام",
        desc: "استشارة وفحص وعلاجات يومية للعناية بصحة الفم والاسنان بطريقة واضحة ومطمئنة.",
      },
      {
        title: "تجميل الابتسامة",
        desc: "علاجات تجميلية تساعد على تحسين تناسق الابتسامة مع اهتمام خاص بالنتيجة النهائية.",
      },
      {
        title: "زراعة الاسنان",
        desc: "تقييم الحاجة وتوجيه المريض لاستعادة الراحة والوظيفة وجمال الابتسامة.",
      },
      {
        title: "المتابعة والنصيحة",
        desc: "مرافقة قبل وبعد الاستشارة للاجابة عن الاسئلة وتوجيه المريض بشكل واضح.",
      },
      {
        title: "العناية بالابتسامة",
        desc: "رعاية دقيقة تهتم بالراحة واللطف اثناء العلاج واستعادة ثقة المريض.",
      },
      {
        title: "طلب موعد",
        desc: "يبقى التواصل مع العيادة سهلا من اجل الاستشارة او طلب موعد او الحصول على معلومات.",
      },
    ],
    resultsHeader: {
      eyebrow: "الابتسامة",
      title: "الابتسامة في قلب العناية",
      description: "صورة توضيحية للاهتمام بجمال الاسنان وتناسق الابتسامة وجودة النتيجة.",
    },
    beforeLabel: "قبل",
    afterLabel: "بعد",
    resultsCaption: "صورة قبل وبعد مرتبطة بعلاجات تجميل الابتسامة المتوفرة في العيادة.",
    whyHeader: {
      eyebrow: "لماذا اختيار العيادة",
      title: "عيادة تمنح المريض الطمانينة قبل الموعد",
      description: "عنوان واضح واتصال مباشر ومعلومات عملية ظاهرة ونهج انساني يساعد المريض على الحضور بثقة اكبر.",
    },
    reasons: [
      {
        title: "وصول سهل",
        desc: "تقع العيادة في طنجة في مكان يسهل الوصول اليه مع مسار مباشر عبر خرائط جوجل.",
      },
      {
        title: "ثقة واطمئنان",
        desc: "تقييم 4.8 على جوجل من 17 مراجعة يعطي انطباعا جيدا قبل الزيارة الاولى.",
      },
      {
        title: "معلومات مفيدة",
        desc: "العنوان ورقم الهاتف وتقييم جوجل ومعلومة الافتتاح الاساسية متوفرة قبل الزيارة.",
      },
      {
        title: "استقبال مطمئن",
        desc: "يعتمد اسلوب العيادة على الاستماع ووضوح الشرح وتجربة اكثر هدوءا للمريض.",
      },
      {
        title: "تواصل مباشر",
        desc: "اتصال واحد يكفي لطرح سؤال او التحضير للاستشارة او طلب موعد.",
      },
      {
        title: "مسار واضح للمريض",
        desc: "من اول تواصل الى الموعد يعرف المريض الى اين يذهب وكيف يستعد.",
      },
    ],
    cabinetEyebrow: "العيادة",
    cabinetTitle: "عيادة الدكتور داردار كريم لطب الاسنان",
    cabinetSubtitle: "طبيب اسنان - طنجة",
    cabinetBody:
      "تقع العيادة في Lot . Corbo 45 ETAGE 1 app 2, Tanger 90000 وترافق المرضى في العلاجات اليومية وتجميل الابتسامة والمتابعة ضمن علاقة مبنية على الاصغاء ووضوح المعلومات.",
    credentials: [
      "عيادة اسنان في طنجة",
      "4.8 من 5 بناء على 17 مراجعة على جوجل",
      "رقم هاتف العيادة: 08 08 56 63 17",
    ],
    journeyHeader: {
      eyebrow: "مسار المريض",
      title: "مسار بسيط من اول اتصال الى زيارة العيادة",
      description: "يمكن للمريض التواصل بسرعة وشرح حاجته ثم الحضور الى العيادة مع معلومات واضحة.",
    },
    journeySteps: [
      {
        step: "01",
        title: "التواصل مع العيادة",
        desc: "اتصل بالعيادة من اجل الاستفسار او الاستشارة او طلب موعد.",
      },
      {
        step: "02",
        title: "شرح الحاجة",
        desc: "اذكر هل الامر يتعلق بفحص او الم او علاج او سؤال حول الابتسامة.",
      },
      {
        step: "03",
        title: "الحصول على المعلومات",
        desc: "تشرح لك العيادة طريقة الوصول والتوقيت والخطوة التالية قبل الزيارة.",
      },
      {
        step: "04",
        title: "زيارة العيادة",
        desc: "توجه الى العيادة في طنجة داخل اطار مهني مهيأ لاستقبال المرضى براحة وهدوء.",
      },
    ],
    practicalHeader: {
      eyebrow: "معلومات عملية",
      title: "اهم المعلومات قبل الزيارة",
      description: "التقييم والعنوان والهاتف ومعلومة الافتتاح للمساعدة على التحضير للاستشارة.",
    },
    practicalCards: [
      {
        name: "تقييم المرضى",
        treatment: "جوجل",
        text: "تظهر العيادة تقييما قدره 4.8 على جوجل من 17 مراجعة وهو عنصر يبعث على الاطمئنان قبل الزيارة الاولى.",
      },
      {
        name: "عنوان العيادة",
        treatment: "طنجة 90000",
        text: "تقع العيادة في Lot . Corbo 45 ETAGE 1 app 2, Tanger 90000 لتسهيل الوصول يوم الموعد.",
      },
      {
        name: "افتتاح يوم الاثنين",
        treatment: "معلومات التوقيت",
        text: "تشير المعلومات المتوفرة الى الافتتاح عند الساعة 11:00 يوم الاثنين ويمكن مراجعة خرائط جوجل لباقي الاوقات.",
      },
      {
        name: "التواصل",
        treatment: "الهاتف",
        text: "يسمح الرقم 08 08 56 63 17 بالتواصل المباشر مع العيادة للاستفسار او طلب موعد.",
      },
    ],
    faqHeader: {
      eyebrow: "الاسئلة الشائعة",
      title: "اسئلة متكررة قبل الزيارة",
      description: "اجابات مباشرة عن الاسئلة العملية التي يطرحها المرضى قبل التواصل مع العيادة.",
    },
    faqs: [
      ["ما اسم العيادة؟", "اسمها عيادة الدكتور داردار كريم لطب الاسنان."],
      ["اين تقع العيادة؟", "Lot . Corbo 45 ETAGE 1 app 2, Tanger 90000."],
      ["ما هي العلاجات المتوفرة؟", "تشمل العيادة الاستشارة وطب الاسنان العام وتجميل الابتسامة والزراعة ومتابعة المريض."],
      ["ما رقم هاتف العيادة؟", "يمكنك الاتصال على 08 08 56 63 17 للتواصل المباشر مع العيادة."],
      ["ما هو تقييم جوجل؟", "تحصل العيادة على تقييم 4.8 من 17 مراجعة على جوجل."],
      ["متى تفتح العيادة؟", "تشير المعلومات المتوفرة الى الافتتاح عند الساعة 11:00 يوم الاثنين."],
      ["كيف اصل الى العيادة؟", "استعمل زر الاتجاه لفتح موقع العيادة في خرائط جوجل."],
    ],
    bookingTitle: "التواصل مع العيادة",
    bookingDescription:
      "للاستفسار او الاستشارة او طلب موعد يبقى التواصل مع العيادة سهلا عبر الهاتف كما يسهل الوصول اليها في طنجة.",
    bookingFormTitle: "طلب موعد",
    bookingPlaceholders: {
      name: "الاسم الكامل",
      phone: "رقم الهاتف",
      email: "البريد الالكتروني",
      service: "اختر العلاج",
      message: "اشرح حاجتك (اختياري)",
      submit: "ارسال الطلب",
      successTitle: "شكرا",
      successBody: "تم ارسال طلبك. للحصول على جواب سريع يمكنك ايضا الاتصال مباشرة بالعيادة على 08 08 56 63 17.",
      helper: "للحصول على جواب اسرع يمكنك الاتصال مباشرة بالعيادة على 08 08 56 63 17.",
    },
    footerDescription:
      "عيادة الدكتور داردار كريم لطب الاسنان في طنجة. استشارة وعلاجات اسنان وتجميل الابتسامة ومعلومات عملية للتحضير للزيارة.",
    footerLabels: {
      navigation: "التنقل",
      contact: "التواصل",
      hours: "الاوقات",
      openNow: "حاليا",
      closed: "مغلق",
      monday: "الاثنين",
      mondayHours: "يفتح عند 11:00",
      otherHours: "اوقات اخرى",
      googleMaps: "راجع بطاقة جوجل مابس",
    },
    aiSummaryHeader: "ملخص عن العيادة",
    aiSummaryText:
      "عيادة الدكتور داردار كريم لطب الاسنان هي عيادة اسنان في طنجة بتقييم 4.8 على جوجل من 17 مراجعة وتقع في Lot . Corbo 45 ETAGE 1 app 2, Tanger 90000 ورقمها 08 08 56 63 17.",
  },
};
