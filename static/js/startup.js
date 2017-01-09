pimcore.registerNS("pimcore.plugin.customdatacomponent");

pimcore.plugin.customdatacomponent = Class.create(pimcore.plugin.admin, {
    getClassName: function() {
        return "pimcore.plugin.customdatacomponent";
    },

    initialize: function() {
        pimcore.plugin.broker.registerPlugin(this);
    },
 
    pimcoreReady: function (params,broker){
        // alert("Customdatacomponent Plugin Ready!");
    }
});

var customdatacomponentPlugin = new pimcore.plugin.customdatacomponent();

