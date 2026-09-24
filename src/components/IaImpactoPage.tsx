import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Zap, 
  CheckCircle, 
  Check, 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Send, 
  MessageCircle, 
  CreditCard, 
  ShieldCheck, 
  Terminal, 
  Layers, 
  Globe, 
  Smartphone, 
  Palette, 
  Video, 
  Lightbulb, 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  Cpu, 
  ExternalLink,
  Flame,
  Award,
  HelpCircle,
  X,
  Volume2,
  VolumeX,
  Eye,
  Play,
  Maximize2
} from 'lucide-react';
import { 
  IA_IMPACTO_CONFIG, 
  SESSIONS_PLAN, 
  TRANSFORMATION_STEPS, 
  PROMPT_FORMULA, 
  WHAT_IS_INCLUDED, 
  FAQS,
  HERO_VIDEO_OPTIONS,
  HYPERREALISTIC_AI_SHOWCASE,
  EXPANDETE_PACK_CARDS,
  AiShowcaseItem,
  OFFICIAL_IA_IMPACTO_FLYERS,
  OfficialFlyer
} from '../data/iaImpactoData';

interface IaImpactoPageProps {
  onBackToMain: () => void;
  onNavigateToStudio?: () => void;
}

export default function IaImpactoPage({ onBackToMain, onNavigateToStudio }: IaImpactoPageProps) {
  // Selected session tab
  const [activeSessionTab, setActiveSessionTab] = useState<number>(0);
  
  // Transformation step active index
  const [activeTransformStep, setActiveTransformStep] = useState<number>(0);

  // Hero Video background (Default: Expándete Reel Oficial con adaptación responsive)
  const [currentHeroVideo, setCurrentHeroVideo] = useState<string>(
    typeof window !== 'undefined' && window.innerWidth < 768 
      ? 'https://vicflix.expandete.cloud/Expandete_videos/hesv.mp4' 
      : 'https://vicflix.expandete.cloud/Expandete_videos/hesh.mp4'
  );
  const [isHeroMuted, setIsHeroMuted] = useState<boolean>(true);

  // Responsive video orientation handler for official Expándete Reel
  React.useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setCurrentHeroVideo(
        isMobile 
          ? 'https://vicflix.expandete.cloud/Expandete_videos/hesv.mp4' 
          : 'https://vicflix.expandete.cloud/Expandete_videos/hesh.mp4'
      );
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Floating sticky bottom closing bar
  const [showStickyBottomBar, setShowStickyBottomBar] = useState<boolean>(false);
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyBottomBar(true);
      } else {
        setShowStickyBottomBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Live countdown timer for urgency
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 38,
    seconds: 42
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Showcase category filter
  const [selectedShowcaseCat, setSelectedShowcaseCat] = useState<string>('todos');
  
  // Lightbox / Image inspection modal
  const [selectedShowcaseItem, setSelectedShowcaseItem] = useState<AiShowcaseItem | null>(null);
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);

  // Official Flyer Lightbox Modal
  const [selectedFlyer, setSelectedFlyer] = useState<OfficialFlyer | null>(null);

  const handleNextFlyer = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!selectedFlyer) return;
    const currentIndex = OFFICIAL_IA_IMPACTO_FLYERS.findIndex(f => f.id === selectedFlyer.id);
    const nextIndex = (currentIndex + 1) % OFFICIAL_IA_IMPACTO_FLYERS.length;
    setSelectedFlyer(OFFICIAL_IA_IMPACTO_FLYERS[nextIndex]);
  };

  const handlePrevFlyer = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!selectedFlyer) return;
    const currentIndex = OFFICIAL_IA_IMPACTO_FLYERS.findIndex(f => f.id === selectedFlyer.id);
    const prevIndex = (currentIndex - 1 + OFFICIAL_IA_IMPACTO_FLYERS.length) % OFFICIAL_IA_IMPACTO_FLYERS.length;
    setSelectedFlyer(OFFICIAL_IA_IMPACTO_FLYERS[prevIndex]);
  };

  // Active Video Modal
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  const handleCopyItemPrompt = (item: AiShowcaseItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(item.promptUsed);
    setCopiedPromptId(item.id);
    setTimeout(() => setCopiedPromptId(null), 2500);
  };

  // Accordion FAQ open item
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Prompt copied state
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  // Registration modal / form state
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'whatsapp' | 'wompi'>('whatsapp');
  
  const [formData, setFormData] = useState({
    nombre: '',
    whatsapp: '',
    email: '',
    nivelIa: 'Principiante (Desde Cero)',
    interesPrincipal: 'Crear Contenidos, Imágenes y Video',
    queTeGustariaCrear: '',
    faseSeleccionada: 'Preventa ($199.000 COP)'
  });

  const handleCopyPrompt = () => {
    const promptText = `ACTÚA COMO UN ARQUITECTO SENIOR DE PROMPTS Y ESTRATEGA DE INTELIGENCIA ARTIFICIAL.

Mi objetivo es: [DESCRIBE AQUÍ TU PROYECTO O TAREA].

Por favor diseña el prompt óptimo utilizando la siguiente estructura rigurosa:
1. CONTEXTO: Entorno, industria y situación actual.
2. ROL: Personalidad experta y enfoque mental del modelo.
3. OBJETIVO: Meta única, medible y sin ambigüedades.
4. INFORMACIÓN CLAVE: Datos, diferenciales y público objetivo.
5. RESTRICCIONES: Lo que la IA NUNCA debe hacer ni decir.
6. FORMATO: Estructura exacta de la salida (tablas, markdown, guion).
7. EJEMPLO GUÍA: Una muestra de calibración de tono.

Genera el prompt final listo para copiar y pegar, junto con una breve explicación de por qué cada variable fue optimizada.`;

    navigator.clipboard.writeText(promptText);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 3000);
  };

  const handleOpenRegister = (fase = 'Preventa ($199.000 COP)') => {
    setFormData(prev => ({ ...prev, faseSeleccionada: fase }));
    setIsRegisterModalOpen(true);
    setRegistrationSuccess(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Official WhatsApp phone: +57 304 575 1648
    const phone = IA_IMPACTO_CONFIG.officialPhone;
    const msg = `¡Hola Expándete! Deseo registrarme a la experiencia presencial IA IMPACTO en Medellín:
• Nombre: ${formData.nombre}
• WhatsApp: ${formData.whatsapp}
• Email: ${formData.email}
• Nivel de IA: ${formData.nivelIa}
• Interés Principal: ${formData.interesPrincipal}
• Proyecto/Idea: ${formData.queTeGustariaCrear || 'Aprender y aplicar'}
• Fase Seleccionada: ${formData.faseSeleccionada}
• Método de Pago Preferido: ${paymentMethod === 'wompi' ? 'Wompi (Bancolombia / PSE / Tarjeta)' : 'Transferencia / WhatsApp Directo'}`;

    if (paymentMethod === 'whatsapp') {
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
      setRegistrationSuccess(true);
    } else {
      // Wompi link
      window.open(`https://checkout.wompi.co/l/ia-impacto-preventa?amount=199000`, '_blank');
      setRegistrationSuccess(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#050608] text-white selection:bg-cyan-400 selection:text-black font-sans relative overflow-x-hidden">
      {/* Background Ambience & Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute top-[30%] right-[-10%] w-[550px] h-[550px] rounded-full bg-indigo-600/10 blur-[160px]" />
        <div className="absolute bottom-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      {/* SCARCITY COUNTDOWN TOP ANNOUNCEMENT BAR */}
      <div className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black px-3 py-2 text-center text-xs font-mono font-black tracking-wide relative z-50 flex items-center justify-center flex-wrap gap-2 sm:gap-4 shadow-lg border-b border-amber-400">
        <div className="flex items-center gap-1.5">
          <Flame className="w-4 h-4 text-black animate-bounce shrink-0" />
          <span className="uppercase font-bold tracking-wider">
            FASE 1 • PREVENTA EXCLUSIVA: SOLO 7 CUPOS DISPONIBLES
          </span>
        </div>

        <div className="flex items-center gap-1 bg-black/10 px-2.5 py-0.5 rounded-full text-[11px]">
          <span>Sube a $249.000 en:</span>
          <span className="font-mono font-black text-black bg-white/80 px-1.5 py-0.5 rounded">
            {String(timeLeft.days).padStart(2, '0')}d : {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
          </span>
        </div>

        <button
          onClick={() => handleOpenRegister('Preventa ($199.000 COP)')}
          className="bg-black hover:bg-zinc-900 text-amber-300 px-3 py-1 rounded-full text-[10px] font-poppins font-black uppercase tracking-wider flex items-center gap-1 transition-transform hover:scale-105 shadow-sm cursor-pointer ml-1"
        >
          <span>Asegurar Mi Cupo ($199.000)</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-[#050608]/85 backdrop-blur-xl border-b border-white/10 px-4 md:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo & Back button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToMain}
              className="flex items-center gap-1.5 text-xs font-mono font-bold text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-full transition-all"
              aria-label="Volver a la página principal de Expándete"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Volver a Expándete</span>
              <span className="sm:hidden">Inicio</span>
            </button>

            <div className="h-4 w-[1px] bg-white/20 hidden md:block" />

            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
              </span>
              <span className="font-poppins font-black text-sm md:text-base tracking-wider text-white">
                IA <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">IMPACTO</span>
              </span>
            </div>
          </div>

          {/* Nav Anchors (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-poppins text-gray-300 font-medium">
            <a href="#showcase-ia" className="text-cyan-400 font-bold hover:text-cyan-300 transition-colors flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Showcase Expándete
            </a>
            <a href="#entregables-packs" className="hover:text-cyan-400 transition-colors">Formatos Comerciales</a>
            <a href="#experiencias" className="hover:text-cyan-400 transition-colors">Las 3 Sesiones</a>
            <a href="#transformacion" className="hover:text-cyan-400 transition-colors">Transformación</a>
            <a href="#precios" className="text-amber-400 font-bold hover:text-amber-300 transition-colors">Precios Preventa</a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">Preguntas</a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5">
            {onNavigateToStudio && (
              <button
                onClick={onNavigateToStudio}
                className="hidden xl:flex items-center gap-1.5 text-[11px] font-mono font-bold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-400/30 px-3 py-1.5 rounded-full transition-all"
              >
                <Sparkles className="w-3 h-3" />
                <span>Studio Creativo</span>
              </button>
            )}

            <button
              onClick={() => handleOpenRegister()}
              className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-yellow-400 hover:to-amber-500 text-black font-poppins font-black text-xs uppercase tracking-wider px-4 py-2 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] transition-all transform hover:scale-[1.03] active:scale-[0.98] flex items-center gap-1.5 cursor-pointer"
            >
              <span>Asegurar Cupo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION: IA IMPACTO • DE UNA IDEA A ALGO REAL */}
      <section className="relative z-10 pt-10 pb-20 md:pt-16 md:pb-28 px-4 md:px-8 max-w-6xl mx-auto text-center">
        {/* High-Impact Video Background Layer (Expándete Reel Oficial - Ultra Nítido y Visible) */}
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] border border-cyan-500/30 shadow-[0_0_90px_rgba(6,182,212,0.25)]">
          <video
            key={currentHeroVideo}
            autoPlay
            muted={isHeroMuted}
            loop
            playsInline
            className="w-full h-full object-cover opacity-90 saturate-125 contrast-110"
          >
            <source src={currentHeroVideo} type="video/mp4" />
          </video>
          {/* Suave degradado para garantizar máxima visibilidad del video en vivo y contraste óptimo */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050608]/40 via-transparent to-[#050608]/90 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,#050608_95%)] opacity-60 pointer-events-none" />
        </div>

        {/* Expándete Studio Official Backing & Audio Control */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-950/90 border border-cyan-500/30 backdrop-blur-xl shadow-xl">
            <img 
              src="https://vicflix.expandete.cloud/Expandete_videos/Logo.jpeg" 
              alt="Expándete Studio Logo" 
              className="w-7 h-7 rounded-full object-cover border border-cyan-400/50 shrink-0"
            />
            <div className="text-left">
              <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider leading-none">
                DIRECCIÓN TÉCNICA & METODOLOGÍA
              </div>
              <div className="text-xs font-poppins font-black text-white leading-tight">
                EXPÁNDETE STUDIO • CASOS REALES EN COLOMBIA
              </div>
            </div>
          </div>

          {/* Sutil botón de audio opcional */}
          <button
            onClick={() => setIsHeroMuted(!isHeroMuted)}
            className={`px-3 py-2 rounded-full border transition-all flex items-center gap-1.5 text-xs font-mono font-bold backdrop-blur-xl cursor-pointer ${
              !isHeroMuted
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                : 'bg-zinc-950/80 hover:bg-zinc-900 text-gray-300 border-white/15'
            }`}
            title={isHeroMuted ? "Activar audio ambiental" : "Silenciar audio"}
          >
            {isHeroMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Audio Reel</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span className="text-cyan-300 font-bold">Audio On</span>
              </>
            )}
          </button>
        </div>

        {/* Top Badges con mayor contraste y brillo */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-950/80 border border-cyan-400/60 text-cyan-300 text-xs font-mono font-extrabold uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.35)] backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            Experiencia Presencial en Medellín
          </span>
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-950/80 border border-purple-400/60 text-purple-300 text-xs font-mono font-extrabold uppercase tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.35)] backdrop-blur-md">
            <Calendar className="w-3.5 h-3.5 text-purple-400" />
            3 Sesiones • Martes 6:30 - 8:30 PM
          </span>
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-950/80 border border-amber-400/60 text-amber-300 text-xs font-mono font-extrabold uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.35)] backdrop-blur-md">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Preventa $199.000 COP
          </span>
        </div>

        {/* Main Display Headline con Efectos Luminosos de Alto Impacto */}
        <div className="relative inline-block my-2">
          {/* Halo difuso de fondo para máxima legibilidad sobre video */}
          <div className="absolute -inset-x-8 -inset-y-4 bg-black/60 filter blur-2xl rounded-full -z-10 pointer-events-none" />
          <h1 className="font-poppins font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight uppercase leading-[0.92] text-white drop-shadow-[0_8px_35px_rgba(0,0,0,1)]">
            IA <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-400 drop-shadow-[0_0_35px_rgba(6,182,212,0.8)] filter brightness-110">
              IMPACTO
            </span>
          </h1>
        </div>

        {/* Subtitle / Punchline con resplandor tech cyan */}
        <div className="mt-3">
          <p className="inline-block font-mono text-lg sm:text-2xl md:text-3xl text-cyan-300 font-black uppercase tracking-[0.22em] px-4 py-1.5 rounded-xl bg-black/70 border border-cyan-400/40 backdrop-blur-md shadow-[0_0_25px_rgba(6,182,212,0.4)]">
            // DE UNA IDEA A ALGO REAL.
          </p>
        </div>

        {/* Value Proposition Description con placa de vidrio oscura y texto destacado */}
        <div className="max-w-3xl mx-auto mt-7 p-5 sm:p-6 rounded-3xl bg-zinc-950/80 backdrop-blur-xl border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
          <p className="font-sans text-gray-100 text-base sm:text-lg md:text-xl leading-relaxed">
            Una experiencia <span className="text-cyan-300 font-bold">presencial, práctica y transformadora</span> para descubrir cómo utilizar <strong className="text-white bg-white/10 px-2 py-0.5 rounded border border-white/20">Inteligencia Artificial</strong> para crear contenidos virales, imágenes publicitarias de estudio, videos de alto impacto, páginas web funcionales y prototipos digitales listos para monetizar.
          </p>
        </div>

        {/* Reassurance Banner: No necesitas ser programador */}
        <div className="mt-7 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-zinc-950/90 border border-emerald-500/40 text-xs sm:text-sm text-gray-100 backdrop-blur-md shadow-[0_0_25px_rgba(16,185,129,0.2)]">
          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
          <span><strong className="text-emerald-300">No necesitas ser programador ni tener experiencia previa.</strong> Diseñado para emprendedores, creadores de contenido y profesionales.</span>
        </div>

        {/* Quick Meta Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mt-10 text-left">
          <div className="p-3.5 rounded-2xl bg-zinc-950/90 border border-cyan-500/30 flex flex-col shadow-lg backdrop-blur-md">
            <span className="text-cyan-300 font-mono text-[11px] font-bold uppercase flex items-center gap-1">
              <MapPin className="w-3 h-3 text-cyan-400" /> Ciudad
            </span>
            <span className="font-poppins font-black text-white text-base mt-1">Medellín</span>
            <span className="text-[11px] text-gray-300">Prado Colonial</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-zinc-950/90 border border-purple-500/30 flex flex-col shadow-lg backdrop-blur-md">
            <span className="text-purple-300 font-mono text-[11px] font-bold uppercase flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-purple-400" /> Formato
            </span>
            <span className="font-poppins font-black text-white text-base mt-1">3 Sesiones</span>
            <span className="text-[11px] text-gray-300">2 horas por sesión</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-zinc-950/90 border border-indigo-500/30 flex flex-col shadow-lg backdrop-blur-md">
            <span className="text-indigo-300 font-mono text-[11px] font-bold uppercase flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-indigo-400" /> Horario
            </span>
            <span className="font-poppins font-black text-white text-base mt-1">Martes</span>
            <span className="text-[11px] text-gray-300">6:30 PM a 8:30 PM</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-zinc-950/95 border border-amber-400/60 bg-amber-500/10 flex flex-col shadow-xl backdrop-blur-md">
            <span className="text-amber-300 font-mono text-[11px] font-bold uppercase flex items-center gap-1">
              <Users className="w-3 h-3" /> Disponibilidad
            </span>
            <span className="font-poppins font-black text-amber-300 text-base mt-1">7 Cupos Libres</span>
            <span className="text-[11px] text-amber-200 font-bold">Preventa $199.000</span>
          </div>
        </div>

        {/* Main CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button
            onClick={() => handleOpenRegister()}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-black font-poppins font-black text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:shadow-[0_0_40px_rgba(6,182,212,0.8)] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Quiero Vivir IA Impacto</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#experiencias"
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-zinc-950/80 hover:bg-zinc-900 border border-white/25 text-white font-poppins font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 backdrop-blur-md shadow-lg"
          >
            <span>Ver Programa de 3 Sesiones</span>
            <ChevronDown className="w-4 h-4 text-cyan-400" />
          </a>
        </div>
      </section>

      {/* 2. SECCIÓN DE IMPACTO: ¿QUÉ PODRÍAS CREAR SI APRENDIERAS A TRABAJAR CON IA? */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-[0.2em] font-bold block mb-2">
            // APLICACIÓN REAL & RESULTADOS TANGIBLES
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            ¿Qué podrías crear si aprendieras a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">trabajar con IA?</span>
          </h2>
          <p className="font-sans text-gray-300 text-sm md:text-base mt-4 leading-relaxed">
            No se trata de coleccionar herramientas ni de preguntarle curiosidades a un chatbot. Se trata de dominar las palancas con las que puedes materializar cualquier proyecto digital en horas.
          </p>
        </div>

        {/* 8 Deliverables Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Lightbulb, title: "Ideas & Estrategias", desc: "Brainstorming profundo, análisis de competidores y validación ágil de negocios.", color: "text-amber-400", border: "hover:border-amber-400/50" },
            { icon: Terminal, title: "Textos Persuasivos", desc: "Copywriting de ventas para anuncios, emails comerciales y páginas que convierten.", color: "text-cyan-400", border: "hover:border-cyan-400/50" },
            { icon: Palette, title: "Imágenes Comerciales", desc: "Fotografía de estudio, catálogos de producto y flyers publicitarios Ultra HD.", color: "text-purple-400", border: "hover:border-purple-400/50" },
            { icon: Video, title: "Videos de Alto Impacto", desc: "Spots dinámicos para Reels y TikTok con animación de cámara y transiciones.", color: "text-pink-400", border: "hover:border-pink-400/50" },
            { icon: Globe, title: "Landing Pages en Vivo", desc: "Páginas web completas con formularios, botones y diseño moderno listas para vender.", color: "text-emerald-400", border: "hover:border-emerald-400/50" },
            { icon: Smartphone, title: "Apps & Prototipos", desc: "Herramientas interactivas funcionales que tus clientes pueden usar desde su móvil.", color: "text-blue-400", border: "hover:border-blue-400/50" },
            { icon: Cpu, title: "Código Asistido", desc: "Desarrollo con lenguaje natural en editores modernos sin saber programar.", color: "text-teal-400", border: "hover:border-teal-400/50" },
            { icon: Zap, title: "Automatizaciones", desc: "Conexión de procesos y herramientas para multiplicar tu productividad diaria.", color: "text-yellow-400", border: "hover:border-yellow-400/50" }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className={`p-5 rounded-3xl bg-zinc-950/80 border border-white/10 ${item.border} transition-all duration-300 flex flex-col gap-3 group`}
              >
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <h3 className="font-poppins font-bold text-white text-base leading-snug group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. SECCIÓN: “NO ES UNA CLASE MÁS • NO VAS A VENIR A VER DIAPOSITIVAS” CON AFICHE OFICIAL DE LANZAMIENTO */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-zinc-950 via-[#0d1117] to-zinc-950 border border-cyan-500/30 p-8 md:p-12 shadow-[0_0_60px_rgba(6,182,212,0.15)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left copy & practical checklist */}
            <div className="lg:col-span-7">
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-[0.2em] font-bold block mb-3">
                // FILOSOFÍA 100% PRÁCTICA
              </span>
              <h2 className="font-poppins font-black text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
                No vas a venir a ver <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-yellow-400">diapositivas teóricas.</span>
              </h2>
              <p className="font-sans text-gray-300 text-base sm:text-lg mt-5 leading-relaxed">
                Vas a ver la <strong className="text-white">Inteligencia Artificial trabajando en vivo</strong> sobre una pantalla gigante. Sin rodeos académicos, sin rodeos teóricos.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                {[
                  "Vamos a escribir prompts estratégicos en directo.",
                  "Vamos a generar imágenes comerciales con IA.",
                  "Vamos a crear video spots animados listos para pauta.",
                  "Vamos a construir una landing page desde cero.",
                  "Vamos a explorar programación asistida por IA.",
                  "Vamos a demostrar cómo una idea se convierte en un producto real."
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="font-sans text-xs sm:text-sm text-gray-200">{text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                <span className="font-mono text-xs text-gray-400">
                  Lleva tu computador portátil para seguir cada paso en tu propio ritmo.
                </span>
                <button
                  onClick={() => handleOpenRegister()}
                  className="px-6 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-poppins font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md ml-auto"
                >
                  <span>Asegurar Asistencia</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Integrated Official Poster a1.jpg */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                onClick={() => {
                  const flyer = OFFICIAL_IA_IMPACTO_FLYERS.find(f => f.id === 'flyer-a1');
                  if (flyer) setSelectedFlyer(flyer);
                }}
                className="w-full max-w-sm rounded-3xl bg-zinc-950/90 border border-cyan-400/40 p-3.5 overflow-hidden shadow-2xl group cursor-pointer hover:border-cyan-300 transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] relative"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-black">
                  <img
                    src="https://vicflix.expandete.cloud/Expandete_videos/a1.jpg"
                    alt="IA IMPACTO // De una Idea a Algo Real"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full bg-cyan-400 text-black font-mono text-[9px] font-black uppercase tracking-wider shadow-md">
                      PÓSTER OFICIAL MEDELLÍN
                    </span>
                    <span className="p-1 rounded-lg bg-black/60 backdrop-blur-md text-cyan-300 border border-white/10">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Bottom Text in Poster */}
                  <div className="absolute bottom-3 inset-x-3 flex items-center justify-between pointer-events-none">
                    <div className="space-y-0.5">
                      <span className="text-[11px] font-poppins font-bold text-white block drop-shadow-md">
                        De una Idea a Algo Real
                      </span>
                      <span className="text-[10px] font-mono text-cyan-300 block">
                        Presencial • 3 Sesiones de 2h • Martes 6:30 - 8:30 PM
                      </span>
                    </div>
                    <span className="px-2 py-1 rounded-lg bg-white/10 backdrop-blur-md text-[10px] font-mono text-white flex items-center gap-1">
                      <Eye className="w-3 h-3 text-cyan-300" />
                      <span>Ver Ficha</span>
                    </span>
                  </div>
                </div>

                <div className="mt-3 px-1.5 flex items-center justify-between text-xs">
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider">
                    // MANIFIESTO VISUAL EXPÁNDETE
                  </span>
                  <span className="font-mono text-[10px] text-cyan-400 font-bold group-hover:underline flex items-center gap-1">
                    Inspeccionar en 4K <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE HIPERREALISTA CON IA: DE UNA IDEA A UNA PIEZA 8K COMERCIAL */}
      <section id="showcase-ia" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-[0.2em] font-bold block mb-2">
            // PRODUCCIÓN HIPERREALISTA EN VIVO • 8K COMERCIAL
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Galería de Creaciones <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">Hiperrealistas con IA</span>
          </h2>
          <p className="font-sans text-gray-300 text-sm md:text-base mt-4 leading-relaxed">
            Así lucen las piezas comerciales creadas con modelos de última generación. Sin sesiones de fotos de $3.000.000 COP, sin agencias de casting y sin esperar semanas. En <strong className="text-white">IA IMPACTO</strong> aprenderás a crearlas paso a paso para tus propios productos y marca.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'todos', label: 'Todos los Formatos' },
              { id: 'productos', label: 'Fotografía de Producto' },
              { id: 'retratos', label: 'Retratos & Avatares' },
              { id: 'moda', label: 'Moda & Calzado' },
              { id: 'comercial', label: 'Gastronomía & Tech' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedShowcaseCat(tab.id)}
                className={`px-4 py-2 rounded-full font-poppins text-xs font-bold transition-all cursor-pointer ${
                  selectedShowcaseCat === tab.id
                    ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-[1.03]'
                    : 'bg-zinc-900/80 hover:bg-zinc-800 text-gray-400 hover:text-white border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HYPERREALISTIC_AI_SHOWCASE.filter(
            item => selectedShowcaseCat === 'todos' || item.category === selectedShowcaseCat
          ).map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-zinc-950/90 border border-white/10 hover:border-cyan-400/50 overflow-hidden flex flex-col justify-between transition-all duration-300 group shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
            >
              <div>
                {/* Visual Media Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900 cursor-pointer" onClick={() => setSelectedShowcaseItem(item)}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/40 opacity-70" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-cyan-400/40 text-cyan-300 font-mono text-[10px] font-bold uppercase tracking-wider">
                      {item.resolution}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-mono text-gray-300">
                      {item.engine}
                    </span>
                  </div>

                  {/* Center Action Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedShowcaseItem(item);
                      }}
                      className="px-3.5 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-poppins text-xs font-bold flex items-center gap-1.5 shadow-lg transform hover:scale-105 transition-transform"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspeccionar 8K</span>
                    </button>

                    {item.videoUrl && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveVideoModal(item.videoUrl || null);
                        }}
                        className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-poppins text-xs font-bold flex items-center gap-1.5 shadow-lg transform hover:scale-105 transition-transform"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Ver Spot</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                      {item.badge}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">
                      {item.categoryLabel}
                    </span>
                  </div>

                  <h3 className="font-poppins font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs text-gray-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Business Impact Box */}
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-[11px] text-emerald-300 font-sans flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Impacto comercial:</strong> {item.businessImpact}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Prompt Copy Action */}
              <div className="p-5 pt-0">
                <div className="p-3 rounded-2xl bg-black/60 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] text-amber-400 uppercase font-bold flex items-center gap-1">
                      <Terminal className="w-3 h-3" /> Prompt Maestro
                    </span>
                    <button
                      onClick={(e) => handleCopyItemPrompt(item, e)}
                      className="text-[10px] font-mono font-bold text-gray-400 hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer bg-white/5 px-2 py-0.5 rounded-md border border-white/10"
                    >
                      {copiedPromptId === item.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">¡Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copiar Prompt</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="font-mono text-[10px] text-gray-400 line-clamp-2 leading-relaxed">
                    {item.promptUsed}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner inside Showcase */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-zinc-950 to-indigo-950/40 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1 max-w-xl">
            <h4 className="font-poppins font-bold text-white text-base sm:text-lg">
              ¿Quieres crear imágenes y videos comerciales como estos para tu propio negocio?
            </h4>
            <p className="font-sans text-xs text-gray-300">
              En la primera y segunda sesión de IA IMPACTO trabajaremos en vivo con tus productos y servicios.
            </p>
          </div>
          <button
            onClick={() => handleOpenRegister()}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-black font-poppins font-black text-xs uppercase tracking-wider transition-all transform hover:scale-105 shadow-md shrink-0 cursor-pointer"
          >
            Quiero Aprender a Crearlos
          </button>
        </div>
      </section>

      {/* 3B. FORMATOS & ENTREGABLES COMERCIALES DE EXPÁNDETE STUDIO */}
      <section id="entregables-packs" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs text-amber-400 uppercase tracking-[0.2em] font-bold block mb-2">
            // ENTREGABLES COMERCIALES REALES • APRENDE Y MONETIZA
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Los Formatos que <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">Crearás en Vivo</span>
          </h2>
          <p className="font-sans text-gray-300 text-sm md:text-base mt-3 leading-relaxed">
            Estos son los mismos paquetes comerciales que las marcas le contratan a <strong className="text-white">Expándete Studio</strong> día a día. Durante las 3 sesiones saldrás con tus propias piezas terminadas y listas para pautar o vender a terceros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXPANDETE_PACK_CARDS.map((pack) => (
            <div
              key={pack.id}
              className="rounded-3xl bg-zinc-950/90 border border-white/10 hover:border-amber-400/50 overflow-hidden flex flex-col justify-between transition-all duration-300 group shadow-xl hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                  <img
                    src={pack.image}
                    alt={pack.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/30 opacity-75" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-amber-400/90 text-black font-mono text-[10px] font-black uppercase tracking-wider shadow-md">
                      {pack.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-poppins font-bold text-white text-lg group-hover:text-amber-300 transition-colors">
                    {pack.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-300 leading-relaxed">
                    {pack.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => handleOpenRegister(`Preventa ($199.000 COP) - ${pack.title}`)}
                  className="w-full py-3 rounded-2xl bg-white/5 hover:bg-amber-400 hover:text-black border border-white/10 hover:border-amber-400 text-gray-200 font-poppins font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Quiero Dominar Este Formato</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency callout inside the pack section */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-zinc-950 to-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <Flame className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="font-poppins font-bold text-white text-sm block">
                Solo 7 cupos presenciales disponibles al precio de Preventa ($199.000 COP)
              </span>
              <span className="font-sans text-xs text-gray-400">
                Incluye la metodología completa de prompts comerciales y plantillas de Expándete Studio.
              </span>
            </div>
          </div>
          <button
            onClick={() => handleOpenRegister('Preventa ($199.000 COP)')}
            className="px-6 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-poppins font-black text-xs uppercase tracking-wider shrink-0 transition-transform hover:scale-105 shadow-md cursor-pointer"
          >
            Aprovechar Preventa
          </button>
        </div>
      </section>

      {/* 4. LAS TRES EXPERIENCIAS PRESENCIALES (SISTEMA ROTATIVO) */}
      <section id="experiencias" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs text-indigo-400 uppercase tracking-[0.2em] font-bold block mb-2">
            // 3 SESIONES PRESENCIALES • MARTES DE 6:30 PM A 8:30 PM
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            El Recorrido de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">3 Sesiones (2 Horas c/u)</span>
          </h2>
          <p className="font-sans text-gray-300 text-sm md:text-base mt-3 leading-relaxed">
            Tres jornadas presenciales de 2 horas los martes de 6:30 PM a 8:30 PM en Medellín para experimentar en vivo, construir tus proyectos y avanzar paso a paso sin saturarte.
          </p>

          {/* Rotative System Callout */}
          <div className="mt-6 p-4 rounded-2xl bg-indigo-500/10 border border-indigo-400/30 text-left max-w-2xl mx-auto flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <div className="text-xs text-gray-300">
              <strong className="text-white block font-poppins uppercase tracking-wider mb-0.5">
                Flujo Rotativo Continuo // Ponte al día en 15 minutos
              </strong>
              Cada sesión arranca con una recapitulación visual rápida para que cualquier participante nuevo o que ingrese en una edición posterior pueda integrarse con total fluidez.
            </div>
          </div>
        </div>

        {/* Session Tabs Selector */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {SESSIONS_PLAN.map((session, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSessionTab(idx)}
              className={`px-5 py-2.5 rounded-full font-poppins text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeSessionTab === idx
                  ? 'bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 text-black shadow-lg shadow-cyan-400/20 scale-105'
                  : 'bg-zinc-950 border border-white/10 text-gray-400 hover:text-white hover:border-white/30'
              }`}
            >
              <span className="font-mono text-[11px] font-black">{session.badge}</span>
              <span>{session.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Session Card */}
        {(() => {
          const s = SESSIONS_PLAN[activeSessionTab];
          return (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-zinc-950 border border-cyan-500/30 p-6 md:p-10 shadow-2xl relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                {/* Left details */}
                <div className="flex-1 space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 font-mono text-xs font-bold">
                      SESIÓN {s.number}
                    </span>
                    <span className="text-gray-400 font-mono text-xs uppercase tracking-wider">
                      {s.category}
                    </span>
                  </div>

                  <h3 className="font-poppins font-black text-2xl sm:text-4xl text-white">
                    {s.title}
                  </h3>

                  <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed">
                    {s.objective}
                  </p>

                  {/* Ponte al día en 15 min */}
                  <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-4">
                    <span className="font-mono text-[11px] text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1 mb-1">
                      <Clock className="w-3.5 h-3.5" /> Ponte al día en 15 minutos:
                    </span>
                    <p className="font-sans text-xs text-gray-300">
                      {s.catchUpSummary}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div>
                    <h4 className="font-mono text-xs text-gray-400 uppercase tracking-wider font-bold mb-3">
                      Qué aprenderás y aplicarás:
                    </h4>
                    <div className="space-y-2.5">
                      {s.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right highlight: Flyer Oficial & Proyecto en Vivo */}
                <div className="w-full lg:w-96 shrink-0 bg-[#090d14] border border-cyan-500/30 rounded-3xl p-5 flex flex-col justify-between gap-5 shadow-2xl relative overflow-hidden group">
                  {s.flyerImage && (
                    <div 
                      onClick={() => {
                        const flyerObj = OFFICIAL_IA_IMPACTO_FLYERS.find(f => f.image === s.flyerImage);
                        if (flyerObj) setSelectedFlyer(flyerObj);
                      }}
                      className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 bg-black cursor-pointer group-hover:border-cyan-400/60 transition-all duration-300 shadow-lg"
                    >
                      <img 
                        src={s.flyerImage} 
                        alt={s.flyerTitle || s.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />
                      
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 rounded-full bg-cyan-400 text-black font-mono text-[9px] font-black uppercase tracking-wider shadow-md">
                          AFICHE OFICIAL DE LA SESIÓN
                        </span>
                        <span className="p-1 rounded-lg bg-black/60 backdrop-blur-md text-white border border-white/10">
                          <Maximize2 className="w-3.5 h-3.5 text-cyan-300" />
                        </span>
                      </div>

                      <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between pointer-events-none">
                        <span className="text-[11px] font-poppins font-bold text-white drop-shadow-md flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-cyan-300" />
                          <span>Inspeccionar Ficha 4K</span>
                        </span>
                        <span className="text-[9px] font-mono text-cyan-200 bg-white/10 px-2 py-0.5 rounded-full backdrop-blur-md">
                          Zoom HD
                        </span>
                      </div>
                    </div>
                  )}

                  <div>
                    <span className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-wider block mb-1">
                      // DEMOSTRACIÓN EN VIVO
                    </span>
                    <h4 className="font-poppins font-bold text-white text-base">
                      Proyecto Práctico de la Sesión
                    </h4>
                    <p className="font-sans text-xs text-gray-300 mt-1.5 leading-relaxed">
                      {s.liveProject}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-gray-400">Duración:</span>
                      <span className="text-white font-bold">2 Horas (Martes 6:30 - 8:30 PM)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-gray-400">Modalidad:</span>
                      <span className="text-cyan-400 font-bold">Presencial Medellín</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-gray-400">Material:</span>
                      <span className="text-emerald-400 font-bold">Incluido en Telegram</span>
                    </div>

                    <button
                      onClick={() => handleOpenRegister(`Sesión ${s.number}: ${s.title}`)}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-black font-poppins font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md mt-2 cursor-pointer"
                    >
                      <span>Asegurar Mi Cupo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })()}
      </section>


      {/* 5. EL GRAN CASO DE TRANSFORMACIÓN: IDEA → PROMPT → IMAGEN → VIDEO → LANDING → APP */}
      <section id="transformacion" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10 relative z-10 overflow-hidden rounded-[3rem]">
        {/* Ambient High-Tech Video Backdrop */}
        <div className="absolute inset-0 -z-10 opacity-25 pointer-events-none overflow-hidden">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="https://vicflix.expandete.cloud/Videos/hero1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#050608]/85 backdrop-blur-[1px]" />
        </div>

        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-[0.2em] font-bold block mb-2">
            // EL FLUJO COMPLETO EN ACCIÓN
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            De una sola instrucción a un <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">ecosistema digital</span>
          </h2>
          <p className="font-sans text-gray-300 text-sm md:text-base mt-3 leading-relaxed">
            Antes necesitabas múltiples herramientas y varias semanas. Ahora la IA actúa como tu equipo completo de asistentes para pasar de la mente a la realidad.
          </p>
        </div>

        {/* Steps Pipeline Visualizer */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {TRANSFORMATION_STEPS.map((st, i) => (
            <button
              key={i}
              onClick={() => setActiveTransformStep(i)}
              className={`p-4 rounded-2xl text-left border transition-all duration-300 cursor-pointer ${
                activeTransformStep === i
                  ? 'bg-cyan-500/10 border-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] scale-[1.03]'
                  : 'bg-zinc-950/70 border-white/10 text-gray-400 hover:text-white hover:border-white/30'
              }`}
            >
              <span className="font-mono text-[10px] text-cyan-400 font-bold block mb-1">
                0{st.step} // ETAPA
              </span>
              <h4 className="font-poppins font-bold text-xs sm:text-sm text-white">
                {st.label}
              </h4>
              <span className="text-[10px] text-gray-400 block mt-1">
                {st.tag}
              </span>
            </button>
          ))}
        </div>

        {/* Detail Box for Selected Step */}
        <div className="rounded-3xl bg-zinc-950 border border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider font-bold">
              Etapa {TRANSFORMATION_STEPS[activeTransformStep].step} de 6 • {TRANSFORMATION_STEPS[activeTransformStep].tag}
            </span>
            <h3 className="font-poppins font-black text-2xl text-white">
              {TRANSFORMATION_STEPS[activeTransformStep].label}
            </h3>
            <p className="font-sans text-sm text-gray-300 leading-relaxed">
              {TRANSFORMATION_STEPS[activeTransformStep].desc}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setActiveTransformStep(prev => (prev > 0 ? prev - 1 : 5))}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors"
              aria-label="Paso anterior"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTransformStep(prev => (prev < 5 ? prev + 1 : 0))}
              className="p-3 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold transition-colors shadow-md"
              aria-label="Siguiente paso"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. INGENIERÍA DE PROMPTS & “EL PROMPT DE LOS PROMPTS” */}
      <section id="prompting" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs text-amber-400 uppercase tracking-[0.2em] font-bold block mb-2">
            // EL PILAR FUNDAMENTAL
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Ingeniería de Prompts & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">El Prompt de los Prompts</span>
          </h2>
          <p className="font-sans text-gray-300 text-sm md:text-base mt-3 leading-relaxed">
            La diferencia entre una respuesta mediocre y un resultado que parece hecho por un profesional senior no es la herramienta: es la precisión con la que estructuraste la instrucción.
          </p>
        </div>

        {/* The 7 Formula Components */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {PROMPT_FORMULA.map((item, i) => (
            <div key={i} className="p-4 rounded-2xl bg-zinc-950 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-wider block mb-1">
                  ELEMENTO 0{i + 1}
                </span>
                <h4 className="font-poppins font-bold text-white text-sm">
                  {item.element}
                </h4>
                <p className="font-sans text-xs text-gray-400 mt-1">
                  {item.desc}
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-white/5 bg-black/40 p-2 rounded-xl text-[11px] font-mono text-amber-300/90">
                "{item.example}"
              </div>
            </div>
          ))}
        </div>

        {/* "El Prompt de los Prompts" Interactive Code Card */}
        <div className="rounded-3xl bg-zinc-950 border border-amber-500/40 p-6 md:p-8 shadow-[0_0_50px_rgba(245,158,11,0.15)] relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <span className="font-mono text-xs text-amber-400 uppercase tracking-wider font-bold">
                RECURSO EXCLUSIVO // METAPROMPT MAESTRO
              </span>
              <h3 className="font-poppins font-black text-xl text-white mt-0.5">
                El Prompt de los Prompts
              </h3>
            </div>

            <button
              onClick={handleCopyPrompt}
              className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-yellow-300 text-black font-mono font-bold text-xs flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
            >
              {copiedPrompt ? (
                <>
                  <Check className="w-3.5 h-3.5 text-black" />
                  <span>¡Copiado al Portapapeles!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar Plantilla Maestra</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-4 font-mono text-xs text-gray-300 bg-black/70 p-4 rounded-2xl border border-white/5 overflow-x-auto leading-relaxed">
            <p className="text-cyan-400">// Pega este Meta-Prompt en cualquier IA para que ella misma construya tu mejor instrucción:</p>
            <p className="mt-2 text-white font-bold">ACTÚA COMO UN ARQUITECTO SENIOR DE PROMPTS Y ESTRATEGA DE INTELIGENCIA ARTIFICIAL.</p>
            <p className="mt-2 text-gray-400">Mi objetivo es: [DESCRIBE AQUÍ TU PROYECTO O TAREA].</p>
            <p className="mt-2 text-gray-300">Por favor diseña el prompt óptimo utilizando la siguiente estructura rigurosa:</p>
            <p className="text-amber-300 ml-4">1. CONTEXTO • 2. ROL • 3. OBJETIVO • 4. INFORMACIÓN CLAVE • 5. RESTRICCIONES • 6. FORMATO • 7. EJEMPLO GUÍA</p>
            <p className="mt-2 text-gray-400">Genera el prompt final listo para copiar y pegar, junto con una breve explicación de por qué cada variable fue optimizada.</p>
          </div>

          <span className="text-[11px] font-mono text-gray-400 block mt-3">
            * En la Sesión 1 entregamos este recurso en formato descargable y practicamos en vivo con casos reales de los asistentes.
          </span>
        </div>
      </section>

      {/* 7. CASOS PRÁCTICOS EN VIVO: LANDING PAGE & APP FUNCIONAL */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] font-bold block mb-2">
            // CONSTRUCCIÓN EN TIEMPO REAL
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Dos Grandes Casos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">Impacto en Vivo</span>
          </h2>
          <p className="font-sans text-gray-300 text-sm md:text-base mt-3 leading-relaxed">
            Diferenciamos con claridad entre una imagen que parece una web y un producto que verdaderamente funciona y convierte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Case 1: Landing Page */}
          <div className="p-8 rounded-3xl bg-zinc-950 border border-emerald-500/30 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 font-mono text-xs font-bold uppercase">
                CASO 01 • LANDING PAGE EN VIVO
              </span>
              <h3 className="font-poppins font-black text-2xl text-white">
                De una idea del público a una web funcional en minutos
              </h3>
              <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
                Pediremos una idea de negocio al azar al público y la construiremos en tiempo real: estructura persuasiva, diseño responsivo, imágenes integradas, formulario de registro y botones de WhatsApp conectados.
              </p>

              <div className="space-y-2 pt-2 text-xs font-mono text-gray-400">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Check className="w-4 h-4" /> <span>Idea → Prompt de estructura</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <Check className="w-4 h-4" /> <span>Generación de contenido y diseño</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <Check className="w-4 h-4" /> <span>Publicación en la nube para compartir</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
              <span>Duración del ejercicio: 35 min</span>
              <span className="text-emerald-400 font-bold">100% Funcional</span>
            </div>
          </div>

          {/* Case 2: App Funcional */}
          <div className="p-8 rounded-3xl bg-zinc-950 border border-cyan-500/30 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 font-mono text-xs font-bold uppercase">
                CASO 02 • APLICACIÓN FUNCIONAL EN VIVO
              </span>
              <h3 className="font-poppins font-black text-2xl text-white">
                Sistema interactivo de reservas con lógica real
              </h3>
              <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
                Mostraremos cómo la IA programa pantallas, botones dinámicos, cálculo de precios y almacenamiento de citas. Una aplicación real que responde a clics y guarda información sin escribir código a mano.
              </p>

              <div className="space-y-2 pt-2 text-xs font-mono text-gray-400">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Check className="w-4 h-4" /> <span>Estructura de interfaz y base de datos</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400">
                  <Check className="w-4 h-4" /> <span>Formularios reactivos con validación</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400">
                  <Check className="w-4 h-4" /> <span>Detección y corrección de errores con IA</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
              <span>Duración del ejercicio: 45 min</span>
              <span className="text-cyan-400 font-bold">Sin escribir código tradicional</span>
            </div>
          </div>
        </div>

        {/* Antigravity & Cloud Explained Simply */}
        <div className="mt-8 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-zinc-950 via-[#0a101d] to-zinc-950 border border-indigo-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-cyan-400" />
              Antigravity & Herramientas Cloud Explicadas para Todos
            </span>
            <h4 className="font-poppins font-bold text-white text-lg">
              Entendiendo el consumo en la nube sin complicaciones técnicas
            </h4>
            <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
              Explicaremos qué son los modelos de lenguaje, los créditos de IA, tokens, APIs y por qué trabajar en la nube permite que tu computadora simple desarrolle al nivel de servidores de alta gama.
            </p>
          </div>

          <div className="px-4 py-2 rounded-2xl bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 font-mono text-xs font-bold shrink-0">
            Módulo Cloud Integrado
          </div>
        </div>
      </section>

      {/* 8. COMUNIDAD PRIVADA DE IA IMPACTO EN TELEGRAM */}
      <section id="comunidad" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10 relative z-10">
        <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#0c1427]/90 via-zinc-950/90 to-[#100e24]/90 border border-blue-500/30 p-8 md:p-14 shadow-2xl">
          {/* Ambient Video Backdrop */}
          <div className="absolute inset-0 -z-10 opacity-25 pointer-events-none overflow-hidden">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="https://vicflix.expandete.cloud/Videos/hero2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[#050608]/75" />
          </div>

          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="font-mono text-xs text-blue-400 uppercase tracking-[0.2em] font-bold block">
              // NETWORKING & ACCESO PERMANENTE
            </span>
            <h2 className="font-poppins font-black text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
              Tu experiencia no termina <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                cuando termina el evento.
              </span>
            </h2>
            <p className="font-sans text-gray-300 text-base sm:text-lg leading-relaxed">
              Al adquirir tu cupo entras a la <strong className="text-white">Comunidad Privada de IA IMPACTO en Telegram</strong>. Un espacio cerrado donde compartimos recursos continuos, resolvemos preguntas y realizamos retos prácticos entre sesiones.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {[
                { title: "Biblioteca de Prompts", desc: "Instrucciones listas para usar" },
                { title: "Grabaciones & Material", desc: "Paso a paso de lo visto en vivo" },
                { title: "Retos Quincenales", desc: "Ejercicios para tu propio negocio" },
                { title: "Preguntas & Respuestas", desc: "Resolución de dudas por expertos" },
                { title: "Novedades de IA", desc: "Filtro semanal de lo que sí sirve" },
                { title: "Networking Activo", desc: "Conexión con otros creadores" }
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="font-poppins font-bold text-white text-xs block">{item.title}</span>
                  <span className="text-[11px] text-gray-400 block mt-0.5">{item.desc}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={IA_IMPACTO_CONFIG.telegramCommunityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/25 flex items-center gap-2 transition-all transform hover:scale-105"
              >
                <Send className="w-4 h-4" />
                <span>Unirme al Canal Informativo de Telegram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <span className="font-mono text-xs text-gray-400">
                * El acceso al grupo VIP de alumnos se entrega al confirmar tu inscripción.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. ¿A QUIÉN ESTÁ DIRIGIDO? (PERFIL DEL PARTICIPANTE) */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs text-purple-400 uppercase tracking-[0.2em] font-bold block mb-2">
            // PENSADO PARA LA ACCIÓN REAL
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            ¿Para quién está diseñado <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400">IA IMPACTO?</span>
          </h2>
          <p className="font-sans text-gray-300 text-sm md:text-base mt-3 leading-relaxed">
            No necesitas ser programador ni matemático. Hablamos en lenguaje claro y enfocado en negocios, creatividad y productividad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { role: "Emprendedores & Empresarios", desc: "Que quieren reducir costos, crear piezas de marketing y prototipar herramientas sin depender de agencias lentas." },
            { role: "Vendedores & Comerciales", desc: "Que buscan redactar propuestas irresistibles, crear videos de producto y automatizar respuestas a clientes." },
            { role: "Creadores & Social Media", desc: "Que necesitan multiplicar su volumen de contenido visual y video spots con ritmos dopamínicos para redes." },
            { role: "Profesionales Independientes", desc: "Abogados, médicos, consultores y contadores que desean automatizar tareas repetitivas y crear su propia web." },
            { role: "Diseñadores & Creativos", desc: "Que quieren integrar IA generativa para acelerar conceptos, edición de fotos y prototipos sin fricción." },
            { role: "Curiosos & Principiantes", desc: "Cualquier persona que quiera aprender Inteligencia Artificial desde cero con una guía práctica y confiable." }
          ].map((profile, i) => (
            <div key={i} className="p-6 rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-purple-400/40 transition-all flex flex-col gap-2">
              <span className="font-mono text-[10px] text-purple-400 font-bold uppercase">Perfil 0{i + 1}</span>
              <h4 className="font-poppins font-bold text-white text-base">{profile.role}</h4>
              <p className="font-sans text-xs text-gray-400 leading-relaxed mt-1">{profile.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. QUÉ INCLUYE TU EXPERIENCIA */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-[0.2em] font-bold block mb-2">
            // PAQUETE INTEGRAL DE VALOR
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Todo lo que incluye tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">inscripción</span>
          </h2>
          <p className="font-sans text-gray-300 text-sm md:text-base mt-3 leading-relaxed">
            Una experiencia diseñada para brindarte retorno inmediato desde la primera sesión.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WHAT_IS_INCLUDED.map((item, i) => (
            <div key={i} className="p-5 rounded-3xl bg-zinc-950 border border-white/10 flex flex-col gap-2">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-1">
                <Check className="w-4 h-4" />
              </div>
              <h4 className="font-poppins font-bold text-white text-sm">{item.title}</h4>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 11. PRECIOS & FASES TRANSPARENTES */}
      <section id="precios" className="py-20 px-4 md:px-8 max-w-6xl mx-auto border-t border-white/10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="font-mono text-xs text-amber-400 uppercase tracking-[0.2em] font-bold block mb-2">
            // FASES DE PRECIOS & CUPOS ESTRICTAMENTE LIMITADOS
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Inversión en tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">Transformación Digital</span>
          </h2>
          <p className="font-sans text-gray-300 text-sm md:text-base mt-3 leading-relaxed">
            Precios reales y progresivos. La sala presencial en Medellín tiene un límite de <strong className="text-white">25 participantes</strong> para que cada persona reciba acompañamiento paso a paso en su computador.
          </p>
        </div>

        {/* URGENCY & SCARCITY DASHBOARD */}
        <div className="mb-12 p-6 rounded-3xl bg-gradient-to-b from-amber-950/40 via-zinc-950 to-zinc-950 border border-amber-500/40 shadow-[0_0_50px_rgba(245,158,11,0.2)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
            {/* Scarcity Meter */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-amber-300 font-bold flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
                  CUPOS CONFIRMADOS:
                </span>
                <span className="text-white font-bold">18 / 25 (72%)</span>
              </div>
              <div className="w-full h-3 bg-black/60 rounded-full overflow-hidden border border-amber-500/30">
                <div className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full w-[72%] shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
              </div>
              <span className="text-[11px] font-mono text-amber-400/90 block">
                ⚡ ¡Solo quedan 7 cupos al valor de Preventa!
              </span>
            </div>

            {/* Price Step Notice */}
            <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10 text-center space-y-1">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                AHORRO POR ACCIÓN RÁPIDA:
              </span>
              <div className="text-lg font-poppins font-black text-amber-300">
                Ahorras $100.000 COP
              </div>
              <p className="text-[10px] font-sans text-gray-400">
                Fase 1: $199.000 • Fase 3 (Cierre): $299.000
              </p>
            </div>

            {/* Countdown Clock */}
            <div className="space-y-1.5 text-center md:text-right">
              <span className="text-[10px] font-mono text-amber-300 uppercase tracking-wider block font-bold">
                TIEMPO RESTANTE DE PREVENTA:
              </span>
              <div className="inline-flex items-center gap-1 font-mono font-black text-sm sm:text-base text-black bg-gradient-to-r from-amber-400 to-yellow-400 px-3 py-1.5 rounded-xl shadow-md">
                <span>{String(timeLeft.days).padStart(2, '0')}d</span>
                <span>:</span>
                <span>{String(timeLeft.hours).padStart(2, '0')}h</span>
                <span>:</span>
                <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>
                <span>:</span>
                <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* FASE 1: PREVENTA (ACTIVA) */}
          <div className="rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-amber-400 p-6 md:p-8 flex flex-col justify-between shadow-[0_0_40px_rgba(245,158,11,0.25)] relative transform md:-translate-y-2">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-black px-4 py-1 rounded-full text-[10px] font-mono font-black uppercase tracking-wider shadow-md">
              FASE ACTIVA AHORA
            </div>

            <div>
              <span className="text-xs font-mono text-amber-400 uppercase font-bold tracking-wider">
                {IA_IMPACTO_CONFIG.prices.preventa.label}
              </span>
              <div className="flex items-baseline gap-1 mt-3">
                <span className="font-poppins font-black text-4xl sm:text-5xl text-white">
                  {IA_IMPACTO_CONFIG.prices.preventa.priceFormatted}
                </span>
              </div>
              <p className="font-sans text-xs text-gray-300 mt-2">
                {IA_IMPACTO_CONFIG.prices.preventa.description}
              </p>

              <div className="my-6 pt-6 border-t border-white/10 space-y-2.5 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>3 Sesiones de 2 horas (Martes 6:30 - 8:30 PM)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>Comunidad Privada de Telegram</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>Biblioteca de Prompts & Plantillas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>Certificado Digital Oficial</span>
                </div>
                <div className="flex items-center gap-2 text-amber-300 font-bold">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>+ 3 Bonos de Acción Rápida ($600.000 COP)</span>
                </div>
              </div>
            </div>

            <div>
              <span className="font-mono text-[11px] text-amber-300 block mb-3 text-center">
                ⚡ Solo 7 cupos disponibles en Preventa
              </span>
              <button
                onClick={() => handleOpenRegister('Preventa ($199.000 COP)')}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-yellow-400 hover:to-amber-500 text-black font-poppins font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-400/25 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Aprovechar Preventa ($199.000)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* FASE 2: REGULAR */}
          <div className="rounded-3xl bg-zinc-950 border border-white/10 p-6 md:p-8 flex flex-col justify-between opacity-85 hover:opacity-100 transition-opacity">
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase font-bold tracking-wider">
                {IA_IMPACTO_CONFIG.prices.regular.label}
              </span>
              <div className="flex items-baseline gap-1 mt-3">
                <span className="font-poppins font-black text-3xl sm:text-4xl text-gray-200">
                  {IA_IMPACTO_CONFIG.prices.regular.priceFormatted}
                </span>
              </div>
              <p className="font-sans text-xs text-gray-400 mt-2">
                {IA_IMPACTO_CONFIG.prices.regular.description}
              </p>

              <div className="my-6 pt-6 border-t border-white/10 space-y-2.5 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gray-500" />
                  <span>3 Sesiones de 2 horas (Martes 6:30 - 8:30 PM)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gray-500" />
                  <span>Comunidad Privada de Telegram</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gray-500" />
                  <span>Biblioteca de Prompts & Plantillas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gray-500" />
                  <span>Certificado Digital Oficial</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleOpenRegister('Precio Regular ($249.000 COP)')}
              className="w-full py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-poppins font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Reservar Fase Regular</span>
            </button>
          </div>

          {/* FASE 3: ÚLTIMOS CUPOS */}
          <div className="rounded-3xl bg-zinc-950 border border-white/10 p-6 md:p-8 flex flex-col justify-between opacity-85 hover:opacity-100 transition-opacity">
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase font-bold tracking-wider">
                {IA_IMPACTO_CONFIG.prices.ultimosCupos.label}
              </span>
              <div className="flex items-baseline gap-1 mt-3">
                <span className="font-poppins font-black text-3xl sm:text-4xl text-gray-200">
                  {IA_IMPACTO_CONFIG.prices.ultimosCupos.priceFormatted}
                </span>
              </div>
              <p className="font-sans text-xs text-gray-400 mt-2">
                {IA_IMPACTO_CONFIG.prices.ultimosCupos.description}
              </p>

              <div className="my-6 pt-6 border-t border-white/10 space-y-2.5 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gray-500" />
                  <span>3 Sesiones de 2 horas (Martes 6:30 - 8:30 PM)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gray-500" />
                  <span>Comunidad Privada de Telegram</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gray-500" />
                  <span>Biblioteca de Prompts & Plantillas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gray-500" />
                  <span>Certificado Digital Oficial</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleOpenRegister('Últimos Cupos ($299.000 COP)')}
              className="w-full py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-poppins font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Reservar Últimos Cupos</span>
            </button>
          </div>
        </div>

        {/* FAST-ACTION BONUSES MODULE CON FICHA DE PREVENTA INTEGRADA */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-cyan-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-[0.2em] font-bold block mb-1">
              // BONOS DE ACCIÓN RÁPIDA (VALORADOS EN $600.000 COP)
            </span>
            <h3 className="font-poppins font-black text-2xl sm:text-3xl text-white">
              Incluidos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">100% GRATIS</span> al inscribirte en Preventa
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* The 3 bonus cards */}
            <div className="lg:col-span-8 flex flex-col justify-between gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 h-full">
                <div className="p-5 rounded-2xl bg-black/60 border border-white/10 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase">Bono #1 • Valor $300.000 COP</span>
                    <h4 className="font-poppins font-bold text-white text-base">Bóveda de 50+ Prompts Comerciales</h4>
                    <p className="font-sans text-xs text-gray-400 leading-relaxed">
                      Las fórmulas exactas probadas por Expándete Studio para generar flyers, fotos de producto y copys de alta venta.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold mt-4">✓ GRATIS con tu inscripción</span>
                </div>

                <div className="p-5 rounded-2xl bg-black/60 border border-white/10 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] text-purple-400 font-bold uppercase">Bono #2 • Valor $200.000 COP</span>
                    <h4 className="font-poppins font-bold text-white text-base">Plantilla de Landing Page Lista</h4>
                    <p className="font-sans text-xs text-gray-400 leading-relaxed">
                      El código y diseño de una página web optimizada para conversión que podrás personalizar y publicar en minutos.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold mt-4">✓ GRATIS con tu inscripción</span>
                </div>

                <div className="p-5 rounded-2xl bg-black/60 border border-white/10 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] text-amber-400 font-bold uppercase">Bono #3 • Valor $100.000 COP</span>
                    <h4 className="font-poppins font-bold text-white text-base">Comunidad VIP Permanente Telegram</h4>
                    <p className="font-sans text-xs text-gray-400 leading-relaxed">
                      Acceso de por vida a los retos, actualizaciones de nuevos modelos y resolución de dudas directas con facilitadores.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold mt-4">✓ GRATIS con tu inscripción</span>
                </div>
              </div>

              {/* Informative alert box under the 3 cards */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-zinc-900 to-cyan-500/10 border border-amber-500/30 flex items-center justify-between gap-4">
                <div className="text-xs">
                  <span className="font-mono font-bold text-amber-300 block">Total en Beneficios Directos: $899.000 COP</span>
                  <span className="text-gray-400 text-[11px]">3 Sesiones ($299.000) + 3 Bonos ($600.000) por solo <strong className="text-white">$199.000 COP</strong> en Preventa.</span>
                </div>
                <button
                  onClick={() => handleOpenRegister('Preventa con 3 Bonos ($199.000 COP)')}
                  className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-yellow-300 text-black font-poppins font-bold text-xs uppercase tracking-wider shrink-0 transition-all shadow-md cursor-pointer"
                >
                  Aprovechar Oferta
                </button>
              </div>
            </div>

            {/* Right: Integrated Official Flyer a5.jpg as the offer voucher */}
            <div
              onClick={() => {
                const flyer = OFFICIAL_IA_IMPACTO_FLYERS.find(f => f.id === 'flyer-a5');
                if (flyer) setSelectedFlyer(flyer);
              }}
              className="lg:col-span-4 rounded-2xl bg-zinc-900/90 border border-amber-400/40 p-3.5 flex flex-col justify-between group cursor-pointer hover:border-amber-300 transition-all hover:shadow-[0_0_35px_rgba(245,158,11,0.25)] shadow-xl relative"
            >
              <div>
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-black mb-3">
                  <img
                    src="https://vicflix.expandete.cloud/Expandete_videos/a5.jpg"
                    alt="Suite Integral Preventa IA IMPACTO"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full bg-amber-400 text-black font-mono text-[9px] font-black uppercase tracking-wider shadow-md">
                      FICHA OFICIAL DE PREVENTA
                    </span>
                    <span className="p-1 rounded-lg bg-black/60 backdrop-blur-md text-amber-300 border border-white/10">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between pointer-events-none">
                    <span className="text-[11px] font-poppins font-bold text-white drop-shadow-md flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-amber-300" />
                      <span>Inspeccionar Ficha 4K</span>
                    </span>
                    <span className="text-[9px] font-mono text-amber-200 bg-white/10 px-2 py-0.5 rounded-full backdrop-blur-md">
                      Preventa $199.000
                    </span>
                  </div>
                </div>

                <div className="space-y-1 px-1">
                  <h4 className="font-poppins font-bold text-white text-xs leading-snug group-hover:text-amber-300 transition-colors">
                    Ficha Resumen de la Inversión Preventa
                  </h4>
                  <p className="font-sans text-[11px] text-gray-400 leading-relaxed">
                    Visualiza todos los módulos, bonos y garantías resumidos en la pieza oficial de cierre.
                  </p>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs px-1">
                <span className="font-mono text-[10px] text-amber-400 font-bold">
                  EXPÁNDETE STUDIO
                </span>
                <span className="font-mono text-[10px] text-gray-300 group-hover:text-white flex items-center gap-1">
                  Abrir detalles <ArrowRight className="w-3 h-3 text-amber-400" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 100% SATISFACTION GUARANTEE */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950/30 via-zinc-950 to-emerald-950/30 border border-emerald-500/40 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0 shadow-lg">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
              GARANTÍA INCONDICIONAL DE SATISFACCIÓN EXPÁNDETE CLOUD (100% LIBRE DE RIESGO)
            </span>
            <h4 className="font-poppins font-black text-xl text-white">
              Vive la primera sesión completa. Si no supera tus expectativas, te devolvemos el 100%.
            </h4>
            <p className="font-sans text-xs text-gray-300 leading-relaxed">
              Estamos tan seguros del valor práctico y comercial de esta experiencia presencial que si al terminar la primera sesión sientes que no aprendiste herramientas reales para multiplicar tu velocidad o tu negocio, te reembolsamos la totalidad de tu dinero en el acto. Sin trámites engorrosos ni preguntas.
            </p>
          </div>
        </div>
      </section>

      {/* 12. PREGUNTAS FRECUENTES (FAQ) */}
      <section id="faq" className="py-20 px-4 md:px-8 max-w-4xl mx-auto border-t border-white/10 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-[0.2em] font-bold block mb-2">
            // RESOLVEMOS TODAS TUS DUDAS
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
            Preguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Frecuentes</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx} 
                className="rounded-2xl bg-zinc-950 border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-poppins font-bold text-sm sm:text-base text-white hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-cyan-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />}
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 font-sans text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 13. FRASE FINAL & CIERRE DE IMPACTO */}
      <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto text-center border-t border-white/10 relative z-10">
        <div className="p-8 sm:p-14 rounded-[3rem] bg-gradient-to-b from-zinc-950 via-[#0d1424] to-zinc-950 border border-cyan-500/40 shadow-[0_0_80px_rgba(6,182,212,0.2)]">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-[0.25em] font-bold block mb-4">
            // EL MOMENTO ES AHORA
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-tight">
            ¿Qué vas a crear?
          </h2>
          <p className="font-sans text-gray-300 text-base sm:text-xl max-w-2xl mx-auto mt-4 leading-relaxed">
            Tu próxima gran idea puede comenzar con una sola instrucción.
          </p>
          <div className="font-mono text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 font-bold tracking-widest mt-2 uppercase">
            IA IMPACTO • De una idea a algo real.
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleOpenRegister('Preventa ($199.000 COP)')}
              className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-black font-poppins font-black text-sm uppercase tracking-wider shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Quiero Mi Cupo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${IA_IMPACTO_CONFIG.officialPhone}?text=${encodeURIComponent('¡Hola Expándete! Tengo una duda antes de inscribirme a la experiencia IA IMPACTO en Medellín.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-poppins font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Consultar por WhatsApp (+57 304 575 1648)</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-4 md:px-8 border-t border-white/10 text-center text-xs font-mono text-gray-500 relative z-10 bg-black/60">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-poppins font-black text-white text-sm">EXPÁNDETE</span>
            <span className="text-gray-600">•</span>
            <span>IA IMPACTO Medellín</span>
          </div>
          <p>© {new Date().getFullYear()} Expándete Cloud. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href={`https://wa.me/${IA_IMPACTO_CONFIG.officialPhone}`} className="hover:text-cyan-400 transition-colors">WhatsApp Soporte</a>
            <a href={IA_IMPACTO_CONFIG.telegramCommunityUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Telegram</a>
          </div>
        </div>
      </footer>

      {/* MODAL INTERACTIVO DE REGISTRO & PAGO */}
      <AnimatePresence>
        {isRegisterModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsRegisterModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto"
          >
            <div
              className="relative max-w-xl w-full bg-zinc-950 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(6,182,212,0.3)] my-auto text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsRegisterModalOpen(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white p-2 rounded-full bg-white/10 transition-colors"
                aria-label="Cerrar modal de registro"
              >
                <X className="w-5 h-5" />
              </button>

              {!registrationSuccess ? (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
                      REGISTRO OFICIAL • MEDELLÍN
                    </span>
                    <h3 className="font-poppins font-black text-2xl text-white mt-1">
                      Apartar Cupo en IA IMPACTO
                    </h3>
                    <p className="font-sans text-xs text-gray-300 mt-1">
                      Fase seleccionada: <strong className="text-cyan-300">{formData.faseSeleccionada}</strong>. Completa tus datos para confirmar tu lugar y acceso a la comunidad.
                    </p>
                  </div>

                  {/* Campos */}
                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1">Nombre Completo *</label>
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Ej. Juan Camilo Pérez"
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-white text-xs font-sans focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-mono text-gray-300 mb-1">WhatsApp (con código país) *</label>
                        <input
                          type="tel"
                          required
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          placeholder="Ej. 3045751648"
                          className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-white text-xs font-sans focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-gray-300 mb-1">Correo Electrónico *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="tu@correo.com"
                          className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-white text-xs font-sans focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-mono text-gray-300 mb-1">Nivel en IA</label>
                        <select
                          value={formData.nivelIa}
                          onChange={(e) => setFormData({ ...formData, nivelIa: e.target.value })}
                          className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-white text-xs font-sans focus:outline-none focus:border-cyan-400 transition-colors"
                        >
                          <option value="Principiante (Desde Cero)">Principiante (Desde Cero)</option>
                          <option value="Básico (Uso ChatGPT a veces)">Básico (Uso ChatGPT a veces)</option>
                          <option value="Intermedio (Creo imágenes / prompts)">Intermedio (Creo imágenes / prompts)</option>
                          <option value="Avanzado (Quiero crear apps y código)">Avanzado (Quiero crear apps y código)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-gray-300 mb-1">Interés Principal</label>
                        <select
                          value={formData.interesPrincipal}
                          onChange={(e) => setFormData({ ...formData, interesPrincipal: e.target.value })}
                          className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-white text-xs font-sans focus:outline-none focus:border-cyan-400 transition-colors"
                        >
                          <option value="Crear Contenidos, Imágenes y Video">Crear Contenidos, Imágenes y Video</option>
                          <option value="Crear Landing Pages y Aplicaciones">Crear Landing Pages y Aplicaciones</option>
                          <option value="Automatizar mi Negocio / Ventas">Automatizar mi Negocio / Ventas</option>
                          <option value="Ingeniería de Prompts Avanzada">Ingeniería de Prompts Avanzada</option>
                          <option value="Todo el Flujo Completo">Todo el Flujo Completo</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1">
                        ¿Qué te gustaría aprender a crear con IA? <span className="text-gray-500 font-normal">(Opcional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.queTeGustariaCrear}
                        onChange={(e) => setFormData({ ...formData, queTeGustariaCrear: e.target.value })}
                        placeholder="Ej. Quiero crear una landing para vender servicios de consultoría"
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-white text-xs font-sans focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    {/* Método de pago selector */}
                    <div className="pt-2">
                      <label className="block text-xs font-mono text-gray-300 mb-2">Método de Pago Preferido:</label>
                      <div className="grid grid-cols-2 gap-2.5">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('whatsapp')}
                          className={`p-3 rounded-xl border text-left flex items-center gap-2.5 cursor-pointer transition-all ${
                            paymentMethod === 'whatsapp'
                              ? 'bg-emerald-500/15 border-emerald-400 text-white'
                              : 'bg-black/40 border-white/10 text-gray-400 hover:text-white'
                          }`}
                        >
                          <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                          <div className="flex flex-col">
                            <span className="font-poppins font-bold text-xs">WhatsApp Directo</span>
                            <span className="text-[10px] text-gray-400">Transferencia / Nequi</span>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => setPaymentMethod('wompi')}
                          className={`p-3 rounded-xl border text-left flex items-center gap-2.5 cursor-pointer transition-all ${
                            paymentMethod === 'wompi'
                              ? 'bg-indigo-500/15 border-indigo-400 text-white'
                              : 'bg-black/40 border-white/10 text-gray-400 hover:text-white'
                          }`}
                        >
                          <CreditCard className="w-4 h-4 text-indigo-400 shrink-0" />
                          <div className="flex flex-col">
                            <span className="font-poppins font-bold text-xs">Wompi Colombia</span>
                            <span className="text-[10px] text-gray-400">PSE / Bancolombia / TC</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-black font-poppins font-black text-xs uppercase tracking-wider shadow-lg shadow-cyan-400/25 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    <span>{paymentMethod === 'wompi' ? 'Continuar a Pago con Wompi ($199.000 COP)' : 'Confirmar Registro por WhatsApp'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[10px] font-mono text-center text-gray-500">
                    🔒 Tus datos están protegidos. Soporte directo al +57 304 575 1648.
                  </p>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <h3 className="font-poppins font-black text-2xl text-white">
                    ¡Registro Inicial Recibido!
                  </h3>

                  <p className="font-sans text-xs text-gray-300 max-w-md mx-auto leading-relaxed">
                    Hemos abierto tu canal de confirmación. Únete ahora mismo al canal informativo de Telegram para recibir las novedades y material previo:
                  </p>

                  <div className="pt-2 flex flex-col gap-2.5">
                    <a
                      href={IA_IMPACTO_CONFIG.telegramCommunityUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-6 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-poppins font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Send className="w-4 h-4" />
                      <span>Entrar a la Comunidad de Telegram</span>
                    </a>

                    <button
                      onClick={() => setIsRegisterModalOpen(false)}
                      className="py-2.5 px-6 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white font-poppins text-xs font-bold transition-colors"
                    >
                      Cerrar Ventana
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* LIGHTBOX MODAL FOR 8K HYPERREALISTIC IMAGES */}
        {selectedShowcaseItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl p-4 md:p-8 flex items-center justify-center"
            onClick={() => setSelectedShowcaseItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[92vh] overflow-y-auto bg-zinc-950 border border-cyan-500/40 rounded-3xl p-6 md:p-8 shadow-[0_0_80px_rgba(6,182,212,0.3)] space-y-5"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <span className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 font-mono text-xs font-bold uppercase">
                    {selectedShowcaseItem.resolution} • {selectedShowcaseItem.engine}
                  </span>
                  <h3 className="font-poppins font-black text-xl md:text-2xl text-white mt-1.5">
                    {selectedShowcaseItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedShowcaseItem(null)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Large Image Preview */}
              <div className="relative rounded-2xl overflow-hidden bg-black border border-white/10 max-h-[50vh] flex items-center justify-center">
                <img
                  src={selectedShowcaseItem.image}
                  alt={selectedShowcaseItem.title}
                  className="max-h-[50vh] w-full object-contain"
                />
              </div>

              {/* Details & Prompt Formula */}
              <div className="space-y-4">
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {selectedShowcaseItem.description}
                </p>

                <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs text-amber-400 uppercase font-bold flex items-center gap-1.5">
                      <Terminal className="w-4 h-4" /> Prompt Maestro Completo (Listo para copiar)
                    </span>
                    <button
                      onClick={(e) => handleCopyItemPrompt(selectedShowcaseItem, e)}
                      className="text-xs font-mono font-bold text-gray-300 hover:text-cyan-300 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      {copiedPromptId === selectedShowcaseItem.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">¡Copiado al portapapeles!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar Prompt Maestro</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="font-mono text-xs text-gray-300 bg-zinc-900/90 p-3 rounded-xl border border-white/5 select-all overflow-x-auto leading-relaxed">
                    {selectedShowcaseItem.promptUsed}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 text-xs text-emerald-300 font-sans flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Impacto comercial real:</strong> {selectedShowcaseItem.businessImpact}</span>
                </div>

                {selectedShowcaseItem.videoUrl && (
                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => {
                        const vid = selectedShowcaseItem.videoUrl;
                        setSelectedShowcaseItem(null);
                        setActiveVideoModal(vid || null);
                      }}
                      className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-poppins text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>Ver Spot Comercial Animado</span>
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* OFFICIAL FLYER LIGHTBOX MODAL */}
        {selectedFlyer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl p-3 sm:p-6 md:p-8 flex items-center justify-center overflow-y-auto"
            onClick={() => setSelectedFlyer(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-5xl w-full bg-zinc-950 border border-cyan-500/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(6,182,212,0.25)] my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-zinc-900/50">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-cyan-400 text-black font-mono text-xs font-black uppercase tracking-wider">
                    {selectedFlyer.badge}
                  </span>
                  <span className="text-xs font-mono text-gray-400 hidden sm:inline">
                    Pieza {selectedFlyer.number} de 05 • {selectedFlyer.sessionRef}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevFlyer}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 cursor-pointer transition-colors"
                    title="Flyer anterior"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextFlyer}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 cursor-pointer transition-colors"
                    title="Siguiente flyer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedFlyer(null)}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors ml-2"
                    title="Cerrar"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Modal Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-6 max-h-[80vh] overflow-y-auto">
                {/* Left: Full Flyer Image View */}
                <div className="lg:col-span-7 flex flex-col items-center justify-center bg-black/80 rounded-2xl border border-white/10 overflow-hidden relative group">
                  <img
                    src={selectedFlyer.image}
                    alt={selectedFlyer.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                  <div className="absolute top-3 right-3">
                    <a
                      href={selectedFlyer.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-black/80 hover:bg-black text-cyan-300 border border-cyan-400/40 text-[11px] font-mono font-bold flex items-center gap-1.5 backdrop-blur-md transition-colors shadow-lg"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Abrir Imagen HD</span>
                    </a>
                  </div>
                </div>

                {/* Right: Technical Explanation & Actions */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div>
                      <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold">
                        // FICHA TÉCNICA OFICIAL
                      </span>
                      <h3 className="font-poppins font-black text-xl sm:text-2xl text-white mt-1">
                        {selectedFlyer.title}
                      </h3>
                      <p className="font-sans text-xs text-gray-300 mt-1">
                        {selectedFlyer.subtitle}
                      </p>
                    </div>

                    <p className="font-sans text-sm text-gray-200 leading-relaxed bg-white/5 p-3.5 rounded-2xl border border-white/10">
                      {selectedFlyer.description}
                    </p>

                    <div>
                      <h4 className="font-mono text-xs text-cyan-300 font-bold uppercase tracking-wider mb-2.5">
                        Contenido y Entregables de la Pieza:
                      </h4>
                      <div className="space-y-2">
                        {selectedFlyer.keyPoints.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bottom */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <button
                      onClick={() => {
                        const fl = selectedFlyer;
                        setSelectedFlyer(null);
                        handleOpenRegister(`Interés en ${fl.title}`);
                      }}
                      className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-black font-poppins font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all transform hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Asegurar Mi Cupo Preventa ($199.000 COP)</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={`https://wa.me/${IA_IMPACTO_CONFIG.officialPhone}?text=${encodeURIComponent(
                        `¡Hola Expándete! Estoy viendo el flyer oficial "${selectedFlyer.title}" de IA IMPACTO. Quisiera resolver unas dudas y apartar mi cupo en Medellín.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-poppins font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                    >
                      <span>Consultar esta Ficha por WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* ACTIVE VIDEO SPOT MODAL */}
        {activeVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl p-4 md:p-8 flex items-center justify-center"
            onClick={() => setActiveVideoModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-3xl w-full bg-zinc-950 border border-indigo-500/40 rounded-3xl p-4 md:p-6 shadow-2xl space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Video className="w-4 h-4" /> Spot Publicitario Comercial Generado con IA
                </span>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/10">
                <video
                  src={activeVideoModal}
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="text-center pt-2">
                <p className="font-sans text-xs text-gray-400">
                  Creado a partir de modelos de video generativo y cámara 3D de última generación.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PERSISTENT FLOATING BOTTOM CLOSING BAR */}
      <AnimatePresence>
        {showStickyBottomBar && !isRegisterModalOpen && !selectedShowcaseItem && !selectedFlyer && !activeVideoModal && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-0 inset-x-0 z-40 bg-zinc-950/95 backdrop-blur-xl border-t border-amber-500/40 px-4 py-3 shadow-[0_-10px_35px_rgba(0,0,0,0.8)]"
          >
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Left Info: Urgency + Price */}
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-9 h-9 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0 hidden sm:flex">
                  <Flame className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
                    <span className="px-2 py-0.5 rounded-full bg-amber-400 text-black font-mono text-[10px] font-black uppercase tracking-wider">
                      Preventa: $199.000 COP
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">
                      Ahorras $100.000
                    </span>
                    <span className="text-xs text-gray-400 hidden md:inline">
                      • Solo 7 cupos libres
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-gray-300 mt-0.5 flex items-center gap-1.5 justify-center sm:justify-start">
                    <span>El precio sube en:</span>
                    <span className="text-amber-300 font-bold bg-black/70 px-1.5 py-0.5 rounded border border-white/10">
                      {String(timeLeft.days).padStart(2, '0')}d : {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
                    </span>
                  </div>
                </div>
              </div>

              {/* Right CTA Actions */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
                <a
                  href={`https://wa.me/${IA_IMPACTO_CONFIG.officialPhone}?text=${encodeURIComponent('Hola, quiero asegurar 1 de los 7 cupos de Preventa para IA IMPACTO ($199.000 COP).')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-poppins font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span className="hidden md:inline">WhatsApp</span>
                </a>

                <button
                  onClick={() => handleOpenRegister('Preventa ($199.000 COP)')}
                  className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-black font-poppins font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-400/30 flex items-center justify-center gap-1.5 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Asegurar Mi Cupo ($199.000)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
