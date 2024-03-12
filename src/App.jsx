import { Header } from "./components/Header";
import { Items } from "./components/Items";
import { KartContextProvider } from "./store/kart-ctx";
import { Footer } from "./components/Footer";

function App() {
 
  return (
    <KartContextProvider>
      <Header />
      <main>
        <Items />
      </main>
      <Footer />
    </KartContextProvider>
  );
}

export default App;
