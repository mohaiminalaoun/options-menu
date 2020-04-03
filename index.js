var createMenu;
// var setUpMenu = function() {
//   var link = document.createElement("link");
//   // set the attributes for link element
//   link.rel = "stylesheet";
//   link.type = "text/css";
//   link.href = "style.css";
//   document.getElementsByTagName("HEAD")[0].appendChild(link);
// };

(function() {
  let position;

  /*  setTimeout(function() {
    createMenu();
  }, 2000); */

  function setCurtainStyle(curtain) {
    curtain.style.position = "absolute";
    curtain.style.height = "100vh";
    curtain.style.width = "100vw";
    curtain.style.top = "0";
    curtain.style.left = "0";
    curtain.style.zIndex = "2";
  }

  function setMenuItemStyle(item) {
    item.style.height = "40px";
    item.style.lineHeight = "40px";
    item.style.border = "1px solid #3e3e3e14";
    item.style.paddingLeft = "8px";
  }
  function setMenuStyle(evt, menu) {
    menu.style.position = "absolute";
    menu.style.minWidth = "200px";
    menu.style.backgroundColor = "white";
    menu.style.borderRadius = "8px";
    menu.style.boxShadow = "rgba(0, 0, 0, 0.75) -1px 0px 24px -11px";
    menu.style.fontFamily = "Roboto";
    menu.style.fontSize = "14px";
    menu.style.zIndex = "4";
    menu.style.top = evt.clientX + "px";
    menu.style.left = evt.clientY + "px";
  }

  function createCurtain() {
    var curtain = document.createElement("div");
    curtain.classList.add("curtain");
    setCurtainStyle(curtain);
    document.body.appendChild(curtain);
    return curtain;
  }

  createMenu = function createMenu(evt, options) {
    evt = evt || { clientX: 50, clientY: 200 };
    var curtain = createCurtain();
    options = options || [
      {
        text: "Do this",
        fn: function() {
          console.log("do this");
        }
      },
      {
        text: "Do that",
        fn: function() {
          console.log("do that");
        }
      },
      {
        text: "eat this",
        fn: function() {
          console.log("eat this");
        }
      },
      {
        text: "eat that",
        fn: function() {
          console.log("eat that");
        }
      }
    ];
    var menu = document.createElement("div");
    setMenuStyle(evt, menu);
    menu.classList.add("menu");
    options.forEach(function(item) {
      var div = document.createElement("div");
      div.innerText = item.text;
      div.classList.add("menu-item");
      setMenuItemStyle(div);
      menu.appendChild(div);
      div.onclick = function() {
        removeMenu(menu, curtain);
        item.fn();
      };
    });
    document.body.appendChild(menu);

    curtain.onclick = removeMenu.bind(this, menu, curtain);
  };

  function removeMenu(menu, curtain) {
    document.body.removeChild(menu);
    document.body.removeChild(curtain);
  }

  window.createMenu = createMenu;
})();

module.exports.createMenu = createMenu;
