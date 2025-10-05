import './App.css'
import ActionData from './components/ActionData/ActionData'
import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  return (
    <div className='p-20 grid grid-cols-2 gap-4 justify-around'>
      {/* <h1>React Form</h1> */}
      <SimpleForm></SimpleForm>
      <ActionData></ActionData>
    </div>
  )
}

export default App
