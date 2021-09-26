import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Probando componente GifGrid', () => {
  const category = "Game of Thrones"
  
  test('debe de renderizar los componentes y hacer match con el snapshot', () => {

    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });

    const wrapper = shallow(<GifGrid category = {category}/>);
    expect(wrapper).toMatchSnapshot();
  });
  
  test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
    const gifs = [{
      id: 'ABC',
      url: 'https://localhost',
      title: 'Whatever'
    }];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });

    const wrapper = shallow(<GifGrid category = {category}/>);
    
    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
  
  
});
