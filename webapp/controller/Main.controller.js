sap.ui.define(
	['../controller/BaseController', 'sap/ui/model/json/JSONModel'],
	function (BaseController, JSONModel) {
		'use strict';

		return BaseController.extend('<%= namespace + "." + name + ".controller.Main" %>', {
			onInit: function () {
				let oAppModel = new JSONModel({});
				this.setAppModel(oAppModel, 'appModel');
			}
		});
	}
);
