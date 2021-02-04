import axios from 'axios'

export function request(config){
    const instanse = axios.create({
        baseURL:'/',
        timeout:5000
    })

    return instanse(config)
}