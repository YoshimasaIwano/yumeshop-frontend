import styled from 'styled-components';
import { colors } from './Tokens';

export const TokenTest = styled.div`
  background: ${colors.YumeGreen};
`;

export const Container = styled.div`
`;

export const Main = styled.main`
  background: ${colors.YumeWhiteGreen};
  min-height: 100vh;
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
`;
