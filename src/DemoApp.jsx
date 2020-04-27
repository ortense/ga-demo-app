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
    <h1>Olá! { hasError ? '😧' : '😎'}</h1>
    {
      data
      ? <React.Fragment>
          <p>Dados obtidos via api:</p>
          <pre>
            {data}
          </pre>
          <WaitForReaload/>
        </React.Fragment>
      : hasError
        ? <React.Fragment>
            <p>Ops! A request falhou!</p>
            <WaitForReaload/>
          </React.Fragment>
        : <p>Aguardando dados externos...</p>
    }
  </React.Fragment>
}