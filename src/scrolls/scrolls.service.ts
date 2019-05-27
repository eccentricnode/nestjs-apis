import { Injectable } from '@nestjs/common';
import { Scrolls } from './interfaces/scrolls.interface';

@Injectable()
export class ScrollsService {
    private readonly scrolls = [
        {
            id: '983',
            name: 'Arena',
            releaseYear: 1994,
        },
        {
            id: '987',
            name: 'Daggerfall',
            releaseYear: 1996,
        },
        {
            id: '932',
            name: 'Battlespire',
            releaseYear: 1997,
        },
        {
            id: '912',
            name: 'Redguard',
            releaseYear: 1998,
        },
        {
            id: '943',
            name: 'Morrowind',
            releaseYear: 2002,
        },
        {
            id: '383',
            name: 'Oblivion',
            releaseYear: 2006,
        },
    ];

    findAll(): Scrolls[] {
        return this.scrolls;
    }

    findOne(id: string): Scrolls {
        return this.scrolls.find(scroll => scroll.id === id);
    }
}
