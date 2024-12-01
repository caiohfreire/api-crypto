import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { Ticker } from './models/ticker.model';

@Injectable()
export class TickerService {
  constructor(private readonly _httpService: HttpService) { }

  async getTickers(): Promise<any> {
    try {
      const response = await firstValueFrom(this._httpService.get(process.env.URL_TICKERS));

      const filteredData = response.data.filter((coin: any) => coin.id !== 'u-unidef');

      return filteredData;
    } catch (err) {
      throw new Error(`Unable to fetch API data: ${err.message}`);
    }
  }

  getTickersList(): Promise<any> {
    return this.getTickers();
  }
}

