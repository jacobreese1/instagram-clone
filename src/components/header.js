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
  // const searchPH =
  //   <img className={styles.searchSVG} src={searchSVG} /> + " Search";

  return (
    <div className={styles.header}>
      <div>
        <a href="#">
          <img className={styles.lexicalLogo} alt="Instagram" src={logo} />
        </a>
      </div>
      <div>
        <form>
          <img className={styles.searchSVG} src={searchSVG} />
          <input
            type="text"
            // placeholder={searchPH}
            placeholder="Search"
            className={styles.searchBarInput}
          />
        </form>
      </div>
      <div className={styles.headerSVGs}>
        <a href="home">
          <img src={homeButton} alt="home" />
        </a>
        <a href="messenger">
          <img src={messengerButton} />
        </a>
        <a href="add-content">
          <img src={addContentButton} />
        </a>
        <a href="discover">
          <img src={discoverButton} />
        </a>
        <a href="liked">
          <img src={likedButton} />
        </a>
        <a href="profile">
          <img src={profileButton} />
        </a>
      </div>
    </div>
  );
};

export default Header;
