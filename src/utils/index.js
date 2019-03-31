export const checkElemetnts = (component, text, element, result) => {
  it(text, () => {
    const findElement = component.find(`[data-test='${element}']`);
    expect(findElement.length).toBe(result);
  });
};
