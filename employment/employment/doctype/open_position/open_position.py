# -*- coding: utf-8 -*-
# Copyright (c) 2020, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.mapper import get_mapped_doc
from frappe.model.document import Document

class OpenPosition(Document):
	pass 
	
	
@frappe.whitelist()
def make_employee(source_name, target_doc=None):
	
	def set_missing_values(source, target):
		pass
	doc = get_mapped_doc("Open Position", source_name, {
			"Open Position": {
				"doctype": "Employee",
				"field_map": {
					"name1": "first_name",
		            "status": "status",	
		            "gender": "gender",
		            "date_open_for_request": "Date of Joining"			 
				}}
		}, target_doc, set_missing_values)
	return doc
