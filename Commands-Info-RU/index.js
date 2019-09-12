module.exports = function CommandsInfo(mod) {
	const path = require('path'),
	    fs = require('fs'),
		command = mod.command || mod.require.command
	
	let gameId,
	    job,
		inCombat,
		enabled = true,
		logininfo = true
		

	
	mod.hook('S_LOGIN', mod.majorPatchVersion >= 85 ? 13 : 12, event => {
		gameId = event.gameId
		job = (event.templateId - 10101) % 100
		logininfo = true
	})
	
	mod.hook('S_SPAWN_ME', 3, event => { loginMsg() })
	
	mod.hook('S_USER_STATUS', 3, event => { 
		if(event.gameId === gameId) {
			if(event.status === 1) {
				inCombat = true
			}
			else inCombat = false
		}
	})	
	function loginMsg() {
		if(!logininfo) return
		command.message(`Команды модулей:
<font color="#E69F00">DPS-Monitor_EN:</font>
                 Использование: <font color="#ffffff">dps</font> - Вкл/Выкл Модуль.
			  <font color="#ffffff">dps [u | ui]</font> - DPS Панель Вкл/Выкл.
<font color="#E69F00">auto-fishing-RU:</font>
                 Использование: <font color="#ffffff">f</font> - Вкл/Выкл Модуль.
			  <font color="#ffffff">f [reloadconf]</font> - Перезагрузить конфигурацию.
			  <font color="#ffffff">f [stats]</font> - Просмотр Статистики.
			  <font color="#ffffff">f [save]</font> - Сохранить.
<font color="#E69F00">Gathering-RU:</font>
                Использование: <font color="#ffffff">сбор</font> - Вкл/Выкл - обнаружение (подсветка) руды.
			  <font color="#ffffff">сбор [руда]</font> - Вкл/Выкл - обнаружение (подсветка) руды.
			  <font color="#ffffff">сбор [растения]</font> - Вкл/Выкл - обнаружение (подсветка) растений.
			  <font color="#ffffff">сбор [эссенция]</font> - Вкл/Выкл - обнаружение (подсветка) эссенций.
<font color="#E69F00">Teleport-master</font>
                Использование: <font color="#ffffff">tp</font> - Вкл/Выкл Модуль.
			  <font color="#ffffff">tp [save [name]]</font> - Сохранить координаты в закладках.
			  <font color="#ffffff">tp [move [name]]</font> - Телепортироватся на сохраненные координаты в закладках.
			  <font color="#ffffff">tp [del [name]]</font> - Удалить сохраненные координаты в закладках.
TEST <font color="#ff3333">TEST</font>
TEST <font color="#0099ff">TEST</font>
TEST <font color="#ff3333">TEST</font>
TEST <font color="#0099ff">TEST</font>
TEST <font color="#ff3333">TEST</font>
TEST <font color="#0099ff">TEST</font>`)			  
		logininfo = false
	}

}
