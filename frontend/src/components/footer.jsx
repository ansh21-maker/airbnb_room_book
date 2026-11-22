import React from "react";

const columns = [
  {
    title: "Support",
    links: [
      "Help Centre",
      "Get help with a safety issue",
      "AirCover",
      "Anti-discrimination",
      "Disability support",
      "Cancellation options",
      "Report neighbourhood concern",
    ],
  },
  {
    title: "Hosting",
    links: [
      "Airbnb your home",
      "Airbnb your hotel",
      "Airbnb your experience",
      "Airbnb your service",
      "AirCover for Hosts",
      "Hosting resources",
      "Community Centre",
      "Hosting responsibly",
      "Join a free hosting class",
      "Find a co-host",
      "Refer a host",
    ],
  },
  {
    title: "Airbnb",
    links: [
      "2026 Summer Release",
      "Newsroom",
      "Careers",
      "Investors",
      "Airbnb.org emergency stays",
    ],
  },
];

const legal = ["Privacy", "Terms", "Company details"];

const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.4 0 0 5.4 0 12c0 6 4.4 11 10.1 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4C19.6 23 24 18 24 12c0-6.6-5.4-12-12-12z" />
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.2 2.25h3.3l-7.2 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.64l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.41-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.92 15.64z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 4 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.2 4.4 2.6 6.8 7 7C8.3 24 8.7 24 12 24s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.2-4.4-2.6-6.8-7-7C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.9 1.4 1.4 0 0 0 0-2.9z" />
  </svg>
);

const socials = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "X", href: "#", Icon: XIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
];

export default function Footer({
  language = "English (IN)",
  currency = "₹ INR",
  year = 2026,
  onLanguageClick,
  onCurrencyClick,
}) {
  return (
    <footer className="ft">
      <style>{css}</style>
      <div className="ft-wrap">
        <div className="ft-cols">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2>{col.title}</h2>
              <ul>
                {col.links.map((text) => (
                  <li key={text}>
                    <a href="#">{text}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="ft-bottom">
          <div className="ft-legal">
            <span>© {year} Airbnb, Inc.</span>
            {legal.map((text) => (
              <React.Fragment key={text}>
                <span className="dot">·</span>
                <a href="#">{text}</a>
              </React.Fragment>
            ))}
          </div>

          <div className="ft-tools">
            <button type="button" onClick={onLanguageClick} aria-label="Choose language">
              <GlobeIcon />
              {language}
            </button>
            <button type="button" onClick={onCurrencyClick} aria-label="Choose currency">
              {currency}
            </button>
            <div className="ft-social">
              {socials.map(({ label, href, Icon }) => (
                <a key={label} href={href} aria-label={label}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const css = `
.ft{
  --bg:#f7f7f7;--text:#222;--muted:#6a6a6a;--line:#ddd;
  background:var(--bg);color:var(--text);border-top:1px solid var(--line);
  font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  font-size:14px;line-height:1.4;padding:32px max(24px,4vw) 0;
}
@media (prefers-color-scheme: dark){
  .ft{--bg:#1c1c1c;--text:#f2f2f2;--muted:#a8a8a8;--line:#3a3a3a}
}
.ft *{box-sizing:border-box}
.ft-wrap{max-width:1344px;margin:0 auto}
.ft-cols{display:grid;grid-template-columns:repeat(3,1fr);gap:32px 40px;padding-bottom:36px}
.ft h2{font-size:14px;font-weight:600;margin:0 0 20px}
.ft ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:16px}
.ft a{color:inherit;text-decoration:none}
.ft-cols a:hover,.ft-legal a:hover{text-decoration:underline}
.ft a:focus-visible,.ft button:focus-visible{outline:2px solid var(--text);outline-offset:3px;border-radius:4px}
.ft-bottom{border-top:1px solid var(--line);padding:28px 0;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px 24px}
.ft-legal{display:flex;flex-wrap:wrap;align-items:center;gap:4px 8px}
.ft-legal .dot{color:var(--muted)}
.ft-tools{display:flex;align-items:center;flex-wrap:wrap;gap:20px}
.ft-tools button{display:inline-flex;align-items:center;gap:8px;background:none;border:0;padding:0;color:inherit;font:inherit;font-weight:600;cursor:pointer}
.ft-tools button:hover{text-decoration:underline}
.ft-social{display:flex;align-items:center;gap:20px}
@media (max-width:820px){.ft-cols{grid-template-columns:1fr 1fr}}
@media (max-width:540px){
  .ft-cols{grid-template-columns:1fr}
  .ft-bottom{flex-direction:column;align-items:flex-start}
}
`;