import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SECTIONS } from "@/data/site";
import { Container, useQuote } from "./ui";

export const Logo = () => (
  <span className="flex items-center gap-2.5">
    <span
      aria-hidden
      className="grid h-8 w-8 place-items-center rounded-md bg-ink text-[12px] font-bold tracking-tight text-white [font-stretch:80%]"
    >
      LEW
    </span>
    <span className="text-[16px] font-semibold tracking-[-0.01em] text-ink [font-stretch:92%]">
      Lucky Engineering Works
    </span>
  </span>
);

// Scrolls to a home-page section, routing to Home first when needed.
export const useSectionLink = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (id) => (e) => {
    e.preventDefault();
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };
};

const linkCls = "text-[15px] text-graphite transition-colors duration-200 hover:text-ink";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const onQuote = useQuote();
  const toSection = useSectionLink();
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 border-b border-hairline bg-paper/85 backdrop-blur-xl"
      data-testid="main-header"
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link to="/" aria-label="Lucky Engineering Works, home" data-testid="nav-logo">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Main" data-testid="nav-links">
          {SECTIONS.map((s) => (
            <a key={s.id} href="#/" onClick={toSection(s.id)} className={linkCls}>
              {s.label}
            </a>
          ))}
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-[15px] text-ink" : linkCls)}
          >
            About
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onQuote}
            data-testid="nav-quote-button"
            className="hidden rounded-full bg-copper px-5 py-2 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-copper-hover sm:inline-flex"
          >
            Send an RFQ
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            data-testid="nav-menu-button"
            className="rounded-md p-2 text-ink xl:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {open && (
        <div
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-hairline bg-paper xl:hidden"
          data-testid="mobile-menu"
        >
          <Container className="flex flex-col py-4">
            <Link to="/" className="border-b border-hairline py-4 text-[20px] font-medium text-ink">
              Home
            </Link>
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href="#/"
                onClick={(e) => {
                  setOpen(false);
                  toSection(s.id)(e);
                }}
                className="border-b border-hairline py-4 text-[20px] font-medium text-ink"
              >
                {s.label}
              </a>
            ))}
            <Link to="/about" className="border-b border-hairline py-4 text-[20px] font-medium text-ink">
              About
            </Link>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onQuote();
              }}
              data-testid="mobile-quote-button"
              className="mt-8 rounded-full bg-copper px-6 py-3.5 text-[16px] font-semibold text-white"
            >
              Send an RFQ
            </button>
          </Container>
        </div>
      )}
    </header>
  );
};
