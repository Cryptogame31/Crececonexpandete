import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Flame, 
  CheckCircle, 
  Check, 
  Zap, 
  Clock, 
  Layers, 
  MessageCircle, 
  CreditCard, 
  Star, 
  ChevronRight,
  Send,
  X,
  ShieldCheck, 
  TrendingUp, 
  Cpu, 
  Globe, 
  Smartphone, 
  Database, 
  Code, 
  DollarSign,
  Gift,
  HelpCircle,
  FileText,
  Calendar,
  Lock
} from 'lucide-react';

export interface ServiceDetailData {
  id: number;
  slug: string;
  title: string;
  badge?: string;
  tagline: string;
  description: string;
  heroImage: string;
  themeColor: string; // text-tech-cyan, text-tech-purple, text-brand-orange, text-amber-400
  accentGradient: string; // from-tech-cyan to-blue-500, etc.
  bgAccent: string;
  borderAccent: string;
  urgencyTag: string;
  leadMagnet: {
    title: string;
    subtitle: string;
    deliverable: string;
    buttonText: string;
  };
  metrics: {
    label: string;
    value: string;
    subtext: string;
  }[];
  processSteps: {
    number: string;
    title: string;
    duration: string;
    description: string;
    deliverables: string[];
  }[];
  investmentTiers: {
    name: string;
    range: string;
    idealFor: string;
    timeline: string;
    features: string[];
    isPopular?: boolean;
  }[];
  roiComparison: {
    traditionalTitle: string;
    traditionalCost: string;
    traditionalTime: string;
    expandeteTitle: string;
    expandeteCost: string;
    expandeteTime: string;
    savingsHighlight: string;
  };
  faq: {
    question: string;
    answer: string;
  }[];
}

interface ServiceSubpageProps {
  serviceId: number;
  onBackToMain: () => void;
  onSelectService: (id: number) => void;
  onNavigateToStudio: () => void;
  onNavigateToIaImpacto: () => void;
  onNavigateToMarketing: () => void;
  onOpenLeadModal: (serviceTitle: string) => void;
}

export const SERVICES_SUBPAGES_DATA: Record<number, ServiceDetailData> = {
  // 1. DESARROLLO DE APPS MÓVILES Y WEB
  1: {
    id: 1,
    slug: 'apps-moviles-web',
    title: 'Desarrollo de Apps Móviles y Web',
    badge: 'ARQUITECTURA DE ÉLITE',
    tagline: 'Software escalable, ultra-rápido y a la medida que impulsa la facturación de tu empresa.',
    description: 'Construimos aplicaciones web progresivas (PWA) y aplicaciones nativas/híbridas (iOS y Android con React Native / Flutter) con código limpio de alto rendimiento. Conectamos bases de datos relacionales, pasarelas de pago colombianas e internacionales (Wompi, Bold, Stripe) y paneles administrativos en tiempo real para que operes sin intermediarios ni licenciamientos mensuales abusivos.',
    heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80',
    themeColor: 'text-tech-cyan',
    accentGradient: 'from-tech-cyan via-blue-500 to-tech-purple',
    bgAccent: 'bg-tech-cyan/10',
    borderAccent: 'border-tech-cyan/30',
    urgencyTag: '⚡ SPRINT ÁGIL: SOLO 2 CUPOS DE DESARROLLO DISPONIBLES ESTE MES',
    leadMagnet: {
      title: '📘 Blueprint de Arquitectura de Software 2026',
      subtitle: 'Evita perder millones con malas decisiones técnicas. Descarga nuestra guía paso a paso sobre cómo cotizar, diseñar y validar un MVP o software corporativo antes de escribir una sola línea de código.',
      deliverable: 'PDF Técnico + Checklist de Selección de Stack + Plantilla de Presupuesto',
      buttonText: 'DESCARGAR BLUEPRINT DE ARQUITECTURA GRATIS'
    },
    metrics: [
      { label: 'Tiempo de Entrega MVP', value: '4 Semanas', subtext: 'Frente a 4-6 meses de agencias lentas' },
      { label: 'Ahorro en Mantenimiento', value: 'Hasta 50%', subtext: 'Base de código híbrido unificada iOS/Android' },
      { label: 'Velocidad de Respuesta', value: '< 200 ms', subtext: 'Arquitectura Serverless optimizada en la nube' },
      { label: 'Disponibilidad Garantizada', value: '99.9%', subtext: 'Infraestructura cloud redundante y segura' }
    ],
    processSteps: [
      {
        number: '01',
        title: 'Arquitectura & Levantamiento de Flujos',
        duration: 'Semana 1',
        description: 'Mapeamos cada módulo del sistema, definimos el modelo de base de datos relacional y creamos los wireframes de interacción de usuario.',
        deliverables: ['Diagrama de Arquitectura de Datos', 'Wireframes de Navegación', 'Definición de Stack y APIs']
      },
      {
        number: '02',
        title: 'Diseño UI/UX de Élite & Prototipo',
        duration: 'Semana 2',
        description: 'Diseñamos la interfaz gráfica en alta fidelidad en Figma. Validamos la usabilidad contigo antes de iniciar la programación.',
        deliverables: ['Prototipo Navegable en Figma', 'Sistema de Diseño y Componentes', 'Aprobación de Flujo Comercial']
      },
      {
        number: '03',
        title: 'Programación Frontend, Backend & APIs',
        duration: 'Semanas 3 y 4',
        description: 'Escribimos código limpio, seguro y testeado. Integramos pasarelas de pago, autenticación de usuarios y paneles de control.',
        deliverables: ['Código Fuente Limpio en Repositorio Privado', 'Integración de Pagos y Notificaciones', 'Panel de Administración ERP/CRM']
      },
      {
        number: '04',
        title: 'Pruebas de Estrés, Despliegue & Entrega',
        duration: 'Semana 4-5',
        description: 'Lanzamos la aplicación a producción (Vercel, AWS, Google Play o App Store), capacitamos a tu equipo y entregamos llave en mano.',
        deliverables: ['Publicación en Producción y Dominio Oficial', 'Manual de Operación y Video-Tutoriales', 'Garantía Técnica de Estabilidad']
      }
    ],
    investmentTiers: [
      {
        name: 'MVP / Sistema Inicial',
        range: 'Desde $6.000.000 COP',
        idealFor: 'Startups, proyectos que requieren validar mercado o digitalizar un flujo crítico.',
        timeline: 'Entrega en 3 a 4 semanas',
        features: [
          'Aplicación Web Progresiva (PWA) de alta velocidad',
          'Autenticación segura de usuarios (Email, Google)',
          'Integración de 1 pasarela de pago (Wompi/Stripe)',
          'Base de datos relacional PostgreSQL / Supabase',
          'Panel de administración interno para ver registros'
        ]
      },
      {
        name: 'Plataforma SaaS / App Híbrida',
        range: '$14.000.000 - $28.000.000 COP',
        idealFor: 'Empresas consolidadas que necesitan aplicaciones móviles en tiendas y portal web robusto.',
        timeline: 'Entrega en 6 a 8 semanas',
        isPopular: true,
        features: [
          'App para iOS y Android con React Native / Flutter',
          'Portal Web de gestión completo para administradores',
          'Notificaciones Push en tiempo real a celulares',
          'Múltiples roles y permisos de acceso',
          'Automatizaciones automáticas por correo y WhatsApp',
          'Monitoreo de actividad y analítica comercial'
        ]
      },
      {
        name: 'Ecosistema Corporativo a la Medida',
        range: '$30.000.000 - $60.000.000+ COP',
        idealFor: 'Corporaciones con altos volúmenes de usuarios, transacciones complejas o microservicios.',
        timeline: 'Roadmap por sprints quincenales',
        features: [
          'Arquitectura distribuida de alta disponibilidad',
          'Integraciones bidireccionales con SAP, Salesforce o ERPs',
          'Cumplimiento estricto de seguridad y cifrado bancario',
          'Soporte prioritario y SLA garantizado 24/7',
          'Auditoría y optimización de carga masiva'
        ]
      }
    ],
    roiComparison: {
      traditionalTitle: 'Agencia Tradicional de Software',
      traditionalCost: '$35.000.000 - $90.000.000 COP',
      traditionalTime: '5 a 8 meses de desarrollo burocrático',
      expandeteTitle: 'Expándete Cloud (Desarrollo Ágil)',
      expandeteCost: '$6.000.000 - $24.000.000 COP',
      expandeteTime: '4 a 6 semanas con entregas funcionales',
      savingsHighlight: 'Ahorras hasta un 65% del capital y sales al mercado meses antes que tu competencia.'
    },
    faq: [
      {
        question: '¿El código fuente y la base de datos son de mi propiedad?',
        answer: 'Absolutamente. En Expándete no cobramos tarifas de alquiler ni retenemos tu tecnología. El repositorio de Git, los accesos a la base de datos y la propiedad intelectual se transfieren 100% a tu empresa al finalizar el proyecto.'
      },
      {
        question: '¿Puedo integrar la app con mi sistema actual o pasarelas de pago locales?',
        answer: 'Sí. Diseñamos con APIs abiertas y compatibles con Wompi, Bold, Mercado Pago, Stripe, PayU, así como CRMs como HubSpot, Zoho o bases de datos internas.'
      },
      {
        question: '¿Qué mantenimiento requiere la aplicación una vez entregada?',
        answer: 'Al construir sobre arquitecturas modernas y serverless, el costo de servidor suele ser de pocos dólares mensuales o incluso cero para tráfico moderado. Además, incluimos garantía técnica para resolver cualquier eventualidad.'
      }
    ]
  },

  // 2. LANDING PAGES DE ÉLITE
  2: {
    id: 2,
    slug: 'landing-pages-elite',
    title: 'Landing Pages de Élite',
    badge: 'MÁS VENDIDO • ENTREGA EN 5 DÍAS',
    tagline: 'Páginas de aterrizaje de ultra-velocidad diseñadas con neuro-ventas para triplicar tus conversiones.',
    description: 'No creamos páginas web convencionales que tardan en cargar y la gente abandona. Programamos Landing Pages de ultra-rendimiento en código puro (React / Vite) con copywriting persuasivo de venta directa, sincronización en tiempo real de prospectos hacia tu WhatsApp o CRM, y optimización al 100% para anuncios de Meta Ads y Google Ads.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    themeColor: 'text-tech-cyan',
    accentGradient: 'from-tech-cyan via-emerald-400 to-brand-orange',
    bgAccent: 'bg-tech-cyan/10',
    borderAccent: 'border-tech-cyan/30',
    urgencyTag: '⚡ ENTREGA EXPRESS EN 5 DÍAS HÁBILES • SOLO 3 CUPOS SEMANALES',
    leadMagnet: {
      title: '🔥 Checklist de Neuro-Ventas: Las 12 Reglas de Oro',
      subtitle: 'Descubre los errores críticos que hacen que el 90% de las páginas web pierdan dinero en anuncios. Recibe gratis nuestro checklist interactivo para auditar y optimizar tu landing page hoy mismo.',
      deliverable: 'PDF Checklist Interactivo + Plantilla de Estructura de Alta Conversión',
      buttonText: 'DESCARGAR CHECKLIST DE CONVERSIÓN GRATIS'
    },
    metrics: [
      { label: 'Tiempo de Carga', value: '< 0.8 Segundos', subtext: 'Rank A (98/100) en Google PageSpeed y Lighthouse' },
      { label: 'Incremento en Conversión', value: '2.5x a 3.8x', subtext: 'Promedio registrado en clientes activos' },
      { label: 'Tiempo de Entrega', value: '5 Días Hábiles', subtext: 'Lista para recibir tráfico y generar prospectos' },
      { label: 'Sincronización de Leads', value: 'En Milisegundos', subtext: 'Los datos viajan de inmediato a WhatsApp y CRM' }
    ],
    processSteps: [
      {
        number: '01',
        title: 'Diagnóstico Comercial & Análisis de Oferta',
        duration: 'Día 1',
        description: 'Analizamos a tu cliente ideal, sus objeciones de compra, el precio de tu producto o servicio y estructuramos una oferta irresistible.',
        deliverables: ['Matriz de Objeciones y Deseos', 'Estructura de la Oferta Irresistible', 'Definición de llamados a la acción (CTAs)']
      },
      {
        number: '02',
        title: 'Redacción de Copywriting Persuasivo',
        duration: 'Día 2',
        description: 'Redactamos cada encabezado, gancho y párrafo aplicando principios científicos de neuro-ventas para enganchar desde el primer segundo.',
        deliverables: ['Guion Completo de Copywriting', 'Estructura de Bloques (TOFU, MOFU, BOFU)', 'Micro-copys de baja fricción']
      },
      {
        number: '03',
        title: 'Maquetación Visual de Alta Velocidad',
        duration: 'Días 3 y 4',
        description: 'Programamos la landing page en React y Tailwind CSS, asegurando efectos visuales modernos, animaciones suaves y adaptabilidad móvil total.',
        deliverables: ['Diseño Responsivo 100% Mobile First', 'Integración de Formulario Inteligente', 'Flujo de Conexión a WhatsApp y Sheets']
      },
      {
        number: '04',
        title: 'Conexión de Pixeles, Pruebas & Publicación',
        duration: 'Día 5',
        description: 'Instalamos el Pixel de Meta, Google Tag Manager, API de Conversiones y publicamos en tu dominio con certificado SSL de seguridad.',
        deliverables: ['Landing en Vivo con Dominio Propio', 'Pixel y Eventos de Conversión Verificados', 'Pruebas de Envío de Leads Exitosas']
      }
    ],
    investmentTiers: [
      {
        name: 'Landing Page Aceleradora',
        range: '$1.800.000 COP',
        idealFor: 'Negocios y profesionales que quieren captar clientes calificados por WhatsApp o email con rapidez.',
        timeline: 'Entrega en 5 días hábiles',
        isPopular: true,
        features: [
          'Diseño exclusivo en código React / Vite de alta velocidad',
          'Copywriting persuasivo y redacción de ganchos de venta',
          'Formulario de captura conectado a WhatsApp y Google Sheets',
          'Integración completa de Pixel de Meta y Google Analytics',
          'Dominio conectado con certificado SSL gratuito permanente',
          'Garantía de velocidad Lighthouse mayor a 95 puntos'
        ]
      },
      {
        name: 'Embudo de Ventas Multi-Página',
        range: '$3.200.000 - $4.800.000 COP',
        idealFor: 'Empresas con múltiples servicios, venta de cursos o procesos de calificación por etapas.',
        timeline: 'Entrega en 8 a 10 días hábiles',
        features: [
          'Estructura de 2 a 4 páginas (Captura + Video + Gracias/Agendamiento)',
          'Formulario dinámico de calificación de clientes potenciales',
          'Integración con pasarela de pagos para cobros online',
          'Secuencia automatizada de confirmación por WhatsApp y correo',
          'Test A/B de encabezados para maximizar retorno publicitario'
        ]
      }
    ],
    roiComparison: {
      traditionalTitle: 'Sitios Web en WordPress / Plantillas',
      traditionalCost: '$2.500.000 - $5.000.000 COP',
      traditionalTime: 'Lentos (carga en 4-7s), convierten menos del 1%',
      expandeteTitle: 'Landing Page de Élite (Expándete)',
      expandeteCost: '$1.800.000 - $3.200.000 COP',
      expandeteTime: 'Ultra-rápida (< 0.8s), convierte entre 3% y 8%',
      savingsHighlight: 'Con la misma inversión publicitaria en Meta Ads, obtienes hasta el triple de prospectos calificados.'
    },
    faq: [
      {
        question: '¿Por qué una Landing Page en código es superior a WordPress o Wix?',
        answer: 'Las herramientas como WordPress cargan docenas de plugins pesados y bases de datos lentas. Nuestras Landing Pages están escritas en código optimizado que carga casi al instante (menos de 0.8s). Un segundo de lentitud en móvil reduce la conversión un 20%; con nuestra velocidad no pierdes visitas.'
      },
      {
        question: '¿A dónde llegan los datos de las personas que llenan el formulario?',
        answer: 'Llegan directamente a tu teléfono por WhatsApp en un mensaje estructurado y simultáneamente se guardan en una hoja de Google Sheets o en tu CRM, sin que tengas que copiar y pegar nada.'
      },
      {
        question: '¿Incluyen el hosting y el certificado de seguridad?',
        answer: 'Sí. Alojamos la landing page en servidores globales de ultra-velocidad con certificado SSL (candado verde) sin mensualidades de hosting para tráfico normal.'
      }
    ]
  },

  // 3. INTELIGENCIA ARTIFICIAL Y AGENTES AUTÓNOMOS
  3: {
    id: 3,
    slug: 'agentes-inteligencia-artificial',
    title: 'Inteligencia Artificial y Agentes Autónomos',
    badge: 'TECNOLOGÍA REVOLUCIONARIA 24/7',
    tagline: 'Empleados virtuales autónomos operando 24/7 para calificar prospectos, responder dudas y cerrar ventas.',
    description: 'Diseñamos e implementamos Agentes de Inteligencia Artificial entrenados específicamente con la información de tu empresa (catálogos, precios, políticas y objeciones). No son chatbots genéricos con botones aburridos; son sistemas inteligentes capaces de comprender audio, interpretar preguntas complejas en lenguaje natural, agendar citas en Google Calendar y registrar pedidos sin intervención humana.',
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1600&q=80',
    themeColor: 'text-tech-cyan',
    accentGradient: 'from-tech-cyan via-indigo-500 to-tech-purple',
    bgAccent: 'bg-tech-cyan/10',
    borderAccent: 'border-tech-cyan/30',
    urgencyTag: '⚡ ATENCIÓN INMEDIATA: IMPLEMENTACIÓN DIRECTA EN WHATSAPP Y WEB',
    leadMagnet: {
      title: '🤖 Blueprint de Agentes Autónomos para Empresas',
      subtitle: 'Conoce los 25 casos de uso más rentables de IA conversacional para ventas, cobranza y atención al cliente. Incluye el Prompt Maestro de Calificación que usamos en Expándete.',
      deliverable: 'PDF Estratégico + Biblioteca de Prompts de Negocio + Guía de Integración',
      buttonText: 'DESCARGAR BLUEPRINT DE AGENTES IA GRATIS'
    },
    metrics: [
      { label: 'Tiempo de Respuesta', value: '< 3 Segundos', subtext: 'Atención instantánea 24 horas, 7 días a la semana' },
      { label: 'Capacidad Simultánea', value: 'Ilimitada', subtext: 'Atiende 1 o 1.000 clientes a la vez sin colapsar' },
      { label: 'Ahorro Operativo', value: 'Hasta 80%', subtext: 'Frente al costo de operadores de call center' },
      { label: 'Precisión de Respuesta', value: '99.4%', subtext: 'Basado en RAG (documentos corporativos verificados)' }
    ],
    processSteps: [
      {
        number: '01',
        title: 'Extracción y Curaduría de Conocimiento (RAG)',
        duration: 'Semana 1',
        description: 'Recopilamos tus manuales de producto, listas de precios, políticas de garantía y conversaciones históricas para estructurar la memoria del agente.',
        deliverables: ['Base de Conocimiento Vectorizada', 'Manual de Preguntas Frecuentes y Respuestas Oficiales']
      },
      {
        number: '02',
        title: 'Configuración del Modelo & Tono de Marca',
        duration: 'Semana 2',
        description: 'Definimos la personalidad, directivas de seguridad, filtros para evitar alucinaciones y técnicas de persuasión para guiar hacia la compra.',
        deliverables: ['Prompt de Sistema Maestro', 'Reglas de Seguridad y Filtros de Respuestas']
      },
      {
        number: '03',
        title: 'Integración Técnica con Canales & Calendario',
        duration: 'Semana 3',
        description: 'Conectamos el agente con WhatsApp Business API, CRM, Google Sheets y Google Calendar / Calendly para agendamiento automático.',
        deliverables: ['Conexión Activa con WhatsApp / Webchat', 'Flujo de Agendamiento Automático de Citas']
      },
      {
        number: '04',
        title: 'Pruebas de Estrés & Salida en Vivo',
        duration: 'Semana 4',
        description: 'Simulamos cientos de conversaciones complejas con objeciones reales, ajustamos respuestas y desplegamos el agente en producción.',
        deliverables: ['Agente Autónomo Operando 24/7', 'Panel de Monitoreo de Conversaciones', 'Soporte Continuo']
      }
    ],
    investmentTiers: [
      {
        name: 'Agente Asistente WhatsApp / Web',
        range: 'Desde $3.200.000 COP',
        idealFor: 'Negocios que reciben decenas de mensajes repetitivos en WhatsApp y pierden ventas por demoras.',
        timeline: 'Implementación en 2 a 3 semanas',
        features: [
          'Atención automática 24/7 con comprensión de lenguaje natural',
          'Entrenado con hasta 30 páginas de información corporativa',
          'Calificación automática de prospectos y derivación a asesores',
          'Registro automático de prospectos en Google Sheets o CRM',
          'Conexión directa sin mensualidades de plataformas terceras costosas'
        ]
      },
      {
        name: 'Agente Transaccional & Agendador',
        range: '$6.500.000 - $12.000.000 COP',
        idealFor: 'Clínicas, centros de estética, consultorías o empresas de servicios con agendamiento.',
        timeline: 'Implementación en 3 a 4 semanas',
        isPopular: true,
        features: [
          'Agendamiento de citas en tiempo real en Google Calendar',
          'Envío de confirmaciones y recordatorios anti-inasistencia',
          'Generación y envío de cotizaciones en PDF instantáneas',
          'Comprensión de notas de voz enviadas por los clientes',
          'Memoria contextual avanzada por usuario'
        ]
      },
      {
        name: 'Ecosistema Multi-Agente Corporativo',
        range: '$14.000.000 - $24.000.000+ COP',
        idealFor: 'Empresas con múltiples áreas (ventas, soporte técnico, cobranzas, recursos humanos).',
        timeline: 'Roadmap por etapas',
        features: [
          'Red de agentes interconectados con roles especializados',
          'Conexión a bases de datos internas SQL / ERPs empresariales',
          'Agentes de voz con síntesis hiper-realista para llamadas',
          'Reportes analíticos de sentimiento y temas frecuentes de clientes',
          'Entrenamiento y calibración continua con nuevos datos'
        ]
      }
    ],
    roiComparison: {
      traditionalTitle: 'Operador / Asistente Humano Nocturno',
      traditionalCost: '$3.500.000 COP/mes (~$42.000.000 COP anual)',
      traditionalTime: 'Capacitación lenta, descansos, margen de error',
      expandeteTitle: 'Agente de IA Autónomo Expándete',
      expandeteCost: 'Desde $3.200.000 COP (Pago único de desarrollo)',
      expandeteTime: 'Responde en 2 segundos, nunca duerme, cero quejas',
      savingsHighlight: 'Recuperas la inversión en menos de 60 días y multiplicas la capacidad de atención de tu empresa por 100.'
    },
    faq: [
      {
        question: '¿El agente puede inventar cosas que mi empresa no ofrece?',
        answer: 'No. Configuramos directivas de contención estrictas basadas en tecnología RAG. Si un cliente pregunta algo fuera de los manuales autorizados, el agente responde con honestidad y transfiere la consulta al equipo humano.'
      },
      {
        question: '¿Cómo funciona con mi número actual de WhatsApp?',
        answer: 'Podemos integrarlo utilizando la API Oficial de Meta WhatsApp Cloud para máxima estabilidad y cero riesgo de bloqueos, o conectar un número comercial dedicado para atención y ventas.'
      },
      {
        question: '¿Qué costo tiene el consumo de la Inteligencia Artificial?',
        answer: 'El consumo de tokens de modelos como Claude o OpenAI es extremadamente económico: atender a 1.000 clientes con conversaciones completas suele costar menos de $20.000 a $40.000 COP al mes.'
      }
    ]
  },

  // 4. AUTOMATIZACIONES DE PROCESOS
  4: {
    id: 4,
    slug: 'automatizaciones-n8n',
    title: 'Automatizaciones de Procesos y Flujos n8n',
    badge: 'EFICIENCIA INVISIBLE',
    tagline: 'Conectamos todas tus herramientas para eliminar tareas repetitivas y liberar cientos de horas productivas.',
    description: 'Diseñamos flujos de automatización invisibles con n8n, Make y Webhooks que conectan tus anuncios en Meta Ads, tu CRM, tus hojas de cálculo, tu correo electrónico y tu WhatsApp. Cuando un cliente compra o solicita información, la información viaja en milisegundos, se genera la factura, se notifica al equipo y se agenda la tarea sin que nadie tenga que copiar y pegar un solo dato.',
    heroImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80',
    themeColor: 'text-tech-purple',
    accentGradient: 'from-tech-purple via-pink-500 to-brand-orange',
    bgAccent: 'bg-tech-purple/10',
    borderAccent: 'border-tech-purple/30',
    urgencyTag: '⚡ AUDITORÍA DE PROCESOS DISPONIBLE • RECUPERA HASTA 25 HORAS SEMANALES',
    leadMagnet: {
      title: '⚡ Las 10 Automatizaciones Esenciales para Escalar',
      subtitle: 'Conoce los 10 flujos de trabajo automatizados que toda empresa que facture más de $20M COP debe implementar para no colapsar operativamente. Incluye diagramas listos para importar en n8n.',
      deliverable: 'PDF con Diagramas + Archivos JSON de Plantillas n8n + Guía de Herramientas',
      buttonText: 'DESCARGAR PLANTILLAS DE AUTOMATIZACIÓN GRATIS'
    },
    metrics: [
      { label: 'Tiempo Ahorrado', value: '15 a 30 Horas', subtext: 'Semanales por cada colaborador administrativo' },
      { label: 'Errores Humanos', value: '0%', subtext: 'Eliminación del copiado manual entre sistemas' },
      { label: 'Velocidad de Flujo', value: 'Tiempo Real', subtext: 'Los datos se sincronizan en menos de 1 segundo' },
      { label: 'Retorno de Inversión', value: '< 45 Días', subtext: 'Recuperación del 100% del costo por horas ahorradas' }
    ],
    processSteps: [
      {
        number: '01',
        title: 'Auditoría de Procesos & Detección de Fricción',
        duration: 'Días 1 a 3',
        description: 'Analizamos las tareas repetitivas que consumen tiempo en tu empresa: digitación, reportes manuales, envíos de cotizaciones y alertas.',
        deliverables: ['Mapa de Fricción Operativa', 'Priorización de Flujos por Impacto Financiero']
      },
      {
        number: '02',
        title: 'Diseño de la Arquitectura de Integración',
        duration: 'Días 4 a 7',
        description: 'Diagramamos los disparadores (triggers), las condiciones lógicas y las acciones entre cada software (n8n, APIs, Webhooks).',
        deliverables: ['Diagrama de Flujo Técnico', 'Pruebas de Conexión de Credenciales y APIs']
      },
      {
        number: '03',
        title: 'Programación, Pruebas de Carga & Fallback',
        duration: 'Días 8 a 11',
        description: 'Construimos las tuberías de datos, configuramos alertas de error y probamos cientos de transacciones simultáneas para asegurar fiabilidad total.',
        deliverables: ['Flujos Automatizados Activos', 'Manejo de Errores y Notificaciones de Alerta']
      },
      {
        number: '04',
        title: 'Despliegue en Servidor Privado & Capacitación',
        duration: 'Días 12 a 15',
        description: 'Desplegamos en tu propio servidor Docker/n8n para que no pagues costos mensuales por tareas a plataformas como Zapier.',
        deliverables: ['Instancia de n8n Propia y Autónoma', 'Manual de Operación', 'Monitoreo de Ejecución']
      }
    ],
    investmentTiers: [
      {
        name: 'Flujo de Leads & WhatsApp',
        range: 'Desde $2.000.000 COP',
        idealFor: 'Negocios que captan prospectos en Facebook/Google y necesitan responder al instante y guardar datos.',
        timeline: 'Entrega en 5 a 7 días hábiles',
        features: [
          'Conexión Meta Ads -> Google Sheets -> WhatsApp instantáneo',
          'Notificación en tiempo real al equipo comercial por Telegram o Slack',
          'Distribución equitativa de leads entre vendedores (Round Robin)',
          'Alerta de lead no contactado tras 15 minutos'
        ]
      },
      {
        name: 'Sistema de Operaciones Integradas',
        range: '$4.500.000 - $8.000.000 COP',
        idealFor: 'Empresas con múltiples herramientas que necesitan sincronizar ventas, inventario y facturación.',
        timeline: 'Entrega en 2 a 3 semanas',
        isPopular: true,
        features: [
          'Generación y envío automático de cotizaciones en PDF',
          'Sincronización de pasarela de pagos con software contable',
          'Recordatorios automáticos de cobro y vencimiento por WhatsApp',
          'Reportería diaria de ventas consolidada a la gerencia'
        ]
      },
      {
        name: 'Arquitectura Empresarial n8n Dedicada',
        range: '$9.000.000 - $14.000.000+ COP',
        idealFor: 'Empresas medianas con flujos masivos de datos que desean independizarse de Zapier/Make.',
        timeline: 'Entrega en 4 semanas',
        features: [
          'Instalación de n8n autohospedado en servidor cloud privado',
          'Ejecuciones ilimitadas sin pagar fees por cada tarea',
          'Integraciones complejas con bases de datos SQL y webhooks cifrados',
          'Dashboard de métricas de rendimiento y salud de integraciones'
        ]
      }
    ],
    roiComparison: {
      traditionalTitle: 'Digitador / Auxiliar Administrativo',
      traditionalCost: '$2.200.000 COP/mes (~$26.400.000 COP anual)',
      traditionalTime: 'Lento, errores en nombres o números, horario de oficina',
      expandeteTitle: 'Automatizaciones n8n Expándete',
      expandeteCost: 'Desde $2.000.000 COP (Pago único)',
      expandeteTime: '0 errores, trabaja 24/7 en milisegundos',
      savingsHighlight: 'Eliminas las horas muertas de tu equipo para que se dediquen 100% a vender y atender clientes.'
    },
    faq: [
      {
        question: '¿Tengo que pagar suscripciones costosas como Zapier todos los meses?',
        answer: 'No necesariamente. En Expándete nos especializamos en n8n, un motor de automatización de código abierto que podemos alojar en tu propio servidor, permitiéndote ejecutar cientos de miles de tareas mensuales por una fracción mínima del costo de Zapier.'
      },
      {
        question: '¿Qué pasa si una aplicación cambia o se cae internet?',
        answer: 'Diseñamos todos los flujos con reintentos automáticos y registros de respaldo (logs). Si un sistema externo falla temporalmente, la tarea queda en cola y se ejecuta en cuanto se restablece, enviándote una alerta discreta.'
      }
    ]
  },

  // 6. CONSULTORÍA Y CTO FRACCIONADO
  6: {
    id: 6,
    slug: 'consultoria-tecnologica',
    title: 'Consultoría Tecnológica & CTO Fraccionado',
    badge: 'ESTRATEGIA & CRITERIO EJECUTIVO',
    tagline: 'Criterio técnico de clase mundial antes de comprometer capital en desarrollos o licencias.',
    description: 'Te asesoramos con visión de negocio y arquitectura técnica avanzada para que tomes decisiones informadas. Auditamos tu infraestructura actual, evaluamos propuestas de proveedores, diseñamos el roadmap de modernización y calculamos el retorno de inversión para asegurar que cada peso invertido en software rinda con creces.',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
    themeColor: 'text-tech-cyan',
    accentGradient: 'from-tech-cyan via-teal-400 to-emerald-500',
    bgAccent: 'bg-tech-cyan/10',
    borderAccent: 'border-tech-cyan/30',
    urgencyTag: '⚡ SESIONES ESTRATÉGICAS LIMITADAS • SOLO 2 CUPOS DIRECTIVOS POR SEMANA',
    leadMagnet: {
      title: '📊 Test de Madurez Tecnológica & Fuga de Dinero',
      subtitle: 'Descubre en 5 minutos si tu empresa está sobrepagando en licencias innecesarias, sufriendo cuellos de botella o en riesgo de seguridad informática.',
      deliverable: 'Matriz de Diagnóstico en Excel + Guía de Optimización de Costos Tech',
      buttonText: 'DESCARGAR TEST DE MADUREZ TECNOLÓGICA GRATIS'
    },
    metrics: [
      { label: 'Ahorro Promedio en Software', value: '35% a 60%', subtext: 'Al eliminar licencias duplicadas y elegir arquitecturas eficientes' },
      { label: 'Claridad Estratégica', value: '100%', subtext: 'Roadmap técnico con pasos ordenados y presupuestos exactos' },
      { label: 'Experiencia Aplicada', value: '+10 Años', subtext: 'En desarrollo, escalamiento e integración de negocios' },
      { label: 'Independencia de Criterio', value: 'Total', subtext: 'No cobramos comisión de proveedores de software' }
    ],
    processSteps: [
      {
        number: '01',
        title: 'Sesión de Inmersión & Diagnóstico',
        duration: 'Semana 1',
        description: 'Analizamos a fondo tu modelo de negocio, tus objetivos de facturación y las trabas tecnológicas que frenan el crecimiento.',
        deliverables: ['Acta de Diagnóstico Preliminar', 'Mapeo de Herramientas Actuales']
      },
      {
        number: '02',
        title: 'Auditoría Técnica de Infraestructura & Costos',
        duration: 'Semana 2',
        description: 'Revisamos bases de datos, código existente, seguridad y contratos de software para detectar ineficiencias o sobrecostos.',
        deliverables: ['Dictamen Técnico Detallado', 'Informe de Fugas de Capital y Seguridad']
      },
      {
        number: '03',
        title: 'Diseño del Roadmap & Selección de Stack',
        duration: 'Semana 3',
        description: 'Definimos la arquitectura tecnológica ideal, las herramientas a contratar y las etapas de implementación sin frenar la empresa.',
        deliverables: ['Roadmap Tecnológico a 6 y 12 Meses', 'Presupuesto Comparativo de Inversión y ROI']
      },
      {
        number: '04',
        title: 'Acompañamiento Ejecutivo & Evaluación',
        duration: 'Continuo',
        description: 'Actuamos como tu Director de Tecnología (CTO) de confianza para evaluar desarrolladores, liderar compras técnicas y supervisar entregas.',
        deliverables: ['Supervisión Técnica de Proyectos', 'Reuniones Quincenales de Seguimiento']
      }
    ],
    investmentTiers: [
      {
        name: 'Sesión Estratégica de Diagnóstico',
        range: '$1.200.000 COP',
        idealFor: 'Empresarios que necesitan una segunda opinión experta antes de firmar un contrato de desarrollo.',
        timeline: 'Sesión intensiva de 90 minutos + informe ejecutivo',
        features: [
          'Sesión 1 a 1 de 90 minutos con nuestro Director de Tecnología',
          'Revisión de tu cotización o arquitectura de proyecto',
          'Detección de riesgos y recomendaciones de optimización',
          'Entrega de informe con recomendaciones aplicables de inmediato'
        ]
      },
      {
        name: 'Auditoría Integral & Roadmap Tecnológico',
        range: '$6.000.000 - $10.000.000 COP',
        idealFor: 'Empresas medianas con operaciones activas que buscan modernizar sus sistemas sin equivocarse.',
        timeline: 'Duración: 3 semanas',
        isPopular: true,
        features: [
          'Auditoría completa de herramientas, bases de datos y seguridad',
          'Diseño de arquitectura de software a prueba de futuro',
          'Documento técnico oficial (PRD) listo para cotizar o desarrollar',
          'Análisis riguroso de retorno de inversión por cada módulo'
        ]
      },
      {
        name: 'CTO Fraccionado Mensual',
        range: 'Desde $4.500.000 COP / mes',
        idealFor: 'Empresas que necesitan liderazgo tecnológico continuo sin pagar un salario ejecutivo de tiempo completo.',
        timeline: 'Acompañamiento mensual renovable',
        features: [
          'Dirección técnica estratégica y selección de talento',
          'Supervisión y control de calidad de código y entregas',
          'Reuniones semanales de seguimiento y alineación con gerencia',
          'Soporte prioritario ante decisiones técnicas críticas'
        ]
      }
    ],
    roiComparison: {
      traditionalTitle: 'Contratar un CTO de Planta Senior',
      traditionalCost: '$16.000.000 - $28.000.000 COP mensuales',
      traditionalTime: 'Compromiso a largo plazo, carga prestacional alta',
      expandeteTitle: 'CTO Fraccionado & Consultoría Expándete',
      expandeteCost: 'Desde $1.200.000 COP (Sesión) o mensual flexible',
      expandeteTime: 'Impacto inmediato desde la primera sesión',
      savingsHighlight: 'Evitas inversiones fallidas en software que suelen costar decenas de millones por malas decisiones técnicas.'
    },
    faq: [
      {
        question: '¿Qué es exactamente un CTO Fraccionado?',
        answer: 'Es contar con la experiencia, visión y criterio de un Chief Technology Officer (Director de Tecnología) de alto nivel durante las horas exactas que tu empresa necesita, ahorrándote el 80% del costo de una nómina ejecutiva fija.'
      },
      {
        question: '¿Nos ayudan a evaluar a otros proveedores de software?',
        answer: 'Sí. Revisamos sus propuestas técnicas, arquitecturas y presupuestos para decirte con total honestidad si los precios son justos, si los tiempos son reales y si la tecnología propuesta te servirá a largo plazo.'
      }
    ]
  },

  // 7. TRANSFORMACIÓN DIGITAL
  7: {
    id: 7,
    slug: 'transformacion-digital',
    title: 'Transformación Digital y ERP/CRM Unificado',
    badge: 'MODERNIZACIÓN 360°',
    tagline: 'Modernización integral para convertir tu empresa tradicional en un líder digital ágil y escalable.',
    description: 'Guiamos la transición de empresas de sectores tradicionales hacia la era de la agilidad. Reemplazamos procesos manuales en papel, archiveros físicos y hojas de cálculo dispersas por plataformas empresariales unificadas en la nube (ERP / CRM), flujos de trabajo interconectados y capacitación paso a paso para que tu equipo adopte la tecnología con entusiasmo.',
    heroImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
    themeColor: 'text-tech-purple',
    accentGradient: 'from-tech-purple via-indigo-600 to-tech-cyan',
    bgAccent: 'bg-tech-purple/10',
    borderAccent: 'border-tech-purple/30',
    urgencyTag: '⚡ PROGRAMA EXCLUSIVO DE MODERNIZACIÓN PARA EMPRESAS LÍDERES',
    leadMagnet: {
      title: '🚀 Matriz de Transformación Empresarial en la Nube',
      subtitle: 'La metodología probada para migrar de cuadernos y Excel a un sistema digital unificado sin detener un solo día de ventas ni confundir a tu equipo.',
      deliverable: 'Guía Metodológica en PDF + Cronograma de Migración Segura',
      buttonText: 'DESCARGAR MATRIZ DE TRANSFORMACIÓN GRATIS'
    },
    metrics: [
      { label: 'Control Operativo', value: '100% en Vivo', subtext: 'Métricas de ventas, inventario y costos en un solo tablero' },
      { label: 'Adopción del Personal', value: '> 92%', subtext: 'Gracias a capacitaciones prácticas y pantallas intuitivas' },
      { label: 'Reducción de Pérdidas', value: 'Hasta 40%', subtext: 'Control estricto de mermas, cobros y facturación' },
      { label: 'Acceso Seguro', value: 'Global', subtext: 'Consulta el estado de tu empresa desde cualquier lugar del mundo' }
    ],
    processSteps: [
      {
        number: '01',
        title: 'Mapeo Operativo & Depuración de Datos',
        duration: 'Mes 1',
        description: 'Analizamos cómo fluye la información en compras, ventas, almacén y finanzas. Limpiamos y estandarizamos tus bases de datos históricas.',
        deliverables: ['Mapa de Procesos Unificado', 'Base de Datos Limpia y Normalizada']
      },
      {
        number: '02',
        title: 'Configuración & Personalización del Sistema Cloud',
        duration: 'Mes 1-2',
        description: 'Parametrizamos el CRM/ERP en la nube a la medida exacta de tu flujo comercial, sin módulos innecesarios que confundan a los usuarios.',
        deliverables: ['Plataforma ERP/CRM Configurada', 'Flujos de Notificaciones Automáticas']
      },
      {
        number: '03',
        title: 'Capacitación Interactiva & Pruebas en Paralelo',
        duration: 'Mes 2',
        description: 'Capacitamos al personal con talleres prácticos y videos paso a paso. Operamos en paralelo durante 2 semanas para garantizar cero tropiezos.',
        deliverables: ['Talleres de Capacitación Grabados', 'Manuales Visuales por Puesto de Trabajo']
      },
      {
        number: '04',
        title: 'Migración Definitiva & Soporte Continuo',
        duration: 'Mes 3 en adelante',
        description: 'Apagamos los procesos manuales antiguos, celebramos el salto digital y mantenemos acompañamiento continuo para resolver cualquier duda.',
        deliverables: ['Empresa 100% Digitalizada y en la Nube', 'Mesa de Ayuda y Acompañamiento Técnico']
      }
    ],
    investmentTiers: [
      {
        name: 'Modernización de Área Clave (CRM o Almacén)',
        range: '$16.000.000 - $28.000.000 COP',
        idealFor: 'Empresas que quieren digitalizar inicialmente su proceso comercial o de control de inventario.',
        timeline: 'Duración: 6 a 8 semanas',
        features: [
          'Unificación de la base de clientes y seguimiento comercial',
          'Migración de datos históricos desde Excel a la nube',
          'Automatizaciones de correo y recordatorios de cotizaciones',
          'Capacitación presencial y virtual para el equipo de ventas',
          'Reportes de rendimiento comercial en tiempo real'
        ]
      },
      {
        name: 'Transformación Integral ERP / Operaciones 360°',
        range: '$32.000.000 - $65.000.000 COP',
        idealFor: 'Empresas tradicionales consolidadas que requieren conectar todas sus áreas operativas en una sola plataforma.',
        timeline: 'Duración: 3 a 4 meses por fases',
        isPopular: true,
        features: [
          'Conexión total: Ventas, Compras, Inventario, Facturación y Tesorería',
          'Tablero de control gerencial para el Director General',
          'Seguridad avanzada por roles y niveles de autorización',
          'Capacitación integral de todos los departamentos',
          'Acompañamiento presencial durante la puesta en marcha'
        ]
      }
    ],
    roiComparison: {
      traditionalTitle: 'Consultoras Tradicionales (Big 4)',
      traditionalCost: '$120.000.000 - $350.000.000 COP',
      traditionalTime: 'Procesos de 12 a 18 meses con alta tasa de rechazo',
      expandeteTitle: 'Transformación Ágil Expándete',
      expandeteCost: '$16.000.000 - $48.000.000 COP',
      expandeteTime: 'En producción por fases desde el segundo mes',
      savingsHighlight: 'Tu empresa se vuelve ágil, controlada y atractiva para nuevos clientes e inversionistas en semanas, no en años.'
    },
    faq: [
      {
        question: '¿Qué pasa si mi personal no es tecnológico o tiene miedo al cambio?',
        answer: 'Es completamente normal. Nuestro enfoque no es imponer tecnología compleja, sino diseñar pantallas simples y comprensibles, acompañadas de talleres humanos y comprensivos donde cada persona entiende cómo el sistema le facilitará el trabajo.'
      },
      {
        question: '¿Podemos perder información durante la migración?',
        answer: 'Nunca. Realizamos copias de seguridad redundantes antes de cualquier movimiento y ejecutamos pruebas en entornos seguros antes de dar de baja los registros antiguos.'
      }
    ]
  }
};

export default function ServiceSubpage({
  serviceId,
  onBackToMain,
  onSelectService,
  onNavigateToStudio,
  onNavigateToIaImpacto,
  onNavigateToMarketing,
  onOpenLeadModal
}: ServiceSubpageProps) {
  const service = SERVICES_SUBPAGES_DATA[serviceId] || SERVICES_SUBPAGES_DATA[1];

  // Lead magnet email capture state
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Active step in process
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Calculate urgency seats
  const seatsRemaining = Math.max(1, (service.id * 3) % 4 + 1);

  const RESOURCE_URLS: Record<number, string> = {
    1: '/recursos/blueprint-arquitectura-software-2026.html',
    2: '/recursos/checklist-neuro-ventas-12-reglas.html',
    3: '/recursos/blueprint-agentes-autonomos-ia.html',
    4: '/recursos/10-automatizaciones-esenciales-n8n.html',
    6: '/recursos/test-madurez-tecnologica-fuga-dinero.html',
    7: '/recursos/matriz-transformacion-empresarial-nube.html',
  };
  const resourceUrl = RESOURCE_URLS[service.id] || '/recursos/blueprint-tecnologico-2026-auditoria-express.html';

  const handleLeadCapture = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;

    setIsSubmitting(true);
    try {
      await fetch('https://n8nok-n8n.uah3tl.easypanel.host/webhook/d61883cc-a3a0-4c64-bc20-308f50dceac1', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          email: emailInput,
          nombre: nameInput || 'Lead Subpágina',
          unidad: 'b2b_escala',
          obstaculo: `${service.title} (${service.leadMagnet.title})`,
          servicio: service.title,
          servicio_slug: service.slug,
          recurso_solicitado: service.leadMagnet.title,
          url_recurso: `https://www.expandete.cloud${resourceUrl}`,
          fecha: new Date().toISOString(),
          fuente: `Subpágina ${service.title} — Remarketing Dopamínico`
        }),
      });
    } catch (err) {
      console.error('Error al capturar lead de remarketing:', err);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  const getWhatsAppServiceLink = () => {
    const phone = "573045751648";
    const msg = `¡Hola Expándete! Estoy revisando la subpágina de *${service.title}* en expandete.cloud y me interesa evaluar esta solución para mi empresa.\n\n` +
      (emailInput ? `📧 Mi correo: ${emailInput}\n` : '') +
      `¿Tienen disponibilidad en el sprint actual para agendar un diagnóstico estratégico?`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-tech-cyan selection:text-black relative overflow-x-hidden">
      {/* Top Floating Header & Navigation */}
      <header className="sticky top-0 z-40 bg-black/85 backdrop-blur-xl border-b border-white/10 px-4 md:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-6">
          <button
            onClick={onBackToMain}
            className="flex items-center gap-2 text-white/70 hover:text-white font-poppins text-xs uppercase tracking-wider font-bold transition-all p-2 rounded-xl hover:bg-white/5 cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-tech-cyan" />
            <span className="hidden sm:inline">Volver a Soluciones</span>
            <span className="sm:hidden">Volver</span>
          </button>

          <div className="h-4 w-px bg-white/20 hidden md:block" />

          {/* Breadcrumb / Title */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest hidden lg:inline">
              Expándete Cloud //
            </span>
            <span className="font-poppins font-black text-xs md:text-sm text-white uppercase tracking-tight truncate max-w-[200px] md:max-w-none">
              {service.title}
            </span>
          </div>
        </div>

        {/* Quick actions right */}
        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={getWhatsAppServiceLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-black font-poppins font-bold text-xs transition-all duration-300"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Consultar WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenLeadModal(service.title)}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-tech-cyan to-tech-purple text-black font-poppins font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:brightness-110 transition-all cursor-pointer"
          >
            Calificar Empresa
          </button>
        </div>
      </header>

      {/* Selector Rápido de Otras Subpáginas */}
      <nav aria-label="Explorar otros servicios" className="w-full bg-zinc-950/90 border-b border-white/5 px-4 py-2.5 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto flex items-center gap-2 min-w-max text-xs">
          <span className="font-mono text-[9px] text-white/40 uppercase tracking-wider pr-2">
            Otras Subpáginas:
          </span>
          <button
            onClick={() => onSelectService(1)}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              service.id === 1 ? 'bg-tech-cyan text-black' : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
            }`}
          >
            Apps Móviles & Web
          </button>
          <button
            onClick={() => onSelectService(2)}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              service.id === 2 ? 'bg-tech-cyan text-black' : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
            }`}
          >
            Landing Pages de Élite
          </button>
          <button
            onClick={() => onSelectService(3)}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              service.id === 3 ? 'bg-tech-cyan text-black' : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
            }`}
          >
            Inteligencia Artificial
          </button>
          <button
            onClick={() => onSelectService(4)}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              service.id === 4 ? 'bg-tech-cyan text-black' : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
            }`}
          >
            Automatizaciones n8n
          </button>
          <button
            onClick={onNavigateToMarketing}
            className="px-3 py-1.5 rounded-lg font-bold bg-brand-orange/20 text-brand-orange hover:bg-brand-orange hover:text-black transition-all cursor-pointer flex items-center gap-1"
          >
            <TrendingUp className="w-3 h-3" />
            Marketing & Pauta
          </button>
          <button
            onClick={() => onSelectService(6)}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              service.id === 6 ? 'bg-tech-cyan text-black' : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
            }`}
          >
            Consultoría & CTO
          </button>
          <button
            onClick={() => onSelectService(7)}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              service.id === 7 ? 'bg-tech-cyan text-black' : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
            }`}
          >
            Transformación Digital
          </button>
          <button
            onClick={onNavigateToStudio}
            className="px-3 py-1.5 rounded-lg font-bold bg-amber-500/20 text-amber-400 hover:bg-amber-400 hover:text-black transition-all cursor-pointer flex items-center gap-1"
          >
            <Sparkles className="w-3 h-3" />
            Studio ($34.900)
          </button>
          <button
            onClick={onNavigateToIaImpacto}
            className="px-3 py-1.5 rounded-lg font-bold bg-cyan-500/20 text-cyan-300 hover:bg-cyan-400 hover:text-black transition-all cursor-pointer flex items-center gap-1"
          >
            <Cpu className="w-3 h-3" />
            IA Impacto ($199k)
          </button>
        </div>
      </nav>

      {/* HERO SECTION DE LA SUBPÁGINA */}
      <section className="relative pt-12 pb-16 md:py-24 px-6 md:px-12 overflow-hidden border-b border-white/10">
        {/* Glow de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-tech-cyan/20 via-tech-purple/10 to-transparent blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Columna Izquierda: Títulos, Urgencia y CTAs */}
          <div className="flex-1 flex flex-col items-start gap-5">
            {/* Urgencia / Insignia Dopamínica */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-brand-orange/20 to-tech-purple/20 border border-brand-orange/40 shadow-[0_0_15px_rgba(242,125,38,0.25)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
              </span>
              <span className="font-mono text-[10px] md:text-xs font-black text-brand-orange uppercase tracking-wider">
                {service.urgencyTag}
              </span>
            </div>

            {/* Título Principal */}
            <h1 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.08]">
              {service.title}
            </h1>

            {/* Tagline / Subtítulo */}
            <p className="font-poppins font-bold text-lg md:text-xl text-white/90 leading-snug">
              {service.tagline}
            </p>

            {/* Descripción Persuasiva */}
            <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-2xl">
              {service.description}
            </p>

            {/* Botones de Acción Dopamínicos */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mt-2">
              <button
                onClick={() => onOpenLeadModal(service.title)}
                className="px-8 py-4 bg-gradient-to-r from-tech-cyan via-tech-purple to-brand-orange text-black font-poppins font-black text-sm tracking-wider uppercase rounded-2xl shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_45px_rgba(242,125,38,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer text-center flex items-center justify-center gap-2"
              >
                <span>Calificar Mi Empresa para este Sprint</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>

              <a
                href={getWhatsAppServiceLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-white/5 border border-white/15 hover:bg-white/10 hover:border-emerald-500/50 text-white font-poppins font-bold text-sm tracking-wider rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Hablar por WhatsApp</span>
              </a>
            </div>

            {/* Micro-prueba social */}
            <div className="flex items-center gap-3 text-xs text-white/50 pt-2 font-mono">
              <div className="flex -space-x-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-500/80 flex items-center justify-center text-[10px] text-black font-bold">✓</span>
                <span className="w-5 h-5 rounded-full bg-tech-cyan/80 flex items-center justify-center text-[10px] text-black font-bold">⚡</span>
                <span className="w-5 h-5 rounded-full bg-brand-orange/80 flex items-center justify-center text-[10px] text-black font-bold">★</span>
              </div>
              <span>Casos reales implementados: Banquetes Sarahy, Corporación Art Sport & más.</span>
            </div>
          </div>

          {/* Columna Derecha: Imagen Ilustrativa y Tarjeta de Garantía */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-[0_0_50px_rgba(0,0,0,0.8)] group">
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Insignia Flotante sobre la imagen */}
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-tech-cyan animate-pulse" />
                <span className="font-mono text-[10px] text-white font-bold uppercase tracking-wider">
                  Código Limpio • React / Serverless
                </span>
              </div>

              {/* Tarjeta de Garantía en la parte inferior de la foto */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[9px] text-emerald-400 font-bold uppercase tracking-wider block">
                    Garantía Expándete
                  </span>
                  <span className="font-poppins font-black text-xs text-white uppercase">
                    Código 100% de tu Propiedad
                  </span>
                </div>
                <div className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold">
                  Sin Ataduras
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICAS DE IMPACTO EN CUADRÍCULA */}
      <section className="py-12 px-6 md:px-12 bg-zinc-950/60 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {service.metrics.map((metric, i) => (
            <div
              key={i}
              className="p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-tech-cyan/40 transition-colors flex flex-col gap-1.5"
            >
              <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest font-bold">
                {metric.label}
              </span>
              <span className="font-poppins font-black text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-tech-cyan to-white">
                {metric.value}
              </span>
              <span className="font-sans text-xs text-white/60 leading-relaxed font-medium">
                {metric.subtext}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* ⚡ GANCHO DOPAMÍNICO DE CAPTURA DE CORREO (LEAD MAGNET) */}
      {/* ============================================================== */}
      <section id="lead-magnet-capture" className="py-12 md:py-16 px-6 md:px-12 relative overflow-hidden bg-gradient-to-b from-zinc-950 via-black to-zinc-950 border-b border-white/10">
        <div className="max-w-5xl mx-auto relative rounded-3xl p-8 md:p-12 border border-tech-cyan/40 bg-gradient-to-br from-cyan-950/30 via-black to-purple-950/20 shadow-[0_0_60px_rgba(0,240,255,0.15)] overflow-hidden">
          {/* Adorno visual */}
          <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
            <Gift className="w-48 h-48 text-tech-cyan" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 flex flex-col gap-3 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tech-cyan/15 border border-tech-cyan/40 text-tech-cyan font-mono text-[10px] font-bold uppercase tracking-wider w-fit">
                <Gift className="w-3.5 h-3.5" />
                Recurso Gratuito de Alto Valor
              </div>

              <h2 className="font-poppins font-black text-2xl md:text-3xl text-white uppercase tracking-tight">
                {service.leadMagnet.title}
              </h2>

              <p className="font-sans text-sm text-white/80 leading-relaxed">
                {service.leadMagnet.subtitle}
              </p>

              <div className="flex items-center gap-2 font-mono text-xs text-tech-cyan font-bold pt-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Incluye: {service.leadMagnet.deliverable}</span>
              </div>
            </div>

            {/* Formulario de Captura Rápida de Email */}
            <div className="w-full md:w-96 flex flex-col gap-3 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-white/15 shadow-2xl">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <form onSubmit={handleLeadCapture} className="flex flex-col gap-3">
                    <span className="font-poppins font-black text-xs text-white uppercase tracking-wider flex items-center justify-between">
                      <span>Recíbelo en tu correo:</span>
                      <span className="text-[10px] font-mono text-emerald-400">100% GRATIS</span>
                    </span>

                    <input
                      type="text"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      placeholder="Tu nombre o empresa"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 text-xs focus:outline-none focus:border-tech-cyan transition-colors"
                    />

                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="Tu correo corporativo *"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 text-xs focus:outline-none focus:border-tech-cyan transition-colors"
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-tech-cyan to-tech-purple hover:from-cyan-300 hover:to-purple-500 text-black font-poppins font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Enviando...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-black" />
                          <span>{service.leadMagnet.buttonText}</span>
                        </>
                      )}
                    </button>

                    <span className="font-mono text-[9px] text-white/40 text-center">
                      🔒 Cero spam. Te enviaremos el recurso y novedades clave.
                    </span>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-3 text-center py-2"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h4 className="font-poppins font-black text-sm text-white uppercase">
                      ¡Acceso Desbloqueado!
                    </h4>
                    <p className="font-sans text-xs text-white/70 leading-relaxed">
                      Hemos registrado tu correo <strong className="text-white">{emailInput}</strong>. Ya puedes abrir y descargar el documento oficial:
                    </p>
                    <a
                      href={resourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-3 rounded-xl bg-gradient-to-r from-tech-cyan to-tech-purple text-black font-poppins font-black text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                    >
                      <FileText className="w-3.5 h-3.5 text-black" />
                      <span>📥 Abrir / Descargar Documento (PDF)</span>
                    </a>
                    <a
                      href={getWhatsAppServiceLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500 hover:text-black font-poppins font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Agilizar por WhatsApp</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* METODOLOGÍA PASO A PASO EXPLICATIVA */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-tech-cyan uppercase tracking-[0.25em] font-bold block mb-2">
            // METODOLOGÍA CIENTÍFICA EXPÁNDETE
          </span>
          <h2 className="font-poppins font-black text-3xl md:text-5xl text-white uppercase tracking-tight">
            ¿Cómo ejecutamos tu proyecto paso a paso?
          </h2>
          <p className="font-sans text-sm md:text-base text-white/70 mt-4 leading-relaxed">
            Sin improvisaciones ni demoras injustificadas. Seguimos un protocolo de ingeniería ágil con entregables claros en cada etapa.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.processSteps.map((step, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                activeStepIndex === idx
                  ? 'bg-gradient-to-b from-white/[0.08] to-white/[0.02] border-tech-cyan/60 shadow-[0_0_30px_rgba(0,240,255,0.15)]'
                  : 'bg-white/[0.02] border-white/10 hover:border-white/20'
              }`}
              onClick={() => setActiveStepIndex(idx)}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-black text-tech-cyan">
                    {step.number}
                  </span>
                  <span className="font-mono text-[10px] uppercase font-bold px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/70">
                    {step.duration}
                  </span>
                </div>

                <h3 className="font-poppins font-black text-base text-white uppercase leading-snug">
                  {step.title}
                </h3>

                <p className="font-sans text-xs text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-2">
                <span className="font-mono text-[9px] uppercase tracking-wider text-tech-purple font-bold">
                  Entregables:
                </span>
                {step.deliverables.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-start gap-2 text-xs text-white/80">
                    <Check className="w-3.5 h-3.5 text-tech-cyan mt-0.5 flex-shrink-0" />
                    <span className="leading-tight">{item}</span>
                  </div>
                ))}

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const el = document.getElementById('lead-magnet-capture');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    } else {
                      onOpenLeadModal(`${service.title} - Etapa ${step.number}: ${step.title}`);
                    }
                  }}
                  className="mt-3 w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-tech-cyan/15 to-tech-purple/15 hover:from-tech-cyan hover:to-tech-purple text-tech-cyan hover:text-black border border-tech-cyan/30 font-poppins font-black text-[10px] uppercase tracking-wider transition-all duration-300 flex items-center justify-between cursor-pointer group/btn"
                >
                  <span>⚡ Recibir Plantilla Etapa {step.number}</span>
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARATIVA DE INVERSIÓN Y ROI */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-zinc-950/80 border-y border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-mono text-xs text-brand-orange uppercase tracking-[0.25em] font-bold block mb-2">
              // TRANSPARENCIA FINANCIERA
            </span>
            <h2 className="font-poppins font-black text-3xl md:text-4xl text-white uppercase tracking-tight">
              Comparativa de Costo vs Mercado
            </h2>
            <p className="font-sans text-sm text-white/70 mt-2">
              Analizamos la realidad del mercado para que inviertas con total certidumbre matemática.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Opción Tradicional */}
            <div className="p-8 rounded-3xl bg-red-950/15 border border-red-500/30 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs text-red-400 font-bold uppercase tracking-wider">
                  El Modelo Tradicional
                </span>
                <h3 className="font-poppins font-black text-xl text-white uppercase">
                  {service.roiComparison.traditionalTitle}
                </h3>
                <div className="text-2xl md:text-3xl font-black text-red-400 font-poppins">
                  {service.roiComparison.traditionalCost}
                </div>
                <p className="font-sans text-xs text-white/60">
                  {service.roiComparison.traditionalTime}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-300 leading-relaxed font-sans">
                ⚠️ Procesos burocráticos, cobros ocultos por mantenimiento y software que queda obsoleto rápidamente.
              </div>
            </div>

            {/* Modelo Expándete */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-tech-cyan/15 to-tech-purple/10 border border-tech-cyan/50 shadow-[0_0_40px_rgba(0,240,255,0.2)] flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tech-cyan text-black font-poppins font-black text-[10px] uppercase w-fit">
                  <Sparkles className="w-3 h-3" />
                  RECOMENDADO
                </div>
                <h3 className="font-poppins font-black text-xl text-white uppercase">
                  {service.roiComparison.expandeteTitle}
                </h3>
                <div className="text-2xl md:text-3xl font-black text-tech-cyan font-poppins">
                  {service.roiComparison.expandeteCost}
                </div>
                <p className="font-sans text-xs text-white/80 font-bold">
                  {service.roiComparison.expandeteTime}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-tech-cyan/10 border border-tech-cyan/30 text-xs text-tech-cyan leading-relaxed font-sans font-bold">
                🚀 {service.roiComparison.savingsHighlight}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANES Y NIVELES DE INVERSIÓN */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-tech-purple uppercase tracking-[0.25em] font-bold block mb-2">
            // NIVELES DE ALCANCE
          </span>
          <h2 className="font-poppins font-black text-3xl md:text-5xl text-white uppercase tracking-tight">
            Estructura de Entregables
          </h2>
          <p className="font-sans text-sm md:text-base text-white/70 mt-4 leading-relaxed">
            Precios justos, sin letras pequeñas ni sorpresas de facturación.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {service.investmentTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl border flex flex-col justify-between relative transition-all duration-300 ${
                tier.isPopular
                  ? 'bg-gradient-to-b from-white/[0.06] to-black border-tech-cyan/50 shadow-[0_0_35px_rgba(0,240,255,0.2)] -translate-y-2'
                  : 'bg-white/[0.02] border-white/10 hover:border-white/20'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-tech-cyan to-tech-purple text-black font-poppins font-black text-[10px] uppercase tracking-wider shadow-lg">
                  MÁS SOLICITADO
                </div>
              )}

              <div className="flex flex-col gap-4">
                <span className="font-mono text-xs text-white/50 uppercase tracking-widest font-bold">
                  {tier.name}
                </span>

                <div className="font-poppins font-black text-2xl md:text-3xl text-white">
                  {tier.range}
                </div>

                <p className="font-sans text-xs text-white/70 leading-relaxed">
                  {tier.idealFor}
                </p>

                <div className="inline-flex items-center gap-1.5 text-xs text-brand-orange font-mono font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{tier.timeline}</span>
                </div>

                <div className="h-px bg-white/10 my-2" />

                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white/40 font-bold">
                    Incluye:
                  </span>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-white/85">
                      <Check className="w-3.5 h-3.5 text-tech-cyan mt-0.5 flex-shrink-0" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={() => onOpenLeadModal(`${service.title} - ${tier.name}`)}
                  className={`w-full py-3.5 rounded-xl font-poppins font-black text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    tier.isPopular
                      ? 'bg-gradient-to-r from-tech-cyan to-tech-purple text-black shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:brightness-110'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Seleccionar este Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES (FAQ) ESPECÍFICAS */}
      <section className="py-16 px-6 md:px-12 bg-zinc-950/90 border-t border-white/10">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div className="text-center">
            <span className="font-mono text-xs text-tech-cyan uppercase tracking-[0.25em] font-bold block mb-2">
              // PREGUNTAS FRECUENTES
            </span>
            <h2 className="font-poppins font-black text-2xl md:text-3xl text-white uppercase tracking-tight">
              Dudas comunes sobre este servicio
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {service.faq.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left font-poppins font-bold text-sm text-white hover:text-tech-cyan transition-colors cursor-pointer"
                >
                  <span>{item.question}</span>
                  <ChevronRight
                    className={`w-4 h-4 text-tech-cyan transition-transform duration-200 ${
                      openFaqIndex === idx ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === idx && (
                  <div className="px-6 pb-5 pt-1 text-xs md:text-sm text-white/75 font-sans leading-relaxed border-t border-white/5">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LLAMADO A LA ACCIÓN FINAL ANTES DEL FOOTER */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-black border-t border-white/10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-tech-cyan/5 via-transparent to-tech-purple/10 pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange font-mono text-xs font-bold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5" />
            <span>ÚLTIMOS CUPOS DEL SPRINT MENSUAL</span>
          </div>

          <h2 className="font-poppins font-black text-3xl md:text-5xl text-white uppercase tracking-tight leading-tight">
            ¿Listo para implementar {service.title} en tu empresa?
          </h2>

          <p className="font-sans text-sm md:text-base text-white/70 max-w-2xl leading-relaxed">
            No pierdas más tiempo ni dejes escapar ventas. Agenda hoy tu diagnóstico y recibe un plan estratégico detallado sin costo.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-4">
            <button
              onClick={() => onOpenLeadModal(service.title)}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-tech-cyan via-tech-purple to-brand-orange text-black font-poppins font-black text-sm tracking-wider uppercase rounded-2xl shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Calificar Mi Empresa Ahora
            </button>

            <a
              href={getWhatsAppServiceLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-poppins font-bold text-sm tracking-wider rounded-2xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chatear por WhatsApp</span>
            </a>
          </div>

          <button
            onClick={onBackToMain}
            className="font-mono text-xs text-white/40 hover:text-white uppercase tracking-widest mt-6 cursor-pointer transition-colors"
          >
            [ Volver a la página principal de Expándete Cloud ]
          </button>
        </div>
      </section>
    </div>
  );
}
