import styled from "styled-components";

export const CountriesStyled = styled.div`
  .countries__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }

  .filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;
  }

  .search {
    background-color: ${({ theme }) => theme.color.components};
    position: relative;
    width: 300px;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.boxshadow};

    input {
      width: 100%;
      font-size: 14px;
      border: none;
      outline: none;
      background-color: transparent;
      color: ${({ theme }) => theme.color.text1};
      padding: 10px 35px;
    }
  }

  .search__symbol {
    position: absolute;
    left: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .regions {
    width: 160px;

    select {
      width: 100%;
      font-size: 14px;
      color: ${({ theme }) => theme.color.text1};
      padding: 10px 5px;
      background-color: ${({ theme }) => theme.color.components};
      border: none;
      box-shadow: 0px 0px 10px ${({ theme }) => theme.color.boxshadow};
      outline: none;
    }

    option {
      font-size: 12px;
      border: none;
    }
  }

  @media (max-width: 1000px) {
    .countries__cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 700px) {
    .countries__cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 550px) {
    .filters {
      flex-direction: column !important;
      align-items: flex-start;
      gap: 20px;
    }
  }

  @media (max-width: 500px) {
    .countries__cards {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 330px) {
    .search {
      width: 100% !important;
    }
  }
`;
