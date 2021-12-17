import Head from "next/head";
import Link from "next/link";
import Image from 'next/image'
import earth from '../../../public/earth.png'
import { useEffect, useState } from "react";
import { Brightness1Rounded, Brightness1TwoTone, Brightness3Rounded, Brightness4Rounded, Brightness5Rounded, Brightness6Rounded } from "@material-ui/icons";
import styles from "./Layout.module.css";

const Layout = ({ children, title = "Know Your Borders" }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );

    setTheme(localStorage.getItem("theme"));
  }, []);

  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <Image
            src={earth}
            alt="Know Your Borders"
            width={160} automatically provided
            height={80} automatically provided
            // blurDataURL="data:..." automatically provided
            placeholder="blur" // Optional blur-up while loading
          />
        </Link>

        <button className={styles.themeSwitcher} onClick={switchTheme}>
          <Brightness4Rounded />
        </button>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>Saugaat @ saugaatallabadi.com</footer>
    </div>
  );
};

export default Layout;
