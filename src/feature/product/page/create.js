import {useState} from "react";
import {useDispatch} from "react-redux";
import {createTutorial} from "../../../action/TutorialAction";
import { useHistory } from "react-router-dom";
import FormTutorial from "./form";

export const CreateProducts = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [data, setData] = useState({
        title: "",
        description: "",
        published: false
    })

    const handleChange = (e) => {
        let {name, value} = e.target;
        if (value === 'true' || value === 'false')
            value = JSON.parse(value)
        setData({...data, [name]: value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createTutorial(data))
        history.push('/')

    }
    return (
        <>
           <FormTutorial onSubmit={onSubmit} data={data} handleChange={handleChange}/>
        </>
    )
}

export default CreateProducts
