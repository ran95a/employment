from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Recruitment Status Report(RSR)"),
			"items": [
				
				{
					"type": "doctype",
					"name": "Vacant Position List",
					"onboard": 1,
				},
				{
					"type": "doctype",
					"name": "Candidate List",
					"onboard": 1,
				},
                {
					"type": "doctype",
					"name": "Employee Arrival List",
					"onboard": 1,
                 },
                 {
					"type": "doctype",
					"name": "Employee Resignation",
					"onboard": 1,
				},
				
				
			]
		},
		
	]
