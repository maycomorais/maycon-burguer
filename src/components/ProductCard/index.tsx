import { Product } from "../../types";
import * as Styled from "./styles";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Styled.Box>
      <img src={product.image} alt={product.name} />
      <div className="nome">{product.name}</div>
      <div className="descricao"> {product.description} </div>
      <div className="preco">
        <span>R$ </span>
        {product.price}
      </div>
      {/* <div className="button">
        <button className="editar">EDITAR</button>
        <button className="deletar">DELETAR</button>
      </div> */}
    </Styled.Box>
  );
};

export default ProductCard;
