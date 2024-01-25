export class Product{
    id: number
    name : string
    description?: string
    price?: number
    stock?: number
    image?: string

    constructor(id:number, name: string){
        this.id = id
        this.name = name
    }
}