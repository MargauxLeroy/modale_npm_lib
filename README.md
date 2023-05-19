# HRnet plugin

This package is meant to be used for an OpenClassrooms project.
This is a simple customizable modal component for React.

## Installation

The package can be installed with the command line :

```sh
npm i modale_npm_lib
```

## Usage

It can be imported in your project with :

```sh
import { Modal } from "modale_npm_lib";
```

## PropTypes

You can customize a couple props in your modal :

|    Name     |                    Type                    | Required |                                                          Usage                                                          |
| :---------: | :----------------------------------------: | :------: | :---------------------------------------------------------------------------------------------------------------------: |
|    title    |                   string                   |   yes    |                                                   Title of the modal                                                    |
| description |                   string                   |   yes    |                                           Complementary message of the modal                                            |
|  displayed  |                  Boolean                   |   yes    |       displayed should be linked to a useState with `false` as default value ans set to `true` to open the modal        |
|   onClick   | React.MouseEventHandler<HTMLButtonElement> |    no    | Should be used to close the modal with set the useState to `false` like this : `onClick={() => setModalDisplay(false)}` |
