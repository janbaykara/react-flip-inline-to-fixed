import styled from "styled-components";

const Flippable = styled.div`
  padding: 10px;
  border-radius: 2px;
  background: #eee;
  margin-bottom: 10px;
  top: 0;
  left: 0;

  ${({ theme }) =>
    theme === "expanded"
      ? `
    position: fixed;
    top: 0;
    left: 0;
    width: 90%;
    height: 90%;
    margin: 20px;
  `
      : `
    position: relative;
  `};
`;

export default Flippable;
