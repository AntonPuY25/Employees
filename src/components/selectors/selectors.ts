import {AppRootStateType} from "../store/store";

export const getEmployeesSelectors = (state: AppRootStateType) => {
    return state.reducerPage.employees
}
export type TypeGetAllEmployees = ReturnType<typeof getEmployeesSelectors>