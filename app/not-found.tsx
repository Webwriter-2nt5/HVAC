import Link from 'next/link';

export default function NotFound() {
  return (
    <article className="min-h-screen bg-slate-deep text-white flex flex-col justify-center items-center p-6 text-center select-none relative overflow-hidden">
      {/* Visual glowing radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.08),transparent_50%)] pointer-events-none" />

      {/* Warning icon badge */}
      <div className="bg-red-950/40 p-4 border border-red-500/30 rounded-full mb-6 relative z-10 shrink-0">
        <span className="text-4xl">⚠️</span>
      </div>

      <div className="max-w-md relative z-10 space-y-4">
        <h1 className="font-display font-black text-5xl sm:text-6xl text-white uppercase tracking-tight leading-none">
          SYSTEM ERROR 404
        </h1>
        <h2 className="font-display font-bold text-lg sm:text-xl text-arctic-blue uppercase tracking-widest">
          COMPLETE LOSS OF AIRFLOW DETECTED
        </h2>
        <p className="font-body text-xs sm:text-sm text-gray-300 leading-normal">
          It looks like the page you are searching for has lost central circulation and been filtered out of our network layout!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link
            href="/"
            className="px-6 py-3.5 bg-arctic-blue hover:bg-sky-600 text-white font-display text-xs uppercase font-extrabold tracking-widest transition-colors shadow"
          >
            ➔ Return to Headquarters
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3.5 border border-steel-mid/40 hover:bg-white/5 text-white font-display text-xs uppercase font-extrabold tracking-widest transition-colors"
          >
            📞 Contact Dispatcher
          </Link>
        </div>
      </div>

      {/* Industrial aesthetic frame accent */}
      <div className="absolute top-6 left-6 text-[10px] font-mono text-[#4A5568] tracking-widest uppercase">
        ARCTIC_SYSTEM [AFFECTED_OUT_OF_BOUND]
      </div>
    </article>
  );
}
