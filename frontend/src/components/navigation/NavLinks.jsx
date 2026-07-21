const links = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "How It Works",
    href: "#how-it-works",
  },
  {
    label: "Tech Stack",
    href: "#tech-stack",
  },
  {
    label: "Benefits",
    href: "#benefits",
  },
];

function NavLinks() {
  return (
    <div className="hidden items-center gap-8 lg:flex">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="
            relative
            text-sm
            font-medium
            transition-all
            duration-300
            style={{
            color: var(--text-secondary)}}
            after:absolute
            after:left-0
            after:-bottom-1
            after:h-[2px]
            after:w-0
            after:bg-violet-500
            after:transition-all
            after:duration-300
            onMouseEnter={(e)=>{
            e.currentTarget.style.color=var(--primary)
            onMouseLeave={(e)=>{
    e.currentTarget.style.color=var(--text-secondary)}}
          "
          style={{
            color: "var(--text-secondary)",
          }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default NavLinks;