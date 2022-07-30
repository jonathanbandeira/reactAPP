import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contato from "./Contato";
import Leiaute from "./Leiaute";
import NotFound from "./NotFound";
import Principal from "./Principal";

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Leiaute />}>
          <Route index element={<Principal />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Rotas;
