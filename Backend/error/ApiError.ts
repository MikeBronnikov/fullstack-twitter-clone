
class ApiError {

    msg: string
    param: string
    location: string
    value: string | number
    data: any
    status: number | undefined

    constructor(msg: string, param: string, location: string, value: string | number, status: number) {
        this.msg = msg
        this.param = param
        this.location = location
        this.value = value
        this.status = status    
    }

    static badRequest(msg: string, param: string, location: string, value: string | number, status:number) {
        return new ApiError(msg, param, location, value, status)
    }

    // static internal(msg: string, param: string, location: string, value: string | number, data?: any) {
    //     return new ApiError(msg, param, location, value, data)
    // }

    // static forbidden(msg: string, param: string, location: string, value: string | number):any {
    //     return new ApiError(msg, param, location, value)
    // }
}

export default ApiError