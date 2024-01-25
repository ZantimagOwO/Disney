import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsNumber, IsPositive, IsString, IsUrl} from "class-validator";

export class CreateProductDTO{

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;
    
    @IsNumber()
    @IsPositive()
    readonly price: number;
    
    @IsNumber()
    @IsPositive()
    readonly stock: number;
    
    @IsUrl()
    readonly image: string;
}

export class UpdateProductDTO extends PartialType(CreateProductDTO){}

export class CreaProductDTO{
    readonly name: string;
    readonly description: string;
    readonly price: number;
    readonly stock: number;
    readonly image: string;
}