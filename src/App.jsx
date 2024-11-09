import { Post } from "./Post"
import { Header } from "./components/Header/Header"

import './global.css'

export function App() {
  return (
    <div>
      <Header />
  <Post 
    author="André Neubert" 
    content="Minha namorada é a melhor pessoa do planeta Terra!!"
  />
  <Post 
    author="Maria Eduarda"
    content="Mais conhecida como Lovitica"
  />
  </div>
    )   
}


