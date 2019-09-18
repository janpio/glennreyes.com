import styled from 'styled-components';

const Card = styled.div`
  background: ${p => p.theme.colors.cardBg};
  border-radius: ${p => p.theme.radii[2]}px;
  padding: ${p => p.theme.space[3]}px;
  position: relative;
  transition: box-shadow ${p => p.theme.transition};

  &:focus-within,
  &:hover {
    box-shadow: ${p => p.theme.colors.hoverShadow};
  }

  ${p => p.theme.media.tablet`
    padding: ${p.theme.space[5]}px;
  `}
`;

export default Card;
