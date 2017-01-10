/**
 * Custom data component - configuration
 */

pimcore.registerNS("pimcore.object.classes.data.customdatacomponent");
pimcore.object.classes.data.customdatacomponent = Class.create(pimcore.object.classes.data.data, {

    type: "customdatacomponent",

    /**
     * define where this datatype is allowed
     */
    allowIn: {
        object: true,
        objectbrick: false,
        fieldcollection: false,
        localizedfield: false,
        classificationstore : false,
        block: true
    },

    initialize: function (treeNode, initData) {
        this.type = "customdatacomponent";

        this.initData(initData);

        this.treeNode = treeNode;
    },

    getTypeName: function () {
        return 'Custom data component';
    },

    getIconClass: function () {
        return "pimcore_icon_select";
    },

    getGroup: function () {
        return "select";
    },

    getLayout: function ($super) {
        $super();

        this.specificPanel.removeAll();
        this.specificPanel.add([
            {
                xtype: "textfield",
                fieldLabel: 'Custom option',
                name: "customoption",
                value: this.datax.customoption
            }
        ]);

        return this.layout;
    },

    applyData: function ($super) {
        $super();
        delete this.datax.options;
    },

    applySpecialData: function(source) {
        if (source.datax) {
            if (!this.datax) {
                this.datax =  {};
            }
        }
    }

});