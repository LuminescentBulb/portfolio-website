import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

export default function ResumePDF() {
    const [numPages, setNumPages] = useState<number>();
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        setContainerWidth(containerRef.current.clientWidth);

        const observer = new ResizeObserver((entries) => {
            setContainerWidth(entries[0].contentRect.width);
        });
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-xl overflow-hidden"
        >
            {containerWidth > 0 && (
                <Document
                    file="/Resume_Public_Taemin_Kim.pdf"
                    onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                >
                    {Array.from({ length: numPages ?? 0 }, (_, i) => (
                        <Page
                            key={`page_${i + 1}`}
                            pageNumber={i + 1}
                            width={containerWidth}
                        />
                    ))}
                </Document>
            )}
        </div>
    );
}
