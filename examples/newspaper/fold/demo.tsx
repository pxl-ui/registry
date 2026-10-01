import { Fold } from "@/components/features/pxl/newspaper/fold";

export default function NewspaperFoldExample() {
  return (
      <Fold className="w-full max-w-xs" foldHeight={90}>
        <div className="p-4 font-serif">
          <header className="mb-2.5 border-b-[3px] border-double border-[#201d18] pb-1.5">
            <div className="text-center text-2xl font-bold tracking-wide text-[#201d18]">
              El Heraldo Digital
            </div>
            <div className="text-center text-[0.65rem] uppercase tracking-widest text-gray-500">
              Domingo, 27 de septiembre — Edición matinal
            </div>
          </header>

          <div className="relative mb-2.5 h-22.5 overflow-hidden rounded bg-linear-to-br from-[#7b8a6e] to-[#4c5a41]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,255,255,0.35),transparent_45%)]" />
          </div>

          <p className="mb-2.5 text-sm font-bold leading-snug text-[#201d18]">
            La ciudad estrena su nuevo puente peatonal tras dos años de obras
          </p>

          <div className="columns-2 gap-3.5 text-justify text-[0.62rem] leading-relaxed text-gray-700 [column-rule:1px_solid_#c9c2ad]">
            <p>
              El ayuntamiento inauguró ayer la pasarela que conecta el barrio
              norte con el centro histórico, una infraestructura esperada
              desde hace más de una década por los vecinos de la zona.
            </p>
            <p>
              Según fuentes municipales, el proyecto ha supuesto una
              inversión superior a los tres millones de euros y permitirá
              reducir en quince minutos el trayecto habitual a pie entre
              ambos distritos.
            </p>
          </div>
        </div>
      </Fold>
  );
}