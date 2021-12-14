// frappe.ready(function() {
// 	frappe.web_form.after_load = () => {
//         const url_base = window.location.origin
//         const Tab = `
           
// 		`
// 		const newHTML = `
			
// 		`
//     	const personal_info_Tab = `
		
// 		`
// 		const header =`
			
// 		`
// 		const student_name1 = `
// 		`
// 		const contact_information = `
// 		`
// 		const home_address = `
// 		`
// 		const parents =`
// 		`
// 		const guardian = `
			
// 		`
// 		const button = `
// 		`
// 		const button_footer = `
// 		`
// 		const education_background_Tab = `
// 		`
// 		const education_background_header = `
	
// 		`
// 		const education_background_pre_school = `
		
// 		`
// 		const education_background_pre_school2 = `
			
// 		`
// 		const education_button_footer = `
		
// 		`
// 		const college_education_background_header = `
// 		`
// 		const college_education_background_pre_school = `
			
// 		`
// 		const college_education_background_year_school = `
		
// 		`
// 		const college_education_background_junior_higjschool = `

// 		`
// 		const college_education_background_senior_highschool = `
		
// 		`
// 		var college_education_background_button_footer = `
			
// 		`

	
//     // all html
//     const Admission = `
//         <div id="admission"> 
//             ${Tab + newHTML }
//         </div>
//         <div id="personal_info">
//             ${personal_info_Tab + header +  student_name1 + personal_information2 + contact_information + home_address + parents + guardian + button + button_footer}
//         </div>
// 		<div class="educational_background_college">
// 			${education_background_Tab + college_education_background_header  + college_education_background_pre_school + college_education_background_year_school + college_education_background_junior_higjschool + college_education_background_senior_highschool + college_education_background_button_footer + button_footer}
// 		</div>
// 		<div class="educational_background_hs">
// 			${education_background_Tab + education_background_header + education_background_pre_school + education_background_pre_school2 + education_button_footer + button_footer}
// 		</div>
//     `
// 	$('Body').append(Admission);
// 	fetch(url_base + '/api/method/login', {
// 		method: 'POST',
// 		headers: {
// 			'Accept': 'application/json',
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify({
// 			// usr: 'Administrator',
// 			// pwd: 'admin'
// 			usr: 'jicklampago.abakada@gmail.com',
// 			pwd: 'Abakada@1'
// 		})
// 	})
// 	.then(r => r.json())
// 	.then(r => {
// 		console.log(r)
// 	})

//     // hide ITEMS
//     $('#personal_info, #program_college, #show-button, #program_graduate_school, #program_hs, .educational_background_college, .educational_background_hs').hide()
//     function getRandomString(length) {
//         var random_number =  Math.random().toString();
//         var result_random = random_number.replace(".","")
//         var randomChars = Date.now() + result_random;
//         var result = '';
//         for ( var i = 0; i < length; i++ ) {
//             result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
//         }
//         return "freshmen-" + result;
//     }
// 	var ref_number = getRandomString(7)
//     frappe.web_form.set_value('reference_number', ref_number);
//     frappe.web_form.set_value('name1', ref_number);
//     frappe.web_form.set_value('student_type', "Freshmen");
//     // pass desired length of random string
//     $('#show-button').hide()

// 	// get currriculum

// 	const get_currriculum = (acad_value) => {
// 		console.log(acad_value)
// 		$('.table-body').html('<p id="hide"></p>')
// 		// Fetch data depends on acad dept and program
// 		fetch(url_base + '/api/resource/Curriculum/' + acad_value)
// 		.then(res => res.json())
// 		.then(res => {
// 			var acadArray = res.data.curriculum_data
// 			console.log(acadArray)
// 			acadArray.forEach(element => {
// 				$('#hide').hide()
// 				$('.table-body').append(`
// 				<tr>
// 					<td class="th-code">${element.subject_code}</td>
// 					<td>${element.title}</td>
// 				</tr>
// 				`)
// 			});
// 		})
// 		.catch((error) => {
// 			$('.table-body').html(`
// 			<tr>
// 				<td class="th-code"> Select academic department</td>
// 				<td></td>
// 			</tr>
// 			`)
// 		});
// 	}
// 	//dynamic button admission form function
// 	$('#acadcDept').change( () => {
// 		var acad_value = $('#acadcDept').val();
// 		var program_value = $('#program').val();
// 		var curriculum = acad_value + program_value
// 		frappe.web_form.set_value('acad_dept', acad_value);
// 		if(acad_value === "not-selected" || program_value === "not-selected"){
// 			$('#hide-button').show()
// 			$('#show-button, .sm-show-button').hide()
// 		}else{
// 			$('#hide-button, .sm-hide-button').hide()
// 			$('#show-button, .sm-show-button').show()
// 		}
// 		$('.table-body').html('<p id="hide"></p>')
// 		// Dropdown option
// 		if(acad_value == "High School"){
// 			$('#program_college, #program_graduate_school, #program').hide()
// 			$('#program_hs').show()
// 		}else if(acad_value === "College"){
// 			$('#program_graduate_school, #program_hs, #program').hide()
// 			$('#program_college').show()
// 		}else if(acad_value === "Graduate School"){
// 			$('#program_college, #program_hs, #program').hide()
// 			$('#program_graduate_school').show()
// 		}else{
// 			$('#program_college, #program_graduate_school, #program_hs').hide()
// 			$('#program').show()
// 		}
		
// 	})

// 	// hs dropdown
// 	$('#program_hs').change( () => {
// 		var acad_value = $('#acadcDept').val();
// 		var program_value = $('#program_hs').val();
// 		var curriculum = acad_value + "-" + program_value
// 		frappe.web_form.set_value('program', program_value);
// 		if(acad_value === "not-selected" || program_value === "not-selected"){
// 			$('#hide-button, .sm-hide-button').show()
// 			$('#show-button, .sm-show-button').hide()
// 		}else{
// 			$('#hide-button, .sm-hide-button').hide()
// 			$('#show-button, .sm-show-button').show()
// 			get_currriculum(curriculum)
// 		}
// 	})
// 	// college dropdown
// 	$('#program_college').change( () => {
// 		var acad_value = $('#acadcDept').val();
// 		var program_value = $('#program_college').val();
// 		var curriculum = acad_value + "-" + program_value
// 		frappe.web_form.set_value('program', program_value);
// 		if(acad_value === "not-selected" || program_value === "not-selected"){
// 			$('#hide-button, .sm-hide-button').show()
// 			$('#show-button, .sm-show-button').hide()
// 		}else{
// 			$('#hide-button, .sm-hide-button').hide()
// 			$('#show-button, .sm-show-button').show()
// 			get_currriculum(curriculum)
// 		}
// 	})
// 	// graduate school dropdown
// 	$('#program_graduate_school').change( () => {
// 		var acad_value = $('#acadcDept').val();
// 		var program_value = $('#program_graduate_school').val();
// 		var curriculum = acad_value + "-" + program_value
// 		frappe.web_form.set_value('program', program_value);
// 		if(acad_value === "not-selected" || program_value === "not-selected"){
// 			$('#hide-button, .sm-hide-button').show()
// 			$('#show-button, .sm-show-button').hide()
// 		}else{
// 			$('#hide-button, .sm-hide-button').hide()
// 			$('#show-button, .sm-show-button').show()
// 			get_currriculum(curriculum)
// 		}
// 	})

// 	// capture the value of input personal information
// 	// variables
// 	var first_name =""
// 	var last_name = ""
// 	var middle_name = ""
// 	var name_suffix = ""
// 	var gender = ""
// 	var birthday = ""
// 	var Age_as = ""
// 	var ethnic = ""
// 	var religion = ""
// 	var mother_tangue =""
// 	$('.check_value').keyup( () => {
// 		first_name = $('#first_name').val();
// 		last_name = $('#last_name').val();
// 		middle_name = $('#middle_name').val();
// 		mother_tangue = $('#mother_tongue').val();
// 		Age_as = $('#age_as').val();
// 	})
// 	$('#name_suffix, #gender, #birthday, #religion, #ethnic, #religion, #ethnic').change( () => {
// 		name_suffix = $('#name_suffix').val();
// 		gender = $('#gender').val();
// 		birthday = $('#birthday').val();
// 		ethnic = $('#ethnic').val();
// 		religion = $('#religion').val();
// 	})
// 	$('.go_to_background').click( () => {
// 		frappe.web_form.set_value('first_name', first_name)
// 		frappe.web_form.set_value('last_name', last_name)
// 		frappe.web_form.set_value('middle_name', middle_name)
// 		frappe.web_form.set_value('suffix', name_suffix)
// 		frappe.web_form.set_value('gender', gender)
// 		frappe.web_form.set_value('birthday', birthday)
// 		frappe.web_form.set_value('age_as_first_friday_of_june', Age_as)
// 		frappe.web_form.set_value('mother_tongue', mother_tangue)
// 		frappe.web_form.set_value('ip__ethic_group_', ethnic)
// 		frappe.web_form.set_value('religion', religion)
		
// 		const acad_value = frappe.web_form.get_value('acad_dept');
// 		//redirect to educational background form
// 		if(acad_value === "High School"){
// 			$('.educational_background_hs').show()
// 			$('#admission, #personal_info, .educational_background_college').hide()
// 		}else if(acad_value === "College"){
// 			$('.educational_background_college').show()
// 			$('#admission, #personal_info, .educational_background_hs').hide()
// 		}else if(acad_value === "Graduate School"){
// 			$('.educational_background_college').show()
// 			$('#admission, #personal_info, .educational_background_hs').hide()
// 		}
// 	})

// 	// Education background functionalities
// 	var School_name =""
// 	var Year_started = ""
// 	var Year_end = ""
// 	var Province = ""
// 	var city = ""
// 	var pre_school_array = []
// 	//capturing the value
// 	$('.hs_get_value').keyup( () => {
// 		School_name = $('#HsSchoolName').val();
// 	})
// 	$('#HsYearStart, #HsYearEnd, #HsProvince, #HsCity').change( () => {
// 		Year_started = $('#HsYearStart').val()
// 		Year_end = $('#HsYearEnd').val()
// 		Province = $('#HsProvince').val()
// 		city = $('#HsCity').val()
// 	})
// 	// Pre Schhol add button
// 	$('#hs_add_button').click( () => {
// 		if(School_name === "" || Year_started === "" || Year_end === "" || Province === "" || city === ""){
// 			frappe.throw('<p class="text-red">Please fill all values carefully</p>');
// 		}else{
// 			let my_object = {}
// 			my_object.schhol = School_name
// 			my_object.year_started = Year_started
// 			my_object.year_ended = Year_end
// 			my_object.province = Province
// 			my_object.city = city
// 			pre_school_array.push(my_object)
// 			console.log(pre_school_array)
// 			$('#HsSchoolName').val("")
// 			$('#HsYearStart').val("")
// 			$('#HsYearEnd').val("")
// 			$('#HsProvince').val("")
// 			$('#HsCity').val("")
// 			var hs_table = `
// 				<tr>
// 					<td class="table-school">${School_name}</td>
// 					<td class="">${Year_started}</td>
// 					<td class="">${Year_end}</td>
// 					<td class="">${Province}</td>
// 					<td class="">${city}</td>
// 				</tr>
// 			`
// 			$('.hs_table_body_1').append(hs_table)
// 			School_name =""
// 			Year_started = ""
// 			Year_end = ""
// 			Province = ""
// 			city = ""
// 		}
// 	})

// 	// Grade schhool functionalities
// 	var Gs_School_name =""
// 	var Gs_Year_started = ""
// 	var Gs_Year_end = ""
// 	var Gs_Province = ""
// 	var Gs_city = ""
// 	var Gs_pre_school_array = []
// 	//capturing the value
// 	$('.gs_get_value').keyup( () => {
// 		Gs_School_name = $('#GsSchoolName').val();
// 	})
// 	$('#GsYearStart, #GsYearEnd, #GsProvince, #GsCity').change( () => {
// 		Gs_Year_started = $('#GsYearStart').val()
// 		Gs_Year_end = $('#GsYearEnd').val()
// 		Gs_Province = $('#GsProvince').val()
// 		Gs_city = $('#GsCity').val()
// 	})
// 	//Grade school add button
// 	$('#gs_add_button').click( () => {
// 		if(Gs_School_name === "" || Gs_Year_started === "" || Gs_Year_end === "" || Gs_Province === "" || Gs_city === ""){
// 			frappe.throw('Please fill all values carefully');
// 		}else{
// 			let gs_my_object = {}
// 			gs_my_object.schhol = Gs_School_name
// 			gs_my_object.year_started = Gs_Year_started
// 			gs_my_object.year_ended = Gs_Year_end
// 			gs_my_object.province = Gs_Province
// 			gs_my_object.city = Gs_city
// 			Gs_pre_school_array.push(gs_my_object)
// 			console.log(Gs_pre_school_array)
// 			$('#GsSchoolName').val("")
// 			$('#GsYearStart').val("")
// 			$('#GsYearEnd').val("")
// 			$('#GsProvince').val("")
// 			$('#GsCity').val("")
// 			var gs_table = `
// 				<tr>
// 					<td class="table-school">${Gs_School_name}</td>
// 					<td class="">${Gs_Year_started}</td>
// 					<td class="">${Gs_Year_end}</td>
// 					<td class="">${Gs_Province}</td>
// 					<td class="">${Gs_city}</td>
// 				</tr>
// 			`
// 			$('.hs_table_body_2').append(gs_table)
// 			Gs_School_name =""
// 			Gs_Year_started = ""
// 			Gs_Year_end = ""
// 			Gs_Province = ""
// 			Gs_city = ""
// 		}
// 	})
// 	// Redirection
// 	$('#show-button').click( () => {
// 		$('#personal_info').show()
// 		$('#admission, .educational_background_college, .educational_background_hs').hide()
// 	})
// 	$('#back_to_admission, .back_to_admission').click( () => {
// 		$('#personal_info, .educational_background_college, .educational_background_hs').hide()
// 		$('#admission').show()
// 	})
// 	$('#back_to_step1').click( () => {
// 		location.replace("/lead-app")
// 	})
	
// 	// back to information form
// 	$('.back_to_personal_info').click( () => {
// 		$('#personal_info').show()
// 		$('#admission, .educational_background_college, .educational_background_hs').hide()
// 	})
// 	// continue to confirmation
// 	$('.continue_to_confirmation').click( () => {
// 		const p_first_name = frappe.web_form.get_value("first_name")
// 		const p_last_name = frappe.web_form.get_value("last_name")
// 		const ref_number = frappe.web_form.get_value("reference_number")
// 		const student_type = frappe.web_form.get_value("student_type")
// 		console.log(p_first_name,p_last_name, student_type, ref_number)
// 		if (Gs_pre_school_array.length === 0){
// 			frappe.throw('<p class="text-red">Grade School is Required</p>')	
// 		}else{
// 			const confirmation = `
// 			<div class="container">
// 				<h3 class="my-5 font-weight-bold">Student Application Form</h3>
// 				<div class="row mb-5">
// 					<div class="col-md-10 text12">
// 						<div class=" d-flex justify-content-center">
// 							<div class="col text-center tab-line-done">
// 								<img src="" class="icon-tab">
// 								<p class="tab_label">Admission</p>
// 							</div>
// 							<div class="col text-center tab-line-done back_to_personal_info">
// 								<img src="" class="icon-tab">
// 								<p class="tab_label">Personal Information</p>
// 							</div>
// 							<div class="col text-center tab-line-done">
// 								<img src="" class="icon-tab">
// 								<p class="tab_label">Educational Background</p>
// 							</div>
// 							<div class="col text-center tab-line-active">
// 								<img src="" class="icon-tab">
// 								<p class="tab_label">Confirmation</p>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<div class="text-center header mt-5">
// 					<h6 class="font-weight-bold">Congratulations, ${first_name + " " + last_name}</h6>
// 				</div>
// 				<p class="text12">This confirms you that you have successfully submitted your pre-application form to PCCR. If you wish to continue enrolling here in PCCR, you are 1 step away from it. If you do not wish to continue as of the moment, you may do it some other time.
// 					<br>
// 					<br>
// 					<span class="text-red">Please note down your Reference Number in a piece of paper as you will need this to enter on the next step.</span>
// 				</p>
// 				<div class="row">
// 						<div class="col-md-10 row">
// 							<div class="col-md-3">
// 								<h6 class="head-sm mb-0 font-weight-bold">Reference Number</h6>
// 								<p class="text-gray text12 p-0">${ref_number}</p>
// 							</div>
// 							<div class="col-md-3 ">
// 								<h6 class="head-sm mb-0 font-weight-bold">Student Type</h6>
// 								<p class="text-gray text12 p-0">${student_type}</p>
// 							</div>
// 							<div class="col-md-3">
// 								<h6 class="head-sm mb-0 font-weight-bold">Reference Number</h6>
// 								<p class="text-gray text12 p-0">123-456-789-01</p>
// 							</div>
// 							<div class="col-md-3">
// 								<h6 class="head-sm mb-0 font-weight-bold">Reference Number</h6>
// 								<p class="text-gray text12 p-0">123-456-789-01</p>
// 							</div>
// 						</div>
						
// 						<div class="col-md-10 row mt-5">
// 							<div class="col-md-3">
// 								<h6 class="head-sm mb-0 font-weight-bold">Applicant Name</h6>
// 								<p class="text-gray text12 p-0">${first_name + " " + last_name}</p>
// 							</div>
// 							<div class="col-md-3 ">
// 								<h6 class="head-sm mb-0 font-weight-bold">Applicant Contact Number</h6>
// 								<p class="text-gray text12 p-0">123-456-789-01</p>
// 							</div>
// 							<div class="col-md-3">
// 								<h6 class="head-sm mb-0 font-weight-bold">Applicant Email Address</h6>
// 								<p class="text-gray text12 p-0">123-456-789-01</p>
// 							</div>
// 							<div class="col-md-3">
// 								<h6 class="head-sm mb-0 font-weight-bold">Educational Level</h6>
// 								<p class="text-gray text12 p-0">123-456-789-01</p>
// 							</div>
// 						</div>

// 						<div class="col-md-10 row mt-5">
// 							<div class="col-md-3">
// 								<h6 class="head-sm mb-0 font-weight-bold">Reference Number</h6>
// 								<p class="text-gray text12 p-0">123-456-789-01</p>
// 							</div>
// 						</div>
						
// 					</div>
// 					${button_footer}
// 			</div>
		
// 		`
// 		$('.educational_background_hs').hide()
// 		$('body').append(confirmation)
// 		}
// 	})        
// 	}
// })


