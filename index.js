(function() {
  let position;

  function setCurtainStyle(curtain) {
    curtain.style.position = "absolute";
    curtain.style.height = "100vh";
    curtain.style.width = "100vw";
    curtain.style.top = "0";
    curtain.style.left = "0";
    curtain.style.zIndex = "2";
  }

  function setMenuItemStyle(item, isDisabled) {
    item.style.height = "40px";
    item.style.lineHeight = "40px";
    item.style.whiteSpace = "nowrap";
    item.style.overflow = "hidden";
    item.style.textOverflow = "ellipsis";
    item.style.paddingLeft = "8px";
    item.style.opacity = isDisabled ? 0.4 : 1;
  }

  function setDividerStyle(item) {
    item.classList.add('_menu-divider');
    item.style.height = '1px'
    item.style.backgroundColor = '#ebebeb';
    item.style.marginTop = '3px';
    item.style.marginBottom = '3px';
  }

  function setMenuStyle(evt, menu, numOptions, dim) {
    menu.style.position = "absolute";
    menu.style.minWidth = dim && dim.minWidth ? dim.minWidth + "px" : "200px";
    menu.style.width = dim ? parseInt(dim.width, 10) + "px" : "";
    menu.style.overflow = dim ? "hidden" : "";
    menu.style.backgroundColor = dim && dim.bgColor ? dim.bgColor : "white";
    menu.style.borderRadius =
      dim && dim.borderRadius ? parseInt(dim.borderRadius, 10) + "px" : "8px";
    menu.style.boxShadow =
      dim && dim.boxShadow
        ? dim.boxShadow
        : "rgba(0, 0, 0, 0.75) -1px 0px 24px -11px";
    menu.style.fontSize = "14px";
    menu.style.zIndex = "4";
    confirmPosition(menu, { y: evt.clientY, x: evt.clientX }, numOptions, dim);
  }

  function confirmPosition(menu, pos, num, dimensions) {
    // assuming 200px width
    var screenWidth = window.innerWidth || (document.documentElement && document.documentElement.clientWidth) || window.screen.width,
      screenHeight = window.innerHeight || (document.documentElement && document.documentElement.clientHeight) || window.screen.height,
      curWidth = ~~(dimensions.width || dimensions.minWidth || 200);
    if ((pos.x + curWidth) > screenWidth) {
      menu.style.left = pos.x - curWidth + "px";
    } else {
      menu.style.left = pos.x + "px";
    }
    if (pos.y + num * 40 > screenHeight) {
      menu.style.top = pos.y - num * 40 + "px";
    } else {
      menu.style.top = pos.y + "px";
    }
  }

  function createCurtain() {
    var curtain = document.createElement("div");
    curtain.classList.add("curtain");
    setCurtainStyle(curtain);
    document.body.appendChild(curtain);
    return curtain;
  }

  createMenu = function createMenu(evt, options, dim) {
    dim = dim || { width: 200 };
    evt = evt || { clientX: 50, clientY: 200 };
    var curtain = createCurtain();
    options = options || [
      {
        text: "Very long task name that will truncate",
        fn: function() {
          console.log("task 1");
        }
      },
      {
        text: "Task Number 2",
        fn: function() {
          console.log("task 2");
        }
      },
      {
        text: "Task Number 3",
        fn: function() {
          console.log("task 3");
        }
      },
      {
        text: "Task Number 4",
        fn: function() {
          console.log("task 4 works!");
        }
      }
    ];
    var menu = document.createElement("div");
    setMenuStyle(evt, menu, options.filter(function(item){
      return !item.divider;
    }).length, dim);
    menu.classList.add("_floating-menu-ctr");
    options.forEach(function(item) {
      var div = document.createElement("div");
      if (item.divider) {
        setDividerStyle(div);
        menu.appendChild(div);
        return;
      }
      div.innerText = item.text;
      div.classList.add("_floating-menu-item");
      if (item.classes) {
        div.classList.add(item.classes);
      }
      setMenuItemStyle(div, item.optionDisabled);
      menu.appendChild(div);
      div.onclick = function() {
        removeMenu(menu, curtain);
        item.fn && item.fn();
      };
      if (!item.hoverDisabled) {
        div.onmouseover = function() {
          div.style.backgroundColor =
            dim && dim.hoverBgColor ? dim.hoverBgColor : "#3e3e3e14";
          div.style.color =
            dim && dim.hoverFontColor ? dim.hoverFontColor : "#265782";
          div.style.cursor = "pointer";
          div.classList.add("_floating-menuItem-hover");
        };
        div.onmouseleave = function() {
          div.style.backgroundColor = "transparent";
          div.style.color = "black";
          div.classList.remove("_floating-menuItem-hover");
        };
      }
    });
    document.body.appendChild(menu);

    curtain.onclick = removeMenu.bind(this, menu, curtain);
  };

  function removeMenu(menu, curtain) {
    document.body.removeChild(menu);
    document.body.removeChild(curtain);
  }

})();

module.exports.createMenu = createMenu;
