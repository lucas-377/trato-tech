import styles from "./Footer.module.scss";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const iconProps = {
  color: "white",
  size: 24,
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <FaFacebook {...iconProps} />
        <FaTwitter {...iconProps} />
        <FaInstagram {...iconProps} />
      </div>

      <span>Desenvolvido por Lucas Santana.</span>
    </footer>
  );
}
