import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import ms from 'ms';
import React from 'react';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import styled from 'styled-components';
import DefaultHeading from '../components/heading';
import Layout from '../components/layout';
import SEO from '../components/seo';
import DefaultText from '../components/text';

const Cover = styled(Img)`
  height: 100%;
  opacity: 0.5;
`;

const Header = styled.div`
  background: ${p => p.theme.coverBg};
  height: 320px;
  position: relative;
  transition: background ${p => p.theme.transition};
`;

const HeaderContent = styled.div`
  bottom: 0;
  padding: ${p => p.theme.space[3]}px;
  position: absolute;
`;

const Heading = styled(DefaultHeading)`
  color: ${p => p.theme.coverHeading};
  transition: color ${p => p.theme.transition};
`;

const Text = styled(DefaultText)`
  color: ${p => p.theme.coverMeta};
  font-size: ${p => p.theme.fontSizes[0]}px;
  margin-top: ${p => p.theme.space[3]}px;
  transition: color ${p => p.theme.transition};
`;

const Post = ({ data }) => {
  const post = data.mdx;

  return (
    <Layout>
      <SEO description={post.excerpt} title={post.frontmatter.title} />
      <Header>
        <Cover fluid={post.frontmatter.cover.photo.childImageSharp.fluid} />
        <HeaderContent>
          <Heading>{post.frontmatter.title}</Heading>
          <Text>
            {post.frontmatter.date} •{' '}
            {ms(post.timeToRead * 1000 * 60, { long: true })} read
          </Text>
        </HeaderContent>
      </Header>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query Post($id: String!) {
    mdx(id: { eq: $id }) {
      body
      excerpt(pruneLength: 160)
      frontmatter {
        cover {
          photo {
            childImageSharp {
              fluid(maxHeight: 1920, maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          author {
            name
            url
          }
        }
        date(formatString: "MMM DD, YYYY")
        draft
        title
      }
      id
      timeToRead
    }
  }
`;
