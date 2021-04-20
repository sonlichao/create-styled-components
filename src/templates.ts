export default {
    jsTemplate: `import { chakra, ChakraProps } from "@chakra-ui/system";
    import React from "react";
    
    interface Props {
      children: React.ReactNode;
    }
    interface DOMProps extends Props {
      style: ChakraProps;
    }
    
    const DOM{{componentName}}: React.VFC<DOMProps> = ({ style, children }) => (
      <chakra.div role="" aria-label="" {...style}>
        {children}
      </chakra.div>
    );
    
    const StyledListBar: React.VFC<Props> = props => (
      <DOM{{componentName}}
        style={{
          d: "flex",
          __css: {
            "&>*": {
              mx: 4,
            },
          },
        }}
        {...props}
      />
    );
    
    export const {{componentName}} = Styled{{componentName}};
`,
    tsTemplate: `import { chakra, ChakraProps } from "@chakra-ui/system";
    import React from "react";
    
    interface Props {
      children: React.ReactNode;
    }
    interface DOMProps extends Props {
      style: ChakraProps;
    }
    
    const DOM{{componentName}}: React.VFC<DOMProps> = ({ style, children }) => (
      <chakra.div role="" aria-label="" {...style}>
        {children}
      </chakra.div>
    );
    
    const StyledListBar: React.VFC<Props> = props => (
      <DOM{{componentName}}
        style={{
          d: "flex",
          __css: {
            "&>*": {
              mx: 4,
            },
          },
        }}
        {...props}
      />
    );
    
    export const {{componentName}} = Styled{{componentName}};
`,
    spec: `import { fireEvent, render, screen, waitFor } from "@testing-library/react";
    import jest from "jest-mock";
    import * as React from "react";
    
    import { {{componentName}} } from "./{{componentName}}";
    
    const onSave = jest.fn<void, [AdAuth]>(s => s);

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
    
      test.each(["displayName", "hostname", "adminId", "port"])(
        "should display required error when displayname/hostname/adminId/port is invalid",
        async (filedName: string) => {
          const searchName = new RegExp(\`\${key}.\${filedName}\`, "i");
          const roleType = filedName === "port" ? "spinbutton" : "textbox";
          fireEvent.input(screen.getByRole(roleType, { name: searchName }), {
            target: {
              value: "",
            },
          });
          fireEvent.submit(screen.getByTestId("submit-button"));
          await waitFor(() => expect(onSave).not.toBeCalled());
          await expect(
            screen.findAllByText("Your input is required"),
          ).resolves.toHaveLength(1);
        },
      );
    });   
`,
storybook: `import React from "react";

import { {{componentName}} } from "./{{componentName}}";

export default {
  title: "{path}/{{componentName}}",
  component: {{componentName}},
};

export const Main = () => <{{componentName}} />;

`,

index: `
export { {{componentName}} } from "./{{componentName}}";
`
};