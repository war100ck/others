class TeraMessage {
	constructor(mod) {
		this.clr = function(text, hexColor) {
			return '<font color="#'+ hexColor +'">' + text + '</font>' // Любой цвет
		}
		
		this.RED = function(text) {
			return '<font color="#FF0000">' + text + '</font>' // Красный
		}
		this.BLU = function(text) {
			return '<font color="#56B4E9">' + text + '</font>' // Синий
		}
		this.YEL = function(text) {
			return '<font color="#E69F00">' + text + '</font>' // Желтый
		}
		this.TIP = function(text) {
			return '<font color="#00FFFF">' + text + '</font>' // Красный
		}
		this.GRY = function(text) {
			return '<font color="#A0A0A0">' + text + '</font>' // Зеленый
		}
		this.PIK = function(text) {
			return '<font color="#FF00DC">' + text + '</font>' // Розовый
		}
		
		this.chat = function(msg) {
			mod.command.message(msg)
		}
		this.party = function(msg) {
			mod.send('S_CHAT', 3 , {
				channel: 21,
				name: 'TIP',
				message: msg,
			})
		}
		this.raids = function(msg) {
			mod.send('S_CHAT', 3 , {
				channel: 25,
				name: 'TIP',
				message: msg,
			})
		}
		this.alert = function(msg, type) {
			mod.send('S_DUNGEON_EVENT_MESSAGE', 2, {
				type: type,
				chat: false,
				channel: 0,
				message: msg,
			})
		}
	}
}

module.exports = TeraMessage
