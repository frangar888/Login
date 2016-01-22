/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5E652CCB-217D-4D5C-AEA3-20579DCBBED2"}
 */
function onShow(firstShow, event) {
	CentrarCampos()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E43F01B2-DC14-4975-8AB2-AE71E421B6B7"}
 */
function onActionIngresar(event) {
	var errorMessage = ""
	if(globals.vg_user == null && globals.vg_pass == null){
		globals.lanzarVentanaEmergente(0,'Ingrese nombre de usuario y contraseña','Info',null,null,null)
		return false
	}
	if(globals.vg_user == null && globals.vg_pass != null){
		globals.lanzarVentanaEmergente(0,'Ingrese nombre de usuario','Info',null,null,null)
		return false
	}
	if(globals.vg_user != null && globals.vg_pass == null){
		globals.lanzarVentanaEmergente(0,'Ingrese contraseña','Info',null,null,null)
		return false
	}
    if(security.authenticate("Auth","login",[globals.vg_user,globals.vg_pass])){
        return true;
    } else {
        errorMessage = "No tenant found. Please check your password";
        application.output(errorMessage)
        return false
    }
}

/**
 * @properties={typeid:24,uuid:"F83113C6-40A4-48AB-AAF4-A403F0A60E86"}
 */
function CentrarCampos() {
	
	var ancho = application.getWindow().getWidth()
	elements.grp_login.setLocation((ancho - elements.grp_login.getWidth()) / 2,150)
	elements.grp_lineas.setLocation((ancho - elements.grp_login.getWidth()) / 10,425)
	elements.grp_login.visible = true
	
}
