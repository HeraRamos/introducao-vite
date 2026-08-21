import { Link } from "react-router";
import styles from './index.module.css';

export default function Home() {
    return (
        <div className='containerVertical'>
            <h1>Home</h1>
            <div className='containerHorizontal'>
                <Link to="/exemplos" className={styles.cardHome}>Exemplos</Link>
                <Link to="/atividades" className={styles.cardHome}>Atividades</Link>
            </div>
        </div>
    );
}