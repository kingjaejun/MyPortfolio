import React from 'react'
import '../App.css';
import emoge_a from '../assets/images/emoge_a.png';
import styled from 'styled-components';
import Button from '../components/Button';

const AboutStyle = styled.div`
.hero {
    
    height:100vh;
    min-height:1000px;
    width:100%;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
}
.hero__heading{
    font-size:2rem;
    margin-bottom:rem;
    position:relative;
    span{
        display:inline-block;
        width:100%;
    }
    .hero__name{
        font-size:5rem;
        font-family:"Montserrat SemiBold";
        color:var(--white);
    }
}
.hero__img{
    max-width:900px;
    margin: 0 auto;
    width:300px;
    height:300px;
    // border:2px solid var(--gray-1);
}
.faces{
    flex-Direction:"column";
}
.btn{
    opacity:0.9;
}
`;

export default function About() {
    return (
        <AboutStyle>
            <div className="hero">
            <h1 className="hero__heading">
            <span>Let me introduce myself</span>
            <span className="hero__name">ABOUT ME</span>
            <div className="btn">
                <Button btnLink="/projects"  btnText="Works" outline={false} /> 
                <Button btnLink="/projects"  btnText="Read More" outline={false} /> 
           </div>
            </h1>
            <div className="faces">
            <div className="hero__img">
                <img src={emoge_a} alt=''/>
            </div>
            </div>
            </div>
        </AboutStyle>
    )
}
