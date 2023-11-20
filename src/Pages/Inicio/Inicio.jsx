
import React from 'react';
import Header from '../../Components/Shared/HeaderInicio.jsx';  
import Frame from '../../Components/Shared/Footer.jsx';
import Image2 from '../../Components/Index/CardItem_2.jsx';
import Card_1 from '../../Components/Index/CardItem-1.jsx';
import Img4 from '../../Components/Index/CardItem_3.jsx';
import Nuevosepisodios from '../../Components/Index/CardItem_5.jsx';
import './Inicio.css';
const About = () => {
    return (
        <div>
            <Header/>
            <div className="black-background">
                <Card_1/>
                <Image2/>
                <Img4/>
                <Nuevosepisodios/>
            </div>
            <Frame/>
        </div>
    );
}

export default About;
