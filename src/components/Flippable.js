import styled from "styled-components";

const Flippable = styled.div`
  padding: 10px;
  border-radius: 2px;
  background: #cfe;
  margin-bottom: 10px;
  top: 0;
  left: 0;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #eaeaea;
  }

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
