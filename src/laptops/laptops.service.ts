import { Injectable } from '@nestjs/common';
import { Laptops } from './interfaces/laptops.interface';

@Injectable()
export class LaptopsService {
    private readonly laptops = [
        {
            id: '938',
            name: 'Apple',
        },
        {
            id: '932',
            name: 'Asus',
        },
        {
            id: '912',
            name: 'HP',
        },
        {
            id: '338',
            name: 'Dell',
        },
        {
            id: '133',
            name: 'Huawei',
        },
        {
            id: '938',
            name: 'Samsung',
        },
    ];

    findAll(): Laptops[] {
        return this.laptops;
    }
}
