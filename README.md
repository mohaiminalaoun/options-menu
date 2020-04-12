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
       },
      classes: 'myCustomClass'
     },
     {
       text: "Item 2",
       fn: function() {
         console.log("you clicked item 2");
        }
      },
      {
        divider: true // adds a divider
      },
      {
        text: "Disabled Option",
        optionDisabled: true;
      },
      {
        text: 'No highlight on hover',
        hoverDisabled: true
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

Menu options can have this structure:

```
// The fields are all optional
{
  divider: true/false // this takes precedence, if true we'll disregard all other properties
  text: '',
  fn: fn,
  classes: 'customClass1 customClass2', // any custom class of a particular menu option
  hoverDisabled: true/false, // will not change background color on hover if true
  optionDisabled: true/false // will be unclickable if true
}

```

Instead of passing the css paramters as options, you can also overwrite the
default styles in your css with the following css classes:

```
._floating-menu-ctr {
  // for the entire menu
  // should use !important to override default styles if not provided in JS.
}
._floating-menu-item {
  // for the individual rows
}
._floating-menuItem-hover {
  // when row hover occurs
}
```
