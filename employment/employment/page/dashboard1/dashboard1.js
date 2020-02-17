frappe.pages['dashboard1'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Dashboard1',
		single_column: true
	});
     console.log(page);
     page.add_menu_item('projects',() => frappe.set_route('List','Project'))
    //debugger;
    const graph = new frappe.ui.Graph({
    height:140,
    mode:'line';  
    parent:page.main,
    x:{
       values:['Jan','Feb','Mar','Apr','May','Jun','July','Agust']
      },
    y:[{
      values:[23,34,56,83,2,92,1,90]
       }]
  });

}
