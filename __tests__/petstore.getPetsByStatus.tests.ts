import { PetApiClient } from '../api/petApiClient';
import { PetStatus } from '../types/status';

describe('Petstore API - Get pets by status tests', () => {
  const client = new PetApiClient('https://petstore.swagger.io/v2');

  test('Get available pets', async () => {
    const response = await client.getPetsByStatus(PetStatus.Available);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  test('Get pending pets', async () => {
    const response = await client.getPetsByStatus(PetStatus.Pending);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  test('Get sold pets', async () => {
    const response = await client.getPetsByStatus(PetStatus.Sold);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });
});