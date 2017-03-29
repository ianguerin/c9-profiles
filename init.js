// You can access plugins via the 'services' global variable
/*global services, plugin*/
if (/-ianguerin\.c9users.io$/.test(services.c9.hostname)) {
  setTimeout(function() {
    services.fs.exists("~/c9-workspace-setup", function(exists) {
      if (exists == false) {
        services.tabManager.open({
          editorType: "terminal",
          active: true,
          document: {
            terminal: {
              cwd: "~"
            }
          }
        }, function(e, tab) {
          var repo = "https://github.com/ianguerin/c9-workspace-setup.git";
          tab.editor.write([
            "cd ~",
            "git clone " + repo,
            "cp c9-workspace-setup/gitconfig .gitconfig",
            "cp c9-workspace-setup/project.settings workspace/.c9/project.settings",
            "cd ~/workspace"
          ].join(" &&\\\n") + "\n");
        });
      }
    });
  }, 1000);
}
