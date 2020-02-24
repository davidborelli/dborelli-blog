import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import { MainContent } from "../components/styles/base"

const AboutPage = () => (
  <Layout>
    <SEO title="Sobre mim" />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Meu nome é David Borelli, nasci em Birigui cidadezinha do interior de SP
        e atualmente sou Frontend Developer na{" "}
        <a
          href="https://kabum.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          KaBuM! www.kabum.com.br
        </a>
      </p>

      <p>
        Cursei Engenharia da Computação no UniSALESIANO no ano de 2012 à 2017
      </p>

      <p>
        Eu amo trabalhar em equipe e sou bem comunicativo. No meu tempo livre,
        gosto de aprender coisas novas e quando possível também compartilhar,
        acho que por isso nasceu esse blog.
      </p>

      <h2>Habilidades</h2>

      <ul>
        <li>HTML e Template Languages</li>
        <li>Design Responsivo (Mobile First)</li>
        <li>Javascript (Design Patterns, Testes, ES6/7)</li>
        <li>ReactJS / Redux</li>
        <li>Git</li>
        <li>MySQL</li>
        <li>Scrum and Kanban</li>
        <li>O que eu não sei, aprendo rápido =)</li>
      </ul>

      <h2>Contato</h2>

      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais.
      </p>
    </MainContent>
  </Layout>
)

export default AboutPage
