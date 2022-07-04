let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "id" }, ''))
  let json = await res.json()
  if (json.success) m.reply(json.success)
  else throw json
}
handler.tags = ['fun', 'main']
handler.customPrefix = /^(sim|simi|simih|.simih|.simi)$/i
handler.help = ['.simi']
handler.command = new RegExp

module.exports = handler

module.exports = handler
