import { DateTime } from "luxon";
import { SearchIcon } from "../../assets/icons";
import Menu from "../../components/Menu";
import ProductList from "../../components/ProductsList";
import * as Styled from "./styles";

const Home = () => {
  const actualDate = DateTime.now();
  const formatedDate = `${actualDate.weekdayShort}, ${actualDate.day} de ${actualDate.monthLong} de ${actualDate.year}`;

  return (
    <Styled.HomeContainer>
      <Menu path="home" />
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
            <Styled.CategoriesNavigationButton active>
              Lanches
            </Styled.CategoriesNavigationButton>
            <Styled.CategoriesNavigationButton>
              Porções
            </Styled.CategoriesNavigationButton>
            <Styled.CategoriesNavigationButton>
              Sobremesas
            </Styled.CategoriesNavigationButton>
            <Styled.CategoriesNavigationButton>
              Bebidas
            </Styled.CategoriesNavigationButton>
          </Styled.CategorieNavigatorBar>
          <Styled.ProductsHeaderContainer>
            <h2>Escolha seu Lanche</h2>
            <Styled.TableSelect defaultValue="">
              <option value="" disabled>Selecione a Mesa</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Styled.TableSelect>
          </Styled.ProductsHeaderContainer>
          <ProductList/>
        </section>
      </Styled.HomeContentContainer>
      <aside>
        <header>
          <h2>Pedido #12</h2>
          <div>
            <button>Comer no Local</button>
            <button>P/ Viagem</button>
            <button>Delivery</button>
          </div>
          <div>
            <h3>Item</h3>
            <h3>Qtd</h3>
            <h3>Preço</h3>
          </div>
          <div className="checkout-card-container">
            <div>Card Checkout</div>
            <div>Card Checkout</div>
            <div>Card Checkout</div>
          </div>
          <div>
            <div>
              <p>Desconto</p>
              <p>R$ 0,00</p>
            </div>
            <div>
              <p>Sub-Total</p>
              <p>R$ 0,00</p>
            </div>
            <button>Continuar para o Pagamento</button>
          </div>
        </header>
        <div></div>
        <div></div>
      </aside>
    </Styled.HomeContainer>
  );
};

export default Home;
