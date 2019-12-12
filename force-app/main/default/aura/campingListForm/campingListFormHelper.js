({
    createItem : function(component, item) {
        var newItem = component.get("v.newItem");
        var addItemEvent = component.getEvent("addItem");
        addItemEvent.setParams({ "item": newItem });
        addItemEvent.fire();

        // reset this val to empty 
        component.set("v.newItem", "{'sobjectType': 'Camping_Item__c', 'Quantity__c': 0, 'Price__c': 0}");
    }
})