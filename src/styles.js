import styled from "styled-components";

import { BiSolidTrash } from "react-icons/bi";
import { FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
background: linear-gradient(90deg,#228B22 0%, #32CD32 81.25%);
width: 100vw;
height: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`

export const Img = styled.img`

width: 230px;
margin-top: 50px;

`



export const ToDoList = styled.div`
background: #ffffff;
padding: 30px 20px;
border-radius: 30px;
margin-top: 70px;
margin-bottom: 50px;

ul{
    padding: 0;
    margin-top: 50px;
    text-align: center;
}
`

export const Input = styled.input`
border-radius: 5px;
border: 2px solid rgba(209, 211, 212, 0.4);
height: 40px;
margin-right: 40px;
padding-left: 15px;

width: 340px;
`

export const Button = styled.button`
border-radius: 5px;
background: #008000;
border: none;
height: 40px;

font-size: 17px;
font-weight: 400;
line-height: 2px;
color: #ffffff;

width: 130px;
cursor: pointer;

&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.6;
}

`

export const ListItem = styled.div`
background: ${props => props.isFinished ? "#98FB98" : "#E4E4E4"};
box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
border-radius: 5px;
height: 50px;

display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 30px;

padding: 0 10px;
width: 500px;




li{
    list-style: none;
}

`

export const Trash = styled(BiSolidTrash)`

cursor: pointer;

`


export const Check = styled(FcCheckmark)`

cursor: pointer;

`