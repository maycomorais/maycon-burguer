import { DateTime } from "luxon";
import { SearchIcon } from "../../assets/icons";
import Menu from "../../components/Menu";
import ProductList from "../../components/ProductsList";
import { mockedProducts } from "../../mocks";
import { mockedCategories } from "../../mocks";
import { Dispatch, SetStateAction, useState } from "react";
import * as Styled from "./styles";
import { Category, Product } from "../../types";
import OrderDetails from "../../components/OrderDetails";

interface HomeProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Home = ({setLogged}: HomeProps) => {
  const [selectedCategory, setSelectedCategory] = useState(
    mockedCategories[0]
  );

  const filteredProducts: Product[] = mockedProducts.filter(
    (element) => element.categoryId === selectedCategory.id
  );

  const handleChangeCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  const actualDate = DateTime.now();
  const formatedDate = `${actualDate.weekdayShort}, ${actualDate.day} de ${actualDate.monthLong} de ${actualDate.year}`;

  return (
    <Styled.HomeContainer>
      <Menu path="home"  setLogged={setLogged}/>
      <Styled.HomeContentContainer>
        <Styled.HomeContentHeader>
          <Styled.TitleContainer>
            <h1>Maycon Burguer</h1>
            <p>{formatedDate}</p>
          </Styled.TitleContainer>
          <Styled.SearchInputContainer>
            <SearchIcon />
            <input placeholder="Pesquise o Sabor" />
          </Styled.SearchInputContainer>
        </Styled.HomeContentHeader>
        <section>
          <Styled.CategorieNavigatorBar>
            {mockedCategories.map((element) => {
              return (
                <Styled.CategoriesNavigationButton
                  active={element.name === selectedCategory.name}
                  onClick={() => handleChangeCategory(element)}
                >
                  {element.name}
                </Styled.CategoriesNavigationButton>
              );
            })}
          </Styled.CategorieNavigatorBar>
          <Styled.ProductsHeaderContainer>
            <h2>Escolha seu Lanche</h2>
            <Styled.TableSelect defaultValue="">
              <option value="" disabled>
                Selecione a Mesa
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Styled.TableSelect>
          </Styled.ProductsHeaderContainer>
          <ProductList list={filteredProducts} />
        </section>
      </Styled.HomeContentContainer>
      <OrderDetails/>
    </Styled.HomeContainer>
  );
};

export default Home;
