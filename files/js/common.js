//-----------------------------++++-----------------------------------//
//----------------------------+++-------------------------------------//
//-----------------------------+++------------------------------------//
//------------------------------+++-----------------------------------//
//-------------------------------+++----------------------------------//
//------------------------------+++-----------------------------------//
//----------------------------+++-------------------------------------//

var placeholder_count;
var name;
var subvrf_id;
//delete SUBVRF//
	function abc(e) {
		 $(e).parent().parent().fadeOut(800, function() {$(this).remove()});
	 }
//------------------------//
'$("#notification").fadeOut(300, function() { $(this).remove(); });'


//delete VLAN//	
	 function deleteVlan(e){
		 $(e).parent().parent().fadeOut(800, function() {$(this).remove()});
	 }
//--------------------------//	
//add new SUBVRF//	
	$(".add-row").click(function (e) {
		subvrf_id=$(e).parent().parent().parent().attr("id");
		var len=$('.block').length;//get the count of each SUBVRF//
		if(len>=20)
		{
		$(".popupbg").css("display","block");
		$(".popupbg").css("height",$(document).height())
		return false;
		}
		placeholder_count=$("#"+subvrf_id +" "+ ".rows").length+1;//Increment the value of each row placeholders//
		name=$("#"+subvrf_id +" "+ ".rows").length;//get count of rows in each block//
		$(".new-block").append("<div id="+len+" class='block'><div class='widget-header'><i class='icon-list'></i><h3>SubVrf"+ len +"</h3><span onclick='abc(this);' class='icon-remove-sign' id='delete'></span></div><div class='col-lg-2'><input type='text' placeholder='Subordinate VRF NAME' name='subordinateVRFList["+len+"].subVRFName' data-pattern='Subordinate VRF NAME["+len+"]' onmouseover='tooltip();' onchange='validation(this);'data-value='alphabets' class='form-control validate-control'><label class='error'>This field is Required</label></div><div class='col-lg-2'><input type='text' placeholder='Subordinate VRF ID' name='subordinateVRFList["+len+"].subVRFID' onmouseover='tooltip();'  onchange='validation(this);'  data-value='numeric' data-pattern='Subordinate VRF ID["+len+"]' class='form-control validate-control'><label class='error'>This field is Required</label></div><div class='col-lg-2'><input type='text' placeholder='Max Prefix' name='subordinateVRFList["+len+"].subVRFMaxPrefix' data-pattern='Max Prefix' onmouseover='tooltip();' class='form-control'></div><div class='col-lg-2'><select placeholder='Subordinate VRF List' name='subordinateVRFList["+len+"].announceDGWWithNextHop' class='form-control'><option value=''>Yes</option><option value='1'>Yes</option><option value='2'>No</option></select></div><div class='col-lg-2'><input type='text' placeholder='DHCP Relay' name='subordinateVRFList["+len+"].dhcpRelay' data-pattern='DHCP Relay' onmouseover='tooltip();' class='form-control'></div><div class='col-lg-2'><select placeholder='Subordinate Exposed List' class='form-control' name='subordinateExposedList["+len+"].announceDGWWithNextHop'><option value=''>Select</option><option value='1'>Exposed</option><option value='2'>Non-Exposed</option></select></div><div class='rows'><div class='clear'></div><div class='col-lg-2'><input type='text' name='subordinateVRFList["+len+"].vlanInfoList["+name+"].vlanID' placeholder='VLAN ID1' name='name' onmouseover='tooltip();' class='form-control'></div><div class='col-lg-2'><input type='text' placeholder='VLAN NAME1' name='subordinateVRFList["+len+"].vlanInfoList["+name+"].vlanName' onmouseover='tooltip();'  class='form-control'></div><div class='col-lg-2'><input type='text' placeholder='IP ADDRESS1' name='subordinateVRFList["+len+"].vlanInfoList["+name+"].ipAddressInfo' onmouseover='tooltip();' class='form-control'></div><div class='col-lg-2'><input type='text' placeholder='IP MASK1' name='subordinateVRFList["+len+"].vlanInfoList["+name+"].ipMask' onmouseover='tooltip();' class='form-control'></div><div class='col-lg-2 dropdown'><select placeholder='Subordinate VRF List' name='subordinateVRFList["+len+"].vlanInfoList["+name+"].vlanType'  class='form-control'><option value=''>Select</option><option value=''>UCS</option><option value='1'>HP</option><option value='2'>DELL</option></select></div><div class='col-lg-2 add'><button type='submit' onclick='addVlan(this)' class='btn btn-success add-vlan'><i class='icon-plus-sign'></i>&nbsp;Add New</button></div></div></div>");
		$(".new-row .error").css('display','none');//hide validation msg//
		$(".add-row").blur();//remove focus from button//
	});
//-----------------------------//
//add new VLAN//	
	function addVlan(e){
		subvrf_id=$(e).parent().parent().parent().attr("id");//get parent id of SUBVRF div//
		var placeholder_count1=$(".rows:last input").attr("placeholder");
		var placeholder_count = parseInt(placeholder_count1.match(/\d+/),10)+1;//Increment the value of each row placeholders//
		name=$("#"+subvrf_id +" "+ ".rows").length;//get count of rows in each block//
		if(name>6)
		{
		$(".popupbg1").css("display","block");
		$(".popupbg1").css("height",$(document).height())
		return false;
		}
		debugger;
		$("#"+subvrf_id).append("<div class='rows'><div class='col-lg-2'><input type='text' name='subordinateVRFList["+subvrf_id+"].vlanInfoList["+name+"].vlanID' placeholder='VLAN ID"+placeholder_count+"' onmouseover='tooltip();' class='form-control'></div><div class=col-lg-2><input type=text name='subordinateVRFList["+subvrf_id+"].vlanInfoList["+name+"].vlanName' placeholder='VLAN NAME"+placeholder_count+"' name=name onmouseover='tooltip();' class=form-control></div><div class='col-lg-2'><input type='text' name='subordinateVRFList["+subvrf_id+"].vlanInfoList["+name+"].ipAddressInfo' placeholder='IP ADDRESS"+placeholder_count+"' name='name' onmouseover='tooltip();' class='form-control'></div><div class='col-lg-2'><input type='text' name='subordinateVRFList["+subvrf_id+"].vlanInfoList["+name+"].ipMask' placeholder='IP MASK"+placeholder_count+"' name='name' onmouseover='tooltip();' class='form-control'></div><div class='col-lg-2 dropdown'><select placeholder='Subordinate VRF List' name='subordinateVRFList["+subvrf_id+"].vlanInfoList["+name+"].vlanType' class='form-control'><option value=''>Select</option><option value=''>UCS</option><option value='1'>HP</option><option value='2'>DELL</option></select></div><div class='col-lg-2 add'><button type='submit' onclick='deleteVlan(this)' class='btn btn-danger'><i class='icon-minus-sign'></i>&nbsp;Delete</button></div></div>");
		$(".new-row .error").css('display','none');//hide validation msg//
		$(e).blur();//remove focus from button//
	 }
//-------------------------------//
//hide show VS & CMA//
$(".add-vs").click(function (e){
	$("#vs-firewall").toggle();//hide/show the firewall div//
	$(".add-cma").toggle();//hide/show the CMA button//
	$(".add-cma").removeClass("btn-danger");//remove red background from cma button//
	$(".add-cma .icon-plus-sign").removeClass("icon-minus-sign");//remove minus sign from cma button//
	$("#cma-info").hide();//hide/show the CMA div//
	$(this).toggleClass("btn-danger");//change the btn class//
	$(".add-vs .icon-plus-sign").toggleClass("icon-minus-sign");
});
$(".add-cma").click(function (e) {
	$("#cma-info").toggle();//hide/show the CMA div//
	$(this).toggleClass("btn-danger");//change the btn class//
	$(".add-cma .icon-plus-sign").toggleClass("icon-minus-sign");//change the btn class//
	
});
//------------------------------//
//alphaNumeric,alphabets,numeric for static and dynamic section//
function validation(e){
debugger;
 var result = $(e).val().trim();
	var regexAlphaNumeric = /^[a-zA-Z0-9 _.-]+$/;/*regular expression for alpha numeric validation*/
	var regexAlpha = /^[a-zA-Z _.-]+$/;/*regular expression for alphabets validation*/
	var regexNumeric = /^[0-9]+$/;/*regular expression for numerics validation*/
	var regexTenNo=/^[0-9]{1,2}$/;/*regular expression for 2 digits only validation*/
	var regexEmail=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;/*regular expression for email validation*/
	var regexPassword=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;/*regular expression for 10 digits only validation[at least one alphabet,one numeric,one Symbol,one dot,two alphabets or numeric after dot]*/
	var className = $(e).attr("data-value");/*get data-value attribute value of the current element*/
	if (className == "alphaNumeric") { className = regexAlphaNumeric; } 
	else if (className == "alphabets") { className = regexAlpha; } 
	else if (className == "numeric") { className = regexNumeric; }
	else if (className == "tendigit") { className = regexTenNo; }
	else if (className == "email") { className = regexEmail; }
	else if (className == "password") { className = regexEmail; }
	else { return true; }
	if (!result.match(className)) 
	{
		$(e).next().css('display', 'block');//show error message//
		$(e).next(".error").text("Please enter the correct value for " + $(e).attr("data-pattern"));
		$(e).val("");
		$(e).focus();
		$(e).css("border","1px solid red");
		e.preventDefault();
	}
	else
	{
		$(e).next(".error").text("");
		$(e).css("border","1px solid #ccc");
		return true;
	}
	return true;
	
}
//------------------------------//
//validation//
$(".submit").on("click", function (e) {
	$("input[type=text].validate-control").each(function ()
	{
		var result = $(this).val();//get value of input type//
		//if input is empty//
		if (result == "") {
			$(this).next().text('Please enter value for '+$(this).attr("data-pattern"));
			$(this).next().css('display', 'block');//show error message//
			$(this).css("border","1px solid red");
		}
	});
	$("input[type=text].validate-control").on("change", function (e) 
	{
		//if input is not empty//
		if (result != "") 
		{
			$(this).next().text("");//remove error message text//
			$(this).next().css('display', 'block');
		}
		else if (result == "") 
		{
			$(this).next().text('Please enter value for '+$(this).attr("name"));//add error message text//
			$(this).next().css('display', 'block');//show error message//
		}
	});
//------------------------------//
 });

 //hide popup bg //
 function hide(){
	$( ".popupbg" ).fadeOut( "slow", function() {
		$(".popupbg-common").css("display","none");
	});
};
//tooltip dynamic section//
function tooltip(e){
$("input,select").each(function ()
	{
		$(this).mouseover(function(){
		var name=$(this).attr("placeholder");
		$(this).parent().append("<div class='tooltip-arrow'></div><p class='info'> Info about " +name);
		});
		$(this).mouseout(function(){
		var name=$(this).attr("placeholder");
			$(this).parent().find('.info').remove();
			$(this).parent().find('.tooltip-arrow').remove();
		});
	});
	}
//tooltip static section//
	$(document).ready(function(){
		$("input,select").each(function ()
		{
			$(this).mouseover(function(){
			var name=$(this).attr("placeholder");
			$(this).parent().append("<div class='tooltip-arrow'></div><p class='info'> Info about " +name);
			});
			$(this).mouseout(function(){
			var name=$(this).attr("placeholder");
			$(this).parent().find('.info').remove();
			$(this).parent().find('.tooltip-arrow').remove();
			});
		});
//------------------------------//
//add new VLAN using number count//
		$("#addHtml").on("blur", function (e) {
		debugger;
			var count=$(this).val();//get the count of all SUBVRF//
			var len=$('.block').length;//get the count of each SUBVRF//
			var total=parseInt(count, 10) + parseInt(len, 10);//get total number of blocks along with entered value//
			if(count<20 && total<=20 ){
			debugger;
				for (i = 0; i < count; i++) {
					var len=$('.block').length;//get the count of each SUBVRF//
					placeholder_count=$("#"+subvrf_id +" "+ ".rows").length+1;//Increment the value of each row placeholders//
					name=$("#"+subvrf_id +" "+ ".rows").length;//get count of rows in each block//
					$(this).parent().parent().append("<div id="+len+" class='block'><div class='widget-header'><i class='icon-list'></i><h3>SubVrf"+ len +"</h3><span onclick='abc(this);' class='icon-remove-sign' id='delete'></span></div><div class='col-lg-2'><input type='text' placeholder='Subordinate VRF NAME' name='subordinateVRFList["+len+"].subVRFName' data-pattern='Subordinate VRF NAME["+len+"]' onmouseover='tooltip();' onchange='validation(this);'data-value='alphabets' class='form-control validate-control'><label class='error'>This field is Required</label></div><div class='col-lg-2'><input type='text' placeholder='Subordinate VRF ID' name='subordinateVRFList["+len+"].subVRFID' onmouseover='tooltip();'  onchange='validation(this);'  data-value='numeric' data-pattern='Subordinate VRF ID["+len+"]' class='form-control validate-control'><label class='error'>This field is Required</label></div><div class='col-lg-2'><input type='text' placeholder='Max Prefix' name='subordinateVRFList["+len+"].subVRFMaxPrefix' data-pattern='Max Prefix' onmouseover='tooltip();' class='form-control'></div><div class='col-lg-2'><select placeholder='Subordinate VRF List' name='subordinateVRFList["+len+"].announceDGWWithNextHop' class='form-control'><option value=''>Yes</option><option value='1'>Yes</option><option value='2'>No</option></select></div><div class='col-lg-2'><input type='text' placeholder='DHCP Relay' name='subordinateVRFList["+len+"].dhcpRelay' data-pattern='DHCP Relay' onmouseover='tooltip();' class='form-control'></div><div class='col-lg-2'><select placeholder='Subordinate Exposed List' class='form-control' name='subordinateExposedList["+len+"].announceDGWWithNextHop'><option value=''>Select</option><option value='1'>Exposed</option><option value='2'>Non-Exposed</option></select></div><div class='rows'><div class='clear'></div><div class='col-lg-2'><input type='text' name='subordinateVRFList["+len+"].vlanInfoList["+name+"].vlanID' placeholder='VLAN ID1' name='name' onmouseover='tooltip();' class='form-control'></div><div class='col-lg-2'><input type='text' placeholder='VLAN NAME1' name='subordinateVRFList["+len+"].vlanInfoList["+name+"].vlanName' onmouseover='tooltip();'  class='form-control'></div><div class='col-lg-2'><input type='text' placeholder='IP ADDRESS1' name='subordinateVRFList["+len+"].vlanInfoList["+name+"].ipAddressInfo' onmouseover='tooltip();' class='form-control'></div><div class='col-lg-2'><input type='text' placeholder='IP MASK1' name='subordinateVRFList["+len+"].vlanInfoList["+name+"].ipMask' onmouseover='tooltip();' class='form-control'></div><div class='col-lg-2 dropdown'><select placeholder='Subordinate VRF List' name='subordinateVRFList["+len+"].vlanInfoList["+name+"].vlanType'  class='form-control'><option value=''>Select</option><option value=''>UCS</option><option value='1'>HP</option><option value='2'>DELL</option></select></div><div class='col-lg-2 add'><button type='submit' onclick='addVlan(this)' class='btn btn-success add-vlan'><i class='icon-plus-sign'></i>&nbsp;Add New</button></div></div></div>");
				}
			}
			else if(total>20 ){
				$(".popupbg").css("display","block");
				$(".popupbg").css("height",$(document).height())
				return false;}
		});
//------------------------------//		
//custom radio button //	
		$('.checkbox-btn').click( function() {
			if($(this).hasClass('checked')) {
				$(this).removeClass('checked');
			}
			else {
				$(this).addClass('checked');
			}
		});
	
	});
//------------------------------//




 