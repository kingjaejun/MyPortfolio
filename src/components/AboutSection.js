import React from 'react'
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import emoge_a from '../assets/images/emoge_a.png';
import emoge_b from '../assets/images/emoge_b.png';

const AboutSectionStyle = styled.div`
    padding:10rem;
    .container{
        display:flex;
        align-items:center;
        justify-content:flex-start;
        text-align:left;
    }    
    .aboutSection__left,
    .aboutSection__right {
        flex:1;
    }
    .section-title{
        text-align:left;
    }
    .para{
        margin-top:2rem;
        margin-left:0;
    }
    .aboutSection__buttons{
        display:flex;
        align-items:center;
        justify-content:flex-start;
        gap:2rem;
        margin-top:2rem;
    }
    .hero__img{
        max-width:900px;
        margin: 0 auto;
        width:300px;
        height:300px;
        // border:2px solid var(--gray-1);
    }
    @media only screen and (max-width:950px){
        .aboutSection__left{
            flex:4;
        }
        .aboutSection__right{
            flex:3;
        }
    }
    @media only screen and (max-width:768px){
        .container{
            flex-direction:column;
            text-align:center;
        }
        .aboutSection__left,
        .aboutSection__right {
            width:100%;
        }
        .aboutSection__right {
            margin-top:3rem;
            display:flex;
            flex-direction:column;
        }
        .section-title{
            text-align:center;
        }
        .para{
            margin:0 auto;
            margin-top:2rem;
        }
        .aboutSection_buttons{
            flex-direction:column;
            gap:0;
            .button-wrapper,
            a{
                width:100%;
                text-align:center;  
            }
        }

    }
`;
export default function AboutSection() {
    return (
        <AboutSectionStyle>
        <div className="container">
            <div className="aboutSection_left">
                <SectionTitle 
                    subheading="Let me introduce myself"
                    heading="About me"
                />
                <PText>
                    My Name is Kimjaejun.
                    I am studying Web Application with ReactJS, JavaScript,
                        FrontEnd, BackEnd
                        I love to design and make new web 
                        experiences for the people.
                </PText>
                <div className="aboutSection__buttons">
                    <Button btnLink="/projects" btnText="Works" />
                    <Button btnLink="/about" btnText="Read More" outline/>
                </div>
                </div>
                    <div className="aboutSection__right">
                        <div className="hero__img">
                            <img src={emoge_a} alt="" />
                            <img src={emoge_b} alt="" />
                        </div>
                    </div>   
                </div>
        </AboutSectionStyle>
    )
}
