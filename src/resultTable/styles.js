import styled from "@emotion/styled";

const Styles = styled.span`
  /* width */
  .table-container::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  /* Track */
  .table-container::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  .table-container::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  .table-container::-webkit-scrollbar-thumb:hover {
    background: #555;
    border-radius: 5px;
  }
`;

export default Styles;
