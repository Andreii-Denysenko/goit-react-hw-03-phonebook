import styled from 'styled-components';

export const Label = styled.label`
margin-right: 10px;
display: block;
margin-bottom: 0.25rem;`

export const Box = styled.div`
display:flex;
flex-direction: column;`

export const Value = styled.input`
display: block;
max-width: 70%;
height: calc(2.25rem + 2px);
padding: 0.375rem 0.75rem;
font-family: inherit;
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: #212529;
background-color: #fff;
background-clip: padding-box;
border: 1px solid #bdbdbd;
border-radius: 0.25rem;
transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
margin-bottom: 10px;
`

export const Button = styled.button`
text-decoration: none;
  display: inline-block;
  color: white;
  padding: 10px 15px;
  margin: 10px 20px;
  width: 250px;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, #9EEFE1 100%);
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, .1);
  transition: .5s;`