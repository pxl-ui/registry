import type { Atom } from "@/lib/schemas/pxl/atom";

export const catalog: Atom.Feed = {
    authors: [
      {
        name: "Project Gutenberg",
        uri: "https://www.gutenberg.org",
        email: "webmaster@gutenberg.org",
      },
    ],
    icon: "https://www.gutenberg.org/gutenberg/favicon.ico",
    id: "http://www.gutenberg.org/ebooks/search.opds/",
    links: [
      {
        href: "https://www.gutenberg.org/catalog/osd-books.xml",
        rel: "search",
        type: "application/opensearchdescription+xml",
        title: "Project Gutenberg Catalog Search",
      },
      {
        href: "/ebooks/search.opds/",
        rel: "self",
        type: "application/atom+xml;profile=opds-catalog",
        title: "This Page",
      },
      {
        href: "/ebooks/search/",
        rel: "alternate",
        type: "text/html",
        title: "HTML Page",
      },
      {
        href: "/ebooks.opds/",
        rel: "start",
        type: "application/atom+xml;profile=opds-catalog",
        title: "Start Page",
      },
      {
        href: "/ebooks/search.opds/?start_index=26",
        rel: "next",
        type: "application/atom+xml;profile=opds-catalog",
        title: "Next Page",
      },
    ],
    subtitle: {
      value: "Free eBooks since 1971.",
    },
    title: {
      value: "All Books",
    },
    updated: "2026-09-30T23:33:47Z",
    entries: [
      {
        content: {
          value: "Jane Austen",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/1342.opds",
        links: [
          {
            href: "/ebooks/1342.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Pride and Prejudice",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Herman Melville",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/2701.opds",
        links: [
          {
            href: "/ebooks/2701.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Moby Dick; Or, The Whale",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Mary Wollstonecraft Shelley",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/84.opds",
        links: [
          {
            href: "/ebooks/84.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Frankenstein; or, the modern prometheus",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Lewis Carroll",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/11.opds",
        links: [
          {
            href: "/ebooks/11.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Alice's Adventures in Wonderland",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Arthur Conan Doyle",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/1661.opds",
        links: [
          {
            href: "/ebooks/1661.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "The Adventures of Sherlock Holmes",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "William Shakespeare",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/1513.opds",
        links: [
          {
            href: "/ebooks/1513.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Romeo and Juliet",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Fyodor Dostoyevsky",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/2554.opds",
        links: [
          {
            href: "/ebooks/2554.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Crime and Punishment",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Bram Stoker",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/345.opds",
        links: [
          {
            href: "/ebooks/345.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Dracula",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "William Shakespeare",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/100.opds",
        links: [
          {
            href: "/ebooks/100.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "The Complete Works of William Shakespeare",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "71874 downloads",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/37683.opds",
        links: [
          {
            href: "/ebooks/37683.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Chambers's Twentieth Century Dictionary (part 1 of 4: A-D)",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Robert Louis Stevenson",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/43.opds",
        links: [
          {
            href: "/ebooks/43.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "The strange case of Dr. Jekyll and Mr. Hyde",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "E. M. Forster",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/2641.opds",
        links: [
          {
            href: "/ebooks/2641.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "A Room with a View",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "George Eliot",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/145.opds",
        links: [
          {
            href: "/ebooks/145.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Middlemarch",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Homer",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/1727.opds",
        links: [
          {
            href: "/ebooks/1727.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "The Odyssey",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "L. M. Montgomery",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/67979.opds",
        links: [
          {
            href: "/ebooks/67979.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "The Blue Castle: a novel",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Louisa May Alcott",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/37106.opds",
        links: [
          {
            href: "/ebooks/37106.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Little Women; Or, Meg, Jo, Beth, and Amy",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Charlotte Brontë",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/1260.opds",
        links: [
          {
            href: "/ebooks/1260.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Jane Eyre: An Autobiography",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "58236 downloads",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/16328.opds",
        links: [
          {
            href: "/ebooks/16328.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Beowulf: An Anglo-Saxon Epic Poem",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "54137 downloads",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/62383.opds",
        links: [
          {
            href: "/ebooks/62383.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value:
            "A Biblia Sagrada, Contendo o Velho e o Novo Testamento (Portuguese)",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Oscar Wilde",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/174.opds",
        links: [
          {
            href: "/ebooks/174.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "The Picture of Dorian Gray",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Alexandre Dumas and Auguste Maquet",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/1184.opds",
        links: [
          {
            href: "/ebooks/1184.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "The Count of Monte Cristo",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Richard Wagner",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/5197.opds",
        links: [
          {
            href: "/ebooks/5197.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "My Life — Volume 1",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "F. Scott Fitzgerald",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/64317.opds",
        links: [
          {
            href: "/ebooks/64317.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "The Great Gatsby",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Emperor of Rome Marcus Aurelius",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/2680.opds",
        links: [
          {
            href: "/ebooks/2680.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Meditations",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Charles Dickens",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/98.opds",
        links: [
          {
            href: "/ebooks/98.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "A Tale of Two Cities",
        },
        updated: "2026-09-30T23:33:47Z",
      },
    ],
    opensearch: {
      startIndex: 1,
      itemsPerPage: 25,
    },
  };