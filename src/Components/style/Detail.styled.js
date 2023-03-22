import styled from "styled-components";

export const DetailStyle = styled.div`
  .back__button {
    margin: 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    padding: 5px 20px;
    background-color: ${({ theme }) => theme.color.components};
    color: ${({ theme }) => theme.color.text1};
    font-size: 16px;
    border: none;
    box-shadow: 0px 0px 10px ${({ theme }) => theme.color.boxshadow};
    cursor: pointer;
  }

  .details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 80px;
    row-gap: 40px;
    margin: 20px 0;
    padding: 30px 0;

    img {
      width: 100%;
    }

    & > div:nth-of-type(2) {
      display: flex;
      width: 100%;
      align-items: center;

      & > div {
        width: 100%;
      }
    }
  }

  h2 {
    font-size: 26px;
    margin-bottom: 20px;
  }

  .sub__info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    p {
      font-size: 14px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      column-gap: 3px;
    }
  }

  .border {
    font-size: 14px;
    margin-top: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .border-countries {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 70%;
    padding: 0 10px;
  }
  .border-country {
    box-shadow: 1px 1px 10px ${({ theme }) => theme.color.boxshadow};
    font-size: 12px;
    background-color: ${({ theme }) => theme.color.components};
    padding: 2px 15px;
  }

  .text2 {
    color: ${({ theme }) => theme.color.text2};
  }

  @media (max-width: 900px) {
    .details {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 500px) {
    .sub__info {
      grid-template-columns: repeat(1, 1fr);
    }

    .border {
      margin-top: 30px;
    }
  }
`;
