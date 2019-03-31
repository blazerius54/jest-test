import checkPropTypes from 'check-prop-types';

export const checkElemetnts = (component, text, element, result) => {
  it(text, () => {
    const findElement = component.find(`[data-test='${element}']`);
    expect(findElement.length).toBe(result);
  });
};

export const propsError = (component, expectedProps) =>
  checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
