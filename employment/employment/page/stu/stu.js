frappe.pages['stu'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'status',
		single_column: true
	});
}