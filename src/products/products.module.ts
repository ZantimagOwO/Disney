import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from 'src/controllers/categories/categories.controller';
import { AppService } from 'src/app.service';
import { ProductsService } from './services/products.service';

@Module({
    imports: [],
    controllers: [ProductsController, CategoriesController],
    providers: [AppService, ProductsService],
  })  
export class ProductsModule {}
