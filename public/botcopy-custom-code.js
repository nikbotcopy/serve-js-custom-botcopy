window.addEventListener("botcopy-events", function (e) {
  switch (e.detail.type) {
    case "bc-window-open":
      // do something
      alert("Window Open");
      break;

    case "bc-window-close":
      //alert("Window close");

      // do something
      break;
  }
});

document.getElementById("closeWindow").addEventListener("click", closeWindow);
document.getElementById("openWindow").addEventListener("click", openWindow);
document.getElementById("sendEvent").addEventListener("click", sendEvent);


function closeWindow() {
  Botcopy.closeWindow();
}
function openWindow() {
  Botcopy.openWindow();
}

function sendEvent(text, contextName, lifespan, parameters = {}) {
  Botcopy.sendEvent('evenet_sample', {
    name: contextName || "context-name",
    lifespanCount: lifespan || 2,
    parameters: parameters,
  });
}



//evenet_sample