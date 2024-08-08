import { Borel } from "next/font/google";
import Styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={Styles.container_footer}>
      <div className={Styles.container_box}>
        <div className={Styles.box}>
          <h5>Informações para contato</h5>
          <p>Email: washington.contato1327@gmail.com</p>
          <p>Telefone: (81) 90000-0000</p>
          <p>Endereço: Rua Exemplo, 123 - Bairro - Cidade - Estado</p>
        </div>
        <div className={Styles.box2}>
          <div className={Styles.icons}>
            <img src="/icons/whats.svg" alt="Icone WhatsApp" />
          </div>
          <div className={Styles.icons}>
            <img src="/icons/linke.svg" alt="Icone Linkedin" />
          </div>
          <div className={Styles.icons}>
            <img src="/icons/insta.svg" alt="Icone Instagram" />
          </div>
          <div className={Styles.icons}>
            <img src="/icons/face.svg" alt="Icone Facebook" />
          </div>
          <div className={Styles.icons}>
            <img src="/icons/youtube.svg" alt="Icone YouTube" />
          </div>
          <div className={Styles.icons}>
            <img src="/icons/tiktok.svg" alt="Icone TikTok" />
          </div>
        </div>
      </div>
      <hr />
      <p>© 2024 Washington Lemos. Todos os direitos reservados.</p>
    </footer>
  );
}
