import axios from "axios"

const instance = axios.create({
    baseURL: 'https://reqres.in/api/users?'
})


export const Api = {
    getEmployees() {
        return instance.get<TypeResponseData>('per_page=12').then(res => res.data)
    }
}
export type TypeDataEmployees = {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
}
export type TypeResponseData = {
    page: number
    per_page: number
    total: number
    total_pages: number
    data: TypeDataEmployees[]
    support: {
        url: string
        text: string
    }
}