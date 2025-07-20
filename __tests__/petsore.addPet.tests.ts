import { PetApiClient } from '../api/petApiClient';
describe('Petstore API - Add pet to the store tests', () => {
    const client = new PetApiClient('https://petstore.swagger.io/v2');

    test('Add pet', async () => {
        const name = 'Max';
        const status = 'available';

        const response = await client.addPet(name, status);
        expect(response.status).toBe(200);
        expect(response.data.name).toBe(name);
        expect(response.data.status).toBe(status);
      });
});