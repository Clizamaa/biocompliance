'use client';

import React, { useState, useRef } from 'react';
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BedDouble, Tent, HeartPulse } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import ServiceModal from '@/components/ui/ServiceModal';

// Dummy data for public places services
const publicPlacesServices = [
  { title: 'Autorización de funcionamiento para establecimientos destinados a dar alojamiento a personas', icon: <BedDouble className="h-6 w-6 text-cyan-600" /> },
  { title: 'Autorización de funcionamiento para camping o campamento de turismo', icon: <Tent className="h-6 w-6 text-cyan-600" /> },
  { title: 'Notificar disponibilidad de equipos DEA (Desfibrilador Externo Automático Portátil)', icon: <HeartPulse className="h-6 w-6 text-cyan-600" /> },
  { title: 'Autorización de Establecimientos de Salud capacitadores para el uso de equipos DEA (Desfibrilador Externo Automático Portátil)', icon: <HeartPulse className="h-6 w-6 text-cyan-600" /> },
];

export default function LocalesPublicosPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                <Badge className="bg-cyan-100 text-cyan-800 mb-4">Locales Públicos</Badge>
                <h1 className="text-3xl lg:text-4xl font-bold text-black-800 mb-4">Autorizaciones para Locales de Uso Público</h1>
                <p className="text-xl text-slateGray-600 max-w-3xl mx-auto">
                  Gestión de autorizaciones sanitarias para locales de uso público, comercial e industrial.
                </p>
              </div>
            
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {publicPlacesServices.map((service, index) => (
                <FadeIn key={index}>
                  <Card className="border border-slateGray-200 shadow-lg h-full text-center max-w-sm mx-auto">
                    <CardHeader className="pb-2">
                      <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center mb-4 mx-auto">
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
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-slateGray-600 hover:bg-slateGray-700 text-white transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Ver todos los servicios
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
                <li><a href="/#contacto" className="text-slateGray-400 hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-charcoal-500">Contacto</h3>
              <address className="not-italic text-slateGray-400 space-y-2">
                <p>Email: contacto@biocompliance.cl</p>
                <p>Teléfono: +56 9 5969 7543</p>
                <p>Whatsapp: +56 9 5969 7543</p>
              </address>
            </div>
          </div>

          <div className="border-t border-slateGray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-center">
            <p className="text-slateGray-400 text-sm">
              &copy; {new Date().getFullYear()} Bio Compliance. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      <ServiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Floating WhatsApp Button */}
      <Link href="https://wa.me/56959697543" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 z-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-label="Contactar por WhatsApp">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </Link>
    </div>
  );
}
