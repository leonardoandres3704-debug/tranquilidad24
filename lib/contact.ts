// Información de contacto de Tranquilidad 24
export const CONTACT = {
  // Número para mostrar
  phoneDisplay: "0266 485-5598",
  // Número alternativo
  phoneDisplayAlt: "2664 855-598",
  // Número para enlaces tel: (formato internacional Argentina)
  phoneTel: "+542664855598",
  // Número para WhatsApp (sin signos, con código de país)
  whatsapp: "5492664855598",
  whatsappDisplay: "2664-855-598",
  location: "San Luis Capital",
} as const

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, quiero más información sobre Tranquilidad 24.",
)

export const whatsappHref = `https://wa.me/${CONTACT.whatsapp}?text=${WHATSAPP_MESSAGE}`
export const telHref = `tel:${CONTACT.phoneTel}`
