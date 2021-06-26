sap.ui.define(
	['sap/ui/core/mvc/Controller', 'sap/m/MessageBox'],
	function (Controller, MessageBox) {
		'use strict';

		return Controller.extend('com.templates.sap.ui5boilerplate.controller.BaseController', {
			getAppModel: function (sModel) {
				return this.getOwnerComponent().getModel(sModel || '');
			},
			setAppModel: function (oData, sModel) {
				return this.getOwnerComponent().setModel(oData, sModel || '');
			},
			getViewModel: function (sModel) {
				return this.getView().getModel(sModel || '');
			},
			setViewModel: function (oData, sModel) {
				return this.getView().setModel(oData, sModel || '');
			},
			getResourceBundle: function () {
				return this.getOwnerComponent().getModel('i18n').getResourceBundle();
			},
			/**
			 * Show a Message Box with Title and Description
			 *
			 * @param {string} sType
			 * @param {string} sTitle
			 * @param {string} sMessage
			 * @returns
			 */
			showMessageBox: function (sType, sTitle, sMessage) {
				return MessageBox[sType](sMessage, {
					title: sTitle,
					id: 'msgbxId'
				});
			}
		});
	}
);
