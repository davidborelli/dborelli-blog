import React from "react"

import * as S from "./styles"

const PostItem = () => (
  <S.PostItemLink to="/slug">
    <S.PostItemWrapper>
      <S.PostItemTag background="#47650b">JS</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          10 de Fevereiro de 2020 • 2 min de leitura
        </S.PostItemDate>
        <S.PostItemTitle>
          Diga não ao Medium: Tennha sua própria plataforma
        </S.PostItemTitle>
        <S.PostItemDescription>
          Algumas razões para você ter sua própria plataforma ao invés de
          soluções como o Medium.
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
