import {Api, TypeDataEmployees} from "../../dall/api"
import {Dispatch} from "redux"

let initialState: TypeInitialState = {
    employees:[]
}
const getEmployeesAC = (employees:TypeDataEmployees[])=>{
    return{
        type:'/reducer/GET_EMPLOYEES',
        employees
    } as const
}
export const addEmployeesAC = (employees:TypeDataEmployees)=>{
    return{
        type:'/reducer/ADD_EMPLOYEES',
        employees
    } as const
}
export const deleteEmployeesAC = (id:number)=>{
    return{
        type:'/reducer/DELETE_EMPLOYEES',
        id
    } as const
}

export const reducer = (state: TypeInitialState = initialState, action: TypeActions): TypeInitialState => {
    switch (action.type) {
        case "/reducer/GET_EMPLOYEES":{
            return {
                ...state,
                employees:action.employees
            }
        }
        case "/reducer/ADD_EMPLOYEES":{
            return {
                ...state,
                employees:[...state.employees,action.employees]
            }
        }
        case "/reducer/DELETE_EMPLOYEES":{
            return {
                ...state,
                employees:state.employees.filter(item=> item.id!==action.id)


            }


        }
        default:
            return state
    }
}

export const getEmployeesTC = ()=> async (dispatch:Dispatch<TypeActions>)=>{
    try {
        let result = await  Api.getEmployees()
        dispatch(getEmployeesAC(result.data))
    }catch (e) {
        console.log(e)
    }
}
type TypeActions  =
    | ReturnType<typeof getEmployeesAC>
    | ReturnType<typeof addEmployeesAC>
    | ReturnType<typeof deleteEmployeesAC>
type TypeInitialState = {
        employees:TypeDataEmployees[]
}