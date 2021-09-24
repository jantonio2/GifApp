import { shallow } from 'enzyme';
import { GifGridItem } from './../../components/GifGridItem';

describe('Prueba en el componente GifGridItem', () => {
  test('debe de mostrar el componente correctamente', () => {
    const wrapper = shallow(<GifGridItem />);

    expect(wrapper).toMatchSnapshot();
  });
});
