import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#242429] bg-[#0d0d0f]/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link href="/#hero" className="flex items-center gap-3">
          <Image
            src="/unnamed (1).jpg"
            alt="Mikiyas Zenebe"
            width={34}
            height={34}
            className="rounded-full border border-[#242429]"
          />
          <div>
            {/* <p className="text-[10px] uppercase tracking-[0.35em] text-[#8e8b82]">mikile.tech</p> */}
            <p className="font-serif text-base text-[#f4f1e8]">Mikiyas Zenebe</p>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center justify-end gap-2 text-sm text-[#b7b2a6]">
          <Link className="rounded-full px-3 py-2 transition hover:bg-[#141417] hover:text-[#f4f1e8]" href="/#projects">Projects</Link>
          <Link className="rounded-full px-3 py-2 transition hover:bg-[#141417] hover:text-[#f4f1e8]" href="/award">Awards</Link>
          <Link className="rounded-full px-3 py-2 transition hover:bg-[#141417] hover:text-[#f4f1e8]" href="/blog">Blog</Link>
          {/* <a className="rounded-full px-3 py-2 transition hover:bg-[#141417] hover:text-[#f4f1e8]" href="#experience">Experience</a> */}
          <Link className="rounded-full px-3 py-2 transition hover:bg-[#141417] hover:text-[#f4f1e8]" href="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
