import { PetApiClient } from '../api/petApiClient';
import { PetStatus, Status } from '../types/status';

describe('Petstore API - Add pet to the store tests', () => {
    const client = new PetApiClient('https://petstore.swagger.io/v2');
  
    const statuses: Status[] = [
      PetStatus.Available,
      PetStatus.Pending,
      PetStatus.Sold
    ];

    test.each(statuses)('Get pets with status "%s"', async (status) => {
      const name = 'Max';
        
      const response = await client.addPet(name, status);
      expect(response.status).toBe(200);
      expect(response.data.name).toBe(name);
      expect(response.data.status).toBe(status);
    });
});