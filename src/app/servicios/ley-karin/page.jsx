'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ShieldCheck, ClipboardList, AlertTriangle, FileText, Menu, X } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const leyKarinServices = [
  { title: 'Protocolo de Prevención de Acoso Sexual, Laboral y Violencia en el Trabajo', icon: <ShieldCheck className="h-6 w-6 text-purple-600" />, href: '/servicios/ley-karin/protocolo-prevencion' },
  { title: 'Procedimiento de investigaciones de acoso sexual, laboral y violencia laboral', icon: <ClipboardList className="h-6 w-6 text-purple-600" />, href: '/servicios/ley-karin/procedimiento-investigaciones' },
  { title: 'Matriz de riesgos basada en la Ley 21.643', icon: <AlertTriangle className="h-6 w-6 text-purple-600" />, href: '/servicios/ley-karin/matriz-riesgos' },
  { title: 'Política de Prevención sobre el Acoso Sexual, Laboral y Violencia en el trabajo', icon: <FileText className="h-6 w-6 text-purple-600" />, href: '/servicios/ley-karin/politica-prevencion' },
];

export default function LeyKarinPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="w-full h-20 relative flex items-center">
          <div className="container mx-auto px-4 lg:px-6 h-full flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Bio Compliance Logo" width={140} height={35} />
            </Link>

            <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
              <Link href="/" className="text-charcoal-500 font-medium relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-robinEggBlue-300 after:transition-all after:duration-300 hover:after:w-full">
                Inicio
              </Link>
              <Link href="/#nosotros" className="text-charcoal-500 font-medium relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-robinEggBlue-300 after:transition-all after:duration-300 hover:after:w-full">
                Nosotros
              </Link>
              <Link href="/#servicios" className="text-charcoal-500 font-medium relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-robinEggBlue-300 after:transition-all after:duration-300 hover:after:w-full">
                Servicio
              </Link>
              <Link href="/#contacto" className="text-charcoal-500 font-medium relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-robinEggBlue-300 after:transition-all after:duration-300 hover:after:w-full">
                Contacto
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Button asChild className="hidden lg:inline-flex bg-robinEggBlue-300 hover:bg-robinEggBlue-400 text-white transition-colors">
                <Link href="/#contacto">Contactanos</Link>
              </Button>
              <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className="sr-only">Abrir menú</span>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0">
            <nav className="flex flex-col items-center space-y-4 py-4 shadow-lg">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-charcoal-500 font-medium">
                Inicio
              </Link>
              <Link href="/#nosotros" onClick={() => setIsMenuOpen(false)} className="text-charcoal-500 font-medium">
                Nosotros
              </Link>
              <Link href="/#servicios" onClick={() => setIsMenuOpen(false)} className="text-charcoal-500 font-medium">
                Servicio
              </Link>
              <Link href="/#contacto" onClick={() => setIsMenuOpen(false)} className="text-charcoal-500 font-medium">
                Contacto
              </Link>
              <Button asChild className="bg-robinEggBlue-300 hover:bg-robinEggBlue-400 text-white transition-colors w-full">
                 <Link href="/#contacto" onClick={() => setIsMenuOpen(false)}>Contactanos</Link>
              </Button>
            </nav>
          </div>
        )}
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {leyKarinServices.map((service, index) => (
                <FadeIn key={index}>
                  <Link href={service.href}>
                    <Card className="border border-slateGray-200 shadow-lg h-full text-center max-w-lg mx-auto hover:shadow-xl transition-shadow cursor-pointer">
                      <CardHeader className="pb-2">
                        <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4 mx-auto">
                          {service.icon}
                        </div>
                        <CardTitle className="text-xl text-charcoal-800">{service.title}</CardTitle>
                      </CardHeader>
                    </Card>
                  </Link>
                </FadeIn>
              ))}
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <Button asChild size="lg" className="bg-robinEggBlue-300 hover:bg-robinEggBlue-400 transition-colors">
                <Link href="/#servicios">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver a Servicios
                </Link>
              </Button>
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
