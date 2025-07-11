"use client";

import React, { useState, useEffect, useRef } from 'react';
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArrowRight, Menu, X, Users, Shield, Award, Phone, Mail, Lightbulb, Landmark, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/fade-in";
import ServiceModal from '@/components/ui/ServiceModal';



export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );
  return (
    <div id="home" className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/95 border-b border-text-charcoal-700">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between relative">
          <div className="flex items-center">
            <Link href="#home" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/logo.png"
                alt="Bio Compliance Logo"
                width={160}
                height={66}
                className="h-16 w-auto cursor-pointer"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            <Link href="#nosotros" className="text-charcoal-500 font-medium relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-robinEggBlue-300 after:transition-all after:duration-300 hover:after:w-full">
              Nosotros
            </Link>
            <Link href="#servicios" className="text-charcoal-500 font-medium relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-robinEggBlue-300 after:transition-all after:duration-300 hover:after:w-full">
              Servicios
            </Link>
            <Link href="#contacto" className="text-charcoal-500 font-medium relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-robinEggBlue-300 after:transition-all after:duration-300 hover:after:w-full">
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Abrir menú</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/95">
            <nav className="flex flex-col items-center space-y-4 py-4 border-t border-slateGray-200">
              <Link href="#nosotros" onClick={() => setIsMenuOpen(false)} className="text-charcoal-500 font-medium relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-robinEggBlue-300 after:transition-all after:duration-300 hover:after:w-full">
                Nosotros
              </Link>
              <Link href="#servicios" onClick={() => setIsMenuOpen(false)} className="text-charcoal-500 font-medium relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-robinEggBlue-300 after:transition-all after:duration-300 hover:after:w-full">
                Servicios
              </Link>
              <Link href="#contacto" onClick={() => setIsMenuOpen(false)} className="text-charcoal-500 font-medium relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-robinEggBlue-300 after:transition-all after:duration-300 hover:after:w-full">
                Contacto
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <FadeIn>
        <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-robinEggBlue-300 text-white transition-colors">
                    Más de 10 años de experiencia
                  </Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold text-black-800 leading-tight">
                    Impulsa tu negocio con
                    <span className="text-charcoal-800"> asesoría experta</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Ayudamos a empresas como la tuya a crecer, optimizar procesos y alcanzar sus objetivos estratégicos
                    con soluciones personalizadas y resultados comprobados.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#contacto">
                    <Button size="lg" className="bg-robinEggBlue-300 hover:bg-robinEggBlue-400 transition-colors">
                      Contactanos
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center space-x-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">Empresas asesoradas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">10+</div>
                    <div className="text-sm text-gray-600">Años experiencia</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Carousel
                  opts={{
                    loop: true,
                  }}
                  plugins={[plugin.current]}
                  className="w-full max-w-md mx-auto"
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                >
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src="/seguridad-salud.png"
                        alt="Equipo de asesoría profesional 1"
                        width={500}
                        height={600}
                        className="rounded-2xl object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/Checklist-cuate.svg"
                        alt="Equipo de asesoría profesional 2"
                        width={500}
                        height={600}
                        className="rounded-2xl object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/Risk-management-bro.svg"
                        alt="Equipo de asesoría profesional 3"
                        width={500}
                        height={600}
                        className="rounded-2xl object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/compliance.png"
                        alt="Equipo de asesoría profesional 4"
                        width={500}
                        height={600}
                        className="rounded-2xl object-cover"
                      />
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Nosotros Section */}
      <section id="nosotros" className="py-20 lg:py-32 bg-slateGray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="bg-verdigris-300 text-white mb-4">Sobre Nosotros</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-black-800 mb-4">Tu Socio Estratégico en Compliance</h2>
              <p className="text-xl text-slateGray-600 max-w-3xl mx-auto">
                En Bio Compliance, combinamos experiencia, innovación y un profundo conocimiento del sector para ofrecer soluciones que no solo cumplen con la normativa, sino que impulsan el crecimiento y la sostenibilidad de tu negocio.
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/nosotros.svg"
                  alt="Equipo de Bio Compliance"
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-charcoal-800">¿Quiénes Somos?</h3>
                <p className="text-slateGray-700">
                Somos un equipo multidisciplinario compuesto por profesionales del área de la ingeniería, ciencias sociales y jurídicas, con experiencia en el sector público y privado, dispuestos para trabajar en el compliance organizacional, a través de la gestión integrada en materias de seguridad, medio ambiente, calidad y responsabilidad social empresarial
                </p>
                <h3 className="text-2xl font-bold text-charcoal-800">Nuestros Valores</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-robinEggBlue-100 flex items-center justify-center mr-4 mt-1">
                      <Shield className="h-4 w-4 text-robinEggBlue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal-700">Integridad</h4>
                      <p className="text-slateGray-600">Actuamos con transparencia y honestidad en cada interacción.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1">
                      <Award className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal-700">Excelencia</h4>
                      <p className="text-slateGray-600">Buscamos la máxima calidad y resultados superiores en todo lo que hacemos.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mr-4 mt-1">
                      <Lightbulb className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal-700">Innovación</h4>
                      <p className="text-slateGray-600">Aplicamos las últimas tecnologías y metodologías para ofrecer soluciones de vanguardia.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="bg-robinEggBlue-300 text-white mb-4">Nuestros Servicios</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-black-800 mb-4">Soluciones integrales para tu empresa</h2>
              <p className="text-xl text-slateGray-600 max-w-3xl mx-auto">
                Ofrecemos servicios especializados diseñados para impulsar el crecimiento y la eficiencia de tu negocio
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn>
                <Link href="/servicios/ley-karin">
                  <Card className="border border-slateGray-200 shadow-lg h-full cursor-pointer hover:border-robinEggBlue-300 hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                        <Users className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl text-charcoal-800">Ley Karin</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slateGray-600">Asesoría para la implementación de la Ley Karin, enfocada en prevenir, investigar y sancionar el acoso laboral, sexual y la violencia en el trabajo.</p>
                    </CardContent>
                  </Card>
                </Link>
            </FadeIn>

            <FadeIn>
                <Card 
                  className="border border-slateGray-200 shadow-lg h-full cursor-pointer hover:border-robinEggBlue-300 hover:shadow-xl transition-all duration-300"
                  onClick={() => setIsModalOpen(true)}
                >
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <Landmark className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl text-charcoal-800">Autorizaciones Sanitarias Seremi de Salud</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slateGray-600">Obtención y renovación de autorizaciones sanitarias Seremi de Salud.</p>
                  </CardContent>
                </Card>
            </FadeIn>

            <FadeIn>
                <Card className="border border-slateGray-200 shadow-lg h-full">
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl text-charcoal-800">Protocolos MINSAL</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slateGray-600">lorem ipsun </p>
                  </CardContent>
                </Card>
            </FadeIn>

            <FadeIn>
                <Card className="border border-slateGray-200 shadow-lg h-full">
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                      <Lightbulb className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl text-charcoal-800">Confeccionamos tu RIOHS </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slateGray-600">Confeccionamos tu Reglamento Interno de Higiene y Seguridad en 24hrs.</p>
                  </CardContent>
                </Card>
            </FadeIn>

            <FadeIn>
                <Card className="border border-slateGray-200 shadow-lg h-full">
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-teal-600" />
                    </div>
                    <CardTitle className="text-xl text-charcoal-800">Ventanilla Unica</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slateGray-600">lorem ipsun </p>
                  </CardContent>
                </Card>
            </FadeIn>

            <FadeIn>
                <Card className="border border-slateGray-200 shadow-lg h-full">
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                      <FileText className="h-6 w-6 text-yellow-600" />
                    </div>
                    <CardTitle className="text-xl text-charcoal-800">Informes y Procedimientos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slateGray-600">lorem ipsun </p>
                  </CardContent>
                </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Sección de contacto */}
      <section id="contacto" className="py-20 bg-slateGray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <Badge className="bg-robinEggBlue-300 text-white mb-4">Contáctanos</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-black-800 mb-4">¿Listo para llevar tu negocio al siguiente nivel?</h2>
              <p className="text-xl text-slateGray-600 max-w-3xl mx-auto">
                Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-robinEggBlue-300 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-black">Teléfono</h3>
                    <p className="text-slateGray-600">+1 (123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-robinEggBlue-300 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-black">Correo Electrónico</h3>
                    <p className="text-slateGray-600">info@biocompliance.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-robinEggBlue-300 flex items-center justify-center">
                    <Image src="/whatsapp.png" alt="WhatsApp Icon" width={28} height={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-black">Whatsapp</h3>
                    <p className="text-slateGray-600">+56 9 5969 7543</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slateGray-700 mb-1">Nombre Completo</label>
                      <Input id="name" type="text" className="w-full" placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slateGray-700 mb-1">Correo Electrónico</label>
                      <Input id="email" type="email" className="w-full" placeholder="tu@email.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slateGray-700 mb-1">Asunto</label>
                    <Input id="subject" type="text" className="w-full" placeholder="¿Cómo podemos ayudarte?" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slateGray-700 mb-1">Mensaje</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-slateGray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-robinEggBlue-500 focus:border-robinEggBlue-500"
                      placeholder="Cuéntanos más sobre tu proyecto"
                    />
                  </div>
                  <div>
                    <Button type="submit" className="w-full bg-robinEggBlue-300 hover:bg-robinEggBlue-400 transition-colors">
                      Enviar Mensaje
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-50 to-indigo-100 text-white py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image src="/logo.png" alt="Bio Compliance Logo" width={160} height={66} className="h-16 w-auto mb-4" />
              <p className="text-slateGray-400 text-sm">
                Asesoría experta para el crecimiento y cumplimiento de tu negocio.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-charcoal-500">Navegación</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-slateGray-400 hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#servicios" className="text-slateGray-400 hover:text-white transition-colors">Servicios</a></li>
                <li><a href="#nosotros" className="text-slateGray-400 hover:text-white transition-colors">Nosotros</a></li>
                <li><a href="#testimonios" className="text-slateGray-400 hover:text-white transition-colors">Testimonios</a></li>
                <li><a href="#contacto" className="text-slateGray-400 hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-charcoal-500">Servicios</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slateGray-400 hover:text-white transition-colors">Asesoría Personalizada</a></li>
                <li><a href="#" className="text-slateGray-400 hover:text-white transition-colors">Crecimiento Sostenible</a></li>
                <li><a href="#" className="text-slateGray-400 hover:text-white transition-colors">Cumplimiento Normativo</a></li>
                <li><a href="#" className="text-slateGray-400 hover:text-white transition-colors">Innovación y Tecnología</a></li>
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
              © {new Date().getFullYear()} Bio Compliance. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Botón Flotante de WhatsApp */}
      <Link
        href="https://wa.me/56959697543"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 ease-in-out transform hover:scale-110 z-50 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </Link>

      <ServiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
