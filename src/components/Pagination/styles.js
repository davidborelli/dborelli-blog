import styled from "styled-components"
import media from "styled-media-query"

export const PaginationWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  border-top: 1px solid var(--borders);
  color: var(--texts);

  ${media.lessThan("large")`
    font-size: .8rem;
    padding: 1rem;
  `}

  a {
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: var(--highlight);
    }
  }
`
