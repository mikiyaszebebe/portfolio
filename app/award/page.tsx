import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import Header from "@/components/ui/header";

const certificates = [
  {
    id: "UC-95d00db8-abd7-4fc2-b01c-b40d9de3efb3",
    image: "https://github.com/user-attachments/assets/f73705a9-18f1-4c88-a1dd-3d4febf01855",
    url: "https://www.udemy.com/certificate/UC-95d00db8-abd7-4fc2-b01c-b40d9de3efb3/",
  },
  {
    id: "UC-9eed3e15-cb60-4e16-b019-9985d0f2f1fe",
    image: "https://github.com/user-attachments/assets/83c6daf4-ae64-4b51-a0c0-7389f3696f1b",
    url: "https://www.udemy.com/certificate/UC-9eed3e15-cb60-4e16-b019-9985d0f2f1fe/",
  },
  {
    id: "UC-96d5eab0-515d-42fc-8419-a0bb71334bd4",
    image: "https://github.com/user-attachments/assets/2e63a987-37a3-48bf-9e5a-b208c6c3ed7c",
    url: "https://www.udemy.com/certificate/UC-96d5eab0-515d-42fc-8419-a0bb71334bd4/",
  },
  {
    id: "UC-e5938f0e-141f-4e17-9d9d-312065ebdb53",
    image: "https://github.com/user-attachments/assets/d97c1cb3-ef2e-4051-8f36-0596e05ad8e7",
    url: "https://www.udemy.com/certificate/UC-e5938f0e-141f-4e17-9d9d-312065ebdb53/",
  },
  {
    id: "UC-7bff06df-bc05-4fd6-93c8-8699efce8677",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-7bff06df-bc05-4fd6-93c8-8699efce8677.jpg",
    url: "https://www.udemy.com/certificate/UC-7bff06df-bc05-4fd6-93c8-8699efce8677/",
  },
  {
    id: "UC-1a8278b0-8625-4593-9bff-c73dba31dc6f",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-1a8278b0-8625-4593-9bff-c73dba31dc6f.jpg",
    url: "https://www.udemy.com/certificate/UC-1a8278b0-8625-4593-9bff-c73dba31dc6f/",
  },
  {
    id: "UC-9bdf3c22-220d-4ffa-a57b-bcedd78a3a92",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-9bdf3c22-220d-4ffa-a57b-bcedd78a3a92.jpg",
    url: "https://www.udemy.com/certificate/UC-9bdf3c22-220d-4ffa-a57b-bcedd78a3a92/",
  },
  {
    id: "UC-3afd563a-6a8e-4867-bef0-4660067ecfab",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-3afd563a-6a8e-4867-bef0-4660067ecfab.jpg",
    url: "https://www.udemy.com/certificate/UC-3afd563a-6a8e-4867-bef0-4660067ecfab/",
  },
];

export default function AwardPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0f] text-[#f4f1e8]">
      <Header />

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-10 lg:px-8 lg:pb-28">
        <div className="mb-10 max-w-3xl space-y-4">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#8e8b82]">Awards</p>
          <h1 className="font-serif text-4xl tracking-[-0.03em] text-[#f4f1e8] sm:text-5xl">
            Certificates & awards
          </h1>
          <p className="text-base leading-7 text-[#b7b2a6]">
            Verified Udemy certificates showcasing continuous learning in AI systems, web development, and product execution.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <article
              key={certificate.id}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#242429] bg-[#141417] shadow-[0_0_0_1px_rgba(24,24,27,0.45)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-[#242429]">
                <Image
                  src={certificate.image}
                  alt={`Udemy certificate ${certificate.id}`}
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-5 p-6">
                <div className="space-y-3">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[#8e8b82]">Udemy</p>
                  <h2 className="font-serif text-2xl text-[#f4f1e8]">Certificate of Completion</h2>
                  <p className="text-sm text-[#b7b2a6]">Credential ID: {certificate.id}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-3">
                  <a
                    href={certificate.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#2a2a2d] bg-[#0d0d0f] px-4 py-2 text-sm text-[#f4f1e8] transition hover:border-[#d27a57]"
                  >
                    Check
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={certificate.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#b7b2a6] underline decoration-[#3a3a3f] underline-offset-4 hover:text-[#f4f1e8]"
                  >
                    Open link
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
