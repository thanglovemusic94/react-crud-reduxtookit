import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editTutorial} from "../../../action/TutorialAction";
import {useHistory, useParams} from "react-router-dom";
import FormTutorial from "./form";
import {TutorialService} from "../../../service/TutorialService";

export const EditProducts = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {id} = useParams()

    const [data, setData] = useState()

    const handleChange = (e) => {
        let {name, value} = e.target;
        if (value === "true" || value == "false") {
            value = JSON.parse(value);
        }
        setData({...data, [name]: value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(editTutorial(data, id))
        history.push('/')
    }
    useEffect(() => {
        TutorialService.getById(id).then(res => {
            setData(res.data)
        }).catch(e => console.log(e))
    },[])
    return (
        <>
            {
                data &&
                <FormTutorial onSubmit={onSubmit} data={data} handleChange={handleChange}/>
            }

        </>
    )
}

export default EditProducts
