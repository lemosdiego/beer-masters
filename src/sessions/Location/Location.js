import Map from "@/components/map/map";
import Styles from "./location.module.css";

export default function Location() {
  return (
    <section className={Styles.location}>
      <div className={Styles.title}>
        <h3>Encontre o Covil dos Mestres</h3>
      </div>
      <div className={Styles.map}>
        <Map />
      </div>
      <div className={Styles.ifood}>
        <h4>
          Você também pode nos encontrar no{" "}
          <a
            href="https://new-portfolio-five-indol.vercel.app/"
            target="_blank"
          >
            <span>iFood</span>
          </a>
          ! Explore nosso cardápio e faça seu pedido com facilidade
        </h4>
      </div>
    </section>
  );
}
