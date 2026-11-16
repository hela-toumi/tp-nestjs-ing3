import { Controller, Post } from '@nestjs/common';

@Controller('travel')
export class TravelController {

  @Post()
  create(): string {

    return 'Planifier un nouveau voyage ici';

  }

}