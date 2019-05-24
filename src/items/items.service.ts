import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
          id: '3236521',
          name: 'Item One',
          description: 'An Item named One',
          quantity: 1,
        },
        {
          id: '3651531',
          name: 'Item Two',
          description: 'An Item named Two',
          quantity: 2,
        },
        {
          id: '5638454',
          name: 'Item Three',
          description: 'An Item named Three',
          quantity: 3,
        },
      ];

      findAll(): Item[] {
          return this.items;
      }

      findOne(id: string): Item {
          return this.items.find(item => item.id === id);
      }
}
