import { Injectable } from '@nestjs/common';
import { Mmo } from './interfaces/mmos.interface';

@Injectable()
export class MmosService {
    private readonly mmos = [
        {
            id: '2323',
            name: 'Black Desert Online',
        },
        {
            id: '6534',
            name: 'World of Warcraft',
        },
        {
            id: '1234',
            name: 'Eve Online',
        },
        {
            id: '2323',
            name: 'The Elder Scrolls Online',
        },
    ];

    findAll(): Mmo[] {
        return this.mmos;
    }
}
