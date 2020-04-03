# What is this?

Test code for floating options menu.

# Installation

`npm i floating-options-menu --save`

Then ....

```
import {createMenu} from 'cool-options-menu';

element.onClick((evt) => {
  createMenu(evt, [
    {
      text: "Item 1",
      fn: function() {
        console.log("you clicked item 1");
       }
     }
     {
       text: "Item 2",
       fn: function() {
         console.log("you clicked item 2");
        }
      }
    ])
});

```
