import React from 'react'
import {WaitForReaload} from './WaitForReaload'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    const componentStack = errorInfo.componentStack
      .replace(/\n/g, '')
      .replace(/in/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .split(' ')
      .join(' < ')

    gtag('event', 'exception', {
      'description': `${error.name}: ${error.message}`,
      'fatal': true,
      'error_stack': error.stack,
      'component_stack': componentStack
    });
  }

  render() {
    return this.state.hasError
      ? <React.Fragment>
          <h1>Ops! Logando um crash! 😅</h1>
          <WaitForReaload/>
        </React.Fragment>
      : this.props.children
  }
}