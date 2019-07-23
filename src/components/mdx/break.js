import styled from 'styled-components';

const Break = styled.hr`
  background: ${p => p.theme.borderColor};
  border: none;
  height: ${p => p.theme.space[1]}px;
  margin: ${p => p.theme.space[5]}px 0;

  ${p => p.theme.media.tablet`
    margin-bottom: ${p.theme.space[6]}px;
    margin-top: ${p.theme.space[6]}px;
  `}
`;

export default Break;