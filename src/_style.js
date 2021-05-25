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
  margin: 30px auto;
  padding: 10px;
`;

export const Heading = css`
  color: #03ac0e;
  font-size: 20px;
`;

export const SubHeading = css`
  color: rgb(49, 53, 59, 0.96);
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
  height:300px:
  padding: 10px;
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
  margin: 0 5px;
  &:hover {
    border: 0;
    background-color: #03ac0e;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const DeleteButton = css`
  height: 48px;
  color: rgb(239, 20, 74);;
  background-color: #ffffff;
  border: 1px solid rgb(239, 20, 74);
  border-radius: 8px;
  padding: 0px 16px;
  font-weight: 600;
  font-size: 16px;
  margin: 10px;
  &:hover {
    border: 0;
    background-color: rgb(239, 20, 74);
    color: #ffffff;
    cursor: pointer;
  }
`;

export const SmallDeleteButton = css`
  height: 24px;
  color: rgb(239, 20, 74);;
  background-color: #ffffff;
  border: 1px solid rgb(239, 20, 74);
  border-radius: 8px;
  padding: 0px 16px;
  font-weight: 600;
  font-size: 12px;
  margin: 10px;
  &:hover {
    border: 0;
    background-color: rgb(239, 20, 74);
    color: #ffffff;
    cursor: pointer;
  }
`;

export const CatchButton = css`
  height: 48px;
  color: #03ac0e;
  background-color: #ffffff;
  border: 1px solid #03ac0e;
  border-radius: 8px;
  padding: 0px 16px;
  font-weight: 600;
  font-size: 16px;
  position: sticky;
  bottom: 10px;
  &:hover {
    border: 0;
    background-color: #03ac0e;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const Tag = css`
  background-color: #d6ffde;
  border-radius: 3px;
  color: #03ac0e;
  margin: 0 5px 5px 0;
  padding: 5px;
  font-size: 11px;
  font-weight: bold;
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
  margin: 0 auto;
  @media (min-width: 400px) {
    width: 300px;
  }
`;

export const ModalBlock = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: block;
`;

export const ModalNone = css`
  display: none;
`;

export const ModalMain = css`
  position: fixed;
  background: white;
  max-width: 600px;
  height: auto;
  padding: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Input = css`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const PokemonCardImage = css`
  width: 150px;
  height: 150px;
`;
