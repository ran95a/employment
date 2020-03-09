// Copyright (c) 2020, frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Vacant Position List', {
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
frappe.ui.form.on('Vacant Position List', {
refresh: function (frm) {
		if ((!frm.doc.__islocal)){
			frm.add_custom_button(__('Drop'),
				function () {
					make_drop(frm);
				}               
			);
        }
	}
});
let make_employee = function (frm) {
	frappe.model.open_mapped_doc({
		method:"employment.recruitment_status_report(rsr).doctype.vacant_position_list.vacant_position_list.make_employee",
		frm: frm
	});
};
let make_drop = function (frm) {
	frm.set_value('verified_date','');
	frm.set_value('budget_approval_sent','');
	frm.set_value('budget_approval_recevied','');
	//frm.set_value('residentynational_id','');
	//frm.set_value('passport_no','');
	frm.set_value('dsg_src','');
	frm.set_value('job_title','');
	frm.set_value('job_catogrey','');
	frm.set_value('department','');
	frm.set_value('candidate_list','');
	//frm.set_value('loc_cen','');
	//frm.set_value('gender','');
	//frm.set_value('msd_sent','');
	//frm.set_value('msd_recevied','');
	frm.set_value('date_open_for_request','');
	//frm.set_value('etaarrv_date','');
	frm.set_value('time_line','');
	//frm.set_value('rec_cen','');
	frm.set_value('requision_date','');
	frm.set_value('time_line_rd','');
	frm.set_value('request_gendar','');
	frm.set_value('remarks','');
	frm.set_value('er','');
};
