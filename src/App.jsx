import { Header } from "./components/Header";
import { Items } from "./components/Items";
import { KartContextProvider } from "./store/kart-ctx";
import { Footer } from "./components/Footer";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";
import { OrdersView } from "./components/OrdersView";

function App() {
  return (
    <KartContextProvider>
      <UserProgressContextProvider>
        <Cart />
        <Header />
        <main>
          <Items />
        </main>
        <Footer />
        <Checkout />
        <OrdersView />
      </UserProgressContextProvider>
    </KartContextProvider>
  );
}

export default App;
