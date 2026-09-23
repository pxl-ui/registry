import {
  TeaserAuthor,
  TeaserDate,
  TeaserDescription,
  TeaserTitle,
  TeaserVideo,
} from "@/features/pxl/newspaper/rss/teaser";
import { Teaser, TeaserContent, TeaserMedia, TeaserMeta } from "@/features/pxl/newspaper/teaser";
import type { Rss } from "@/lib/schemas/pxl/rss";

export default function TeaserDemo() {
  const rssItem: Rss.Item = {
    title:
      "Kit Harington protagoniza ‘Historia de dos ciudades’: “No llevaba vestuario de época desde ‘Juego de tronos’, y pensé ‘¡oh, dios, otra vez no!”",
    link: "https://elpais.com/television/series/2026-09-10/kit-harington-protagoniza-historia-de-dos-ciudades-no-llevaba-vestuario-de-epoca-desde-juego-de-tronos-y-pense-oh-dios-otra-vez-no.html",
    description:
      "El actor también produce la miniserie de MGM+ y BBC que adapta la popularísima novela de Charles Dickens",
    categories: [
      {
        name: "Series televisión",
      },
      {
        name: "Kit Harington",
      },
      {
        name: "Actores",
      },
      {
        name: "Actrices",
      },
      {
        name: "Televisión",
      },
      {
        name: "Series drama",
      },
      {
        name: "Charles Dickens",
      },
      {
        name: "Series británicas",
      },
      {
        name: "BBC",
      },
      {
        name: "Juego de tronos",
      },
      {
        name: "Estrenos televisión",
      },
      {
        name: "Adaptaciones series",
      },
      {
        name: "Harry Potter",
      },
      {
        name: "Amazon Prime Video",
      },
      {
        name: "Libros",
      },
    ],
    guid: {
      value:
        "https://elpais.com/television/series/2026-09-10/kit-harington-protagoniza-historia-de-dos-ciudades-no-llevaba-vestuario-de-epoca-desde-juego-de-tronos-y-pense-oh-dios-otra-vez-no.html",
      isPermaLink: true,
    },
    pubDate: "Thu, 10 Sep 2026 03:30:01 GMT",
    dc: {
      creators: ["Natalia Marcos"],
      creator: "Natalia Marcos",
    },
    content: {
      encoded:
        '<p>“Era el mejor de los tiempos, era el peor de los tiempos”. El comienzo de <a href="https://elpais.com/television/series/historia-de-dos-ciudades/" target="_blank" rel="" title="https://elpais.com/television/series/historia-de-dos-ciudades/"><i>Historia de dos ciudades</i></a>, la novela que <a href="https://elpais.com/cultura/2020/06/08/babelia/1591629296_253567.html" target="_self" rel="" title="https://elpais.com/cultura/2020/06/08/babelia/1591629296_253567.html">Charles Dickens</a> publicó por entregas en 1859, es uno de los más famosos de la historia de la literatura. La época de la Revolución Francesa en la que ambienta el relato le parecía al escritor inglés muy parecida a sus tiempos contemporáneos. Y lo mismo han pensado el guionista Daniel West y el actor <a href="https://elpais.com/elpais/2017/10/31/icon/1509461407_086967.html" target="_blank" rel="" title="https://elpais.com/elpais/2017/10/31/icon/1509461407_086967.html">Kit Harington</a>, principales promotores de su traslación a la pantalla en forma de miniserie de cuatro episodios que se estrena el domingo 6 en MGM+ (servicio de <i>streaming </i>disponible a través de Prime Video).</p><p><a href="https://elpais.com/television/series/2026-09-10/kit-harington-protagoniza-historia-de-dos-ciudades-no-llevaba-vestuario-de-epoca-desde-juego-de-tronos-y-pense-oh-dios-otra-vez-no.html" target="_blank">Seguir leyendo</a></p><img src="https://imagenes.elpais.com/resizer/v2/FVTL7SGZQZGTTMF3KWVPZWYOXM.jpg?auth=51793dc1c480d47e84e92216ff3b579f954a0fb266f2922771a3f10c646029ab" width="3000" height="2055" alt="François Civil y Kit Harington, en \'Historia de dos ciudades\'."></img><img src="https://imagenes.elpais.com/resizer/v2/CZFQFRIJONDYFGN4GOQ7VW4SSE.jpg?auth=ff4f67aab3754e6fa181d8396a3e18230eca3f0ca14a32db3dd672352975b80a" width="3000" height="1837" alt="Kit Harrington y Mirren Mack, en el primer episodio de \'Historia de dos ciudades\'."></img><img src="https://imagenes.elpais.com/resizer/v2/R5IVW24RFFBSJCZGKIU6KYQCYI.jpg?auth=6f5debefd805321d2fe100d878dee33ebe0626fc268cbb386f41852b52558e7f" width="3000" height="2001" alt="Kit Harington, en la serie \'Historia de dos ciudades\'."></img><img src="https://imagenes.elpais.com/resizer/v2/FF2URIR2R5DRXAG7YYZDLSAFZU.jpg?auth=0ce9f08a408a1e1382e47955d825a56feff028e1df200c61ae69129a15fb5717" width="3000" height="2000" alt="Mirren Mack es Lucie Manette en la serie \'Historia de dos ciudades\'."></img>',
    },
    media: {
      contents: [
        {
          url: "https://vdmedia.elpais.com/mcv/elpais/multimedia/20260831/1209350_090005_video_1800.mp4",
          type: "video/mp4",
          medium: "video",
          duration: 124400,
          title: {
            value: "Tráiler en inglés de la serie 'Historia de dos ciudades'",
          },
          description: {
            value:
              "Kit Harington, caracterizado como Sydney Carton en la serie 'Historia de dos ciudades'.",
          },
          thumbnails: [
            {
              url: "https://imagenes.elpais.com/resizer/v2/YCN7GK7J45FBJJGCTW4HYJ2BIU.jpg?auth=68a5479aa6551eb711a661ec3065b6739994b7939ebe7099983855d2f1179671",
            },
          ],
          texts: [
            {
              value:
                "Kit Harington, caracterizado como Sydney Carton en la serie 'Historia de dos ciudades'.",
            },
          ],
        },
      ],
    },
    dcterms: {
      alternatives: [
        "El actor también produce la miniserie de MGM+ y BBC que adapta la popularísima novela de Charles Dickens",
      ],
      alternative:
        "El actor también produce la miniserie de MGM+ y BBC que adapta la popularísima novela de Charles Dickens",
    },
  };

  return (
    <Teaser>
      <TeaserContent>
        <TeaserTitle item={rssItem} />
        <TeaserDescription item={rssItem} />
        <TeaserMeta>
          <TeaserDate item={rssItem} />
          <TeaserAuthor item={rssItem} />
        </TeaserMeta>
      </TeaserContent>
      <TeaserMedia color="grayscale" variant="video">
        <TeaserVideo item={rssItem} />
      </TeaserMedia>
    </Teaser>
  );
}
