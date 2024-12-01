import { Controller, Get } from '@nestjs/common';
import { TickerService } from './ticker.service';

@Controller('ticker')
export class TickerController {
  constructor(private readonly _tickerService: TickerService) { }

  @Get('list')
  async CoinList() {
    return await this._tickerService.getTickersList();
  }
}
