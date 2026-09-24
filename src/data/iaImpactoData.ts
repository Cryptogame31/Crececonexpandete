export interface IaImpactoConfig {
  eventName: string;
  tagline: string;
  city: string;
  venue: string;
  schedule: string;
  frequency: string;
  spotsTotal: number;
  spotsAvailable: number;
  officialPhone: string;
  telegramCommunityUrl: string;
  wompiCheckoutUrl: string;
  description: string;
  prices: {
    preventa: {
      label: string;
      priceNumber: number;
      priceFormatted: string;
      status: 'active' | 'upcoming' | 'sold_out';
      badge: string;
      description: string;
    };
    regular: {
      label: string;
      priceNumber: number;
      priceFormatted: string;
      status: 'active' | 'upcoming' | 'sold_out';
      badge: string;
      description: string;
    };
    ultimosCupos: {
      label: string;
      priceNumber: number;
      priceFormatted: string;
      status: 'active' | 'upcoming' | 'sold_out';
      badge: string;
      description: string;
    };
  };
}

export const IA_IMPACTO_CONFIG: IaImpactoConfig = {
  eventName: "IA IMPACTO",
  tagline: "De una idea a algo real.",
  city: "Medellín, Colombia",
  venue: "Espacio Tecnológico Innovador (Prado Colonial, Medellín - Notificado a participantes)",
  schedule: "Martes de 6:30 PM a 8:30 PM",
  frequency: "3 Sesiones Presenciales • 2 Horas por sesión (Martes 6:30 PM - 8:30 PM)",
  spotsTotal: 25,
  spotsAvailable: 7,
  officialPhone: "573045751648",
  telegramCommunityUrl: "https://t.me/+expandete_ia_impacto",
  wompiCheckoutUrl: "https://checkout.wompi.co/l/ZqqdAD",
  description: "Una experiencia presencial, práctica y transformadora para descubrir cómo utilizar Inteligencia Artificial para crear contenidos virales, imágenes publicitarias de estudio, videos de alto impacto, páginas web funcionales, aplicaciones para empresas, optimización y mejoras de sistemas, y prototipos digitales listos para monetizar.",
  prices: {
    preventa: {
      label: "Fase 1 • Preventa Anticipada",
      priceNumber: 199000,
      priceFormatted: "$199.000 COP",
      status: "active",
      badge: "🔥 ACTIVA AHORA • CUPOS LIMITADOS",
      description: "Precio exclusivo para los primeros 10 inscritos de la nueva edición."
    },
    regular: {
      label: "Fase 2 • Precio Regular",
      priceNumber: 249000,
      priceFormatted: "$249.000 COP",
      status: "upcoming",
      badge: "PRÓXIMAMENTE",
      description: "Disponible una vez agotados los cupos de preventa."
    },
    ultimosCupos: {
      label: "Fase 3 • Cierre / Últimos Cupos",
      priceNumber: 299000,
      priceFormatted: "$299.000 COP",
      status: "upcoming",
      badge: "SEMANA DEL EVENTO",
      description: "Precio de última hora sujeto a disponibilidad de sala."
    }
  }
};

export interface SessionPlan {
  number: string;
  title: string;
  category: string;
  badge: string;
  catchUpSummary: string; // "Ponte al día en 15 min"
  objective: string;
  highlights: string[];
  liveProject: string;
  flyerImage?: string;
  flyerTitle?: string;
}

export const SESSIONS_PLAN: SessionPlan[] = [
  {
    number: "01",
    title: "DESCUBRE LA IA",
    category: "Fundamentos, Modelos & Creación Multimedia",
    badge: "SESIÓN 1",
    catchUpSummary: "Bienvenida e inmersión inicial: mapa mental del ecosistema de IA generativa y configuración de cuentas sin rodeos técnicos.",
    objective: "Comprender el nuevo mapa de la IA, elegir las herramientas correctas y dominar la ingeniería de prompts para textos, imágenes y video de impacto.",
    highlights: [
      "Qué es realmente la IA generativa y qué pueden (y no pueden) hacer los modelos actuales.",
      "Diferencias prácticas entre modelos de texto, imagen, video, audio y programación.",
      "Ingeniería de Prompts de Alto Impacto: Contexto + Rol + Objetivo + Información + Restricciones + Formato + Ejemplos.",
      "El 'Prompt de los Prompts': la plantilla maestra para que la IA diseñe tus mejores instrucciones.",
      "Generación práctica de imágenes comerciales de alta fidelidad desde texto y referencias.",
      "Introducción a la generación de video publicitario: texto a video e imagen a video."
    ],
    liveProject: "Creación en vivo de un set de piezas gráficas y video spot para un producto real.",
    flyerImage: "https://vicflix.expandete.cloud/Expandete_videos/a2.jpg",
    flyerTitle: "Flyer Oficial Sesión 1 • Descubre la IA & Prompts"
  },
  {
    number: "02",
    title: "CREA CON IA",
    category: "Contenido, Publicidad & Experiencias Digitales",
    badge: "SESIÓN 2",
    catchUpSummary: "Ponte al día en 15 min: repaso relámpago de prompts y generación visual para que cualquier participante nuevo comience al mismo ritmo.",
    objective: "Aplicar la IA en flujos de trabajo comerciales para generar campañas visuales, transformar imágenes y construir piezas de alto engagement.",
    highlights: [
      "Generar vs. Editar: cómo refinar, modificar fondos, cambiar elementos y corregir imágenes con IA.",
      "Creación de fotografías comerciales de producto para e-commerce y catálogos digitales.",
      "Video publicitario avanzado: movimientos de cámara, ritmo, coherencia de personajes y transiciones.",
      "Estrategia de contenidos y copywriting de neuro-ventas para Meta Ads, TikTok y LinkedIn.",
      "Creación de assets visuales listos para alimentar páginas web y catálogos interactivos."
    ],
    liveProject: "Construcción en vivo de una campaña publicitaria completa: copys, fotos comerciales y video animado.",
    flyerImage: "https://vicflix.expandete.cloud/Expandete_videos/a3.jpg",
    flyerTitle: "Flyer Oficial Sesión 2 • Crea con IA & Publicidad"
  },
  {
    number: "03",
    title: "CONSTRUYE CON IA",
    category: "Landing Pages, Apps Funcionales & Ecosistema Cloud",
    badge: "SESIÓN 3",
    catchUpSummary: "Ponte al día en 15 min: resumen visual de los activos creados en las sesiones 1 y 2 para integrarlos en la etapa de construcción.",
    objective: "Llevar una idea hasta un producto digital terminado: crear una landing page funcional y un prototipo de aplicación sin ser programador.",
    highlights: [
      "Programación asistida por IA: cómo hablarle a un editor de código en lenguaje natural.",
      "Construcción en vivo de una Landing Page desde cero con formulario, botones y diseño moderno.",
      "Construcción de una Aplicación Funcional (ej. Sistema de reservas interactivo con datos reales).",
      "Diferenciar una 'imagen que parece app' de una 'aplicación que realmente funciona'.",
      "Antigravity y herramientas Cloud: qué son modelos, créditos, APIs, tokens y consumo en la nube explicado fácil.",
      "El Gran Flujo Completo: Idea → Prompt → Estrategia → Texto → Imagen → Video → Landing → App."
    ],
    liveProject: "Despliegue en vivo de una landing page operativa y prototipo de app interactiva creada en directo.",
    flyerImage: "https://vicflix.expandete.cloud/Expandete_videos/a4.jpg",
    flyerTitle: "Flyer Oficial Sesión 3 • Construye con IA & Creación de App"
  }
];

export interface OfficialFlyer {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  tag: string;
  sessionRef: string;
  description: string;
  keyPoints: string[];
}

export const OFFICIAL_IA_IMPACTO_FLYERS: OfficialFlyer[] = [
  {
    id: "flyer-a1",
    number: "01",
    title: "IA IMPACTO // De una Idea a Algo Real",
    subtitle: "Póster Oficial & Manifiesto Central de la Experiencia Presencial en Medellín",
    badge: "MANIFIESTO OFICIAL",
    image: "https://vicflix.expandete.cloud/Expandete_videos/a1.jpg",
    tag: "EXPÁNDETE STUDIO",
    sessionRef: "General",
    description: "La visión holística del programa: cómo romper la brecha entre imaginar un proyecto y materializarlo en un activo digital monetizable mediante flujos guiados por IA.",
    keyPoints: [
      "Filosofía práctica de Expándete Studio con casos reales colombianos",
      "Cadena de valor: Prompt → Imagen → Video → Web → App",
      "Cupo restringido a 25 plazas presenciales para interacción personalizada",
      "Material perpetuo en Telegram y soporte directo de mentores"
    ]
  },
  {
    id: "flyer-a2",
    number: "02",
    title: "Sesión 1: Descubre la IA & Prompt Engineering",
    subtitle: "Flyer de Formato Comercial, Modelos Generativos & Producción Multimedia",
    badge: "SESIÓN 01 PRESENCIAL",
    image: "https://vicflix.expandete.cloud/Expandete_videos/a2.jpg",
    tag: "MÓDULO FUNDACIONAL",
    sessionRef: "Sesión 01",
    description: "La clave maestra para dominar las herramientas: estructuración lógica de instrucciones profesionales y creación de sets fotográficos de catálogo.",
    keyPoints: [
      "Fórmula de 7 pasos: Contexto + Rol + Restricciones + Formato",
      "El 'Prompt de los Prompts' para auto-diseñar instrucciones complejas",
      "Generación fotográfica hiperrealista de producto en resolución 8K",
      "Demostración en vivo sobre pantalla gigante paso a paso"
    ]
  },
  {
    id: "flyer-a3",
    number: "03",
    title: "Sesión 2: Crea con IA & Contenidos Publicitarios",
    subtitle: "Flyer de Campañas de Alto Impacto para Meta Ads, TikTok y E-commerce",
    badge: "SESIÓN 02 PRESENCIAL",
    image: "https://vicflix.expandete.cloud/Expandete_videos/a3.jpg",
    tag: "MÓDULO CREATIVO",
    sessionRef: "Sesión 02",
    description: "Transformación de imágenes estáticas en anuncios dinámicos de alta retención de scroll con ganchos dopamínicos y ritmo cinematográfico.",
    keyPoints: [
      "Técnicas avanzadas de refinamiento, borrado de fondos y reemplazo de elementos",
      "Producción de video spots comerciales con movimientos de cámara fluidos",
      "Copywriting neuro-persuasivo enfocado en conversión directa",
      "Construcción en vivo de una campaña publicitaria completa"
    ]
  },
  {
    id: "flyer-a4",
    number: "04",
    title: "Sesión 3: Construye con IA, Apps para Empresas & Sistemas",
    subtitle: "Flyer de Landing Pages Funcionales, Apps para Empresas & Optimización de Sistemas",
    badge: "SESIÓN 03 PRESENCIAL",
    image: "https://vicflix.expandete.cloud/Expandete_videos/a4.jpg",
    tag: "MÓDULO SOFTWARE & SISTEMAS",
    sessionRef: "Sesión 03",
    description: "Pasa de la imagen a herramientas y software que resuelven problemas en tu negocio. Programación en lenguaje natural, apps para empresas, optimización y mejoras de sistemas y prototipos digitales listos para monetizar sin ser programador.",
    keyPoints: [
      "Programación asistida por IA conversando en lenguaje natural",
      "Diseño y publicación de páginas web y landing pages de alta conversión",
      "Construcción de aplicaciones web y móviles para empresas",
      "Optimización y mejoras de sistemas y flujos de negocio existentes",
      "Manejo claro de créditos, modelos, tokens y nubes computacionales"
    ]
  },
  {
    id: "flyer-a5",
    number: "05",
    title: "Suite Integral & Oferta Preventa $199.000 COP",
    subtitle: "Flyer de Cierre, Garantía Incondicional y Bonos Exclusivos ($600.000 COP)",
    badge: "OFERTA PREVENTA FASE 1",
    image: "https://vicflix.expandete.cloud/Expandete_videos/a5.jpg",
    tag: "CIERRE & BONOS",
    sessionRef: "Preventa",
    description: "La propuesta comercial definitiva: 3 sesiones presenciales de 2 horas cada una (Martes 6:30 PM - 8:30 PM) + Bóveda de 50+ prompts + plantilla de landing + comunidad VIP.",
    keyPoints: [
      "Precio preferencial de $199.000 COP (ahorras $100.000 COP)",
      "Bóveda secreta con más de 50 prompts comerciales probados",
      "Plantilla de código lista para personalizar tu propia landing page",
      "Garantía 100% de devolución si la 1ra sesión no cumple tus expectativas"
    ]
  }
];

export const TRANSFORMATION_STEPS = [
  {
    step: "1",
    label: "LA IDEA",
    icon: "Lightbulb",
    tag: "El punto de partida",
    desc: "Tienes un concepto de negocio, un producto para vender o un proceso que quieres automatizar."
  },
  {
    step: "2",
    label: "EL PROMPT",
    icon: "Terminal",
    tag: "Instrucción estratégica",
    desc: "Aplicas la fórmula Contexto + Rol + Restricciones para que la IA entienda exactamente el objetivo."
  },
  {
    step: "3",
    label: "IMAGEN & ESTILO",
    icon: "Palette",
    tag: "Activos comerciales",
    desc: "Generas fotografías comerciales de estudio y piezas visuales de alta fidelidad sin pagar fotógrafo."
  },
  {
    step: "4",
    label: "VIDEO COMERCIAL",
    icon: "Video",
    tag: "Movimiento & dinamismo",
    desc: "Das vida al producto con animación, transiciones sincrónicas y formato vertical para Reels y TikTok."
  },
  {
    step: "5",
    label: "LANDING PAGE",
    icon: "Globe",
    tag: "Punto de conversión",
    desc: "Construyes una página web funcional con botones de compra, formulario y conexión a WhatsApp."
  },
  {
    step: "6",
    label: "APP / PROTOTIPO",
    icon: "Smartphone",
    tag: "Producto digital real",
    desc: "Creas una herramienta interactiva con lógica real que tus clientes pueden usar desde su celular."
  }
];

export const PROMPT_FORMULA = [
  { element: "CONTEXTO", desc: "Quién eres, en qué industria operas y cuál es la situación actual.", example: "Somos una marca de café especial en Medellín que vende en línea." },
  { element: "ROL", desc: "La identidad experta que debe asumir la IA para responder con autoridad.", example: "Actúa como Director Creativo y Copywriter Senior de e-commerce." },
  { element: "OBJETIVO", desc: "El resultado exacto que necesitas lograr en esta interacción.", example: "Diseñar 3 ganchos para un video de 15s enfocado en retener pet lovers." },
  { element: "INFORMACIÓN", desc: "Datos clave, especificaciones del producto, precios o diferenciales.", example: "El empaque es biodegradable, tostión media, entrega el mismo día." },
  { element: "RESTRICCIONES", desc: "Lo que la IA NO debe hacer (evitar palabras cliché, longitud máxima).", example: "No uses frases genéricas como 'descubre el sabor'. Máximo 40 palabras." },
  { element: "FORMATO", desc: "Cómo quieres la respuesta (tabla, viñetas, código, guion de 3 columnas).", example: "Formato guion: Columna 1 (Tiempo), Columna 2 (Audio), Columna 3 (Visual)." },
  { element: "EJEMPLOS", desc: "Una o dos muestras de estilo para calibrar el tono de voz exacto.", example: "Tono irreverente, cercano y enérgico similar a marcas direct-to-consumer." }
];

export const WHAT_IS_INCLUDED = [
  {
    title: "3 Sesiones Presenciales Prácticas",
    desc: "2 horas por sesión en Medellín (Martes de 6:30 PM a 8:30 PM • 6 horas prácticas en total) en un espacio tecnológico cómodo y equipado."
  },
  {
    title: "Formato Rotativo 'Ponte al Día en 15 Min'",
    desc: "Diseñado para que puedas incorporarte y repasar conceptos clave al inicio de cada jornada sin perder el hilo."
  },
  {
    title: "Comunidad Privada de Telegram",
    desc: "Acceso VIP para interactuar, compartir proyectos, resolver dudas, acceder a material y recibir novedades permanentes."
  },
  {
    title: "Biblioteca de Prompts Optimizados",
    desc: "Fórmulas listas para copiar y pegar en generación de textos, imágenes, videos y código comercial."
  },
  {
    title: "El 'Prompt de los Prompts' (Meta-Prompt)",
    desc: "Nuestra plantilla maestra para que una IA construya y refine tus prompts automáticamente para cualquier tarea."
  },
  {
    title: "Guía Curada de Herramientas de IA",
    desc: "Selección filtrada de las mejores plataformas gratuitas y profesionales del mercado sin perderte en el mar de opciones."
  },
  {
    title: "Plantillas de Landing Pages y Apps",
    desc: "Estructuras base para que puedas replicar y adaptar los proyectos construidos en vivo para tu propio negocio."
  },
  {
    title: "Certificado Digital de Participación",
    desc: "Acreditación emitida por Expándete Cloud que respalda tu formación práctica en Inteligencia Artificial aplicada."
  }
];

export const FAQS = [
  {
    q: "¿Necesito saber de programación para asistir?",
    a: "No, absolutamente no. IA IMPACTO está diseñada específicamente para que personas sin experiencia técnica puedan crear landing pages, contenidos, videos y aplicaciones utilizando lenguaje natural y asistentes de IA."
  },
  {
    q: "¿Necesito experiencia previa con Inteligencia Artificial?",
    a: "No. Comenzamos desde los conceptos esenciales y avanzamos de manera progresiva y práctica. Si ya usas herramientas como ChatGPT, aprenderás a llevarlas a un nivel profesional que no sabías que era posible."
  },
  {
    q: "¿Cuáles son los días y horarios de las 3 sesiones presenciales?",
    a: "Las sesiones se realizan los días martes de 6:30 PM a 8:30 PM en Medellín. Son 3 sesiones de 2 horas (6 horas de inmersión práctica presencial en total), un horario cómodo para después de la jornada laboral donde aplicas cada herramienta paso a paso sin saturarte de teoría."
  },
  {
    q: "¿Cómo funciona el formato rotativo 'Ponte al día en 15 minutos'?",
    a: "Cada sesión inicia con un resumen visual dinámico de 15 minutos que recapitula los aprendizajes anteriores. Esto permite que una persona que adquiera su cupo en una fecha posterior pueda integrarse con total fluidez y continuar el ciclo completo."
  },
  {
    q: "¿Las sesiones son 100% presenciales?",
    a: "Sí. Es una experiencia presencial en Medellín diseñada para que veas la IA trabajando en vivo, interactúes con otros participantes y resuelvas inquietudes cara a cara con los facilitadores."
  },
  {
    q: "¿Dónde se realizará exactamente en Medellín?",
    a: "En un auditorio / espacio tecnológico de alta conectividad ubicado en el tradicional y central sector de Prado Colonial, Medellín. La dirección exacta y detalles de acceso se envían directamente por WhatsApp y correo a los participantes confirmados."
  },
  {
    q: "¿Qué debo llevar a cada sesión?",
    a: "Solo necesitas tu libreta de notas y muchas ganas de aprender. Todo el material práctico, demostraciones en vivo y herramientas estarán completamente listos en el espacio tecnológico de Prado Colonial."
  },
  {
    q: "¿Cómo funciona la comunidad privada de Telegram?",
    a: "Una vez completas tu registro, recibes un enlace exclusivo para unirte al grupo privado de IA IMPACTO en Telegram. Allí compartimos los prompts utilizados, grabaciones de soporte, retos prácticos, novedades de IA y sesiones de preguntas y respuestas continuas."
  },
  {
    q: "¿Cuáles son los medios de pago disponibles y cómo recibo mi boleta?",
    a: "Puedes pagar de forma 100% segura a través de Wompi (Bancolombia, Nequi, PSE y tarjetas de crédito/débito) o directamente por WhatsApp al +57 304 575 1648. Una vez procesado tu pago en Wompi, el sistema confirmará tu transacción y en las próximas horas te llegará tu boleta oficial de acceso con código QR y confirmación a tu correo electrónico."
  }
];

export interface HeroVideoOption {
  id: string;
  label: string;
  description: string;
  url: string;
}

export const HERO_VIDEO_OPTIONS: HeroVideoOption[] = [
  {
    id: "expandete-reel",
    label: "Expándete Reel (Oficial)",
    description: "Reel insignia de Expándete Studio con producciones comerciales de alto impacto",
    url: "https://vicflix.expandete.cloud/Expandete_videos/hesh.mp4"
  },
  {
    id: "herolanding-saas",
    label: "Hero Landing SaaS",
    description: "Interfaz y micro-interacciones de software comercial en alta resolución",
    url: "https://vicflix.expandete.cloud/Expandete_videos/herolanding.mp4"
  },
  {
    id: "herolanding-pro",
    label: "Tech 3D & Estatus",
    description: "Presentación corporativa de escala y modelos tridimensionales con IA",
    url: "https://vicflix.expandete.cloud/Expandete_videos/Herolanding2.mp4"
  },
  {
    id: "neural-core",
    label: "Neural Core",
    description: "Cerebro cuántico y flujos sinápticos de cómputo en vivo",
    url: "https://vicflix.expandete.cloud/Videos/hero.mp4"
  },
  {
    id: "generative-lab",
    label: "Generative Lab",
    description: "Espacio de laboratorio con síntesis de video e interfaces",
    url: "https://vicflix.expandete.cloud/Videos/hero1.mp4"
  },
  {
    id: "cyberspace",
    label: "Cyberspace 3D",
    description: "Red global de agentes autónomos y servidores de alta velocidad",
    url: "https://vicflix.expandete.cloud/Videos/hero2.mp4"
  }
];

export interface AiShowcaseItem {
  id: string;
  title: string;
  category: 'productos' | 'retratos' | 'moda' | 'comercial';
  categoryLabel: string;
  badge: string;
  engine: string;
  resolution: string;
  image: string;
  videoUrl?: string;
  description: string;
  businessImpact: string;
  promptUsed: string;
  clientBrand?: string;
}

export const HYPERREALISTIC_AI_SHOWCASE: AiShowcaseItem[] = [
  {
    id: "showcase-1",
    title: "Sneakers Urbanos & Moda de Vanguardia",
    category: "moda",
    categoryLabel: "Moda & Calzado",
    badge: "EXPÁNDETE STUDIO • CASO REAL",
    engine: "Midjourney v6.1 • Beat Synced AI",
    resolution: "8K UHD • 7680x4320",
    image: "https://vicflix.expandete.cloud/Expandete_videos/ej3.jpeg",
    videoUrl: "https://vicflix.expandete.cloud/Expandete_videos/Productotenis.mp4",
    description: "Pieza publicitaria insignia creada por Expándete Studio: producto integrado en atmósfera editorial urbana con iluminación de alto contraste y micro-detalles en tejido y suela.",
    businessImpact: "Multiplicó por 4x el CTR en Meta Ads y redujo el costo por adquisición a menos de $4.500 COP por venta.",
    promptUsed: "/imagine prompt: ultra high-end urban streetwear sneaker commercial campaign, athletic shoe resting on textured wet black concrete, sharp neon rim lighting, cinematic depth of field, 8k hyperrealistic product photography, Hasselblad H6D-100c, magazine editorial style --ar 16:10 --v 6.1 --style raw",
    clientBrand: "Sneakers & Streetwear Brand"
  },
  {
    id: "showcase-2",
    title: "Anuncio Gastronómico & Apetito Dopamínico",
    category: "comercial",
    categoryLabel: "Gastronomía & Food Styling",
    badge: "EXPÁNDETE STUDIO • CASO REAL",
    engine: "Flux 1.1 Pro • Slow-Motion Gen",
    resolution: "8K UHD • 7680x4320",
    image: "https://vicflix.expandete.cloud/Expandete_videos/ej2.jpg",
    videoUrl: "https://vicflix.expandete.cloud/Expandete_videos/Productos%20pasteles.mp4",
    description: "Food styling publicitario con caída suave de texturas cremosas, iluminación dorada cálida y composición apetitosa diseñada para activar la salivación en menos de 2 segundos.",
    businessImpact: "Aumentó en un 310% los pedidos directos por WhatsApp para delivery de repostería gourmet durante fines de semana.",
    promptUsed: "Masterpiece commercial food photography of artisan gourmet pastry cake, decadent chocolate ganache glaze dripping smoothly, warm golden ambient side lighting, dark slate plate, shallow depth of field, Canon EOS R5 macro lens, appetizing commercial magazine hero shot, 8k --ar 16:10",
    clientBrand: "Pastelería & Repostería Artesanal"
  },
  {
    id: "showcase-3",
    title: "Cosmética Apícola & Terapia de Alivio",
    category: "productos",
    categoryLabel: "Salud & Cosmética",
    badge: "EXPÁNDETE STUDIO • CASO REAL",
    engine: "Midjourney v6.1 • Macro Lens",
    resolution: "8K UHD • 7680x4320",
    image: "https://vicflix.expandete.cloud/Expandete_videos/ej4.jpg",
    videoUrl: "https://vicflix.expandete.cloud/Expandete_videos/ProductoVenenodeabeja.mp4",
    description: "Creativo de alta conversión para salud natural: muestra el principio activo del veneno de abeja con textura de ungüento transparente, gotas de miel y estética terapéutica creíble.",
    businessImpact: "Campaña de ventas en caliente con pago contra entrega en Colombia con más de 1.800 unidades colocadas.",
    promptUsed: "/imagine prompt: luxury therapeutic natural cosmetic jar, golden bee venom honey extract, natural beeswax textures, botanical amber studio lighting, crystal glass refraction, macro product detail, medical wellness commercial grade, photorealistic 8k --ar 16:10 --v 6.1",
    clientBrand: "Apiterapia & Salud Natural"
  },
  {
    id: "showcase-4",
    title: "Software SaaS & Plataforma Tecnológica",
    category: "comercial",
    categoryLabel: "Tech & Software",
    badge: "EXPÁNDETE STUDIO • CASO REAL",
    engine: "Motion AI • Cinematic UI Rec",
    resolution: "8K UHD • 7680x4320",
    image: "https://vicflix.expandete.cloud/Expandete_videos/ej5.jpg",
    videoUrl: "https://vicflix.expandete.cloud/Expandete_videos/herolanding.mp4",
    description: "Anuncio de producto digital con estética futurista de hardware y micro-interacciones de software. Diseñado para detener el scroll de fundadores y directores de tecnología.",
    businessImpact: "Cierre de preventas B2B para plataforma digital en Colombia antes de su lanzamiento en producción.",
    promptUsed: "Futuristic digital dashboard concept floating in dark minimalist studio, sleek glassmorphic UI elements, glowing cyan data telemetry, isometric clean render, Octane render 3D lighting, ultra sharp tech commercial aesthetic, 8k --ar 16:10",
    clientBrand: "Tech SaaS & Apps"
  },
  {
    id: "showcase-5",
    title: "Óptica & Salud Visual de Alta Gama",
    category: "retratos",
    categoryLabel: "Salud Visual & Moda",
    badge: "EXPÁNDETE STUDIO • CASO REAL",
    engine: "Stable Diffusion 3.5 • Studio Lighting",
    resolution: "8K UHD • 7680x4320",
    image: "https://vicflix.expandete.cloud/Expandete_videos/ej6.jpg",
    videoUrl: "https://vicflix.expandete.cloud/Expandete_videos/Opticaalfavision.mp4",
    description: "Transformación de una necesidad médica en un accesorio de moda y status visual: monturas de diseño pulido con reflejos antirreflejo y modelos con mirada segura.",
    businessImpact: "Citas agendadas diarias para examen visual computarizado y venta de monturas de alta gama.",
    promptUsed: "Editorial lifestyle portrait of an elegant professional wearing premium designer eyewear glasses, anti-reflective crystal lenses, clean studio softbox lighting, tack sharp iris focus, natural skin texture, luxury optical boutique catalog, 8k resolution --ar 16:10",
    clientBrand: "Óptica Alfavisión"
  },
  {
    id: "showcase-6",
    title: "Catering, Banquetes & Eventos de Gala",
    category: "productos",
    categoryLabel: "Eventos & Recepciones",
    badge: "EXPÁNDETE STUDIO • CASO REAL",
    engine: "Midjourney v6.1 • Architectural Ambient",
    resolution: "8K UHD • 7680x4320",
    image: "https://vicflix.expandete.cloud/Expandete_videos/ej7.jpg",
    videoUrl: "https://vicflix.expandete.cloud/Expandete_videos/Banquetessarahy.mp4",
    description: "Composición de banquetería de gala con mesas imperiales, vajilla de autor y platos gourmet servidos con iluminación de candelabro para bodas y recepciones de élite.",
    businessImpact: "Llenó la agenda de recepciones de matrimonios y eventos corporativos para toda la temporada semestral.",
    promptUsed: "Luxury wedding imperial dining table setup, elegant floral centerpiece, fine porcelain and gold cutlery, flickering warm candlelight ambiance, bokeh crystal champagne glasses, high-end event catering brochure photo, 8k photorealistic --ar 16:10 --v 6.1",
    clientBrand: "Banquetes Sarahy"
  }
];

export const EXPANDETE_PACK_CARDS = [
  {
    id: 'pack-p1',
    title: "Flyer Publicitario Individual",
    badge: "PRODUCCIÓN IA RÁPIDA",
    image: "https://vicflix.expandete.cloud/Expandete_videos/p1.jpg",
    desc: "Pieza única de alto contraste para lanzar un producto o promo relámpago con calidad de estudio."
  },
  {
    id: 'pack-p2',
    title: "Creación de Apps & Mejoras de Sistemas",
    badge: "SOFTWARE, APPS & SISTEMAS IA",
    image: "https://vicflix.expandete.cloud/Expandete_videos/a4.jpg",
    desc: "Aprende a diseñar, estructurar y publicar aplicaciones para empresas, optimización y mejoras de sistemas de negocio y prototipos digitales asistidos por IA sin escribir código."
  },
  {
    id: 'pack-p3',
    title: "Video Spot Cinematográfico",
    badge: "ALTA RETENCIÓN DE SCROLL",
    image: "https://vicflix.expandete.cloud/Expandete_videos/p3.jpg",
    desc: "Video de 15 segundos con animación de producto, música con licencia y llamadas a la acción."
  }
];
