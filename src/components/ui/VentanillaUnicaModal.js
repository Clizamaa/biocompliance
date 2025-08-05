'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Card, CardTitle } from "@/components/ui/card";

const ventanillaServices = [
  { title: 'SIDREP', image: '/servicios/ventanilla-unica/SIDREP.png', path: '/servicios/ventanilla-unica/sidrep' },
  { title: 'SINADER', image: '/servicios/ventanilla-unica/SINADER.png', path: '/servicios/ventanilla-unica/sinader' },
  { title: 'DASUSPEL', image: '/servicios/ventanilla-unica/DASUSPEL.png', path: '/servicios/ventanilla-unica/dasuspel' },
  { title: 'DAE', image: '/servicios/ventanilla-unica/DAE.png', path: '/servicios/ventanilla-unica/dae' },
  { title: 'Huella de Carbono', image: '/servicios/ventanilla-unica/HUELLA.png', path: '/servicios/ventanilla-unica/huella-carbono' },
  { title: 'RUEA', image: '/servicios/ventanilla-unica/RUEA.png', path: '/servicios/ventanilla-unica/ruea' },
  { title: 'RFP', image: '/servicios/ventanilla-unica/RFP.png', path: '/servicios/ventanilla-unica/rfp' },
  { title: 'DJA', image: '/servicios/ventanilla-unica/DJA.png', path: '/servicios/ventanilla-unica/dja' },
  { title: 'SISAT', image: '/servicios/ventanilla-unica/SISAT.png', path: '/servicios/ventanilla-unica/sisat' },
  { title: 'RILES', image: '/servicios/ventanilla-unica/RILES.png', path: '/servicios/ventanilla-unica/riles' },
];

export default function VentanillaUnicaModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col relative animate-in fade-in-0 zoom-in-95">
        <div className="p-6 border-b border-slate-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-charcoal-800">Ventanilla Única</h2>
          <button onClick={onClose} className="text-slateGray-500 hover:text-charcoal-800 transition-colors">
            <X className="h-7 w-7" />
            <span className="sr-only">Cerrar modal</span>
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {ventanillaServices.map((service) => (
              <Link href={service.path} key={service.title}>
                <Card className="border border-slate-200 shadow-md hover:border-slate-300 hover:shadow-xl transition-shadow duration-300 h-full cursor-pointer flex flex-col items-center justify-center p-4">
                  <div className='relative w-24 h-24 mb-4'>
                    <Image src={service.image} alt={service.title} layout="fill" objectFit="contain" />
                  </div>
                  <CardTitle className="text-md font-bold text-charcoal-700 text-center uppercase">{service.title}</CardTitle>
                </Card>
              </Link>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}
