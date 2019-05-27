import { Injectable } from '@nestjs/common';
import { Brands } from './interfaces/brands.interface';

@Injectable()
export class BrandsService {
    private readonly brands = [
        {
            id: '232',
            name: 'Adidas',
            founders: ['Adolf Dassler'],
        },
        {
            id: '653',
            name: 'Nike',
            founders: ['Phil Knight', 'Bill Bowerman'],
        },
        {
            id: '978',
            name: 'Under Armour',
            founders: ['Kevin Plank'],
        },
    ];

    findAll(): Brands[] {
        return this.brands;
    }
}
