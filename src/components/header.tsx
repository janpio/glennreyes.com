import { graphql, useStaticQuery } from 'gatsby';
import { rgba } from 'polished';
import React from 'react';
import styled from 'styled-components';
import DarkModeButton from './dark-mode-button';
import Link from './link';
import Menu from './menu';
import MenuButton from './menu-button';
import MenuToggleContext from './menu-toggle-context';
import useScrollThreshold from '../hooks/useScrollThreshold';
import { HeaderQuery } from '../types/generated/graphql';

const Wrapper = styled.header<{
  isScrollThreshold: boolean;
  isMenuOpen: boolean;
}>`
  background: ${p => rgba(p.theme.colors.headerBg, 0.95)};
  box-shadow: ${p => p.theme.shadows.dark};
  display: flex;
  height: ${p => p.theme.space[6]}px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  transition: box-shadow ${p => p.theme.transition},
    height ${p => p.theme.transition};
  width: 100%;
  z-index: 10;

  ${p => p.theme.media.desktop`
    background: ${
      p.isScrollThreshold || p.isMenuOpen
        ? p.theme.colors.headerBg
        : rgba(p.theme.colors.headerBg, 0.95)
    };
    box-shadow: ${p.isScrollThreshold ? 'none' : `${p.theme.shadows.dark}`};
    height: ${p.isScrollThreshold ? p.theme.space[7] : p.theme.space[6]}px;
  `}
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 0 ${p => p.theme.space[0]}px;

  ${p => p.theme.media.tablet`
    padding: 0 ${p.theme.space[2] + p.theme.space[0]}px;
  `};
`;

const TitleLink = styled(Link)`
  align-items: center;
  color: ${p => p.theme.colors.text};
  display: inline-flex;
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.bolder};
  height: ${p => p.theme.space[5]}px;
  line-height: ${p => p.theme.lineHeights.heading};
  padding: 0 ${p => p.theme.space[0] + p.theme.space[1]}px;
  text-align: center;

  ${p => p.theme.media.desktop`
    font-size: ${p.theme.fontSizes[3]}px;
  `}
`;

const FlexItem = styled.div`
  ${p => p.theme.media.desktop`
    flex: 1 1 0;
  `}
`;

type HeaderProps = {
  path?: string;
};

const Header = ({ path }: HeaderProps) => {
  const { site }: HeaderQuery = useStaticQuery(graphql`
    query Header {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const title = (site && site.siteMetadata && site.siteMetadata.title) || null;
  const { isOpen, close } = React.useContext(MenuToggleContext);
  const isScrollThreshold = useScrollThreshold(64);

  const handleTitleLinkClick = (event: React.MouseEvent) => {
    if (path === '/') {
      event.preventDefault();
      window.scrollTo({ behavior: 'smooth', top: 0 });
    }

    close();
  };

  return (
    <Wrapper isScrollThreshold={isScrollThreshold} isMenuOpen={isOpen}>
      <Container>
        <MenuButton />
        {title && (
          <FlexItem>
            <TitleLink onClick={handleTitleLinkClick} to="/">
              {title}
            </TitleLink>
          </FlexItem>
        )}
        <Menu />
        <FlexItem>
          <DarkModeButton />
        </FlexItem>
      </Container>
    </Wrapper>
  );
};

export default Header;
