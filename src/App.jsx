import './App.css'
import ActionData from './components/ActionData/ActionData'
import ControlledField from './components/ControlledField/ControlledField'
import ControlledField2 from './components/ControlledField2/ControlledField2'
import ProductManagement from './components/ProductManagement/ProductManagement'
import SimpleForm from './components/SimpleForm/SimpleForm'
import UnControlledField from './components/UnControlledField/UnControlledField'
import UsingCustomHook from './components/UsingCustomHook/UsingCustomHook'
import UsingCustomHook2 from './components/UsingCustomHook2/UsingCustomHook2'

function App() {

    return (

        <div className='p-20 flex flex-col-reverse gap-20'>
            <div className='border-2 text-center'>
                <h3 className='py-10 font-extralight text-6xl'>Types of Form</h3>
                <hr className='border mb-15' />
                <div className='p-20 pt-0 grid grid-cols-1 lg:grid-cols-2 gap-18 justify-around'>
                    <SimpleForm></SimpleForm>
                    <ActionData></ActionData>
                    <ControlledField></ControlledField>
                    <ControlledField2></ControlledField2>
                    <UnControlledField></UnControlledField>
                    <UsingCustomHook></UsingCustomHook>
                    <UsingCustomHook2></UsingCustomHook2>
                </div>
            </div>
            <div className='border-2 text-center'>
                <h3 className='py-10 font-extralight text-6xl'>Product Management</h3>
                <hr className='border mb-15' />
                <ProductManagement></ProductManagement>
            </div>
        </div>
    )
}

export default App

// https://github.com/saadferozee/PH_module_44