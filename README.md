# Modal

This repo is a basic model for a modal.
It contains the very basic implementation of a modal, including its own test and accessibility test

## How to use

To install the modal package, ....

## Modal's props

With this modal you can modify certains elements, using the following props:

**title**: to add a main title to your modal.

**children**: to add any type of children inside the modal, like a text or a list ...

**hideCloseButton**: (boolean) to hide the basic closing button.

**buttonProps**: to add different type of buttons.

**styles**: as ModalStyles props, allows to choose style according to the HTML element choosen

Specifics props for the buttons:

**key**: string.

**text**: to specify button usage.

**onClick()**: to pass any function to the button.

**styles**: (combinedStyles) style for all buttons except the closing one

Specifics props for the styles, in line or with class:

**ModalStyles**:
dialog?: (CombinedStyles) style for the diolog;
container?: (CombinedStyles) style for the container;
title?: (CombinedStyles) styles for the title;
closeButton?: (CombinedStyles) styles for the closing;

**CombinedStyles**
className?: To add classes
style?: fot css in line

## Use of the storybook

To have a view of what can be the modal, run:

```
npm run storybook
```
