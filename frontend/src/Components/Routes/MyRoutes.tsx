import { Route, Routes } from "react-router-dom"
import {Mouse} from "../../Pages/Mouse";
import {Teclado} from "../../Pages/Teclado";
import {Audifonos} from "../../Pages/Audifonos";
import {Camara} from "../../Pages/Camara";
import {Microfono} from "../../Pages/Microfono";
import {Procesadores} from "../../Pages/Procesadores";
import {Cases} from "../../Pages/Cases";
import {Motherboards} from "../../Pages/Motherboards";
import {CardG} from "../../Pages/CardG";
import {FuentesP} from "../../Pages/FuentesP";
import {SSD} from "../../Pages/SSD";
import {Ram} from "../../Pages/Ram";
import {Laptops} from "../../Pages/Laptops";
import {Monitores} from "../../Pages/Monitores";
import {NotFound} from "../../Pages/NotFound";
import { Mousepad } from "../../Pages/Mousepad";
import { Home } from "../../Pages/Home";
import Resultados from "../../Pages/Resultados";

export const MyRoutes = () => {
  return (
    <Routes>
        <Route path="/mouse" element={<Mouse />} />
        <Route path="/teclado" element={<Teclado />} />
        <Route path="/audifonos" element={<Audifonos />} />
        <Route path="/camara" element={<Camara />} />
        <Route path="/microfono" element={<Microfono />} />
        <Route path="/procesadores" element={<Procesadores />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/motherboards" element={<Motherboards />} />
        <Route path="/cardg" element={<CardG />} />
        <Route path="/fuentesp" element={<FuentesP />} />
        <Route path="/ssd" element={<SSD />} />
        <Route path="/ram" element={<Ram />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/monitores" element={<Monitores />} />
        <Route path="/mousepad" element={<Mousepad />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
