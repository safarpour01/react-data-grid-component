import styled from "@emotion/styled";

const Styles = styled.span`
  .main-container {
    position: relative;
    display: flex;

    .check-boxes-container {
      min-width: 200px;
      position: absolute;
      top: 45px;
      z-index: 998;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      border-radius: 8px;
    }
  }
`;

export default Styles;
