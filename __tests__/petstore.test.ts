import axios from 'axios';

describe('Petstore API', () => {
  it('Find available pet', async () => {
    console.log('📡 Отправка запроса к Petstore API...');

    const response = await axios.get(
      'https://petstore.swagger.io/v2/pet/findByStatus',
      { params: { status: 'available' } }
    );

    console.log('✅ Ответ получен:', response.status);
    console.log('🔢 Кол-во объектов:', response.data.length);
    console.log('📦 Тело ответа:', response.data);


    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);

    if (response.data.length > 0) {
      expect(response.data[0]).toHaveProperty('status', 'available');
    }

    const petId = response.data[0].id

    
    const petResponse = await axios.get(
      `https://petstore.swagger.io/v2/pet/${petId}`
    );

    console.log('📦 Тело ответа:', petResponse.data);
  });
});