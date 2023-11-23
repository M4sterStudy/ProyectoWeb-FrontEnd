import Footer from "../components/Footer";
import CardContainer from "../components/CardContainer";
import AnimeSection from "../components/AnimeSection";
import "./Inicio.css";

const Inicio = () => {
  return (
    <div className="inicio">
      <Footer />
      <main className="frame">
        <section className="frame-parent">
          <div className="episodios-nuevos-wrapper">
            <div className="episodios-nuevos">
              <button className="ver-mais">
                <h3 className="ver-ms">Ver más</h3>
              </button>
              <CardContainer
                episodeImageUrl="/rectangle-4@2x.png"
                episodeTitle="Shakunetsu Kabaddi - Episódio 11 Online"
                subtitleImageUrl="Subtitulado"
              />
              <CardContainer
                episodeImageUrl="/rectangle-41@2x.png"
                episodeTitle=" Cardfight Vanguard overDress - Episódio 10 "
                subtitleImageUrl="Subtitulado"
                propLeft="631px"
                propTop="80px"
                propLeft1="21px"
                propWidth="unset"
                propWidth1="146px"
                propLeft2="30px"
              />
              <CardContainer
                episodeImageUrl="/rectangle-19@2x.png"
                episodeTitle=" Kumo Desu ga Nani ka - Episódio 16"
                subtitleImageUrl="Doblado"
                propLeft="0px"
                propTop="520px"
                propLeft1="25px"
                propWidth="unset"
                propWidth1="99px"
                propLeft2="47px"
              />
              <CardContainer
                episodeImageUrl="/rectangle-191@2x.png"
                episodeTitle="Subarashiki Kono Sekai The Animation - Episódio 6"
                subtitleImageUrl="Doblado"
                propLeft="631px"
                propTop="520px"
                propLeft1="31px"
                propWidth="unset"
                propWidth1="97px"
                propLeft2="48px"
              />
              <CardContainer
                episodeImageUrl="/rectangle-1@2x.png"
                episodeTitle="Mashiro no Oto - Episódio 11"
                subtitleImageUrl="Subtitulado"
                propLeft="0px"
                propTop="960px"
                propLeft1="30px"
                propWidth="unset"
                propWidth1="163px"
                propLeft2="30px"
              />
              <CardContainer
                episodeImageUrl="/rectangle-2@2x.png"
                episodeTitle="Blue Reflection Ray - Episódio 10"
                subtitleImageUrl="Subtitulado"
                propLeft="631px"
                propTop="960px"
                propLeft1="31px"
                propWidth="unset"
                propWidth1="163px"
                propLeft2="30px"
              />
              <CardContainer
                episodeImageUrl="/rectangle-3@2x.png"
                episodeTitle="Subarashiki Kono Sekai The Animation - Episódio 10 "
                subtitleImageUrl="Subtitulado"
                propLeft="0px"
                propTop="1400px"
                propLeft1="30px"
                propWidth="unset"
                propWidth1="149px"
                propLeft2="30px"
              />
              <CardContainer
                episodeImageUrl="/rectangle-31@2x.png"
                episodeTitle=" Pokemon 2019 - Episódio 70"
                subtitleImageUrl="Subtitulado"
                propLeft="631px"
                propTop="1400px"
                propLeft1="26px"
                propWidth="289px"
                propWidth1="163px"
                propLeft2="30px"
              />
              <h3 className="nuevos-episodios">Nuevos episodios</h3>
            </div>
          </div>
          <AnimeSection />
        </section>
      </main>
    </div>
  );
};

export default Inicio;
