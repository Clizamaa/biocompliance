'use client';

import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight, ChevronDown, Landmark, Wind, Cloud, CheckCircle, FileText, Users } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import ServiceModal from '@/components/ui/ServiceModal';

// Dummy data for air services
const airServices = [
  { title: 'Gestión de Autorización de emisiones atmosféricas', icon: <Wind className="h-6 w-6 text-blue-600" /> },
  { title: 'Gestión de Monitoreo de calidad del aire', icon: <Cloud className="h-6 w-6 text-blue-600" /> }, 
];

export default function AirePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

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
              <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
              <h1 className="text-4xl md:text-5xl font-bold text-charcoal-800 mb-6">
                Autorizaciones Sanitarias - Aire
              </h1>
              <p className="text-xl text-slateGray-600 max-w-3xl mx-auto leading-relaxed">
                Servicios especializados para la gestión de autorizaciones relacionadas con emisiones atmosféricas y calidad del aire.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="w-full flex justify-center">
              {airServices.map((service, index) => (
                <FadeIn key={index}>
                  <Card className="border border-slateGray-200 shadow-lg h-full text-center max-w-sm mx-auto">
                    <CardHeader className="pb-2">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl text-charcoal-800">{service.title}</CardTitle>
                    </CardHeader>
                  </Card>
                </FadeIn>
              ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-slateGray-600 hover:bg-slateGray-700 text-white transition-colors"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver a Autorizaciones Sanitarias
                </Button>
                <Link href="/#contacto">
                  <Button className="bg-robinEggBlue-300 hover:bg-robinEggBlue-400 text-white transition-colors">
                    Solicitar Información
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-50 to-indigo-100 text-white py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-4 text-charcoal-800">Navegación</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-slateGray-600 hover:text-charcoal-800 transition-colors">Inicio</Link></li>
                <li><Link href="/servicios" className="text-slateGray-600 hover:text-charcoal-800 transition-colors">Servicios</Link></li>
                <li><Link href="/nosotros" className="text-slateGray-600 hover:text-charcoal-800 transition-colors">Nosotros</Link></li>
                <li><Link href="/contacto" className="text-slateGray-600 hover:text-charcoal-800 transition-colors">Contacto</Link></li>
              </ul>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-4 text-charcoal-800">Contacto</h3>
              <p className="text-slateGray-600 mb-2">Email: info@biocompliance.cl</p>
              <p className="text-slateGray-600 mb-2">Teléfono: +56 9 1234 5678</p>
              <p className="text-slateGray-600">Dirección: Santiago, Chile</p>
            </div>
          </div>
          <div className="border-t border-slateGray-200 mt-8 pt-8 text-center">
            <p className="text-slateGray-600">&copy; 2024 Bio Compliance. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer">
          <div className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors">
            <Image src="/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
          </div>
        </Link>
      </div>

      <ServiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}



