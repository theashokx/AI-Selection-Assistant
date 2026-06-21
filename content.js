document.addEventListener("mouseup", () => {
  const selectedText = window.getSelection().toString().trim();

  if (!selectedText) return;

  let popup = document.getElementById("ai-popup");

  if (!popup) {
    popup = document.createElement("div");

    popup.id = "ai-popup";

    popup.innerHTML = `
            <div id="ai-header">
                🤖 AI Assistant
            </div>

            <div id="ai-content">
            </div>
        `;

    document.body.appendChild(popup);

    makeDraggable(popup);
  }

  document.getElementById("ai-content").innerHTML = `
            <strong>Selected Text:</strong>
            <br><br>
            ${selectedText}
        `;
});

function makeDraggable(element) {
  const header = element.querySelector("#ai-header");

  let isDragging = false;

  let offsetX;
  let offsetY;

  header.addEventListener("mousedown", (e) => {
    isDragging = true;

    offsetX = e.clientX - element.offsetLeft;

    offsetY = e.clientY - element.offsetTop;
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    element.style.left = e.clientX - offsetX + "px";

    element.style.top = e.clientY - offsetY + "px";

    element.style.right = "auto";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
}
