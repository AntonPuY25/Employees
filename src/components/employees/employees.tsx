import React, {MouseEvent, useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {addEmployeesAC, deleteEmployeesAC, getEmployeesTC} from "../store/reducer"
import {getEmployeesSelectors, TypeGetAllEmployees} from "../selectors/selectors"
import ava from '../../Img/ava3.png'
import s from './employees.module.css'
import {Button, Card, CardContent, Typography} from "@material-ui/core"


const Employees = () => {
    const id = 123;
    const employees: TypeGetAllEmployees = useSelector(getEmployeesSelectors)
    const [editMode, setEditMode] = useState<boolean>(false)
    const [name, setName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getEmployeesTC())
    }, [dispatch])

    const addEmployee = () => {
        setEditMode(false)
        dispatch(addEmployeesAC({
            email,
            last_name: lastName,
            first_name: name,
            avatar: '',
            id: id+1
        }))
    }
    const deleteEmployee = (e:MouseEvent<HTMLSpanElement>)=>{
        setEditMode(false)
        const id = e.currentTarget.dataset.id
        dispatch(deleteEmployeesAC(+id!))
    }
    return <>

        {editMode ? <div className={s.popup}>
            <div className={s.popupContent}>
                <span onClick={() => setEditMode(false)} className={s.x}>X</span>
                <input value={name} placeholder={'Name'} name={'name'} onChange={(e) => setName(e.currentTarget.value)}
                       type="text"/>
                <input value={lastName} placeholder={'Last Name'} name={'lastName'}
                       onChange={(e) => setLastName(e.currentTarget.value)} type="text"/>
                <input value={email} placeholder={'Email'} name={'email'}
                       onChange={(e) => setEmail(e.currentTarget.value)} type="text"/>
                <button data-update={'add'} onClick={addEmployee}>Add</button>
            </div>
        </div> : ""}
        {employees.map((item) => {

            return <Card className={s.container} key={item.id} >
                <span   data-id={item.id} onClick={deleteEmployee} className={s.x}>X</span>
                <CardContent>
                            {item.avatar ?
                                <img src={item.avatar} alt={'Avatar'}/> :
                                <img style={{width: '320px'}} src={ava} alt={'Avatar'}/>
                            }
                        <Typography variant="h6" component="h1" style={{textAlign: 'center'}}>
                            {item.first_name} {item.last_name}
                        </Typography>
                   <div style={{textAlign: 'center'}}>
                       {item.email}
                   </div>
                </CardContent>
            </Card>
        })}
        <div className={s.addBtn}>
        <Button color={"primary"} variant="contained" onClick={() => setEditMode(true)}>Add</Button>
        </div>
    </>

}
export default Employees