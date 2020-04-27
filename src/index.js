import React from 'react'
import {render} from 'react-dom'
import {ErrorBoundary} from './ErrorBoundary'
import {DemoApp} from './DemoApp'

import './main.css'

window.addEventListener('error', (event) => {
  gtag('event', 'exception', {
    description: `${event.error.name}: ${event.error.message}`,
    fatal: false,
    error_stack: event.error.stack
  })
})

gtag('event', 'timing_complete', {
  name : 'load',
  value : performance.now(),
  event_category : 'JS Dependencies'
});


render(<ErrorBoundary>
  <DemoApp />
</ErrorBoundary>, document.getElementById('root'))