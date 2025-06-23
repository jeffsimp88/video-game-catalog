import Link from "next/link";
import styles from "./Form.module.css";

const navLinks = [
  { path: "/", name: "Home" },
  { path: "/form", name: "Form" },
  { path: "/profile", name: "Profile" },
];

export default function NavBar() {
  return (
    <>
      <h1>Video Game Catalog</h1>
      <div>
        {navLinks.map((link) => (
          <Link href={link.path} key={link.name} className={styles.button}>
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
}
