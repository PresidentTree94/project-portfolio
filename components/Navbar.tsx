import Image from "next/image";

const navs = [
  { label: "About", link: "#about" },
  { label: "Skills", link: "#skills" },
  { label: "Background", link: "#background" },
  { label: "Projects", link: "#projects" },
  { label: "Contact Me", link: "#contact" }
];

export default function Navbar() {
  return (
    <header className="bg-background/80 border-b border-border/40 fixed top-0 inset-x-0 z-1 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="h-16 flex items-center px-6">
          <div className="flex items-center gap-2">
            <Image src="/PresidentTree.png" alt="Pixelated tree wearing a suit" width={1024} height={1024} className="w-8 h-8 rounded-sm border border-primary/20" />
            <span className="font-bold text-xl text-primary font-display">PresidentTree94</span>
          </div>
          {/*Mobile icon*/}
        </div>
        <nav className="flex items-center gap-6 px-6 text-sm font-medium">
          {navs.map((n, index) => (
            <a key={index} href={n.link} className={`${n.link === "#contact" ? "bg-primary text-background font-tech px-3 py-2 rounded-md shadow-lg text-xs hover:-translate-y-0.5 transition-transform" : "hover:text-primary transition-colors"}`}>{n.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}