import { Injectable } from '@nestjs/common';
import { Os } from './interfaces/os-list.interface';

@Injectable()
export class OsListService {
    private readonly os: Os[] = [
        {
            id: '8939',
            name: 'Windows',
            creators: 'Bill Gates',
            license: 'private',
        },
        {
            id: '6452',
            name: 'MacOS',
            creators: 'Bill Gates',
            license: 'private',
        },
        {
            id: '1232',
            name: 'Linux',
            creators: 'Linus Torvalds',
            license: 'Open Source',
        },
        {
            id: '5153',
            name: 'iOS',
            creators: 'Apple',
            license: 'private',
        },
        {
            id: '4125',
            name: 'Android',
            creators: 'Google',
            license: 'private',
        },
    ];

    findAll(): Os[] {
        return this.os;
    }

    findOne(id: string): Os {
        return this.os.find(os => os.id === id);
    }
}
