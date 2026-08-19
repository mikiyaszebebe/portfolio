export const metadata = {
  title: "TCCP LivePaper | Mikiyas Zenebe",
  description: "Interactive, reproducible technical paper for trustworthy customer churn prediction.",
};

export default function LivePaperPage() {
  return (
    <main className="min-h-screen bg-[#e8e4dc]">
      <iframe
        title="TCCP interactive paper"
        src="/livepaper/index.html"
        className="block min-h-screen w-full border-0"
      />
    </main>
  );
}
