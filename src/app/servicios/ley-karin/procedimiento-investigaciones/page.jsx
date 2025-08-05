import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/fade-in";
import { ArrowLeft, ClipboardList } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

export default function ProcedimientoInvestigacionesPage() {
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
                Procedimiento de Investigaciones de Acoso Sexual, Laboral y Violencia Laboral
              </h1>
              <p className="text-xl text-slateGray-600 max-w-3xl mx-auto">
                Establecimiento de procedimientos claros y efectivos para la investigación de denuncias de acoso y violencia en el trabajo.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <ClipboardList className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Descripción del Servicio</h2>
              </div>
              
              <div className="bg-gradient-to-r from-robinEggBlue-50 to-robinEggBlue-100 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Objetivo del procedimiento</h3>
                <ul className="space-y-3 text-gray-800">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Prevenir, investigar y sancionar conductas de acoso sexual, acoso laboral y violencia en el trabajo, en alineación con la normativa chilena del Código del Trabajo y compromisos internacionales como el Convenio 190 de la OIT y la Ley 21.675 sobre violencia de género.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Garantizar mecanismos efectivos, accesibles, confidenciales e imparciales para la presentación de denuncias, así como una investigación sigilosa y profesional, con una respuesta rápida y reparación a las víctimas.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Asegurar la protección inmediata de quien denuncia, mediante medidas como separación de espacios, redistribución de jornadas laborales y atención psicológica temprana.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Promover un cambio cultural sostenido en los entornos laborales: formación continua en igualdad de género, sensibilización y capacitación para generar ambientes de respeto y dignidad profesional.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Establecer un marco legal claro que obligue a empleadores —tanto del sector privado como público— a disponer de protocolos, prever plazos de investigación, incorporar principios de confidencialidad, imparcialidad, celeridad y perspectiva de género, e informar sobre los canales disponibles y medidas adoptadas.</span>
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