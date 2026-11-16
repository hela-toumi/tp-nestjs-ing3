import { Injectable } from '@nestjs/common';

@Injectable()
export class TravelService {

  // Liste des voyages
  private trips = [
    { id: 1, name: 'To China', price: 9000 },
    { id: 2, name: 'To Morocco', price: 4000 },
  ];

}