import { Routes, Route } from 'react-router-dom';

import Home from './pages/home'; 

import Atividades from './pages/atividades';
import Atividade01 from './pages/atividades/atv-01';
import Atividade02 from './pages/atividades/atv-02';
import Atividade03 from './pages/atividades/atv-03';
import Atividade04 from './pages/atividades/atv-04'; 
import Atividade05 from './pages/atividades/atv-05';
import Atividade06 from './pages/atividades/atv-06';
import Atividade07 from './pages/atividades/atv-07';
import Atividade08 from './pages/atividades/atv-08'; 
import Atividade09 from './pages/atividades/atv-09';
import Atividade10 from './pages/atividades/atv-10';

import Exemplos from './pages/exemplos';
import Exemplo01 from './pages/exemplos/ex-01';
import Exemplo02 from './pages/exemplos/ex-02';
import Exemplo03 from './pages/exemplos/ex-03';
import Exemplo04 from './pages/exemplos/ex-04';
import Exemplo05 from './pages/exemplos/ex-05';
import Exemplo06 from './pages/exemplos/ex-06';
import Exemplo07 from './pages/exemplos/ex-07';
import Exemplo08 from './pages/exemplos/ex-08';
import Exemplo09 from './pages/exemplos/ex-09';
import Exemplo10 from './pages/exemplos/ex-10';
import Exemplo11 from './pages/exemplos/ex-11';
import Exemplo12 from './pages/exemplos/ex-12';
import Exemplo13 from './pages/exemplos/ex-13';
import Exemplo14 from './pages/exemplos/ex-14';
import Exemplo15 from './pages/exemplos/ex-15';


function App() {

  return (
  <Routes>
    
    <Route path="/" element={<Home />} />

    <Route path="/atividades" element={<Atividades />} />
    <Route path="/atividades/1" element={<Atividade01 />} />
    <Route path="/atividades/2" element={<Atividade02 />} />
    <Route path="/atividades/3" element={<Atividade03 />} />
    <Route path="/atividades/4" element={<Atividade04 />} />
    <Route path="/atividades/5" element={<Atividade05 />} />
    <Route path="/atividades/6" element={<Atividade06 />} />
    <Route path="/atividades/7" element={<Atividade07 />} />
    <Route path="/atividades/8" element={<Atividade08 />} />
    <Route path="/atividades/9" element={<Atividade09 />} />
    <Route path="/atividades/10" element={<Atividade10 />} />

    <Route path="/exemplos" element={<Exemplos />} />
    <Route path="/exemplos/1" element={<Exemplo01 />} />
    <Route path="/exemplos/2" element={<Exemplo02 />} />
    <Route path="/exemplos/3" element={<Exemplo03 />} />
    <Route path="/exemplos/4" element={<Exemplo04 />} />
    <Route path="/exemplos/5" element={<Exemplo05 />} />
    <Route path="/exemplos/6" element={<Exemplo06 />} />
    <Route path="/exemplos/7" element={<Exemplo07 />} />
    <Route path="/exemplos/8" element={<Exemplo08 />} />
    <Route path="/exemplos/9" element={<Exemplo09 />} />
    <Route path="/exemplos/10" element={<Exemplo10 />} />
    <Route path="/exemplos/11" element={<Exemplo11 />} />
    <Route path="/exemplos/12" element={<Exemplo12 />} />
    <Route path="/exemplos/13" element={<Exemplo13 />} />
    <Route path="/exemplos/14" element={<Exemplo14 />} />
    <Route path="/exemplos/15" element={<Exemplo15 />} />


  </Routes>
  )
}

export default App;