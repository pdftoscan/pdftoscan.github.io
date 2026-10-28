import React, { useState, useEffect, useRef, useCallback } from 'react';
import { jsPDF } from 'jspdf';
import {
  FileUp,
  Sparkles,
  ShieldCheck,
  Lock,
  WifiOff,
  ChevronLeft,
  ChevronRight,
  Download,
  RotateCcw,
  Eye,
  Sliders,
  Printer,
  CheckCircle2,
  FileText,
} from 'lucide-react';
import type { TranslationDictionary } from '../i18n/translations';

interface PdfScannerIslandProps {
  t: TranslationDictionary;
}

type ColorMode = 'bw' | 'grayscale' | 'color' | 'warm';
type PresetKey = 'photocopier' | 'grayscale' | 'camscanner' | 'vintageFax';

interface ScannerSettings {
  tilt: number; // 0.0 to 3.0 degrees (default 1.5)
  noise: number; // 0 to 100 % (default 28)
  contrast: number; // 100 to 200 % (default 135)
  dpi: number; // 100 to 300 DPI (default 150)
  colorMode: ColorMode;
  edgeShadow: boolean;
}

const DEFAULT_SETTINGS: ScannerSettings = {
  tilt: 1.5,
  noise: 28,
  contrast: 135,
  dpi: 150,
  colorMode: 'bw',
  edgeShadow: true,
};

const PRESET_CONFIGS: Record<PresetKey, ScannerSettings> = {
  photocopier: {
    tilt: 1.5,
    noise: 28,
    contrast: 135,
    dpi: 150,
    colorMode: 'bw',
    edgeShadow: true,
  },
  grayscale: {
    tilt: 1.2,
    noise: 18,
    contrast: 120,
    dpi: 200,
    colorMode: 'grayscale',
    edgeShadow: true,
  },
  camscanner: {
    tilt: 1.5,
    noise: 14,
    contrast: 130,
    dpi: 200,
    colorMode: 'color',
    edgeShadow: true,
  },
  vintageFax: {
    tilt: 2.4,
    noise: 54,
    contrast: 170,
    dpi: 100,
    colorMode: 'bw',
    edgeShadow: true,
  },
};

/**
 * Generates a realistic 2-page built-in sample PDF (Service Agreement + Invoice with blue signature & red stamp)
 * so users can test the scanner studio in 1 click without needing their own file first.
 */
function createSamplePdfArrayBuffer(): ArrayBuffer {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });

  // Page 1: Commercial Master Services Agreement
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, 595, 842, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(21, 55, 13);
  doc.text('MASTER SERVICES AGREEMENT', 56, 72);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(90, 105, 90);
  doc.text('Document Ref: MSA-2026-0849  |  Execution Copy  |  Page 1 of 2', 56, 92);

  doc.setDrawColor(21, 55, 13);
  doc.setLineWidth(1.5);
  doc.line(56, 104, 539, 104);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(20, 20, 20);
  doc.text('1. PARTIES AND EFFECTIVE DATE', 56, 134);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  const p1 =
    'This Master Services Agreement ("Agreement") is entered into as of October 28, 2026, by and between EverGreen Optical Labs Inc. ("Provider") and Meridian Global Holdings LLC ("Client"). Both parties agree that a scanned or flattened electronic copy of this executed instrument shall carry the same legal force and effect as a wet-ink original.';
  doc.text(doc.splitTextToSize(p1, 480), 56, 154);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('2. SCOPE OF CLIENT-SIDE DELIVERABLES', 56, 232);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  const p2 =
    'Provider shall deliver zero-knowledge document rendering pipelines, high-contrast optical simulation shaders, and archival-grade flattened PDF exports. All processing shall occur strictly inside local client memory with zero remote cloud storage.';
  doc.text(doc.splitTextToSize(p2, 480), 56, 252);

  // Fee Schedule Table
  doc.setFillColor(244, 246, 240);
  doc.rect(56, 315, 483, 28, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('ITEM DESCRIPTION', 68, 333);
  doc.text('QTY', 350, 333);
  doc.text('AMOUNT (USD)', 450, 333);

  doc.setFont('helvetica', 'normal');
  const rows = [
    ['Optical Flatbed Shader License (Unlimited Seats)', '1', '$4,200.00'],
    ['Local WebAssembly & HTML5 Canvas Security Audit', '1', '$1,850.00'],
    ['Multi-Language Compliance Documentation Pack', '8', 'Included'],
  ];
  rows.forEach((r, idx) => {
    const y = 365 + idx * 28;
    doc.text(r[0], 68, y);
    doc.text(r[1], 356, y);
    doc.text(r[2], 450, y);
    doc.setDrawColor(220, 220, 220);
    doc.setLineWidth(0.5);
    doc.line(56, y + 8, 539, y + 8);
  });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('TOTAL CONTRACT VALUE: $6,050.00 USD', 310, 468);

  doc.text('3. AUTHORIZED SIGNATURES & OFFICIAL STAMP', 56, 520);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text('IN WITNESS WHEREOF, the parties have executed this Agreement below:', 56, 538);

  // Signature Boxes
  doc.setDrawColor(120, 120, 120);
  doc.setLineWidth(0.8);
  doc.rect(56, 560, 225, 110);
  doc.rect(314, 560, 225, 110);

  doc.setFont('helvetica', 'bold');
  doc.text('FOR PROVIDER (EverGreen Optical):', 68, 580);
  doc.text('FOR CLIENT (Meridian Holdings):', 326, 580);

  // Simulated Blue Pen Signature in Box 1
  doc.setDrawColor(18, 64, 178);
  doc.setLineWidth(2.2);
  doc.lines(
    [
      [18, -22, 34, 8, 52, -14],
      [25, 14, 42, -18, 65, -4],
      [-95, 18, 60, -2, 125, -8],
    ],
    82,
    625
  );

  // Simulated Blue Pen Signature in Box 2
  doc.lines(
    [
      [22, -18, 40, 12, 58, -10],
      [20, 10, 38, -14, 55, 2],
    ],
    342,
    622
  );

  // Official Red Circular Stamp
  doc.setDrawColor(190, 35, 35);
  doc.setLineWidth(2);
  doc.circle(285, 695, 36);
  doc.setLineWidth(0.8);
  doc.circle(285, 695, 31);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(190, 35, 35);
  doc.text('APPROVED & VERIFIED', 241, 692);
  doc.text('OCT 28 2026 • ARCHIVE', 240, 703);

  doc.setTextColor(60, 60, 60);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('Signed: K. Perera, Principal Architect', 68, 656);
  doc.text('Signed: M. Vance, Managing Director', 326, 656);

  // Page 2: Compliance & Verification Certificate
  doc.addPage('a4', 'p');
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, 595, 842, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(21, 55, 13);
  doc.text('SCHEDULE A: TECHNICAL COMPLIANCE CERTIFICATE', 56, 72);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(90, 105, 90);
  doc.text('Document Ref: MSA-2026-0849  |  Attachment Schedule A  |  Page 2 of 2', 56, 92);
  doc.setDrawColor(21, 55, 13);
  doc.setLineWidth(1.5);
  doc.line(56, 104, 539, 104);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(25, 25, 25);
  const p3 =
    'This second page demonstrates multi-page batch scanning in PDFtoScan. Use the Previous / Next page buttons above the canvas preview to inspect each page, or click "Download Scanned PDF" to flatten all pages into a single uneditable PDF document.';
  doc.text(doc.splitTextToSize(p3, 480), 56, 140);

  doc.setFont('helvetica', 'bold');
  doc.text('OPTICAL CALIBRATION CHECKLIST:', 56, 215);
  doc.setFont('helvetica', 'normal');
  const checks = [
    '[X]  1.5° Natural Flatbed Feeder Skew Applied',
    '[X]  High-Contrast Photocopier Toner Curve Verified',
    '[X]  Gaussian Monochromatic Paper Fiber Grain Injected',
    '[X]  Vector Text Flattened to Non-Selectable Raster Image',
  ];
  checks.forEach((c, i) => {
    doc.text(c, 70, 245 + i * 26);
  });

  return doc.output('arraybuffer');
}

/**
 * Applies realistic 2D pixel shader effects on a rendered PDF page canvas:
 * - Slight tilt angle around 1.5° (with deterministic per-page variation)
 * - Contrast & ink darkness boost
 * - Color mode conversion (Photocopier B&W threshold/LUT, True Grayscale, Color Stamp Safe, or Warm Parchment)
 * - Monochromatic paper fiber grain + microscopic scanner dust specks
 * - Subtle flatbed glass edge vignette shadow
 */
function renderScannedPageToCanvas(
  sourceCanvas: HTMLCanvasElement,
  targetCanvas: HTMLCanvasElement,
  settings: ScannerSettings,
  pageNumber: number
) {
  const width = sourceCanvas.width;
  const height = sourceCanvas.height;
  targetCanvas.width = width;
  targetCanvas.height = height;

  const ctx = targetCanvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return;

  // Fill background with slightly warm paper off-white / scanner lid backdrop
  ctx.fillStyle = settings.colorMode === 'warm' ? '#FAF3DE' : '#F8F8F5';
  ctx.fillRect(0, 0, width, height);

  // Deterministic subtle direction per page so multi-page documents feel organically fed
  const direction = pageNumber % 2 === 1 ? 1 : -0.85;
  const angleRad = (settings.tilt * direction * Math.PI) / 180;

  ctx.save();
  ctx.translate(width / 2, height / 2);
  ctx.rotate(angleRad);
  // Slight scale-in (0.982) so rotated page corners show realistic flatbed edge border
  const scaleFactor = settings.tilt > 0 ? 0.982 : 1.0;
  ctx.scale(scaleFactor, scaleFactor);

  // Subtle paper drop shadow against scanner glass
  if (settings.edgeShadow) {
    ctx.shadowColor = 'rgba(21, 35, 15, 0.24)';
    ctx.shadowBlur = Math.max(6, Math.round(width * 0.012));
    ctx.shadowOffsetX = Math.round(width * 0.003);
    ctx.shadowOffsetY = Math.round(height * 0.003);
  }

  ctx.drawImage(sourceCanvas, -width / 2, -height / 2, width, height);
  ctx.restore();

  // Pixel-level shader pass
  const imgData = ctx.getImageData(0, 0, width, height);
  const data = imgData.data;

  const contrastFactor = (settings.contrast / 100) ** 1.65;
  const noiseAmplitude = (settings.noise / 100) * 68;
  const isBW = settings.colorMode === 'bw';
  const isGrayscale = settings.colorMode === 'grayscale';
  const isWarm = settings.colorMode === 'warm';

  // Fast pseudo-random generator seeded by pageNumber for stable preview frames
  let seed = (pageNumber * 9301 + 49297) % 233280;
  const nextRand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280 - 0.5;
  };

  for (let i = 0; i < data.length; i += 4) {
    let r = data[i];
    let g = data[i + 1];
    let b = data[i + 2];

    // Apply contrast curve around paper midpoint (168)
    r = (r - 168) * contrastFactor + 168;
    g = (g - 168) * contrastFactor + 168;
    b = (b - 168) * contrastFactor + 168;

    // Monochromatic paper grain
    const grain = noiseAmplitude > 0 ? nextRand() * noiseAmplitude : 0;

    if (isBW) {
      // Photocopier B&W soft S-curve threshold for realistic toner look
      const lum = 0.299 * r + 0.587 * g + 0.114 * b + grain;
      const toner = lum < 175 ? Math.max(14, lum * 0.42) : Math.min(250, 236 + (lum - 175) * 0.22);
      data[i] = toner;
      data[i + 1] = toner;
      data[i + 2] = Math.max(10, toner - 2);
    } else if (isGrayscale) {
      const lum = Math.min(252, Math.max(12, 0.299 * r + 0.587 * g + 0.114 * b + grain));
      data[i] = lum;
      data[i + 1] = lum;
      data[i + 2] = lum;
    } else if (isWarm) {
      const lum = Math.min(252, Math.max(12, 0.299 * r + 0.587 * g + 0.114 * b + grain));
      data[i] = Math.min(255, lum * 1.02);
      data[i + 1] = Math.min(250, lum * 0.97);
      data[i + 2] = Math.min(235, lum * 0.86);
    } else {
      // Color Stamp Safe mode (CamScanner style)
      data[i] = Math.min(254, Math.max(8, r + grain));
      data[i + 1] = Math.min(254, Math.max(8, g + grain));
      data[i + 2] = Math.min(254, Math.max(8, b + grain));
    }
  }

  ctx.putImageData(imgData, 0, 0);

  // Optional scanner edge vignette & tiny organic dust specks
  if (settings.edgeShadow) {
    const grad = ctx.createRadialGradient(
      width / 2,
      height / 2,
      Math.min(width, height) * 0.38,
      width / 2,
      height / 2,
      Math.max(width, height) * 0.72
    );
    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(1, 'rgba(21, 55, 13, 0.11)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Subtle microscopic dust specks on flatbed glass
    const speckCount = Math.floor((settings.noise / 100) * 35);
    ctx.fillStyle = 'rgba(40, 45, 38, 0.28)';
    for (let s = 0; s < speckCount; s++) {
      const sx = Math.abs(nextRand() + 0.5) * width;
      const sy = Math.abs(nextRand() + 0.5) * height;
      const sr = Math.max(0.6, Math.abs(nextRand()) * 1.8);
      ctx.beginPath();
      ctx.arc(sx, sy, sr, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

export default function PdfScannerIsland({ t }: PdfScannerIslandProps) {
  const [pdfBytes, setPdfBytes] = useState<ArrayBuffer | null>(null);
  const [fileName, setFileName] = useState<string>('Scanned-Document.pdf');
  const [pageCount, setPageCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [settings, setSettings] = useState<ScannerSettings>(DEFAULT_SETTINGS);
  const [activePreset, setActivePreset] = useState<PresetKey>('photocopier');
  const [compareOriginal, setCompareOriginal] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Animation & Export states
  const [beamSweepKey, setBeamSweepKey] = useState<number>(0);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportPageProgress, setExportPageProgress] = useState<number>(0);
  const [exportSuccess, setExportSuccess] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const offscreenOriginalCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const pdfDocRef = useRef<any>(null);

  // Trigger smooth scanner light bar sweep whenever settings or page change
  const triggerScannerSweep = useCallback(() => {
    setBeamSweepKey((prev) => prev + 1);
    setExportSuccess(false);
  }, []);

  // Load PDF.js dynamically on the client
  const loadPdfFromBuffer = useCallback(
    async (buffer: ArrayBuffer, name: string) => {
      try {
        setErrorMsg(null);
        const pdfjsLib = await import('pdfjs-dist');
        pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

        if (pdfDocRef.current) {
          try {
            await pdfDocRef.current.destroy();
          } catch {}
        }

        // Copy buffer so PDF.js worker transfer doesn't detach our copy
        const clonedBuffer = buffer.slice(0);
        const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(clonedBuffer) });
        const pdfDoc = await loadingTask.promise;

        pdfDocRef.current = pdfDoc;
        setPdfBytes(buffer);
        setFileName(name.replace(/\.pdf$/i, '') + '-Scanned.pdf');
        setPageCount(pdfDoc.numPages);
        setCurrentPage(1);
        setCompareOriginal(false);
        triggerScannerSweep();
      } catch (err) {
        console.error('Failed to parse PDF:', err);
        setErrorMsg(t.dropzone.invalidFileError);
      }
    },
    [t.dropzone.invalidFileError, triggerScannerSweep]
  );

  // Render the active page to the offscreen canvas when currentPage or pdfDoc changes
  useEffect(() => {
    let cancelled = false;
    async function renderCurrentPageSource() {
      const pdfDoc = pdfDocRef.current;
      if (!pdfDoc || !previewCanvasRef.current) return;

      try {
        const page = await pdfDoc.getPage(currentPage);
        if (cancelled) return;

        // Render preview at clean 1.5x scale
        const viewport = page.getViewport({ scale: 1.45 });
        if (!offscreenOriginalCanvasRef.current) {
          offscreenOriginalCanvasRef.current = document.createElement('canvas');
        }
        const srcCanvas = offscreenOriginalCanvasRef.current;
        srcCanvas.width = viewport.width;
        srcCanvas.height = viewport.height;
        const srcCtx = srcCanvas.getContext('2d');
        if (!srcCtx) return;

        srcCtx.fillStyle = '#FFFFFF';
        srcCtx.fillRect(0, 0, srcCanvas.width, srcCanvas.height);

        await page.render({ canvasContext: srcCtx, viewport }).promise;
        if (cancelled) return;

        if (compareOriginal) {
          const target = previewCanvasRef.current;
          target.width = srcCanvas.width;
          target.height = srcCanvas.height;
          const tCtx = target.getContext('2d');
          tCtx?.drawImage(srcCanvas, 0, 0);
        } else {
          renderScannedPageToCanvas(srcCanvas, previewCanvasRef.current, settings, currentPage);
        }
      } catch (e) {
        console.error('Page render error:', e);
      }
    }

    renderCurrentPageSource();
    return () => {
      cancelled = true;
    };
  }, [pdfBytes, currentPage]);

  // Re-apply 60fps 2D shader immediately when sliders/presets/compare toggle change
  useEffect(() => {
    if (!offscreenOriginalCanvasRef.current || !previewCanvasRef.current || !pdfDocRef.current) return;
    const rafId = requestAnimationFrame(() => {
      if (!offscreenOriginalCanvasRef.current || !previewCanvasRef.current) return;
      if (compareOriginal) {
        const src = offscreenOriginalCanvasRef.current;
        const target = previewCanvasRef.current;
        target.width = src.width;
        target.height = src.height;
        target.getContext('2d')?.drawImage(src, 0, 0);
      } else {
        renderScannedPageToCanvas(
          offscreenOriginalCanvasRef.current,
          previewCanvasRef.current,
          settings,
          currentPage
        );
      }
    });
    return () => cancelAnimationFrame(rafId);
  }, [settings, compareOriginal, currentPage]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (pdfDocRef.current) {
        try {
          pdfDocRef.current.destroy();
        } catch {}
      }
    };
  }, []);

  const handleFileChange = async (file: File | undefined) => {
    if (!file) return;
    if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      setErrorMsg(t.dropzone.invalidFileError);
      return;
    }
    const buf = await file.arrayBuffer();
    await loadPdfFromBuffer(buf, file.name);
  };

  const handleLoadSamplePdf = async () => {
    const sampleBuf = createSamplePdfArrayBuffer();
    await loadPdfFromBuffer(sampleBuf, 'Sample-Master-Services-Agreement.pdf');
  };

  const applyPreset = (key: PresetKey) => {
    setActivePreset(key);
    setSettings({ ...PRESET_CONFIGS[key] });
    setCompareOriginal(false);
    triggerScannerSweep();
  };

  const updateSetting = <K extends keyof ScannerSettings>(key: K, value: ScannerSettings[K]) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
    setCompareOriginal(false);
    triggerScannerSweep();
  };

  const handleExportScannedPdf = async () => {
    const pdfDoc = pdfDocRef.current;
    if (!pdfDoc || isExporting) return;

    setIsExporting(true);
    setExportSuccess(false);
    setExportPageProgress(1);

    try {
      const scale = settings.dpi / 72;
      let outPdf: jsPDF | null = null;

      const workSourceCanvas = document.createElement('canvas');
      const workScannedCanvas = document.createElement('canvas');

      for (let p = 1; p <= pdfDoc.numPages; p++) {
        setExportPageProgress(p);
        // Yield a frame so the progress bar and paper-feed animation update smoothly
        await new Promise((r) => setTimeout(r, 90));

        const page = await pdfDoc.getPage(p);
        const viewportPt = page.getViewport({ scale: 1.0 });
        const viewportRender = page.getViewport({ scale });

        workSourceCanvas.width = viewportRender.width;
        workSourceCanvas.height = viewportRender.height;
        const sCtx = workSourceCanvas.getContext('2d');
        if (!sCtx) continue;

        sCtx.fillStyle = '#FFFFFF';
        sCtx.fillRect(0, 0, workSourceCanvas.width, workSourceCanvas.height);
        await page.render({ canvasContext: sCtx, viewport: viewportRender }).promise;

        renderScannedPageToCanvas(workSourceCanvas, workScannedCanvas, settings, p);

        const orientation = viewportPt.width > viewportPt.height ? 'l' : 'p';
        if (!outPdf) {
          outPdf = new jsPDF({
            orientation,
            unit: 'pt',
            format: [viewportPt.width, viewportPt.height],
            compress: true,
          });
        } else {
          outPdf.addPage([viewportPt.width, viewportPt.height], orientation);
        }

        const jpegQuality = settings.dpi >= 250 ? 0.88 : 0.8;
        const imgDataUrl = workScannedCanvas.toDataURL('image/jpeg', jpegQuality);
        outPdf.addImage(imgDataUrl, 'JPEG', 0, 0, viewportPt.width, viewportPt.height, undefined, 'FAST');
      }

      // Clean up temporary canvas memory
      workSourceCanvas.width = 1;
      workSourceCanvas.height = 1;
      workScannedCanvas.width = 1;
      workScannedCanvas.height = 1;

      if (outPdf) {
        outPdf.save(fileName);
        setExportSuccess(true);
      }
    } catch (err) {
      console.error('Failed to export scanned PDF:', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="application/pdf,.pdf"
        className="sr-only"
        aria-label={t.dropzone.selectPdfBtn}
        onChange={(e) => handleFileChange(e.target.files?.[0])}
      />

      {/* Polite Live Region for Screen Readers */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {isExporting
          ? t.studio.downloadingProgress
              .replace('{current}', String(exportPageProgress))
              .replace('{total}', String(pageCount))
          : exportSuccess
          ? t.studio.downloadComplete
          : ''}
      </div>

      {/* STATE 1: OVERSIZED DROPZONE */}
      {!pdfBytes && (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            setIsDragging(false);
          }}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            handleFileChange(e.dataTransfer.files?.[0]);
          }}
          className={`relative min-h-[380px] md:min-h-[420px] rounded-3xl border-4 border-dashed p-6 sm:p-10 md:p-14 flex flex-col items-center justify-center text-center transition-all duration-300 shadow-xl ${
            isDragging
              ? 'scale-[1.015] border-[#E5CD82] bg-[#FFF2B4] dark:bg-[#1E4615] ring-8 ring-[#E5CD82]/40'
              : 'border-[#15370D] dark:border-[#E5CD82] bg-[#FFF2B4]/75 dark:bg-[#1E4615] hover:bg-[#FFF2B4] dark:hover:bg-[#1E4615]/90'
          }`}
        >
          {/* Breathing Oversized Scanner Icon */}
          <div className="relative mb-6 flex items-center justify-center">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-3xl bg-[#15370D] dark:bg-[#E5CD82] text-[#FFF2B4] dark:text-[#15370D] flex items-center justify-center shadow-2xl animate-breathe border-4 border-[#E5CD82] dark:border-[#FFF2B4]">
              <FileUp className="w-12 h-12 md:w-16 md:h-16 stroke-[2.2]" aria-hidden="true" />
            </div>
          </div>

          <h2 className="text-2xl md:text-4xl font-extrabold text-[#15370D] dark:text-[#FFF2B4] max-w-2xl mb-3">
            {isDragging ? t.dropzone.dragActiveText : t.dropzone.title}
          </h2>
          <p className="text-lg md:text-xl font-medium text-[#728E6D] dark:text-[#E5CD82] max-w-xl mb-8">
            {t.dropzone.subtitle}
          </p>

          {errorMsg && (
            <div
              role="alert"
              className="mb-6 px-6 py-3 rounded-2xl bg-red-900 text-[#FFF2B4] font-bold text-lg border-2 border-[#E5CD82]"
            >
              {errorMsg}
            </div>
          )}

          {/* Oversized Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl mb-8">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full sm:w-auto min-h-[60px] px-8 py-5 text-xl md:text-2xl font-extrabold rounded-2xl bg-[#15370D] dark:bg-[#E5CD82] text-[#FFF2B4] dark:text-[#15370D] border-2 border-[#15370D] dark:border-[#FFF2B4] shadow-xl hover:shadow-2xl hover:ring-4 hover:ring-[#E5CD82] active:scale-[0.99] transition-all flex items-center justify-center gap-3"
            >
              <FileUp className="w-7 h-7 shrink-0" aria-hidden="true" />
              <span>{t.dropzone.selectPdfBtn}</span>
            </button>
          </div>

          <button
            type="button"
            onClick={handleLoadSamplePdf}
            className="min-h-[48px] px-6 py-3 rounded-xl border-2 border-[#15370D] dark:border-[#728E6D] bg-[#FFFDF5] dark:bg-[#15370D] text-[#15370D] dark:text-[#FFF2B4] hover:bg-[#E5CD82] dark:hover:bg-[#E5CD82] dark:hover:text-[#15370D] font-bold text-lg transition-colors flex items-center gap-2 mb-8 shadow-sm"
          >
            <Sparkles className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>{t.dropzone.trySampleBtn}</span>
          </button>

          {/* 3 Big Trust Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl">
            <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl bg-[#FFFDF5] dark:bg-[#15370D] border-2 border-[#728E6D] text-[#15370D] dark:text-[#FFF2B4] font-bold text-base md:text-lg shadow-sm">
              <ShieldCheck className="w-6 h-6 text-[#15370D] dark:text-[#E5CD82] shrink-0" aria-hidden="true" />
              <span>{t.dropzone.pillPrivate}</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl bg-[#FFFDF5] dark:bg-[#15370D] border-2 border-[#728E6D] text-[#15370D] dark:text-[#FFF2B4] font-bold text-base md:text-lg shadow-sm">
              <Lock className="w-6 h-6 text-[#15370D] dark:text-[#E5CD82] shrink-0" aria-hidden="true" />
              <span>{t.dropzone.pillFlattened}</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl bg-[#FFFDF5] dark:bg-[#15370D] border-2 border-[#728E6D] text-[#15370D] dark:text-[#FFF2B4] font-bold text-base md:text-lg shadow-sm">
              <WifiOff className="w-6 h-6 text-[#15370D] dark:text-[#E5CD82] shrink-0" aria-hidden="true" />
              <span>{t.dropzone.pillZeroUploads}</span>
            </div>
          </div>
        </div>
      )}

      {/* STATE 2: INTERACTIVE SCANNER STUDIO */}
      {pdfBytes && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start transition-all duration-300">
          {/* LEFT/TOP COLUMN: LIVE INTERACTIVE PAGE CANVAS PREVIEW */}
          <div className="lg:col-span-6 xl:col-span-6 rounded-3xl border-4 border-[#15370D] dark:border-[#728E6D] bg-[#FFF2B4] dark:bg-[#1E4615] p-4 sm:p-6 shadow-2xl flex flex-col">
            {/* Top Preview Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b-2 border-[#728E6D]/40">
              <div className="flex items-center gap-2.5">
                <Printer className="w-7 h-7 text-[#15370D] dark:text-[#E5CD82]" aria-hidden="true" />
                <h2 className="text-xl md:text-2xl font-extrabold text-[#15370D] dark:text-[#FFF2B4]">
                  {t.studio.previewHeader}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="min-h-[46px] px-4 py-2 rounded-xl border-2 border-[#15370D] dark:border-[#E5CD82] bg-[#FFFDF5] dark:bg-[#15370D] text-[#15370D] dark:text-[#FFF2B4] hover:bg-[#E5CD82] dark:hover:bg-[#E5CD82] dark:hover:text-[#15370D] font-bold text-base flex items-center gap-2 transition-colors"
                >
                  <FileText className="w-5 h-5" aria-hidden="true" />
                  <span>{t.studio.changeFileBtn}</span>
                </button>
              </div>
            </div>

            {/* Status & Compare Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-sm font-black tracking-wide uppercase border-2 ${
                  compareOriginal
                    ? 'bg-[#FFFDF5] text-[#15370D] border-[#728E6D]'
                    : 'bg-[#15370D] text-[#FFF2B4] dark:bg-[#E5CD82] dark:text-[#15370D] border-[#15370D] dark:border-[#FFF2B4]'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-current animate-pulse" />
                {compareOriginal ? t.studio.comparingOriginalBadge : t.studio.liveScannedBadge}
              </span>

              <button
                type="button"
                onClick={() => setCompareOriginal((prev) => !prev)}
                aria-pressed={compareOriginal}
                className={`min-h-[46px] px-4 py-2 rounded-xl border-2 font-bold text-base flex items-center gap-2 transition-all ${
                  compareOriginal
                    ? 'bg-[#E5CD82] text-[#15370D] border-[#15370D] ring-2 ring-[#15370D]'
                    : 'bg-[#FFFDF5] dark:bg-[#15370D] text-[#15370D] dark:text-[#FFF2B4] border-[#15370D] dark:border-[#728E6D] hover:bg-[#E5CD82] dark:hover:text-[#15370D]'
                }`}
              >
                <Eye className="w-5 h-5" aria-hidden="true" />
                <span>{t.studio.compareOriginalBtn}</span>
              </button>
            </div>

            {/* Flatbed Scanner Glass Viewport with 60fps Animated Scanner Beam */}
            <div className="relative w-full rounded-2xl bg-[#15370D] p-4 sm:p-6 overflow-hidden flex items-center justify-center min-h-[420px] sm:min-h-[520px] border-4 border-[#15370D] dark:border-[#E5CD82] shadow-inner">
              {/* Animated Horizontal Scanner Light Bar (Sweeps on setting change & continuous subtle sweep during export) */}
              <div
                key={beamSweepKey}
                aria-hidden="true"
                className={`pointer-events-none absolute left-0 right-0 z-20 h-3 bg-gradient-to-r from-[#E5CD82] via-[#FFF2B4] to-[#E5CD82] shadow-[0_0_28px_8px_rgba(229,205,130,0.85)] ${
                  isExporting ? 'animate-scanner-beam' : 'animate-scanner-sweep'
                }`}
              />

              {/* Live HTML5 Canvas */}
              <canvas
                ref={previewCanvasRef}
                aria-label={`${t.studio.previewHeader} - ${t.studio.pageIndicator
                  .replace('{current}', String(currentPage))
                  .replace('{total}', String(pageCount))}`}
                className={`max-w-full max-h-[600px] w-auto h-auto rounded-lg shadow-2xl transition-transform duration-300 ${
                  isExporting ? 'scale-[0.98] opacity-90' : 'scale-100 opacity-100'
                }`}
              />
            </div>

            {/* Page Navigation Footer */}
            <div className="mt-5 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => {
                  setCurrentPage((p) => Math.max(1, p - 1));
                  triggerScannerSweep();
                }}
                disabled={currentPage <= 1}
                aria-label={t.studio.prevPageAria}
                className="min-w-[56px] min-h-[56px] px-4 rounded-2xl border-2 border-[#15370D] dark:border-[#E5CD82] bg-[#FFFDF5] dark:bg-[#15370D] text-[#15370D] dark:text-[#FFF2B4] disabled:opacity-40 hover:bg-[#E5CD82] dark:hover:bg-[#E5CD82] dark:hover:text-[#15370D] font-bold flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-7 h-7" aria-hidden="true" />
              </button>

              <div className="text-xl md:text-2xl font-black text-[#15370D] dark:text-[#FFF2B4] text-center">
                {t.studio.pageIndicator
                  .replace('{current}', String(currentPage))
                  .replace('{total}', String(pageCount))}
              </div>

              <button
                type="button"
                onClick={() => {
                  setCurrentPage((p) => Math.min(pageCount, p + 1));
                  triggerScannerSweep();
                }}
                disabled={currentPage >= pageCount}
                aria-label={t.studio.nextPageAria}
                className="min-w-[56px] min-h-[56px] px-4 rounded-2xl border-2 border-[#15370D] dark:border-[#E5CD82] bg-[#FFFDF5] dark:bg-[#15370D] text-[#15370D] dark:text-[#FFF2B4] disabled:opacity-40 hover:bg-[#E5CD82] dark:hover:bg-[#E5CD82] dark:hover:text-[#15370D] font-bold flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-7 h-7" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* RIGHT/BOTTOM COLUMN: OVERSIZED SCANNER CONTROLS PANEL */}
          <div className="lg:col-span-6 xl:col-span-6 rounded-3xl border-4 border-[#15370D] dark:border-[#728E6D] bg-[#FFFDF5] dark:bg-[#1E4615] p-5 sm:p-8 shadow-2xl flex flex-col gap-7">
            <div className="flex items-center justify-between gap-3 border-b-2 border-[#728E6D]/40 pb-4">
              <div className="flex items-center gap-3">
                <Sliders className="w-7 h-7 text-[#15370D] dark:text-[#E5CD82]" aria-hidden="true" />
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#15370D] dark:text-[#FFF2B4]">
                  {t.studio.controlsHeader}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => applyPreset('photocopier')}
                className="min-h-[44px] px-3.5 py-2 rounded-xl border-2 border-[#728E6D] text-sm font-bold text-[#15370D] dark:text-[#FFF2B4] hover:bg-[#FFF2B4] dark:hover:bg-[#15370D] flex items-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-4 h-4" aria-hidden="true" />
                <span>{t.studio.resetDefaultsBtn}</span>
              </button>
            </div>

            {/* 1. 4 Big One-Click Scan Presets */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#15370D] dark:text-[#FFF2B4] mb-4">
                {t.studio.presetsTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {(Object.keys(PRESET_CONFIGS) as PresetKey[]).map((key) => {
                  const isSelected = activePreset === key;
                  const info = t.studio.presets[key];
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => applyPreset(key)}
                      aria-pressed={isSelected}
                      className={`text-left p-4 rounded-2xl border-2 transition-all min-h-[88px] flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#15370D] text-[#FFF2B4] dark:bg-[#E5CD82] dark:text-[#15370D] border-[#15370D] dark:border-[#FFF2B4] ring-4 ring-[#E5CD82] shadow-lg'
                          : 'bg-[#FFF2B4]/65 dark:bg-[#15370D] text-[#15370D] dark:text-[#FFF2B4] border-[#728E6D] hover:border-[#15370D] dark:hover:border-[#E5CD82]'
                      }`}
                    >
                      <div className="font-extrabold text-lg md:text-xl leading-snug">{info.title}</div>
                      <div
                        className={`text-sm font-medium mt-1 ${
                          isSelected
                            ? 'text-[#E5CD82] dark:text-[#15370D]/90'
                            : 'text-[#728E6D] dark:text-[#E5CD82]/80'
                        }`}
                      >
                        {info.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. 4 Oversized Optical Sliders */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-[#15370D] dark:text-[#FFF2B4]">
                {t.studio.slidersTitle}
              </h3>

              {/* Slider 1: Page Tilt Angle (0.0° to 3.0°, default 1.5°) */}
              <div className="p-4 rounded-2xl bg-[#FFF2B4]/60 dark:bg-[#15370D] border-2 border-[#728E6D]">
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <label
                    htmlFor="slider-tilt"
                    className="text-lg md:text-xl font-bold text-[#15370D] dark:text-[#FFF2B4]"
                  >
                    {t.studio.tiltLabel}
                  </label>
                  <span className="text-2xl md:text-4xl font-black text-[#15370D] dark:text-[#E5CD82]">
                    {settings.tilt.toFixed(1)}°
                  </span>
                </div>
                <p className="text-sm font-medium text-[#728E6D] dark:text-[#E5CD82]/90 mb-3">
                  {t.studio.tiltHint}
                </p>
                <input
                  id="slider-tilt"
                  type="range"
                  min={0}
                  max={3}
                  step={0.1}
                  value={settings.tilt}
                  aria-label={t.studio.tiltLabel}
                  aria-valuemin={0}
                  aria-valuemax={3}
                  aria-valuenow={settings.tilt}
                  onChange={(e) => updateSetting('tilt', parseFloat(e.target.value))}
                  className="oversized-slider"
                />
              </div>

              {/* Slider 2: Noise & Paper Grain (0% to 100%, default 28%) */}
              <div className="p-4 rounded-2xl bg-[#FFF2B4]/60 dark:bg-[#15370D] border-2 border-[#728E6D]">
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <label
                    htmlFor="slider-noise"
                    className="text-lg md:text-xl font-bold text-[#15370D] dark:text-[#FFF2B4]"
                  >
                    {t.studio.noiseLabel}
                  </label>
                  <span className="text-2xl md:text-4xl font-black text-[#15370D] dark:text-[#E5CD82]">
                    {settings.noise}%
                  </span>
                </div>
                <p className="text-sm font-medium text-[#728E6D] dark:text-[#E5CD82]/90 mb-3">
                  {t.studio.noiseHint}
                </p>
                <input
                  id="slider-noise"
                  type="range"
                  min={0}
                  max={100}
                  step={1}
                  value={settings.noise}
                  aria-label={t.studio.noiseLabel}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={settings.noise}
                  onChange={(e) => updateSetting('noise', parseInt(e.target.value, 10))}
                  className="oversized-slider"
                />
              </div>

              {/* Slider 3: Contrast & Ink Darkness (100% to 200%, default 135%) */}
              <div className="p-4 rounded-2xl bg-[#FFF2B4]/60 dark:bg-[#15370D] border-2 border-[#728E6D]">
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <label
                    htmlFor="slider-contrast"
                    className="text-lg md:text-xl font-bold text-[#15370D] dark:text-[#FFF2B4]"
                  >
                    {t.studio.contrastLabel}
                  </label>
                  <span className="text-2xl md:text-4xl font-black text-[#15370D] dark:text-[#E5CD82]">
                    {settings.contrast}%
                  </span>
                </div>
                <p className="text-sm font-medium text-[#728E6D] dark:text-[#E5CD82]/90 mb-3">
                  {t.studio.contrastHint}
                </p>
                <input
                  id="slider-contrast"
                  type="range"
                  min={100}
                  max={200}
                  step={5}
                  value={settings.contrast}
                  aria-label={t.studio.contrastLabel}
                  aria-valuemin={100}
                  aria-valuemax={200}
                  aria-valuenow={settings.contrast}
                  onChange={(e) => updateSetting('contrast', parseInt(e.target.value, 10))}
                  className="oversized-slider"
                />
              </div>

              {/* Slider 4: Scan Resolution DPI (100 DPI to 300 DPI, default 150 DPI) */}
              <div className="p-4 rounded-2xl bg-[#FFF2B4]/60 dark:bg-[#15370D] border-2 border-[#728E6D]">
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <label
                    htmlFor="slider-dpi"
                    className="text-lg md:text-xl font-bold text-[#15370D] dark:text-[#FFF2B4]"
                  >
                    {t.studio.dpiLabel}
                  </label>
                  <span className="text-2xl md:text-4xl font-black text-[#15370D] dark:text-[#E5CD82]">
                    {settings.dpi} DPI
                  </span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm font-bold text-[#728E6D] dark:text-[#E5CD82] mb-3">
                  <span>{t.studio.dpiCompact}</span>
                  <span>{t.studio.dpiStandard}</span>
                  <span>{t.studio.dpiCrisp}</span>
                </div>
                <input
                  id="slider-dpi"
                  type="range"
                  min={100}
                  max={300}
                  step={50}
                  value={settings.dpi}
                  aria-label={t.studio.dpiLabel}
                  aria-valuemin={100}
                  aria-valuemax={300}
                  aria-valuenow={settings.dpi}
                  onChange={(e) => updateSetting('dpi', parseInt(e.target.value, 10))}
                  className="oversized-slider"
                />
              </div>
            </div>

            {/* Color Sensor Mode Selector */}
            <div>
              <span className="block text-lg md:text-xl font-bold text-[#15370D] dark:text-[#FFF2B4] mb-3">
                {t.studio.colorModeLabel}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {(['bw', 'grayscale', 'color', 'warm'] as ColorMode[]).map((mode) => {
                  const active = settings.colorMode === mode;
                  return (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => updateSetting('colorMode', mode)}
                      aria-pressed={active}
                      className={`min-h-[48px] px-3 py-2.5 rounded-xl font-bold text-sm md:text-base border-2 transition-all ${
                        active
                          ? 'bg-[#15370D] text-[#FFF2B4] dark:bg-[#E5CD82] dark:text-[#15370D] border-[#15370D] dark:border-[#FFF2B4]'
                          : 'bg-[#FFF2B4]/50 dark:bg-[#15370D] text-[#15370D] dark:text-[#FFF2B4] border-[#728E6D]'
                      }`}
                    >
                      {t.studio.colorModes[mode]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Progress Bar during Multi-Page PDF Export */}
            {isExporting && (
              <div className="p-4 rounded-2xl bg-[#FFF2B4] dark:bg-[#15370D] border-2 border-[#15370D] dark:border-[#E5CD82]">
                <div className="flex items-center justify-between font-extrabold text-lg mb-2">
                  <span>
                    {t.studio.downloadingProgress
                      .replace('{current}', String(exportPageProgress))
                      .replace('{total}', String(pageCount))}
                  </span>
                  <span>{Math.round((exportPageProgress / Math.max(1, pageCount)) * 100)}%</span>
                </div>
                <div className="w-full h-4 rounded-full bg-[#FFFDF5] dark:bg-[#1E4615] overflow-hidden border border-[#15370D]">
                  <div
                    className="h-full bg-[#15370D] dark:bg-[#E5CD82] transition-all duration-200"
                    style={{ width: `${Math.round((exportPageProgress / Math.max(1, pageCount)) * 100)}%` }}
                  />
                </div>
              </div>
            )}

            {exportSuccess && !isExporting && (
              <div className="p-4 rounded-2xl bg-[#FFF2B4] dark:bg-[#15370D] border-2 border-[#15370D] dark:border-[#E5CD82] flex items-center gap-3 font-extrabold text-lg text-[#15370D] dark:text-[#E5CD82]">
                <CheckCircle2 className="w-7 h-7 shrink-0" aria-hidden="true" />
                <span>{t.studio.downloadComplete}</span>
              </div>
            )}

            {/* 3. GIANT DOWNLOAD SCANNED PDF BUTTON */}
            <button
              type="button"
              onClick={handleExportScannedPdf}
              disabled={isExporting}
              className="w-full min-h-[64px] px-8 py-5 text-xl md:text-2xl font-extrabold rounded-2xl bg-[#15370D] dark:bg-[#E5CD82] text-[#FFF2B4] dark:text-[#15370D] border-2 border-[#15370D] dark:border-[#FFF2B4] shadow-xl hover:shadow-2xl hover:ring-4 hover:ring-[#E5CD82] disabled:opacity-60 active:scale-[0.99] transition-all flex items-center justify-center gap-3"
            >
              <Download className="w-8 h-8 shrink-0" aria-hidden="true" />
              <span>
                {isExporting
                  ? t.studio.downloadingProgress
                      .replace('{current}', String(exportPageProgress))
                      .replace('{total}', String(pageCount))
                  : t.studio.downloadBtn}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
