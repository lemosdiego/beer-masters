import Styles from "./about.module.css";

export default function About() {
  return (
    <section className={Styles.container_about} id="sobre">
      <div className={Styles.img}></div>
      <div className={Styles.description}>
        <h2>Sobre nós</h2>
        <p>
          Na Beer Masters, cada gole é uma homenagem à bravura e tradição
          viking. Fundada por Washington Lemos, nossa cervejaria combina
          ingredientes selecionados e técnicas ancestrais para criar cervejas
          artesanais de alta qualidade. Inspirados pelo espírito explorador dos
          vikings, estamos sempre em busca de novos sabores. Nossa equipe
          dedicada garante que cada cerveja seja uma experiência única e
          autêntica. Levante seu copo e junte-se a nós nesta aventura
          cervejeira. Skål!
        </p>
      </div>
    </section>
  );
}
