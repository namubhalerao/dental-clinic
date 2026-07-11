export type TranslationDict = typeof en;

const en = {
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    gallery: "Gallery",
    contact: "Contact",
    bookAppointment: "Book Appointment",
  },
  hero: {
    title: "Advanced Dental Care in Barshi",
    subtitle: "Experience world-class dentistry with a gentle touch. Dr. Somani Dental Clinic brings state-of-the-art treatments to your neighborhood.",
    primaryCta: "Book Your Visit",
    secondaryCta: "Our Services"
  },
  about: {
    sectionTitle: "About Dr. Somani",
    description1: "With years of extensive experience and a commitment to continuous learning, Dr. Somani provides comprehensive dental care tailored to your unique needs.",
    description2: "Our clinic is equipped with modern technology to ensure precise diagnostics and comfortable treatments in a calm, sterile environment.",
    certificates: "Professional Certifications"
  },
  services: {
    sectionTitle: "Our Treatments",
    items: [
      { title: "General Dental Checkup & Consultation", desc: "Thorough examination and honest guidance to keep your smile healthy." },
      { title: "Teeth Cleaning (Scaling & Polishing)", desc: "Professional cleaning to remove plaque and tartar for fresher, brighter teeth." },
      { title: "Root Canal Treatment", desc: "Painless, modern procedure to save infected or damaged teeth." },
      { title: "Wisdom Tooth Extraction", desc: "Safe and comfortable removal of impacted or troublesome wisdom teeth." },
      { title: "Orthodontic Treatment (Braces/Clips)", desc: "Clear aligners and braces to gently guide teeth into perfect alignment." },
      { title: "Dental Bridge", desc: "Reliable, natural-looking replacement for one or more missing teeth." },
      { title: "Dental Crown (Zirconia Cap)", desc: "Durable, tooth-coloured zirconia caps that restore strength and appearance." },
      { title: "Oral Cancer Screening & Treatment", desc: "Early detection and expert care for a better, safer outcome." },
      { title: "Kids Dental Treatment", desc: "Gentle, friendly dental care designed especially for children." },
      { title: "Painless Dentistry", desc: "Advanced pain-management techniques for a calm, comfortable visit." },
      { title: "Minor Oral Surgery", desc: "Skilled, safe surgical care for a range of oral health conditions." }
    ]
  },
  gallery: {
    sectionTitle: "Smile Gallery",
    before: "Before",
    after: "After",
    cases: {
      clip: "Orthodontic Clip",
      bridge: "Dental Bridge",
      cancer: "Oral Cancer Treatment",
      ortho: "Orthodontic Correction",
      wisdom: "Wisdom Tooth Surgery",
      zirconia: "Zirconia Restoration"
    }
  },
  whyChooseUs: {
    sectionTitle: "Why Choose Us",
    points: [
      { title: "State-of-the-art Technology", desc: "Modern equipment for precise and painless treatments." },
      { title: "Strict Sterilization", desc: "We follow international protocols for hygiene and safety." },
      { title: "Experienced Care", desc: "Expert diagnosis and compassionate treatment planning." },
      { title: "Comfortable Environment", desc: "A calming clinic atmosphere designed for your peace of mind." }
    ]
  },
  appointment: {
    sectionTitle: "Book an Appointment",
    subtitle: "Fill out the form below and we'll confirm your appointment via WhatsApp.",
    nameLabel: "Full Name",
    phoneLabel: "Phone Number",
    ageLabel: "Age",
    genderLabel: "Gender",
    serviceLabel: "Treatment Required",
    dateLabel: "Preferred Date",
    timeLabel: "Preferred Time",
    messageLabel: "Additional Notes",
    submitText: "Send via WhatsApp",
    successMessage: "Thank you! Redirecting you to WhatsApp to confirm your appointment...",
    selectService: "Select a treatment...",
    selectGender: "Select gender...",
    genderOptions: { male: "Male", female: "Female", other: "Other" },
    waTemplate: "Hello Dr. Somani Dental Clinic, I would like to book an appointment.\nName: {name}\nPhone: {phone}\nAge: {age}\nGender: {gender}\nTreatment: {treatment}\nPreferred Date: {date}\nPreferred Time: {time}\nMessage: {message}\nPlease contact me."
  },
  faq: {
    sectionTitle: "Frequently Asked Questions",
    questions: [
      { q: "Do I need to book an appointment beforehand?", a: "Yes, we recommend booking an appointment to avoid waiting times." },
      { q: "Is the clinic equipped for minor oral surgeries?", a: "Yes, we have advanced facilities for wisdom tooth extraction and other minor surgical procedures." },
      { q: "What hygiene protocols do you follow?", a: "We maintain strict multi-step sterilization protocols for all our instruments and operatory areas." },
      { q: "Do you offer aesthetic dental treatments?", a: "Yes, we offer Zirconia crowns, bridges, and orthodontic solutions." }
    ]
  },
  contact: {
    sectionTitle: "Visit Us",
    subtitle: "We'd love to welcome you to our clinic. Reach out anytime.",
    addressTitle: "Clinic Address",
    address: "Lokmangal Sahakari Patsanstha Building, Below Lokmangal Sahakari Patsanstha, Adava Rasta, Tilak Chowk, Barshi, District Solapur, Maharashtra 413401, India",
    hoursTitle: "Working Hours",
    hours: "Monday - Saturday\n9:00 AM - 3:00 PM & 4:00 PM - 9:00 PM\nSunday: Closed",
    phoneTitle: "Phone & WhatsApp",
    phone: "+91 90211 86370",
    emailTitle: "Email",
    email: "dr.somanisarang@gmail.com",
    registrationLabel: "Registration No.",
    registrationNo: "22554",
    getDirections: "Get Directions",
    callNow: "Call Now",
    whatsappNow: "Chat on WhatsApp",
    formTitle: "Send us a Message",
    formNameLabel: "Full Name",
    formPhoneLabel: "Phone Number",
    formServiceLabel: "Treatment",
    formMessageLabel: "Message",
    formSubmit: "Send via WhatsApp",
    waTemplate: "Hello Dr. Somani Dental Clinic, my name is {name} (Phone: {phone}). I am interested in: {treatment}. {message}"
  },
  footer: {
    tagline: "Trusted, modern dental care for Barshi and beyond.",
    quickLinksTitle: "Quick Links",
    servicesTitle: "Services",
    contactTitle: "Contact",
    hoursTitle: "Working Hours",
    hours: "Mon - Sat: 9 AM - 3 PM & 4 PM - 9 PM",
    getDirections: "Get Directions on Google Maps",
    rights: "© {year} Dr. Somani Dental Clinic. All rights reserved.",
    registration: "Registration No. 22554"
  }
};

const mr: TranslationDict = {
  nav: {
    home: "मुख्यपृष्ठ",
    about: "आमच्याबद्दल",
    services: "सेवा",
    gallery: "गॅलरी",
    contact: "संपर्क",
    bookAppointment: "अपॉइंटमेंट बुक करा",
  },
  hero: {
    title: "बार्शीतील प्रगत दंत चिकित्सालय",
    subtitle: "डॉ. सोमाणी डेंटल क्लिनिकमध्ये अत्याधुनिक तंत्रज्ञानासह जागतिक दर्जाची दंतसेवा अनुभवा.",
    primaryCta: "भेट निश्चित करा",
    secondaryCta: "आमच्या सेवा"
  },
  about: {
    sectionTitle: "डॉ. सोमाणी यांच्याबद्दल",
    description1: "वर्षानुवर्षांचा प्रदीर्घ अनुभव आणि सतत नवीन शिकण्याच्या वचनबद्धतेसह, डॉ. सोमाणी आपल्या अद्वितीय गरजांनुसार सर्वसमावेशक दंतसेवा प्रदान करतात.",
    description2: "शांत आणि निर्जंतुक वातावरणात अचूक निदान आणि आरामदायक उपचारांसाठी आमचे क्लिनिक आधुनिक तंत्रज्ञानाने सुसज्ज आहे.",
    certificates: "व्यावसायिक प्रमाणपत्रे"
  },
  services: {
    sectionTitle: "आमचे उपचार",
    items: [
      { title: "सामान्य दंत तपासणी व सल्ला", desc: "तुमचे हास्य निरोगी ठेवण्यासाठी सखोल तपासणी आणि प्रामाणिक मार्गदर्शन." },
      { title: "दात स्वच्छता (स्केलिंग व पॉलिशिंग)", desc: "प्लाक व टार्टर काढून दात अधिक स्वच्छ व उजळ करणारी व्यावसायिक स्वच्छता." },
      { title: "रूट कॅनाल उपचार", desc: "संक्रमित किंवा खराब झालेले दात वाचवण्यासाठी वेदनारहित, आधुनिक प्रक्रिया." },
      { title: "अक्कलदाढ काढणे", desc: "त्रासदायक किंवा अडकलेली अक्कलदाढ सुरक्षित व आरामदायकपणे काढणे." },
      { title: "ऑर्थोडॉन्टिक उपचार (ब्रेसेस/क्लिप)", desc: "दात योग्य रेषेत आणण्यासाठी क्लिअर अलाइनर्स आणि ब्रेसेस." },
      { title: "डेंटल ब्रिज", desc: "गमावलेल्या एक किंवा अधिक दातांसाठी विश्वासार्ह, नैसर्गिक दिसणारा उपाय." },
      { title: "डेंटल क्राउन (झिर्कोनिया कॅप)", desc: "दातांची ताकद व सौंदर्य परत आणणारी टिकाऊ, दाताच्या रंगाची झिर्कोनिया कॅप." },
      { title: "तोंडाच्या कर्करोगाची तपासणी व उपचार", desc: "लवकर निदान आणि तज्ञ उपचारांमुळे उत्तम व सुरक्षित परिणाम." },
      { title: "लहान मुलांसाठी दंत उपचार", desc: "लहान मुलांसाठी खास प्रेमळ आणि सौम्य दंत काळजी." },
      { title: "वेदनारहित दंतोपचार", desc: "शांत, आरामदायक भेटीसाठी आधुनिक वेदना-नियंत्रण तंत्र." },
      { title: "किरकोळ तोंडाची शस्त्रक्रिया", desc: "विविध तोंडाच्या आरोग्य समस्यांसाठी कुशल व सुरक्षित शस्त्रक्रिया काळजी." }
    ]
  },
  gallery: {
    sectionTitle: "स्माईल गॅलरी",
    before: "पूर्वी",
    after: "नंतर",
    cases: {
      clip: "ऑर्थोडॉन्टिक क्लिप",
      bridge: "डेंटल ब्रिज",
      cancer: "तोंडाचा कर्करोग उपचार",
      ortho: "ऑर्थोडॉन्टिक सुधारणा",
      wisdom: "अक्कलदाढ शस्त्रक्रिया",
      zirconia: "झिर्कोनिया पुनर्संचयन"
    }
  },
  whyChooseUs: {
    sectionTitle: "आम्हाला का निवडावे?",
    points: [
      { title: "अत्याधुनिक तंत्रज्ञान", desc: "अचूक आणि वेदनारहित उपचारांसाठी आधुनिक उपकरणे." },
      { title: "कठोर निर्जंतुकीकरण", desc: "आम्ही स्वच्छता आणि सुरक्षिततेसाठी आंतरराष्ट्रीय प्रोटोकॉलचे पालन करतो." },
      { title: "अनुभवी काळजी", desc: "तज्ञांचे निदान आणि सहानुभूतीपूर्ण उपचार नियोजन." },
      { title: "आरामदायक वातावरण", desc: "आपल्या मनःशांतीसाठी तयार केलेले क्लिनिकचे शांत वातावरण." }
    ]
  },
  appointment: {
    sectionTitle: "अपॉइंटमेंट बुक करा",
    subtitle: "खालील फॉर्म भरा, आम्ही व्हॉट्सॲपद्वारे तुमची अपॉइंटमेंट निश्चित करू.",
    nameLabel: "संपूर्ण नाव",
    phoneLabel: "फोन नंबर",
    ageLabel: "वय",
    genderLabel: "लिंग",
    serviceLabel: "आवश्यक उपचार",
    dateLabel: "पसंतीची तारीख",
    timeLabel: "पसंतीची वेळ",
    messageLabel: "अतिरिक्त माहिती",
    submitText: "व्हॉट्सॲप द्वारे पाठवा",
    successMessage: "धन्यवाद! तुमची अपॉइंटमेंट निश्चित करण्यासाठी व्हॉट्सॲपकडे वळवत आहोत...",
    selectService: "सेवा निवडा...",
    selectGender: "लिंग निवडा...",
    genderOptions: { male: "पुरुष", female: "स्त्री", other: "इतर" },
    waTemplate: "नमस्कार डॉ. सोमाणी डेंटल क्लिनिक, मला अपॉइंटमेंट बुक करायची आहे.\nनाव: {name}\nफोन: {phone}\nवय: {age}\nलिंग: {gender}\nउपचार: {treatment}\nपसंतीची तारीख: {date}\nपसंतीची वेळ: {time}\nमाहिती: {message}\nकृपया माझ्याशी संपर्क करा."
  },
  faq: {
    sectionTitle: "सतत विचारले जाणारे प्रश्न",
    questions: [
      { q: "मला आधीच अपॉइंटमेंट बुक करण्याची आवश्यकता आहे का?", a: "होय, प्रतीक्षा वेळ टाळण्यासाठी आम्ही अपॉइंटमेंट बुक करण्याची शिफारस करतो." },
      { q: "क्लिनिकमध्ये किरकोळ शस्त्रक्रियांसाठी सुविधा आहे का?", a: "होय, अक्कलदाढ काढण्यासाठी आणि इतर किरकोळ शस्त्रक्रियांसाठी आमच्याकडे प्रगत सुविधा आहेत." },
      { q: "तुम्ही कोणते स्वच्छता प्रोटोकॉल पाळता?", a: "आम्ही आमच्या सर्व उपकरणांसाठी आणि शस्त्रक्रिया क्षेत्रासाठी कठोर बहु-स्तरीय निर्जंतुकीकरण प्रोटोकॉल राखतो." },
      { q: "तुम्ही सौंदर्यपूर्ण दंत उपचार देता का?", a: "होय, आम्ही झिर्कोनिया क्राउन्स, ब्रिजेस आणि ऑर्थोडॉन्टिक उपाय ऑफर करतो." }
    ]
  },
  contact: {
    sectionTitle: "आम्हाला भेट द्या",
    subtitle: "आम्हाला तुमचे आमच्या क्लिनिकमध्ये स्वागत करायला आवडेल. कधीही संपर्क करा.",
    addressTitle: "क्लिनिकचा पत्ता",
    address: "लोकमंगल सहकारी पतसंस्था इमारत, लोकमंगल सहकारी पतसंस्थेच्या खाली, आडवा रस्ता, टिळक चौक, बार्शी, जिल्हा सोलापूर, महाराष्ट्र ४१३४०१, भारत",
    hoursTitle: "कामाची वेळ",
    hours: "सोमवार - शनिवार\nसकाळी ९:०० - दुपारी ३:०० आणि दुपारी ४:०० - रात्री ९:००\nरविवार: बंद",
    phoneTitle: "फोन व व्हॉट्सॲप",
    phone: "+91 90211 86370",
    emailTitle: "ईमेल",
    email: "dr.somanisarang@gmail.com",
    registrationLabel: "नोंदणी क्रमांक",
    registrationNo: "22554",
    getDirections: "दिशा मिळवा",
    callNow: "आता कॉल करा",
    whatsappNow: "व्हॉट्सॲपवर चॅट करा",
    formTitle: "आम्हाला संदेश पाठवा",
    formNameLabel: "संपूर्ण नाव",
    formPhoneLabel: "फोन नंबर",
    formServiceLabel: "उपचार",
    formMessageLabel: "संदेश",
    formSubmit: "व्हॉट्सॲप द्वारे पाठवा",
    waTemplate: "नमस्कार डॉ. सोमाणी डेंटल क्लिनिक, माझे नाव {name} आहे (फोन: {phone}). मला या उपचाराबद्दल जाणून घ्यायचे आहे: {treatment}. {message}"
  },
  footer: {
    tagline: "बार्शी आणि परिसरातील विश्वासार्ह, आधुनिक दंत काळजी.",
    quickLinksTitle: "द्रुत दुवे",
    servicesTitle: "सेवा",
    contactTitle: "संपर्क",
    hoursTitle: "कामाची वेळ",
    hours: "सोम - शनि: सकाळी ९ - दुपारी ३ आणि दुपारी ४ - रात्री ९",
    getDirections: "गुगल मॅप्सवर दिशा पहा",
    rights: "© {year} डॉ. सोमाणी डेंटल क्लिनिक. सर्व हक्क राखीव.",
    registration: "नोंदणी क्रमांक २२५५४"
  }
};

export const translations = { en, mr };