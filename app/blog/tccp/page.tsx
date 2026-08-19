export const metadata = {
  title: "TCCP | Mikiyas Zenebe",
  description: "Trustworthy Customer Churn Prediction technical paper.",
};

export default function TccpPage() {
  return (
    <main className="h-screen w-full overflow-hidden bg-[#0d0d0f]">
      <a
        href="/mmm.pdf"
        download="TCCP-technical-paper.pdf"
        className="fixed right-5 top-5 z-10 rounded-full border border-white/20 bg-black/70 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-black"
      >
        Download paper
      </a>
      <iframe
        title="TCCP technical paper"
        src="/mmm.pdf#toolbar=0&navpanes=0&view=FitH"
        className="h-full w-full border-0 [filter:invert(1)_hue-rotate(180deg)]"
      />
    </main>
  );
}
