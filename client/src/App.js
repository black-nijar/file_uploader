import React from 'react'
import FileUpload from './Component/FileUpload'
import './App.css'

const App = () => {
  return (
    <div className='container mt-4'>
      <h4 className='display-4 text-center mb-4'>React File Upload</h4>
      <FileUpload />
    </div>
  )
}

export default App;
