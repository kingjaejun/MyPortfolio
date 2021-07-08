import React from 'react'
import emoge from'../assets/images/emoge.png';
import Button from './Button';
import PText from './PText';
import '../App.css';
import scrolldown from '../assets/images/scrolldown.png';
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
.hero__img{
    max-width:900px;
    margin: 0 auto;
    width:300px;
    height:300px;
    // border:2px solid var(--gray-1);
}
.hero__info{
    // margin-top:-18rem;
}
.hero__social,
.hero__scrollDown{
    display:flex;
    flex-direction:column;
    gap:2rem;
    position:absolute;
    bottom:20px;
    width:50px;
}
.hero__social{
    left:50px;
}
.hero__scrollDown{
    right:-1100px;
}
.hero__social__indicator,
.hero__scrollDown{
    width:50px;
    p{
        font-size:1.6rem;
        transform:translateY(-70px) rotate(90deg);
        letter-spacing:0.7rem;
        text-transform:uppercase;
    }
    img{
        max-height:45px;
        width:30px;
        margin: 0 auto;
        background-color:transparent; 
        object-fit:contain;
        /* transform:rotate(90deg); */
    }
}
.hero__scrollDown{
    img{
        max-height:70px;
    }
}
.hero__social__text{
    ul{
        li{
            margin-bottom:1rem;
        }
        a{
            display:inline-block;
            font-size:1.6rem;
            /* transform:rotate(-90deg); */
            letter-spacing:5px;
            margin-bottom:2rem;

        }
    }
}
@media only screen and (max-width:768px){
    .hero{
        min-height:750px;
    }
    .hero__heading{
        font-size:1.4rem;
        margin-bottom:-3rem;
        .hero__name{
            font-size:4.5rem;
        }
    }
    .hero__img{
        height:300px;
    }
    .hero__info{
        margin-top:3rem;
    }
    .hero__social{
        left:0px;
        bottom:15%;
        width:20px;
        .hero__social__indicator{
            width:20px;
            p{
                font-size:1.2rem;
            }
            img{
                max-height:22px;
            }
        }
        .hero__social__text{
            ul{
                li{
                    a{
                        font-size:1.2rem;
                        margin-bottom:1rem;
                    }
                }
            }
        }
    }
    .hero__scrollDown{
        right:0;
        width:20px;
        gap:1rem;
        p{
            font-size:1.3rem;
        }
    }
}
`;

const HeroSection = () => {
    return (
        <HeroStyle>
            <div className="hero">

            
            <div className="container">
                <h1 className="hero__heading">
                    <span>Hello, This is</span>
                    <span className="hero__name">Kim Jae Jun</span>
                </h1>
                <div className="hero__img">
                    <img src={emoge} alt="" />
                </div>
                <div className="hero__info">
                    <PText>
                        I am studying Web Application with ReactJS, JavaScript,
                        FrontEnd, BackEnd
                        I love to design and make new web 
                        experiences for the people.
                    </PText> 
                    <Button btnLink="/projects"  btnText="see my works" outline={false} /> 
                </div>
                <div className="hero__social">
                    <div className="hero__social__indicator">
                        <p>Follow</p>
                        <img src={scrolldown} alt='social media arrow'/>
                        <div className="hero__social__text">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100004981507594" target="_blank" rel="noreferrer">
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100004981507594" target="_blank" rel="noreferrer">
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100004981507594" target="_blank" rel="noreferrer">
                                        Naver
                                    </a>
                                </li>
                                <li>
                                    <a  href="https://www.facebook.com/profile.php?id=100004981507594" 
                                        target="_blank" 
                                        rel="noreferrer">
                                        Kakao
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hero__scrollDown">
                        <p>Scroll</p>
                        <img src={scrolldown} alt=""/>
                    </div>
                </div>
            </div>
            </div>
        </HeroStyle>
    )
}

export default HeroSection
