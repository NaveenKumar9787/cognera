import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    "short_name": "VitalNxtai Pvltd",
    "name": "VitalNxtai",
    "icons": [
      {
        "src": "/icons-vector.svg",
        "type": "image/svg+xml",
        "sizes": "512x512"
      },
      {
        "src": "favicon-16x16.png",
        "type": "image/png",
        "sizes": "16x16"
      },
      {
        "src": "favicon-32x32.png",
        "type": "image/png",
        "sizes": "32x32"
      },  
      {
        "src": "favicon-144x144.png",
        "type": "image/png",
        "sizes": "144x144"
      },  
      {
        "src": "favicon-512.png",
        "type": "image/png",
        "sizes": "512x512"
      }
    ],
    "id": "/?source=pwa",
    "start_url": "/?source=pwa",
    "background_color": "#3367D6",
    "display": "standalone",
    "scope": "/",
    "theme_color": "#3367D6",
    "shortcuts": [
      {
        "name": "Our Partners",
        "short_name": "Partners",
        "description": "",
        "url": "/?source=pwa",
        "icons": [{ "src": "/images/partners.png", "sizes": "192x192" }]
      },
      {
        "name": "VitalNxtai",
        "short_name": "Integrations",
        "description": "E-commerce solutions, Website development services, Online store development",
        "url": "/?source=pwa",
        "icons": [{ "src": "/images/integrations.png", "sizes": "192x192" }]
      }
    ],
    "description": "",
    "screenshots": [
      {
        "src": "/images/screenshot1.png",
        "type": "image/png",
        "sizes": "540x720",
     //   "form_factor": "narrow"
      },
      {
        "src": "/images/screenshot2.jpg",
        "type": "image/jpg",
        "sizes": "720x540",
       // "form_factor": "wide"
      }
    ]
  }
}
