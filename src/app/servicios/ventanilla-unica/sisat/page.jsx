'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from 'lucide-react';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function SisatPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Bio Compliance Logo" width={140} height={35} />
            </Link>
            <div>
              <Button asChild className="hidden lg:inline-flex bg-robinEggBlue-300 hover:bg-robinEggBlue-400 text-white transition-colors">
                <Link href="/#contacto">Contactanos</Link>
              </Button>
              <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className="sr-only">Abrir menú</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <Badge className="bg-teal-100 text-teal-800 mb-4">Ventanilla Única</Badge>
              <h1 className="text-3xl lg:text-4xl font-bold text-charcoal-800 mb-4">
                SISAT
              </h1>
              <p className="text-xl text-slateGray-600 max-w-3xl mx-auto">
                Sistema de Seguimiento Atmosférico
              </p>
            </div>
            
            <div className="mt-16 text-center">
                <Button asChild className="bg-slateGray-600 hover:bg-slateGray-700 text-white transition-colors">
                  <Link href="/?openModal=ventanilla">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Ver todos los servicios
                  </Link>
                </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-charcoal-800 text-white py-12">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Bio Compliance. Todos los derechos reservados.</p>
        </div>
      </footer>
      
      <WhatsAppButton />
    </div>
  );
}
