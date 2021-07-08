import React from 'react'
import { MdDesktopMac } from 'react-icons/md'
import styled from 'styled-components'
import PText from './PText'

const ItemStyles = styled.div`
text-align:center;
.servicesItem__icon{
    svg{
        width:3rem;
    }
}
.servicesItem__title{
    font-size:2.5rem;
    font-familiy:'MontSerrat SemiBold';
}
.para{
    margin-top:2rem;
}
`;
export default function ServicesSectionItem({
    icon=<MdDesktopMac />,
    title='web design',
    desc="Lorem Ipsum is simply dummy text of printing and typesetting industryLorem Ipsum has been the industry's ok"
}) {
    return (
        <ItemStyles>
            <div className="servicesItem__icon">{icon}</div>
            <div className="servicesItem__title">{title}</div>
            <PText>{desc}</PText>
        </ItemStyles>
    );
}
