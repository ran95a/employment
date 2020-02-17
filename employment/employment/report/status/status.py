# Copyright (c) 2013, frappe and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
# import frappe

def execute(filters=None):
	columns, data = [
                         {
                          "fieldname": "status",
                         "label": _("Status"),
                         "fieldtype": "Select",
                         "options": "Hold",
                         "width": 300
                        }

                      ], []
	return columns, data

