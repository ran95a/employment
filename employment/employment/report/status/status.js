// Copyright (c) 2016, frappe and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Status"] = {
	"filters": [
               {

            "fieldname":"status",
            "label": __("Status"),
            "fieldtype": "Select",
            "options": "Hold",
            "default": frappe.defaults.get_user_default("Status")
               },

	]
};
