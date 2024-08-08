import Styles from "./cntacts.module.css";

export default function Contacts() {
  return (
    <section className={Styles.container_contacts}>
      <div className={Styles.social_media}>
        <h3>Fique por Dentro das Nossas Atualizações e Eventos</h3>
        <p>
          Acompanhe todas as novidades e eventos da Beer Masters! Conecte-se
          conosco através das nossas redes sociais e não perca nenhuma
          atualização.
        </p>
        <h4>Nossas Redes Sociais:</h4>
        <ul>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp
            </a>
          </li>
        </ul>
      </div>
      <div className={Styles.form}>
        <h3>Entre em Contato Conosco</h3>
        <p>
          Tem alguma dúvida ou deseja saber mais sobre nossos produtos e
          eventos? Preencha o formulário abaixo e nossa equipe entrará em
          contato com você o mais breve possível.
        </p>
        <form>
          <input placeholder="Nome" />
          <input placeholder="Telefone" />
          <input placeholder="Email" />
          <textarea placeholder="Deixe uma mensagem"></textarea>
        </form>
      </div>
    </section>
  );
}
