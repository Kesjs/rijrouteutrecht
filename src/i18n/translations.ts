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

export function translate(value: string, locale: Locale) {
  if (locale === "nl") return value;
  return translations[locale][value] ?? value;
}
