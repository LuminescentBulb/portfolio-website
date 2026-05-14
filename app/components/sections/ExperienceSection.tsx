import { lazy, Suspense, useSyncExternalStore } from "react";

const ResumePDF = lazy(() => import("./ResumePDF"));

function useIsClient() {
    return useSyncExternalStore(() => () => {}, () => true, () => false);
}

export default function ExperienceSection() {
    const isClient = useIsClient();

    return (
        <section id="experience" className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Experience & Education
                    </h2>
                </div>

                {isClient && (
                    <Suspense fallback={<div className="text-slate-400 text-center py-20">Loading resume…</div>}>
                        <ResumePDF />
                    </Suspense>
                )}
            </div>
        </section>
    );
}
