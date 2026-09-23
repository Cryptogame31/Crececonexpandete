import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  pageContext?: 'main' | 'studio' | 'ia-impacto';
}

export default function FloatingWhatsApp({ pageContext = 'main' }: FloatingWhatsAppProps) {
  const [showTooltip, setShowTooltip] = useState(true);

  const phone = "573045751648"; // Expándete official WhatsApp: +57 304 575 1648
  const defaultMessage = pageContext === 'ia-impacto'
    ? '¡Hola Expándete! Deseo información y apartar mi cupo en la experiencia presencial IA IMPACTO en Medellín.'
    : pageContext === 'studio'
    ? '¡Hola Expándete Studio! Quiero información sobre los paquetes de publicidad visual y videos con IA.'
    : '¡Hola Expándete! Deseo información y asesoría sobre sus servicios de software, automatizaciones y tecnología.';

  const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside aria-label="Contacto directo por WhatsApp" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 pointer-events-auto select-none">
      {/* Floating message callout / tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="hidden sm:flex items-center gap-2.5 bg-[#0e1713]/95 text-white border border-emerald-500/30 px-3.5 py-2 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md max-w-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <div className="flex flex-col text-left">
              <span className="font-poppins font-bold text-[11px] text-white leading-tight">
                ¿Tienes preguntas?
              </span>
              <span className="font-mono text-[10px] text-emerald-400 font-semibold">
                Chatea al +57 304 575 1648
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="p-1 text-white/40 hover:text-white rounded-full hover:bg-white/10 transition-colors ml-1"
              aria-label="Cerrar aviso"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.a
        id="btn-floating-whatsapp"
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp al +57 304 575 1648"
        title="Chatear por WhatsApp al +57 304 575 1648"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#2bf075] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_10px_35px_rgba(37,211,102,0.7)] transition-shadow duration-300"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/25 animate-ping -z-10 group-hover:bg-emerald-400/40"></span>

        <MessageCircle className="w-7 h-7 drop-shadow-md text-white" />

        {/* Online green indicator badge */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-400 border-2 border-[#050505] rounded-full shadow-sm flex items-center justify-center">
          <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
        </span>
      </motion.a>
    </aside>
  );
}
