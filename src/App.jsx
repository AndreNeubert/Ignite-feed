import { Post } from "./Post";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="André Neubert"
            content="Minha namorada é a melhor pessoa do planeta Terra!!"
          />
          <Post author="Maria Eduarda" content="Mais conhecida como Lovitica" />
        </main>
      </div>
    </div>
  );
}
