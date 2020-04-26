import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Customizer, createTheme, Fabric, Checkbox } from 'office-ui-fabric-react';
import { mount } from 'enzyme';

const rtlTheme = createTheme({ rtl: true });
const ltrTheme = createTheme({ rtl: false });

describe('Fabric', () => {
  it('renders a Fabric component correctly', () => {
    const component = renderer.create(<Fabric>test</Fabric>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a Fabric component with applyTheme correctly', () => {
    const component = renderer.create(<Fabric applyTheme>test</Fabric>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a Fabric component in RTL and LTR theme', () => {
    const content = (
      <div>
        <Fabric dir="ltr">
          <Checkbox label="I am in ltr" />

          <Fabric dir="rtl">
            <Checkbox label="I am in rtl, inside of ltr" />

            <Fabric dir="ltr">
              <Checkbox label="I am in ltr, inside of rtl, inside of ltr" />
            </Fabric>
          </Fabric>
        </Fabric>
        <Fabric dir="rtl">
          <Checkbox label="I am in rtl" />

          <Fabric dir="ltr">
            <Checkbox label="I am in ltr, inside of rtl" />

            <Fabric dir="rtl">
              <Checkbox label="I am in rtl, inside of rtl, inside of rtl" />
            </Fabric>
          </Fabric>
        </Fabric>
      </div>
    );
    // Render with no theme context
    const component = renderer.create(content);
    // Render in RTL context
    const rtlComponent = renderer.create(<Customizer settings={{ theme: rtlTheme }}>{content}</Customizer>);
    // Render in LTR Context
    const ltrComponent = renderer.create(<Customizer settings={{ theme: ltrTheme }}>{content}</Customizer>);

    const tree = component.toJSON();
    const rtlTree = rtlComponent.toJSON();
    const ltrTree = ltrComponent.toJSON();
    expect(tree).toMatchSnapshot();
    expect(rtlTree).toMatchSnapshot();
    expect(ltrTree).toMatchSnapshot();
  });

  it('renders as a span using the "as" prop', () => {
    const component = renderer.create(<Fabric as="span" />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a Fabric component with applyThemeToBody correctly', () => {
    const wrapper = mount(<Fabric applyThemeToBody>test</Fabric>);
    expect(wrapper.getDOMNode().getElementsByClassName('bodyThemed')).toBeTruthy();
  });
});
