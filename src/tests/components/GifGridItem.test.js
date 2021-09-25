import { shallow } from 'enzyme';
import { GifGridItem } from './../../components/GifGridItem';

describe('Prueba en el componente GifGridItem', () => {

  const title = "Game of Thrones";
  const url = "https://localhost";
  const wrapper = shallow(
    <GifGridItem 
      title = {title}
      url = {url}
    />);

  test('debe de mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de tener un párrafo con el title', () => {
    const p = wrapper.find('p');

    expect(p.text().trim()).toBe(title);
  });

  test('debe de tener la imagen igual al url y alt de los props', () => {
    const img = wrapper.find('img');
    // console.log(img.props());
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('debe de tener animate_fadeIn', () => {
    const div = wrapper.find('div');
    // console.log(div.prop('className').split(" "));
    const className = div.prop('className');

    expect(className.includes('animate__fadeIn')).toBe(true);
  });  
});
