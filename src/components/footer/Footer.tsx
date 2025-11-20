const socialLinks = [
  { icon: "fa-brands fa-linkedin", href: "https://www.linkedin.com/in/cristian-perez-425ab2237/", label: "LinkedIn" },
  { icon: "fa-brands fa-github", href: "https://github.com/PerezCristian-dev/PerezCristian", label: "GitHub" },
  { icon: "fa-brands fa-facebook", href: "https://www.facebook.com/cristian.r.perez3/", label: "Facebook" },
  { icon: "fa-brands fa-instagram", href: "https://www.instagram.com/cristian.r.perez3/", label: "Instagram" },
  { icon: "fa-brands fa-youtube", href: "https://www.youtube.com/channel/UC3lZL3S2a2w4rKWSkp7Lopg", label: "YouTube" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-300 py-12" role="contentinfo">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-8">
          {/* Brand */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">
              <span className="gradient-text">Cristian Perez</span>
            </h3>
            <p className="text-base-content/60">Full-Stack Developer & Data Analyst</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4" role="list">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-ghost hover:btn-primary transition-all text-xl"
                aria-label={label}
                role="listitem"
              >
                <i className={icon} aria-hidden="true"></i>
              </a>
            ))}
          </div>

          <div className="divider w-full max-w-md" />

          {/* Copyright */}
          <div className="text-center text-sm text-base-content/60">
            <p className="flex items-center justify-center gap-2">
              &copy; {currentYear} Made with{" "}
              <i className="fa-solid fa-heart text-error animate-pulse" aria-label="love"></i>{" "}
              by Cristian Perez
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
