import styled from "styled-components";

export const SearchBarStyle = styled.div`
  & {
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

  .searchedList {
    position: absolute;
    background-color: ${({ theme }) => theme.color.components};
    box-shadow: 0 0 10px ${({ theme }) => theme.color.boxshadow};
    width: 100%;
    height: 230px;
    left: 0;
    top: 45px;
    overflow: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    & > div {
      padding: 10px 10px;
      cursor: pointer;
      display: flex;
      gap: 15px;
      font-size: 16px;

      &:hover {
        background-color: ${({ theme }) => theme.color.oppositeBg};
        color: ${({ theme }) => theme.color.oppositeTxt};
      }

      img {
        width: 40px;
      }
    }
  }
`;
