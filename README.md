# Modal

This repo is a basic model for a modal.
It contains a very basic implementation of a modal, including its own test and accessibility test.

## How to use

You first need to authenticate to Github packages. Follow the documentation at [GitHub Packages Documentation](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package)

Then run:

```
npm install @rose-charlotte/modal
```

## Modal's props

### With this modal you can modify certain elements using the following props:

`title`: To add a main title to your modal.

`children`: To add any type of children inside the modal, like a text or a list ...

`buttonProps`: To add different types of buttons.

`styles`: As ModalStyles props, allows you to choose the style according to the HTML element chosen

`onCancel()`: If canCancel is set to true, the function onCancel is accessible. It allows, for example, closing the modal with the keyboard escape button.

### Specific props for the buttons:

`key`: string.

`disabled` (optional): boolean.

`text`:To specify button usage.

`onClick()`: To pass any function to the button.

`styles`(optional): (combinedStyles) style for buttons

### Specific props for the styles, inline or with class:

**CombinedStyles**

`className`(optional): To add classes

`style`(optional): For css in line

**ModalStyles**

`dialog`(optional): (CombinedStyles) Style for the diolog;

`container`(optional): (CombinedStyles) Style for the container;

`title` (optional): (CombinedStyles) Style for the title;

## Example:

This is an example of how you can use the modal:

```
<Modal
title="Example"
children={<span>This is an example for the modal!</span>}
styles={{
    dialog: { className: style.dialog },
    container: { className: style.container },
    title: { style: { fontSize: "25px" } },
        }}
canCancel
onCancel={() => setIsModalOpened(false)}
buttonProps={[
                {
                key: "Close",
                onClick: () => setIsModalOpened(false),
                text: "close",
                styles: {
                className: style.closeBtn,
                        },
                },
            ]}
/>
```

## Use of the storybook

To have a view of what can be the modal, run:

````

npm run storybook

```

```
````
