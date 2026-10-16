import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  DollarSign, 
  Percent, 
  Check, 
  ShieldCheck, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  ExternalLink, 
  MessageCircle, 
  Target, 
  Zap, 
  Sliders, 
  Layers, 
  Eye, 
  Filter, 
  Smartphone, 
  Award, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  X, 
  Info,
  Flame,
  HelpCircle,
  BarChart3
} from 'lucide-react';

interface MarketingInteligentePageProps {
  onBackToMain: () => void;
  onNavigateToIaImpacto?: () => void;
  onNavigateToStudio?: () => void;
}

export default function MarketingInteligentePage({
  onBackToMain,
  onNavigateToIaImpacto,
  onNavigateToStudio
}: MarketingInteligentePageProps) {
  // Video hero state
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Showcase modal state
  const [isPhotoLightboxOpen, setIsPhotoLightboxOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Interactive Calculator State
  // Default: $1.000.000 COP (the user's canonical example)
  const [budget, setBudget] = useState<number>(1000000);
  const [campaignGoal, setCampaignGoal] = useState<'whatsapp' | 'landing' | 'ecommerce'>('whatsapp');
  const [platformFocus, setPlatformFocus] = useState<'meta' | 'tiktok' | 'omnichannel'>('meta');

  // Lead capture / proposal modal state
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadForm, setLeadForm] = useState({
    nombre: '',
    empresa: '',
    whatsapp: '',
    rubro: '',
    presupuesto: '$1.000.000 COP',
    notas: ''
  });

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Calculator Math (Exact business logic requested by user)
  // Commission: 30% of total budget
  // Remaining: 70% of total budget
  // Platform Taxes: 20% on the remaining 70% (i.e. 14% of total budget)
  // Net Ad Spend on Platform: Remaining minus taxes (i.e. 56% of total budget)
  const gestionFee = Math.round(budget * 0.30);
  const subtotalPauta = Math.round(budget * 0.70);
  const taxesFee = Math.round(subtotalPauta * 0.20);
  const netAdSpend = subtotalPauta - taxesFee;

  // Formatting helpers
  const formatCOP = (num: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(num);
  };

  // Projected benchmark estimates
  const estimatedReachMin = Math.round(netAdSpend * 0.08);
  const estimatedReachMax = Math.round(netAdSpend * 0.16);
  const estimatedClicksMin = Math.round(netAdSpend * 0.002);
  const estimatedClicksMax = Math.round(netAdSpend * 0.0045);
  const estimatedLeadsMin = Math.max(12, Math.round(netAdSpend * 0.0002));
  const estimatedLeadsMax = Math.max(25, Math.round(netAdSpend * 0.00048));

  const officialPhone = "573045751648"; // Expándete official WhatsApp: +57 304 575 1648

  // Generate customized WhatsApp query message based on calculator
  const generateWhatsAppUrl = (customBudget = budget) => {
    const customGestion = Math.round(customBudget * 0.30);
    const customSubtotal = Math.round(customBudget * 0.70);
    const customTaxes = Math.round(customSubtotal * 0.20);
    const customNet = customSubtotal - customTaxes;

    const msg = `¡Hola Expándete! Deseo estructurar una campaña de Publicidad y Pauta Digital (Marketing Inteligente):
• Presupuesto Total Deseado: ${formatCOP(customBudget)}
• Desglose estimado:
  - Gestión y Optimización (30%): ${formatCOP(customGestion)}
  - Impuestos de Plataforma (20% sobre restante): ${formatCOP(customTaxes)}
  - Inversión Neta Directa en Anuncios: ${formatCOP(customNet)}
• Objetivo: ${campaignGoal === 'whatsapp' ? 'Leads y Ventas a WhatsApp' : campaignGoal === 'landing' ? 'Tráfico a Landing Page' : 'Ventas E-commerce'}
• Plataforma: ${platformFocus === 'meta' ? 'Meta Ads (Instagram / Facebook)' : platformFocus === 'tiktok' ? 'TikTok Ads' : 'Ecosistema Omnicanal'}

¿Podemos coordinar la estructuración de la campaña?`;

    return `https://wa.me/${officialPhone}?text=${encodeURIComponent(msg)}`;
  };

  const handleTogglePlay = () => {
    if (!heroVideoRef.current) return;
    if (isPlaying) {
      heroVideoRef.current.pause();
      setIsPlaying(false);
    } else {
      heroVideoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleToggleMute = () => {
    if (!heroVideoRef.current) return;
    heroVideoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `¡Hola Expándete! Deseo cotizar el servicio de Marketing Inteligente & Pauta Digital:
• Nombre: ${leadForm.nombre}
• Empresa: ${leadForm.empresa || 'No especificada'}
• WhatsApp: ${leadForm.whatsapp}
• Rubro/Servicio: ${leadForm.rubro || 'General'}
• Presupuesto Estimado: ${leadForm.presupuesto}
• Notas: ${leadForm.notas || 'Sin notas adicionales'}

Quiero agendar la estructuración de mis campañas publicitarias.`;

    window.open(`https://wa.me/${officialPhone}?text=${encodeURIComponent(message)}`, '_blank');
    setIsLeadModalOpen(false);
  };

  const FAQS_DATA = [
    {
      q: "¿Cómo funciona el esquema de comisión del 30% más impuestos?",
      a: `Trabajamos con transparencia absoluta bajo un modelo de éxito compartido:
Por ejemplo, si manejas un presupuesto total de $1.000.000 COP:
1. $300.000 COP (30%) corresponden a nuestra gestión integral: estrategia, neuro-copywriting, segmentación con IA, creación de filtros anti-curiosos y optimización diaria 24/7.
2. Sobre los $700.000 COP restantes, se contempla el 20% correspondiente a impuestos y retenciones de plataformas publicitarias ($140.000 COP).
3. El valor restante ($560.000 COP) se destina 100% neto a la pauta en las plataformas (Meta, TikTok o Google) para comprar tráfico de alta intención.`
    },
    {
      q: "¿Cuál es la campaña mínima que manejan?",
      a: "La campaña más económica que manejamos parte desde $800.000 COP de presupuesto total. Este umbral es el mínimo estadístico necesario para que los algoritmos de Meta o TikTok puedan salir de la fase de aprendizaje, probar múltiples creativos y entregarte prospectos reales con intención de compra."
    },
    {
      q: "¿Ustedes se encargan de los videos e imágenes de los anuncios?",
      a: "Sí. Analizamos tu oferta y creamos o adaptamos creativos publicitarios diseñados específicamente para retener la atención (ganchos visuales de 3 segundos, composiciones de alto contraste y copys basados en neuro-ventas). También podemos integrar producciones audiovisuales hiper-realistas generadas con IA a través de nuestro Expándete Studio."
    },
    {
      q: "¿En cuánto tiempo se activa mi campaña y cuándo veo resultados?",
      a: "El proceso de estructuración estratégica, segmentación de audiencias y configuración de filtros toma entre 2 y 4 días hábiles. Una vez que Meta/TikTok aprueban los anuncios, los primeros mensajes de prospectos calificados suelen comenzar a entrar en tu WhatsApp o CRM en las primeras 24 a 48 horas de emisión continua."
    },
    {
      q: "¿Quién es el dueño de la cuenta publicitaria y los datos de clientes?",
      a: "Tú eres el dueño absoluto. Todo se configura y opera sobre tu propio Administrador Comercial (Meta Business Suite / TikTok Ads Manager) o bajo cuentas transparentes con acceso total. Tú ves exactamente cuánto dinero se consume en tiempo real y conservas todos los datos de clientes y píxeles para siempre."
    },
    {
      q: "¿Qué son los 'filtros anti-curiosos' y por qué son tan importantes?",
      a: "Muchas agencias generan leads baratos pero sin dinero que solo preguntan '¿precio?' y nunca compran. Nosotros diseñamos filtros en el anuncio, preguntas de calificación en WhatsApp y copys disuasorios para alejar a curiosos y hacer que a tu equipo comercial solo le lleguen prospectos que entienden tu propuesta de valor y tienen capacidad de pago."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050608] text-white selection:bg-brand-orange selection:text-black font-sans relative overflow-x-hidden">
      {/* Background Ambience & Cyber Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-brand-orange/10 blur-[150px]" />
        <div className="absolute top-[35%] left-[-10%] w-[550px] h-[550px] rounded-full bg-tech-cyan/10 blur-[160px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      {/* TOP SCARCITY ANNOUNCEMENT BAR */}
      <div className="bg-gradient-to-r from-brand-orange via-yellow-500 to-brand-orange text-black px-3 py-2 text-center text-xs font-mono font-black tracking-wide relative z-50 flex items-center justify-center flex-wrap gap-2 shadow-lg border-b border-brand-orange/40">
        <span className="flex items-center gap-1.5 uppercase tracking-wider">
          <Flame className="w-4 h-4 text-black animate-bounce shrink-0" />
          ESTRUCTURACIÓN Y PAUTA DIGITAL ACTIVA • CUPOS DE GESTIÓN MENSUAL LIMITADOS
        </span>
        <span className="hidden md:inline text-black/60">•</span>
        <span className="font-sans font-bold text-black/90">
          Campañas desde $800.000 COP con Transparencia 100%
        </span>
      </div>

      {/* TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-[#050608]/90 backdrop-blur-xl border-b border-white/10 px-4 md:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo & Back button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToMain}
              className="flex items-center gap-1.5 text-xs font-mono font-bold text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-full transition-all cursor-pointer"
              aria-label="Volver a la página principal de Expándete"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Volver a Expándete</span>
              <span className="sm:hidden">Inicio</span>
            </button>

            <div className="h-4 w-[1px] bg-white/20 hidden md:block" />

            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange"></span>
              </span>
              <span className="font-poppins font-black text-sm md:text-base tracking-wider text-white">
                MARKETING <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-yellow-400 to-tech-cyan">INTELIGENTE</span>
              </span>
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-poppins text-gray-300 font-medium">
            <a href="#calculadora" className="text-brand-orange font-bold hover:text-yellow-400 transition-colors flex items-center gap-1">
              <Sliders className="w-3 h-3" /> Simulador de Pauta
            </a>
            <a href="#metodologia" className="hover:text-tech-cyan transition-colors">Estructura & Filtros</a>
            <a href="#multimedia" className="hover:text-tech-cyan transition-colors">Creativos & Video</a>
            <a href="#paquetes" className="hover:text-tech-cyan transition-colors">Planes</a>
            <a href="#faq" className="hover:text-tech-cyan transition-colors">Preguntas</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5">
            {onNavigateToStudio && (
              <button
                onClick={onNavigateToStudio}
                className="hidden xl:flex items-center gap-1.5 text-[11px] font-mono font-bold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-400/30 px-3 py-1.5 rounded-full transition-all cursor-pointer"
              >
                <Sparkles className="w-3 h-3" />
                <span>Expándete Studio</span>
              </button>
            )}

            {onNavigateToIaImpacto && (
              <button
                onClick={onNavigateToIaImpacto}
                className="hidden md:flex items-center gap-1.5 text-[11px] font-mono font-bold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/30 px-3 py-1.5 rounded-full transition-all cursor-pointer"
              >
                <span>IA IMPACTO</span>
              </button>
            )}

            <button
              onClick={() => setIsLeadModalOpen(true)}
              className="bg-gradient-to-r from-brand-orange to-yellow-500 hover:from-yellow-400 hover:to-brand-orange text-black font-poppins font-black text-xs uppercase tracking-wider px-4 py-2 rounded-full shadow-[0_0_20px_rgba(242,125,38,0.4)] hover:shadow-[0_0_25px_rgba(242,125,38,0.6)] transition-all transform hover:scale-[1.03] active:scale-[0.98] flex items-center gap-1.5 cursor-pointer"
            >
              <span>Estructurar Campaña</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION WITH BACKGROUND VIDEO PUFACE.MP4 */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-4 md:px-8 py-16 overflow-hidden">
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={heroVideoRef}
            src="https://vicflix.expandete.cloud/Expandete_videos/Puface.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.15] scale-105 transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/75 to-[#050608]/85" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050608]/60 to-[#050608]" />
        </div>

        {/* Video Control Bar floating bottom-right */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono text-gray-300">
          <button
            onClick={handleTogglePlay}
            className="hover:text-white transition-colors p-1"
            title={isPlaying ? "Pausar video de fondo" : "Reproducir video"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-brand-orange" />}
          </button>
          <div className="h-3 w-[1px] bg-white/20" />
          <button
            onClick={handleToggleMute}
            className="hover:text-white transition-colors p-1"
            title={isMuted ? "Activar audio" : "Silenciar"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-gray-400" /> : <Volume2 className="w-3.5 h-3.5 text-brand-orange" />}
          </button>
          <span className="text-[10px] hidden sm:inline text-gray-400 font-mono">Puface Commercial Ad</span>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 pt-4">
          {/* Unboxed Metadata Kicker (Zero-Pill Discipline) */}
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-brand-orange uppercase">
            <span>📲 Publicidad y Pauta Digital</span>
            <span aria-hidden="true" className="text-gray-600">·</span>
            <span className="text-tech-cyan">Meta Ads / TikTok / Google</span>
            <span aria-hidden="true" className="text-gray-600">·</span>
            <span className="text-amber-300">Gestión 30% + Impuestos</span>
          </div>

          {/* Main Title */}
          <h1 className="font-poppins font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.12]">
            Estructuramos tu Pauta Digital <br className="hidden sm:block" />
            para <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-yellow-400 to-tech-cyan">Maximizar la Conversión</span> de tu Presupuesto.
          </h1>

          {/* User's Exact Value Proposition Copy */}
          <div className="max-w-3xl mx-auto p-5 sm:p-6 rounded-3xl bg-zinc-950/80 backdrop-blur-xl border border-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.8)] text-left sm:text-center space-y-3">
            <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed">
              Manejamos directamente la publicidad en redes sociales. <strong className="text-white">Nosotros nos encargamos de estructurar y organizar las campañas, segmentar los públicos, crear filtros y optimizar la inversión</strong> para buscar la mayor conversión posible con el presupuesto disponible.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-mono text-gray-400 pt-1 border-t border-white/10">
              <span className="text-emerald-400 font-bold">✓ Comisión transparente del 30%</span>
              <span aria-hidden="true">·</span>
              <span className="text-cyan-300 font-bold">✓ Campañas desde $800.000 COP</span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-300 font-bold">✓ Cero presupuesto desperdiciado</span>
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="#calculadora"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-brand-orange via-yellow-500 to-brand-orange hover:from-yellow-400 hover:to-brand-orange text-black font-poppins font-black text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(242,125,38,0.5)] transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sliders className="w-4 h-4 text-black" />
              <span>Simular mi Campaña (Calculadora)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-poppins font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Hablar con Especialista de Pauta</span>
            </a>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-black/60 border border-white/10">
              <span className="text-[10px] font-mono text-gray-400 block uppercase">Comisión de Gestión</span>
              <strong className="text-white text-lg font-poppins font-black block mt-0.5">30% Neto</strong>
              <span className="text-[11px] text-brand-orange block">Estrategia & Optimización diaria</span>
            </div>

            <div className="p-4 rounded-2xl bg-black/60 border border-white/10">
              <span className="text-[10px] font-mono text-gray-400 block uppercase">Inversión Mínima</span>
              <strong className="text-white text-lg font-poppins font-black block mt-0.5">$800.000 COP</strong>
              <span className="text-[11px] text-tech-cyan block">Umbral de aprendizaje algorítmico</span>
            </div>

            <div className="p-4 rounded-2xl bg-black/60 border border-white/10">
              <span className="text-[10px] font-mono text-gray-400 block uppercase">Canales de Pauta</span>
              <strong className="text-white text-lg font-poppins font-black block mt-0.5">Meta & TikTok</strong>
              <span className="text-[11px] text-emerald-400 block">+ Google Ads & YouTube</span>
            </div>

            <div className="p-4 rounded-2xl bg-black/60 border border-white/10">
              <span className="text-[10px] font-mono text-gray-400 block uppercase">Enfoque de Campaña</span>
              <strong className="text-white text-lg font-poppins font-black block mt-0.5">Conversión</strong>
              <span className="text-[11px] text-yellow-300 block">Filtros anti-curiosos a WhatsApp</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE BUDGET CALCULATOR: EL SIMULADOR TRANSPARENTE DE PAUTA */}
      <section id="calculadora" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-brand-orange uppercase">
            <span>// SIMULADOR DE INVERSIÓN TRANSPARENTE</span>
          </div>
          <h2 className="font-poppins font-black text-2xl sm:text-4xl text-white">
            Calcula exactamente cómo se invierte cada peso de tu presupuesto
          </h2>
          <p className="font-sans text-gray-300 text-xs sm:text-sm leading-relaxed">
            Sin letras pequeñas ni cobros ocultos. Ingresa el presupuesto total que deseas destinar a tu campaña y conoce la distribución matemática exacta: nuestra gestión (30%), impuestos de plataforma (20% sobre el remanente) y la inversión neta directa en anuncios.
          </p>
        </div>

        {/* Main Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (Left) */}
          <div className="lg:col-span-6 rounded-3xl bg-zinc-950 border border-white/15 p-6 sm:p-8 space-y-6 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-gray-400 uppercase font-bold">1. Define tu Presupuesto Total</span>
                <h3 className="font-poppins font-black text-xl text-white mt-0.5">¿Cuánto deseas invertir?</h3>
              </div>
              <span className="font-mono text-xs text-brand-orange font-bold">
                Mínimo: $800.000 COP
              </span>
            </div>

            {/* Current Budget Display */}
            <div className="p-4 rounded-2xl bg-black/60 border border-brand-orange/40 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-gray-400 block uppercase">Presupuesto Seleccionado</span>
                <span className="font-poppins font-black text-2xl sm:text-3xl text-white">
                  {formatCOP(budget)}
                </span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-brand-orange/15 border border-brand-orange/30 text-brand-orange font-mono text-xs font-bold">
                COP Total
              </div>
            </div>

            {/* Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-gray-400">
                <span>$800.000 (Mínimo)</span>
                <span>$10.000.000+</span>
              </div>
              <input
                type="range"
                min="800000"
                max="10000000"
                step="100000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-brand-orange"
              />
            </div>

            {/* Quick Presets */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-gray-400 block">Montos Frecuentes recomendados:</span>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {[800000, 1000000, 1500000, 2500000, 5000000].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setBudget(preset)}
                    className={`py-2 px-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                      budget === preset
                        ? 'bg-brand-orange text-black font-black shadow-md shadow-brand-orange/30'
                        : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10'
                    }`}
                  >
                    ${preset >= 1000000 ? `${preset / 1000000}M` : `${preset / 1000}k`}
                  </button>
                ))}
              </div>
            </div>

            {/* Goal Selector */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <span className="text-xs font-mono text-gray-400 block uppercase font-bold">2. Objetivo Principal de Conversión</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'whatsapp', label: 'Leads a WhatsApp', desc: 'Filtro anti-curiosos y cierre directo' },
                  { id: 'landing', label: 'Tráfico a Landing', desc: 'Captura en página de alta velocidad' },
                  { id: 'ecommerce', label: 'Ventas E-commerce', desc: 'Retargeting dinámico de catálogo' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCampaignGoal(item.id as any)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      campaignGoal === item.id
                        ? 'bg-tech-cyan/15 border-tech-cyan text-white shadow-sm'
                        : 'bg-black/40 border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    <span className="font-poppins font-bold text-xs block text-white">{item.label}</span>
                    <span className="text-[10px] text-gray-400 block mt-0.5">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Platform Selector */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <span className="text-xs font-mono text-gray-400 block uppercase font-bold">3. Plataformas Publicitarias</span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'meta', label: 'Meta Ads', sub: 'Instagram & Facebook' },
                  { id: 'tiktok', label: 'TikTok Ads', sub: 'Videos nativos virales' },
                  { id: 'omnichannel', label: 'Omnicanal', sub: 'Meta + TikTok + Google' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setPlatformFocus(item.id as any)}
                    className={`p-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                      platformFocus === item.id
                        ? 'bg-amber-400/15 border-amber-400 text-white font-bold'
                        : 'bg-black/40 border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    <span className="font-poppins text-xs block text-white">{item.label}</span>
                    <span className="text-[9px] text-gray-400 block">{item.sub}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Breakdown & Results Column (Right) */}
          <div className="lg:col-span-6 space-y-6">
            {/* The Mathematical Breakdown Card */}
            <div className="rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-brand-orange/40 p-6 sm:p-8 space-y-6 shadow-[0_10px_50px_rgba(242,125,38,0.15)] relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-mono text-brand-orange uppercase font-bold tracking-wider">Desglose Matemático Exacto</span>
                  <h3 className="font-poppins font-black text-xl text-white">Distribución de tu Presupuesto</h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center text-brand-orange">
                  <Percent className="w-5 h-5" />
                </div>
              </div>

              {/* Progress Visual Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] font-mono text-gray-400">
                  <span>Gestión Expándete (30%)</span>
                  <span>Impuestos (14%)</span>
                  <span>Pauta Neta en Anuncios (56%)</span>
                </div>
                <div className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden flex">
                  <div style={{ width: '30%' }} className="bg-brand-orange h-full" title="30% Gestión" />
                  <div style={{ width: '14%' }} className="bg-purple-500 h-full" title="14% Impuestos (20% del restante)" />
                  <div style={{ width: '56%' }} className="bg-emerald-400 h-full" title="56% Inversión Neta" />
                </div>
              </div>

              {/* The 3 Concrete Buckets */}
              <div className="space-y-3.5">
                {/* 1. Gestión Expándete (30%) */}
                <div className="p-4 rounded-2xl bg-black/60 border border-brand-orange/30 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
                      <strong className="text-white font-poppins text-sm font-bold">1. Gestión y Optimización (30%)</strong>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
                      Estructuración de campaña, copywriting con neuro-ventas, segmentación avanzada de públicos, filtros anti-curiosos y optimización diaria de presupuesto.
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-poppins font-black text-lg text-brand-orange block">
                      {formatCOP(gestionFee)}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500">30% del total</span>
                  </div>
                </div>

                {/* Subtotal reminder box */}
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span>Presupuesto Restante para Pauta:</span>
                  <span className="text-white font-bold">{formatCOP(subtotalPauta)} (70%)</span>
                </div>

                {/* 2. Impuestos de Plataforma (20% sobre el restante) */}
                <div className="p-4 rounded-2xl bg-black/60 border border-purple-500/30 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                      <strong className="text-white font-poppins text-sm font-bold">2. Impuestos de Plataformas (20%)</strong>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
                      Gravámenes, retenciones fiscales e IVA de plataformas publicitarias internacionales (Meta Ads / TikTok / Google) calculados sobre los {formatCOP(subtotalPauta)} restantes.
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-poppins font-black text-lg text-purple-400 block">
                      {formatCOP(taxesFee)}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500">20% de {formatCOP(subtotalPauta)}</span>
                  </div>
                </div>

                {/* 3. Inversión Neta Directa en Anuncios */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-black border border-emerald-500/40 flex items-start justify-between gap-4 shadow-lg shadow-emerald-500/10">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <strong className="text-emerald-300 font-poppins text-sm font-bold">3. Inversión Neta en Pauta Directa</strong>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed max-w-sm">
                      <strong className="text-white">Este es el dinero puro que entra a los algoritmos</strong> para mostrar tus anuncios a personas con alta intención de compra.
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-poppins font-black text-xl text-emerald-400 block">
                      {formatCOP(netAdSpend)}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400/70 font-bold">Pauta Activa en Redes</span>
                  </div>
                </div>
              </div>

              {/* Total Check */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-gray-400">Verificación Matemática Total:</span>
                <span className="text-white font-bold">
                  {formatCOP(gestionFee)} + {formatCOP(taxesFee)} + {formatCOP(netAdSpend)} = <strong className="text-brand-orange">{formatCOP(budget)}</strong>
                </span>
              </div>
            </div>

            {/* Projected Impact Benchmarks Card */}
            <div className="rounded-3xl bg-black/60 border border-white/10 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-tech-cyan font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <BarChart3 className="w-4 h-4" /> Proyección Estimada de Alcance y Prospectos
                </span>
                <span className="text-[10px] font-mono text-gray-500">*Basado en benchmarks de Meta/TikTok</span>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] font-mono text-gray-400 block">Alcance Estimado</span>
                  <span className="font-poppins font-black text-sm sm:text-base text-white block mt-0.5">
                    {estimatedReachMin.toLocaleString('es-CO')} - {estimatedReachMax.toLocaleString('es-CO')}
                  </span>
                  <span className="text-[10px] text-gray-500">Personas únicas</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] font-mono text-gray-400 block">Clics de Alta Intención</span>
                  <span className="font-poppins font-black text-sm sm:text-base text-tech-cyan block mt-0.5">
                    {estimatedClicksMin.toLocaleString('es-CO')} - {estimatedClicksMax.toLocaleString('es-CO')}
                  </span>
                  <span className="text-[10px] text-gray-500">Hacia tu embudo</span>
                </div>

                <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                  <span className="text-[10px] font-mono text-emerald-400 block">Leads Calificados</span>
                  <span className="font-poppins font-black text-sm sm:text-base text-emerald-300 block mt-0.5">
                    {estimatedLeadsMin} a {estimatedLeadsMax}+
                  </span>
                  <span className="text-[10px] text-emerald-400/80">Directos a WhatsApp</span>
                </div>
              </div>

              {/* Instant WhatsApp Action Button */}
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-poppins font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-transform hover:scale-[1.02] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Cotizar esta Campaña de {formatCOP(budget)} por WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MULTIMEDIA SHOWCASE: PUFACE VIDEO & FOTO DE SERVICIO */}
      <section id="multimedia" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-tech-cyan uppercase">
            <span>// PRODUCCIÓN AUDIOVISUAL & CREATIVOS GANADORES</span>
          </div>
          <h2 className="font-poppins font-black text-2xl sm:text-4xl text-white">
            Anuncios con Retención Visual Extrema: La Clave del Costo por Lead Bajo
          </h2>
          <p className="font-sans text-gray-300 text-xs sm:text-sm leading-relaxed">
            El algoritmo premia los anuncios que la gente mira hasta el final. No competimos con fotos genéricas de archivo: combinamos producción comercial de alto contraste, ganchos de 3 segundos y psicología de ventas.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Official Service Photo puface1.jpg */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.8)] group">
              <img
                src="https://vicflix.expandete.cloud/Expandete_videos/puface1.jpg"
                alt="Creativo publicitario Expándete Puface"
                className="w-full aspect-[4/3] object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                <div>
                  <span className="font-mono text-[10px] text-brand-orange uppercase font-bold block">Creativo Publicitario Oficial</span>
                  <strong className="text-white font-poppins text-sm block">Composición de Alto Contraste & CTR Elevado</strong>
                </div>
                <button
                  onClick={() => setIsPhotoLightboxOpen(true)}
                  className="p-2 rounded-xl bg-black/70 hover:bg-black text-white border border-white/20 transition-colors cursor-pointer"
                  title="Ver imagen en tamaño completo"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950 border border-white/10 space-y-2">
              <span className="font-mono text-xs text-brand-orange font-bold uppercase block">
                ¿Por qué este tipo de creativo multiplica tus ventas?
              </span>
              <p className="text-xs text-gray-300 leading-relaxed">
                El 80% de los usuarios scrollea sin detenerse. Nuestros creativos integran colores saturados, iluminación cinematográfica y encuadres directos que congelan el pulgar en Instagram, TikTok y Facebook en los primeros 500 milisegundos.
              </p>
            </div>
          </div>

          {/* Right Column: Hero Video Feature Puface.mp4 */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-brand-orange/40 shadow-[0_10px_40px_rgba(242,125,38,0.2)] bg-black">
              <video
                src="https://vicflix.expandete.cloud/Expandete_videos/Puface.mp4"
                controls
                playsInline
                className="w-full aspect-[4/3] object-cover object-center"
              />
              <div className="p-4 bg-zinc-950 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] text-tech-cyan uppercase font-bold block">Video Anuncio Comercial</span>
                  <strong className="text-white font-poppins text-sm block">Reel / TikTok Ad de Conversión Rápida</strong>
                </div>
                <div className="px-3 py-1 rounded-full bg-tech-cyan/10 border border-tech-cyan/30 text-tech-cyan font-mono text-[10px] font-bold uppercase">
                  1080p HD
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950 border border-white/10 space-y-2">
              <span className="font-mono text-xs text-tech-cyan font-bold uppercase block">
                Estructura de Video Ad: Hook, Story & Call To Action
              </span>
              <p className="text-xs text-gray-300 leading-relaxed">
                Cada segundo del video está planeado: Segundo 0-3 (Problema que detiene el scroll), Segundo 4-15 (Demostración de la solución), Segundo 16-30 (Oferta irresistible y llamado a la acción directo a tu canal de ventas).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. METODOLOGÍA: CÓMO ESTRUCTURAMOS, CREAMOS FILTROS Y OPTIMIZAMOS */}
      <section id="metodologia" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-brand-orange uppercase">
            <span>// METODOLOGÍA DE DOMINIO DIGITAL</span>
          </div>
          <h2 className="font-poppins font-black text-2xl sm:text-4xl text-white">
            Nuestros 4 Pilares de Estructuración y Pauta
          </h2>
          <p className="font-sans text-gray-300 text-xs sm:text-sm leading-relaxed">
            No tiramos dinero al azar esperando suerte. Aplicamos un proceso científico para garantizar que cada peso invertido busque la mayor conversión posible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pilar 1 */}
          <div className="p-6 rounded-3xl bg-zinc-950 border border-white/10 flex flex-col justify-between hover:border-brand-orange/40 transition-all duration-300 space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center text-brand-orange font-mono font-black text-lg">
                01
              </div>
              <h3 className="font-poppins font-bold text-lg text-white">
                Estructuración & Organización
              </h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                Diseñamos la arquitectura de campañas por fases: prospección de tráfico frío (TOFU), remarketing dinámico (MOFU) y ofertas de cierre inmediato (BOFU). Nada queda suelto.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-brand-orange">
              ✓ CBO & Escalado Horizontal
            </div>
          </div>

          {/* Pilar 2 */}
          <div className="p-6 rounded-3xl bg-zinc-950 border border-white/10 flex flex-col justify-between hover:border-tech-cyan/40 transition-all duration-300 space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-tech-cyan/15 border border-tech-cyan/30 flex items-center justify-center text-tech-cyan font-mono font-black text-lg">
                02
              </div>
              <h3 className="font-poppins font-bold text-lg text-white">
                Segmentación con IA
              </h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                Públicos personalizados, Lookalikes (similares a tus mejores compradores) y exclusión estricta de audiencias no rentables para no gastar presupuesto en usuarios que no compran.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-tech-cyan">
              ✓ Audiencias de Alto Poder Adquisitivo
            </div>
          </div>

          {/* Pilar 3 */}
          <div className="p-6 rounded-3xl bg-zinc-950 border border-white/10 flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300 space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 font-mono font-black text-lg">
                03
              </div>
              <h3 className="font-poppins font-bold text-lg text-white">
                Filtros Anti-Curiosos
              </h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                Insertamos filtros en los textos, formularios y botones de WhatsApp para repeler a 'curiosos sin presupuesto' y asegurar que tu equipo comercial solo atienda a clientes con dinero y necesidad real.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-amber-400">
              ✓ Menos tiempo perdido, más ventas
            </div>
          </div>

          {/* Pilar 4 */}
          <div className="p-6 rounded-3xl bg-zinc-950 border border-white/10 flex flex-col justify-between hover:border-emerald-400/40 transition-all duration-300 space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400 font-mono font-black text-lg">
                04
              </div>
              <h3 className="font-poppins font-bold text-lg text-white">
                Optimización Diaria
              </h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                Supervisión continua 24/7 de métricas críticas (CPA, CTR, ROAS). Apagamos de inmediato los anuncios de bajo rendimiento y reinyectamos el presupuesto a los creativos ganadores.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-emerald-400">
              ✓ Máxima eficiencia por peso invertido
            </div>
          </div>
        </div>
      </section>

      {/* 5. CANALES Y PLATAFORMAS DOMINADAS */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-tech-cyan uppercase">
            <span>// CANALES PUBLICITARIOS ACTIVOS</span>
          </div>
          <h2 className="font-poppins font-black text-2xl sm:text-4xl text-white">
            Pauta en las Plataformas Donde Están tus Clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Meta Ads */}
          <div className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-brand-orange font-bold uppercase">Instagram & Facebook</span>
              <span className="text-[10px] font-mono text-gray-400">Meta Ads</span>
            </div>
            <h3 className="font-poppins font-bold text-xl text-white">Meta Ads Dominance</h3>
            <p className="font-sans text-xs text-gray-300 leading-relaxed">
              Campañas de mensajes directos a WhatsApp, reels de alto impacto y retargeting agresivo a visitantes web. Ideal para ventas B2C, servicios profesionales y comercios.
            </p>
            <ul className="space-y-1.5 text-xs text-gray-400 border-t border-white/10 pt-3">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-brand-orange" />
                <span>Anuncios Click-to-WhatsApp directo</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-brand-orange" />
                <span>API de Conversiones (CAPI) sin pérdida de datos</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-brand-orange" />
                <span>Públicos de alta intención y Lookalikes</span>
              </li>
            </ul>
          </div>

          {/* TikTok Ads */}
          <div className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-tech-cyan font-bold uppercase">Viral & Dinámico</span>
              <span className="text-[10px] font-mono text-gray-400">TikTok Ads</span>
            </div>
            <h3 className="font-poppins font-bold text-xl text-white">TikTok Ads Growth</h3>
            <p className="font-sans text-xs text-gray-300 leading-relaxed">
              Formatos de video nativo que no parecen publicidad. Costes por mil impresiones (CPM) ultra competitivos y excelente capacidad de enganche con audiencias activas.
            </p>
            <ul className="space-y-1.5 text-xs text-gray-400 border-t border-white/10 pt-3">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-tech-cyan" />
                <span>Spark Ads & Videos de formato nativo</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-tech-cyan" />
                <span>Menor coste por clic que Meta en varios rubros</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-tech-cyan" />
                <span>Embudos rápidos a WhatsApp o Landing</span>
              </li>
            </ul>
          </div>

          {/* Google Ads */}
          <div className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-yellow-400 font-bold uppercase">Búsqueda & Intención</span>
              <span className="text-[10px] font-mono text-gray-400">Google / YouTube</span>
            </div>
            <h3 className="font-poppins font-bold text-xl text-white">Google Ads Precision</h3>
            <p className="font-sans text-xs text-gray-300 leading-relaxed">
              Aparece cuando el usuario escribe en Google exactamente lo que tú vendes. Captura de demanda lista para comprar y anuncios en YouTube para consolidar autoridad.
            </p>
            <ul className="space-y-1.5 text-xs text-gray-400 border-t border-white/10 pt-3">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-yellow-400" />
                <span>Campañas de Búsqueda (Search) de alta intención</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-yellow-400" />
                <span>Palabras clave negativas para evitar gasto inútil</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-yellow-400" />
                <span>Performance Max (PMax) omnicanal</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. COMPARATIVA BRUTAL: AGENCIA TRADICIONAL VS. EXPÁNDETE */}
      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto border-t border-white/10 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="font-mono text-xs text-brand-orange uppercase font-bold tracking-wider">
            // TRANSPARENCIA EXPÁNDETE
          </span>
          <h2 className="font-poppins font-black text-2xl sm:text-3xl text-white">
            ¿Por Qué Nuestro Modelo es Superior a una Agencia Tradicional?
          </h2>
        </div>

        <div className="rounded-3xl bg-zinc-950 border border-white/15 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Agencia Tradicional */}
            <div className="p-6 sm:p-8 space-y-4 bg-red-950/10">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase">
                <X className="w-4 h-4" />
                <span>Agencia Tradicional Convencional</span>
              </div>
              <ul className="space-y-3 text-xs text-gray-400">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Te cobran fees fijos mensuales de $3.000.000+ sin importar si vendes o no.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Reportes en PDF llenos de 'impresiones' y 'likes' que no pagan facturas.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>No filtran a los leads: te llenan el WhatsApp de curiosos sin dinero que te hacen perder el día.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Cuentas publicitarias 'secuestradas': si dejas de pagarles, pierdes tus píxeles y datos.</span>
                </li>
              </ul>
            </div>

            {/* Expándete Marketing Inteligente */}
            <div className="p-6 sm:p-8 space-y-4 bg-emerald-950/15">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                <Check className="w-4 h-4" />
                <span>Expándete Marketing Inteligente</span>
              </div>
              <ul className="space-y-3 text-xs text-gray-200">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Comisión del 30% + impuestos:</strong> alineados con tu presupuesto real desde $800.000 COP.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Filtros anti-curiosos:</strong> solo recibes mensajes de prospectos calificados con intención de compra.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Propiedad 100% tuya:</strong> la cuenta publicitaria y los datos de clientes te pertenecen siempre.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Optimización 24/7 con IA:</strong> apagamos anuncios que no convierten y escalamos los ganadores.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PAQUETES SUGERIDOS Y COTIZACIÓN */}
      <section id="paquetes" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-brand-orange uppercase">
            <span>// PLANES Y ESCALA DE CAMPAÑA</span>
          </div>
          <h2 className="font-poppins font-black text-2xl sm:text-4xl text-white">
            Selecciona tu Nivel de Inversión y Comencemos a Vender
          </h2>
          <p className="font-sans text-gray-300 text-xs sm:text-sm leading-relaxed">
            Todos los planes incluyen estructuración estratégica, segmentación de públicos, redacción de copys persuasivos y optimización diaria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Plan Despegue ($800.000 COP Mínimo) */}
          <div className="rounded-3xl bg-zinc-950 border border-white/15 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono text-gray-400 uppercase font-bold">Campaña Inicial Mínima</span>
              <h3 className="font-poppins font-black text-2xl text-white">Plan Despegue</h3>
              <div className="flex items-baseline gap-1">
                <span className="font-poppins font-black text-3xl text-white">$800.000</span>
                <span className="text-xs font-mono text-gray-400">COP Total</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Ideal para profesionales, marcas emergentes o negocios locales que quieren validar una oferta y generar sus primeros clientes por WhatsApp.
              </p>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-[11px] font-mono space-y-1 text-gray-300">
                <div className="flex justify-between"><span>Gestión (30%):</span> <strong className="text-white">$240.000</strong></div>
                <div className="flex justify-between"><span>Impuestos (20%):</span> <strong className="text-purple-300">$112.000</strong></div>
                <div className="flex justify-between text-emerald-400"><span>Pauta Neta:</span> <strong>$448.000</strong></div>
              </div>
            </div>

            <a
              href={generateWhatsAppUrl(800000)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-poppins font-bold text-xs uppercase tracking-wider text-center transition-colors block cursor-pointer"
            >
              Iniciar con $800.000
            </a>
          </div>

          {/* Plan Escala ($1.500.000 - Más Popular) */}
          <div className="rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-brand-orange/60 p-6 sm:p-8 flex flex-col justify-between space-y-6 relative shadow-[0_0_40px_rgba(242,125,38,0.2)]">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-brand-orange uppercase font-bold">Flujo Constante de Ventas</span>
                <span className="px-2.5 py-0.5 rounded-full bg-brand-orange text-black font-mono text-[10px] font-black uppercase">
                  MÁS RECOMENDADO
                </span>
              </div>
              <h3 className="font-poppins font-black text-2xl text-white">Plan Escala</h3>
              <div className="flex items-baseline gap-1">
                <span className="font-poppins font-black text-3xl text-brand-orange">$1.500.000</span>
                <span className="text-xs font-mono text-gray-400">COP Total</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                El punto dulce para negocios en marcha que necesitan un volumen predecible de cotizaciones diarias y retargeting activo para cerrar clientes indecisos.
              </p>
              <div className="p-3 rounded-xl bg-black/60 border border-brand-orange/30 text-[11px] font-mono space-y-1 text-gray-200">
                <div className="flex justify-between"><span>Gestión (30%):</span> <strong className="text-brand-orange">$450.000</strong></div>
                <div className="flex justify-between"><span>Impuestos (20%):</span> <strong className="text-purple-300">$210.000</strong></div>
                <div className="flex justify-between text-emerald-400"><span>Pauta Neta:</span> <strong>$840.000</strong></div>
              </div>
            </div>

            <a
              href={generateWhatsAppUrl(1500000)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-yellow-500 hover:from-yellow-400 hover:to-brand-orange text-black font-poppins font-black text-xs uppercase tracking-wider text-center transition-transform hover:scale-[1.02] block cursor-pointer shadow-lg shadow-brand-orange/30"
            >
              Iniciar con $1.500.000
            </a>
          </div>

          {/* Plan Dominio ($3.500.000+) */}
          <div className="rounded-3xl bg-zinc-950 border border-white/15 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono text-tech-cyan uppercase font-bold">Escala Omnicanal</span>
              <h3 className="font-poppins font-black text-2xl text-white">Plan Dominio</h3>
              <div className="flex items-baseline gap-1">
                <span className="font-poppins font-black text-3xl text-white">$3.500.000</span>
                <span className="text-xs font-mono text-gray-400">COP Total</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Para empresas que quieren copar el mercado en Meta, TikTok y Google con pruebas A/B multivariadas de creativos, filtros estrictos y embudos complejos.
              </p>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-[11px] font-mono space-y-1 text-gray-300">
                <div className="flex justify-between"><span>Gestión (30%):</span> <strong className="text-white">$1.050.000</strong></div>
                <div className="flex justify-between"><span>Impuestos (20%):</span> <strong className="text-purple-300">$490.000</strong></div>
                <div className="flex justify-between text-emerald-400"><span>Pauta Neta:</span> <strong>$1.960.000</strong></div>
              </div>
            </div>

            <a
              href={generateWhatsAppUrl(3500000)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-poppins font-bold text-xs uppercase tracking-wider text-center transition-colors block cursor-pointer"
            >
              Iniciar con $3.500.000
            </a>
          </div>
        </div>
      </section>

      {/* 8. PREGUNTAS FRECUENTES (FAQ) */}
      <section id="faq" className="py-20 px-4 md:px-8 max-w-4xl mx-auto border-t border-white/10 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="font-mono text-xs text-brand-orange uppercase font-bold tracking-wider">
            // RESOLVEMOS TUS DUDAS
          </span>
          <h2 className="font-poppins font-black text-2xl sm:text-3xl text-white">
            Preguntas Frecuentes sobre Pauta y Publicidad Digital
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS_DATA.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-zinc-950 border border-white/10 overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
              >
                <span className="font-poppins font-bold text-sm text-white">{item.q}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-brand-orange shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                )}
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs text-gray-300 font-sans leading-relaxed border-t border-white/5 pt-3 whitespace-pre-line">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 9. FINAL BOTTOM CTA BANNER */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-brand-orange/20 via-zinc-950 to-tech-cyan/20 border border-brand-orange/40 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs text-brand-orange uppercase font-bold tracking-widest block">
              ESTRUCTURACIÓN INMEDIATA CON ASESORES EXPERTOS
            </span>
            <h2 className="font-poppins font-black text-2xl sm:text-4xl text-white">
              ¿Listo para convertir tu presupuesto publicitario en clientes reales?
            </h2>
            <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
              Dinos qué vendes, cuánto deseas invertir y en menos de 24 horas te presentamos la arquitectura estratégica de tu campaña.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-orange via-yellow-400 to-brand-orange hover:from-yellow-400 hover:to-brand-orange text-black font-poppins font-black text-xs uppercase tracking-wider shadow-lg shadow-brand-orange/40 transition-transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-black" />
              <span>Chatear por WhatsApp al +57 304 575 1648</span>
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </a>

            <button
              onClick={() => setIsLeadModalOpen(true)}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/20 text-white font-poppins font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Formulario Rápido de Cotización
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-4 md:px-8 border-t border-white/10 text-center text-xs font-mono text-gray-500 relative z-10 bg-black/80">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-poppins font-black text-white text-sm">EXPÁNDETE</span>
            <span className="text-gray-600">•</span>
            <span>Marketing Inteligente & Pauta Digital</span>
          </div>
          <p>© {new Date().getFullYear()} Expándete Cloud. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <button onClick={onBackToMain} className="hover:text-brand-orange transition-colors cursor-pointer">Inicio</button>
            {onNavigateToIaImpacto && <button onClick={onNavigateToIaImpacto} className="hover:text-cyan-400 transition-colors cursor-pointer">IA IMPACTO</button>}
            {onNavigateToStudio && <button onClick={onNavigateToStudio} className="hover:text-amber-400 transition-colors cursor-pointer">Studio</button>}
            <a href={`https://wa.me/${officialPhone}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>

      {/* MODAL LIGHTBOX FOTO DE SERVICIO PUFACE1.JPG */}
      {isPhotoLightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl p-4 md:p-8 flex items-center justify-center"
          onClick={() => setIsPhotoLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-zinc-950 border border-white/20 rounded-3xl p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div>
                <span className="font-mono text-xs text-brand-orange uppercase font-bold">Creativo Oficial de Pauta</span>
                <h3 className="font-poppins font-black text-lg text-white">puface1.jpg • Alto Impacto Visual</h3>
              </div>
              <button
                onClick={() => setIsPhotoLightboxOpen(false)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img
              src="https://vicflix.expandete.cloud/Expandete_videos/puface1.jpg"
              alt="Creativo puface1"
              className="w-full max-h-[70vh] object-contain rounded-2xl mx-auto"
            />
          </div>
        </motion.div>
      )}

      {/* MODAL FORMULARIO RÁPIDO DE CAMPAÑA */}
      <AnimatePresence>
        {isLeadModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setIsLeadModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl bg-zinc-950 border border-brand-orange/40 p-6 sm:p-8 shadow-[0_0_60px_rgba(242,125,38,0.25)] text-left overflow-hidden"
            >
              <button
                onClick={() => setIsLeadModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center text-brand-orange shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-brand-orange uppercase font-bold tracking-wider">
                    Estructuración de Campaña
                  </span>
                  <h3 className="font-poppins font-black text-xl text-white mt-0.5">
                    Cotizar Pauta Inteligente
                  </h3>
                </div>
              </div>

              <form onSubmit={handleLeadSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="block text-gray-300 font-mono text-[11px] mb-1">Tu Nombre o Contacto *</label>
                  <input
                    type="text"
                    required
                    value={leadForm.nombre}
                    onChange={(e) => setLeadForm({ ...leadForm, nombre: e.target.value })}
                    placeholder="Ej. Carlos Mendoza"
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-brand-orange transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-300 font-mono text-[11px] mb-1">Empresa / Negocio</label>
                    <input
                      type="text"
                      value={leadForm.empresa}
                      onChange={(e) => setLeadForm({ ...leadForm, empresa: e.target.value })}
                      placeholder="Ej. Clínica Dental / Tienda"
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-mono text-[11px] mb-1">WhatsApp de Contacto *</label>
                    <input
                      type="tel"
                      required
                      value={leadForm.whatsapp}
                      onChange={(e) => setLeadForm({ ...leadForm, whatsapp: e.target.value })}
                      placeholder="+57 300 123 4567"
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-mono text-[11px] mb-1">Presupuesto Estimado a Invertir</label>
                  <select
                    value={leadForm.presupuesto}
                    onChange={(e) => setLeadForm({ ...leadForm, presupuesto: e.target.value })}
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-brand-orange transition-colors"
                  >
                    <option value="$800.000 COP (Plan Inicial)">$800.000 COP (Campaña Mínima)</option>
                    <option value="$1.000.000 COP">$1.000.000 COP (Estándar)</option>
                    <option value="$1.500.000 COP">$1.500.000 COP (Escala)</option>
                    <option value="$2.500.000 COP">$2.500.000 COP</option>
                    <option value="$5.000.000+ COP">$5.000.000+ COP (Dominio)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-mono text-[11px] mb-1">¿Qué producto o servicio vendes?</label>
                  <textarea
                    rows={2}
                    value={leadForm.notas}
                    onChange={(e) => setLeadForm({ ...leadForm, notas: e.target.value })}
                    placeholder="Cuéntanos brevemente sobre tu negocio y tu cliente ideal..."
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-brand-orange transition-colors resize-none"
                  />
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-[11px] text-gray-400 space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <Check className="w-3.5 h-3.5" />
                    <span>Transparencia: 30% gestión + impuestos de plataforma</span>
                  </div>
                  <p>Al enviar, se abrirá WhatsApp con los detalles de tu cotización listos para ser atendidos por un estratega de Expándete.</p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-yellow-500 hover:from-yellow-400 hover:to-brand-orange text-black font-poppins font-black text-xs uppercase tracking-wider shadow-lg shadow-brand-orange/30 transition-transform hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-black" />
                  <span>Enviar y Chatear por WhatsApp</span>
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
