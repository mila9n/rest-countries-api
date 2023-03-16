import styled from "styled-components";

export const CountryCardStyle = styled.div`
  background-color: ${({ theme }) => theme.color.components};
  box-shadow: 0px 1px 10px ${({ theme }) => theme.color.boxshadow};
  cursor: pointer;

  img {
    /* height: 160px; */
    width: 100%;
  }

  .info {
    padding: 15px;
    h3 {
      font-size: 16px;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      font-weight: 300;
      margin-bottom: 2px;
    }

    span {
      color: ${({ theme }) => theme.color.text2};
      font-size: 13px;
    }
  }
`;
