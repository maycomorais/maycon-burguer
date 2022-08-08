const Home = () => {
  return (
    <div>
      <div className="Menu">
        <img src="" alt="Logo" />
        <img src="" alt="Home" />
        <img src="" alt="Settings" />
        <img src="" alt="Logout" />        
      </div>
      <div className="home-content">
        <header>
            <div>
                <h1>Maycon Burguer</h1>
                <p>{new Date(Date.now()).toLocaleString()}</p>
            </div>
            <div>
                <img src="" alt="search-icon" />
                <input type="text" />
            </div>
        </header>
        <section>
            <div>
                <p>Lanches</p>
            </div>
            <div>
                <h2>Escolha seu Lanche</h2>
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <div className="list">
                <div>Card</div>
                <div>Card</div>
                <div>Card</div>
                <div>Card</div>
                <div>Card</div>
                <div>Card</div>
                <div>Card</div>
            </div>
        </section>
      </div>
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
    </div>
  );
};

export default Home;
