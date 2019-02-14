import React from "react";
import { shallow, mount } from "enzyme";
import { Menu } from "../components/Menu";
import './BaseTest';

const props = {
  menu: []
};

describe("<Menu/>", () => {
  it("should render without throwing an error", () => {
    expect(
      shallow(<Menu {...props} />)
        .find("div.Menu")
        .exists()
    ).toBe(false);
  });

  it("should render a <div> element", () => {
    const wrapper = shallow(<Menu {...props} />);
    expect(wrapper.find(".div")).toExist;
  });

  it("should render a <a> element", () => {
    const wrapper = shallow(<Menu {...props} />);
    expect(wrapper.find(".a")).toExist;
  });

  const props = {
    menuPage: url => jest.fn(),
    message: {},
    errors: {},
    menu: []
  };

  it("test Menu component onchange", () => {
    const wrapper = shallow(<Menu {...props} />);
    const instance = wrapper.instance();
    instance.onChange({ target: { name: "item_name", value: "value" } });
    const e = { preventDefault: () => {} };
    instance.onSubmit(e);
    expect(instance.state.item_name).toEqual("value");
  });
});
