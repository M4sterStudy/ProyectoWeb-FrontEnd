import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CategoriaInicio.css";

const CategoriaInicio = () => {
  const navigate = useNavigate();

  const onCategoria1Click = useCallback(() => {
    // Please sync "Categoria x" to the project
  }, []);

  const onCategoria2Click = useCallback(() => {
    // Please sync "Categoria x" to the project
  }, []);

  const onCategoria3Click = useCallback(() => {
    // Please sync "Categoria x" to the project
  }, []);

  const onCategoria4Click = useCallback(() => {
    // Please sync "Categoria x" to the project
  }, []);

  const onBotonRegresarDeFlechaClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="categoria-inicio">
      <div className="categoria-grup">
        <div className="fondo-categorias" />
        <div className="categoria-1" onClick={onCategoria1Click} />
        <div className="categoria-2" onClick={onCategoria2Click} />
        <div className="categoria-21">Categoria 2</div>
        <div className="categoria-3" onClick={onCategoria3Click} />
        <div className="categoria-31">Categoria 3</div>
        <div className="categoria-4" onClick={onCategoria4Click} />
        <div className="categoria-41">Categoria 4</div>
        <div className="categoria-11">Categoria 1</div>
        <img
          className="boton-regresar-de-flecha"
          alt=""
          src="/boton-regresar-de-flecha.svg"
          onClick={onBotonRegresarDeFlechaClick}
        />
      </div>
    </div>
  );
};

export default CategoriaInicio;
