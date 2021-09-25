import { shallow } from 'enzyme';
import { GifGridItem } from './../../components/GifGridItem';

describe('Prueba en el componente GifGridItem', () => {

  const title = "Game of Thrones";
  const url = "https://localhost";

  test('debe de mostrar el componente correctamente', () => {
    const wrapper = shallow(
      <GifGridItem 
        title = {title}
        url = {url}
      />);

    expect(wrapper).toMatchSnapshot();
  });
});
