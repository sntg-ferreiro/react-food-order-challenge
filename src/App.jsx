import { Header } from "./components/Header";
import { Items } from "./components/Items";
import Modal  from "./components/Modal";

function App() {
  return (
    <>
      <Header/>
      <main>
        <Items/>
      </main>
      <Modal open={false}>Modal</Modal>
    </>
  );
}

export default App;
