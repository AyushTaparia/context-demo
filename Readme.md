# Context API & Cypress

## Introduction

This demo project shows how context api (useContext and createContext) can be used to create a custom hook that provides value using a provider (wrapper).

This project demonstrates the use of context api to switch themes.

## Dependencies

- Cypress: Used for testing.
- Tailwind: Used for styling.
- React-icons: Used for icons.

## Basic concepts

`Theme.js` is the warehouse for our theme and context api.

- ThemeValue: context
- ThemeToggle: context
- useThemeValue: custom hook to consume context
- useThemeToggle: custom hook to consume context
- ThemeProvider: This is a wrapper that is used to provide context value

`Boxwidth.js:` This is where we consume context, and there are two buttons to switch between themes, and the background color and text color change accordingly.

## Cypress test

This cypress tests for background color when toggletheme button are clicked in sequence as follows:

- Initial background color is checked
- `ToggleButton1` is clicked which changes the theme to dark
- Background is again checked for dark theme
- `ToggleButton2` is clicked which changes the theme to light
- Background color is again checked for light theme

## Boilerplate - Failed cypress

`ToggleButton1` and `ToggleButton2` which are unique identifiers for the buttons are interchanged, which in turn does not change the theme as expected and hence fails the cypress test