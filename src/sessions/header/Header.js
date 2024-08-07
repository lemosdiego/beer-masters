"use client";
import { useState, useEffect } from "react";
import Styles from "./header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Verifica se estamos no cliente
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);

      function handleResize() {
        setIsMobile(window.innerWidth <= 768);
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function handleMenuItemClick() {
    if (isMobile) {
      setMenuOpen(false); // Fecha o menu quando um item for clicado no mobile
    }
  }

  return (
    <>
      <span className={Styles.menu}>
        <img
          id="open"
          src="/menu.svg"
          alt="Abrir menu"
          onClick={toggleMenu}
          style={{ display: menuOpen ? "none" : "block" }}
        />
        <img
          className={Styles.fechar}
          id="close"
          src="/close.svg"
          alt="Fechar menu"
          onClick={toggleMenu}
          style={{ display: menuOpen ? "block" : "none" }}
        />
      </span>
      <header
        className={Styles.container_header}
        id="header"
        style={{ display: menuOpen ? "flex" : "none" }}
      >
        <span className={Styles.logo}>
          <p>Beer Masters</p>
        </span>
        <nav className={Styles.nav}>
          <ul>
            <a href="#inicio">
              <li onClick={handleMenuItemClick}>Inicio</li>
            </a>
            <a href="#sobre">
              <li onClick={handleMenuItemClick}>Sobre</li>
            </a>
            <a href="#produtos">
              <li onClick={handleMenuItemClick}>Produtos</li>
            </a>
            <a>
              <li onClick={handleMenuItemClick}>História</li>
            </a>
            <a>
              <li onClick={handleMenuItemClick}>Contatos</li>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
}
