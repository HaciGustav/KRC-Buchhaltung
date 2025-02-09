import css from "@/styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.footer_section}>
          <h2>KRC</h2>
          <p>Buchhaltungskanzlei KG</p>
          <p>
            Großmarktstraße 4,
            <br />
            1230 Wien
          </p>
          <p>
            <a href="tel:+436601743900">+43 660 174 39 00</a>
            <br />

            <a href="mailto:office@krc-k.at">office@krc-k.at</a>
          </p>
        </div>
        <div className={css.footer_section}>
          <h2>ÖFFNUNGSZEITEN</h2>
          <p>
            Mo-Do: 09:00-14:00
            <br />
            Fr: 09:00-12:00
          </p>
        </div>
      </div>
      <div className={css.footer_bottom}>
        <p>© Copyright - KRC Buchhaltung</p>
        <p>
          <a href="/dsvgo">Datenschutz</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
