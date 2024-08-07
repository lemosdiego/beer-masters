import Styles from "./home.module.css";

export default function Home() {
  return (
    <section className={Styles.container_home} id="inicio">
      <h1>Bem-vindo à Beer Masters</h1>
      <h2>
        Descubra a excelência da cerveja artesanal inspirada na bravura e
        tradição viking. Uma experiência única para verdadeiros mestres.
      </h2>
      <a href="#produtos  ">
        <button className={Styles.button}>Conheça Nossas Cervejas</button>
      </a>
    </section>
  );
}
