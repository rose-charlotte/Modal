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

Specifics props for the buttons:

**key**: string.

**text**: to specify button usage.

**onClick()**: to pass any function to the button.

**style**: ( React.CSSProperties) to style the button

## Use of the storybook

To have a view of what can be the modal, run:

```
npm run storybook
```
