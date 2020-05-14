const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

export class {
    constructor(exctor) {
        this.status = PENDING
        let resolve = () => {
        }
        let reject = () => {

        }
        try{
            exctor(resolve,reject)
        }catch (error) {
            throw Error(error)
        }
       
    }
}