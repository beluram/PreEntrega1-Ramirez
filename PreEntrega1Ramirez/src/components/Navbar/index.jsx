import styles from "./navbar.module.css";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className={styles.container}>
        <p>Inicio</p>
        <p>Nuevo!</p>
        <p>Colección</p>
        <p>Contactanos</p>
        <div className ={styles.carrito}>
            <BsFillCartFill />
            <span>0</span>
        </div>
    </nav>
  );
};

export default Navbar;
