'use client';

import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/fade-in";
import { ArrowLeft, FileText, Menu, X } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

export default function PoliticaPrevencionPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
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
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="bg-purple-100 text-purple-800 mb-4">Ley Karin</Badge>
              <h1 className="text-3xl lg:text-4xl font-bold text-black-800 mb-4">
                Política de Prevención sobre el Acoso Sexual, Laboral y Violencia en el Trabajo
              </h1>
              <p className="text-xl text-slateGray-600 max-w-3xl mx-auto">
                Desarrollo de políticas organizacionales claras y efectivas para prevenir el acoso sexual, laboral y la violencia en el ambiente de trabajo.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Descripción del Servicio</h2>
              </div>
              
              <div className="bg-gradient-to-r from-robinEggBlue-50 to-robinEggBlue-100 rounded-lg p-6 mb-8">
                <p className="text-lg leading-relaxed text-gray-800 mb-4">
                  Es una declaración institucional que define los compromisos, principios y medidas de la organización para:
                </p>
                <ul className="space-y-3 text-gray-800">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Prevenir el acoso sexual, el acoso laboral y la violencia en el trabajo.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Promover un ambiente laboral sano, digno y libre de violencia.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Establecer el marco normativo y procedimental para actuar ante estas situaciones.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Garantizar la protección de la persona denunciante, la confidencialidad y el debido proceso.</span>
                  </li>
                </ul>
                <div className="flex justify-center mt-6">
                  <img src="/servicios/ley-karin/lk.png" alt="Ley Karin" className="w-1/2 h-auto rounded-lg" />
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="flex justify-center gap-4">
              <Link href="/servicios/ley-karin">
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver a Ley Karin
                </Button>
              </Link>
              <Link href="/#contacto">
                <Button size="lg" className="bg-robinEggBlue-300 hover:bg-robinEggBlue-400 transition-colors">
                  Solicitar Información
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </main>
    </div>
  );
}