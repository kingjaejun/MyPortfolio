import React from 'react'
import styled from 'styled-components'
import FooterCol from './FooterCol'
import PText from './PText'

const FooterStyles = styled.div`
padding:10rem;
background-color:var(--deep-dark);
.container{
    display:flex;
    gap:3rem;
}
.footer__col1{
    flex:2;
}
.footer__col2,
.footer__col3,
.footer__col4{
    flex:1;
}
.footer__col1__title{
    font-size:3.5rem;
    margin-bottom:1rem;
}
.copyright{
    background-color: var(--deep-bg);
    text-align:left;
    padding:1rem 0;
    margin-top:5rem;
    .para{
        margin-left:0;
    }
}
@media only screen and (max-width:768px){
    .container{
        flex-direction:column;
        gap:0rem;
        & > div{
            margin-top:5rem;
        }
    }
    .footer__col1  .para{
        max-width:100%;
    }
    .copyright{
        .container{
            div{
                margin-top:0;
            }
        }
    }
}
`;
export default function Footer() {
    return (
        <FooterStyles>
            <div className="container">
                <div className="footer__col1">
                    <h1 className="footer__col1__title">KIM JAEJUN</h1>
                    <PText>
                        Hi
                    </PText>
                </div>
                <div className="footer__col2">
                    <FooterCol 
                    heading="Imporntant Links"
                    links={
                        [
                            {title:"Home",path:"/",type:"Link"},
                            {title:"About",path:"/about",type:"Link"},
                            {title:"Projects",path:"/projects",type:"Link"},
                            {title:"Contact",path:"/contact",type:"Link"}
                        ]}
                    />
                </div>
                <div className="footer__col3">
                    <FooterCol 
                        heading="Contact Info"
                        links={
                            [
                                {title:"+8298587996",path:"tel:01098587996"},
                                {title:'saqxtmxhf888@naver.com',path:'mainto:saqxtmxhf888@naver.com'},
                                {title:'Minam,Dongnae, Busan,South Korea',path:'http://google.com/maps'}
                            ]
                        }
                    />
                </div>
                <div className="footer__col4">
                    <FooterCol 
                    heading="Social Links"
                    links={
                        [
                            {title:"Facebook",path:'http://facebook.com'},
                            {title:"Instagram",path:'http://instagram.com'},
                            {title:"Twitter",path:'http://twitter.com'},
                        ]
                    }/>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <PText>
                        ⓒ2021 = KIMJAEJUN | Designed By KiNGJAEJUN
                    </PText>
                </div>
            </div>
        </FooterStyles>
    )
}
