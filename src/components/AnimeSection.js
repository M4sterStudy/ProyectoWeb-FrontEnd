import { useState, useCallback } from "react";
import CategoriaInicio from "./CategoriaInicio";
import PortalPopup from "./PortalPopup";
import "./AnimeSection.css";

const AnimeSection = () => {
  const [isCategoriaInicioOpen, setCategoriaInicioOpen] = useState(false);

  const onFrameButtonClick = useCallback(() => {
    window.open("#");
  }, []);

  const onListaAnimesTextClick = useCallback(() => {
    // Please sync "Lista de animes" to the project
  }, []);

  const openCategoriaInicio = useCallback(() => {
    setCategoriaInicioOpen(true);
  }, []);

  const closeCategoriaInicio = useCallback(() => {
    setCategoriaInicioOpen(false);
  }, []);

  const onInicioSesionClick = useCallback(() => {
    window.open("/login");
  }, []);

  const onRectangle13Click = useCallback(() => {
    // Please sync "Iniciar sesión" to the project
  }, []);

  const onRegistrarseClick = useCallback(() => {
    window.open("/registro");
  }, []);

  return (
    <>
      <div className="animes-destacados-parent">
        <div className="animes-destacados">
          <h3 className="destacados1">Destacados</h3>
          <button className="rectangle-group" onClick={onFrameButtonClick}>
            <div className="rectangle-div" />
            <div className="shingeki-no-kyojin">{` Shingeki no kyojin the final season 4 `}</div>
          </button>
          <div className="rectangle-container">
            <div className="frame-child1" />
            <div className="kimetsu-no-yaiba">kimetsu no yaiba</div>
          </div>
          <div className="frame-div">
            <img className="rectangle-icon" alt="" src="/rectangle-11@2x.png" />
            <div className="frame-child2" />
            <div className="black-clover">Black Clover</div>
          </div>
          <div className="vector-parent">
            <img className="frame-child3" alt="" src="/rectangle-13@2x.png" />
            <div className="frame-child4" />
            <div className="hunter-x-hunter"> Hunter x Hunter</div>
          </div>
          <div className="rectangle-parent1">
            <img
              className="frame-child5"
              id="Img_one_puch"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className="frame-child6" />
            <div className="one-punch-man">One Punch Man</div>
          </div>
        </div>
        <header className="toppage">
          <div className="logo1">
            <h1 className="animes-online4">{`Animes Online. `}</h1>
            <img className="vector-icon3" alt="" src="/vector3.svg" />
          </div>
          <div className="inicio-parent">
            <div className="inicio2">Inicio</div>
            <div className="lista-animes" onClick={onListaAnimesTextClick}>
              Lista animes
            </div>
            <div className="categorias1" onClick={openCategoriaInicio}>
              {" "}
              Categorias
            </div>
          </div>
          <input className="buscar" placeholder="Buscar" type="text" />
          <button className="inicio-sesion" onClick={onInicioSesionClick}>
            <div className="inicio-sesion-child" onClick={onRectangle13Click} />
            <div className="iniciar-sesin">Iniciar sesión</div>
          </button>
          <button className="registrarse" onClick={onRegistrarseClick}>
            <div className="registrarse1">Registrarse</div>
          </button>
        </header>
        <div className="frame-child7" />
      </div>
      {isCategoriaInicioOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCategoriaInicio}
        >
          <CategoriaInicio onClose={closeCategoriaInicio} />
        </PortalPopup>
      )}
    </>
  );
};

export default AnimeSection;
