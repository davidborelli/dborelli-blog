import React, { useState, useEffect } from "react"

import { Home } from "styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"
import { LightbulbFlash as Light } from "styled-icons/remix-line/LightbulbFlash"
import { Grid } from "styled-icons/boxicons-solid/Grid"
import { List } from "styled-icons/fa-solid/List"

import * as S from "./styles"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === "dark"
  const isListMode = display === "list"

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onDisplayChange = () => setDisplay(window.__display)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink to="/" activeClassName="active" title="Voltar para home">
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink to="/search" activeClassName="active" title="Pesquisar">
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>

      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")
          }}
          className={theme}
        >
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Mudar a visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir para o topo">
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
