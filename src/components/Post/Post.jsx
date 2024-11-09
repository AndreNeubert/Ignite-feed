import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="http://github.com/andreneubert.png"
          />
          <div className={styles.authorInfo}>
            <strong>Andre Neubert</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="9 de Novembro às 15:16" dateTime="2024-11-09 15:16:46">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é{" "}
        </p>
        DoctorCare 🚀
        <p>
          👉 <a href="# ">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>{" "}
        </p>
      </div>
    </article>
  );
}
