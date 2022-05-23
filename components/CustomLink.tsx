import Link from "next/link";
import { useRouter } from "next/router";
import { FC, PropsWithChildren } from "react";
import styles from "./Navbar.module.css";

interface Props {
  href: string
}

const CustomLink: FC<PropsWithChildren<Props>> = ({ children, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a className={asPath === href ? styles.active : ''}>{children}</a>
    </Link>
  );
};

export default CustomLink;