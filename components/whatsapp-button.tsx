'use client';

import React from 'react';

export default function WhatsappButton() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center group">
      {/* WhatsApp Link */}
      <a
        href="https://wa.me/52162272536"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 hover:bg-[#22C35E] hover:scale-110 active:scale-95 transition-all duration-300 ease-out"
      >
        {/* Pulsing ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75 -z-10"></span>

        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 transition-transform duration-300 group-hover:rotate-12"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.288 1.973 13.82 1.958 11.75 1.958c-5.438 0-9.863 4.372-9.866 9.802-.001 1.962.512 3.878 1.49 5.58l-1.01 3.688 3.773-.981zm11.276-5.608c-.3-.15-1.77-.874-2.045-.974-.275-.1-.475-.15-.675.15-.2.3-.77.974-.945 1.174-.175.2-.35.225-.65.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.487-1.777-1.663-2.077-.175-.3-.018-.463.13-.612.134-.133.3-.349.45-.523.15-.174.2-.3.3-.5.1-.2.05-.375-.025-.524-.075-.15-.675-1.624-.925-2.224-.244-.589-.493-.51-.675-.519-.175-.009-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.024-1.05 2.5 0 1.475 1.075 2.897 1.225 3.1.15.2 2.11 3.224 5.118 4.525.715.31 1.273.495 1.71.635.717.228 1.37.195 1.885.118.574-.085 1.77-.724 2.02-1.424.25-.7.25-1.299.175-1.424-.075-.125-.275-.2-.575-.35z" />
        </svg>
      </a>

      {/* Tooltip Label */}
      <span className="absolute left-16 bg-white text-[#0A1F3C] font-semibold text-xs py-2 px-3 rounded-xl border border-[#D6EAF8] shadow-md whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none transition-all duration-300 ease-out select-none">
        ¿Cómo podemos ayudarte?
      </span>
    </div>
  );
}
