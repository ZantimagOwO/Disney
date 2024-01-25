import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories/categories.controller';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ProductsService } from './products/services/products.service';
import { ProductsController } from './products/controllers/products.controller';

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [AppController, ProductsController, CategoriesController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
