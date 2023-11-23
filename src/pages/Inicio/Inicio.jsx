
import React from 'react';
import Header from '../../components/Shared/HeaderInicio.jsx';  
import Frame from '../../components/Shared/Footer.jsx';
import Image2 from '../../components/Index/CardItem_2.jsx';
import Card_1 from '../../components/Index/CardItem-1.jsx';
import Img4 from '../../components/Index/CardItem_3.jsx';
import Nuevosepisodios from '../../components/Index/CardItem_5.jsx';
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
