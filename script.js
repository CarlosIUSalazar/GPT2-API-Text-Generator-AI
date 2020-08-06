let text = document.getElementById("myText");
let output = document.getElementById("myText2");

text.value = "";
output.value = "";

function submitText() {
  text = document.getElementById("myText").value;
  console.log(text);
  output.value = "Please wait...";
  deepai.setApiKey("85b4427e-815e-4efd-99e2-de892b8f2d22");
  (async function () {
    var resp = await deepai.callStandardApi("text-generator", {
      text: text,
    });
    await console.log(resp);
    output.value = resp.output;
  })();
}
