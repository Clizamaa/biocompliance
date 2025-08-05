'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


const minsalServices = [
  { title: 'Sílice', image: '/servicios/potocolos-minsal/Silice.png', path: '/servicios/protocolos/silice' },
  { title: 'Ruido (PREXOR)', image: '/servicios/potocolos-minsal/Prexor.png', path: '/servicios/protocolos/ruido-prexor' },
  { title: 'Radiación UV', image: '/servicios/potocolos-minsal/radiacion-uv.png', path: '/servicios/protocolos/radiaciones-uv' },
  { title:(<span style={{ fontSize: '0.75rem' }}>TRASTORNOS MUSCULOESQUELÉTICOS (TMERT)</span>), image: '/servicios/potocolos-minsal/TMERT.png', path: '/servicios/protocolos/tmert' },
  { title: 'Riesgos Psicosociales', image: '/servicios/potocolos-minsal/Psicosocial.png', path: '/servicios/protocolos/psicosocial' },
  { title: 'Asbesto', image: '/servicios/potocolos-minsal/Asbesto.png', path: '/servicios/protocolos/asbesto' },
  { title: 'Uso Intenso de la Voz', image: '/servicios/potocolos-minsal/Uso-intensivo-voz.png', path: '/servicios/protocolos/uso-intenso-voz' },
];

export default function MinsalModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl max-h-[90vh] flex flex-col relative animate-in fade-in-0 zoom-in-95">
        <div className="p-6 border-b border-slate-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-charcoal-800">Protocolos MINSAL</h2>
          <button onClick={onClose} className="text-slateGray-500 hover:text-charcoal-800 transition-colors">
            <X className="h-7 w-7" />
            <span className="sr-only">Cerrar modal</span>
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            {minsalServices.map((service) => (
              <Link href={service.path} key={service.path}>
                <Card className="border border-slate-200 shadow-md hover:border-slate-300 hover:shadow-xl transition-shadow duration-300 h-full cursor-pointer">
                  <div className="flex items-center justify-between p-4 h-full">
                    <CardTitle className="text-lg font-bold text-charcoal-700 pl-2 uppercase flex-1">{service.title}</CardTitle>
                    <div className="relative w-36 h-36 flex-shrink-0">
                      <Image src={service.image} alt={typeof service.title === 'string' ? service.title : 'Servicio'} layout="fill" objectFit="contain" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}
