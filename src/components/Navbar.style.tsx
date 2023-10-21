import styled from 'styled-components';

export const Container = styled.div`
  .nav-container {
    display: flex;
    position: fixed;
    justify-content: space-between;
    top: 0;
    width: 100%;
    height: 60px;
    padding: 20px;
    z-index: 1;

    transition-timing-function: ease-in;
    transition: all 0.5s;
  }

  .nav-container-black {
    background-color: #111;
  }

  .nav-logo {
    position: fixed;
    left: 20px;
    width: 80px;
    object-fit: contain;
  }

  .nav-avatar {
    position: fixed;
    right: 20px;
    width: 30px;
    object-fit: contain;
  }


`