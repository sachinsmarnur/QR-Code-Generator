document.getElementById("generate-btn").addEventListener("click", function () {
  var url = document.getElementById("url-input").value;
  var size = parseInt(document.getElementById("size-select").value);
  QRCode.toCanvas(url, { width: size }, function (error, canvas) {
    if (error) console.error(error);
    document.getElementById("qr-output").innerHTML = "";
    document.getElementById("qr-output").appendChild(canvas);
    document.getElementById("save-btn").style.display = "block";
  });
});

document.getElementById("reset-btn").addEventListener("click", function () {
  document.getElementById("url-input").value = "";
  document.getElementById("qr-output").innerHTML = "";
  document.getElementById("save-btn").style.display = "none";
});

document.getElementById("save-btn").addEventListener("click", function () {
  var canvas = document.getElementById("qr-output").querySelector("canvas");
  var image = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
  var link = document.createElement("a");
  link.download = "qr-code.png";
  link.href = image;
  link.click();
});
