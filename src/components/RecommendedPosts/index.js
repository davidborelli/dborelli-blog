import React from 'react'

import * as S from './styles'

const RecommendedPosts = ({ next, previous }) => (
    <S.RecommendedWrapper>
        { previous && (
            <S.RecommendedLink to={previous.fields.slug} className="previous">
                {previous.frontmatter.title}
            </S.RecommendedLink>
        ) }   
        { next && (
            <S.RecommendedLink to={next.fields.slug} className="next">
                {next.frontmatter.title}
            </S.RecommendedLink>
        ) }   
    </S.RecommendedWrapper>
)

export default RecommendedPosts