/**
 *
 */
pimcore.registerNS("pimcore.object.tags.customdatacomponent");
pimcore.object.tags.customdatacomponent = Class.create(pimcore.object.tags.select, {

    type: "customdatacomponent",

    initialize: function (data, fieldConfig) {
        this.data = data;
        this.fieldConfig = fieldConfig;
    },

    getLayoutEdit: function ($super) {
        $super();

        this.storeoptions = {
            autoDestroy: true,
            proxy: {
                type: 'ajax',
                url: "/plugin/Customdatacomponent/index/values",
                reader: {
                    type: 'json',
                    rootProperty: 'id'
                }
            },
            fields: ["id", "value", "text"],
            listeners: {
                load: function() {
                }.bind(this)
            }
        };

        this.store = new Ext.data.Store(this.storeoptions);

        var options = {
            name: this.fieldConfig.title,
            triggerAction: "all",
            editable: true,
            typeAhead: true,
            forceSelection: true,
            selectOnFocus: true,
            fieldLabel: this.fieldConfig.customoption,
            store: this.store,
            componentCls: "object_field",
            width: 250,
            style: "margin: 10px",
            labelWidth: 100,
            valueField: "value"
        };

        if (this.fieldConfig.width) {
            options.width = this.fieldConfig.width;
        } else {
            options.width = 300;
        }

        options.width += options.labelWidth;

        if (this.fieldConfig.height) {
            options.height = this.fieldConfig.height;
        }

        if (typeof this.data == "string" || typeof this.data == "number") {
            options.value = this.data;
        }

        this.component = new Ext.form.ComboBox(options);

        this.store.load();

        return this.component;
    }
});