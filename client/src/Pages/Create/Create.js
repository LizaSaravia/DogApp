import React, { useEffect, useState } from 'react'
import './Create.css'
import { getTemperaments } from '../../actions/index';
import { connect } from 'react-redux';
import Navbar from '../../Components/Navbar';


function Create(props) {

    const [form, setForm] = useState({
        name:'',
        gender:'',
        height:'',
        weight:'',
        life_span:'',
        id:[]
    })



    const handleChange = (event) => {
        if(event.target.name === 'nameT') {
            setForm({
                ...form,
                id : [...form.id, event.target.value]
            })
 
        } else {
            setForm({
                ...form,
                [event.target.name] : event.target.value
            })
        }

    }

    useEffect(() => {
        props.getTemperaments()
        // console.log('entre aqui', props.estado)
    }, [])
   

    return (
        <div className = 'CreateContainer'>
            <Navbar />
            <div className='CreateBox'>
            <h1 className = 'CreateTitle'>Create a new breed!</h1>
            <form className = 'CreateForm' 
            action = 'http://localhost:3001/dog' 
            method = 'post' 
            body = {JSON.stringify(form)}>

                <input name = 'name' type = 'text' required = 'required' placeholder='Name*' onChange = {handleChange}/>
                <input name = 'height' type = 'number' required = 'required' placeholder='Height*' onChange = {handleChange} />
                <input name = 'weight' type = 'number' required = 'required' placeholder='Weight*' onChange = {handleChange} />
                <input name = 'life_span' type = 'number' required = 'required' placeholder='Life-span*' onChange = {handleChange}/>
                <p className='tempPuppies'>Select all the temperaments to describe the doggy</p>
                <select value = {form.id}   name = 'nameT' onChange = {handleChange} multiple className = 'TempSelect'>
                    {props.estado && props.estado.slice(0, 124).map((temp) => {
                        return <option value = {temp.id} >{temp.nameT}</option>                    
                        })}
                </select>
                <input className = 'createBtn' type = 'submit' value = 'Create' />
            </form>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        estado: state.temperament
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getTemperaments : elem => dispatch(getTemperaments(elem))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)
