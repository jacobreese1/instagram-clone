import styles from "./App.module.css";
import Header from "./components/Header";
import Card from "./ui/Card";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Card>
        <div>
          <p>"Hola mis amigos"</p>
        </div>
      </Card>
    </div>
  );
}

export default App;
