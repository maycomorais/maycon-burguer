import styled from "styled-components";

export const Card = styled.div`
  border-radius: 6px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 350px;
  margin: 15px;
  transition: all 0.3s ease;

  :hover {
    transform: scale(1.05);
  }

  img {
    height: 80%;
    width: 100%;
    object-fit: cover;
    background: var(--cor3);
    opacity: 0.9;
    border-radius: 10px 10px 0 0;
  }

  :hover img {
    opacity: 1;
  }

  .nome {
    font-family: sans-serif;
    font-size: 40px;
    text-shadow: 1px 2px 2px rgba(10, 4, 3, 0.9);
    position: absolute;
    transition: all 0.3s ease;
    max-width: 300px;
    text-align: center;
    font-weight: 200;
    color: wheat;
    font-family: "lobster", cursive;
  }

  :hover .nome {
    opacity: 0;
  }

  .descricao {
    display: flex;
    margin-top: 150px;
    margin-bottom: 35px;
    flex-direction: row;
    font-size: 20px;
    position: absolute;
    font-family: sans-serif;
    font-weight: lighter;
    max-width: 300px;
    text-align: center;
    text-shadow: 1px 2px 2px rgba(10, 4, 3, 0.9);
    transition: all 0.3s ease;
    color: wheat;
    font-family: "Bebas Neue", cursive;
  }

  :hover .descricao {
    opacity: 0;
  }

  .preco {
    position: fixed;
    opacity: 0;
    transition: all 0.8s ease;
    font-family: "Lobster", cursive;
    color: wheat;
  }

  :hover .preco {
    opacity: 1;
    text-shadow: 1px 2px 2px rgba(10, 4, 3, 0.94);
    font-size: 70px;
  }

  .preco span {
    font-family: "Lobster", cursive;
    color: #970000;
  }

  :hover .preco span {
    opacity: 1;
    font-size: 70px;
  }

  .button {
    display: flex;
    font-size: 20px;
    justify-content: space-between;
    align-self: flex-end;
    position: absolute;
    height: 32px;
    width: 350px;
  }

  .editar {
    display: flex;
    color: white;
    font-size: 25px;
    align-items: center;
    justify-content: center;
    background: orangered;
    height: 30px;
    width: 50%;
    border: none;
    text-shadow: 1px 2px 2px rgba(10, 4, 3, 0.94);
    transition: all 0.3s ease;
    border-right: 1px solid #222;
    border-radius: 0 0 0px 10px;
    cursor: pointer;
    font-family: "Big Shoulders Inline Display", cursive;
  }

  .editar:hover {
    background: #222;
    color: orange;
    height: 100%;
  }

  .deletar {
    display: flex;
    color: white;
    font-size: 25px;
    align-items: center;
    justify-content: center;
    background: #970000;
    height: 30px;
    width: 50%;
    border: none;
    text-shadow: 1px 2px 2px rgba(10, 4, 3, 0.94);
    transition: all 0.8s ease;
    border-radius: 0 0 10px 0px;
    cursor: pointer;
    font-family: "Big Shoulders Inline Display", cursive;
  }

  .deletar:hover {
    background: #222;
    color: orange;
    height: 100%;
  }
`;
