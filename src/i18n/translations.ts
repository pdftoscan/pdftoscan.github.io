export type LocaleCode = 'en' | 'es' | 'pt' | 'de' | 'fr' | 'ja' | 'zh' | 'ru';

export interface LanguageMeta {
  code: LocaleCode;
  badge: string;
  label: string;
  path: string;
  htmlLang: string;
}

export const SUPPORTED_LANGUAGES: LanguageMeta[] = [
  { code: 'en', badge: 'US', label: 'English', path: '/', htmlLang: 'en' },
  { code: 'es', badge: 'ES', label: 'Español', path: '/es/', htmlLang: 'es' },
  { code: 'pt', badge: 'BR', label: 'Português', path: '/pt/', htmlLang: 'pt-BR' },
  { code: 'de', badge: 'DE', label: 'Deutsch', path: '/de/', htmlLang: 'de' },
  { code: 'fr', badge: 'FR', label: 'Français', path: '/fr/', htmlLang: 'fr' },
  { code: 'ja', badge: 'JP', label: '日本語', path: '/ja/', htmlLang: 'ja' },
  { code: 'zh', badge: 'CN', label: '简体中文', path: '/zh/', htmlLang: 'zh-CN' },
  { code: 'ru', badge: 'RU', label: 'Русский', path: '/ru/', htmlLang: 'ru' },
];

export interface TranslationDictionary {
  meta: {
    title: string;
    description: string;
    keywords: string;
    breadcrumbHome: string;
    breadcrumbCurrent: string;
  };
  navbar: {
    brandSub: string;
    languageLabel: string;
    themeToggleLabel: string;
    installPwaLabel: string;
    installPwaShort: string;
    supportLabel: string;
    supportShort: string;
    iosModalTitle: string;
    iosModalStep1: string;
    iosModalStep2: string;
    iosModalClose: string;
  };
  hero: {
    badge: string;
    h1: string;
    subtitle: string;
  };
  dropzone: {
    title: string;
    subtitle: string;
    selectPdfBtn: string;
    trySampleBtn: string;
    dragActiveText: string;
    pillPrivate: string;
    pillFlattened: string;
    pillZeroUploads: string;
    invalidFileError: string;
  };
  studio: {
    previewHeader: string;
    changeFileBtn: string;
    pageIndicator: string;
    prevPageAria: string;
    nextPageAria: string;
    compareOriginalBtn: string;
    comparingOriginalBadge: string;
    liveScannedBadge: string;
    scannerBeamActiveText: string;
    controlsHeader: string;
    presetsTitle: string;
    presets: {
      photocopier: { title: string; desc: string };
      grayscale: { title: string; desc: string };
      camscanner: { title: string; desc: string };
      vintageFax: { title: string; desc: string };
    };
    slidersTitle: string;
    tiltLabel: string;
    tiltHint: string;
    noiseLabel: string;
    noiseHint: string;
    contrastLabel: string;
    contrastHint: string;
    dpiLabel: string;
    dpiCompact: string;
    dpiStandard: string;
    dpiCrisp: string;
    colorModeLabel: string;
    colorModes: {
      bw: string;
      grayscale: string;
      color: string;
      warm: string;
    };
    edgeShadowLabel: string;
    downloadBtn: string;
    downloadingProgress: string;
    downloadComplete: string;
    resetDefaultsBtn: string;
  };
  seoSections: {
    stepsHeading: string;
    stepsIntro: string;
    steps: Array<{ title: string; body: string }>;
    whyHeading: string;
    whyIntro: string;
    whyCards: Array<{ title: string; body: string }>;
    privacyHeading: string;
    privacyBody1: string;
    privacyBody2: string;
    privacyBullets: string[];
    faqHeading: string;
    faqIntro: string;
    faqs: Array<{ q: string; a: string }>;
  };
  footer: {
    tagline: string;
    copyright: string;
    supportCta: string;
    licenseText: string;
  };
}

export const TRANSLATIONS: Record<LocaleCode, TranslationDictionary> = {
  en: {
    meta: {
      title: 'Make PDF Look Scanned Online Free | Realistic Document Scanner Effect (100% Client-Side)',
      description:
        'Make any PDF look like a realistic scanned document online free. Apply 1.5° page tilt, B&W photocopier contrast, and paper grain 100% in your browser. Learn how to scan to PDF and flatten PDFs privately.',
      keywords:
        'make pdf look like scanned, make document look scanned, make pdf look scanned online free, edit pdf, scan pdf, how to scan to pdf, how to scan pdf, realistic scanned pdf generator, flatten pdf online, client side pdf scanner simulator',
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'Make PDF Look Scanned Online',
    },
    navbar: {
      brandSub: '100% Local Studio',
      languageLabel: 'Select Language',
      themeToggleLabel: 'Toggle Light or Dark Theme',
      installPwaLabel: 'Add to Home Screen (Install Offline App)',
      installPwaShort: 'Install App',
      supportLabel: 'Support the Developer on Ko-fi',
      supportShort: 'Support Developer',
      iosModalTitle: 'Install PDFtoScan on iOS / Safari',
      iosModalStep1: '1. Tap the Share icon at the bottom of Safari.',
      iosModalStep2: '2. Scroll down and tap "Add to Home Screen" for full offline access.',
      iosModalClose: 'Got It',
    },
    hero: {
      badge: '100% CLIENT-SIDE • OFFLINE PWA • ZERO SERVER UPLOADS',
      h1: 'Make PDF Look Scanned Online Free',
      subtitle:
        'Transform clean digital PDFs into authentic, uneditable physical scans in seconds. Real-time 1.5° flatbed tilt, photocopier toner contrast, paper texture grain, and flattened multi-page export — processed 100% inside your browser.',
    },
    dropzone: {
      title: 'Drop Your Digital PDF Here to Simulate a Physical Scan',
      subtitle: 'Supports multi-page contracts, invoices, forms, and signed agreements of any size.',
      selectPdfBtn: 'Select PDF File (Or Try Built-in Sample PDF)',
      trySampleBtn: 'Load Built-in Sample Contract PDF',
      dragActiveText: 'Release PDF to Launch the Live Scanner Studio...',
      pillPrivate: '100% Client-Side & Private',
      pillFlattened: 'Uneditable Flattened Scan',
      pillZeroUploads: 'Zero Server Uploads',
      invalidFileError: 'Please select a valid PDF document (.pdf).',
    },
    studio: {
      previewHeader: 'Live Flatbed Scanner Preview',
      changeFileBtn: 'Upload Another PDF',
      pageIndicator: 'Page {current} of {total}',
      prevPageAria: 'Previous PDF Page',
      nextPageAria: 'Next PDF Page',
      compareOriginalBtn: 'Compare Original vs. Scanned',
      comparingOriginalBadge: 'VIEWING ORIGINAL DIGITAL PDF',
      liveScannedBadge: 'LIVE SCANNED CANVAS OUTPUT',
      scannerBeamActiveText: 'Optical Sensor Sweep Active',
      controlsHeader: 'Scanner Studio Controls',
      presetsTitle: '1. One-Click Hardware Scan Presets',
      presets: {
        photocopier: {
          title: 'Office Photocopier B&W',
          desc: 'High-contrast toner, crisp dark ink, 1.5° tilt & subtle drum grain',
        },
        grayscale: {
          title: 'Clean Grayscale Scan',
          desc: 'Balanced 200 DPI flatbed office scanner with gentle paper texture',
        },
        camscanner: {
          title: 'Mobile CamScanner Color',
          desc: 'Preserves color signatures & stamps with bright illuminated contrast',
        },
        vintageFax: {
          title: 'Vintage Heavy Fax',
          desc: 'Steep 2.4° skew, heavy thermal grain & dark threshold ink',
        },
      },
      slidersTitle: '2. Fine-Tune Optical Scanner Sliders',
      tiltLabel: 'Page Tilt Angle',
      tiltHint: 'Natural paper feed skew per page (Default 1.5°)',
      noiseLabel: 'Noise & Paper Grain',
      noiseHint: 'Organic optical sensor dust & paper fiber texture',
      contrastLabel: 'Contrast & Ink Darkness',
      contrastHint: 'Photocopier exposure & toner saturation boost',
      dpiLabel: 'Scan Resolution DPI',
      dpiCompact: '100 DPI Compact',
      dpiStandard: '150 DPI Balanced',
      dpiCrisp: '300 DPI Crisp',
      colorModeLabel: 'Scanner Color Sensor Mode',
      colorModes: {
        bw: 'Photocopier B&W',
        grayscale: 'True Grayscale',
        color: 'Color Stamp Safe',
        warm: 'Warm Parchment',
      },
      edgeShadowLabel: 'Flatbed Glass Edge Vignette & Dust Specks',
      downloadBtn: 'Download Scanned PDF',
      downloadingProgress: 'Scanning Page {current} of {total}...',
      downloadComplete: 'Scanned PDF Exported Successfully!',
      resetDefaultsBtn: 'Reset to 1.5° Studio Defaults',
    },
    seoSections: {
      stepsHeading: 'How to Make a PDF Look Like Scanned in 3 Simple Steps',
      stepsIntro:
        'Need to make a document look scanned without owning a physical printer or flatbed scanner? Whether you are searching for how to scan to PDF or how to scan PDF files that already contain digital signatures, our browser-based optical simulator creates an indistinguishable hardware scan in three effortless clicks:',
      steps: [
        {
          title: 'Step 1: Select Your PDF or Load the Built-in Sample',
          body: 'Click the oversized "Select PDF File" button or drag and drop your document into the workspace. Unlike cloud converters where you edit PDF files on remote servers, PDFtoScan reads your file directly into local browser memory using Mozilla PDF.js.',
        },
        {
          title: 'Step 2: Choose a Scanner Preset or Adjust the 1.5° Tilt & Grain',
          body: 'Pick from four authentic hardware profiles — Office Photocopier B&W, Clean Grayscale Scan, Mobile CamScanner Color, or Vintage Heavy Fax. Watch the 60fps glowing scanner beam sweep across your live preview as you fine-tune Page Tilt Angle (1.5° default), Noise & Paper Grain (28%), Contrast & Ink Darkness (135%), and Scan Resolution DPI.',
        },
        {
          title: 'Step 3: Download Your Flattened, Uneditable Scanned PDF',
          body: 'Click "Download Scanned PDF". Every page is rasterized onto an HTML5 Canvas with subtle randomized feeder skew and packaged via jsPDF into a flattened, non-selectable PDF document that looks 100% physically printed and re-scanned.',
        },
      ],
      whyHeading: 'Why Flatten & Scan PDF Documents Online (Contracts, Signatures & Compliance)',
      whyIntro:
        'When you make PDF look scanned online free with PDFtoScan, you do more than apply a visual filter — you convert vector text layers and floating digital signature PNGs into a single merged, tamper-resistant raster image per page.',
      whyCards: [
        {
          title: 'Blend Digital Signatures Naturally',
          body: 'Pasted e-signatures or Apple Pencil autographs often stand out awkwardly against crisp vector text. Applying realistic photocopier contrast, 1.5° paper tilt, and unified grain makes the signature and text share the exact same optical ink density.',
        },
        {
          title: 'Uneditable Flattened Raster Output',
          body: 'Standard tools that edit PDF text leave selectable layers and movable stamps intact. Our scan PDF pipeline flattens every page into a locked bitmap image so recipients cannot copy, highlight, or alter individual text blocks.',
        },
        {
          title: 'Satisfy Legacy Wet-Scan Portal Requirements',
          body: 'Many administrative, legal, and banking portals still request a "wet-signed and scanned PDF" without requiring you to waste paper, toner, and time printing and re-scanning physical sheets.',
        },
      ],
      privacyHeading: '100% Client-Side Privacy: How WebAssembly & HTML5 Canvas Protect Your Sensitive PDFs',
      privacyBody1:
        'Most websites that claim to make document look scanned upload your private tax returns, NDAs, medical records, or employment contracts to a remote cloud server for ImageMagick or Ghostscript processing. That creates an unacceptable data-breach risk.',
      privacyBody2:
        'PDFtoScan is engineered from the ground up as a 100% client-side Progressive Web App (PWA). The moment you load this page, you can disconnect from Wi-Fi completely and continue to scan PDF files offline.',
      privacyBullets: [
        'Zero Network Transmission: Your PDF bytes never leave your device — verified via browser DevTools Network tab.',
        'Hardware-Accelerated HTML5 2D Pixel Shaders: Custom luminance lookup tables (LUTs), Box-Muller Gaussian paper grain, and affine rotation matrices run locally at 60fps.',
        'Automatic Memory Sanitization: Temporary offscreen Canvas buffers and object references are immediately released after export.',
        'Installable Offline PWA: Click "Add to Home Screen" in the top bar to install PDFtoScan as a native-like desktop or mobile utility.',
      ],
      faqHeading: 'Frequently Asked Questions: Make PDF Look Scanned Online Free',
      faqIntro:
        'Everything you need to know about how to make a PDF look like scanned, how to scan to PDF without hardware, and how our client-side flattening engine works.',
      faqs: [
        {
          q: 'How can I make a PDF look like scanned online for free without a printer?',
          a: 'Simply open PDFtoScan (https://pdftoscan.github.io/), drop your digital PDF into the upload box, select a preset such as "Office Photocopier B&W" or "Clean Grayscale Scan", and click "Download Scanned PDF". The tool automatically adds realistic 1.5° page tilt, paper fiber noise, high-contrast toner darkness, and flatbed edge shadows for free.',
        },
        {
          q: 'Is my confidential document uploaded to any server when I scan PDF files here?',
          a: 'Never. PDFtoScan operates 100% inside your web browser using Mozilla PDF.js and HTML5 Canvas. Zero files, metadata, or pages are ever uploaded to a server. You can even turn off your internet connection after loading the page and make document look scanned completely offline.',
        },
        {
          q: 'Does this tool flatten the PDF so text and signatures cannot be edited?',
          a: 'Yes! Unlike standard tools used to edit PDF text, PDFtoScan rasterizes every page into a flattened image before compiling the new PDF. Selectable text layers, hidden comments, and separate signature layers are permanently merged into a single uneditable scan page.',
        },
        {
          q: 'Can I keep blue or colored ink signatures while making the document look scanned?',
          a: 'Absolutely. Choose the "Mobile CamScanner Color" preset or switch the Scanner Color Sensor Mode to "Color Stamp Safe". This preserves blue pen signatures and official red/blue stamps while still applying realistic paper texture, high-contrast lighting, and slight page tilt.',
        },
        {
          q: 'What is the best tilt angle and DPI to make a document look scanned naturally?',
          a: 'A subtle Page Tilt Angle around 1.2° to 1.8° (our default is 1.5° with slight random variation across multi-page documents) combined with 25%–30% paper grain and 150 DPI to 300 DPI resolution produces the most authentic automatic document feeder (ADF) look.',
        },
        {
          q: 'How to scan to PDF on mobile or desktop when I only have a digital file?',
          a: 'Instead of printing a digital file just to take a photo with your phone, open PDFtoScan on iOS, Android, Windows, or macOS. Load your file, tap "Download Scanned PDF", and get a clean, artifact-free scanned PDF in seconds.',
        },
      ],
    },
    footer: {
      tagline: '100% Client-Side Realistic PDF Scanner Simulator • Built for Privacy, Speed & Accessibility.',
      copyright: '© 2026 PDFtoScan (pdftoscan.github.io). Released under the MIT License.',
      supportCta: 'Support the Developer on Ko-fi',
      licenseText: 'Open-Source MIT License • Zero Tracking of Document Content',
    },
  },
  es: {
    meta: {
      title: 'Hacer que un PDF Parezca Escaneado Gratis Online | Efecto Escáner Realista (100% Local)',
      description:
        'Convierte cualquier PDF digital en un documento escaneado realista gratis online. Aplica inclinación de 1.5°, grano de papel y contraste de fotocopiadora 100% en tu navegador sin subir archivos.',
      keywords:
        'hacer que un pdf parezca escaneado, simular pdf escaneado online gratis, escanear pdf online, aplanar pdf, efecto escaner pdf, make pdf look like scanned',
      breadcrumbHome: 'Inicio',
      breadcrumbCurrent: 'Hacer que un PDF Parezca Escaneado Online',
    },
    navbar: {
      brandSub: 'Estudio 100% Local',
      languageLabel: 'Seleccionar idioma',
      themeToggleLabel: 'Cambiar tema claro u oscuro',
      installPwaLabel: 'Añadir a pantalla de inicio (Instalar App Offline)',
      installPwaShort: 'Instalar App',
      supportLabel: 'Apoyar al desarrollador en Ko-fi',
      supportShort: 'Apoyar',
      iosModalTitle: 'Instalar PDFtoScan en iOS / Safari',
      iosModalStep1: '1. Toca el icono Compartir en la barra inferior de Safari.',
      iosModalStep2: '2. Desplázate y selecciona "Añadir a pantalla de inicio" para usar sin conexión.',
      iosModalClose: 'Entendido',
    },
    hero: {
      badge: '100% EN TU NAVEGADOR • APP OFFLINE PWA • CERO SUBIDAS AL SERVIDOR',
      h1: 'Hacer que un PDF Parezca Escaneado Gratis Online',
      subtitle:
        'Transforma documentos PDF digitales en escaneos físicos auténticos y no editables en segundos. Inclinación realista de 1.5°, contraste de fotocopiadora, textura de papel y exportación multipágina 100% privada.',
    },
    dropzone: {
      title: 'Arrastra tu PDF Digital Aquí para Simular un Escaneo Físico',
      subtitle: 'Compatible con contratos multipágina, facturas, formularios y acuerdos firmados.',
      selectPdfBtn: 'Seleccionar Archivo PDF (O Probar PDF de Ejemplo)',
      trySampleBtn: 'Cargar Contrato PDF de Ejemplo Integrado',
      dragActiveText: 'Suelta el PDF para Abrir el Estudio de Escaneo en Vivo...',
      pillPrivate: '100% Local y Privado',
      pillFlattened: 'Escaneo Aplanado No Editable',
      pillZeroUploads: 'Cero Subidas al Servidor',
      invalidFileError: 'Por favor selecciona un archivo PDF válido (.pdf).',
    },
    studio: {
      previewHeader: 'Vista Previa del Escáner en Tiempo Real',
      changeFileBtn: 'Subir Otro PDF',
      pageIndicator: 'Página {current} de {total}',
      prevPageAria: 'Página anterior del PDF',
      nextPageAria: 'Página siguiente del PDF',
      compareOriginalBtn: 'Comparar Original vs. Escaneado',
      comparingOriginalBadge: 'VIENDO PDF DIGITAL ORIGINAL',
      liveScannedBadge: 'SALIDA ESCANEADA EN TIEMPO REAL',
      scannerBeamActiveText: 'Barrido Óptico Activo',
      controlsHeader: 'Controles del Estudio de Escáner',
      presetsTitle: '1. Ajustes Preestablecidos en Un Clic',
      presets: {
        photocopier: {
          title: 'Fotocopiadora B/N de Oficina',
          desc: 'Tóner de alto contraste, tinta oscura nítida, giro de 1.5° y grano sutil',
        },
        grayscale: {
          title: 'Escaneo Limpio en Escala de Grises',
          desc: 'Escáner plano equilibrado de 200 DPI con textura suave de papel',
        },
        camscanner: {
          title: 'CamScanner Móvil en Color',
          desc: 'Conserva firmas en azul y sellos con iluminación brillante',
        },
        vintageFax: {
          title: 'Fax Térmico Intenso',
          desc: 'Inclinación de 2.4°, grano pronunciado y tinta oscura intensa',
        },
      },
      slidersTitle: '2. Deslizadores Ópticos de Precisión',
      tiltLabel: 'Ángulo de Inclinación',
      tiltHint: 'Desviación natural del alimentador de papel (1.5° por defecto)',
      noiseLabel: 'Ruido y Grano de Papel',
      noiseHint: 'Textura orgánica de fibra de papel y polvo óptico',
      contrastLabel: 'Contraste y Oscuridad de Tinta',
      contrastHint: 'Exposición de fotocopiadora e intensidad del tóner',
      dpiLabel: 'Resolución de Escaneo DPI',
      dpiCompact: '100 DPI Compacto',
      dpiStandard: '150 DPI Equilibrado',
      dpiCrisp: '300 DPI Nítido',
      colorModeLabel: 'Modo de Sensor de Color',
      colorModes: {
        bw: 'Fotocopiadora B/N',
        grayscale: 'Escala de Grises',
        color: 'Color (Firmas y Sellos)',
        warm: 'Pergamino Cálido',
      },
      edgeShadowLabel: 'Sombra de Borde de Cristal y Motas de Polvo',
      downloadBtn: 'Descargar PDF Escaneado',
      downloadingProgress: 'Escaneando página {current} de {total}...',
      downloadComplete: '¡PDF Escaneado Exportado con Éxito!',
      resetDefaultsBtn: 'Restablecer Valores de Estudio (1.5°)',
    },
    seoSections: {
      stepsHeading: 'Cómo Hacer que un PDF Parezca Escaneado en 3 Simples Pasos',
      stepsIntro:
        '¿Necesitas que un documento digital parezca escaneado sin tener impresora ni escáner físico? Nuestro simulador óptico en el navegador genera un PDF escaneado auténtico en segundos:',
      steps: [
        {
          title: 'Paso 1: Selecciona tu PDF o Carga el Ejemplo Integrado',
          body: 'Haz clic en el botón grande "Seleccionar Archivo PDF" o arrastra tu documento. Todo se procesa localmente en la memoria de tu navegador con Mozilla PDF.js.',
        },
        {
          title: 'Paso 2: Elige un Perfil o Ajusta la Inclinación de 1.5° y el Grano',
          body: 'Selecciona Fotocopiadora B/N, Escala de Grises, CamScanner Color o Fax Vintage. Observa el haz de luz láser recorrer tu documento mientras ajustas inclinación, grano, contraste y DPI.',
        },
        {
          title: 'Paso 3: Descarga tu PDF Aplanado y No Editable',
          body: 'Pulsa "Descargar PDF Escaneado". Cada página se convierte en una imagen rasterizada aplanada mediante jsPDF, idéntica a una hoja impresa y vuelta a escanear.',
        },
      ],
      whyHeading: '¿Por Qué Aplanar y Simular el Escaneo de Documentos PDF Online?',
      whyIntro:
        'Al convertir tu PDF digital en un escaneo realista, fusionas las capas de texto vectorial y las firmas superpuestas en una única imagen inalterable por página.',
      whyCards: [
        {
          title: 'Integra Firmas Digitales con Naturalidad',
          body: 'Las firmas pegadas suelen resaltar artificialmente sobre el texto digital. El grano de papel y el contraste de tóner unifican toda la página.',
        },
        {
          title: 'Documento Aplanado No Editable',
          body: 'Elimina las capas de texto seleccionables para que nadie pueda copiar ni modificar cláusulas individuales del contrato.',
        },
        {
          title: 'Ahorra Papel, Tóner y Tiempo',
          body: 'Cumple con los portales administrativos que exigen documentos escaneados sin necesidad de imprimir ni usar hardware físico.',
        },
      ],
      privacyHeading: 'Privacidad 100% Local: Tus Documentos Nunca Salen de tu Dispositivo',
      privacyBody1:
        'Muchas herramientas suben tus contratos y documentos fiscales a servidores externos. PDFtoScan procesa cada píxel directamente dentro de tu navegador web.',
      privacyBody2:
        'Incluso puedes desconectar Internet tras abrir la página y seguir escaneando documentos con total normalidad.',
      privacyBullets: [
        'Cero transferencia de red: Tus archivos jamás se envían a ningún servidor.',
        'Procesamiento acelerado en HTML5 Canvas a 60fps en tiempo real.',
        'Limpieza automática de memoria tras finalizar la descarga.',
        'Aplicación Web Progresiva (PWA) instalable para uso sin conexión.',
      ],
      faqHeading: 'Preguntas Frecuentes sobre Cómo Simular un PDF Escaneado',
      faqIntro: 'Respuestas claras sobre privacidad, aplanado de capas, firmas en color y resolución DPI.',
      faqs: [
        {
          q: '¿Cómo hacer que un PDF parezca escaneado gratis sin impresora?',
          a: 'Abre PDFtoScan, sube tu archivo PDF, elige el ajuste "Fotocopiadora B/N de Oficina" o "Escala de Grises" y pulsa "Descargar PDF Escaneado".',
        },
        {
          q: '¿Se suben mis archivos PDF a algún servidor?',
          a: 'No. El procesamiento es 100% local en tu navegador mediante PDF.js y HTML5 Canvas.',
        },
        {
          q: '¿El PDF resultante queda aplanado y sin texto seleccionable?',
          a: 'Sí, todas las páginas se convierten en imágenes aplanadas para impedir la edición o selección del texto.',
        },
        {
          q: '¿Puedo mantener el color azul de una firma o sello?',
          a: 'Sí, elige el perfil "CamScanner Móvil en Color" para conservar firmas azules y sellos mientras aplicas textura de papel e inclinación.',
        },
      ],
    },
    footer: {
      tagline: 'Simulador de Escáner PDF 100% Local • Privacidad, Velocidad y Accesibilidad.',
      copyright: '© 2026 PDFtoScan (pdftoscan.github.io). Publicado bajo Licencia MIT.',
      supportCta: 'Apoyar al Desarrollador en Ko-fi',
      licenseText: 'Licencia MIT de Código Abierto • Cero Rastreo de Documentos',
    },
  },
  pt: {
    meta: {
      title: 'Fazer PDF Parecer Digitalizado Grátis Online | Efeito Scanner Realista (100% Local)',
      description:
        'Transforme qualquer PDF digital em um documento digitalizado realista grátis online. Aplique inclinação de 1.5°, textura de papel e contraste de copiadora 100% no seu navegador.',
      keywords:
        'fazer pdf parecer digitalizado, simular pdf escaneado online gratis, digitalizar pdf, achatar pdf, make pdf look like scanned, scan pdf',
      breadcrumbHome: 'Início',
      breadcrumbCurrent: 'Fazer PDF Parecer Digitalizado Online',
    },
    navbar: {
      brandSub: 'Estúdio 100% Local',
      languageLabel: 'Selecionar Idioma',
      themeToggleLabel: 'Alternar Tema Claro ou Escuro',
      installPwaLabel: 'Adicionar à Tela Inicial (Instalar App Offline)',
      installPwaShort: 'Instalar App',
      supportLabel: 'Apoiar o Desenvolvedor no Ko-fi',
      supportShort: 'Apoiar',
      iosModalTitle: 'Instalar PDFtoScan no iOS / Safari',
      iosModalStep1: '1. Toque no ícone Compartilhar na barra inferior do Safari.',
      iosModalStep2: '2. Role para baixo e toque em "Adicionar à Tela de Início".',
      iosModalClose: 'Entendi',
    },
    hero: {
      badge: '100% NO NAVEGADOR • APP PWA OFFLINE • ZERO UPLOADS PARA SERVIDOR',
      h1: 'Fazer PDF Parecer Digitalizado Grátis Online',
      subtitle:
        'Converta PDFs digitais limpos em digitalizações físicas autênticas e não editáveis em segundos. Inclinação de 1.5°, contraste de toner, granulação de papel e exportação multipágina 100% local.',
    },
    dropzone: {
      title: 'Solte Seu PDF Digital Aqui para Simular uma Digitalização Física',
      subtitle: 'Suporta contratos de várias páginas, faturas, recibos e documentos assinados.',
      selectPdfBtn: 'Selecionar Arquivo PDF (Ou Testar PDF de Exemplo)',
      trySampleBtn: 'Carregar Contrato PDF de Exemplo Integrado',
      dragActiveText: 'Solte o PDF para Iniciar o Estúdio de Digitalização...',
      pillPrivate: '100% Local e Privado',
      pillFlattened: 'Digitalização Achatada Não Editável',
      pillZeroUploads: 'Zero Uploads para Servidor',
      invalidFileError: 'Por favor, selecione um arquivo PDF válido (.pdf).',
    },
    studio: {
      previewHeader: 'Pré-visualização do Scanner em Tempo Real',
      changeFileBtn: 'Carregar Outro PDF',
      pageIndicator: 'Página {current} de {total}',
      prevPageAria: 'Página anterior do PDF',
      nextPageAria: 'Próxima página do PDF',
      compareOriginalBtn: 'Comparar Original vs. Digitalizado',
      comparingOriginalBadge: 'VISUALIZANDO PDF DIGITAL ORIGINAL',
      liveScannedBadge: 'SAÍDA DIGITALIZADA EM TEMPO REAL',
      scannerBeamActiveText: 'Feixe Óptico do Scanner Ativo',
      controlsHeader: 'Controles do Estúdio de Scanner',
      presetsTitle: '1. Perfis de Digitalização em Um Clique',
      presets: {
        photocopier: {
          title: 'Fotocopiadora P&B de Escritório',
          desc: 'Toner de alto contraste, tinta escura nítida, inclinação de 1.5° e granulação sutil',
        },
        grayscale: {
          title: 'Digitalização Limpa em Tons de Cinza',
          desc: 'Scanner de mesa equilibrado de 200 DPI com textura suave de papel',
        },
        camscanner: {
          title: 'CamScanner Móvel Colorido',
          desc: 'Preserva assinaturas azuis e carimbos com contraste iluminado',
        },
        vintageFax: {
          title: 'Fax Térmico Vintage',
          desc: 'Inclinação de 2.4°, granulação intensa e tinta escura',
        },
      },
      slidersTitle: '2. Ajustes Finos do Sensor Óptico',
      tiltLabel: 'Ângulo de Inclinação da Página',
      tiltHint: 'Desvio natural do alimentador de folhas (Padrão 1.5°)',
      noiseLabel: 'Ruído e Textura do Papel',
      noiseHint: 'Fibras orgânicas do papel e poeira óptica do vidro',
      contrastLabel: 'Contraste e Escuridão da Tinta',
      contrastHint: 'Exposição da copiadora e densidade do toner',
      dpiLabel: 'Resolução da Digitalização DPI',
      dpiCompact: '100 DPI Compacto',
      dpiStandard: '150 DPI Equilibrado',
      dpiCrisp: '300 DPI Alta Nitidez',
      colorModeLabel: 'Modo de Cor do Sensor',
      colorModes: {
        bw: 'Copiadora P&B',
        grayscale: 'Tons de Cinza',
        color: 'Cor (Assinaturas)',
        warm: 'Pergaminho Quente',
      },
      edgeShadowLabel: 'Vinheta de Borda do Vidro e Pontos de Poeira',
      downloadBtn: 'Baixar PDF Digitalizado',
      downloadingProgress: 'Digitalizando Página {current} de {total}...',
      downloadComplete: 'PDF Digitalizado Exportado com Sucesso!',
      resetDefaultsBtn: 'Restaurar Padrões (1.5°)',
    },
    seoSections: {
      stepsHeading: 'Como Fazer um PDF Parecer Digitalizado em 3 Passos Simples',
      stepsIntro:
        'Precisa que um contrato ou formulário digital pareça ter sido impresso e escaneado em uma máquina física? Nosso simulador resolve isso diretamente no navegador:',
      steps: [
        {
          title: 'Passo 1: Escolha seu PDF ou Use o Exemplo Integrado',
          body: 'Clique em "Selecionar Arquivo PDF" ou arraste seu documento. O arquivo é lido localmente via Mozilla PDF.js sem sair do seu computador ou celular.',
        },
        {
          title: 'Passo 2: Selecione um Perfil ou Ajuste a Inclinação de 1.5° e Grão',
          body: 'Escolha entre Fotocopiadora P&B, Tons de Cinza, CamScanner Colorido ou Fax. Veja o feixe de luz percorrer a página em 60fps enquanto ajusta os controles.',
        },
        {
          title: 'Passo 3: Baixe seu PDF Achatado e Não Editável',
          body: 'Clique em "Baixar PDF Digitalizado". Cada página é convertida em imagem rasterizada via jsPDF, impossibilitando a seleção ou alteração do texto.',
        },
      ],
      whyHeading: 'Por Que Achatar e Simular a Digitalização de PDFs Online?',
      whyIntro:
        'Unifique textos vetoriais e assinaturas digitais coladas em uma única camada visual idêntica a um documento físico.',
      whyCards: [
        {
          title: 'Assinaturas Digitais Naturais',
          body: 'Elimine o aspecto artificial de assinaturas coladas aplicando a mesma textura de papel e contraste de toner em toda a folha.',
        },
        {
          title: 'Segurança Contra Edição',
          body: 'O PDF exportado é totalmente achatado (flattened), impedindo cópia de texto ou remoção de assinaturas.',
        },
        {
          title: 'Economia de Papel e Impressora',
          body: 'Atenda exigências de portais que pedem documentos digitalizados sem precisar imprimir e escanear folhas físicas.',
        },
      ],
      privacyHeading: 'Privacidade 100% Client-Side: Seus Arquivos Nunca Saem do Dispositivo',
      privacyBody1:
        'Diferente de outros sites que enviam seus contratos para servidores na nuvem, o PDFtoScan processa tudo localmente no seu navegador.',
      privacyBody2:
        'Você pode inclusive desligar o Wi-Fi após carregar a página e continuar gerando PDFs digitalizados offline.',
      privacyBullets: [
        'Zero upload para servidores externos.',
        'Shaders 2D em HTML5 Canvas acelerados por hardware.',
        'Limpeza imediata da memória após a exportação.',
        'App PWA instalável no celular ou computador.',
      ],
      faqHeading: 'Perguntas Frequentes: Fazer PDF Parecer Digitalizado',
      faqIntro: 'Tire todas as suas dúvidas sobre privacidade, qualidade de imagem e assinaturas coloridas.',
      faqs: [
        {
          q: 'Como fazer um PDF parecer escaneado grátis sem impressora?',
          a: 'Basta abrir o PDFtoScan, carregar seu PDF, escolher um perfil como "Fotocopiadora P&B" e clicar em "Baixar PDF Digitalizado".',
        },
        {
          q: 'Meus documentos confidenciais são enviados para algum servidor?',
          a: 'Nunca. Todo o processamento ocorre 100% dentro do seu próprio navegador.',
        },
        {
          q: 'O texto do PDF continua selecionável após a conversão?',
          a: 'Não. O documento é achatado em imagem, exatamente como um papel escaneado em um equipamento físico.',
        },
        {
          q: 'Posso preservar assinaturas em caneta azul?',
          a: 'Sim! Utilize o perfil "CamScanner Móvel Colorido" para manter as cores das assinaturas e carimbos.',
        },
      ],
    },
    footer: {
      tagline: 'Simulador de Scanner PDF 100% Local • Privacidade, Rapidez e Acessibilidade.',
      copyright: '© 2026 PDFtoScan (pdftoscan.github.io). Licenciado sob MIT.',
      supportCta: 'Apoiar o Desenvolvedor no Ko-fi',
      licenseText: 'Licença MIT Open-Source • Zero Rastreamento de Arquivos',
    },
  },
  de: {
    meta: {
      title: 'PDF wie gescannt aussehen lassen Online Gratis | Realistischer Scanner-Effekt (100% Lokal)',
      description:
        'Lassen Sie jedes digitale PDF kostenlos online wie ein echtes gescanntes Dokument aussehen. 1,5° Seitenneigung, Papierkorn & Kopierer-Kontrast 100% lokal im Browser.',
      keywords:
        'pdf wie gescannt aussehen lassen, dokument wie gescannt aussehen lassen, pdf scannen effekt online kostenlos, pdf flachrechnen, make pdf look like scanned',
      breadcrumbHome: 'Startseite',
      breadcrumbCurrent: 'PDF wie gescannt aussehen lassen Online',
    },
    navbar: {
      brandSub: '100% Lokales Studio',
      languageLabel: 'Sprache wählen',
      themeToggleLabel: 'Helles oder dunkles Design umschalten',
      installPwaLabel: 'Zum Startbildschirm hinzufügen (Offline-App installieren)',
      installPwaShort: 'App installieren',
      supportLabel: 'Entwickler auf Ko-fi unterstützen',
      supportShort: 'Unterstützen',
      iosModalTitle: 'PDFtoScan auf iOS / Safari installieren',
      iosModalStep1: '1. Tippen Sie unten in Safari auf das Teilen-Symbol.',
      iosModalStep2: '2. Wählen Sie „Zum Home-Bildschirm“, um die App komplett offline zu nutzen.',
      iosModalClose: 'Verstanden',
    },
    hero: {
      badge: '100% CLIENT-SEITIG • OFFLINE-PWA • KEINE SERVER-UPLOADS',
      h1: 'PDF wie gescannt aussehen lassen Online Gratis',
      subtitle:
        'Verwandeln Sie digitale PDFs sekundenschnell in authentische, nicht bearbeitbare Hardware-Scans. Realistische 1,5°-Neigung, Fotokopierer-Kontrast, Papierstruktur und mehrseitiger Export – 100% lokal in Ihrem Browser.',
    },
    dropzone: {
      title: 'Digitales PDF hier ablegen, um einen echten Scan zu simulieren',
      subtitle: 'Unterstützt mehrseitige Verträge, Rechnungen, Formulare und unterschriebene Dokumente.',
      selectPdfBtn: 'PDF-Datei auswählen (Oder Beispiel-PDF testen)',
      trySampleBtn: 'Integriertes Beispiel-Vertrags-PDF laden',
      dragActiveText: 'PDF loslassen, um das Live-Scanner-Studio zu starten...',
      pillPrivate: '100% Lokal & Privat',
      pillFlattened: 'Unbearbeitbarer Flacher Scan',
      pillZeroUploads: 'Keine Server-Uploads',
      invalidFileError: 'Bitte wählen Sie eine gültige PDF-Datei (.pdf) aus.',
    },
    studio: {
      previewHeader: 'Live-Flachbettscanner-Vorschau',
      changeFileBtn: 'Anderes PDF laden',
      pageIndicator: 'Seite {current} von {total}',
      prevPageAria: 'Vorherige PDF-Seite',
      nextPageAria: 'Nächste PDF-Seite',
      compareOriginalBtn: 'Original vs. Gescannt vergleichen',
      comparingOriginalBadge: 'ORIGINAL DIGITALES PDF',
      liveScannedBadge: 'LIVE GESCANNTES ERGEBNIS',
      scannerBeamActiveText: 'Optischer Scannerstrahl aktiv',
      controlsHeader: 'Scanner-Studio Einstellungen',
      presetsTitle: '1. Ein-Klick Hardware-Scan-Profile',
      presets: {
        photocopier: {
          title: 'Büro-Fotokopierer S/W',
          desc: 'Starker Tonerkontrast, tiefschwarze Schrift, 1,5° Neigung & feines Korn',
        },
        grayscale: {
          title: 'Sauberer Graustufen-Scan',
          desc: 'Ausgewogener 200-DPI-Flachbettscan mit natürlicher Papierstruktur',
        },
        camscanner: {
          title: 'Mobiler CamScanner Farbe',
          desc: 'Erhält blaue Unterschriften & Stempel bei kräftigem Kontrast',
        },
        vintageFax: {
          title: 'Vintage Thermo-Fax',
          desc: 'Stärkere 2,4°-Neigung, kräftiges Papierkorn & dunkler Schwellenwert',
        },
      },
      slidersTitle: '2. Optische Scanner-Regler',
      tiltLabel: 'Seitenneigungswinkel',
      tiltHint: 'Natürlicher Einzugsversatz pro Seite (Standard 1,5°)',
      noiseLabel: 'Rauschen & Papierkorn',
      noiseHint: 'Organische Papierfasern und feine Sensor-Staubpartikel',
      contrastLabel: 'Kontrast & Tintenschwärze',
      contrastHint: 'Belichtungsstärke und Tonerdichte des Kopierers',
      dpiLabel: 'Scan-Auflösung DPI',
      dpiCompact: '100 DPI Kompakt',
      dpiStandard: '150 DPI Standard',
      dpiCrisp: '300 DPI Scharf',
      colorModeLabel: 'Farbsensor-Modus',
      colorModes: {
        bw: 'Kopierer S/W',
        grayscale: 'Echte Graustufen',
        color: 'Farbe (Stempel/Unterschrift)',
        warm: 'Warmes Pergament',
      },
      edgeShadowLabel: 'Glasrand-Schatten & feine Staubkörner',
      downloadBtn: 'Gescanntes PDF herunterladen',
      downloadingProgress: 'Scanne Seite {current} von {total}...',
      downloadComplete: 'Gescanntes PDF erfolgreich erstellt!',
      resetDefaultsBtn: 'Auf 1,5° Studio-Standard zurücksetzen',
    },
    seoSections: {
      stepsHeading: 'Wie Sie ein PDF in 3 einfachen Schritten wie gescannt aussehen lassen',
      stepsIntro:
        'Möchten Sie ein digitales Dokument wie gescannt aussehen lassen, ohne es auszudrucken und erneut einzuscannen? Unser Browser-Simulator erledigt das in Sekunden:',
      steps: [
        {
          title: 'Schritt 1: PDF-Datei auswählen oder Beispiel-PDF starten',
          body: 'Klicken Sie auf „PDF-Datei auswählen“ oder ziehen Sie Ihr Dokument in das Feld. Ihre Datei wird mit Mozilla PDF.js ausschließlich lokal im Arbeitsspeicher Ihres Geräts geöffnet.',
        },
        {
          title: 'Schritt 2: Scanner-Profil wählen oder 1,5°-Neigung & Korn anpassen',
          body: 'Wählen Sie zwischen Büro-Fotokopierer S/W, Graustufen-Scan, CamScanner Farbe oder Fax. Der animierte 60fps-Scannerstrahl zeigt jede Änderung sofort live an.',
        },
        {
          title: 'Schritt 3: Abgeflachtes, nicht bearbeitbares PDF herunterladen',
          body: 'Klicken Sie auf „Gescanntes PDF herunterladen“. Jede Seite wird als gerastertes Bild über jsPDF gespeichert – Text und Unterschriften sind fest verschmolzen.',
        },
      ],
      whyHeading: 'Warum PDF-Dokumente online abflachen und wie gescannt aussehen lassen?',
      whyIntro:
        'Durch die Umwandlung in ein realistisches Scan-Abbild verschmelzen Vektortext und eingefügte digitale Unterschriften zu einer einzigen manipulationssicheren Seite.',
      whyCards: [
        {
          title: 'Eingefügte Unterschriften perfekt integrieren',
          body: 'Digitale Signaturen wirken auf reinem Vektortext oft künstlich. Durch 1,5° Neigung und einheitliches Papierkorn sieht die gesamte Seite wie aus einem Guss aus.',
        },
        {
          title: 'Schutz vor nachträglicher Textänderung',
          body: 'Alle Textebenen werden vollständig abgeflacht (flattened). Niemand kann einzelne Wörter markieren, kopieren oder verschieben.',
        },
        {
          title: 'Kein Drucker & kein Papierverschleiß',
          body: 'Sparen Sie sich das Ausdrucken und Einscannen für Behörden- oder Bankportale, die ein gescanntes Dokument verlangen.',
        },
      ],
      privacyHeading: '100% Client-Seitiger Datenschutz: Ihre PDFs verlassen niemals Ihr Gerät',
      privacyBody1:
        'Viele Online-Tools laden Ihre vertraulichen Verträge oder Steuerdokumente auf fremde Cloud-Server hoch. PDFtoScan arbeitet zu 100% lokal in Ihrem Browser.',
      privacyBody2:
        'Nach dem Laden der Webseite können Sie sogar Ihre Internetverbindung trennen und komplett offline weiterarbeiten.',
      privacyBullets: [
        'Null Datenübertragung: Keine Datei verlässt Ihren Computer oder Ihr Smartphone.',
        'Hardwarebeschleunigte HTML5-Canvas-Pixel-Shader mit 60fps.',
        'Automatische Speicherbereinigung nach dem PDF-Export.',
        'Installierbare Offline-PWA für Desktop und Mobilgeräte.',
      ],
      faqHeading: 'Häufig gestellte Fragen (FAQ)',
      faqIntro: 'Alles Wichtige rund um realistische PDF-Scans, Datenschutz und farbige Unterschriften.',
      faqs: [
        {
          q: 'Wie kann ich ein PDF kostenlos online wie gescannt aussehen lassen?',
          a: 'Laden Sie Ihr PDF auf PDFtoScan hoch, wählen Sie ein Profil wie „Büro-Fotokopierer S/W“ und klicken Sie auf „Gescanntes PDF herunterladen“.',
        },
        {
          q: 'Werden meine Dokumente auf einen Server hochgeladen?',
          a: 'Nein, niemals. Die gesamte Bildverarbeitung findet lokal in Ihrem Webbrowser statt.',
        },
        {
          q: 'Ist der Text im fertigen PDF noch markierbar oder bearbeitbar?',
          a: 'Nein. Jede Seite wird in eine flache Grafik umgewandelt, genau wie bei einem echten Hardware-Scanner.',
        },
        {
          q: 'Bleiben blaue Unterschriften oder farbige Stempel erhalten?',
          a: 'Ja, nutzen Sie einfach das Profil „Mobiler CamScanner Farbe“ oder den Farbsensor-Modus „Farbe“.',
        },
      ],
    },
    footer: {
      tagline: '100% Lokaler PDF-Scanner-Simulator • Entwickelt für Datenschutz, Tempo & Barrierefreiheit.',
      copyright: '© 2026 PDFtoScan (pdftoscan.github.io). Veröffentlicht unter der MIT-Lizenz.',
      supportCta: 'Entwickler auf Ko-fi unterstützen',
      licenseText: 'Open-Source MIT-Lizenz • Kein Tracking von Dokumentinhalten',
    },
  },
  fr: {
    meta: {
      title: 'Donner un Aspect Scanné à un PDF en Ligne Gratuit | Effet Scanner Réaliste (100% Local)',
      description:
        'Transformez tout PDF numérique en un document scanné réaliste gratuitement en ligne. Inclinaison 1.5°, grain de papier et contraste photocopieur 100% dans votre navigateur.',
      keywords:
        'donner aspect scanne pdf, simuler pdf scanne en ligne gratuit, effet scanner pdf, aplatir pdf, make pdf look like scanned, scan pdf',
      breadcrumbHome: 'Accueil',
      breadcrumbCurrent: 'Donner un Aspect Scanné à un PDF en Ligne',
    },
    navbar: {
      brandSub: 'Studio 100% Local',
      languageLabel: 'Choisir la langue',
      themeToggleLabel: 'Basculer le thème clair ou sombre',
      installPwaLabel: "Ajouter à l'écran d'accueil (Installer l'application hors-ligne)",
      installPwaShort: "Installer l'App",
      supportLabel: 'Soutenir le développeur sur Ko-fi',
      supportShort: 'Soutenir',
      iosModalTitle: 'Installer PDFtoScan sur iOS / Safari',
      iosModalStep1: '1. Appuyez sur le bouton Partager en bas de Safari.',
      iosModalStep2: "2. Faites défiler et appuyez sur « Sur l'écran d'accueil » pour un accès hors-ligne.",
      iosModalClose: 'Compris',
    },
    hero: {
      badge: '100% CÔTÉ CLIENT • PWA HORS-LIGNE • ZÉRO ENVOI SUR SERVEUR',
      h1: 'Donner un Aspect Scanné à un PDF en Ligne Gratuit',
      subtitle:
        'Convertissez vos PDF numériques impeccables en véritables documents scannés non modifiables en quelques secondes. Inclinaison 1.5°, contraste toner, grain de papier et export multipage 100% local.',
    },
    dropzone: {
      title: 'Déposez Votre PDF Numérique Ici pour Simuler un Scan Physique',
      subtitle: 'Prend en charge les contrats multipages, factures, formulaires et accords signés.',
      selectPdfBtn: 'Sélectionner un Fichier PDF (Ou Tester le PDF Exemple)',
      trySampleBtn: 'Charger le Contrat PDF Exemple Intégré',
      dragActiveText: 'Relâchez le PDF pour Ouvrir le Studio Scanner...',
      pillPrivate: '100% Local & Privé',
      pillFlattened: 'Scan Aplati Non Modifiable',
      pillZeroUploads: 'Zéro Envoi Serveur',
      invalidFileError: 'Veuillez sélectionner un fichier PDF valide (.pdf).',
    },
    studio: {
      previewHeader: 'Aperçu du Scanner à Plat en Temps Réel',
      changeFileBtn: 'Charger un Autre PDF',
      pageIndicator: 'Page {current} sur {total}',
      prevPageAria: 'Page PDF précédente',
      nextPageAria: 'Page PDF suivante',
      compareOriginalBtn: 'Comparer Original vs Scanné',
      comparingOriginalBadge: 'APERÇU DU PDF NUMÉRIQUE ORIGINAL',
      liveScannedBadge: 'RENDU SCANNÉ EN DIRECT',
      scannerBeamActiveText: 'Balayage Optique Actif',
      controlsHeader: 'Réglages du Studio Scanner',
      presetsTitle: '1. Préréglages Matériels en Un Clic',
      presets: {
        photocopier: {
          title: 'Photocopieur Bureau N&B',
          desc: 'Toner haut contraste, encre noire nette, inclinaison 1.5° et grain fin',
        },
        grayscale: {
          title: 'Scan Niveaux de Gris Propre',
          desc: 'Scanner à plat 200 DPI équilibré avec texture de papier naturelle',
        },
        camscanner: {
          title: 'CamScanner Mobile Couleur',
          desc: 'Préserve les signatures bleues et tampons avec un contraste lumineux',
        },
        vintageFax: {
          title: 'Fax Thermique Vintage',
          desc: 'Inclinaison marquée de 2.4°, grain prononcé et encre très dense',
        },
      },
      slidersTitle: '2. Curseurs Optiques de Précision',
      tiltLabel: "Angle d'Inclinaison de Page",
      tiltHint: 'Légère rotation naturelle du chargeur de feuilles (Défaut 1.5°)',
      noiseLabel: 'Bruit & Grain de Papier',
      noiseHint: 'Fibres de papier organiques et micro-poussières du capteur',
      contrastLabel: "Contraste & Noirceur de l'Encre",
      contrastHint: 'Exposition du photocopieur et densité du toner',
      dpiLabel: 'Résolution de Numérisation DPI',
      dpiCompact: '100 DPI Compact',
      dpiStandard: '150 DPI Équilibré',
      dpiCrisp: '300 DPI Très Net',
      colorModeLabel: 'Mode du Capteur Couleur',
      colorModes: {
        bw: 'Photocopieur N&B',
        grayscale: 'Niveaux de Gris',
        color: 'Couleur (Signatures)',
        warm: 'Parchemin Chaud',
      },
      edgeShadowLabel: 'Ombre de Bordure de Vitre & Poussières',
      downloadBtn: 'Télécharger le PDF Scanné',
      downloadingProgress: 'Numérisation de la page {current} sur {total}...',
      downloadComplete: 'PDF Scanné Exporté avec Succès !',
      resetDefaultsBtn: 'Réinitialiser aux Valeurs Studio (1.5°)',
    },
    seoSections: {
      stepsHeading: 'Comment Donner un Aspect Scanné à un PDF en 3 Étapes Simples',
      stepsIntro:
        "Besoin de faire paraître un document numérique comme s'il avait été imprimé puis numérisé sur un scanner physique ? Notre simulateur optique réalise cela directement dans votre navigateur :",
      steps: [
        {
          title: 'Étape 1 : Sélectionnez votre PDF ou Chargez le Modèle',
          body: 'Cliquez sur « Sélectionner un Fichier PDF » ou glissez-déposez votre fichier. Le document est lu localement grâce à Mozilla PDF.js sans jamais quitter votre appareil.',
        },
        {
          title: "Étape 2 : Choisissez un Préréglage ou Ajustez l'Inclinaison 1.5°",
          body: 'Sélectionnez Photocopieur N&B, Niveaux de Gris, CamScanner Couleur ou Fax. Observez le faisceau lumineux balayer la page à 60fps pendant vos réglages.',
        },
        {
          title: 'Étape 3 : Téléchargez votre PDF Aplati et Non Modifiable',
          body: 'Cliquez sur « Télécharger le PDF Scanné ». Chaque page est aplatie en image bitmap via jsPDF, empêchant toute modification ou sélection du texte.',
        },
      ],
      whyHeading: 'Pourquoi Aplatir et Simuler la Numérisation de vos Documents PDF ?',
      whyIntro:
        'Transformez les calques de texte vectoriel et les signatures électroniques collées en une image unique et homogène.',
      whyCards: [
        {
          title: 'Unifier les Signatures Numériques',
          body: "Les signatures apposées numériquement ressortent souvent trop nettement. L'inclinaison 1.5° et le grain de papier harmonisent l'encre sur toute la page.",
        },
        {
          title: 'Document Aplati Non Modifiable',
          body: 'Supprime les calques de texte sélectionnables afin que personne ne puisse copier ou altérer le contenu du contrat.',
        },
        {
          title: 'Zéro Impression Papier Requise',
          body: 'Répondez aux exigences des portails administratifs demandant un scan sans gaspiller de papier ni de toner.',
        },
      ],
      privacyHeading: 'Confidentialité 100% Côté Client : Vos PDF Restent sur Votre Appareil',
      privacyBody1:
        'Contrairement aux convertisseurs en nuage qui téléversent vos contrats confidentiels sur des serveurs distants, PDFtoScan traite chaque page localement dans votre navigateur.',
      privacyBody2:
        'Vous pouvez même couper votre connexion Wi-Fi après le chargement de la page et continuer à travailler hors-ligne.',
      privacyBullets: [
        'Zéro transfert réseau : vos fichiers ne quittent jamais votre ordinateur ou téléphone.',
        'Shaders graphiques HTML5 Canvas accélérés à 60fps.',
        'Nettoyage automatique de la mémoire vive après export.',
        'Application PWA installable pour un usage hors-ligne complet.',
      ],
      faqHeading: 'Questions Fréquentes (FAQ)',
      faqIntro: 'Tout savoir sur la simulation de scan PDF gratuite, la confidentialité et les signatures en couleur.',
      faqs: [
        {
          q: 'Comment donner un aspect scanné à un PDF gratuitement sans imprimante ?',
          a: 'Ouvrez PDFtoScan, importez votre fichier PDF, choisissez le profil « Photocopieur Bureau N&B » et cliquez sur « Télécharger le PDF Scanné ».',
        },
        {
          q: 'Mes documents confidentiels sont-ils envoyés sur un serveur ?',
          a: "Jamais. L'intégralité du rendu s'effectue localement dans votre navigateur via PDF.js et HTML5 Canvas.",
        },
        {
          q: 'Le PDF final est-il aplati et protégé contre la copie de texte ?',
          a: 'Oui, chaque page est convertie en une image matricielle aplatie non sélectionnable.',
        },
        {
          q: "Puis-je conserver la couleur bleue d'une signature ou d'un tampon ?",
          a: 'Oui, utilisez le préréglage « CamScanner Mobile Couleur » pour préserver les encres bleues ou rouges tout en appliquant le grain du papier.',
        },
      ],
    },
    footer: {
      tagline: 'Simulateur de Scanner PDF 100% Local • Conçu pour la Confidentialité, la Vitesse & l’Accessibilité.',
      copyright: '© 2026 PDFtoScan (pdftoscan.github.io). Publié sous Licence MIT.',
      supportCta: 'Soutenir le Développeur sur Ko-fi',
      licenseText: 'Licence Open-Source MIT • Zéro Collecte de Données',
    },
  },
  ja: {
    meta: {
      title: 'PDFをスキャンしたように見せる無料オンラインツール | リアルなスキャナー効果 (100%ブラウザ完結)',
      description:
        'デジタルPDFを本物のスキャン文書のように無料で変換。1.5°の傾き、紙の質感、コピー機のコントラストを100%ブラウザ内で処理。サーバーへのアップロードなしで安全にPDFを画像化・フラット化。',
      keywords:
        'pdf スキャンしたように見せる, pdf スキャン風 加工 無料, pdf フラット化, スキャン pdf 作成, make pdf look like scanned, scan pdf',
      breadcrumbHome: 'ホーム',
      breadcrumbCurrent: 'PDFをスキャンしたように見せるオンラインツール',
    },
    navbar: {
      brandSub: '100%ローカル処理',
      languageLabel: '言語を選択',
      themeToggleLabel: 'ライト/ダークモード切替',
      installPwaLabel: 'ホーム画面に追加 (オフラインアプリをインストール)',
      installPwaShort: 'アプリ追加',
      supportLabel: 'Ko-fiで開発者を支援する',
      supportShort: '開発支援',
      iosModalTitle: 'iOS / SafariでPDFtoScanをインストール',
      iosModalStep1: '1. Safari下部の「共有」アイコンをタップします。',
      iosModalStep2: '2. 「ホーム画面に追加」を選択するとオフラインでも利用できます。',
      iosModalClose: '閉じる',
    },
    hero: {
      badge: '100%クライアント処理 • オフラインPWA対応 • サーバー送信ゼロ',
      h1: 'PDFをスキャンしたように見せる無料オンラインツール',
      subtitle:
        '綺麗なデジタルPDFを、数秒で本物の複合機・スキャナーで読み取ったような編集不可のPDFに変換します。1.5°の自然な傾き、トナーの濃淡、紙の粒子感を100%ブラウザ内で安全に再現。',
    },
    dropzone: {
      title: 'デジタルPDFをここにドロップしてスキャン効果を適用',
      subtitle: '複数ページの契約書、請求書、申込書、電子署名済みドキュメントに対応。',
      selectPdfBtn: 'PDFファイルを選択 (またはサンプルPDFを試す)',
      trySampleBtn: '内蔵のサンプル契約書PDFを読み込む',
      dragActiveText: 'PDFをドロップしてライブスキャナースタジオを起動...',
      pillPrivate: '100%ブラウザ完結・機密保護',
      pillFlattened: '編集不可のフラット化スキャン',
      pillZeroUploads: 'サーバーへの送信ゼロ',
      invalidFileError: '有効なPDFファイル（.pdf）を選択してください。',
    },
    studio: {
      previewHeader: 'リアルタイム・スキャナープレビュー',
      changeFileBtn: '別のPDFを選択',
      pageIndicator: '{current} / {total} ページ',
      prevPageAria: '前のPDFページ',
      nextPageAria: '次のPDFページ',
      compareOriginalBtn: '元のPDFとスキャン後を比較',
      comparingOriginalBadge: '元のデジタルPDFを表示中',
      liveScannedBadge: 'リアルタイム・スキャン出力',
      scannerBeamActiveText: '光学スキャナービーム稼働中',
      controlsHeader: 'スキャナースタジオ設定',
      presetsTitle: '1. ワンクリック・スキャンプリセット',
      presets: {
        photocopier: {
          title: 'オフィス複合機 モノクロ',
          desc: '高コントラストなトナー、くっきりした黒文字、1.5°の傾きと微細な紙粒子',
        },
        grayscale: {
          title: 'クリーン・グレースケール',
          desc: '自然な紙の質感を備えた200 DPIフラットベッドスキャン',
        },
        camscanner: {
          title: 'モバイル カムスキャナー(カラー)',
          desc: '青インクの署名や赤い印鑑・角印の色を鮮やかに保持',
        },
        vintageFax: {
          title: 'ヴィンテージ感熱FAX',
          desc: '2.4°の傾き、強めの紙粒子ノイズと濃いインク表現',
        },
      },
      slidersTitle: '2. 光学スキャナー微調整スライダー',
      tiltLabel: 'ページの傾き角度',
      tiltHint: '紙送りによる自然な傾き（標準 1.5°）',
      noiseLabel: 'ノイズ・紙の粒子感',
      noiseHint: '紙の繊維質感とセンサーの微細な粒子',
      contrastLabel: 'コントラスト・インクの濃さ',
      contrastHint: 'コピー機の露光量とトナー濃度の強調',
      dpiLabel: 'スキャン解像度 (DPI)',
      dpiCompact: '100 DPI 軽量',
      dpiStandard: '150 DPI 標準',
      dpiCrisp: '300 DPI 高精細',
      colorModeLabel: 'カラーセンサーモード',
      colorModes: {
        bw: '複合機モノクロ',
        grayscale: 'グレースケール',
        color: 'カラー(印鑑・署名保持)',
        warm: 'ウォームパーチメント',
      },
      edgeShadowLabel: 'ガラス端の影・微細なホコリ効果',
      downloadBtn: 'スキャン風PDFをダウンロード',
      downloadingProgress: 'ページをスキャン処理中 ({current} / {total})...',
      downloadComplete: 'スキャン風PDFの出力が完了しました！',
      resetDefaultsBtn: '1.5° 標準設定にリセット',
    },
    seoSections: {
      stepsHeading: 'PDFをスキャンしたように見せる3つの簡単ステップ',
      stepsIntro:
        'プリンターや複合機を使わずに、デジタルPDFを「印刷してスキャンした書類」のように加工したいですか？ブラウザだけで完結する3ステップをご紹介します：',
      steps: [
        {
          title: 'ステップ1：PDFファイルを選択（または内蔵サンプルを試す）',
          body: '「PDFファイルを選択」ボタンをクリックするか、ファイルをドラッグ＆ドロップします。Mozilla PDF.jsにより、お使いの端末のメモリ内だけで安全に読み込まれます。',
        },
        {
          title: 'ステップ2：プリセット選択または1.5°の傾き・粒子感を調整',
          body: '「オフィス複合機モノクロ」「グレースケール」「モバイルカラー（印鑑対応）」から選択。60fpsの光学ビームアニメーションとともにリアルタイムでプレビューが更新されます。',
        },
        {
          title: 'ステップ3：フラット化された編集不可PDFをダウンロード',
          body: '「スキャン風PDFをダウンロード」をクリック。全ページが画像化（ラスタライズ）され、テキスト選択や改ざんができない本物のスキャンPDFとして出力されます。',
        },
      ],
      whyHeading: 'なぜPDFをスキャン風に変換・フラット化するのか？（契約書・電子印鑑・提出書類）',
      whyIntro:
        'デジタル文字レイヤーと貼り付けた電子署名・印鑑画像を、1枚の統一されたスキャン画像に統合します。',
      whyCards: [
        {
          title: '電子署名や透過PNG印鑑を自然に馴染ませる',
          body: 'デジタル文書に貼り付けた署名や印影の浮いた感じを解消し、ページ全体に均一な紙の質感とトナー濃度を与えます。',
        },
        {
          title: 'テキスト改ざんを防ぐ完全フラット化',
          body: '出力されたPDFはすべての文字が画像化されるため、第三者がテキストをコピーしたり書き換えたりすることを防ぎます。',
        },
        {
          title: '印刷・再スキャンの手間と用紙をゼロに',
          body: 'わざわざ紙に印刷してスマホや複合機でスキャンし直す時間とコストを完全に削減できます。',
        },
      ],
      privacyHeading: '100%クライアントサイドの安全性：機密PDFが外部に送信されることはありません',
      privacyBody1:
        '多くのオンラインPDF変換サイトは、契約書や請求書をクラウドサーバーへアップロードして処理します。PDFtoScanはすべての画像処理をブラウザ内のHTML5 Canvasで完結させます。',
      privacyBody2:
        'ページを開いた後はインターネット接続を切断しても、オフラインでそのまま全ての機能をご利用いただけます。',
      privacyBullets: [
        '通信ゼロ：PDFデータが外部サーバーへ送信されることは一切ありません。',
        '60fps HTML5 2Dピクセルシェーダーによる高速ローカル描画。',
        '出力完了後に一時Canvasメモリを自動解放。',
        'スマホやPCにインストール可能なオフラインPWA対応。',
      ],
      faqHeading: 'よくある質問（FAQ）',
      faqIntro: '無料でPDFをスキャン風にする方法やセキュリティ、印鑑の色保持についての回答です。',
      faqs: [
        {
          q: 'プリンターなしでPDFをスキャンしたように見せるには？',
          a: 'PDFtoScanにファイルをドロップし、「オフィス複合機 モノクロ」などのプリセットを選んで「スキャン風PDFをダウンロード」を押すだけです。',
        },
        {
          q: '社外秘の契約書や個人情報のPDFを使っても安全ですか？',
          a: 'はい、100%安全です。ファイルはサーバーへ一切アップロードされず、お使いのブラウザ内部でのみ処理されます。',
        },
        {
          q: '赤い印鑑や青いボールペン署名の色を残すことはできますか？',
          a: '可能です。「モバイル カムスキャナー(カラー)」プリセット、またはカラーセンサーモードで「カラー(印鑑・署名保持)」を選択してください。',
        },
        {
          q: '変換後のPDFの文字は選択・編集できなくなりますか？',
          a: 'はい、すべてのページが1枚の画像にフラット化されるため、テキストの選択や編集はできなくなります。',
        },
      ],
    },
    footer: {
      tagline: '100%ブラウザ完結のリアルPDFスキャナーシミュレーター • プライバシー・高速・高アクセシビリティ',
      copyright: '© 2026 PDFtoScan (pdftoscan.github.io). MITライセンスのもとで公開。',
      supportCta: 'Ko-fiで開発者を支援する',
      licenseText: 'オープンソース MITライセンス • ドキュメント内容の追跡ゼロ',
    },
  },
  zh: {
    meta: {
      title: '免费在线制作PDF扫描件效果 | 逼真文档扫描仪模拟器 (100%本地浏览器处理)',
      description:
        '免费在线将任何数字PDF转换为逼真的扫描件效果。100%在浏览器本地应用1.5°页面倾斜、黑白复印机对比度和纸张颗粒纹理，零服务器上传，保护合同隐私。',
      keywords:
        'pdf扫描件效果, 让pdf看起来像扫描件, 在线制作扫描版pdf, pdf扁平化不可编辑, make pdf look like scanned, scan pdf',
      breadcrumbHome: '首页',
      breadcrumbCurrent: '免费在线制作PDF扫描件效果',
    },
    navbar: {
      brandSub: '100%本地工作室',
      languageLabel: '选择语言',
      themeToggleLabel: '切换浅色或深色主题',
      installPwaLabel: '添加到主屏幕 (安装离线PWA应用)',
      installPwaShort: '安装应用',
      supportLabel: '在 Ko-fi 上支持开发者',
      supportShort: '支持作者',
      iosModalTitle: '在 iOS / Safari 上安装 PDFtoScan',
      iosModalStep1: '1. 点击 Safari 底部工具栏的“分享”图标。',
      iosModalStep2: '2. 向下滚动并点击“添加到主屏幕”，即可随时离线使用。',
      iosModalClose: '知道了',
    },
    hero: {
      badge: '100%浏览器本地运行 • 离线PWA应用 • 零服务器上传',
      h1: '免费在线让PDF看起来像真实扫描件',
      subtitle:
        '几秒钟内将干净的电子版PDF转换为逼真、不可篡改的物理扫描文档。实时1.5°送纸倾斜、复印机碳粉对比度、纸张纤维噪点以及多页扁平化导出——100%在您的设备本地完成。',
    },
    dropzone: {
      title: '将电子版 PDF 拖放到此处以模拟真实物理扫描',
      subtitle: '支持多页合同、发票、申请表及带有电子签名的PDF文件。',
      selectPdfBtn: '选择 PDF 文件 (或体验内置示例 PDF)',
      trySampleBtn: '加载内置示例合同 PDF',
      dragActiveText: '松开鼠标以启动实时扫描工作室...',
      pillPrivate: '100%本地隐私保护',
      pillFlattened: '扁平化不可编辑扫描件',
      pillZeroUploads: '零服务器上传',
      invalidFileError: '请选择有效的 PDF 文档 (.pdf)。',
    },
    studio: {
      previewHeader: '实时平板扫描仪预览',
      changeFileBtn: '更换其他 PDF',
      pageIndicator: '第 {current} 页 / 共 {total} 页',
      prevPageAria: '上一页 PDF',
      nextPageAria: '下一页 PDF',
      compareOriginalBtn: '对比原件与扫描效果',
      comparingOriginalBadge: '正在查看原始电子版 PDF',
      liveScannedBadge: '实时扫描画布输出',
      scannerBeamActiveText: '光学扫描灯束运行中',
      controlsHeader: '扫描仪工作室控制面板',
      presetsTitle: '1. 一键硬件扫描预设',
      presets: {
        photocopier: {
          title: '办公室黑白复印机',
          desc: '高对比度碳粉、深邃黑字、1.5°微倾角与细腻纸张颗粒',
        },
        grayscale: {
          title: '高清灰度平板扫描',
          desc: '均衡的 200 DPI 办公扫描仪效果，带柔和纸张纹理',
        },
        camscanner: {
          title: '手机全能扫描王彩色',
          desc: '保留蓝色手写签名与红色公章印章，高亮度对比',
        },
        vintageFax: {
          title: '复古重度热敏传真',
          desc: '明显 2.4° 倾斜、强烈纸张噪点与高浓度油墨',
        },
      },
      slidersTitle: '2. 光学扫描仪精细滑块',
      tiltLabel: '页面倾斜角度',
      tiltHint: '模拟自动送纸器的自然微偏角（默认 1.5°）',
      noiseLabel: '噪点与纸张颗粒',
      noiseHint: '真实纸张纤维纹理与光学传感器微尘',
      contrastLabel: '对比度与油墨黑度',
      contrastHint: '复印机曝光强度与碳粉饱和度提升',
      dpiLabel: '扫描分辨率 DPI',
      dpiCompact: '100 DPI 紧凑',
      dpiStandard: '150 DPI 均衡',
      dpiCrisp: '300 DPI 超清',
      colorModeLabel: '色彩传感器模式',
      colorModes: {
        bw: '黑白复印机',
        grayscale: '真实灰度',
        color: '彩色(保留公章/签名)',
        warm: '暖色羊皮纸',
      },
      edgeShadowLabel: '平板玻璃边缘暗角与细微灰尘斑点',
      downloadBtn: '下载扫描版 PDF',
      downloadingProgress: '正在扫描第 {current} 页，共 {total} 页...',
      downloadComplete: '扫描版 PDF 导出成功！',
      resetDefaultsBtn: '重置为 1.5° 默认工作室参数',
    },
    seoSections: {
      stepsHeading: '如何通过 3 个简单步骤让 PDF 看起来像扫描件',
      stepsIntro:
        '需要提交“打印签字后再扫描”的PDF文件，但手头没有打印机或扫描仪？我们的浏览器光学模拟器只需三步即可生成真假难辨的硬件扫描件：',
      steps: [
        {
          title: '第 1 步：选择您的 PDF 文件或加载内置示例',
          body: '点击超大的“选择 PDF 文件”按钮，或直接将文件拖入虚线框内。依靠 Mozilla PDF.js，您的文件仅在本地浏览器内存中读取，绝不上传网络。',
        },
        {
          title: '第 2 步：选择一键预设或调节 1.5° 倾角与颗粒度',
          body: '在办公室黑白复印机、高清灰度、彩色保留公章或复古传真预设之间自由切换。伴随着 60fps 的金色扫描灯束扫过画布，实时预览每一处参数变化。',
        },
        {
          title: '第 3 步：下载扁平化、不可篡改的扫描版 PDF',
          body: '点击“下载扫描版 PDF”。每一页都会通过 HTML5 Canvas 栅格化并通过 jsPDF 打包为不可选中文字的纯图像扫描件。',
        },
      ],
      whyHeading: '为什么要在线将 PDF 扁平化并制作扫描效果？（合同、公章与合规）',
      whyIntro:
        '将矢量文字层与后期粘贴的电子签名/公章合成为单一的位图图像，既美观自然又防止内容被篡改。',
      whyCards: [
        {
          title: '让电子签名与公章自然融合',
          body: '直接粘贴在电子版PDF上的手写签名或红章往往显得突兀。统一施加 1.5° 倾斜、纸张纹理和复印机对比度后，签名与正文拥有完全一致的光学质感。',
        },
        {
          title: '彻底扁平化，防止文字被修改',
          body: '普通 PDF 编辑器会保留可复制的文字层和可移动的印章图层。我们的扫描管道将整页锁定为单张图像，任何人都无法直接选中或修改合同条款。',
        },
        {
          title: '免去打印与重复扫描的繁琐',
          body: '无需浪费纸张和墨盒即可满足各类政务、银行及企业系统对“扫描件PDF”的上传要求。',
        },
      ],
      privacyHeading: '100% 客户端本地隐私安全：您的机密 PDF 绝不离开本机',
      privacyBody1:
        '市面上大多数“PDF转扫描件”网站会将您的保密合同、财务报表或身份证件上传到远程服务器进行处理，存在严重的隐私泄露隐患。',
      privacyBody2:
        'PDFtoScan 采用 100% 纯前端 PWA 架构。网页加载完成后，哪怕您立即断开 Wi-Fi 网络，依然可以流畅地离线生成扫描版 PDF。',
      privacyBullets: [
        '零网络传输：您的 PDF 数据绝不离开您的电脑或手机。',
        '硬件加速 HTML5 2D 像素着色器：实时 60fps 渲染高斯纸张噪点与旋转矩阵。',
        '自动内存清理：导出完成后立即释放临时画布缓存。',
        '支持离线安装：点击顶部“添加到主屏幕”即可作为本地桌面或手机应用使用。',
      ],
      faqHeading: '常见问题解答 (FAQ)',
      faqIntro: '关于如何免费制作逼真扫描版 PDF、隐私安全以及保留红色公章/蓝色签名的详细解答。',
      faqs: [
        {
          q: '没有打印机和扫描仪，怎么免费把电子版 PDF 变成扫描件效果？',
          a: '只需打开 PDFtoScan，拖入您的 PDF 文件，选择“办公室黑白复印机”或“手机全能扫描王彩色”预设，然后点击“下载扫描版 PDF”即可。',
        },
        {
          q: '我的保密合同会上传到服务器吗？',
          a: '绝对不会。所有渲染和PDF生成均 100% 在您自己的浏览器内通过 PDF.js 和 HTML5 Canvas 完成。',
        },
        {
          q: '如何在制作扫描效果的同时保留红色的公章和蓝色的签字？',
          a: '请点击“手机全能扫描王彩色”预设，或在色彩传感器模式中选择“彩色(保留公章/签名)”，即可在保留印章色彩的同时添加纸张颗粒与微倾角。',
        },
        {
          q: '生成的扫描版 PDF 还可以复制或修改里面的文字吗？',
          a: '不能。每一页都已被彻底栅格化（扁平化）为图像，就像真正的物理扫描仪扫出来的图片型 PDF 一样。',
        },
      ],
    },
    footer: {
      tagline: '100% 本地运行的逼真 PDF 扫描仪模拟器 • 专为隐私、速度与无障碍设计。',
      copyright: '© 2026 PDFtoScan (pdftoscan.github.io). 基于 MIT 开源许可证发布。',
      supportCta: '在 Ko-fi 上支持开发者',
      licenseText: '开源 MIT 许可证 • 零文档内容追踪',
    },
  },
  ru: {
    meta: {
      title: 'Сделать PDF Как Сканированный Онлайн Бесплатно | Реалистичный Эффект Сканера (100% Локально)',
      description:
        'Превратите любой цифровой PDF в реалистичный отсканированный документ онлайн бесплатно. Наклон 1.5°, зернистость бумаги и контраст копира на 100% в вашем браузере без загрузки на сервер.',
      keywords:
        'сделать pdf как сканированный, эффект скана pdf онлайн бесплатно, имитация сканирования pdf, сделать документ сканированным, make pdf look like scanned, scan pdf',
      breadcrumbHome: 'Главная',
      breadcrumbCurrent: 'Сделать PDF Как Сканированный Онлайн',
    },
    navbar: {
      brandSub: '100% Локальная Студия',
      languageLabel: 'Выбрать язык',
      themeToggleLabel: 'Переключить светлую или тёмную тему',
      installPwaLabel: 'Добавить на главный экран (Установить офлайн-приложение)',
      installPwaShort: 'Установить',
      supportLabel: 'Поддержать разработчика на Ko-fi',
      supportShort: 'Поддержать',
      iosModalTitle: 'Установить PDFtoScan на iOS / Safari',
      iosModalStep1: '1. Нажмите кнопку «Поделиться» в нижней панели Safari.',
      iosModalStep2: '2. Прокрутите вниз и выберите «На экран „Домой“» для работы офлайн.',
      iosModalClose: 'Понятно',
    },
    hero: {
      badge: '100% В БРАУЗЕРЕ • ОФЛАЙН PWA • БЕЗ ЗАГРУЗКИ НА СЕРВЕР',
      h1: 'Сделать PDF Как Сканированный Онлайн Бесплатно',
      subtitle:
        'Превратите чистые цифровые PDF-файлы в реалистичные нередактируемые физические сканы за секунды. Естественный наклон 1.5°, контраст фотокопира, текстура бумаги и многостраничный экспорт — 100% локально на вашем устройстве.',
    },
    dropzone: {
      title: 'Перетащите Цифровой PDF Сюда для Имитации Физического Сканирования',
      subtitle: 'Поддерживаются многостраничные договоры, счета, анкеты и подписанные акты любого размера.',
      selectPdfBtn: 'Выбрать PDF-файл (Или Попробовать Пример PDF)',
      trySampleBtn: 'Загрузить Встроенный Пример Договора PDF',
      dragActiveText: 'Отпустите PDF, чтобы Открыть Студию Сканера...',
      pillPrivate: '100% Локально и Приватно',
      pillFlattened: 'Нередактируемый Сведённый Скан',
      pillZeroUploads: 'Без Загрузки на Сервер',
      invalidFileError: 'Пожалуйста, выберите корректный PDF-документ (.pdf).',
    },
    studio: {
      previewHeader: 'Предпросмотр Планшетного Сканера в Реальном Времени',
      changeFileBtn: 'Загрузить Другой PDF',
      pageIndicator: 'Страница {current} из {total}',
      prevPageAria: 'Предыдущая страница PDF',
      nextPageAria: 'Следующая страница PDF',
      compareOriginalBtn: 'Сравнить Оригинал и Скан',
      comparingOriginalBadge: 'ПРОСМОТР ИСХОДНОГО ЦИФРОВОГО PDF',
      liveScannedBadge: 'РЕЗУЛЬТАТ СКАНИРОВАНИЯ В РЕАЛЬНОМ ВРЕМЕНИ',
      scannerBeamActiveText: 'Оптический Луч Сканера Активен',
      controlsHeader: 'Настройки Студии Сканера',
      presetsTitle: '1. Готовые Профили Сканера в Один Клик',
      presets: {
        photocopier: {
          title: 'Офисный Копир Ч/Б',
          desc: 'Высокий контраст тонера, чёткий чёрный текст, наклон 1.5° и лёгкое зерно',
        },
        grayscale: {
          title: 'Чистый Скан в Оттенках Серого',
          desc: 'Сбалансированный планшетный скан 200 DPI с мягкой текстурой бумаги',
        },
        camscanner: {
          title: 'Мобильный CamScanner Цветной',
          desc: 'Сохраняет синие подписи и синие/красные печати при высокой чёткости',
        },
        vintageFax: {
          title: 'Винтажный Термофакс',
          desc: 'Заметный перекос 2.4°, выраженный шум бумаги и густые чернила',
        },
      },
      slidersTitle: '2. Точная Настройка Оптических Ползунков',
      tiltLabel: 'Угол Наклона Страницы',
      tiltHint: 'Естественный перекос автоподатчика бумаги (По умолчанию 1.5°)',
      noiseLabel: 'Шум и Зернистость Бумаги',
      noiseHint: 'Органическая текстура бумажных волокон и микропыль матрицы',
      contrastLabel: 'Контраст и Насыщенность Чернил',
      contrastHint: 'Экспозиция лампы копира и плотность тонера',
      dpiLabel: 'Разрешение Сканирования DPI',
      dpiCompact: '100 DPI Компактно',
      dpiStandard: '150 DPI Стандарт',
      dpiCrisp: '300 DPI Чётко',
      colorModeLabel: 'Режим Цветового Сенсора',
      colorModes: {
        bw: 'Копир Ч/Б',
        grayscale: 'Оттенки Серого',
        color: 'Цветной (Печати и Подписи)',
        warm: 'Тёплый Пергамент',
      },
      edgeShadowLabel: 'Тень по Краям Стекла и Мелкие Пылинки',
      downloadBtn: 'Скачать Отсканированный PDF',
      downloadingProgress: 'Сканирование страницы {current} из {total}...',
      downloadComplete: 'Отсканированный PDF успешно сохранён!',
      resetDefaultsBtn: 'Сбросить к Настройкам 1.5°',
    },
    seoSections: {
      stepsHeading: 'Как Сделать PDF Похожим на Сканированный за 3 Простых Шага',
      stepsIntro:
        'Нужно придать цифровому документу вид распечатанного и отсканированного листа без принтера и сканера? Наш оптический симулятор в браузере сделает это за пару секунд:',
      steps: [
        {
          title: 'Шаг 1: Выберите PDF-файл или Загрузите Встроенный Пример',
          body: 'Нажмите большую кнопку «Выбрать PDF-файл» или перетащите документ в окно. С помощью Mozilla PDF.js файл открывается исключительно в оперативной памяти вашего браузера.',
        },
        {
          title: 'Шаг 2: Выберите Профиль или Настройте Наклон 1.5° и Шум',
          body: 'Выберите «Офисный Копир Ч/Б», «Оттенки Серого», «CamScanner Цветной» или «Факс». Плавный луч сканера (60fps) мгновенно покажет изменения на живом предпросмотре.',
        },
        {
          title: 'Шаг 3: Скачайте Сведённый, Нередактируемый PDF',
          body: 'Нажмите «Скачать Отсканированный PDF». Каждая страница растеризуется через HTML5 Canvas и упаковывается с помощью jsPDF в защищённый от редактирования документ.',
        },
      ],
      whyHeading: 'Зачем Сводить (Flatten) и Имитировать Сканирование PDF Онлайн?',
      whyIntro:
        'Объедините векторный текст и вставленные изображения подписей или печатей в единое монолитное изображение страницы.',
      whyCards: [
        {
          title: 'Естественный Вид Подписей и Печатей',
          body: 'Наложенные PNG-подписи и штампы часто выглядят чужеродно на фоне векторного шрифта. Наклон 1.5° и общая текстура бумаги делают страницу единым целым.',
        },
        {
          title: 'Защита от Выделения и Изменения Текста',
          body: 'В итоговом PDF отсутствуют текстовые слои — никто не сможет скопировать, выделить или незаметно подправить текст договора.',
        },
        {
          title: 'Экономия Бумаги, Тонера и Времени',
          body: 'Выполняйте требования бухгалтерских и государственных порталов по загрузке скан-копий без реальной печати на бумаге.',
        },
      ],
      privacyHeading: '100% Конфиденциальность: Ваши PDF-файлы Никогда Не Покидают Устройство',
      privacyBody1:
        'Большинство онлайн-сервисов загружают ваши договоры и паспорта на сторонние облачные серверы. PDFtoScan обрабатывает каждый пиксель строго внутри вашего браузера.',
      privacyBody2:
        'После открытия страницы вы можете полностью отключить интернет и продолжать делать скан-копии PDF в офлайн-режиме.',
      privacyBullets: [
        'Ноль сетевых запросов: файлы не передаются в интернет.',
        'Аппаратное ускорение 2D-шейдеров HTML5 Canvas при 60 кадрах/с.',
        'Автоматическая очистка памяти после завершения экспорта.',
        'Устанавливаемое PWA-приложение для компьютера и смартфона.',
      ],
      faqHeading: 'Часто Задаваемые Вопросы (FAQ)',
      faqIntro: 'Ответы на главные вопросы о бесплатной имитации сканирования PDF, приватности и сохранении цветных печатей.',
      faqs: [
        {
          q: 'Как бесплатно сделать PDF похожим на скан без принтера?',
          a: 'Откройте PDFtoScan, загрузите ваш PDF, выберите пресет «Офисный Копир Ч/Б» или «Чистый Скан в Оттенках Серого» и нажмите «Скачать Отсканированный PDF».',
        },
        {
          q: 'Загружаются ли мои конфиденциальные документы на ваш сервер?',
          a: 'Никогда. Вся обработка происходит на 100% локально в вашем браузере.',
        },
        {
          q: 'Как сохранить синий цвет подписи и синюю/красную печать?',
          a: 'Выберите профиль «Мобильный CamScanner Цветной» или переключите режим сенсора на «Цветной (Печати и Подписи)».',
        },
        {
          q: 'Можно ли будет выделить или изменить текст в скачанном PDF?',
          a: 'Нет, все страницы сводятся в растровые изображения, поэтому текст и подписи невозможно изменить или скопировать.',
        },
      ],
    },
    footer: {
      tagline: '100% Локальный Симулятор PDF-Сканера • Приватность, Скорость и Доступность.',
      copyright: '© 2026 PDFtoScan (pdftoscan.github.io). Распространяется по лицензии MIT.',
      supportCta: 'Поддержать Разработчика на Ko-fi',
      licenseText: 'Открытая Лицензия MIT • Нулевое Отслеживание Документов',
    },
  },
};
