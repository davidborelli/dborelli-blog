import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const PostItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;

  body#grid & {
    background-color: var(--background);
    height: 100%;
  }
`

export const PostItemWrapper = styled.section`
  display: flex;
  width: 100%;
`

export const BoxHandle = styled.article`
  border: 1px solid var(--borders);
  border-radius: 2px;
  box-shadow: 0 1px 3px var(--borders);
  color: var(--texts);
  display: flex;
  width: 100%;
  align-items: center;
  padding: 1.6rem;
  position: relative;
  will-change: border-color;

  &:after,
  &:before {
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: transform 0.45s;
  }

  &:before {
    border-left: 1px solid var(--highlight-border);
    border-right: 1px solid var(--highlight-border);
    transform: scaleY(0);
  }

  &:after {
    border-bottom: 1px solid var(--highlight-border);
    border-top: 1px solid var(--highlight-border);
    transform: scaleX(0);
  }

  &:hover {
    &:before {
      transform: scaleY(1);
    }

    &:after {
      transform: scaleX(1);
    }
  }

  body#grid & {
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }

  ${media.lessThan("large")`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`

export const PostItemTag = styled.div`
  display: flex;
  align-items: center;
  background: ${props => props.background || "var(--highlight)"};
  border-radius: 50%;
  color: var(--postColor);
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-width: 90px;
  min-height: 90px;
  text-transform: uppercase;

  ${media.lessThan("large")`
    border-radius: 0;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: .7rem;
  `}

  body#grid & {
    margin-bottom: 1.5rem;
  }
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan("large")`
    margin: 0;
  `}
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5 rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
