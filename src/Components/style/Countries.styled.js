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
      cursor: pointer;
    }

    option {
      font-size: 12px;
      border: none;
    }
  }

  .pagination {
    width: 100%;
    margin: 70px auto;
    padding: 0 0 70px;
  }

  .paginationButtons {
    display: flex;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    list-style-type: none;
  }

  .paginationButtons a {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.color.components};
    color: ${({ theme }) => theme.color.text1};
    box-shadow: 1px 1px 10px ${({ theme }) => theme.color.boxshadow};
    cursor: pointer;
  }

  .activeButton a {
    background-color: ${({ theme }) => theme.color.oppositeBg};
    color: ${({ theme }) => theme.color.oppositeTxt};
  }

  .paginationButtons a:hover {
    background-color: ${({ theme }) => theme.color.oppositeBg};
    color: ${({ theme }) => theme.color.oppositeTxt};
  }

  .breakButton a {
    border: none;
  }

  @media (max-width: 1000px) {
    .countries__cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 850px) {
    .paginationButtons a {
      width: 40px;
      height: 40px;
      font-size: 14px;
      flex-wrap: wrap;
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
