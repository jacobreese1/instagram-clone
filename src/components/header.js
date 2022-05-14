import styles from "./Header.module.css";
import logo from "../design/images/insta_lexical_logo.png";

const Header = () => {
  return (
    <div>
      <div>
        <img className={styles.lexicalLogo} alt="Instagram" src={logo} />
      </div>
      <div>
        <form>
          <input
            type="text"
            placeholder="Search"
            className={styles.searchBarInput}
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
