'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldCheck, ClipboardList, AlertTriangle, FileText } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const leyKarinServices = [
  { title: 'Protocolo de Prevención de Acoso Sexual, Laboral y Violencia en el Trabajo', icon: <ShieldCheck className="h-6 w-6 text-purple-600" /> },
  { title: 'Procedimiento de investigaciones de acoso sexual, laboral y violencia laboral', icon: <ClipboardList className="h-6 w-6 text-purple-600" /> },
  { title: 'Matriz de riesgos basada en la Ley 21.643', icon: <AlertTriangle className="h-6 w-6 text-purple-600" /> },
  { title: 'Política Prevención de Violencia', icon: <FileText className="h-6 w-6 text-purple-600" /> },
];

export default function LeyKarinPage() {

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Bio Compliance Logo" width={140} height={35} />
            </Link>
            <div>
              <Button className="hidden lg:inline-flex bg-robinEggBlue-300 hover:bg-robinEggBlue-400 text-white transition-colors">Contactanos</Button>
              <button className="lg:hidden" onClick={() => {}}>
                <span className="sr-only">Abrir menú</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
              <div className="text-center mb-16">
                <Badge className="bg-purple-100 text-purple-800 mb-4">Ley Karin (Nº 21.643)</Badge>
                <h1 className="text-3xl lg:text-4xl font-bold text-black-800 mb-4">Prevención y Sanción del Acoso Laboral</h1>
                <p className="text-xl text-slateGray-600 max-w-3xl mx-auto">
                  Asesoría para la implementación de la Ley Karin, enfocada en prevenir, investigar y sancionar el acoso laboral, sexual y la violencia en el trabajo.
                </p>
              </div>
            
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {leyKarinServices.map((service, index) => (
                <FadeIn key={index}>
                  <Card className="border border-slateGray-200 shadow-lg h-full text-center max-w-lg mx-auto">
                    <CardHeader className="pb-2">
                      <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4 mx-auto">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl text-charcoal-800">{service.title}</CardTitle>
                    </CardHeader>
                  </Card>
                </FadeIn>
              ))}
              </div>
            </div>


          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-50 to-indigo-100 text-white py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <Image src="/logo.png" alt="Bio Compliance Logo" width={160} height={66} className="h-16 w-auto mb-4" />
              <p className="text-slateGray-400 text-sm">
                Asesoría experta para el crecimiento<br />
                y cumplimiento de tu negocio.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-charcoal-500">Navegación</h3>
              <ul className="space-y-2">
                <li><a href="/#home" className="text-slateGray-400 hover:text-white transition-colors">Inicio</a></li>
                <li><a href="/#servicios" className="text-slateGray-400 hover:text-white transition-colors">Servicios</a></li>
                <li><a href="/#nosotros" className="text-slateGray-400 hover:text-white transition-colors">Nosotros</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
