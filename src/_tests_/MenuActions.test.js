import { menuPage } from "../actions/MenuActions";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const API_URL = process.env.API_URL;

describe("menuPage() action", () => {
  afterEach(() => fetchMock.restore());

  it("dispatches a GET_MENU action after retrieving food menu", () => {
    fetchMock.getOnce(`${API_URL}menu`, {
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        message: "Successfully retrieved food menu."
      }
    });
    const store = mockStore();
    store
      .dispatch(menuPage())
      .then(expect(store.getActions()).toEqual([]));
  });
});
