'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function EmergencyCard() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    // Mobile: trigger phone dialer
    if (window.innerWidth < 768) {
      window.location.href = 'tel:911';
      return;
    }
    // Desktop: show modal
    setShowModal(true);
  };

  return (
    <>
      <div className="bg-white rounded-3xl md:rounded-card-lg w-full max-w-[608px] md:h-[240px] flex flex-col md:flex-row gap-6 items-center p-5 md:p-6 md:pl-8 transition-transform duration-300 hover:-translate-y-1">
        <div className="flex-1 flex flex-col gap-6 justify-center h-full order-2 md:order-1">
          <div className="flex flex-col gap-1">
            <h3 className="font-noto text-2xl md:text-[32px] font-black text-navy uppercase tracking-[-1.28px] leading-[1.1]">
              Emergencias
            </h3>
            <p className="font-noto text-sm text-dark-sub opacity-80 leading-[1.5]">
              Ten a la mano los n&uacute;meros clave para recibir ayuda
              inmediata en caso de cualquier incidente.
            </p>
          </div>
          <button
            onClick={handleClick}
            className="inline-flex items-center gap-2 self-start h-12 px-6 pl-8 font-noto text-sm font-semibold uppercase border-radius-pill bg-white text-navy border border-navy hover:bg-navy hover:text-white transition-colors cursor-pointer"
          >
            Llama al 911
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
          </button>
        </div>
        <div className="w-full md:w-[182px] h-[160px] md:h-full rounded-2xl md:rounded-3xl overflow-hidden relative shrink-0 order-1 md:order-2">
          <Image
            src="/assets/cdc33f494389bd8c8cf4b1f4bb210ea1f9617177.png"
            alt="Emergencias"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Modal — desktop only */}
      {showModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-[24px] p-8 md:p-12 max-w-[480px] w-[90%] flex flex-col items-center gap-6 text-center shadow-info animate-[conSlideUp_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Icon */}
            <div className="w-20 h-20 rounded-full bg-pink/10 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ea3281" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-noto text-2xl font-black text-navy uppercase">
                Emergencias
              </h3>
              <p className="font-noto text-base text-dark-sub leading-[1.6]">
                Para emergencias en M&eacute;xico, marca al n&uacute;mero
                universal de emergencias:
              </p>
            </div>

            <span className="font-bebas text-[72px] leading-none text-pink tracking-[4px]">
              911
            </span>

            <p className="font-noto text-sm text-medium-text leading-[1.5]">
              Disponible las 24 horas, los 7 d&iacute;as de la semana.
              Polic&iacute;a, bomberos y servicios m&eacute;dicos.
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="font-noto text-sm font-semibold text-navy bg-surface hover:bg-border-light px-8 py-3 rounded-full transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
