import { Link } from "react-router-dom";
import styles from './index.module.css';

export default function Atividades () {
    return (
        <div className='containerVertical'>
            <h1>Atividades</h1>
            <div className={styles.cardExemplos}>
                <Link to="/atividades/1">Atividade 1</Link>  
                <Link to="/atividades/2">Atividade 2</Link>  
                <Link to="/atividades/3">Atividade 3</Link>  
                <Link to="/atividades/4">Atividade 4</Link>  
                <Link to="/atividades/5">Atividade 5</Link>  
                <Link to="/atividades/6">Atividade 6</Link>  
                <Link to="/atividades/7">Atividade 7</Link>  
                <Link to="/atividades/8">Atividade 8</Link>  
                <Link to="/atividades/9">Atividade 9</Link>  
                <Link to="/atividades/10">Atividade 10</Link>  
            </div>            
        </div>
    );
}
