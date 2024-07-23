# Modal

This repo is a basic model for a modal.
It contains the very basic implementation of a modal, including its own test and accessibility test

## How to use

You first need to authenticate to Github packages, follow the documentation at[GitHub Packages Documentation](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package)

Then run

```
npm install @rose-charlotte/modal
```

## Modal's props

**With this modal you can modify certains elements, using the following props:**
`title`: to add a main title to your modal.
`children`: to add any type of children inside the modal, like a text or a list ...
`buttonProps`: to add different type of buttons.
`styles`: as ModalStyles props, allows to choose style according to the HTML element choosen
`onCancel()`: if canCancel is settled to true, the fonction onCancel is accessible. It allows, for example, to close the modal with the keyboard escape button.

**Specifics props for the buttons:**
`key`: string.
`disabled`: (optional) boolean.
`text`: to specify button usage.
`onClick()`: to pass any function to the button.
`styles`:(optional) (combinedStyles) style for all buttons except the closing one

**Specifics props for the styles, in line or with class:**

**CombinedStyles**
`className`:(optional) To add classes
`style`:(optional) for css in line

**ModalStyles**:
`dialog`:(optional) (CombinedStyles) style for the diolog;
`container`: (optional) (CombinedStyles) style for the container;
`title`: (optional) (CombinedStyles) styles for the title;

## Use of the storybook

To have a view of what can be the modal, run:

```
npm run storybook
```
