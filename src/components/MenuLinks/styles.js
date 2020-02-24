import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan("large")`
    display: none;
  `}
`

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  transition: color 0.45s;
  will-change: color;

  position: relative;
  will-change: transform;

  &:not(:first-child) {
    margin-top: 0.3rem;
  }

  &:after {
    background-color: var(--highlight-border);
    content: "";
    height: 2px;
    left: 0;
    margin-top: -0.1rem;
    position: absolute;
    top: 100%;
    transform: scaleX(0);
    transition: transform 0.45s;
    width: 100%;
  }

  &:hover {
    &:after {
      transform: scaleX(1);
    }
  }

  &:focus,
  &:hover {
    color: var(--highlight-border);
  }

  .active {
    color: var(--highlight);
  }
`

export const MenuLinksLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
`
