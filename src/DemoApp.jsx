import React, {useEffect, useState} from 'react'
import {WaitForReaload} from './WaitForReaload'
import {errorGenerator} from './error-generator'
import {getRandomTodo} from './api'

export function DemoApp() {
  const [data, setData] = useState()
  const [hasError, setHasError] = useState()

  useEffect(() => {
    errorGenerator()
  }, [])

  useEffect(() => {
    getRandomTodo()
      .then(todo => setData(JSON.stringify(todo, ' ', 2)))
      .catch(() => setHasError(true))
  }, [])

  return <React.Fragment>
    <h1>Muito obrigado! 😉</h1>
    <p>Os testes já terminaram</p>
    <p>Sem você essa apresentação não seria possível 😜</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/IAO1CglKgu4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </React.Fragment>
}