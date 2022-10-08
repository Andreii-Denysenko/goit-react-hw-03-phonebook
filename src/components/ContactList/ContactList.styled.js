import styled from 'styled-components';


export const List = styled.ul`
padding-left: 0px; 
list-style: none;
`


export const Item = styled.li`
font-family: "Trebuchet MS", "Lucida Sans";
font-weight:  bolder; 
display: flex;
align-items: center;
justify-content: space-between;
padding: 3px 8px;
margin-bottom: 10px;
border-radius: 3px;
border-left: 10px solid #f05d22; 
background-image: linear-gradient(to right, #e7d20c 0%,#bfc90e 70%, #9EEFE1 100%);
box-shadow: 2px -2px 5px 0 rgba(0,0,0,.1),
     -2px -2px 5px 0 rgba(0,0,0,.1),
    2px 2px 5px 0 rgba(0,0,0,.1),
    -2px 2px 5px 0 rgba(0,0,0,.1);
font-size: 12px;
letter-spacing: 2px;
transition: 0.3s all linear;`
