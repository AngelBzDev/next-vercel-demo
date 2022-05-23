import CustomLink from "./CustomLink";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const menuItems = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Pricing",
      href: "/pricing",
    },
  ];

  return (
    <nav className={styles.nav_container}>
      {menuItems.map(({href, text}) => (
        <CustomLink key={href} href={href}>
          {text}
        </CustomLink>
      ))}
    </nav>
  );
};

export default Navbar;
