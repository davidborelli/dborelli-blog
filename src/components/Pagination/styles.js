import styled from "styled-components"

export const PaginationWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  border-top: 1px solid var(--borders);
  color: var(--texts);

  a {
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: var(--highlight);
    }
  }
`
