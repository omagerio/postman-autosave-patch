const common=require("../common"),IPC=require("./ipc"),{spawn:spawn,IPCNode:IPCNode}=require("./node-process"),desktopAPIs={IPC:IPC,NodeProcess:{spawn:spawn},IPCNode:IPCNode},sdk=Object.assign({},common,desktopAPIs);global.pm=global.pm||{sdk:sdk,logger:{info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),getContext:function(o,e){return{api:o,domain:e}}}};

setInterval(() => {
    try {
      let save_buttons = document.querySelectorAll(".request-editor-save-button__label");
      for (let save_button of save_buttons) {
        if(save_button.parentElement.className.indexOf("disabled") == -1){
            save_button.click();
        }
      }
    } catch (e) {
      console.log(e)
    }
  }, 1000);