import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con la funcion getGifs fetch', () => {
  test('debe de traer 10 elementos', async () => {
    const gifs = await getGifs('Game of Thrones');

    expect(gifs.length).toBe(10);
  });
  
  test('debe de traer un arreglo vacío', async() => {
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);
  });
  
});
