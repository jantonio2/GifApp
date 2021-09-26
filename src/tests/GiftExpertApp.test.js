import { shallow } from 'enzyme';
import { GiftExpertApp } from '../GiftExpertApp';

describe('Probando componente GiftExpertApp', () => {
  test('debe de renderizar y hacer match con el snapshot', () => {
    const wrapper = shallow(<GiftExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar una lista de categorias', () => {
    const categories = ['Game of Thrones', 'Dragon Ball'];
    const wrapper = shallow(<GiftExpertApp defaultCategories = {categories}/>);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
  
  
});
