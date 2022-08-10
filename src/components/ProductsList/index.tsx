import * as Styled from "./styles";
import { Product } from "../../types";
import ProductCard from "../ProductCard";

interface ProductCardProps {
  list: Product[];
}

const ProductList = ({ list }: ProductCardProps) => {
  return (
    <Styled.Card>
      {list.map((element) => (
        <ProductCard product={element} key={element.id} />
      ))}
    </Styled.Card>
  );
};

export default ProductList;
