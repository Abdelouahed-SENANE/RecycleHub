import { RoleType } from "../utils/enums/role-type"

export interface User {
    id : string
    fullname : string
    email : string 
    address : string 
    birthday : Date
    password : string
    role : RoleType
}