import {request} from './request'

export function home(){
    return request({
        url:'/show1'
    })
}