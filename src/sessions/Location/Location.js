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
    </section>
  );
}
