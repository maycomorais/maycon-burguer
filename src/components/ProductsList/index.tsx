import * as Styled from "./styles";
import B1 from "../../assets/images/brie-burguer.jpg";

const ProductList = () => {
  return (
    <Styled.Card>
      <Styled.Box>
        <img src={B1} alt="" />
        <div className="nome"> Brie Burguer</div>
        <div className="descricao"> INGREDIENTES</div>
        <div className="preco">
          <span>R$ </span>24,90
        </div>
        <div className="button">
          <button className="editar">EDITAR</button>
          <button className="deletar">DELETAR</button>
        </div>
      </Styled.Box>

      <Styled.Box>
        <img src={B1} alt="" />
        <div className="nome"> Brie Burguer</div>
        <div className="descricao"> INGREDIENTES</div>
        <div className="preco">
          <span>R$ </span>24,90
        </div>
        <div className="button">
          <button className="editar">EDITAR</button>
          <button className="deletar">DELETAR</button>
        </div>
      </Styled.Box>

      <Styled.Box>
        <img src={B1} alt="" />
        <div className="nome"> Brie Burguer</div>
        <div className="descricao"> INGREDIENTES</div>
        <div className="preco">
          <span>R$ </span>24,90
        </div>
        <div className="button">
          <button className="editar">EDITAR</button>
          <button className="deletar">DELETAR</button>
        </div>
      </Styled.Box>

      <Styled.Box>
        <img src={B1} alt="" />
        <div className="nome">Brie Burguer</div>
        <div className="descricao"> INGREDIENTES</div>
        <div className="preco">
          <span>R$ </span>24,90
        </div>
        <div className="button">
          <button className="editar">EDITAR</button>
          <button className="deletar">DELETAR</button>
        </div>
      </Styled.Box>

      
    </Styled.Card>
  );
};

export default ProductList;
