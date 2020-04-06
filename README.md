# What is this?

Small package to create a floating options/context menu.

# Installation

`npm i floating-options-menu --save`

Then ....

```
import {createMenu} from 'floating-options-menu';

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
    ],
    // optional parameters (you can pass any or all of the fields)
    {
      bgColor: ...
      hoverBgColor: ...
      borderRadius: ...
      fontColor: ...
      hoverFontColor: ...
      boxShadow: ...
      width: ...
      }
    )
});

```

Instead of passing the css paramters as options, you can also overwrite the
default styles in your css with the following css classes:

```
._floating-menu-ctr {
  // for the entire menu
  // should use !important to override default styles if not provided in JS.
}
._floating-menu-item {
  // for the individual row
}
._floating-menuItem-hover {
  // when row hover occurs
}
```
