from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("employment"),
			"items": [
				
				{
					"type": "doctype",
					"name": "Position List",
					"onboard": 1,
				},
				{
					"type": "doctype",
					"name": "Open Position",
					"onboard": 1,
				},
                                {
					"type": "doctype",
					"name": "Employee",
					"onboard": 1,
				},
				
				
			]
		},
		
	]
