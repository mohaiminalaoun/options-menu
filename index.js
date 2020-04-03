var createMenu;
var setUpMenu = function() {
  var link = document.createElement("link");
  // set the attributes for link element
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "style.css";
  document.getElementsByTagName("HEAD")[0].appendChild(link);
};

(function() {
  var link = document.createElement("link");
  // set the attributes for link element
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "style.css";
  document.getElementsByTagName("HEAD")[0].appendChild(link);

  let position;

  /*  setTimeout(function() {
    createMenu();
  }, 2000); */

  function createCurtain() {
    var curtain = document.createElement("div");
    curtain.classList.add("curtain");
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
    menu.classList.add("menu");
    options.forEach(function(item) {
      var div = document.createElement("div");
      div.innerText = item.text;
      div.classList.add("menu-item");
      menu.appendChild(div);
      div.onclick = function() {
        removeMenu(menu, curtain);
        item.fn();
      };
    });
    setStyle(evt, menu);
    document.body.appendChild(menu);

    curtain.onclick = removeMenu.bind(this, menu, curtain);
  };

  function setStyle(evt, menu) {
    menu.style.top = evt.clientX;
    menu.style.left = evt.clientY;
  }

  function removeMenu(menu, curtain) {
    document.body.removeChild(menu);
    document.body.removeChild(curtain);
  }

  window.createMenu = createMenu;
})();

module.exports.createMenu = createMenu;
module.exports.setUpMenu = setUpMenu;
