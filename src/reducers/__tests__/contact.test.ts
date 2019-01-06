import { ActionKeys } from "../../actions/contact";
import { reducer } from "../contact";

describe("contact form reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, undefined)).toEqual({
      firstName: undefined,
      lastName: undefined,
      email: undefined
    });
  });

  it("should handle SET_CONTACT_FORM", () => {
    expect(
      reducer(
        {
          firstName: undefined,
          lastName: undefined,
          email: undefined
        },
        {
          type: ActionKeys.SET_CONTACT_FORM,
          payload: {
            firstName: "Kiyokado",
            lastName: "Komatsu",
            email: undefined
          }
        }
      )
    ).toEqual({
      firstName: "Kiyokado",
      lastName: "Komatsu",
      email: undefined
    });
  });
});
