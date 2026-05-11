import { Injectable } from '@nestjs/common';
@Injectable()
export class AnimalsService {

  create(animal: any) {
  }

  findAll(): Promise<any[]> {
    console.log('Animal call');
    return Promise.resolve([]);
  }
}
