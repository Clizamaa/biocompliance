import React from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServiceModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const services = [
    {
      title: 'AGUA',
      image: '/servicios/agua.svg',
    },
    {
      title: 'AIRE',
      image: '/servicios/aire.svg',
    },
    {
      title: 'ALIMENTO',
      image: '/servicios/alimento.svg',
    },
    {
      title: 'ASBESTO',
      image: '/servicios/asbesto.svg',
    },
    {
      title: 'CALDERAS Y AUTOCLAVES',
      image: '/servicios/calderas.svg',
    },
    { title: 'DEA', image: '/servicios/dea.png' },
    {
      title: (
        <span style={{ fontSize: '0.75rem' }}>
          ESTABLECIMIENTOS DE SALUD
        </span>
      ),
      image: '/servicios/edsalud.svg',
    },
    { title: 'EMPRESA APLICADORA', image: '/servicios/empresaaplicadora.svg' },
    { title: 'INFORME SANITARIO', image: '/servicios/informesan.svg' },
    { title: 'LOCALES PUBLICOS', image: '/servicios/localespublicos.svg' },
    { title: 'LODOS', image: '/servicios/lodos.svg' },
    { title: 'RADIACION', image: '/servicios/radiacion.svg' },
    { title: 'RESIDUOS ESPECIALES', image: '/servicios/resespeciales.svg' },
    { title: 'RESIDUOS NO PELIGROSOS', image: '/servicios/resnopeligrosos.svg' },
    { title: 'RESIDUOS PELIGROSOS', image: '/servicios/respeligrosos.svg' },
    { title: (
      <span style={{ fontSize: '0.75rem' }}>
        CALIFICACIÓN INDUSTRIAL
      </span>
    ), image: '/servicios/calificacion.svg' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col">
        <header className="flex items-center justify-between p-4 border-b">
          <h2 className="text-2xl font-bold text-charcoal-800">Autorizaciones Sanitarias</h2>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Cerrar modal">
            <X className="h-6 w-6" />
          </Button>
        </header>
        <main className="overflow-y-auto p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              if (service.image) {
                return (
                  <Card key={index} className="border border-slateGray-200 shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="flex items-center justify-between p-4 h-full">
                      <CardTitle className="text-xl font-bold text-charcoal-700 pl-4">{service.title}</CardTitle>
                      <div className="relative w-20 h-20">
                        <Image src={service.image} alt={service.title} layout="fill" objectFit="contain" />
                      </div>
                    </div>
                  </Card>
                );
              }
              return (
                <Card key={index} className="border border-slateGray-200 shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-charcoal-700">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slateGray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ServiceModal;
