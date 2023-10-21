import styled from 'styled-components';

export const Container = styled.div`
  color: var(--co-font);

  .banner-container {
    object-fit: contain;
    height: 448px;
  }

  .banner-content {
    margin-left: 30px;
    padding-top: 140px;
    height: 190px;
  }

  .banner-title {
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
  }

  .banner-description {
    width: 45rem;
    line-height: 1.3rem;
    padding-top: 1rem;
    font-size: 0.8rem;
    max-width: 360px;
    height: 80px;
  }

  .banner-button-container {
    display: flex;
    margin-top: 0.8rem;
  }

  .banner-button {
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-left: 1rem;
    padding-top: 0.5rem;
    background-color: rgba(51, 51, 51, 0.5);
    padding-bottom: 0.5rem;
  }

  .banner-button:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`