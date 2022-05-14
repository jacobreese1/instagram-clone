import styles from "./Header.module.css";
import logo from "../design/images/insta_lexical_logo.png";
import homeButton from "../design/images/svgs/home_dark_filled.svg";
import messengerButton from "../design/images/svgs/messenger_empty.svg";
import addContentButton from "../design/images/svgs/add_content.svg";
import discoverButton from "../design/images/svgs/discover.svg";
import likedButton from "../design/images/svgs/heart_dark_empty.svg";
import profileButton from "../design/images/svgs/circle.svg";
import searchSVG from "../design/images/svgs/search_light.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <img className={styles.lexicalLogo} alt="Instagram" src={logo} />
      </div>
      <div>
        <img className={styles.searchSVG} src={searchSVG} />
        <form>
          <input
            type="text"
            placeholder="Search"
            className={styles.searchBarInput}
          />
        </form>
      </div>
      <div className={styles.headerSVGs}>
        <img src={homeButton} />
        <img src={messengerButton} />
        <img src={addContentButton} />
        <img src={discoverButton} />
        <img src={likedButton} />
        <img src={profileButton} />
      </div>
    </div>
  );
};

export default Header;
