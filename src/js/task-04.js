// document.addEventListener("keydown", event => {
//     console.log("Keydown: ", event);
//   });
  
//   document.addEventListener("keyup", event => {
//     console.log("Keyup: ", event);
//   });



  document.addEventListener("keydown", event => {
    event.preventDefault();
  
    if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
      console.log("«Ctrl + s» or «Command + s» combo");
    }
  });