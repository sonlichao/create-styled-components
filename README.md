# create-styled-components README

## Features
This extension is partial copied from below github project and change templates for our project.  
[brendon1555/vscode-react-component-generator](https://github.com/brendon1555/vscode-react-component-generator)

It can create template components with typescript, jest test and storybook
### About Template.
Our template use below librays.  
@testing-library/react  
jest  
typescript  
@chakra-ui  
react-i18next(for localize)  

## Japanese document
see document/Create Styled Components for Vscode.pptx

## Install

### From vsix file
1. Download vsix file from dist fold like blow.
   create-styled-components-0.0.1.vsix.

2. Click the extension icon in VSCode.
3. Click the [...] in top-right of extension window.
4. Click the  [Install from VSIX] in submenu.
5. Select you downloaded vsix file and install it.

## Usage

### From Explorer

- Right click the folder in the sidebar where you want to create a component.
- Select `Create Styled Component`.
- Select whether to use Typescript(only), and include Storybook or Tests.
- Enter a name for the Component.
- A Component will be created in a directory named after your input.

### From Command Palette

- Open the command palette and type `Create Styled Component`, press `Enter`.
- Select whether to use Typescript(only), and include Storybook or Tests.
- Enter a name for the Component.
- A Component will be created in a directory named after your input.


## Configuration

You can access to the extension's settings through VSCode settings. You can customize:

### `reactComponentGenerator.componentsPath` (default: `""`)
Path relative to the workspace root to place components when not using the Explorer.



## Known Issues


## Release Notes


### 0.0.1


-----------------------------------------------------------------------------------------------------------
## Following extension guidelines
[see here](url:https://code.visualstudio.com/api/get-started/your-first-extension)

## generate installer file command
`npm install -g vsce`

`vsce package`  

[more](url:https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
