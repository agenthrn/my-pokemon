import { css, cx } from "@emotion/css";

export const Navbar = css`
  position: sticky;
  top: 0;
  width: 100%;
`;

export const Menu = css`
  list-style-type: none;
  margin: 0;
  padding: 0 10px 0 10px;
  overflow: hidden;
  background-color: rgb(243, 244, 245);
  border-bottom: 1px solid rgb(243, 243, 243);
  box-shadow: rgb(0 0 0 / 7%) 0px 4px 6px -1px;
`;

export const MenuItem = css`
  float: right;
`;

export const AppName = css`
  float: left;
`;

export const Body = css`
  max-width: 900px;
  margin: 0 auto;
  padding: 10px;
`;

export const Heading = css`
  color: #03ac0e;
  font-size: 20px;
`;

export const SubHeading = css`
  color: #03ac0e;
  font-size: 16px;
`;

export const MenuLink = css`
  display: block;
  color: rgba(49, 53, 59, 0.68);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    color: #03ac0e;
  }
`;

export const Loader = css`
  background-image: url("/loading.gif");
  width: 60px;
  height: 60px;
  margin: 0 auto;
`;

export const PokeList = css`
  display: grid;
  margin: 0 0 48px 0;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  gap: 8px;
`;

export const PokeCard = css`
  background-color: #ffffff;
  border: 1px solid rgb(224, 224, 224);
  border-radius:8px;
  max-width: 500px;
  height:250px:
  margin: 0 0 16px 0;
  &:hover {
    background-color: rgb(243, 244, 245);
  }
`;

export const PokeCardTitle = css`
  display: block;
  font-size: 16px;
  color: #03ac0e;
  text-decoration: none;
`;

export const Button = css`
  height: 48px;
  color: #03ac0e;
  background-color: #ffffff;
  border: 1px solid #03ac0e;
  border-radius: 8px;
  padding: 0px 16px;
  font-weight: 600;
  font-size: 16px;
  &:hover {
    border: 0;
    background-color: #03ac0e;
    color: #ffffff;
  }
`;

export const Tag = css`
  color: #03ac0e;
  background-color: #ffffff;
  border: 1px solid #03ac0e;
  border-radius: 16px;
  margin: 0 5px 5px 0;
  padding: 5px;
  font-size: 11px;
`;

export const PokeDetailSection = css`
  display: grid;
  margin: 0 0 48px 0;
  grid-template-columns: repeat(1, 1fr);
  text-align: left;
  justify-content: center;
  align-items: center;
  @media (min-width: 550px) {
    grid-template-columns: 1fr 2fr;
  }
  gap: 8px;
`;

export const TagFlex = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Sprites = css`
  width: 100px;
  @media (min-width: 300px) {
    width: 300px;
  }
`;
