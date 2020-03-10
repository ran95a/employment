# -*- coding: utf-8 -*-
# Copyright (c) 2020, frappe and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.mapper import get_mapped_doc
from frappe.model.document import Document

class VacantPositionList(Document):
	pass

@frappe.whitelist()
def make_employee(source_name, target_doc=None):
	
	def set_missing_values(source, target):
		pass
	doc = get_mapped_doc("Vacant Position List", source_name, {
			"Vacant Position List": {
				"doctype": "Employee Arrival List",
				"field_map": {	
		            "request_gendar": "gender",
		            "date_open_for_request": "date_of_joining"			 
				}}
		}, target_doc, set_missing_values)
	return doc
