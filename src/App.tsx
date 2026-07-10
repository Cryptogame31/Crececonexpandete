import React from 'react';
import { useMotionValue, useSpring, useTransform, motion } from 'motion/react';
import { ArrowRight, Flame, Cpu, Database, Smartphone, TrendingUp, Linkedin, Twitter, Facebook, Youtube, X, Send, CheckCircle, Layers, ArrowLeft, Check, DollarSign, ExternalLink, ShieldCheck, Clock, Sparkles } from 'lucide-react';

const SERVICES_DATA = [
  {
    id: 1,
    title: "Desarrollo de Apps",
    tagline: "Aplicaciones a medida que impulsan la productividad y abren nuevos mercados.",
    description: "Diseñamos y desarrollamos aplicaciones web y móviles de alto rendimiento a medida. Nos enfocamos en crear interfaces intuitivas (UI) y experiencias de usuario (UX) excepcionales que minimizan la fricción de uso, aumentan la retención de clientes y digitalizan por completo los flujos de trabajo de tu negocio.",
    icon: "Smartphone",
    color: "from-brand-orange to-red-500",
    themeColor: "text-brand-orange",
    bgAccent: "bg-brand-orange/10",
    borderAccent: "border-brand-orange/30",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    realPrice: {
      range: "Desde $1,500 USD hasta $15,000+ USD",
      detail: "Proyectos simples o MVPs (Mínimo Producto Viable) se estiman entre $1,500 y $3,500 USD con entrega en 4 semanas. Sistemas SaaS robustos, marketplaces o apps móviles avanzadas con integraciones complejas se cotizan entre $6,000 y $15,000+ USD.",
      comparison: "Agencias de desarrollo tradicional cobran entre $8,000 y $35,000 USD por el mismo alcance y tardan más del doble de tiempo."
    },
    benefits: [
      "Multiplataforma Eficiente: Desarrollo híbrido (React Native / Flutter) para iOS y Android con una sola base de código, reduciendo costos de mantenimiento al 50%.",
      "Arquitectura Cloud Escalable: Alojamiento optimizado en la nube para responder sin lentitud ante picos masivos de tráfico.",
      "Diseño UI/UX de Élite: Diseñado bajo altos estándares estéticos para maximizar la conversión y simplificar la navegación.",
      "Integraciones de Terceros: Sincronización transparente con pasarelas de pago (Stripe, PayPal), CRMs, ERPs y APIs externas."
    ]
  },
  {
    id: 2,
    title: "Inteligencia Artificial",
    tagline: "Empleados virtuales autónomos operando 24/7 para potenciar tus ventas y soporte.",
    description: "Creamos e integramos agentes de Inteligencia Artificial que automatizan la atención al cliente, califican prospectos en tiempo real, redactan propuestas comerciales personalizadas y analizan grandes volúmenes de datos operativos. No son simples chatbots con respuestas rígidas; son sistemas cognitivos entrenados con los datos específicos de tu empresa.",
    icon: "Cpu",
    color: "from-tech-cyan to-blue-500",
    themeColor: "text-tech-cyan",
    bgAccent: "bg-tech-cyan/10",
    borderAccent: "border-tech-cyan/30",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
    realPrice: {
      range: "Desde $800 USD hasta $6,000+ USD",
      detail: "Agentes inteligentes sencillos integrados a WhatsApp o Web para captación y atención básica parten desde los $800 USD. Soluciones integrales de IA multi-agente con RAG corporativo personalizado (lectura de PDFs, bases de datos internas y toma de decisiones) oscilan entre $2,500 y $6,000 USD.",
      comparison: "Sustituye la necesidad de contratar y entrenar personal nocturno o agencias de call-center que cuestan más de $15,000 USD anuales, eliminando el margen de error humano."
    },
    benefits: [
      "Atención Instantánea Omnicanal: Respuesta inmediata e idéntica a tus clientes a través de WhatsApp, Instagram, Web y Teléfono.",
      "RAG Corporativo Privado: Acceso exclusivo a tus manuales, políticas de precios y catálogos de productos de forma segura y confidencial.",
      "Agendamiento Automático: Tus agentes de IA pueden reservar llamadas directamente en Google Calendar o Calendly tras calificar al lead.",
      "Automatización de Voz con IA: Agentes telefónicos con entonación y modulación ultra-realista que atienden llamadas de forma simultánea."
    ]
  },
  {
    id: 3,
    title: "Automatizaciones",
    tagline: "Flujos de trabajo invisibles que eliminan tareas repetitivas y liberan tiempo útil.",
    description: "Conectamos todas las aplicaciones de software que ya utilizas en tu día a día (CRM, Sheets, Slack, Gmail, Stripe, WhatsApp) en un ecosistema coordinado sin intervención humana. Diseñamos flujos con Make, Zapier y n8n para que la información fluya instantáneamente y tu equipo se enfoque exclusivamente en cerrar negocios.",
    icon: "Database",
    color: "from-tech-purple to-pink-500",
    themeColor: "text-tech-purple",
    bgAccent: "bg-tech-purple/10",
    borderAccent: "border-tech-purple/30",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    realPrice: {
      range: "Desde $500 USD hasta $3,500+ USD",
      detail: "Automatizaciones de flujos de leads simples (Facebook Ads -> Google Sheets -> WhatsApp) parten desde los $500 USD. Integraciones complejas que conectan ERPs de facturación, pasarelas de pago y sistemas de inventario se estiman entre $1,800 y $3,500 USD.",
      comparison: "El ahorro en tiempos de digitación y corrección de errores manuales recupera el 100% de la inversión en los primeros 45 días de funcionamiento."
    },
    benefits: [
      "Cero Errores de Captura: Eliminación completa del copiado y pegado de datos entre planillas de Excel y sistemas administrativos.",
      "Respuestas Inmediatas: Envío instantáneo de cotizaciones, correos de bienvenida o alertas de cobro en milisegundos tras la acción del cliente.",
      "Reportería Automatizada: Recepción diaria o semanal de resúmenes de facturación y KPIs directo en tu Slack, Teams o WhatsApp.",
      "Asignación Inteligente de Clientes: Distribución equitativa y automatizada de nuevos leads entre tu equipo de ventas (Round Robin)."
    ]
  },
  {
    id: 4,
    title: "Marketing Inteligente",
    tagline: "Campañas hiper-segmentadas y embudos de conversión enfocados en el retorno (ROI).",
    description: "Desterramos el marketing intuitivo y los 'likes' superficiales. Diseñamos embudos digitales basados en analítica de datos duros y comportamiento del consumidor. Estructuramos campañas publicitarias en Meta Ads, Google Ads y TikTok Ads coordinadas con páginas de destino de alta velocidad para maximizar el retorno de tu inversión publicitaria.",
    icon: "TrendingUp",
    color: "from-brand-orange to-yellow-500",
    themeColor: "text-brand-orange",
    bgAccent: "bg-brand-orange/10",
    borderAccent: "border-brand-orange/30",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    realPrice: {
      range: "Desde $1,200 USD / mes (Servicio Mensual)",
      detail: "Estrategia de embudos de conversión, creación de copys basados en neuro-ventas, diseño de landing pages optimizadas y gestión avanzada de campañas publicitarias parte desde $1,200 USD mensuales, variando según la escala de inversión en pauta.",
      comparison: "Agencias tradicionales cobran fees fijos elevados sin compromisos de conversión. Nuestro enfoque es 100% de crecimiento: optimizar tu CAC (Costo de Adquisición) y escalar tus ventas."
    },
    benefits: [
      "Embudos de Conversión Avanzados: Creación del camino exacto que recorre un usuario desconocido hasta convertirse en un cliente recurrente.",
      "Páginas de Aterrizaje Ultra-Rápidas: Diseñadas bajo código limpio para cargar en menos de un segundo, evitando la fuga del 40% del tráfico.",
      "Estrategias de Retargeting Dinámico: Impactamos nuevamente a los usuarios interesados con el mensaje exacto según su nivel de consideración.",
      "Analítica Web y Atribución Exacta: Paneles interactivos para saber de qué anuncio, plataforma y campaña exacta proviene cada centavo facturado."
    ]
  },
  {
    id: 5,
    title: "Consultoría",
    tagline: "Estrategia técnica y viabilidad de negocio antes de comprometer capital.",
    description: "Te guiamos en la toma de decisiones tecnológicas cruciales para asegurar que cada centavo invertido retorne con creces. Analizamos tu modelo operativo actual, auditamos tus flujos de datos e infraestructura y creamos un roadmap claro de digitalización para evitar licenciamientos de software innecesarios o desarrollos redundantes.",
    icon: "Flame",
    color: "from-tech-cyan to-teal-500",
    themeColor: "text-tech-cyan",
    bgAccent: "bg-tech-cyan/10",
    borderAccent: "border-tech-cyan/30",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    realPrice: {
      range: "Desde $300 USD (Sesión Única) hasta $2,500 USD (Auditoría e Informe Completo)",
      detail: "Una sesión estratégica de diagnóstico de 90 minutos con entrega de notas ejecutivas se cotiza en $300 USD. Un servicio de auditoría técnica integral de procesos, diseño de arquitectura de sistemas y entrega de un Roadmap Técnico detallado se tasa entre $1,500 y $2,500 USD.",
      comparison: "Una mala elección de software o un error en la arquitectura de tu base de datos puede costar más de $12,000 USD en licencias y retrabajo técnico. Prevenirlo es sumamente rentable."
    },
    benefits: [
      "CTO Fraccionado (Chief Technology Officer): Acceso a criterio técnico experto de clase mundial sin los costos de un salario de nómina ejecutivo de tiempo completo.",
      "Auditoría Exhaustiva de Sistemas: Identificamos licencias duplicadas, herramientas obsoletas y cuellos de botella de velocidad.",
      "Evaluación Rigurosa de ROI: Análisis financiero predictivo para proyectar con precisión cuándo y cuánto retornará la inversión tecnológica.",
      "Diseño de Plan de Crecimiento: Un mapa detallado de pasos ordenados para digitalizar tu negocio sin interrumpir tu operación activa."
    ]
  },
  {
    id: 6,
    title: "Transformación Digital",
    tagline: "Modernización de raíz para convertir tu empresa tradicional en un líder ágil y tecnológico.",
    description: "Llevamos a cabo la modernización integral de empresas de sectores tradicionales. Reemplazamos procesos obsoletos en papel o planillas aisladas de Excel por plataformas ERP/CRM unificadas en la nube, flujos de trabajo interconectados y herramientas con IA para capacitar a tu personal y lograr que tu organización sea sumamente veloz, eficiente y escalable.",
    icon: "Layers",
    color: "from-tech-purple to-indigo-500",
    themeColor: "text-tech-purple",
    bgAccent: "bg-tech-purple/10",
    borderAccent: "border-tech-purple/30",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    realPrice: {
      range: "Desde $4,000 USD hasta $25,000+ USD",
      detail: "Proyectos medianos de unificación de bases de datos, migración de archivos e implementación de CRM/ERP con capacitación del equipo oscilan entre $4,000 y $8,000 USD. Reestructuraciones operativas e integraciones totales para empresas corporativas se cotizan a partir de $12,000 USD en adelante.",
      comparison: "Las firmas consultoras multinacionales tradicionales ofrecen metodologías burocráticas y cobran tarifas de seis cifras. Nosotros somos ágiles, directos al grano y orientados a resultados inmediatos."
    },
    benefits: [
      "Migración Segura a la Nube: Centralización segura de archivos y flujos operativos para acceder desde cualquier parte del mundo.",
      "Unificación de Datos en ERP / CRM: Conexión perfecta entre tus áreas de ventas, compras, almacén y finanzas en un solo tablero.",
      "Cultura Digital & Capacitación: Talleres interactivos y soporte paso a paso para garantizar que tu personal adopte las herramientas con total fluidez.",
      "Ecosistema Automatizado de Control: Alertas automáticas ante caídas de ventas, stock mínimo, o tareas retrasadas para un control directivo absoluto."
    ]
  }
];

const getIconComponent = (name: string) => {
  switch(name) {
    case "Smartphone": return <Smartphone className="w-7 h-7" />;
    case "Cpu": return <Cpu className="w-7 h-7" />;
    case "Database": return <Database className="w-7 h-7" />;
    case "TrendingUp": return <TrendingUp className="w-7 h-7" />;
    case "Flame": return <Flame className="w-7 h-7" />;
    case "Layers": return <Layers className="w-7 h-7" />;
    default: return <Cpu className="w-7 h-7" />;
  }
};

export default function App() {
  // Cursor tracking for custom parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Responsive video state for the hero section
  const [heroVideoSrc, setHeroVideoSrc] = React.useState('https://vicflix.expandete.cloud/Videos/hero3.mp4');
  const [selectedService, setSelectedService] = React.useState<number | null>(null);

  React.useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 768) {
        setHeroVideoSrc('https://vicflix.expandete.cloud/Videos/hero3m.mp4');
      } else {
        setHeroVideoSrc('https://vicflix.expandete.cloud/Videos/hero3.mp4');
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // State variables for the high-conversion sales funnel lead qualification form
  const [isLeadFormOpen, setIsLeadFormOpen] = React.useState(false);
  const [formStep, setFormStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    nombre: '',
    whatsapp: '',
    email: '',
    empresa: '',
    facturacion: '',
    obstaculo: '',
  });
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const selectOption = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep === 1) {
      if (formData.nombre && formData.whatsapp && formData.email) {
        setFormStep(2);
      }
    } else if (formStep === 2) {
      if (formData.facturacion && formData.obstaculo) {
        setIsSubmitting(true);
        try {
          await fetch('https://n8nok-n8n.uah3tl.easypanel.host/webhook/d61883cc-a3a0-4c64-bc20-308f50dceac1', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...formData,
              fecha: new Date().toISOString(),
              fuente: 'NextGen Strategy Landing'
            }),
          });
        } catch (error) {
          console.error('Error sending lead data to webhook:', error);
        } finally {
          setIsSubmitting(false);
          setFormSubmitted(true);
        }
      }
    }
  };

  const resetForm = () => {
    setIsLeadFormOpen(false);
    setFormStep(1);
    setFormData({
      nombre: '',
      whatsapp: '',
      email: '',
      empresa: '',
      facturacion: '',
      obstaculo: '',
    });
    setFormSubmitted(false);
    setIsSubmitting(false);
  };

  const getWhatsAppLink = () => {
    const phone = "5215512345678"; // Expándete official direct contact line
    const message = `¡Hola Expándete! Acabo de calificar mi empresa en su plataforma:\n\n` +
      `👤 *Nombre:* ${formData.nombre}\n` +
      `🏢 *Empresa:* ${formData.empresa || 'No especificada'}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `💬 *WhatsApp:* ${formData.whatsapp}\n` +
      `💰 *Facturación:* ${formData.facturacion}\n` +
      `⚠️ *Obstáculo:* ${formData.obstaculo}\n\n` +
      `Quiero agendar mi consultoría estratégica gratuita y pasar al embudo de escala.`;
    
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  // Smooth physical springs setup for parallax
  const springConfig = { stiffness: 100, damping: 30 };
  const moveX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-35, 35]), springConfig);
  const moveY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-35, 35]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Normalize coordinates from -0.5 to 0.5
    const x = (clientX / width) - 0.5;
    const y = (clientY / height) - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-black grid-bg selection:bg-tech-cyan selection:text-black"
    >
      {/* 1. SECCIÓN 1: INTRODUCCIÓN CINEMÁTICA CON VIDEO DE FONDO (Pantalla Completa a Todo Color) */}
      <section className="snap-start h-screen w-full relative overflow-hidden flex flex-col justify-between p-6 md:p-12">
        {/* Full screen video background without any dimming opacity masks */}
        <div className="absolute inset-0 z-0">
          <video 
            key={heroVideoSrc}
            autoPlay 
            muted 
            loop 
            playsInline 
            className="h-full w-full object-cover"
          >
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
        </div>

        {/* Cinematic content wrapper */}
        <div className="relative z-10 flex flex-col justify-between h-full w-full max-w-7xl mx-auto">
          {/* Empty spacer to align the scroll indicator at the bottom */}
          <div className="flex-1" />

          {/* Animated Scroll Indicator */}
          <div className="pb-2 flex justify-center items-center w-full">
            <div className="flex flex-col items-center gap-1">
              <span className="font-mono text-[9px] text-white/70 tracking-widest uppercase font-bold drop-shadow">ENTRAR / DESLIZAR</span>
              <div className="w-[2px] h-12 bg-gradient-to-b from-tech-cyan to-transparent relative overflow-hidden">
                <motion.div 
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 left-0 right-0 h-3 bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN 2: TODO LO QUE TU EMPRESA NECESITA (Ecosistema Completo) */}
      <section className="snap-start min-h-screen w-full relative overflow-hidden flex items-center p-6 md:p-12 bg-black py-16 md:py-24">
        {/* Parallax Background Layer */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80" 
            alt="Global tech ecosystem network" 
            className="w-full h-full object-cover pointer-events-none select-none"
            style={{ x: moveX, y: moveY, scale: 1.15 }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center h-full">
          {/* Header text container */}
          <div className="mb-10 max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-mono text-xs text-tech-cyan tracking-[0.2em] font-bold uppercase block mb-3"
            >
              // SOLUCIONES SIN INTERMEDIARIOS
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="font-poppins text-3xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter"
            >
              Todo lo que tu empresa necesita para crecer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-cyan to-tech-purple">
                está en un solo lugar.
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-poppins text-base md:text-lg text-white/80 mt-4 leading-relaxed max-w-3xl"
            >
              No necesitas cinco proveedores diferentes. Creamos el ecosistema tecnológico completo para que vendas más, reduzcas costos y tomes mejores decisiones con Inteligencia Artificial.
            </motion.p>
          </div>

          {/* Benefit Cards Grid (6 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => setSelectedService(service.id)}
                className="glass-card p-8 flex flex-col justify-between min-h-[240px] cursor-pointer group hover:border-tech-cyan/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col gap-3">
                  <div className={`flex items-center gap-3 ${service.themeColor}`}>
                    {getIconComponent(service.icon)}
                    <span className="font-poppins font-black text-lg uppercase tracking-tight">{service.title}</span>
                  </div>
                  <p className="font-poppins font-bold text-sm text-white/90 leading-relaxed">
                    {service.tagline}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-white/40 group-hover:text-tech-cyan font-mono text-[10px] uppercase font-bold tracking-wider transition-colors duration-300">
                  Ver detalles y precios
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN 3: ASÍ TRANSFORMAMOS EMPRESAS (Metodología de Élite) */}
      <section className="snap-start min-h-screen w-full relative overflow-hidden flex items-center p-6 md:p-12 bg-black py-16">
        {/* Parallax Server Motherboard Background */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80" 
            alt="Tech infrastructure transform" 
            className="w-full h-full object-cover pointer-events-none select-none opacity-40"
            style={{ x: moveX, y: moveY, scale: 1.12 }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center h-full">
          {/* Section Header */}
          <div className="mb-12">
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-brand-orange text-white px-5 py-2 rounded-full font-poppins font-bold text-xs md:text-sm tracking-[0.25em] uppercase inline-block mb-4"
            >
              METODOLOGÍA ORIENTADA A RESULTADOS
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="font-poppins font-black text-4xl md:text-7xl text-white uppercase tracking-tighter"
            >
              Así transformamos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-cyan via-tech-purple to-brand-orange">
                empresas.
              </span>
            </motion.h2>
          </div>

          {/* Staggered process cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Paso 1: Descubrimos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-zinc-950/80 backdrop-blur-md border border-white/15 p-8 rounded-3xl relative overflow-hidden group hover:border-tech-cyan/50 transition-all duration-300"
            >
              <div className="absolute top-4 right-6 font-poppins font-black text-5xl text-white/5 group-hover:text-tech-cyan/10 transition-colors">01</div>
              <h3 className="font-poppins font-black text-xl text-tech-cyan uppercase mb-3">Descubrimos</h3>
              <p className="font-poppins text-sm text-gray-300 leading-relaxed font-bold">
                Analizamos cómo funciona tu negocio. Detectamos cuellos de botella, pérdidas de dinero y oportunidades reales de crecimiento.
              </p>
            </motion.div>

            {/* Paso 2: Diseñamos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-zinc-950/80 backdrop-blur-md border border-white/15 p-8 rounded-3xl relative overflow-hidden group hover:border-brand-orange/50 transition-all duration-300"
            >
              <div className="absolute top-4 right-6 font-poppins font-black text-5xl text-white/5 group-hover:text-brand-orange/10 transition-colors">02</div>
              <h3 className="font-poppins font-black text-xl text-brand-orange uppercase mb-3">Diseñamos</h3>
              <p className="font-poppins text-sm text-gray-300 leading-relaxed font-bold">
                Creamos una estrategia tecnológica completamente personalizada para tu modelo. Nada de soluciones genéricas ni plantillas obsoletas.
              </p>
            </motion.div>

            {/* Paso 3: Construimos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-zinc-950/80 backdrop-blur-md border border-white/15 p-8 rounded-3xl relative overflow-hidden group hover:border-tech-purple/50 transition-all duration-300"
            >
              <div className="absolute top-4 right-6 font-poppins font-black text-5xl text-white/5 group-hover:text-tech-purple/10 transition-colors">03</div>
              <h3 className="font-poppins font-black text-xl text-tech-purple uppercase mb-3">Construimos</h3>
              <p className="font-poppins text-sm text-gray-300 leading-relaxed font-bold">
                Desarrollamos aplicaciones robustas, automatizaciones integrales y agentes cognitivos de IA listos para producir resultados medibles.
              </p>
            </motion.div>

            {/* Paso 4: Escalamos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-zinc-950/80 backdrop-blur-md border border-white/15 p-8 rounded-3xl relative overflow-hidden group hover:border-white/40 transition-all duration-300"
            >
              <div className="absolute top-4 right-6 font-poppins font-black text-5xl text-white/5 group-hover:text-white/10 transition-colors">04</div>
              <h3 className="font-poppins font-black text-xl text-white uppercase mb-3">Escalamos</h3>
              <p className="font-poppins text-sm text-gray-300 leading-relaxed font-bold">
                Medimos absolutamente todo. Realizamos optimización constante, capturando más clientes, más ventas y multiplicando tu rentabilidad.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. SECCIÓN 4: ESCALAR NEGOCIO (Héroe Original con Video 1 de Fondo) */}
      <section className="snap-start h-screen w-full relative overflow-hidden flex flex-col justify-between p-6 md:p-12">
        {/* Full screen video background with a professional dark gradient overlay to enhance readability */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="h-full w-full object-cover"
          >
            <source src="https://vicflix.expandete.cloud/Videos/hero1.mp4" type="video/mp4" />
          </video>
          {/* Cinematic dark horizontal and vertical gradient overlay to guarantee perfect contrast for text while leaving the rest of the video fully visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/90 md:via-black/35 md:to-transparent pointer-events-none" />
        </div>

        {/* Cinematic content wrapper */}
        <div className="relative z-10 flex flex-col justify-between h-full w-full max-w-7xl mx-auto">
          {/* Empty top spacer to balance layout */}
          <div className="pt-4" />

          {/* Core brutal headlines & Copy */}
          <div className="flex flex-col items-start gap-4 md:gap-6 my-auto pt-8 md:pt-12 max-w-5xl">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-col gap-2 filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)]"
            >
              <h1 className="tech-textured text-[26px] sm:text-[36px] md:text-[85px] font-black leading-[1.1] md:leading-[0.8] tracking-tight md:tracking-tighter uppercase">
                CONVIERTE TU EMPRESA
              </h1>
              <h1 className="tech-textured text-[26px] sm:text-[36px] md:text-[85px] font-black leading-[1.1] md:leading-[0.8] tracking-tight md:tracking-tighter uppercase">
                EN UNA MÁQUINA DE CRECIMIENTO
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-poppins font-bold text-base md:text-xl text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)] max-w-4xl leading-relaxed"
            >
              Diseñamos aplicaciones, implementamos automatizaciones, desarrollamos agentes de IA y creamos estrategias digitales que eliminan el trabajo repetitivo, aumentan las ventas y hacen que tu negocio crezca sin límites.
            </motion.p>

            {/* Action Buttons Row */}
            <div className="mt-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsLeadFormOpen(true)}
                className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-tech-purple to-tech-cyan px-8 py-4 rounded-full text-black font-poppins font-black tracking-wider text-sm md:text-base hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] transition-shadow duration-300 cursor-pointer uppercase shadow-xl"
              >
                Quiero escalar mi empresa
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsLeadFormOpen(true)}
                className="px-8 py-4 border-2 border-white/60 bg-black/60 backdrop-blur-md text-white rounded-full font-poppins font-bold tracking-wider text-sm md:text-base transition-all duration-300 hover:bg-white hover:text-black hover:border-white cursor-pointer shadow-lg text-center"
              >
                Agenda una consultoría gratuita
              </motion.button>
            </div>

            {/* Confidence Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-white/90 font-poppins font-bold text-xs md:text-sm tracking-tight drop-shadow bg-black/30 backdrop-blur-sm p-3 rounded-xl border border-white/5"
            >
              <span className="flex items-center gap-1.5"><span className="text-tech-cyan">✓</span> Empresas que venden más</span>
              <span className="flex items-center gap-1.5"><span className="text-tech-cyan">✓</span> Automatizaciones inteligentes</span>
              <span className="flex items-center gap-1.5"><span className="text-tech-cyan">✓</span> Apps a medida</span>
              <span className="flex items-center gap-1.5"><span className="text-tech-cyan">✓</span> IA entrenada para tu negocio</span>
            </motion.div>
          </div>

          {/* Animated Scroll Indicator */}
          <div className="pb-2 flex justify-center items-center w-full">
            <div className="flex flex-col items-center gap-1">
              <span className="font-mono text-[9px] text-white/50 tracking-widest uppercase">DESLIZAR</span>
              <div className="w-[2px] h-10 bg-gradient-to-b from-tech-cyan to-transparent relative overflow-hidden">
                <motion.div 
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 left-0 right-0 h-3 bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN 5: TECNOLOGÍA DE NIVEL EMPRESARIAL */}
      <section className="snap-start min-h-screen w-full relative overflow-hidden flex items-center p-6 md:p-12 bg-black py-16">
        {/* Parallax Technology Circuit Background */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80" 
            alt="High-performance technology circuit board" 
            className="w-full h-full object-cover pointer-events-none select-none opacity-25"
            style={{ x: moveY, y: moveX, scale: 1.15 }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center h-full">
          {/* Header */}
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-mono text-brand-orange uppercase tracking-[0.25em] font-bold block mb-2">
              // ARQUITECTURA DE ALTO IMPACTO
            </span>
            <h2 className="font-poppins text-3xl md:text-6xl font-black text-white leading-none uppercase tracking-tighter">
              TECNOLOGÍA DE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-tech-cyan">
                NIVEL EMPRESARIAL.
              </span>
            </h2>
            <p className="font-poppins text-base text-gray-400 mt-4 leading-relaxed font-bold">
              Utilizamos la misma tecnología que emplean startups de alto crecimiento y empresas líderes para desarrollar soluciones rápidas, seguras y escalables, enfocadas en el retorno comercial.
            </p>
          </div>

          {/* Cards grid (Vender beneficios) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-zinc-950 border border-white/15 p-6 rounded-3xl flex flex-col gap-3 hover:border-tech-cyan/50 transition-colors duration-300">
              <span className="font-mono text-xs text-tech-cyan font-bold uppercase tracking-wider">// WEB APPS</span>
              <h3 className="font-poppins font-black text-lg text-white uppercase">Aplicaciones Web</h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed font-bold">
                Interfaces rápidas, modernas y optimizadas que cargan al instante y retienen visitas para convertirlas en clientes.
              </p>
            </div>

            <div className="bg-zinc-950 border border-white/15 p-6 rounded-3xl flex flex-col gap-3 hover:border-tech-cyan/50 transition-colors duration-300">
              <span className="font-mono text-xs text-tech-cyan font-bold uppercase tracking-wider">// MULTIPLATFORM</span>
              <h3 className="font-poppins font-black text-lg text-white uppercase">Apps Móviles</h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed font-bold">
                Despliegue nativo para Android y iPhone desde una sola arquitectura, optimizado para un lanzamiento rápido al mercado.
              </p>
            </div>

            <div className="bg-zinc-950 border border-white/15 p-6 rounded-3xl flex flex-col gap-3 hover:border-tech-cyan/50 transition-colors duration-300">
              <span className="font-mono text-xs text-tech-cyan font-bold uppercase tracking-wider">// COGNITIVE COMPUTING</span>
              <h3 className="font-poppins font-black text-lg text-white uppercase">Inteligencia Artificial</h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed font-bold">
                LLMs avanzados, agentes cognitivos autónomos, sistemas RAG de base documental y flujos conversacionales automatizados.
              </p>
            </div>

            <div className="bg-zinc-950 border border-white/15 p-6 rounded-3xl flex flex-col gap-3 hover:border-tech-cyan/50 transition-colors duration-300">
              <span className="font-mono text-xs text-tech-cyan font-bold uppercase tracking-wider">// HIGH AVAILABILITY</span>
              <h3 className="font-poppins font-black text-lg text-white uppercase">Infraestructura Cloud</h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed font-bold">
                Sistemas en la nube listos para soportar alto tráfico y escalar de forma instantánea según la demanda de tu negocio.
              </p>
            </div>

            <div className="bg-zinc-950 border border-white/15 p-6 rounded-3xl flex flex-col gap-3 hover:border-tech-cyan/50 transition-colors duration-300">
              <span className="font-mono text-xs text-tech-cyan font-bold uppercase tracking-wider">// SYSTEM CONNECTIVITY</span>
              <h3 className="font-poppins font-black text-lg text-white uppercase">Automatizaciones</h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed font-bold">
                Flujos de integración mediante Make, n8n, conexión directa de APIs, CRM, ERP, WhatsApp automatizado y Email marketing inteligente.
              </p>
            </div>

            <div className="bg-zinc-950 border border-white/15 p-6 rounded-3xl flex flex-col gap-3 hover:border-tech-cyan/50 transition-colors duration-300">
              <span className="font-mono text-xs text-tech-cyan font-bold uppercase tracking-wider">// SAFE ENGINE</span>
              <h3 className="font-poppins font-black text-lg text-white uppercase">Bases de Datos</h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed font-bold">
                Arquitecturas relacionales robustas, de baja latencia y alta integridad para gestionar miles de transacciones simultáneas con seguridad.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. SECCIÓN 6: SECCIÓN DIFERENCIAL & ESTADÍSTICAS */}
      <section className="snap-start min-h-screen w-full relative overflow-hidden flex flex-col justify-between p-6 md:p-12 bg-black py-16">
        {/* Full-color abstract neural network background with light tint */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1920&q=80" 
            alt="Artificial intelligence 3D neural plexus" 
            className="w-full h-full object-cover pointer-events-none select-none opacity-25"
            style={{ x: moveY, y: moveX, scale: 1.15 }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-between h-full pt-8">
          {/* Main layout Header split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="font-mono text-xs text-brand-orange uppercase tracking-widest font-bold block mb-2"
              >
                // NUESTRA DIFERENCIA RADICAL
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-poppins text-3xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter"
              >
                No vendemos software. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-tech-cyan">
                  Creamos empresas que funcionan mejor.
                </span>
              </motion.h2>
            </div>
            <div>
              <p className="font-poppins text-sm md:text-base text-gray-300 font-bold leading-relaxed">
                Cada proyecto está diseñado para generar un retorno real sobre la inversión. Menos trabajo manual, más ventas recurrentes, más productividad diaria y crecimiento sistemático garantizado.
              </p>
            </div>
          </div>

          {/* Core Overlap Graphic centered with slanted badge */}
          <div className="flex flex-col items-center justify-center text-center relative py-12">
            <div className="relative">
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 font-script text-brand-orange text-5xl md:text-7xl font-bold rotate-[-12deg] z-20 drop-shadow-md">
                Growth
              </span>
              <span className="tech-textured text-[100px] md:text-[200px] font-black tracking-tighter drop-shadow-[0_20px_50px_rgba(0,0,0,1)] select-none">
                ROI
              </span>
            </div>

            {/* Insignia Giratoria */}
            <div className="mt-4 transform rotate-2 bg-tech-cyan text-black px-6 py-2.5 font-poppins font-black uppercase tracking-wider text-xs md:text-sm inline-block rounded-md shadow-2xl">
              Scalable Tech / & High Conversion
            </div>
          </div>

          {/* Statistics Grid (4 columns) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
              <span className="text-4xl md:text-5xl font-black text-tech-cyan tracking-tighter italic font-poppins mb-1">+90%</span>
              <p className="font-sans text-xs text-gray-400 uppercase font-black tracking-wider">Procesos automatizados</p>
            </div>

            <div className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
              <span className="text-4xl md:text-5xl font-black text-brand-orange tracking-tighter italic font-poppins mb-1">24/7</span>
              <p className="font-sans text-xs text-gray-400 uppercase font-black tracking-wider">IA trabajando para ti</p>
            </div>

            <div className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
              <span className="text-4xl md:text-5xl font-black text-tech-purple tracking-tighter italic font-poppins mb-1">3X</span>
              <p className="font-sans text-xs text-gray-400 uppercase font-black tracking-wider">Mayor velocidad operativa</p>
            </div>

            <div className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
              <span className="text-4xl md:text-5xl font-black text-white tracking-tighter italic font-poppins mb-1">100%</span>
              <p className="font-sans text-xs text-gray-400 uppercase font-black tracking-wider">Soluciones personalizadas</p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. SECCIÓN 7: CTA DE ALTA CONVERSIÓN CON FONDO DOMINANTE (Máxima legibilidad con backplate enriquecido) */}
      <section className="snap-start h-screen w-full relative overflow-hidden flex items-center justify-center p-6 md:p-12 bg-black">
        {/* Epic High-Tech Center Station Background */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80" 
            alt="Futuristic operations control center network" 
            className="w-full h-full object-cover pointer-events-none select-none opacity-40"
            style={{ x: moveX, y: moveY, scale: 1.15 }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black to-black/80" />
        </div>

        {/* Elegant rich glass backplate to ensure absolute perfect text readability */}
        <div className="relative z-20 w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-950/90 border border-white/20 p-8 md:p-14 rounded-[2.5rem] backdrop-blur-xl max-w-4xl shadow-[0_30px_80px_rgba(0,0,0,0.98)] flex flex-col items-center text-center gap-6"
          >
            <div className="font-poppins uppercase tracking-wider text-tech-cyan text-xs md:text-sm font-black flex items-center gap-2">
              <Flame className="w-5 h-5 text-brand-orange animate-pulse" />
              EL MOMENTO DE ACTUAR ES AHORA
            </div>

            <h2 className="font-poppins text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight uppercase tracking-tighter drop-shadow-md">
              Si tu empresa sigue trabajando igual que hace cinco años, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-tech-cyan">
                ya está perdiendo frente a la competencia.
              </span>
            </h2>

            <p className="font-poppins font-medium text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl drop-shadow">
              La Inteligencia Artificial ya no es el futuro. Es la diferencia exacta entre crecer exponencialmente o quedarse atrás. Empieza hoy mismo a construir una empresa más rentable, más eficiente y preparada para escalar sin límites.
            </p>

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsLeadFormOpen(true)}
                className="px-10 py-5 bg-brand-orange text-white rounded-full font-poppins font-black tracking-widest text-sm md:text-base transition-all duration-300 hover:bg-tech-cyan hover:text-black hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] cursor-pointer uppercase shadow-2xl"
              >
                Agenda tu consultoría estratégica
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. SECCIÓN 8: FOOTER CINEMÁTICO INTEGRAL CON VIDEO DE FONDO */}
      <section className="snap-start h-screen w-full relative overflow-hidden flex flex-col justify-between p-6 md:p-12 bg-black border-t border-white/10">
        {/* Full screen video background featuring hero2.mp4 */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="h-full w-full object-cover"
          >
            <source src="https://vicflix.expandete.cloud/Videos/hero2.mp4" type="video/mp4" />
          </video>
          {/* Soft dark vignette gradient to guarantee absolute perfect text legibility in the footer */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/70" />
        </div>

        {/* Large subtle back branding text "STRATX" */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
          <span className="text-[30vw] font-black font-poppins text-stroke tracking-tighter text-white">
            STRATX
          </span>
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col justify-between h-full">
          {/* Top category label */}
          <div className="pt-8">
            <span className="font-poppins font-black text-xs text-tech-cyan tracking-[0.2em] uppercase">MÁXIMA EFICIENCIA</span>
          </div>

          {/* Core Expándete Presentation layout */}
          <div className="my-auto flex flex-col items-center justify-center text-center gap-6">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-cyan via-tech-purple to-brand-orange font-poppins font-black text-5xl md:text-8xl tracking-tighter leading-none mb-4 uppercase">
                Crece con Expándete
              </span>
              <p className="font-poppins font-bold text-base md:text-xl text-white/80 max-w-2xl leading-relaxed">
                Tecnología • Automatización • Inteligencia Artificial • Marketing • Apps <br />
                <span className="text-tech-cyan font-black text-xs md:text-sm tracking-wider uppercase mt-2 block">
                  Todo en un solo equipo de élite.
                </span>
              </p>
            </motion.div>
          </div>

          {/* Final Row */}
          <div className="border-t border-white/10 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left quick links */}
            <div className="flex gap-4 md:gap-6 items-center">
              <span className="font-sans text-xs text-white/40 font-bold mr-2">Sigue la ruta:</span>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/vicrivera31/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-tech-cyan transition-colors duration-300" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
                <a href="https://x.com/cexpandete" target="_blank" rel="noopener noreferrer" className="text-white hover:text-tech-cyan transition-colors duration-300" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
                <a href="https://www.facebook.com/crececonexpandete/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-tech-cyan transition-colors duration-300" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
                <a href="https://www.youtube.com/channel/UCjwwKldn2CDGUB2TzI5XGZg" target="_blank" rel="noopener noreferrer" className="text-white hover:text-tech-cyan transition-colors duration-300" aria-label="Youtube"><Youtube className="w-5 h-5" /></a>
                <a href="https://www.tiktok.com/@crececonexpandete" target="_blank" rel="noopener noreferrer" className="text-white hover:text-tech-cyan transition-colors duration-300 flex items-center" aria-label="TikTok">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.18 1.13 1.2 2.7 1.94 4.34 2.06v3.74c-1.46-.07-2.91-.56-4.14-1.39-.74-.5-1.37-1.15-1.85-1.9v8.32c.04 1.93-.57 3.89-1.78 5.4-1.39 1.72-3.56 2.69-5.75 2.58-2.67-.13-5.11-1.77-6.26-4.19-1.33-2.82-.69-6.32 1.55-8.41 1.6-1.5 3.86-2.18 6.01-1.78v3.83c-1.18-.32-2.47-.07-3.42.72-.98.81-1.42 2.15-1.13 3.39.29 1.27 1.41 2.24 2.72 2.34 1.34.1 2.62-.64 3.16-1.87.19-.44.27-.92.26-1.4V0z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right quick contact & copyright info */}
            <div className="text-center md:text-right flex flex-col gap-2 font-sans font-black">
              <button 
                onClick={() => setIsLeadFormOpen(true)} 
                className="text-xs text-white/60 hover:text-tech-cyan cursor-pointer uppercase transition-colors duration-300 font-black text-center md:text-right"
              >
                Agendar Consultoría: Empezar Diagnóstico
              </button>
              <span className="text-[10px] text-white/30 uppercase tracking-widest">
                © 2026 NextGen Strategy & Expándete. Hecho con fuego digital.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FORMULARIO MODAL DE CALIFICACIÓN ULTRA-PREMIUM */}
      {isLeadFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative max-w-xl w-full bg-zinc-950 border border-white/20 p-6 md:p-8 rounded-[2.5rem] shadow-[0_0_50px_rgba(112,0,255,0.25)] my-8"
          >
            {/* Close button */}
            <button 
              onClick={resetForm}
              className="absolute top-6 right-6 text-white/50 hover:text-white cursor-pointer transition-colors p-2 rounded-full hover:bg-white/10"
              aria-label="Cerrar formulario"
            >
              <X className="w-5 h-5" />
            </button>

            {!formSubmitted ? (
              <form onSubmit={handleNextStep} className="flex flex-col gap-6">
                <div>
                  <span className="font-mono text-[10px] text-tech-cyan tracking-[0.25em] uppercase font-bold block mb-1">
                    // CALIFICACIÓN ESTRATÉGICA ELITE
                  </span>
                  <h3 className="font-poppins font-black text-2xl md:text-3xl text-white uppercase tracking-tight">
                    Prepara tu Escala
                  </h3>
                  <p className="font-sans text-xs text-gray-400 font-bold mt-1">
                    Completa este diagnóstico rápido para calificar tu negocio y enrutarte directo a nuestros embudos de ventas personalizados.
                  </p>
                </div>

                {/* Progress bar */}
                <div className="flex items-center gap-2">
                  <div className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${formStep >= 1 ? 'bg-tech-cyan' : 'bg-white/10'}`} />
                  <div className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${formStep >= 2 ? 'bg-brand-orange' : 'bg-white/10'}`} />
                  <span className="font-mono text-[10px] text-white/50 font-bold uppercase ml-2">Paso {formStep} de 2</span>
                </div>

                {/* STEP 1: Contact Information */}
                {formStep === 1 && (
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="nombre" className="font-poppins font-black text-xs text-white/80 uppercase tracking-wider">Tu Nombre Completo *</label>
                      <input 
                        type="text" 
                        id="nombre"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleInputChange}
                        placeholder="Ej. Víctor Rivera"
                        className="w-full bg-black/60 border border-white/15 px-4 py-3 rounded-xl text-white font-sans text-sm focus:border-tech-cyan focus:outline-none transition-all duration-300 placeholder:text-white/20 font-bold"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="whatsapp" className="font-poppins font-black text-xs text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                        WhatsApp de Contacto *
                        <span className="text-[10px] font-mono text-tech-cyan lowercase font-bold">(con código de país)</span>
                      </label>
                      <input 
                        type="tel" 
                        id="whatsapp"
                        name="whatsapp"
                        required
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        placeholder="Ej. +52 1 55 1234 5678"
                        className="w-full bg-black/60 border border-white/15 px-4 py-3 rounded-xl text-white font-sans text-sm focus:border-tech-cyan focus:outline-none transition-all duration-300 placeholder:text-white/20 font-bold"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="font-poppins font-black text-xs text-white/80 uppercase tracking-wider">Email Corporativo *</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Ej. contacto@tuempresa.com"
                        className="w-full bg-black/60 border border-white/15 px-4 py-3 rounded-xl text-white font-sans text-sm focus:border-tech-cyan focus:outline-none transition-all duration-300 placeholder:text-white/20 font-bold"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="empresa" className="font-poppins font-black text-xs text-white/80 uppercase tracking-wider">Nombre de tu Empresa / Proyecto</label>
                      <input 
                        type="text" 
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        placeholder="Ej. Expándete Digital"
                        className="w-full bg-black/60 border border-white/15 px-4 py-3 rounded-xl text-white font-sans text-sm focus:border-tech-cyan focus:outline-none transition-all duration-300 placeholder:text-white/20 font-bold"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={!formData.nombre || !formData.whatsapp || !formData.email}
                      className="mt-4 w-full py-4 bg-gradient-to-r from-tech-purple to-tech-cyan rounded-xl text-black font-poppins font-black text-sm tracking-wider uppercase hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] disabled:opacity-50 disabled:pointer-events-none transition-all duration-300 cursor-pointer text-center"
                    >
                      Continuar Diagnóstico
                    </button>
                  </div>
                )}

                {/* STEP 2: Qualification (Sales Funnel Data) */}
                {formStep === 2 && (
                  <div className="flex flex-col gap-5">
                    {/* Monthly revenue options */}
                    <div className="flex flex-col gap-2">
                      <span className="font-poppins font-black text-xs text-white/80 uppercase tracking-wider">
                        ¿Cuál es tu facturación mensual aproximada? *
                      </span>
                      <div className="grid grid-cols-2 gap-2.5">
                        {[
                          'Menos de $2k USD / mes',
                          '$2k a $10k USD / mes',
                          '$10k a $50k USD / mes',
                          'Más de $50k USD / mes'
                        ].map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => selectOption('facturacion', option)}
                            className={`p-3 border text-left rounded-xl font-sans text-xs font-bold transition-all duration-300 cursor-pointer ${
                              formData.facturacion === option 
                                ? 'bg-tech-cyan/15 border-tech-cyan text-tech-cyan' 
                                : 'bg-black/40 border-white/10 text-white/70 hover:border-white/25 hover:text-white'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Bottleneck/Obstacle options */}
                    <div className="flex flex-col gap-2">
                      <span className="font-poppins font-black text-xs text-white/80 uppercase tracking-wider">
                        ¿Cuál es tu mayor obstáculo actual? *
                      </span>
                      <div className="flex flex-col gap-2">
                        {[
                          'Necesito automatizar mis procesos operativos',
                          'Quiero integrar Inteligencia Artificial en mi negocio',
                          'Necesito conseguir más clientes / aumentar ventas',
                          'Necesito una App o Plataforma digital a medida'
                        ].map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => selectOption('obstaculo', option)}
                            className={`p-3 border text-left rounded-xl font-sans text-xs font-bold transition-all duration-300 cursor-pointer ${
                              formData.obstaculo === option 
                                ? 'bg-brand-orange/15 border-brand-orange text-brand-orange' 
                                : 'bg-black/40 border-white/10 text-white/70 hover:border-white/25 hover:text-white'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Navigation buttons */}
                    <div className="grid grid-cols-3 gap-3 mt-2">
                      <button
                        type="button"
                        onClick={() => setFormStep(1)}
                        className="py-3.5 border border-white/20 text-white hover:bg-white/10 font-poppins font-black text-xs uppercase tracking-wider rounded-xl transition-all duration-300 cursor-pointer text-center animate-pulse"
                      >
                        Atrás
                      </button>
                      <button
                        type="submit"
                        disabled={!formData.facturacion || !formData.obstaculo || isSubmitting}
                        className="col-span-2 py-3.5 bg-brand-orange text-white hover:bg-tech-cyan hover:text-black font-poppins font-black text-xs uppercase tracking-widest rounded-xl transition-all duration-300 cursor-pointer text-center hover:shadow-[0_0_20px_rgba(242,125,38,0.4)] disabled:opacity-50 disabled:pointer-events-none"
                      >
                        {isSubmitting ? 'Enviando...' : 'Enviar & Obtener Plan'}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              /* SUCCESS STATE - PASS TO SALES FUNNELS */
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center text-center gap-6 py-4"
              >
                <div className="w-16 h-16 bg-tech-cyan/20 border border-tech-cyan rounded-full flex items-center justify-center animate-pulse">
                  <CheckCircle className="w-8 h-8 text-tech-cyan" />
                </div>

                <div>
                  <span className="font-mono text-[10px] text-tech-cyan tracking-[0.25em] uppercase font-bold block mb-1">
                    // REGISTRO DE ALTO IMPACTO COMPLETADO
                  </span>
                  <h3 className="font-poppins font-black text-2xl md:text-3xl text-white uppercase tracking-tight">
                    ¡Calificación Exitosa!
                  </h3>
                  <p className="font-sans text-xs text-gray-300 font-bold mt-2 max-w-md">
                    ¡Excelente decisión, <span className="text-tech-cyan">{formData.nombre}</span>! Hemos analizado tus respuestas. Tu obstáculo principal es: <span className="text-brand-orange">{formData.obstaculo}</span>.
                  </p>
                  <p className="font-sans text-xs text-gray-400 font-bold mt-2 max-w-sm mx-auto">
                    Para integrarte en nuestro embudo de ventas inmediato y agendar la consultoría gratuita de escala, presiona el botón de abajo para enviar tus datos directamente a WhatsApp.
                  </p>
                </div>

                <div className="flex flex-col gap-3 w-full mt-4">
                  <motion.a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-tech-purple to-tech-cyan text-black font-poppins font-black text-sm tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300 text-center"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Datos & Ir a WhatsApp
                  </motion.a>

                  <button
                    onClick={resetForm}
                    className="py-3 text-white/50 hover:text-white hover:bg-white/5 font-mono text-xs uppercase tracking-widest rounded-xl transition-all duration-300 cursor-pointer text-center"
                  >
                    Cerrar Diagnóstico
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}

      {/* OVERLAY DE DETALLES DE SERVICIO DESCRIPTIVO Y PRECIOS */}
      {selectedService !== null && (() => {
        const service = SERVICES_DATA.find(s => s.id === selectedService);
        if (!service) return null;
        return (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-xl flex flex-col justify-start">
            <div className="min-h-screen w-full flex flex-col justify-between relative p-6 md:p-12 max-w-7xl mx-auto">
              {/* Header Navegación */}
              <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-8">
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex items-center gap-2 text-white/60 hover:text-white font-sans text-xs uppercase tracking-widest font-black transition-all cursor-pointer group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Volver a Soluciones
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-white/50 hover:text-white cursor-pointer transition-colors p-2 rounded-full hover:bg-white/10"
                  aria-label="Cerrar detalles"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Contenido Principal Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
                {/* Columna Izquierda: Imagen, Título y Costo */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  {/* Ilustrativo del Servicio */}
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                      {getIconComponent(service.icon)}
                      <span className="font-mono text-[10px] text-white/90 font-bold uppercase tracking-wider">
                        {service.title}
                      </span>
                    </div>
                  </div>

                  {/* Título de Impacto */}
                  <div className="flex flex-col gap-2">
                    <h2 className="tech-textured text-3xl md:text-5xl font-black uppercase leading-tight">
                      {service.title}
                    </h2>
                    <p className={`font-poppins font-bold text-sm md:text-base ${service.themeColor} tracking-tight`}>
                      {service.tagline}
                    </p>
                  </div>

                  {/* Caja de Precios / Estructura de Costos */}
                  <div className={`p-6 md:p-8 rounded-3xl border ${service.borderAccent} ${service.bgAccent} backdrop-blur-md relative overflow-hidden flex flex-col gap-4 shadow-[0_0_40px_rgba(0,0,0,0.5)]`}>
                    <div className="absolute top-0 right-0 p-3 opacity-10">
                      <DollarSign className="w-24 h-24 text-white" />
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[9px] text-white/50 tracking-[0.25em] uppercase font-bold">
                        // ESTRUCTURA DE INVERSIÓN REAL
                      </span>
                      <h4 className="font-poppins font-black text-lg md:text-2xl text-white uppercase">
                        {service.realPrice.range}
                      </h4>
                    </div>

                    <p className="font-sans text-xs md:text-sm text-white/80 leading-relaxed font-bold">
                      {service.realPrice.detail}
                    </p>

                    <div className="border-t border-white/10 pt-4 flex flex-col gap-2">
                      <span className="font-mono text-[9px] text-brand-orange tracking-wider uppercase font-bold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        Comparativa de Mercado:
                      </span>
                      <p className="font-sans text-xs text-white/60 leading-relaxed italic">
                        {service.realPrice.comparison}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Columna Derecha: Descripción detallada y Beneficios */}
                <div className="lg:col-span-7 flex flex-col gap-8">
                  {/* Sobre el Servicio */}
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-[10px] text-tech-cyan tracking-[0.2em] uppercase font-bold">
                      // PERSPECTIVA GENERAL
                    </span>
                    <h3 className="font-poppins font-black text-xl md:text-2xl text-white uppercase">
                      ¿Cómo funciona y cómo te beneficia?
                    </h3>
                    <p className="font-poppins text-sm md:text-base text-white/80 leading-relaxed font-bold">
                      {service.description}
                    </p>
                  </div>

                  {/* Beneficios de Élite Checklist */}
                  <div className="flex flex-col gap-4">
                    <span className="font-mono text-[10px] text-tech-purple tracking-[0.2em] uppercase font-bold">
                      // BENEFICIOS DE ALTO IMPACTO
                    </span>
                    <div className="flex flex-col gap-3.5">
                      {service.benefits.map((benefit, idx) => {
                        const [title, desc] = benefit.split(': ');
                        return (
                          <div
                            key={idx}
                            className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all"
                          >
                            <div className="p-1.5 rounded-lg bg-tech-cyan/10 text-tech-cyan mt-0.5">
                              <Check className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col gap-1">
                              <span className="font-poppins font-black text-xs text-white uppercase tracking-tight">
                                {title}
                              </span>
                              <p className="font-sans text-xs text-white/75 leading-relaxed font-bold">
                                {desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Llamado a la Acción Directo */}
                  <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-zinc-950 to-zinc-900 border border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 mt-4">
                    <div className="flex flex-col gap-1.5 text-center md:text-left">
                      <h4 className="font-poppins font-black text-sm md:text-base text-white uppercase tracking-tight">
                        ¿Listo para implementar esta solución?
                      </h4>
                      <p className="font-sans text-xs text-white/50 font-bold">
                        Agenda hoy tu diagnóstico y recibe un plan estratégico detallado.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedService(null);
                        setIsLeadFormOpen(true);
                      }}
                      className="w-full md:w-auto px-6 py-4 bg-gradient-to-r from-tech-purple to-tech-cyan rounded-xl text-black font-poppins font-black text-xs tracking-wider uppercase hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all duration-300 cursor-pointer text-center"
                    >
                      Calificar Mi Empresa Ahora
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer de navegación interna */}
              <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="font-sans text-[10px] text-white/30 uppercase tracking-widest">
                  NextGen Strategy // Ecosistema Tecnológico de Crecimiento
                </span>
                <button
                  onClick={() => setSelectedService(null)}
                  className="font-sans text-[10px] text-white/60 hover:text-white uppercase tracking-widest font-black transition-colors"
                >
                  [ Cerrar y volver al sitio ]
                </button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* FILTROS SVG PARA EFECTO DESGASTADO */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="rough-edges">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
        </filter>
      </svg>
    </div>
  );
}
