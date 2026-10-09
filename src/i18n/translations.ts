export type Locale = "nl" | "en" | "fr" | "es" | "it";

export const locales: Locale[] = ["nl", "en", "fr", "es", "it"];

export const localeLabels: Record<Locale, string> = {
  nl: "Nederlands",
  en: "English",
  fr: "Français",
  es: "Español",
  it: "Italiano",
};

type Translation = Record<string, string>;

// Shared copy is translated centrally so the switch applies consistently to
// navigation, calls to action, forms, headings and the legal footer.
export const translations: Record<Exclude<Locale, "nl">, Translation> = {
  en: {
    "Rijbewijzen": "Driving licences", "Pakketten": "Packages", "Theorie": "Theory",
    "Over ons": "About us", "Instructeurs": "Instructors", "Contact": "Contact",
    "Veelgestelde vragen": "Frequently asked questions", "Privacybeleid": "Privacy policy",
    "Algemene voorwaarden": "Terms and conditions", "Pakketten bekijken": "View packages",
    "Aanvraag sturen": "Send a request", "Menu openen": "Open menu", "Menu sluiten": "Close menu",
    "Hoofdnavigatie": "Main navigation", "Navigatie op tablet": "Tablet navigation", "Mobiel menu": "Mobile menu",
    "Navigatie": "Navigation", "Juridisch": "Legal", "Werkgebied": "Service area", "Openingstijden": "Opening hours",
    "Telefoon": "Phone", "E-mail": "Email", "Adres": "Address", "Stuur een bericht": "Send a message",
    "Aanvraag": "Request", "Ga naar de inhoud": "Skip to content",
    "Nog vragen?": "Still have questions?", "We helpen je verder.": "We can help you further.",
    "Neem contact met ons op": "Get in touch with us",
    "Richtprijs": "Indicative price", "richtprijs": "indicative price", "Meer informatie": "More information",
    "Bekijk categorie": "View category", "Vraag dit pakket aan": "Request this package",
    "Kies het rijbewijs dat bij je past": "Choose the driving licence that suits you",
    "Zeven categorieën, één duidelijk overzicht. Klik op een categorie voor voertuigen, voorwaarden en het verloop van de opleiding.": "Seven categories, one clear overview. Select a category for vehicles, requirements and the course structure.",
    "Van een losse les tot een volledige spoedcursus": "From a single lesson to a complete intensive course",
    "Vertel ons wat je zoekt": "Tell us what you are looking for",
    "Dit is een aanvraag, geen bevestigde reservering. We nemen contact met je op om het vervolg af te spreken.": "This is a request, not a confirmed booking. We will contact you to agree on the next step.",
    "Een rijschool die je traject overzichtelijk maakt": "A driving school that keeps your journey clear",
    "De mensen naast je in de auto": "The people beside you in the car",
    "Theorie bereidt je voor, het CBR beslist": "Theory prepares you; the CBR decides",
    "Praktijklessen, duidelijke prijzen en een helder traject naar je rijbewijs bij Stuurvast Rijschool in Utrecht.": "Practical lessons, clear prices and a straightforward route to your driving licence at Stuurvast Rijschool in Utrecht.",
    "Bel, mail of stuur een bericht. We reageren zo snel mogelijk.": "Call, email or send a message. We will reply as soon as possible.",
    "Zo werkt het": "How it works", "Van aanvraag naar eerste les": "From request to first lesson",
    "Vertel kort wat je nodig hebt en wanneer je wilt starten.": "Tell us briefly what you need and when you would like to start.",
    "We beantwoorden je aanvraag en stemmen beschikbaarheid af.": "We answer your request and coordinate availability.",
    "Na akkoord plannen we je lessen samen in.": "Once agreed, we schedule your lessons together.",
    "Stuur je aanvraag": "Send your request", "Neem contact op": "Get in touch",
    "Prijzen per rijbewijs zijn richtprijzen.": "Prices per driving licence are indicative.",
    "©": "©", "Naam": "Name", "E-mailadres": "Email address", "Telefoonnummer": "Phone number",
    "Bericht": "Message", "Versturen": "Send", "Verstuur je aanvraag": "Send your request",
    "Privacy": "Privacy", "Toestemming": "Consent", "Ik ga akkoord": "I agree", "Taal": "Language", "Taal kiezen": "Choose language", "Nog niet zeker": "Not sure yet", "Rijbewijs": "Driving licence", "Pakket of prestatie": "Package or service", "Bezig met versturen…": "Sending…", "Aanvraag versturen": "Send request", "Bericht versturen": "Send message", "Controleer de gemarkeerde velden en probeer het opnieuw.": "Check the highlighted fields and try again.", "Bedankt, we hebben je aanvraag ontvangen": "Thank you, we received your request",
  },
  fr: {
    "Rijbewijzen": "Permis de conduire", "Pakketten": "Forfaits", "Theorie": "Théorie", "Over ons": "À propos", "Instructeurs": "Moniteurs", "Contact": "Contact",
    "Veelgestelde vragen": "Questions fréquentes", "Privacybeleid": "Politique de confidentialité", "Algemene voorwaarden": "Conditions générales",
    "Pakketten bekijken": "Voir les forfaits", "Aanvraag sturen": "Envoyer une demande", "Menu openen": "Ouvrir le menu", "Menu sluiten": "Fermer le menu",
    "Hoofdnavigatie": "Navigation principale", "Navigatie": "Navigation", "Juridisch": "Informations légales", "Werkgebied": "Zone desservie", "Openingstijden": "Horaires d'ouverture",
    "Telefoon": "Téléphone", "E-mail": "E-mail", "Adres": "Adresse", "Stuur een bericht": "Envoyer un message", "Aanvraag": "Demande", "Ga naar de inhoud": "Aller au contenu",
    "Nog vragen?": "Encore des questions ?", "We helpen je verder.": "Nous vous aidons à avancer.", "Neem contact met ons op": "Contactez-nous",
    "Richtprijs": "Prix indicatif", "richtprijs": "prix indicatif", "Meer informatie": "En savoir plus", "Bekijk categorie": "Voir la catégorie", "Vraag dit pakket aan": "Demander ce forfait",
    "Kies het rijbewijs dat bij je past": "Choisissez le permis qui vous convient",
    "Zeven categorieën, één duidelijk overzicht. Klik op een categorie voor voertuigen, voorwaarden en het verloop van de opleiding.": "Sept catégories, une vue d'ensemble claire. Choisissez une catégorie pour voir les véhicules, les conditions et le déroulement de la formation.",
    "Van een losse les tot een volledige spoedcursus": "D'une leçon à un parcours intensif complet", "Vertel ons wat je zoekt": "Dites-nous ce que vous recherchez",
    "Dit is een aanvraag, geen bevestigde reservering. We nemen contact met je op om het vervolg af te spreken.": "Ceci est une demande, pas une réservation confirmée. Nous vous contacterons pour convenir de la suite.",
    "Een rijschool die je traject overzichtelijk maakt": "Une auto-école qui rend votre parcours clair", "De mensen naast je in de auto": "Les personnes à vos côtés dans la voiture",
    "Theorie bereidt je voor, het CBR beslist": "La théorie vous prépare, le CBR décide", "Bel, mail of stuur een bericht. We reageren zo snel mogelijk.": "Appelez-nous, écrivez-nous ou envoyez un message. Nous répondrons rapidement.",
    "Zo werkt het": "Comment ça marche", "Van aanvraag naar eerste les": "De la demande à la première leçon", "Vertel kort wat je nodig hebt en wanneer je wilt starten.": "Expliquez brièvement ce dont vous avez besoin et quand vous souhaitez commencer.",
    "We beantwoorden je aanvraag en stemmen beschikbaarheid af.": "Nous répondons à votre demande et vérifions les disponibilités.", "Na akkoord plannen we je lessen samen in.": "Après accord, nous planifions ensemble vos leçons.",
    "Stuur je aanvraag": "Envoyer votre demande", "Neem contact op": "Nous contacter", "Prijzen per rijbewijs zijn richtprijzen.": "Les prix par permis sont indicatifs.",
    "Naam": "Nom", "E-mailadres": "Adresse e-mail", "Telefoonnummer": "Numéro de téléphone", "Bericht": "Message", "Versturen": "Envoyer", "Verstuur je aanvraag": "Envoyer votre demande", "Privacy": "Confidentialité", "Toestemming": "Consentement", "Ik ga akkoord": "J'accepte", "Taal": "Langue", "Taal kiezen": "Choisir la langue", "Nog niet zeker": "Pas encore sûr", "Rijbewijs": "Permis de conduire", "Pakket of prestatie": "Forfait ou prestation", "Bezig met versturen…": "Envoi en cours…", "Aanvraag versturen": "Envoyer la demande", "Bericht versturen": "Envoyer le message", "Controleer de gemarkeerde velden en probeer het opnieuw.": "Vérifiez les champs indiqués et réessayez.", "Bedankt, we hebben je aanvraag ontvangen": "Merci, nous avons reçu votre demande",
  },
  es: {
    "Rijbewijzen": "Permisos de conducir", "Pakketten": "Paquetes", "Theorie": "Teoría", "Over ons": "Sobre nosotros", "Instructeurs": "Instructores", "Contact": "Contacto", "Veelgestelde vragen": "Preguntas frecuentes", "Privacybeleid": "Política de privacidad", "Algemene voorwaarden": "Condiciones generales", "Pakketten bekijken": "Ver paquetes", "Aanvraag sturen": "Enviar una solicitud", "Menu openen": "Abrir menú", "Menu sluiten": "Cerrar menú", "Navigatie": "Navegación", "Juridisch": "Legal", "Werkgebied": "Zona de servicio", "Openingstijden": "Horario de apertura", "Telefoon": "Teléfono", "E-mail": "Correo electrónico", "Adres": "Dirección", "Stuur een bericht": "Enviar un mensaje", "Aanvraag": "Solicitud", "Ga naar de inhoud": "Ir al contenido", "Nog vragen?": "¿Tienes más preguntas?", "We helpen je verder.": "Te ayudamos a avanzar.", "Neem contact met ons op": "Contacta con nosotros", "Richtprijs": "Precio orientativo", "richtprijs": "precio orientativo", "Meer informatie": "Más información", "Bekijk categorie": "Ver categoría", "Vraag dit pakket aan": "Solicitar este paquete", "Kies het rijbewijs dat bij je past": "Elige el permiso que necesitas", "Van een losse les tot een volledige spoedcursus": "De una clase suelta a un curso intensivo completo", "Vertel ons wat je zoekt": "Cuéntanos qué buscas", "Een rijschool die je traject overzichtelijk maakt": "Una autoescuela que hace claro tu recorrido", "De mensen naast je in de auto": "Las personas a tu lado en el coche", "Theorie bereidt je voor, het CBR beslist": "La teoría te prepara; el CBR decide", "Bel, mail of stuur een bericht. We reageren zo snel mogelijk.": "Llama, escribe o envía un mensaje. Responderemos lo antes posible.", "Zo werkt het": "Cómo funciona", "Van aanvraag naar eerste les": "De la solicitud a la primera clase", "Stuur je aanvraag": "Enviar tu solicitud", "Neem contact op": "Contactar", "Naam": "Nombre", "E-mailadres": "Correo electrónico", "Telefoonnummer": "Número de teléfono", "Bericht": "Mensaje", "Versturen": "Enviar", "Verstuur je aanvraag": "Enviar tu solicitud", "Privacy": "Privacidad", "Toestemming": "Consentimiento", "Ik ga akkoord": "Acepto",
  },
  it: {
    "Rijbewijzen": "Patenti di guida", "Pakketten": "Pacchetti", "Theorie": "Teoria", "Over ons": "Chi siamo", "Instructeurs": "Istruttori", "Contact": "Contatti", "Veelgestelde vragen": "Domande frequenti", "Privacybeleid": "Privacy", "Algemene voorwaarden": "Termini e condizioni", "Pakketten bekijken": "Vedi i pacchetti", "Aanvraag sturen": "Invia una richiesta", "Menu openen": "Apri menu", "Menu sluiten": "Chiudi menu", "Navigatie": "Navigazione", "Juridisch": "Note legali", "Werkgebied": "Zona servita", "Openingstijden": "Orari di apertura", "Telefoon": "Telefono", "E-mail": "Email", "Adres": "Indirizzo", "Stuur een bericht": "Invia un messaggio", "Aanvraag": "Richiesta", "Ga naar de inhoud": "Vai al contenuto", "Nog vragen?": "Altre domande?", "We helpen je verder.": "Ti aiutiamo a proseguire.", "Neem contact met ons op": "Contattaci", "Richtprijs": "Prezzo indicativo", "richtprijs": "prezzo indicativo", "Meer informatie": "Maggiori informazioni", "Bekijk categorie": "Vedi categoria", "Vraag dit pakket aan": "Richiedi questo pacchetto", "Kies het rijbewijs dat bij je past": "Scegli la patente adatta a te", "Van een losse les tot een volledige spoedcursus": "Da una lezione singola a un corso intensivo completo", "Vertel ons wat je zoekt": "Dicci cosa cerchi", "Een rijschool die je traject overzichtelijk maakt": "Una scuola guida che rende chiaro il tuo percorso", "De mensen naast je in de auto": "Le persone al tuo fianco in auto", "Theorie bereidt je voor, het CBR beslist": "La teoria ti prepara, il CBR decide", "Bel, mail of stuur een bericht. We reageren zo snel mogelijk.": "Chiamaci, scrivici o invia un messaggio. Risponderemo al più presto.", "Zo werkt het": "Come funziona", "Van aanvraag naar eerste les": "Dalla richiesta alla prima lezione", "Stuur je aanvraag": "Invia la richiesta", "Neem contact op": "Contattaci", "Naam": "Nome", "E-mailadres": "Indirizzo email", "Telefoonnummer": "Numero di telefono", "Bericht": "Messaggio", "Versturen": "Invia", "Verstuur je aanvraag": "Invia la richiesta", "Privacy": "Privacy", "Toestemming": "Consenso", "Ik ga akkoord": "Accetto",
  },
};

// The DOM translator also handles copy rendered by server components. Keep
// these page, form and validation strings in the same source dictionary so
// changing language updates the complete visitor journey.
const additionalTranslations: Record<Exclude<Locale, "nl">, Translation> = {
  en: {
    "Jouw rijbewijs begint hier.": "Your driving licence starts here.", "Van je eerste rijles tot je praktijkexamen. Ontdek de mogelijkheden en kies een traject dat bij je past.": "From your first driving lesson to your practical test. Discover the options and choose a path that suits you.", "Start met een aanvraag": "Start with a request", "Ontdek de rijbewijzen": "Explore driving licences", "Praktijklessen met een instructeur.": "Practical lessons with an instructor.", "Een helder overzicht van je mogelijkheden.": "A clear overview of your options.", "7 categorieën": "7 categories", "Van scooter tot tractor": "From scooter to tractor", "Persoonlijke begeleiding": "Personal guidance", "Stap voor stap": "Step by step", "Jouw volgende stap": "Your next step", "Een eenvoudige aanvraag": "A simple request", "Vragen? Neem contact op": "Questions? Get in touch", "Waarom Stuurvast": "Why Stuurvast", "Wat bieden we aan?": "What do we offer?", "Veelgestelde vragen": "Frequently asked questions", "Bespreek je voorbereiding": "Discuss your preparation", "Vragen over theorie of examen?": "Questions about theory or the test?", "Subcategorieën": "Subcategories", "Voorwaarden": "Requirements", "Prijsoverzicht": "Price overview", "Pakketten en opties": "Packages and options", "Kies je startpunt": "Choose your starting point", "Een pakket dat past bij jouw manier van leren": "A package that suits your way of learning", "Losse les": "Single lesson", "Beginner": "Beginner", "Spoedcursus": "Intensive course", "Onderdeel": "Item", "Aanvraag versturen": "Send request", "Na je aanvraag": "After your request", "Wat je niet betaalt": "What you do not pay", "Nog geen instructeur gekozen?": "Haven't chosen an instructor yet?", "Er ging iets mis": "Something went wrong", "Naar home": "Back home", "(optioneel)": "(optional)", "Website": "Website", "Vul je naam in.": "Enter your name.", "Deze naam is te lang.": "This name is too long.", "Vul een geldig e-mailadres in.": "Enter a valid email address.", "Vul een geldig telefoonnummer in.": "Enter a valid phone number.", "Kies een geldig rijbewijs.": "Choose a valid driving licence.", "Kies een geldig pakket.": "Choose a valid package.", "Schrijf een kort bericht.": "Write a short message.", "Je bericht is te lang.": "Your message is too long.", "Geef toestemming om je gegevens te verwerken.": "Give consent to process your data.", "Ga akkoord met de algemene voorwaarden.": "Accept the terms and conditions.", "Verzenden mislukt.": "Sending failed.", "Te veel aanvragen. Probeer het later opnieuw.": "Too many requests. Please try again later.", "Ongeldige aanvraag.": "Invalid request.", "Controleer de gemarkeerde velden en probeer het opnieuw.": "Check the highlighted fields and try again.", "Bedankt, we hebben je aanvraag ontvangen": "Thank you, we received your request", "Bezig met versturen…": "Sending…", "Bericht versturen": "Send message", "Ik geef toestemming om mijn gegevens te verwerken voor deze aanvraag, zoals beschreven in het": "I consent to my data being processed for this request, as described in the", "privacybeleid": "privacy policy", "algemene voorwaarden": "terms and conditions", "Hier sturen we je bevestiging naartoe.": "We will send your confirmation here.", "Doorgaan naar betalen": "Continue to payment", "Je wordt doorgestuurd…": "Redirecting…", "Je betaalt veilig via Stripe. Wij bewaren geen bankgegevens.": "You pay securely via Stripe. We do not store bank details.", "Vertel kort wat je zoekt, bijvoorbeeld je ervaring of gewenste startdatum.": "Briefly tell us what you are looking for, such as your experience or preferred start date.", "Vul je gegevens in; velden met een * zijn verplicht. We gebruiken je gegevens alleen om je aanvraag te beantwoorden.": "Fill in your details; fields marked * are required. We only use your details to answer your request.", "Nog niet zeker": "Not sure yet"
  },
  fr: {
    "Jouw rijbewijs begint hier.": "Votre permis commence ici.", "Van je eerste rijles tot je praktijkexamen. Ontdek de mogelijkheden en kies een traject dat bij je past.": "De votre première leçon à l'examen pratique. Découvrez les possibilités et choisissez le parcours qui vous convient.", "Start met een aanvraag": "Commencer par une demande", "Ontdek de rijbewijzen": "Découvrir les permis", "Praktijklessen met een instructeur.": "Des leçons pratiques avec un moniteur.", "Een helder overzicht van je mogelijkheden.": "Une vue claire de vos possibilités.", "7 categorieën": "7 catégories", "Van scooter tot tractor": "Du scooter au tracteur", "Persoonlijke begeleiding": "Accompagnement personnalisé", "Stap voor stap": "Étape par étape", "Jouw volgende stap": "Votre prochaine étape", "Een eenvoudige aanvraag": "Une demande simple", "Vragen? Neem contact op": "Une question ? Contactez-nous", "Waarom Stuurvast": "Pourquoi Stuurvast", "Wat bieden we aan?": "Que proposons-nous ?", "Bespreek je voorbereiding": "Parlons de votre préparation", "Vragen over theorie of examen?": "Des questions sur la théorie ou l'examen ?", "Subcategorieën": "Sous-catégories", "Voorwaarden": "Conditions", "Prijsoverzicht": "Aperçu des prix", "Pakketten en opties": "Forfaits et options", "Kies je startpunt": "Choisissez votre point de départ", "Een pakket dat past bij jouw manier van leren": "Un forfait adapté à votre façon d'apprendre", "Losse les": "Leçon individuelle", "Beginner": "Débutant", "Spoedcursus": "Formation intensive", "Onderdeel": "Élément", "Aanvraag versturen": "Envoyer la demande", "Na je aanvraag": "Après votre demande", "Wat je niet betaalt": "Ce que vous ne payez pas", "Nog geen instructeur gekozen?": "Vous n'avez pas encore choisi de moniteur ?", "Er ging iets mis": "Une erreur s'est produite", "Naar home": "Retour à l'accueil", "(optioneel)": "(facultatif)", "Website": "Site web", "Vul je naam in.": "Indiquez votre nom.", "Deze naam is te lang.": "Ce nom est trop long.", "Vul een geldig e-mailadres in.": "Indiquez une adresse e-mail valide.", "Vul een geldig telefoonnummer in.": "Indiquez un numéro de téléphone valide.", "Kies een geldig rijbewijs.": "Choisissez un permis valide.", "Kies een geldig pakket.": "Choisissez un forfait valide.", "Schrijf een kort bericht.": "Écrivez un court message.", "Je bericht is te lang.": "Votre message est trop long.", "Geef toestemming om je gegevens te verwerken.": "Autorisez le traitement de vos données.", "Ga akkoord met de algemene voorwaarden.": "Acceptez les conditions générales.", "Verzenden mislukt.": "L'envoi a échoué.", "Te veel aanvragen. Probeer het later opnieuw.": "Trop de demandes. Réessayez plus tard.", "Ongeldige aanvraag.": "Demande invalide.", "Controleer de gemarkeerde velden en probeer het opnieuw.": "Vérifiez les champs indiqués et réessayez.", "Bezig met versturen…": "Envoi en cours…", "Bericht versturen": "Envoyer le message", "Hier sturen we je bevestiging naartoe.": "Nous vous enverrons votre confirmation ici.", "Doorgaan naar betalen": "Continuer vers le paiement", "Je wordt doorgestuurd…": "Redirection en cours…", "Je betaalt veilig via Stripe. Wij bewaren geen bankgegevens.": "Vous payez en toute sécurité via Stripe. Nous ne conservons pas vos coordonnées bancaires.", "Vertel kort wat je zoekt, bijvoorbeeld je ervaring of gewenste startdatum.": "Expliquez brièvement ce que vous recherchez, par exemple votre expérience ou votre date de début souhaitée.", "Vul je gegevens in; velden met een * zijn verplicht. We gebruiken je gegevens alleen om je aanvraag te beantwoorden.": "Renseignez vos coordonnées ; les champs marqués d'un * sont obligatoires. Nous les utilisons uniquement pour répondre à votre demande.", "Nog niet zeker": "Pas encore sûr"
  },
  es: {
    "Jouw rijbewijs begint hier.": "Tu permiso de conducir empieza aquí.", "Start met een aanvraag": "Empezar con una solicitud", "Ontdek de rijbewijzen": "Descubre los permisos", "Vragen? Neem contact op": "¿Preguntas? Contáctanos", "Waarom Stuurvast": "Por qué Stuurvast", "Wat bieden we aan?": "¿Qué ofrecemos?", "Subcategorieën": "Subcategorías", "Voorwaarden": "Condiciones", "Prijsoverzicht": "Resumen de precios", "Pakketten en opties": "Paquetes y opciones", "Er ging iets mis": "Algo salió mal", "Naar home": "Volver al inicio", "Vul je naam in.": "Introduce tu nombre.", "Vul een geldig e-mailadres in.": "Introduce un correo electrónico válido.", "Vul een geldig telefoonnummer in.": "Introduce un teléfono válido.", "Kies een geldig rijbewijs.": "Elige un permiso válido.", "Kies een geldig pakket.": "Elige un paquete válido.", "Schrijf een kort bericht.": "Escribe un mensaje breve.", "Geef toestemming om je gegevens te verwerken.": "Autoriza el tratamiento de tus datos.", "Ga akkoord met de algemene voorwaarden.": "Acepta los términos y condiciones.", "Controleer de gemarkeerde velden en probeer het opnieuw.": "Revisa los campos marcados e inténtalo de nuevo.", "Doorgaan naar betalen": "Continuar al pago", "Nog niet zeker": "Aún no estoy seguro"
  },
  it: {
    "Jouw rijbewijs begint hier.": "La tua patente inizia qui.", "Start met een aanvraag": "Inizia con una richiesta", "Ontdek de rijbewijzen": "Scopri le patenti", "Vragen? Neem contact op": "Domande? Contattaci", "Waarom Stuurvast": "Perché Stuurvast", "Wat bieden we aan?": "Cosa offriamo?", "Subcategorieën": "Sottocategorie", "Voorwaarden": "Condizioni", "Prijsoverzicht": "Panoramica dei prezzi", "Pakketten en opties": "Pacchetti e opzioni", "Er ging iets mis": "Si è verificato un errore", "Naar home": "Torna alla home", "Vul je naam in.": "Inserisci il tuo nome.", "Vul een geldig e-mailadres in.": "Inserisci un indirizzo e-mail valido.", "Vul een geldig telefoonnummer in.": "Inserisci un numero di telefono valido.", "Kies een geldig rijbewijs.": "Scegli una patente valida.", "Kies een geldig pakket.": "Scegli un pacchetto valido.", "Schrijf een kort bericht.": "Scrivi un breve messaggio.", "Geef toestemming om je gegevens te verwerken.": "Autorizza il trattamento dei tuoi dati.", "Ga akkoord met de algemene voorwaarden.": "Accetta i termini e le condizioni.", "Controleer de gemarkeerde velden en probeer het opnieuw.": "Controlla i campi evidenziati e riprova.", "Doorgaan naar betalen": "Continua al pagamento", "Nog niet zeker": "Non sono ancora sicuro"
  }
};

Object.assign(additionalTranslations.fr, {
  "Onze aanpak": "Notre approche", "Van eerste gesprek tot examen": "Du premier échange à l'examen", "Waar we rijden": "Où nous conduisons", "Leren in Utrecht": "Apprendre à Utrecht", "Oefenen met de situaties die je echt tegenkomt": "S'entraîner dans les situations que vous rencontrez vraiment", "Wat je van Stuurvast mag verwachten": "Ce que vous pouvez attendre de Stuurvast", "De la demande à la première leçon": "De la demande à la première leçon", "Een goede match": "La bonne relation", "Vertel ons wat jou helpt om goed te leren": "Dites-nous ce qui vous aide à bien apprendre", "Heb je behoefte aan extra uitleg, een rustig tempo of juist een strakke planning? Zet het in je aanvraag. Zo kunnen we vanaf het eerste gesprek beter rekening houden met jouw situatie.": "Vous avez besoin d'explications supplémentaires, d'un rythme calme ou d'un planning précis ? Indiquez-le dans votre demande afin que nous puissions mieux tenir compte de votre situation dès le premier échange.", "Dat is geen probleem. Stuur je rijbewijs en je gewenste startmoment door; we zoeken samen de passende planning.": "Ce n'est pas un problème. Envoyez-nous votre permis et votre date de début souhaitée ; nous chercherons ensemble le planning adapté.", "Een rijopleiding wordt overzichtelijker wanneer je weet wat de volgende stap is.": "Une formation devient plus claire lorsque vous savez quelle est la prochaine étape.", "Gebruik deze drie situaties als eerste oriëntatie. Tijdens de intake kunnen we je keuze bijstellen.": "Utilisez ces trois situations pour vous orienter. Nous pourrons ajuster votre choix lors du premier échange.", "Een helder overzicht van de belangrijkste verschillen tussen de meest gekozen lesopties.": "Un aperçu clair des principales différences entre les options de cours les plus choisies.", "Hoe gaat het verder na je aanvraag?": "Que se passe-t-il après votre demande ?", "Twijfel je welk pakket past?": "Vous hésitez sur le forfait adapté ?", "Neem contact met ons op": "Contactez-nous", "Privacybeleid": "Politique de confidentialité", "Algemene voorwaarden": "Conditions générales", "Welke gegevens verwerken we?": "Quelles données traitons-nous ?", "Waarvoor gebruiken we ze?": "Pourquoi les utilisons-nous ?", "Grondslag": "Base juridique", "Met wie delen we ze?": "Avec qui les partageons-nous ?", "Hoe lang bewaren we ze?": "Combien de temps les conservons-nous ?", "Je rechten": "Vos droits", "Cookies": "Cookies", "Wijzigingen en vragen": "Modifications et questions", "Wie zijn wij?": "Qui sommes-nous ?", "Aanbod en prijzen": "Offre et tarifs", "Wat je koopt": "Ce que vous achetez", "Aanvraag en planning": "Demande et planning", "Annuleren en restitutie": "Annulation et remboursement", "Aansprakelijkheid": "Responsabilité", "Klachten": "Réclamations", "Planning en uitvoering": "Planning et exécution", "Toepasselijk recht": "Droit applicable", "oktober 2026": "octobre 2026", "Contact": "Contact", "Telefoon": "Téléphone", "E-mail": "E-mail", "Adres": "Adresse", "Werkgebied": "Zone desservie", "Openingstijden": "Horaires d'ouverture", "Stuur een bericht": "Envoyer un message", "Aanvraag": "Demande", "Zo werkt het": "Comment ça marche", "Van aanvraag naar eerste les": "De la demande à la première leçon", "Vertel kort wat je nodig hebt en wanneer je wilt starten.": "Expliquez brièvement ce dont vous avez besoin et quand vous souhaitez commencer.", "We beantwoorden je aanvraag en stemmen beschikbaarheid af.": "Nous répondons à votre demande et vérifions les disponibilités.", "Na akkoord plannen we je lessen samen in.": "Après accord, nous planifions ensemble vos leçons.", "Bel, mail of stuur een bericht. We reageren zo snel mogelijk.": "Appelez-nous, écrivez-nous ou envoyez un message. Nous répondrons rapidement.", "Dit is een aanvraag, geen bevestigde reservering. We nemen contact met je op om het vervolg af te spreken.": "Ceci est une demande, pas une réservation confirmée. Nous vous contacterons pour convenir de la suite.", "Klaar om te starten?": "Prêt à commencer ?", "Kies een pakket of stuur een aanvraag. We reageren zo snel mogelijk.": "Choisissez un forfait ou envoyez une demande. Nous vous répondrons rapidement."
});

Object.assign(additionalTranslations.en, { "Bekijk alle rijbewijzen": "View all driving licences" });
Object.assign(additionalTranslations.fr, { "Bekijk alle rijbewijzen": "Voir tous les permis" });
Object.assign(additionalTranslations.es, { "Bekijk alle rijbewijzen": "Ver todos los permisos" });
Object.assign(additionalTranslations.it, { "Bekijk alle rijbewijzen": "Vedi tutte le patenti" });

Object.assign(additionalTranslations.en, {
  "De verbinding duurt te lang. Controleer je verbinding en probeer het opnieuw.": "The connection is taking too long. Check your connection and try again.",
  "Scooter en bromfiets": "Scooter and moped",
  "Je eerste rijbewijs, vanaf 16 jaar.": "Your first driving licence, from age 16.",
  "Motor": "Motorcycle",
  "Alle motorcategorieën, inclusief A1 en A2.": "All motorcycle categories, including A1 and A2.",
  "Personenauto": "Passenger car",
  "Het standaard autorijbewijs.": "The standard car licence.",
  "Auto met aanhanger": "Car with trailer",
  "Voor wie regelmatig met aanhanger rijdt.": "For anyone who regularly drives with a trailer.",
  "Vrachtwagen": "Lorry",
  "Inclusief C1 voor lichtere vrachtwagens.": "Including C1 for lighter lorries.",
  "Bus": "Bus",
  "Inclusief D1 en DE waar relevant.": "Including D1 and DE where relevant.",
  "Tractor en landbouwvoertuig": "Tractor and agricultural vehicle",
  "Voor tractoren en landbouwvoertuigen op de openbare weg.": "For tractors and agricultural vehicles on public roads.",
});
Object.assign(additionalTranslations.fr, {
  "De verbinding duurt te lang. Controleer je verbinding en probeer het opnieuw.": "La connexion prend trop de temps. Vérifiez votre connexion et réessayez.",
  "Scooter en bromfiets": "Scooter et cyclomoteur",
  "Je eerste rijbewijs, vanaf 16 jaar.": "Votre premier permis, dès 16 ans.",
  "Motor": "Moto",
  "Alle motorcategorieën, inclusief A1 en A2.": "Toutes les catégories moto, y compris A1 et A2.",
  "Personenauto": "Voiture",
  "Het standaard autorijbewijs.": "Le permis voiture standard.",
  "Auto met aanhanger": "Voiture avec remorque",
  "Voor wie regelmatig met aanhanger rijdt.": "Pour celles et ceux qui conduisent régulièrement avec une remorque.",
  "Vrachtwagen": "Camion",
  "Inclusief C1 voor lichtere vrachtwagens.": "Y compris le C1 pour les camions plus légers.",
  "Bus": "Autobus",
  "Inclusief D1 en DE waar relevant.": "Y compris D1 et DE lorsque cela s'applique.",
  "Tractor en landbouwvoertuig": "Tracteur et véhicule agricole",
  "Voor tractoren en landbouwvoertuigen op de openbare weg.": "Pour les tracteurs et véhicules agricoles sur la voie publique.",
});
Object.assign(additionalTranslations.es, {
  "De verbinding duurt te lang. Controleer je verbinding en probeer het opnieuw.": "La conexión tarda demasiado. Comprueba tu conexión y vuelve a intentarlo.",
  "Scooter en bromfiets": "Scooter y ciclomotor",
  "Je eerste rijbewijs, vanaf 16 jaar.": "Tu primer permiso, a partir de los 16 años.",
  "Motor": "Moto",
  "Alle motorcategorieën, inclusief A1 en A2.": "Todas las categorías de moto, incluidas A1 y A2.",
  "Personenauto": "Turismo",
  "Het standaard autorijbewijs.": "El permiso de coche estándar.",
  "Auto met aanhanger": "Coche con remolque",
  "Voor wie regelmatig met aanhanger rijdt.": "Para quienes conducen habitualmente con remolque.",
  "Vrachtwagen": "Camión",
  "Inclusief C1 voor lichtere vrachtwagens.": "Incluye el C1 para camiones ligeros.",
  "Bus": "Autobús",
  "Inclusief D1 en DE waar relevant.": "Incluye D1 y DE cuando corresponda.",
  "Tractor en landbouwvoertuig": "Tractor y vehículo agrícola",
  "Voor tractoren en landbouwvoertuigen op de openbare weg.": "Para tractores y vehículos agrícolas en vías públicas.",
});
Object.assign(additionalTranslations.it, {
  "De verbinding duurt te lang. Controleer je verbinding en probeer het opnieuw.": "La connessione sta impiegando troppo tempo. Controlla la connessione e riprova.",
  "Scooter en bromfiets": "Scooter e ciclomotore",
  "Je eerste rijbewijs, vanaf 16 jaar.": "La tua prima patente, dai 16 anni.",
  "Motor": "Moto",
  "Alle motorcategorieën, inclusief A1 en A2.": "Tutte le categorie di moto, incluse A1 e A2.",
  "Personenauto": "Auto",
  "Het standaard autorijbewijs.": "La patente auto standard.",
  "Auto met aanhanger": "Auto con rimorchio",
  "Voor wie regelmatig met aanhanger rijdt.": "Per chi guida spesso con un rimorchio.",
  "Vrachtwagen": "Camion",
  "Inclusief C1 voor lichtere vrachtwagens.": "Include la C1 per i camion più leggeri.",
  "Bus": "Autobus",
  "Inclusief D1 en DE waar relevant.": "Include D1 e DE quando pertinente.",
  "Tractor en landbouwvoertuig": "Trattore e veicolo agricolo",
  "Voor tractoren en landbouwvoertuigen op de openbare weg.": "Per trattori e veicoli agricoli sulla strada pubblica.",
});

for (const locale of locales.filter((item): item is Exclude<Locale, "nl"> => item !== "nl")) {
  Object.assign(translations[locale], additionalTranslations[locale]);
}

export function translate(value: string, locale: Locale) {
  if (locale === "nl") return value;
  return translations[locale][value] ?? value;
}
