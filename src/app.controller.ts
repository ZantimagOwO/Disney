import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return "Conexion exitosa" 
    //return this.appService.getHello();
  }

  @Get('cosa')
  getMiGet(): string {
    return "Hola";
    //return this.appService.getHello();
  }


  @Get('categories/:idCategory/products/:idProduct')
  getCategory(@Param() {idCategory, idProduct}){
    
    return `Categoría ${idCategory} producto ${idProduct} obtenidos`
  }





}
