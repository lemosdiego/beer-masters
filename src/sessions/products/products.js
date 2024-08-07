import Card from "@/components/cards/cards";
import Styles from "./products.module.css";
import { dataCard } from "@/data/dataCard";

export default function Products() {
  return (
    <section className={Styles.container_products} id="produtos">
      <div className={Styles.title}>
        <h3>Nossas Cervejas</h3>
      </div>
      <div className={Styles.container_cards}>
        {dataCard.map((item, index) => (
          <Card
            key={item.id}
            reverse={index % 2 === 1}
            title={item.title}
            description={item.description}
            img={item.img}
          />
        ))}
      </div>
    </section>
  );
}
