module.exports = function Gathering(mod) {
	let plantsMarkers = false,
		miningMarkers = false,
		energyMarkers = false,
		plants = false,
		mining = false,
		energy = false
	
	let mobid = [],
		gatherMarker = []
	
	function gatheringStatus() {
		sendStatus(
			"Сбор: "+ (mod.settings.enabled      ? "Включен"   : "Off"),
			"Предупреждающее сообщение: " + (mod.settings.sendToAlert  ? "Включен" : "Выключен"),
			
			"Подсказки по растениям: " + (plantsMarkers ? "Включен" : "Выключен"),
			"Подсказки по руде: " + (miningMarkers ? "Включен" : "Выключен"),
			"Подсказки по эссенции: " + (energyMarkers ? "Включен" : "Выключен"),
			"Растение: "     + (plants        ? "Включен" : "Выключен"),
			"Руда: "     + (mining        ? "Включен" : "Выключен"),
			"Эссенция: "     + (energy        ? "Включен" : "Выключен"),
		)
	}
	
	function sendStatus(msg) {
		sendMessage([...arguments].join('\n\t - '))
	}
	
	mod.command.add("сбор", (arg) => {
		if (!arg) {
			mod.settings.enabled = !mod.settings.enabled
			if (!mod.settings.enabled) {
				plantsMarkers = false
				miningMarkers = false
				energyMarkers = false
				plants = false
				mining = false
				energy = false
				for (let itemId of mobid) {
					despawnItem(itemId)
				}
			}
			gatheringStatus()
		} else {
			switch (arg) {
				case "warn":
					mod.settings.sendToAlert = !mod.settings.sendToAlert
					sendMessage("Предупреждающее сообщение " + (mod.settings.sendToAlert ? "Включен" : "Выключен"))
					break
				case "status":
					gatheringStatus()
					break
				
				case "растения":
					plantsMarkers = !plantsMarkers
					sendMessage("Подсказки по растениям -  " + (plantsMarkers ? "Показаны" : "Скрыты"))
					break
				case "руда":
					miningMarkers = !miningMarkers
					sendMessage("Подсказки по руде -  " + (miningMarkers ? "Показаны" : "Скрыты"))
					break
				case "эссенция":
					energyMarkers = !energyMarkers
					sendMessage("Подсказки по эссенции - " + (energyMarkers ? "Показаны" : "Скрыты"))
					break
				
				case "кустарник":
					plants = !plants
					sendMessage("Подсказки по Густому кустарнику (Редкий) - " + (plants ? "Показаны" : "Скрыты"))
					break
				case "валун":
					mining = !mining
					sendMessage("Подсказки по Валуну (Редкий) - " + (mining ? "Показаны" : "Скрыты"))
					break
				case "кристалл":
					energy = !energy
					sendMessage("Подсказки по Бесцветному кристаллу (Редкий) - " + (energy ? "Показаны" : "Скрыты"))
					break
				
				default :
					sendMessage("Неверный параметр!!")
					break
			}
		}
	})
	
	mod.game.me.on('change_zone', (zone, quick) => {
		mobid = []
	})
	
	mod.hook('S_SPAWN_COLLECTION', 4, (event) => {
		if (mod.settings.enabled) {
			if (plantsMarkers && (gatherMarker = mod.settings.plants.find(obj => obj.id === event.id))) {
				sendAlert( ("Обнаружено [" + gatherMarker.name + "] " + gatherMarker.msg), 44)
				sendMessage("Обнаружено [" + gatherMarker.name + "] " + gatherMarker.msg)
			} else if (miningMarkers && (gatherMarker = mod.settings.mining.find(obj => obj.id === event.id))) {
				sendAlert( ("Обнаружено [" + gatherMarker.name + "] " + gatherMarker.msg), 44)
				sendMessage("Обнаружено [" + gatherMarker.name + "] " + gatherMarker.msg)
			} else if (energyMarkers && (gatherMarker = mod.settings.energy.find(obj => obj.id === event.id))) {
				sendAlert( ("Обнаружено [" + gatherMarker.name + "] " + gatherMarker.msg), 44)
				sendMessage("Обнаружено [" + gatherMarker.name + "] " + gatherMarker.msg)
			} else if (plants && event.id == 1) {
				sendAlert( ("Обнаружен [Редкий Густой кустарник] "), 44)
				sendMessage("Обнаружено [Редкий Густой кустарник] ")
			} else if (mining && event.id == 101) {
				sendAlert( ("Обнаружен [Редкий Валун] "), 44)
				sendMessage("Обнаружен [Валун] ")
			} else if (energy && event.id == 201) {
				sendAlert( ("Обнаружен [Редкий Бесцветный кристалл] "), 44)
				sendMessage("Обнаружен [Редкий Бесцветный кристалл] ")
			} else {
				return true
			}
			
			spawnItem(event.gameId, event.loc)
			mobid.push(event.gameId)
		}
	})
	
	mod.hook('S_DESPAWN_COLLECTION', 2, (event) => {
		if (mobid.includes(event.gameId)) {
			gatherMarker = []
			despawnItem(event.gameId)
			mobid.splice(mobid.indexOf(event.gameId), 1)
		}
	})
	
	function spawnItem(gameId, loc) {
		mod.send('S_SPAWN_DROPITEM', 8, {
			gameId: gameId*10n,
			loc: loc,
			item: mod.settings.markerId,
			amount: 1,
			expiry: 999999,
			owners: [{}]
		})
	}
	
	function despawnItem(gameId) {
		mod.send('S_DESPAWN_DROPITEM', 4, {
			gameId: gameId*10n
		})
	}
	
	function sendMessage(msg) { mod.command.message(msg) }
	
	function sendAlert(msg, type) {
		mod.send('S_DUNGEON_EVENT_MESSAGE', 2, {
			type: type,
			chat: false,
			channel: 0,
			message: msg,
		})
	}
}
