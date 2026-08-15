export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white dark:bg-slate-950 px-6">
      <div className="relative w-12 h-12">
        <div className="w-12 h-12 rounded-full border-2 border-blue-600/20 border-t-blue-600 animate-spin"></div>
        <div className="absolute inset-0 w-8 h-8 m-auto rounded-full bg-blue-600/10 animate-pulse"></div>
      </div>
      <p className="mt-4 text-xs font-mono tracking-widest text-slate-400 uppercase">
        Loading InnVox...
      </p>
    </div>
  );
}
