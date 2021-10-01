import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {createTutorial} from "../../../action/TutorialAction";
import {useHistory, useParams} from "react-router-dom";
import FormTutorial from "./form";
import {TutorialService} from "../../../service/TutorialService";

export const EditProducts = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {id} = useParams()

    const [data, setData] = useState({
        title: "",
        description: "",
        published: false
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({...data, [name]: value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        // dispatch(createTutorial(data))
        history.replace('/')
    }

    useEffect(() => {
        TutorialService.getById(id).then(res => {
            setData(res.data)
        }).catch(e => console.log(e))
    },[])
    return (
        <>
            <FormTutorial onSubmit={onSubmit} data={data} handleChange={handleChange}/>
        </>
    )
}

export default EditProducts
