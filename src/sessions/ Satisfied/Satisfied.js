import Styles from "./satisfied.module.css";

export default function Clients() {
  return (
    <section className={Styles.container_satisfied}>
      <div className={Styles.title}>
        <h3>O que Nossos Clientes Dizem</h3>
      </div>
      <div className={Styles.clients}>
        <div className={Styles.cards}>
          <div className={Styles.img}>
            <img src="/avatar1.svg" />
          </div>
          <div className={Styles.description}>
            <p>
              A melhor IPA que já provei! Recomendo a todos os amantes de
              cerveja, sensacional!
            </p>
          </div>
          <h4>João Silva</h4>
        </div>
        <div className={Styles.cards}>
          <div className={Styles.img}>
            <img src="/avatar2.svg" />
          </div>
          <div className={Styles.description}>
            <p>
              A Thor Thunder Stout é incrível! Encorpada e cheia de sabor, super
              recomendo.
            </p>
          </div>
          <h4>Ana Paula</h4>
        </div>
        <div className={Styles.cards}>
          <div className={Styles.img}>
            <img src="/avatar2.svg" />
          </div>
          <div className={Styles.description}>
            <p>
              Adorei a Freya Enchantment Wheat Beer. Leve e refrescante, nova
              favorita.
            </p>
          </div>
          <h4>Mariana Lopes</h4>
        </div>
        <div className={Styles.cards}>
          <div className={Styles.img}>
            <img src="/avatar1.svg" />
          </div>
          <div className={Styles.description}>
            <p>
              A Valhalla Lager é pura e refrescante, de sabor único é ótima para
              qualquer ocasião.
            </p>
          </div>
          <h4>Pedro Souza</h4>
        </div>
      </div>
    </section>
  );
}
