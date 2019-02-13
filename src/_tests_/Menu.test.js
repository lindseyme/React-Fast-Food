import React from 'react';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Menu} from '../components/Menu';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Menu/>', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(<Menu />)
        .find('div.Menu')
        .exists()
    ).toBe(false);
  });

  it('should render a <div> element', () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.find('.div')).toExist;
  });

  it('should render a <a> element', () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.find('.a')).toExist;
  });

  const props = {
    menuPage: (url) => jest.fn(),
    message: {},
    errors: {}
  };


  it('test Menu component onchange', () => {
    const wrapper = shallow(<Menu {...props} />);
    const instance = wrapper.instance();
    instance.onChange({ target: { name: 'item_name', value: 'value' } });
    const e = { preventDefault: () => {} };
    instance.onSubmit(e);
    expect(instance.state.item_name).toEqual('value');
  });

});
