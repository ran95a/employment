// Copyright (c) 2020, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Open Position', {
	refresh: function (frm) {
		if ((!frm.doc.__islocal) && (frm.doc.status == 'Arrived Externally')){
			frm.add_custom_button(__('Create Employee'),
				function () {
					make_employee(frm);
				}               
			);
        }
	}
});
let make_employee = function (frm) {
	frappe.model.open_mapped_doc({
		method: "employment.employment.doctype.open_position.open_position.make_employee",
		frm: frm
	});
};
