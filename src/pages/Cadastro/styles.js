import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: auto;
  background-color: #d40054;

  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;

  img {
    width: 150vh;
    height: auto;
    filter: blur(0.2rem);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  .pink-background {
    z-index: +1;
    position: relative;
    background-color: #d40054;
    border-radius: 20px;
    width: 60vh;
  }
`;
