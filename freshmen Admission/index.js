$(document).ready(function(){ 
  // hide ITEMS

  // Admission selection
  var	High_School = ["high school4","high school3","high school2","high school"]
  var	College =["College","College2","College3","College4"]
  var	Graduate_School = ["grad school4","grad school3","grad school2","grad school"]
  $('#acadcDept').change( () => {
    const acad_dept_selected = $('#acadcDept').val()
    if(acad_dept_selected === "High School"){
      $('#program_res').html("<option id='hide_prog'></option>")
      for (i = 0; i < High_School.length; i++) {
        $('#hide_prog').hide()
        document.getElementById("program_res").innerHTML += '<option class="p-2" value="' + High_School[i] + '">' + High_School[i] + '</option>';
      }
    }else if(acad_dept_selected === "College"){
      $('#program_res').html("<option id='hide_prog'></option>")
      for (i = 0; i < College.length; i++) {
        $('#hide_prog').hide()
        document.getElementById("program_res").innerHTML += '<option class="p-2" value="' + College[i] + '">' + College[i] + '</option>';
      }
    }else if(acad_dept_selected === "Graduate School"){
      $('#program_res').html("<option id='hide_prog'></option>")
      for (i = 0; i < Graduate_School.length; i++) {
        $('#hide_prog').hide()
        document.getElementById("program_res").innerHTML += '<option class="p-2" value="' + Graduate_School[i] + '">' + Graduate_School[i] + '</option>';
      }
    }
  })
  // capture the value of input personal information
  var first_name =""
  var last_name = ""
  var middle_name = ""
  var name_suffix = ""
  var birthday = ""
  var Age_as = ""
  var mother_tangue =""
  var father_name = ""
  var mobile_number = ""
  var home_phone = ""
  var email = ""
  var address = ""
  var father_first_name = ""
  var father_middle_name = ""
  var mother_name = ""
  var mother_first_name = ""
  var mother_middle_name =""
  var guardian_name =""
  var relationship = ""
  var guardian_number = ""
  // Select 
  var gender = ""
  var ethnic = ""
  var religion = ""
  var barangay = ""
  var city = ""
  var province = ""
  var father_suffix = ""
  $('.check_value').keyup( () => {
    first_name = $('#first_name').val();
    last_name = $('#last_name').val();
    middle_name = $('#middle_name').val();
    mother_tangue = $('#mother_tongue').val();
    Age_as = $('#age_as').val()
    father_name = $('#father_name').val()
    mobile_number = $('#mobile_number').val()
    home_phone = $('#home_phone').val()
    email = $('#email').val()
    address = $('#address').val()
    father_first_name = $('#father_first_name').val()
    father_middle_name = $('#father_middle_name').val()
    mother_name = $('#mother_name').val()
    mother_middle_name = $('#mother_middle_name').val()
    mother_first_name = $('#mother_first_name').val()
    guardian_name = $('#guardian_name').val()
    relationship = $('#relationship').val()
    guardian_number = $('#guardian_number').val()
  })
  $('#barangay, #city, #province, #father_suffix, #name_suffix, #gender, #birthday, #religion, #ethnic, #religion, #ethnic').change( () => {
    name_suffix = $('#name_suffix').val();
    gender = $('#gender').val();
    birthday = $('#birthday').val();
    ethnic = $('#ethnic').val();
    religion = $('#religion').val();
    barangay = $('#barangay').val()
    city = $('#city').val()
    province = $('#province').val()
    father_suffix = $('#father_suffix').val()
  })
  $('.go_to_background').click( () => {
    console.log(father_name, father_suffix, father_middle_name, father_first_name)
  })     
})