export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <div className="rounded-lg bg-slate-800 p-6 text-center shadow-[0_0_10px_3px_rgba(147,51,234,1)]">
        {children}
      </div>
    </div>
  );
}
