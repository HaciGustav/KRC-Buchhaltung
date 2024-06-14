import styles from "@/styles/header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.header_container}>
        <div
          className={styles.header_parallax}
          style={{ backgroundImage: `url(/assets/header.jpg)` }}
        >
          <div className={styles.header_opacity}>
            <div>
              <h1 className={`${styles.header_title} ${styles.border_effect} `}>
                Professionelle Buchhaltung
              </h1>
              <div className={styles.slogan_wrapper}>
                <h2
                  className={styles.border_effect}
                  // style={{ fontSize: "2rem", fontWeight: "600" }}
                >
                  Pünktlich
                </h2>{" "}
                <span style={{ display: "grid", placeItems: "center" }}>●</span>
                <h2
                  className={styles.border_effect}
                  // style={{ fontSize: "2rem", fontWeight: "600" }}
                >
                  Verlässlich
                </h2>{" "}
                <span style={{ display: "grid", placeItems: "center" }}>●</span>
                <h2
                  className={styles.border_effect}
                  // style={{ fontSize: "2rem", fontWeight: "600" }}
                >
                  Effizient
                </h2>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
