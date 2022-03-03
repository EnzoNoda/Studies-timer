import React, { useState } from "react";
import style from './Lista.module.scss'
import Item from "./Item";

function Lista() {

  const [tarefas, setTarefas] = useState([{
    tarefa: 'React',
    tempo: '02:00:00'
  },{
    tarefa: 'Typescript',
    tempo: '01:00:00'
  },{
    tarefa: 'Javascript',
    tempo: '00:30:00'
  }])
  return(
    <aside className={style.listaTarefas}>
      <h2 onClick={()=>{
        setTarefas([...tarefas, {tarefa: 'Estudar estado', tempo: '00:45:00'}])
      }}>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index}{...item}/>
        ))}
      </ul>
    </aside>
  )

}

export default Lista