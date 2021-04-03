let handler = function (m) {
  this.sendContact(m.chat, '5511941547847', 'Ryuzki', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
