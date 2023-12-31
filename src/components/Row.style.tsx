import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 20px;
  color: var(--co-font);

  .row-header {
    
  }

  .row-cards {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;
  }

  .row-cards::-webkit-scrollbar {
    display: none;
  }

  .movie-card {
    object-fit: contain;
    width: 100%;
    max-height: 100px;
    margin-bottom: 10px;
    transition: transform 450ms;
  }

  .movie-card:hover {
    transform: scale(1.08);
  }

  .movie-card-large {
    object-fit: contain;
    width: 100%;
    max-height: 250px;
    margin-bottom: 10px;
    transition: transform 450ms;
  }

  .movie-card-large:hover {
    transform: scale(1.08);
  }
`