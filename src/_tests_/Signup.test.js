import React from "react";
import { shallow } from "enzyme";
import { Register } from "../components/Signup";
import './BaseTest';


describe("<Register/>", () => {
  const editor = shallow(<Register registerUser={jest.fn()} />);

  it("should render without crashing", () => {
    expect(editor).toMatchSnapshot();
  });
  const props = {
    registerUser: (newUser, history) => jest.fn(),
    auth: { isAuthenticated: false, user: {} },
    errors: {}
  };

  it("test Register component onchange", () => {
    const wrapper = shallow(<Register {...props} />);
    const instance = wrapper.instance();
    instance.onChange({ target: { name: "name", value: "value" } });
    const e = { preventDefault: () => {} };
    instance.onSubmit(e);
  });

  it("tests that the component receives new props", () => {
    const wrapper = shallow(<Register {...props} />);
    const data = {
      errors: {
        Email:
          "Missing or wrong email format or password is less than four characters"
      }
    };
    wrapper.instance().componentWillReceiveProps(data);
    expect(wrapper.instance().state.errors.Email).toEqual(
      "Missing or wrong email format or password is less than four characters"
    );
  });
});
