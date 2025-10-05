import './App.css'
import ActionData from './components/ActionData/ActionData'
import ControlledField from './components/ControlledField/ControlledField'
import ControlledField2 from './components/ControlledField2/ControlledField2'
import SimpleForm from './components/SimpleForm/SimpleForm'
import UnControlledField from './components/UnControlledField/UnControlledField'
import UsingCustomHook from './components/UsingCustomHook/UsingCustomHook'
import UsingCustomHook2 from './components/UsingCustomHook2/UsingCustomHook2'

function App() {

    return (
        <div className='p-20 grid grid-cols-1 lg:grid-cols-2 gap-18 justify-around'>
            {/* <h1>React Form</h1> */}
            <SimpleForm></SimpleForm>
            <ActionData></ActionData>
            <ControlledField></ControlledField>
            <ControlledField2></ControlledField2>
            <UnControlledField></UnControlledField>
            <UsingCustomHook></UsingCustomHook>
            <UsingCustomHook2></UsingCustomHook2>
        </div>
    )
}

export default App

// https://github.com/saadferozee/PH_module_44