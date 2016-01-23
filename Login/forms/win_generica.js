/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5817D469-698E-45F2-B744-D28DF8C92DB0"}
 */
var vl_accion_si = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"18AF3504-3B3C-428F-8D15-4D23CFBEE8B9"}
 */
var vl_accion_no = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7C586ECE-F078-45FD-BE2C-E94A5E3538DA"}
 */
var vl_form_si = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"755E26E8-4F7F-456F-A984-D400315850A8"}
 */
var vl_form_no = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6CE3624A-DE16-4004-9BD2-47AC2E78C65F"}
 */
var vl_mensaje = null;


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ECE51EAD-358F-4F45-89DD-2C4EBC2AA783"}
 */
function onActionSi(event) {
	if(vl_form_si == null || vl_accion_si == null){
		application.getWindow("ventanaGenerica").hide()
		return
	}else{
		forms[vl_form_si][vl_accion_si]()
		//application.getWindow().hide()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5F3B42F4-214A-4D2B-907B-18A63A6D7793"}
 */
function onActionNo(event) {
	if(vl_form_no == null || vl_accion_no == null){
		application.getWindow("ventanaGenerica").hide()
		return
	}else{
		forms[vl_form_no][vl_accion_no]
		application.getWindow("ventanaGenerica").hide()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"973CD4FB-6F19-4246-84FA-FD9EF2BB1D4D"}
 */
function onActionOK(event) {
	application.getWindow("ventanaGenerica").hide()
	return
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"00640EFC-EB97-41F0-928D-4918C6682274"}
 */
function onShow(firstShow, event) {
	elements.texto.text = vl_mensaje
}
