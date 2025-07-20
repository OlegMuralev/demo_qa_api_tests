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

  async addPet(name: String, status: String) {
    const payload = {
      id: 0,
      category: {
        id: 0,
        name
      },
      name: name,
      photoUrls: [
        "string"
      ],
      tags: [
        {
          id: 0,
          name: "string"
        }
      ],
      status
    };
    return await this.client.post('/pet', payload);
  }
  
  
}
