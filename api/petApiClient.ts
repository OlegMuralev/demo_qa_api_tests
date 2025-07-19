// api/petApiClient.ts
import axios, { AxiosInstance } from 'axios';

export class PetApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({ baseURL });
  }

  async getPetsByStatus(status: string) {
    const response = await this.client.get('/pet/findByStatus', {
      params: { status }
    });
    return response;
  }

  
}
