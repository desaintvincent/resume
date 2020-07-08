import React from 'react'
import ReactDOM from 'react-dom'

function Patate () {
  return <div>patate</div>
}

const wrapper = document.getElementById('container')
if (wrapper) {
  ReactDOM.render(<Patate />, wrapper)
}
