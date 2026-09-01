import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Flame, 
  CheckCircle, 
  Check, 
  ShoppingBag, 
  Zap, 
  Play, 
  Pause, 
  ExternalLink, 
  ShieldCheck, 
  Clock, 
  Camera, 
  Layers, 
  MessageCircle, 
  CreditCard, 
  Star, 
  ChevronRight,
  Eye,
  Send,
  X,
  PhoneCall
} from 'lucide-react';

interface StudioPageProps {
  onBackToMain: () => void;
}

const FLYER_EXAMPLES = [
  {
    id: 1,
    title: "Anuncio Comercial Gastronómico",
    category: "Restaurantes & Bebidas",
    url: "https://vicflix.expandete.cloud/Expandete_videos/ej2.jpg",
    desc: "Composición publicitaria con iluminación cinematográfica y tipografía de venta directa."
  },
  {
    id: 2,
    title: "Flyer Publicitario de Moda & Calzado",
    category: "E-commerce & Ropa",
    url: "https://vicflix.expandete.cloud/Expandete_videos/ej3.jpeg",
    desc: "Integración de producto sobre entorno editorial de lujo con alto contraste visual."
  },
  {
    id: 3,
    title: "Creativo de Conversión para Belleza",
    category: "Cosmética & Cuidado Personal",
    url: "https://vicflix.expandete.cloud/Expandete_videos/ej4.jpg",
    desc: "Destacado de textura y detalles del producto con estética de campaña internacional."
  },
  {
    id: 4,
    title: "Anuncio de Producto Físico & Tech",
    category: "Tecnología & Gadgets",
    url: "https://vicflix.expandete.cloud/Expandete_videos/ej5.jpg",
    desc: "Atmósfera futurista y pulida diseñada para detener el scroll en Instagram y TikTok."
  },
  {
    id: 5,
    title: "Campaña Promocional de Impacto",
    category: "Ofertas & Temporada",
    url: "https://vicflix.expandete.cloud/Expandete_videos/ej6.jpg",
    desc: "Estructura de anuncio con gancho visual, prueba de producto y llamada a la acción."
  },
  {
    id: 6,
    title: "Flyer Comercial de Alta Rotación",
    category: "Alimentos & Retail",
    url: "https://vicflix.expandete.cloud/Expandete_videos/ej7.jpg",
    desc: "Enfoque publicitario apetitoso y vibrante para aumentar conversiones en Meta Ads."
  }
];

const VIDEO_EXAMPLES = [
  {
    id: 1,
    title: "Video Spot Cinemático 01",
    format: "Reels / TikTok / Shorts (9:16)",
    src: "https://vicflix.expandete.cloud/Expandete_videos/her1.mp4",
    tagline: "Transiciones dinámicas y movimiento de producto con IA"
  },
  {
    id: 2,
    title: "Video Spot Cinemático 02",
    format: "Reels / TikTok / Shorts (9:16)",
    src: "https://vicflix.expandete.cloud/Expandete_videos/her2.mp4",
    tagline: "Efectos de iluminación comercial y ritmo de alto impacto"
  },
  {
    id: 3,
    title: "Video Spot Cinemático 03",
    format: "Reels / TikTok / Shorts (9:16)",
    src: "https://vicflix.expandete.cloud/Expandete_videos/her3.mp4",
    tagline: "Enfoque publicitario para venta directa y retención de usuarios"
  }
];

const PACKAGE_CARDS = [
  {
    id: 'flyer',
    title: "Flyer Publicitario IA",
    badge: "ENTRADA RÁPIDA",
    price: "$34.900",
    unit: "COP",
    deliveryTime: "Entrega en 24 a 48 horas",
    graphic: "https://vicflix.expandete.cloud/Expandete_videos/p1.jpg",
    highlight: false,
    wompiUrl: "https://checkout.wompi.co/l/SX6mal",
    description: "Ideal para promocionar un producto específico con calidad de agencia internacional sin gastar fortunas.",
    features: [
      "1 Pieza publicitaria en Ultra Alta Resolución (1:1 o 9:16)",
      "Retoque fotográfico con IA y composición comercial",
      "Iluminación volumétrica y fondo hiperrealista de estudio",
      "Copy publicitario sugerido listo para publicar",
      "1 Ronda de ajustes incluida",
      "Entrega lista para pautar en Meta Ads / WhatsApp"
    ],
    whatsappText: "¡Hola Expándete Studio! Quiero solicitar el Flyer Publicitario IA por $34.900 COP para mi producto. ¿Cómo empezamos?"
  },
  {
    id: 'pack-vendedor',
    title: "Pack Vendedor",
    badge: "OFERTA ESTRELLA // MÁS VENDIDO",
    price: "$149.900",
    unit: "COP",
    regularPrice: "$244.500 COP",
    savings: "Ahorras $94.600 COP",
    deliveryTime: "Entrega prioritaria en 48 a 72 horas",
    graphic: "https://vicflix.expandete.cloud/Expandete_videos/p2.jpg",
    highlight: true,
    wompiUrl: "https://checkout.wompi.co/l/DqTsUR",
    description: "El paquete definitivo para lanzar una campaña publicitaria completa con variedad de formatos para testear.",
    features: [
      "3 Flyers Publicitarios Comerciales en Ultra HD",
      "2 Video Spots Verticales (9:16) para Reels y TikTok",
      "3 Copys de neuro-ventas con ganchos, dolor y llamada a la acción",
      "Diferentes ángulos y conceptos visuales para pruebas A/B",
      "Música comercial licenciada y efectos sonoros de impacto",
      "Soporte prioritario y asesoría básica de publicación",
      "2 Rondas de ajustes incluidas"
    ],
    whatsappText: "¡Hola Expándete Studio! Quiero aprovechar la Oferta Estrella del Pack Vendedor (3 Flyers + 2 Videos + Copys) por $149.900 COP. Tengo las fotos de mis productos listas."
  },
  {
    id: 'video-spot',
    title: "Video Spot IA",
    badge: "ALTO ENGAGEMENT",
    price: "$69.900",
    unit: "COP",
    deliveryTime: "Entrega en 48 horas",
    graphic: "https://vicflix.expandete.cloud/Expandete_videos/p3.jpg",
    highlight: false,
    wompiUrl: "https://checkout.wompi.co/l/1ddQyW",
    description: "Video dinámico de 10 a 15 segundos diseñado para capturar la atención en los primeros 3 segundos.",
    features: [
      "1 Video publicitario vertical (9:16) para Reels / TikTok / Shorts",
      "Efectos cinemáticos de cámara y animación de tu producto",
      "Música en tendencia comercial y ganchos de retención",
      "Titulares y llamados a la acción animados en pantalla",
      "Copywriting optimizado para pie de video",
      "Entrega en formato MP4 listo para pauta"
    ],
    whatsappText: "¡Hola Expándete Studio! Quiero solicitar el Video Spot IA para Reels y TikTok por $69.900 COP para promocionar mi producto."
  }
];

export default function StudioPage({ onBackToMain }: StudioPageProps) {
  const [heroVideo, setHeroVideo] = useState('https://vicflix.expandete.cloud/Expandete_videos/hesh.mp4');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);
  const [selectedPackForOrder, setSelectedPackForOrder] = useState<typeof PACKAGE_CARDS[0] | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [paidPlanNotification, setPaidPlanNotification] = useState<string | null>(null);

  // Form state
  const [orderForm, setOrderForm] = useState({
    nombre: '',
    whatsapp: '',
    producto: '',
    categoria: 'Moda y Accesorios',
    detalles: '',
    selectedPack: 'pack-vendedor'
  });

  const [paymentMethod, setPaymentMethod] = useState<'whatsapp' | 'wompi'>('whatsapp');

  useEffect(() => {
    // Check if user is redirected back after Wompi payment
    const checkPaymentParams = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const status = urlParams.get('status') || urlParams.get('id') || urlParams.get('transaction_id');
      const plan = urlParams.get('plan');
      
      if (status || plan) {
        if (plan === 'flyer_ia' || plan === 'flyer') {
          setPaidPlanNotification('Flyer Publicitario IA ($34.900 COP)');
        } else if (plan === 'pack_vendedor' || plan === 'pack-vendedor') {
          setPaidPlanNotification('Pack Vendedor ($149.900 COP)');
        } else if (plan === 'video_spot_ia' || plan === 'video-spot') {
          setPaidPlanNotification('Video Spot IA ($69.900 COP)');
        } else {
          setPaidPlanNotification('tu paquete de Expándete Studio');
        }
      }
    };

    checkPaymentParams();

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setHeroVideo('https://vicflix.expandete.cloud/Expandete_videos/hesv.mp4');
      } else {
        setHeroVideo('https://vicflix.expandete.cloud/Expandete_videos/hesh.mp4');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOpenOrder = (pack?: typeof PACKAGE_CARDS[0]) => {
    if (pack) {
      setSelectedPackForOrder(pack);
      setOrderForm(prev => ({ ...prev, selectedPack: pack.id }));
    } else {
      setSelectedPackForOrder(PACKAGE_CARDS[1]); // Pack vendedor by default
    }
    setIsOrderModalOpen(true);
  };

  const getDirectWhatsAppUrl = (customMessage?: string) => {
    const phone = "573045751648"; // Expándete official WhatsApp: +57 304 575 1648
    const text = customMessage || `¡Hola Expándete Studio! Quiero información sobre los servicios de publicidad visual con IA para mi negocio.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentPack = PACKAGE_CARDS.find(p => p.id === orderForm.selectedPack) || PACKAGE_CARDS[1];
    
    if (paymentMethod === 'wompi' && currentPack.wompiUrl) {
      // Direct to Wompi checkout link provided by user
      window.open(currentPack.wompiUrl, '_blank', 'noopener,noreferrer');
      setIsOrderModalOpen(false);
      return;
    }

    const message = `🌟 *NUEVO PEDIDO EXPÁNDETE STUDIO*\n\n` +
      `📦 *Paquete:* ${currentPack.title} (${currentPack.price} ${currentPack.unit})\n` +
      `👤 *Cliente:* ${orderForm.nombre}\n` +
      `📱 *WhatsApp:* ${orderForm.whatsapp}\n` +
      `🛍️ *Producto a promocionar:* ${orderForm.producto}\n` +
      `🏷️ *Categoría:* ${orderForm.categoria}\n` +
      `📝 *Detalles o ideas:* ${orderForm.detalles || 'Sin observaciones iniciales'}\n\n` +
      `Deseo coordinar el envío de las fotos y realizar el pago (${paymentMethod === 'wompi' ? 'Pasarela Wompi / Bancolombia / Nequi' : 'Acuerdo directo por WhatsApp'}).`;

    const waUrl = getDirectWhatsAppUrl(message);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setIsOrderModalOpen(false);
  };

  return (
    <div className="min-h-screen w-full bg-[#050505] text-white selection:bg-amber-400 selection:text-black font-sans relative overflow-x-hidden">
      
      {/* Notification Banner for successful payment via Wompi */}
      <AnimatePresence>
        {paidPlanNotification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="sticky top-[65px] z-50 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black px-4 py-3.5 shadow-2xl border-b border-amber-300 flex items-center justify-between gap-4"
          >
            <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <span className="p-2 bg-black text-amber-400 rounded-full shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </span>
                <div>
                  <span className="font-poppins font-black text-sm uppercase block">
                    ¡Pago Confirmado para {paidPlanNotification}!
                  </span>
                  <span className="text-xs font-medium text-black/80">
                    El siguiente paso es enviar la foto de tu producto para iniciar la producción de inmediato.
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`https://wa.me/573045751648?text=${encodeURIComponent(`¡Hola Expándete Studio! Acabo de pagar ${paidPlanNotification} por Wompi. Adjunto mi comprobante y fotos de mi producto para empezar.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-amber-400 hover:bg-zinc-900 px-5 py-2 rounded-full font-poppins font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg transition-transform hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4" />
                  Enviar Fotos por WhatsApp
                </a>
                <button
                  onClick={() => setPaidPlanNotification(null)}
                  className="p-1.5 hover:bg-black/10 rounded-full transition-colors text-black"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Luxury Golden Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-amber-500/20 py-3 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo & Brand ID */}
          <div className="flex items-center gap-3">
            <button 
              onClick={onBackToMain}
              className="flex items-center gap-2 text-xs font-mono font-bold text-gray-400 hover:text-amber-300 transition-colors uppercase mr-2 border-r border-white/10 pr-3"
              title="Volver a Expándete Principal"
            >
              <ArrowLeft className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">Expándete Cloud</span>
            </button>

            <div className="flex items-center gap-3">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-300 rounded-xl blur-xs opacity-50 group-hover:opacity-100 transition duration-300" />
                <img 
                  src="https://vicflix.expandete.cloud/Expandete_videos/Logo.jpeg" 
                  alt="Expándete Studio Logo" 
                  className="relative w-10 h-10 md:w-11 md:h-11 rounded-lg object-cover border border-amber-400/40 shadow-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-poppins font-black text-base md:text-lg tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
                  Expándete Studio
                </span>
                <span className="text-[10px] font-mono text-amber-300/70 tracking-widest uppercase font-bold">
                  Publicidad Visual Comercial con IA
                </span>
              </div>
            </div>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-poppins font-bold uppercase tracking-wider text-gray-300">
            <a href="#propuesta" className="hover:text-amber-300 transition-colors">Propuesta</a>
            <a href="#como-funciona" className="hover:text-amber-300 transition-colors">Cómo Funciona</a>
            <a href="#paquetes" className="hover:text-amber-300 transition-colors">Paquetes & Precios</a>
            <a href="#galeria" className="hover:text-amber-300 transition-colors">Galería de Anuncios</a>
            <a href="#videos" className="hover:text-amber-300 transition-colors">Video Spots</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 md:gap-3">
            <a 
              href={getDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full border border-amber-400/30 text-amber-300 hover:bg-amber-400/10 font-poppins text-xs font-bold uppercase tracking-wider transition-all duration-300"
              title="Chatear por WhatsApp al +57 304 575 1648"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp (304 575 1648)</span>
            </a>

            <button 
              onClick={() => handleOpenOrder()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black font-poppins font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.7)] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ordenar Anuncio</span>
            </button>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION CINEMATOGRÁFICO CON VIDEO RESPONSIVO (Dark Gold Luxury) */}
      <section className="relative min-h-[90vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden px-4 md:px-8 py-16">
        {/* Background Video with Luxury Vignette */}
        <div className="absolute inset-0 z-0">
          <video 
            key={heroVideo}
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover opacity-60 scale-105"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Floating Luxury Elements */}
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-6 pt-6">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-400/40 text-amber-300 font-mono text-xs font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.2)]"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-400" />
            <span>NUEVA UNIDAD • PUBLICIDAD VISUAL DE ALTA CONVERSIÓN CON IA</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="font-poppins font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[1.05]"
          >
            Envía una foto simple. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 drop-shadow-[0_0_35px_rgba(245,158,11,0.3)]">
              Recibe un anuncio de agencia.
            </span>
          </motion.h1>

          {/* Subtitle / Core Value Proposition */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-poppins font-medium text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed"
          >
            No vendemos simples «imágenes de IA». Creamos piezas publicitarias comerciales optimizadas con copywriting persuasivo, iluminación de estudio y psicología de ventas para detener el scroll y disparar tus pedidos en redes sociales.
          </motion.p>

          {/* Quick Price Anchors */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 py-2"
          >
            <div className="flex items-center gap-2 bg-black/60 border border-amber-500/30 px-4 py-2 rounded-xl backdrop-blur-md">
              <Camera className="w-4 h-4 text-amber-400" />
              <span className="text-xs text-gray-300 font-bold">Flyers desde <strong className="text-amber-300">$34.900 COP</strong></span>
            </div>
            <div className="flex items-center gap-2 bg-black/60 border border-amber-500/30 px-4 py-2 rounded-xl backdrop-blur-md">
              <Play className="w-4 h-4 text-amber-400" />
              <span className="text-xs text-gray-300 font-bold">Video Spots desde <strong className="text-amber-300">$69.900 COP</strong></span>
            </div>
            <div className="flex items-center gap-2 bg-amber-500/20 border border-amber-400/60 px-4 py-2 rounded-xl backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <Flame className="w-4 h-4 text-yellow-300" />
              <span className="text-xs text-amber-200 font-black">Pack Vendedor <strong className="text-white">$149.900 COP</strong></span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2"
          >
            <button 
              onClick={() => handleOpenOrder()}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black font-poppins font-black text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:shadow-[0_0_45px_rgba(245,158,11,0.8)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Quiero Publicidad de Alta Conversión</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a 
              href="#paquetes"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-white font-poppins font-bold text-sm uppercase tracking-wider hover:bg-white/10 hover:border-amber-400/50 transition-all duration-300 text-center"
            >
              Ver Ofertas & Galería
            </a>
          </motion.div>

          {/* Social Proof Mini Bar */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-6 text-xs text-gray-400 font-mono">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Entrega Express 24-48h</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5 text-amber-400" />
              <span>Pagos con Wompi, Nequi & PSE</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Garantía de Satisfacción</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CÓMO FUNCIONA EL PROCESO (3 Pasos Sin Fricción) */}
      <section id="como-funciona" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-amber-400 uppercase tracking-[0.2em] font-bold block mb-2">
            // FLUJO SIMPLE Y SIN COMPLICACIONES
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            ¿Cómo funciona <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">Expándete Studio</span>?
          </h2>
          <p className="font-poppins text-gray-400 text-sm md:text-base mt-3">
            Olvídate de pagar miles de dólares en estudios fotográficos, modelos y agencias lentas. Así de rápido transformamos tu producto en ventas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Step 1 */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="relative bg-zinc-950/80 border border-amber-500/20 rounded-3xl p-8 flex flex-col justify-between group hover:border-amber-400/60 transition-all duration-300 shadow-xl"
          >
            <div className="absolute top-6 right-6 font-mono font-black text-4xl text-amber-500/20 group-hover:text-amber-500/40 transition-colors">
              01
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                <Camera className="w-7 h-7" />
              </div>
              <h3 className="font-poppins font-bold text-xl uppercase text-white group-hover:text-amber-300 transition-colors">
                1. Envías la foto de tu producto
              </h3>
              <p className="font-poppins text-sm text-gray-300 leading-relaxed">
                Toma una foto con tu teléfono celular sobre una mesa con buena luz natural o fondo neutro. No necesitas cámaras profesionales ni edición previa.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-amber-400/80">
              ✓ Aceptamos fotos desde cualquier smartphone
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="relative bg-zinc-950/80 border border-amber-500/20 rounded-3xl p-8 flex flex-col justify-between group hover:border-amber-400/60 transition-all duration-300 shadow-xl"
          >
            <div className="absolute top-6 right-6 font-mono font-black text-4xl text-amber-500/20 group-hover:text-amber-500/40 transition-colors">
              02
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                <Sparkles className="w-7 h-7 animate-pulse" />
              </div>
              <h3 className="font-poppins font-bold text-xl uppercase text-white group-hover:text-amber-300 transition-colors">
                2. IA de Élite & Dirección de Arte
              </h3>
              <p className="font-poppins text-sm text-gray-300 leading-relaxed">
                Nuestros modelos de Inteligencia Artificial y directores creativos generan entornos de ultra lujo, iluminación de estudio y textos publicitarios basados en neuro-ventas.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-amber-400/80">
              ✓ Composición publicitaria de alto impacto
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="relative bg-zinc-950/80 border border-amber-500/20 rounded-3xl p-8 flex flex-col justify-between group hover:border-amber-400/60 transition-all duration-300 shadow-xl"
          >
            <div className="absolute top-6 right-6 font-mono font-black text-4xl text-amber-500/20 group-hover:text-amber-500/40 transition-colors">
              03
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="font-poppins font-bold text-xl uppercase text-white group-hover:text-amber-300 transition-colors">
                3. Recibes tu Anuncio Listo para Vender
              </h3>
              <p className="font-poppins text-sm text-gray-300 leading-relaxed">
                Recibes tus piezas en alta resolución o video spot en formato 9:16 listo para pautar en Meta Ads, TikTok Ads, historias y estados de WhatsApp.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-amber-400/80">
              ✓ Entrega en 24 a 48 horas vía WhatsApp/Email
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. PROPUESTA DE VALOR & COMPARATIVA */}
      <section id="propuesta" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-b from-zinc-900/90 to-black border border-amber-500/30 rounded-[2.5rem] p-8 md:p-14 shadow-[0_0_50px_rgba(212,175,55,0.1)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Left explanation */}
            <div className="flex flex-col gap-6">
              <span className="font-mono text-xs text-amber-400 tracking-[0.2em] font-bold uppercase">
                // LA DIFERENCIA EXPÁNDETE STUDIO
              </span>
              <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-tight">
                No son «fotos bonitas», <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">
                  son máquinas de conversión comercial.
                </span>
              </h2>
              <p className="font-poppins text-gray-300 text-sm md:text-base leading-relaxed">
                El 90% de los emprendedores publican fotos opacas o fondos desordenados que ahuyentan a los clientes potenciales. Con Expándete Studio, le damos a tu marca el estatus y prestigio de una multinacional a una fracción del costo tradicional.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-amber-500/20 text-amber-400 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-white text-sm">Ganchos Visuales Inmediatos</h4>
                    <p className="text-xs text-gray-400">Detén el scroll en Instagram y TikTok durante los primeros 2 segundos críticos.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-amber-500/20 text-amber-400 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-white text-sm">Psicología de Color y Prestigio</h4>
                    <p className="text-xs text-gray-400">Fondos Dark Gold, texturas de lujo y acabados que elevan el valor percibido de tu producto.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-amber-500/20 text-amber-400 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-white text-sm">Retorno de Inversión Instantáneo</h4>
                    <p className="text-xs text-gray-400">Con solo 1 o 2 ventas que genere tu anuncio, recuperas el 100% de la inversión de tu pieza.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right visual presentation */}
            <div className="relative flex flex-col items-center">
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-amber-400/40 shadow-[0_0_40px_rgba(245,158,11,0.25)] group">
                <img 
                  src="https://vicflix.expandete.cloud/Expandete_videos/ej3.jpeg" 
                  alt="Ejemplo Expándete Studio" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-amber-400/50 px-3 py-1.5 rounded-full text-[10px] font-mono text-amber-300 font-bold uppercase tracking-wider">
                  ★ Calidad Publicitaria Expándete Studio
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-black px-4 py-1.5 rounded-full text-xs font-poppins font-black uppercase tracking-wider shadow-lg">
                  Listo para Vender
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. OFERTA Y PRECIOS BASE (Dark Gold / Luxury Cards) */}
      <section id="paquetes" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-amber-400 uppercase tracking-[0.2em] font-bold block mb-2">
            // INVERSIÓN ACCESIBLE & RETORNO INMEDIATO
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Planes y <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500">Paquetes de Publicidad</span>
          </h2>
          <p className="font-poppins text-gray-400 text-sm md:text-base mt-3">
            Elige la solución que mejor se adapte a tu etapa comercial. Pagos 100% seguros a través de Wompi, Nequi, Bancolombia o directo por WhatsApp.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGE_CARDS.map((pack) => (
            <motion.div
              key={pack.id}
              whileHover={{ y: -8 }}
              className={`relative rounded-[2.5rem] p-8 flex flex-col justify-between transition-all duration-300 ${
                pack.highlight 
                  ? 'bg-gradient-to-b from-zinc-900 via-zinc-950 to-black border-2 border-amber-400 shadow-[0_0_50px_rgba(245,158,11,0.3)] scale-105 z-20' 
                  : 'bg-zinc-950/90 border border-amber-500/20 hover:border-amber-400/50 shadow-xl'
              }`}
            >
              {/* Badge */}
              {pack.badge && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-poppins font-black uppercase tracking-wider shadow-lg whitespace-nowrap ${
                  pack.highlight 
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.6)]' 
                    : 'bg-zinc-800 text-amber-300 border border-amber-400/30'
                }`}>
                  {pack.badge}
                </div>
              )}

              <div>
                {/* Header of card */}
                <div className="flex flex-col gap-2 mb-6">
                  <h3 className="font-poppins font-black text-2xl uppercase tracking-tight text-white">
                    {pack.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {pack.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  {pack.regularPrice && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-gray-500 line-through font-mono">{pack.regularPrice}</span>
                      <span className="text-[10px] font-bold font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">{pack.savings}</span>
                    </div>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className="font-poppins font-black text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-400">
                      {pack.price}
                    </span>
                    <span className="text-sm font-bold font-mono text-amber-300/80 uppercase">
                      {pack.unit}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-gray-400 flex items-center gap-1 mt-2">
                    <Clock className="w-3 h-3 text-amber-400" />
                    {pack.deliveryTime}
                  </span>
                </div>

                {/* Graphic Presentation Preview */}
                {pack.graphic && (
                  <div className="mb-6 rounded-2xl overflow-hidden border border-white/10 shadow-inner group">
                    <img 
                      src={pack.graphic} 
                      alt={pack.title} 
                      className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-mono text-amber-400/90 font-bold uppercase tracking-wider block">
                    ¿Qué incluye tu inversión?
                  </span>
                  {pack.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${pack.highlight ? 'text-amber-400' : 'text-amber-400/70'}`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-2.5 pt-4">
                <button
                  onClick={() => handleOpenOrder(pack)}
                  className={`w-full py-3.5 rounded-xl font-poppins font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    pack.highlight
                      ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black shadow-[0_0_25px_rgba(245,158,11,0.5)] hover:shadow-[0_0_35px_rgba(245,158,11,0.8)] hover:scale-102'
                      : 'bg-white/10 hover:bg-amber-400 hover:text-black text-white border border-white/20'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ordenar {pack.title}</span>
                </button>

                {pack.wompiUrl && (
                  <a
                    href={pack.wompiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-400/40 text-amber-300 font-poppins text-[11px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <CreditCard className="w-3.5 h-3.5 text-amber-400" />
                    <span>Pagar con Wompi ({pack.price})</span>
                  </a>
                )}

                <a
                  href={getDirectWhatsAppUrl(pack.whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-black/50 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-poppins text-[11px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Pedir directo por WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. GALERÍA DE ANUNCIOS REALES HECHOS CON IA */}
      <section id="galeria" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-mono text-xs text-amber-400 uppercase tracking-[0.2em] font-bold block mb-2">
              // RESULTADOS DE ALTO IMPACTO
            </span>
            <h2 className="font-poppins font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
              Galería de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">Flyers Publicitarios</span>
            </h2>
          </div>
          <p className="font-poppins text-gray-400 text-xs md:text-sm max-w-md">
            Haz clic en cualquier pieza para ampliarla y ver la calidad publicitaria que recibirá tu negocio.
          </p>
        </div>

        {/* Grid of Image Samples */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FLYER_EXAMPLES.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedImage(item.url)}
              className="group relative rounded-3xl overflow-hidden bg-zinc-950 border border-amber-500/20 hover:border-amber-400/60 transition-all duration-300 cursor-pointer shadow-xl"
            >
              <div className="aspect-[4/5] w-full overflow-hidden relative">
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Overlay view icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-lg">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>

                {/* Bottom details */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest font-bold">
                    {item.category}
                  </span>
                  <h4 className="font-poppins font-bold text-white text-base">
                    {item.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. SECCIÓN DE VIDEO SPOTS (REELS / TIKTOK) */}
      <section id="videos" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-amber-400 uppercase tracking-[0.2em] font-bold block mb-2">
            // FORMATO REELS, TIKTOK & STORIES
          </span>
          <h2 className="font-poppins font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Video Spots de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">Alto Engagement</span>
          </h2>
          <p className="font-poppins text-gray-400 text-sm md:text-base mt-3">
            El video es el formato rey en pauta digital. Dale vida al movimiento y presencia de tu producto con spots de 10 a 15 segundos diseñados para captar miradas.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VIDEO_EXAMPLES.map((video) => (
            <motion.div
              key={video.id}
              whileHover={{ y: -6 }}
              className="bg-zinc-950 rounded-3xl overflow-hidden border border-amber-500/20 hover:border-amber-400/60 p-4 flex flex-col gap-4 shadow-xl group"
            >
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                <video 
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                <button 
                  onClick={() => setActiveVideoModal(video.src)}
                  className="absolute bottom-4 right-4 bg-amber-400 text-black px-3 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg hover:bg-yellow-300 transition-colors"
                >
                  <Play className="w-3 h-3 fill-current" />
                  Ver Spot
                </button>
              </div>

              <div className="flex flex-col gap-1 px-2">
                <span className="text-[10px] font-mono text-amber-400 uppercase font-bold tracking-wider">
                  {video.format}
                </span>
                <h4 className="font-poppins font-bold text-white text-base">
                  {video.title}
                </h4>
                <p className="text-xs text-gray-400">
                  {video.tagline}
                </p>
              </div>

              <button
                onClick={() => handleOpenOrder(PACKAGE_CARDS[2])}
                className="w-full py-3 rounded-xl bg-amber-500/10 hover:bg-amber-400 hover:text-black border border-amber-400/30 text-amber-300 font-poppins text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Ordenar Video ($69.900 COP)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. PUENTE ESTRATÉGICO: ESCALA CON LA EMPRESA MADRE (EXPÁNDETE CLOUD) */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-r from-zinc-950 via-[#101010] to-zinc-950 border border-amber-500/40 p-8 md:p-16 shadow-[0_0_60px_rgba(245,158,11,0.15)]">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl flex flex-col gap-4 text-center lg:text-left">
              <span className="font-mono text-xs text-amber-400 uppercase tracking-[0.2em] font-bold">
                // EL PRÓXIMO PASO EN TU ESCALA
              </span>
              <h2 className="font-poppins font-black text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
                ¿Tu anuncio ya está trayendo clientes? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500">
                  Automatiza y multiplica tu operación.
                </span>
              </h2>
              <p className="font-poppins text-gray-300 text-sm md:text-base leading-relaxed">
                Expándete Studio es el punto de entrada a nuestro ecosistema tecnológico completo. Conecta tus anuncios con <strong>Landing Pages de ultra-velocidad</strong>, <strong>Agentes de IA en WhatsApp</strong> que cierran ventas solos y <strong>Aplicaciones a la Medida</strong> desarrolladas por Expándete.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto shrink-0">
              <button
                onClick={onBackToMain}
                className="px-8 py-4 rounded-full bg-white text-black hover:bg-amber-400 font-poppins font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-xl text-center cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Explorar Ecosistema Expándete</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getDirectWhatsAppUrl("¡Hola Expándete! Deseo una consultoría para conectar mi publicidad visual con Landing Pages y Agentes de IA.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-amber-400/40 bg-black/60 text-amber-300 hover:bg-amber-400/10 font-poppins font-bold text-xs uppercase tracking-wider transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Asesoría Tecnológica</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER LUXURY DARK GOLD */}
      <footer className="border-t border-white/10 bg-[#080808] py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-4">
            <img 
              src="https://vicflix.expandete.cloud/Expandete_videos/Logo.jpeg" 
              alt="Expándete Studio" 
              className="w-12 h-12 rounded-xl object-cover border border-amber-400/40 shadow-md"
            />
            <div className="flex flex-col">
              <span className="font-poppins font-black text-lg uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">
                Expándete Studio
              </span>
              <span className="text-xs text-gray-400 font-mono">
                Unidad de Publicidad Visual con IA • expandete.cloud
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs font-poppins font-bold uppercase tracking-wider text-gray-400">
            <a href="#propuesta" className="hover:text-amber-400 transition-colors">Propuesta</a>
            <a href="#paquetes" className="hover:text-amber-400 transition-colors">Paquetes</a>
            <a href="#galeria" className="hover:text-amber-400 transition-colors">Galería</a>
            <button onClick={onBackToMain} className="hover:text-amber-400 transition-colors cursor-pointer">
              Empresa Madre
            </button>
          </div>

          <div className="text-center md:text-right flex flex-col gap-1 text-[11px] font-mono text-gray-500">
            <span>© 2026 Expándete Studio • Todos los derechos reservados</span>
            <span className="text-amber-400/80 font-bold">WhatsApp Oficial: +57 304 575 1648</span>
            <span>Pagos seguros con Wompi • Entrega garantizada</span>
          </div>

        </div>
      </footer>

      {/* MODAL DE IMAGEN AMPLIADA */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
          >
            <div className="relative max-w-3xl w-full flex flex-col items-center">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white p-2 rounded-full bg-white/10 backdrop-blur-md"
              >
                <X className="w-6 h-6" />
              </button>
              <img 
                src={selectedImage} 
                alt="Detalle Flyer" 
                className="max-h-[85vh] w-auto rounded-2xl border border-amber-400/40 shadow-2xl object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL DE VIDEO SPOT FULL SCREEN */}
      <AnimatePresence>
        {activeVideoModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideoModal(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
          >
            <div className="relative max-w-md w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => setActiveVideoModal(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white p-2 rounded-full bg-white/10 backdrop-blur-md"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="w-full aspect-[9/16] rounded-3xl overflow-hidden border-2 border-amber-400 shadow-2xl bg-black">
                <video 
                  src={activeVideoModal}
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL INTERACTIVO DE PEDIDO Y PAGO DIRECTO */}
      <AnimatePresence>
        {isOrderModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative max-w-xl w-full bg-zinc-950 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(245,158,11,0.25)] my-8"
            >
              <button 
                onClick={() => setIsOrderModalOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white p-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-poppins font-black text-xl uppercase tracking-tight text-white">
                    Solicitud de Anuncio Comercial
                  </h3>
                  <p className="text-xs text-amber-300 font-mono">
                    Expándete Studio • Entrega Express 24-48h
                  </p>
                </div>
              </div>

              <form onSubmit={handleOrderSubmit} className="space-y-4">
                
                {/* Package selector */}
                <div>
                  <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-2">
                    Selecciona tu Paquete Publicitario:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {PACKAGE_CARDS.map((p) => (
                      <button
                        type="button"
                        key={p.id}
                        onClick={() => setOrderForm(prev => ({ ...prev, selectedPack: p.id }))}
                        className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                          orderForm.selectedPack === p.id 
                            ? 'border-amber-400 bg-amber-500/20 text-white shadow-[0_0_15px_rgba(245,158,11,0.3)]' 
                            : 'border-white/10 bg-black/40 text-gray-400 hover:border-white/30'
                        }`}
                      >
                        <span className="text-xs font-poppins font-bold uppercase">{p.title}</span>
                        <span className="text-xs font-mono font-black text-amber-300 mt-1">{p.price} COP</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Client Name & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-1">
                      Tu Nombre / Empresa:
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ej. Carlos Mendoza"
                      value={orderForm.nombre}
                      onChange={(e) => setOrderForm(prev => ({ ...prev, nombre: e.target.value }))}
                      className="w-full bg-black/60 border border-white/15 px-3.5 py-2.5 rounded-xl text-white text-xs font-poppins focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-1">
                      WhatsApp de Contacto:
                    </label>
                    <input 
                      type="tel" 
                      required
                      placeholder="Ej. +57 304 575 1648"
                      value={orderForm.whatsapp}
                      onChange={(e) => setOrderForm(prev => ({ ...prev, whatsapp: e.target.value }))}
                      className="w-full bg-black/60 border border-white/15 px-3.5 py-2.5 rounded-xl text-white text-xs font-poppins focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Product Name & Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-1">
                      Nombre de tu Producto:
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ej. Zapatillas Urban Luxe"
                      value={orderForm.producto}
                      onChange={(e) => setOrderForm(prev => ({ ...prev, producto: e.target.value }))}
                      className="w-full bg-black/60 border border-white/15 px-3.5 py-2.5 rounded-xl text-white text-xs font-poppins focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-1">
                      Categoría:
                    </label>
                    <select
                      value={orderForm.categoria}
                      onChange={(e) => setOrderForm(prev => ({ ...prev, categoria: e.target.value }))}
                      className="w-full bg-black/60 border border-white/15 px-3.5 py-2.5 rounded-xl text-white text-xs font-poppins focus:border-amber-400 focus:outline-none"
                    >
                      <option value="Moda y Calzado">Moda y Calzado</option>
                      <option value="Gastronomía y Bebidas">Gastronomía y Bebidas</option>
                      <option value="Cosmética y Belleza">Cosmética y Belleza</option>
                      <option value="Tecnología y Gadgets">Tecnología y Gadgets</option>
                      <option value="Hogar y Decoración">Hogar y Decoración</option>
                      <option value="Servicios o Cursos">Servicios o Cursos</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                </div>

                {/* Additional Details */}
                <div>
                  <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-1">
                    Instrucciones o enfoque deseado (Opcional):
                  </label>
                  <textarea 
                    rows={2}
                    placeholder="Ej. Quiero resaltar la elegancia del producto para anuncios en Instagram..."
                    value={orderForm.detalles}
                    onChange={(e) => setOrderForm(prev => ({ ...prev, detalles: e.target.value }))}
                    className="w-full bg-black/60 border border-white/15 px-3.5 py-2 rounded-xl text-white text-xs font-poppins focus:border-amber-400 focus:outline-none"
                  />
                </div>

                {/* Payment Option Selection */}
                <div className="pt-2">
                  <label className="block text-xs font-mono font-bold text-gray-300 uppercase mb-2">
                    Método de Pago Preferido:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('whatsapp')}
                      className={`p-3 rounded-xl border flex items-center gap-2.5 transition-all ${
                        paymentMethod === 'whatsapp'
                          ? 'border-emerald-400 bg-emerald-500/10 text-white'
                          : 'border-white/10 bg-black/40 text-gray-400'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <div className="text-left">
                        <div className="text-xs font-bold font-poppins">Coordinar por WhatsApp</div>
                        <div className="text-[10px] text-gray-400">Transferencia / Nequi / Bancolombia</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('wompi')}
                      className={`p-3 rounded-xl border flex items-center gap-2.5 transition-all ${
                        paymentMethod === 'wompi'
                          ? 'border-amber-400 bg-amber-500/10 text-white'
                          : 'border-white/10 bg-black/40 text-gray-400'
                      }`}
                    >
                      <CreditCard className="w-4 h-4 text-amber-400" />
                      <div className="text-left">
                        <div className="text-xs font-bold font-poppins">Pasarela Wompi</div>
                        <div className="text-[10px] text-gray-400">Tarjetas, PSE y Botón Bancolombia</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black font-poppins font-black text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(245,158,11,0.5)] hover:shadow-[0_0_35px_rgba(245,158,11,0.8)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirmar Pedido vía WhatsApp</span>
                  </button>
                  <p className="text-[10px] text-gray-400 text-center font-mono mt-2">
                    Al confirmar, se abrirá WhatsApp con los detalles de tu pedido para enviar la foto de tu producto de inmediato.
                  </p>
                </div>

              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
