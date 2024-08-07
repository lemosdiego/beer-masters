import Styles from "./cards.module.css";

export default function Card({ reverse, title, description, img }) {
  return (
    <section
      className={`${Styles.container_card} ${
        reverse ? Styles.reverse : Styles.normal
      }`}
    >
      <div className={Styles.img}>
        <img src={img} alt={title} />
      </div>
      <div className={Styles.description}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </section>
  );
}
