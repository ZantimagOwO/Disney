import { Test, TestingModule } from "@nestjs/testing";
import { ProductsController } from "./products.controller";
import { ProductsService } from "../services/products.service";

describe("ProductsController", () => {
  let controller: ProductsController;
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
    service = module.get<ProductsService>(ProductsService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});