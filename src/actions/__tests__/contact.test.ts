import * as actions from "../contact";

describe("actions", () => {
  it("should create an action to set a contact form", () => {
    const contactForm = {
      firstName: "Kiyokado",
      lastName: "Komatsu",
      email: undefined
    };
    const expectedAction = {
      type: actions.ActionKeys.SET_CONTACT_FORM,
      payload: { ...contactForm }
    };
    expect(actions.setContactForm(contactForm)).toEqual(expectedAction);
  });

  it("should create an action to submit a contact form", () => {
    const contactForm = {
      firstName: "Kiyokado",
      lastName: "Komatsu",
      email: undefined
    };
    const expectedAction = {
      type: actions.ActionKeys.SUBMIT_CONTACT_FORM,
      payload: { ...contactForm }
    };
    expect(actions.submitContactForm(contactForm)).toEqual(expectedAction);
  });
});
