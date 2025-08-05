import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/fade-in";
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

export default function ProtocoloPrevencionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Bio Compliance Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Button className="hidden lg:inline-flex bg-robinEggBlue-300 hover:bg-robinEggBlue-400 text-white transition-colors">Contactanos</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="bg-purple-100 text-purple-800 mb-4">Ley Karin</Badge>
              <h1 className="text-3xl lg:text-4xl font-bold text-black-800 mb-4">
                Protocolo de Prevención de Acoso Sexual, Laboral y Violencia en el Trabajo
              </h1>
              <p className="text-xl text-slateGray-600 max-w-3xl mx-auto">
                Desarrollo e implementación de protocolos específicos para prevenir situaciones de acoso y violencia en el ambiente laboral.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <ShieldCheck className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Descripción del Servicio</h2>
              </div>
              
              <div className="bg-gradient-to-r from-robinEggBlue-50 to-robinEggBlue-100 rounded-lg p-6 mb-8">
                <p className="text-lg leading-relaxed text-gray-800 mb-6">
                   El objetivo de este protocolo es fortalecer entornos laborales seguros y libres de violencia, donde se potencie el buen trato, se promueva la igualdad con perspectiva de género y se prevengan las situaciones constitutivas de acoso sexual, laboral y de violencia en el trabajo, las que se generan por la ausencia o deficiencia de la gestión de los riesgos psicosociales en la organización, así como en la mantención de conductas inadecuadas o prohibidas en el lugar de trabajo, asumiendo la entidad empleadora su responsabilidad en la erradicación de conductas contrarias a la dignidad de las personas en el ambiente de trabajo.
                 </p>
                <div className="flex justify-center">
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