/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F4AD1170-2DAC-4307-86EF-5B211EFD636F",variableType:4}
 */
var vg_user_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"565E6446-6366-4194-B057-278BCF090F6E"}
 */
var vg_pass = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A28A0EAE-72A4-43DA-9140-B652522CB842"}
 */
var vg_user = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EF74E02B-CD5B-4A0E-A927-CAA49461A693"}
 */
var vg_version = null;

/**
 * 
 * @param lnk_tipo
 * @param lnk_mensaje
 * @param lnk_titulo
 * @param lnk_nombre_form
 * @param lnk_accion_btn_si
 * @param lnk_accion_btn_no
 *
 * @properties={typeid:24,uuid:"29CECF38-17B2-4523-B6A9-4F975FA834AD"}
 */
function lanzarVentanaEmergente(lnk_tipo, lnk_mensaje, lnk_titulo, lnk_nombre_form, lnk_accion_btn_si, lnk_accion_btn_no){
	var win
	switch (lnk_tipo){
		case 0: //mensaje info
			forms.win_generica.elements.btn_no.visible = false
			forms.win_generica.elements.btn_si.visible = false
			forms.win_generica.elements.btn_ok.visible = true
			forms.win_generica.vl_mensaje = lnk_mensaje
			forms.win_generica.elements.imagen.imageURL = "media:///icons/written.png"
			win = application.createWindow("ventanaGenerica", JSWindow.MODAL_DIALOG);
			win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
			win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
			win.resizable = false
			win.title= lnk_titulo;
			win.show(forms.win_generica);
			break;
		case 1: //mensaje confirmacion
			forms.win_generica.elements.btn_no.visible = true
			forms.win_generica.elements.btn_si.visible = true
			forms.win_generica.elements.btn_ok.visible = false
			forms.win_generica.vl_mensaje = lnk_mensaje
			forms.win_generica.vl_form_no = lnk_nombre_form
			forms.win_generica.vl_form_si = lnk_nombre_form
			forms.win_generica.vl_accion_no = lnk_accion_btn_no
			forms.win_generica.vl_accion_si = lnk_accion_btn_si
			forms.win_generica.elements.imagen.imageURL = "media:///icons/warning18.png"
			win = application.createWindow("ventanaGenerica", JSWindow.MODAL_DIALOG);
			win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
			win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
			win.resizable = false
			win.title= lnk_titulo;
			win.show(forms.win_generica);
		break;
	}
}

/**
 * 
 * @param user
 *
 * @properties={typeid:24,uuid:"95A7892A-F452-4D02-A90B-BDEC5BFC58E5"}
 * @AllowToRunInFind
 */
function getUserId(user){
	/** @type {JSFoundset<db:/peluqueria/adn_usuarios>}*/
	var fs_users = databaseManager.getFoundSet('peluqueria','adn_usuarios')
	fs_users.find()
	fs_users.user_nombre = user
	if(fs_users.search() != 0){
		vg_user_id = fs_users.user_id
	}
	
}
/**
 * @AllowToRunInFind
 * 
 * 
 * 
 *
 * @properties={typeid:24,uuid:"8F73D21B-76DA-447C-8FB8-2E3DCD736F52"}
 */
function esTipoAdmin(){
	/** @type {JSFoundset<db:/peluqueria/adn_usuarios>}*/
	var fs_user = databaseManager.getFoundSet('peluqueria','adn_usuarios')
	fs_user.find()
	fs_user.user_id = globals.vg_user_id
	if(fs_user.search() != 0){
		if(fs_user.user_tipo == 1){
			return true
		}
	}
	return false
}
