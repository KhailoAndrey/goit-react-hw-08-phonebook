import styled from 'styled-components';

export const RegBox = styled.div`
margin-top: 20vh;
width: 35vw; 
margin-left: auto;
margin-right: 18vw;
/* background-color: grey; */
display: 'flex';
flex-direction: column;
align-Items: 'center';
justify-content: center;
box-Shadow: ' rgb(33 33 33) 0px 2px 10px 1px';
`;

export const Title = styled.h1`
font-Weight: '700';
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
text-align: center;
/* background-color: red; */
`;

export const RegForm = styled.form`
/* background-color: aqua; */
display: flex;
flex-direction: column;
align-items: center;

`
export const Label = styled.h3`
  margin: 8px 20px;
  font-size: 20px;
  font-weight: 600;
  font-style: italic;
  color: #7C17DA;
  align-self: flex-start;
  /* background-color: bisque; */
`;

export const RegInput = styled.input`
width: 90%;
margin: 8px auto;
height: 20px;
border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  background-color: #f1f1f1;

`
export const RegBtn = styled.button`
color: #0f1111;
background-color: #eeb763;
border-radius: 10px;
margin-top: 10px;
width: 200px;
font-size: 20px;
font-weight: 500;
cursor: pointer;
&:hover {
    scale: 1.3;
    color: green;
}
`