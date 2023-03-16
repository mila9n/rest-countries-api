import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: ${({ theme }) => theme.color.components};
  box-shadow: 0px 0px 10px ${({ theme }) => theme.color.boxshadow};
  padding: 15px 0;

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 24px;
    }

    span {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 14px;
      font-weight: 400;
      justify-content: space-between;
      cursor: pointer;
    }
  }

  @media (max-width: 500px) {
    h2 {
      font-size: 22px !important;
    }

    .text {
      display: none !important;
    }
  }
`;
