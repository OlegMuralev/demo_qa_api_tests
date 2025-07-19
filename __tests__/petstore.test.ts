// __tests__/petstore.test.ts
import { PetApiClient } from '../api/petApiClient';
describe('Petstore API - OOP Style', () => {
  const client = new PetApiClient('https://petstore.swagger.io');

  test('Get available pets', async () => {
    const response = await client.getPetsByStatus('available');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  test('Get pending pets', async () => {
    const response = await client.getPetsByStatus('pending');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });
});
