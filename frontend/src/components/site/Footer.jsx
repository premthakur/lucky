import { Link } from "react-router-dom";
import { CONTACT, DOWNLOADS } from "@/data/site";
import { Logo, useSectionLink } from "./Navbar";
import { Container } from "./ui";

const Heading = ({ children }) => <h2 className="text-[14px] font-semibold text-ink">{children}</h2>;
const linkCls = "text-graphite transition-colors duration-200 hover:text-ink";

export const Footer = () => {
  const toSection = useSectionLink();
  return (
    <footer id="contact" className="border-t border-hairline" data-testid="site-footer">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link to="/" aria-label="Lucky Engineering Works, home" data-testid="footer-logo">
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-graphite">
              Precision machining, industrial components and OEM supply from
              Vasai, Maharashtra, since 2010.
            </p>
          </div>

          <div className="md:col-span-2">
            <Heading>Company</Heading>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              <li><Link to="/" className={linkCls}>Home</Link></li>
              <li><Link to="/about" className={linkCls}>About</Link></li>
              <li>
                <a href="#/" onClick={toSection("vendor-registration")} className={linkCls}>
                  Vendor registration
                </a>
              </li>
              <li>
                <a href="#/" onClick={toSection("rfq")} className={linkCls}>
                  How to send an RFQ
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <Heading>Downloads</Heading>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              <li>
                <a href={DOWNLOADS.profile} download className={linkCls} data-testid="footer-profile-link">
                  Company profile
                </a>
              </li>
              <li>
                <a href={DOWNLOADS.productRange} download className={linkCls} data-testid="footer-range-link">
                  Product range
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <Heading>Contact</Heading>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              <li data-testid="footer-address">
                <a href={CONTACT.mapUrl} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  {CONTACT.addressLines.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </a>
              </li>
              <li data-testid="footer-phone">
                {CONTACT.phones.map((p, i) => (
                  <span key={p.href}>
                    {i > 0 && " / "}
                    <a href={p.href} className={linkCls}>{p.label}</a>
                  </span>
                ))}
              </li>
              <li data-testid="footer-email">
                <a href={`mailto:${CONTACT.email}`} className={`${linkCls} break-all`}>{CONTACT.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-hairline pt-6 text-[13px] text-graphite">
          © {new Date().getFullYear()} Lucky Engineering Works
        </p>
      </Container>
    </footer>
  );
};
