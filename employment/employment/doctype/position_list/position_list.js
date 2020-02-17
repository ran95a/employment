// Copyright (c) 2020, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Position List', {
        refresh: function (frm) {
		if ((!frm.doc.__islocal) && (frm.doc.status == 'Arrived Externally'))
                                   {
			frm.add_custom_button(__('Create Employee'),
				function () {
					erpnext.job_offer.make_employee(frm);
				}
                 
                             }
			);

    }




	}
