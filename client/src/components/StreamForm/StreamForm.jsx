import { useState } from "react"
import './StreamForm.css'
import { useDispatch } from 'react-redux'
import { postStream } from "../../store/actions/actions"
import { useHistory } from "react-router-dom"

export function StreamForm () {

    const dispatch = useDispatch()
    const history = useHistory()
    
    const categories = ['RPG', '+18', 'Family', 'Shooter', 'Music']

    const [form, setForm] = useState({
        name: '',
        description: '',
        suscriptores: '',
        category: [],
    })

    const filterArr = (arr) => {
        let arr2 = []
        arr.map( valor => {
            if(!arr2.includes(valor)) arr2.push(valor)
            else arr2.splice(arr2.indexOf(valor), 1)
        })
        return arr2
    }
    
    const filterCategories = filterArr(form.category)

    const obj = {
        name: form.name,
        description: form.description,
        suscriptores: form.suscriptores,
        category: filterCategories
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(obj)
        dispatch(postStream(obj))
        history.push("/")
        setForm({
            name: '',
            description: '',
            suscriptores: '',
            category: [],
        })
        
    }

    return(
        <div className="form_body">
            <form className="form_container" onSubmit={handleSubmit}>
                <div className="card_input card_input_title">StreamForm</div>
                <div className="card_input">
                    <label className="card_input_title">Name: </label>
                    <input 
                        className="card_input_name"
                        type="text"
                        name="name"
                        value={form.name} 
                        onChange={ e => {
                            const expReg = /^[\s\S]{0,25}$/
                            if (expReg.test(e.target.value)) {
                                setForm({
                                    ...form,
                                    name: e.target.value
                                })
                            }
                        }}
                    />
                </div>
                <div className="card_input">
                    <label className="card_input_title">Description: </label>
                    <textarea
                        className="card_input_description"
                        type="text"
                        name="description"
                        value={form.description} 
                        onChange={ e => {
                            const expReg = /^[\s\S]{0,400}$/
                            if (expReg.test(e.target.value)) {
                                setForm({
                                    ...form,
                                    description: e.target.value
                                })
                            }
                        }}
                    />
                </div>
                <div className="card_input">
                    <label className="card_input_title">Suscriptores: </label>
                    <input 
                        className="card_input_suscriptores"
                        type="number"
                        name="suscriptores"
                        value={form.suscriptores} 
                        onChange={ e => {
                                setForm({
                                    ...form,
                                    suscriptores: e.target.value
                                })
                            
                        }}
                    />
                </div>
                <div className="card_input">
                    <label className="card_input_title">Categories</label>
                    <div>
                        {
                            categories.map((category) => (
                                <div className="card_categories" key={category}>
                                    <input
                                        className="card_input_categories"
                                        type='checkbox'
                                        name="category"
                                        value={category}
                                        onChange={(e) => {
                                            setForm({
                                                ...form,
                                                category: [...form.category, e.target.value]
                                            })
                                        }}
                                    />
                                    <label className="card_input_title">{category}</label>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <button>Button</button>
                </div>
            </form>
        </div>
    )
}