import React, { useState } from 'react';
import { v4 as uuid } from "uuid"



import { Container, ToDoList, Input, Button, ListItem, Trash, Check, Img } from "./styles"

function App() {
  const [list, setList] = useState([])
  const [task, setTask] = useState('')

  function inputMudou(event) {

    setTask(event.target.value)
  }
  function cliquei() {

    if (task) {
      setList([...list, { id: uuid(), task, finished: false }])
    }

  }

  function taskFinished(id) {

    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function deleteItem(id) {

    const newList = list.filter(item => item.id !== id)

    setList(newList)

  }


  return (

    <Container>
      <Img src='https://cdn-icons-png.flaticon.com/512/1986/1986871.png'/>
      <ToDoList>
        <Input onChange={inputMudou} placeholder="O que tenho que fazer" />
        <Button onClick={cliquei}>Adicionar</Button>


        <ul>
          {
            list.length > 0 ? (
              list.map(item => (
                <ListItem isFinished={item.finished} key={item.id}>
                  <Check onClick={() => taskFinished(item.id)} />
                  <li>{item.task}</li>
                  <Trash onClick={() => deleteItem(item.id)} />
                </ListItem>
              ))

            ) : (<h5> Não há itens na lista </h5>)
          }
        </ul>

      </ToDoList>

    </Container>

  )
}

export default App
