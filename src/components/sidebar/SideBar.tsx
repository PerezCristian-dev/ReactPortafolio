import { motion } from "framer-motion";
import { useActiveSection } from "../../hooks/useActiveSection";

interface SideBarProps {
  elements: {
    home: React.RefObject<HTMLElement>;
    about: React.RefObject<HTMLElement>;
    projects: React.RefObject<HTMLElement>;
    contact: React.RefObject<HTMLElement>;
  };
}

const navItems = [
  { id: "home", icon: "fa-solid fa-house", label: "Home" },
  { id: "about", icon: "fa-solid fa-user", label: "About" },
  { id: "projects", icon: "fa-solid fa-briefcase", label: "Projects" },
  { id: "contact", icon: "fa-solid fa-envelope", label: "Contact" },
] as const;

export const SideBar = ({ elements }: SideBarProps) => {
  const activeSection = useActiveSection(Object.keys(elements));

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for any fixed headers
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 lg:left-auto lg:right-auto lg:top-1/2 lg:-translate-y-1/2 lg:ml-6 z-50 bg-base-200/80 backdrop-blur-lg lg:rounded-2xl shadow-2xl lg:h-[163px] h-auto"
      aria-label="Main navigation"
    >
      <ul className="flex lg:flex-col justify-around lg:justify-center p-1 gap-0.5">
        {navItems.map(({ id, icon, label }) => {
          const isActive = activeSection === id;

          return (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={`
                  group relative flex items-center gap-2 p-2 rounded-lg
                  transition-all duration-300
                  hover:bg-base-300 focus-visible-ring
                  ${isActive ? "bg-primary text-primary-content" : "text-base-content"}
                `}
                aria-label={label}
                aria-current={isActive ? "page" : undefined}
              >
                <i className={`${icon} w-4 text-center flex-shrink-0 text-sm`} aria-hidden="true"></i>

                {/* Desktop label - expands on hover */}
                <span className="hidden lg:block lg:opacity-0 lg:w-0 lg:group-hover:opacity-100 lg:group-hover:w-auto overflow-hidden transition-all duration-300 whitespace-nowrap text-sm">
                  {label}
                </span>

                {/* Mobile label */}
                <span className="lg:hidden text-[10px] font-medium">{label}</span>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeSection"
                    className="hidden lg:block absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
