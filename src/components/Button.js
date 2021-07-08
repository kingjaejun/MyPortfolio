import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import '../App.css';
const ButtonStyle = styled.div`
    margin-top:2rem;
    .button{
        font-size:2.2rem;
        background-color:${(props) =>
            props.outline ? 'transparent':'var(--white)'};
        padding: 0.7em 1em;
        border-radius:8px;
        display:inline-block;
        border:2px solid var(--white);
        color:${(props)=>
            props.outline ? 'var(--gray-1)':'black'
        };
    }
    @media only screen and (max-width:768px){
        .button{
            font-size:1.8rem;
        }
    }
`;
export default function Button({btnLink,btnText,outline}) {
    return (
        <ButtonStyle outline={outline} className="button-wrapper">
            <Link className="button" to={btnLink}>{btnText}</Link>
        </ButtonStyle>
    )
}
