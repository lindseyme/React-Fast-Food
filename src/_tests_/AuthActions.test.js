import { loginUser, registerUser } from "../actions/AuthActions";
import { createMemoryHistory } from "history";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";
import { GET_ERRORS } from "../constants/ActionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const data = {
  auth_token: "eyJ0eXAiOiJ1QiLCJh.eyJpZCI6MTQzMTAxN30.DUkUyNISyfAt6jM_sLV7gWo",
  message: "Successfully logged In",
  status: "success"
};

describe("request", () => {
  afterEach(() => fetchMock.restore());
  it("Should return all tasks", () => {
    const API_HOST_URL = process.env.API_URL;
    fetchMock.postOnce(`${API_HOST_URL}auth/login`, data);
    const userData = {};
    const expectedActions = [];
    let store = mockStore();
    store
      .dispatch(loginUser(userData, { push: jest.fn() }))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});

describe("registerUser() action", () => {
  afterEach(() => fetchMock.restore());

  it("returns errors given incorrect data", () => {
    const API_HOST_URL = process.env.API_URL;
    fetchMock.postOnce(`${API_HOST_URL}auth/signup`, {
      "Content-Type": "application/json",
      body: {
        status: "failed",
        errors: {
          message:
            "Missing or wrong email format or password is less than four characters"
        }
      }
    });
    const invalidData = {
      email: "someone@host.com",
      password: "invalidpassword"
    };
    const store = mockStore();
    const expectedActions = [
      {
        type: GET_ERRORS,
        payload: {
          status: "failed",
          errors: {
            message:
              "Missing or wrong email format or password is less than four characters"
          }
        }
      }
    ];
    store
      .dispatch(registerUser(invalidData, { push: jest.fn() }))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});
