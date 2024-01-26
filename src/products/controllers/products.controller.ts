import { Controller, Get, Param, Query, Post, Body, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { CreaProductDTO, UpdateProductDTO } from '../dto/product.dto';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
    constructor (private productService : ProductsService){}
    @Get('query')
    getProducts(@Query('limit') limit, @Query('offset') offset){
        //return `limit ${limit} offset ${offset}`
        return this.productService.findAll(); //quitado de aqui un 1 dentro del findAll() --> findAll()
    }
    
    @Get(':idProduct')
    getProduct(@Param('idProduct', ParseIntPipe) idProduct: string){
      let product:String = `{id:${idProduct}}`
      //return `product ${product}`
      return this.productService.findOne(+idProduct)
    }

    @Post('ruta')
    create(@Body() newProduct: CreaProductDTO){

        // return {
        //     message: 'a'
        // }

        return this.productService.create(newProduct)
    }

    @Post()
    create2(@Body() product){
            return {
                product,
                message: 'Producto creado'
            }
    }

    @Put(':id')
    update(@Param('id') id, @Body() product: UpdateProductDTO){
        return this.productService.update(id, product)
    }

    @Delete(':id')
    delete(@Param() id: number){
        //return "borrado el prod" + id
        return this.productService.delete(id)
    }
}
