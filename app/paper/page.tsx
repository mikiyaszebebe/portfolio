export const metadata = {
  title: "AI Research Paper | Mikiyas Zenebe",
  description: "Paper-style AI research publication view.",
};

export default function PaperPage() {
  return (
    <main className="h-screen w-full overflow-hidden bg-[#0d0d0f]">
      <a
        href="/mmm.pdf"
        download="ai-research-paper.pdf"
        className="fixed right-5 top-5 z-10 rounded-full border border-white/20 bg-black/70 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-black"
      >
        Download paper
      </a>
      <iframe
        title="AI research paper"
        src="/mmm.pdf#toolbar=0&navpanes=0&view=FitH"
        className="h-full w-full border-0 [filter:invert(1)_hue-rotate(180deg)]"
      />
    </main>
  );
}
