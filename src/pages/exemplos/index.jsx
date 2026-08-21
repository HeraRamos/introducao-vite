import { Link } from "react-router";
import styles from './index.module.css';

export default function Exemplos() {
    return (
        <div className='containerVertical'>
            <h1>Exemplos</h1>
            <div className={styles.cardExemplos}>
                <Link to="/exemplos/1">Exemplo 1</Link>
                <Link to="/exemplos/2">Exemplo 2</Link>
                <Link to="/exemplos/3">Exemplo 3</Link>
                <Link to="/exemplos/4">Exemplo 4</Link>
                <Link to="/exemplos/5">Exemplo 5</Link>
                <Link to="/exemplos/6">Exemplo 6</Link>
                <Link to="/exemplos/7">Exemplo 7</Link>
                <Link to="/exemplos/8">Exemplo 8</Link>
                <Link to="/exemplos/9">Exemplo 9</Link>
                <Link to="/exemplos/10">Exemplo 10</Link>
                <Link to="/exemplos/11">Exemplo 11</Link>
                <Link to="/exemplos/12">Exemplo 12</Link>
                <Link to="/exemplos/13">Exemplo 13</Link>
                <Link to="/exemplos/14">Exemplo 14</Link>
                <Link to="/exemplos/15">Exemplo 15</Link>
            </div>

        </div>
    );
}