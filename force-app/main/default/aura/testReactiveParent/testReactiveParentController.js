({
  updateName: function(component, event, helper) {
    component.set("v.name", "nathan");
    console.log(`name updated to ${component.get("v.name")}`);
    setTimeout(function() {
      component.set("v.name", "kass");
    }, 1000);
  }
});
