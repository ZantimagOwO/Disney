import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { productsMock } from 'src/mocks/product.mocks';
import { Product } from '../entities/product.entitity';
import { CreateProductDTO, UpdateProductDTO } from '../dto/product.dto';


@Injectable()
export class ProductsService {
    private counterId = 1
    private products: Product[] = productsMock;

    findAll(id: number){
        return this.products
    }

    findOne(id : number){
        //return this.products.find( (item) => item.id == idProduct)
        const product = this.products.find(
            (item) => 
                item.id === id
            
        )

        if(!product){
            //throw 'No va :('
            throw new NotFoundException(` Product #${id} not found`)
        }

        return product
    }

    create(products: CreateProductDTO){
        this.counterId += 1
        const newProduct = {
            id: this.counterId,
            ...products
        }
        this.products.push(newProduct)

        return newProduct
    }

    update(id: number, updateProduct: UpdateProductDTO){
        const productFound = this.findOne(id)
        if(productFound === null){
            return -1;
        }

        const index = this.products.findIndex(
            (item) => 
                item.id === id
            
        )

        console.log(index)

        this.products[index] = productFound

        return this.products
    }

    delete(id :number){
        
    }
}
