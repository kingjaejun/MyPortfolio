import React from 'react'
import styled from 'styled-components';


const HeroStyle = styled.div`
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
`;

export default function Contact() {
    return (
        <HeroStyle>
            <div className="hero">
                <h1 className="hero__heading">
                    <span>Phone</span>
                    <span className="hero__name">010-9858-7996</span>
                </h1>
            </div>
       </HeroStyle>
    )
}
