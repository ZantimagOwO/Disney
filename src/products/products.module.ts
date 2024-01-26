import { Module } from '@nestjs/common';
import { CategoriesController } from 'src/controllers/categories/categories.controller';
import { AppService } from 'src/app.service';
import { ProductsService } from './services/products.service';
import { ProductsController } from './controllers/products.controller';

@Module({
  imports: [],
  controllers: [ProductsController, CategoriesController],
  providers: [AppService, ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
