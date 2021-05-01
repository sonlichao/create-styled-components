export default {
    jsTemplate: `
`,
    tsTemplate: `import type { ChakraProps } from "@chakra-ui/react";
    import { chakra } from "@chakra-ui/system";
    import React from "react";
    
    import { localize } from "~/utils/react";
    
    interface Props {
      children?: React.ReactNode;
    }
    
    interface StyledProps extends Props {
      onClick?: () => void;
    }
    interface DOMProps extends StyledProps {
      styles: ChakraProps;
    }
    
    const DOM{{componentName}}: React.VFC<DOMProps> = localize(
      ({ styles, children }, t) => (
        <chakra.div role="" aria-label="" {...styles}>
          {children}
        </chakra.div>
      ),
    );
    
    export const Styled{{componentName}}: React.VFC<StyledProps> = props => (
      <DOM{{componentName}}
        styles={
          {
          d: "flex",
          __css: {
            "&>*": {
              mx: 4,
            },
          },
        }
      }
        {...props}
      />
    );

    // export const {{componentName}} = Styled{{componentName}};
    export const {{componentName}}: React.VFC<Props> = props => {
      return (
        <Styled{{componentName}}
          {...props}
        />
      );
    };
    
`,
    spec: `import { fireEvent, render, screen, waitFor } from "@testing-library/react";
    import jest from "jest-mock";
    import * as React from "react";
    
    import { {{componentName}} } from "./{{componentName}}";

    // you can change "string" to  function arguments
    const onSave = jest.fn<void, [string]>(s => s);

    test("{{componentName}}", () => {
        const input = render(<{{componentName}} />);
        fireEvent.click(input.getByRole(""));
        expect(input.container.querySelector("input")?.checked).toBeFalsy();
        fireEvent.click(input.getByRole(""));
        expect(input.container.querySelector("input")?.checked).toBeTruthy();
      });

    describe("{{componentName}} DOM ", () => {
      beforeEach(() => {
        render(<{{componentName}} />);
      });
      afterEach(() => {
        onSave.mockClear();
      });
    
      test("Click save button should to call save method", async () => {
        fireEvent.submit(screen.getByTestId("submit-button"));
        await waitFor(() => expect(onSave).toBeCalled());
      });
    });   
`,
storybook: `import React from "react";

import { Styled{{componentName}} } from "./{{componentName}}";

export default {
  title: "{path}/{{componentName}}",
  component: Styled{{componentName}},
};

export const Main = () => <Styled{{componentName}} />;

`,

index: `
export { {{componentName}} } from "./{{componentName}}";
`
};