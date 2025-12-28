// Os dois topbars que tem no projeto tem uma propriedade interessante
// Quando a pagina ta full scrollada para cima, ele é branco, mas quando eu scrollo um pouco, ele fica com efeito blur
// Esse hook serve para pegar o valor do eixo Y, e então é so fazer a logica no componente para aplicar os efeitos

import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const atualizarPosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", atualizarPosition);
    atualizarPosition();
    return () => window.removeEventListener("scroll", atualizarPosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
