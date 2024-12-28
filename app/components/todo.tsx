import React from 'react'
import Task from './task'
import Container from './container'

function Todo() {
  return (
    <section className="py-[80px]">
        <Container>
            <Task />
            <Task />
            <Task />
            <Task />
        </Container>
    </section>
  )
}

export default Todo