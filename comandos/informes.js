const Discord = require("discord.js");
const db = require('../database.js');

exports.run = (client, message, args) => {

message.delete();

  var mention = message.mentions.channels.first()

var newSuffix = args.slice(1).join(' ');
var newArgo = args.slice(2).join(' ');
var newOne = args.slice(3).join(' ');
var newTwo = args.slice(4).join(' ');
var newFive = args.slice(5).join(' ');
var newSix = args.slice(6).join(' ')
var newSeven = args.slice(7).join(' ');
var newNine = args.slice(8).join(' ');
var atapo = args.slice(9).join(' ');
var azu = args.slice(10).join(' ');
var aqua = args.slice(11).join(' ');




db.Guilds.findOne({
    "_id": message.guild.id}, 
    function(erra, servidor) {
        if (servidor) {

 let a;
 let b;
 let c;
 let d;
 let e;
 let f;
 let g;
 let h;
 let i;
 let j;
 let k;
 
 if(!servidor.logg_MD) a = '<:CancelarK:513164962768879626> | Desativado';
 else a = `<:ConfirmarK:513164962789720066> | Ativado em <#${servidor.logg_MD}>`;
 
 if(!servidor.logg_MUP) b = '<:CancelarK:513164962768879626> |  Desativado';
 else b = `<:ConfirmarK:513164962789720066> | Ativado em <#${servidor.logg_MUP}>`;

if(!servidor.logg_MD) c = '<:CancelarK:513164962768879626> | Desativado';
 else c = `<:ConfirmarK:513164962789720066> | Ativado em <#${servidor.logg_mGA}>`;

if(!servidor.logg_mGR) d = '<:CancelarK:513164962768879626> | Desativado';
 else d  = `<:ConfirmarK:513164962789720066> | Ativado em <#${servidor.logg_mGR}>`;

if(!servidor.logg_banAction) e = '<:CancelarK:513164962768879626> |  Desativado';
 else e = `<:ConfirmarK:513164962789720066> | Ativado em <#${servidor.logg_banAction}>`;

if(!servidor.logg_wordsAction) f = '<:CancelarK:513164962768879626> |  Desativado';
 else f = `<:ConfirmarK:513164962789720066> | Ativado em <#${servidor.logg_wordsAction}>`;

if(!servidor.logg_invitesAction) g = '<:CancelarK:513164962768879626> | Desativado';
 else g = `<:ConfirmarK:513164962789720066> | Ativado em <#${servidor.logg_invitesAction}>`;

if(!servidor.logg_userinfoAction) i = '<:CancelarK:513164962768879626> | Desativado';
 else i = `<:ConfirmarK:513164962789720066> | Ativado em <#${servidor.logg_userinfoAction}>`;

if(!servidor.logg_adv) j = '<:CancelarK:513164962768879626> | Desativado';
 else j = `<:ConfirmarK:513164962789720066> | Ativado em <#${servidor.logg_adv}>`;
 
 if(!servidor.logg_mGA) k = '<:CancelarK:513164962768879626> | Desativado';
 else k = `<:ConfirmarK:513164962789720066> | Ativado em <#${servidor.logg_mGA}>`;

const embed = new Discord.RichEmbed()
.setAuthor('Kael | Informes',client.user.avatarURL)
.setDescription(`O meu sistema de informes funciona como se fosse um registro de auditoria, assim voc?? pode definir eventos em canais de sua escolha.\n??????`)
.setThumbnail('https://cdn.discordapp.com/attachments/507373669413027852/513435633880924160/InforK.png')
.addField(`Eventos Dispon??veis:`,`\n??????\n<:DeletadasK:513425705636462596> **| Mensagens Deletadas**`,false)
.addField(`${servidor.prefixo}informes deletadas <#canal>`,`Criar?? um registro de mensagens deletadas.`,false)
.addField(`${servidor.prefixo}informes desativar deletadas`,`Desativar?? o registro de mensagens deletadas.\n??????\n<:EditadasK:513429684571078657> **| Mensagens Editadas**`,false)
.addField(`${servidor.prefixo}informes editadas <#canal>`,`Criar?? um registro de mensagens editadas.`,false)
.addField(`${servidor.prefixo}informes desativar editadas`,`Desativar?? o registro de mensagens editadas.\n??????\n<:EntradaK:513429685263269960> **| Entrada de Novatos**`,false)
.addField(`${servidor.prefixo}informes entradas <#canal>`,`Criar?? um registro de entradas.`,false)
.addField(`${servidor.prefixo}informes desativar entradas`,`Criar?? um registro de entradas.\n??????\n<:SaidaK:513429684768211044> **| Sa??da de Novatos**`,false)
.addField(`${servidor.prefixo}informes sa??das <#canal>`,`Criar?? um registro de sa??das.`,false)
.addField(`${servidor.prefixo}informes desativar sa??das`,`Desativar?? o registro de sa??das.\n??????\n<:BanidoK:513429685468790795> **| Puni????es**`,false)
.addField(`${servidor.prefixo}informes puni????es <#canal>`,`Criar?? um registro de banidos.`,false)
.addField(`${servidor.prefixo}informes desativar puni????es`,`Desativar?? o registro de banidos.\n??????\n<:VocabularioK:513433879013490698> **| Vocabul??rio**`,false)
.addField(`${servidor.prefixo}informes vocabul??rio <#canal>`,`Criar?? um registro de mensagens filtradas pelo corretor de vocabul??rio. `,false)
.addField(`${servidor.prefixo}informes desativar vocabul??rio`,`Desativar?? o registro de mensagens filtradas pelo corretor de vocabul??rio.\n??????\n<:InfoK:513429684977926178> **| Informa????es/Entrada**`,false)
.addField(`${servidor.prefixo}informes info <#canal>`, `Criar?? um registro de informa????es do usu??rio que entrar no servidor.`,false)
.addField(`${servidor.prefixo}informes desativar info`,`Desativar?? o registro de informa????es do usu??rio que entrar no servidor.\n??????\n<:AdvK:513429685179252756> **| Adv??rtencias**`,false)
.addField(`${servidor.prefixo}informes adv <#canal>`,`Criar?? um registro de advert??ncias.`,false)
.addField(`${servidor.prefixo}informes desativar adv`,`Desativar?? o registro de advert??ncias.`,false)
.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
.setColor('#f3052f');
if(!args[0]) return message.channel.send({embed}).then(sentMsg => sentMsg.delete(130000));


switch (args[0]) {
case 'painel': {

if (servidor && servidor.logg_MD)                 
if (!message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, voc?? precisa ter poder administrativo para ter acesso aos informes.`).then(sentMsg => sentMsg.delete(10000));
     
const embed = new Discord.RichEmbed()
.setAuthor('Painel | Informes',client.user.avatarURL)
.setThumbnail("https://cdn.discordapp.com/attachments/507373669413027852/513180935236222996/Informes.png")
.addField('Mensagens Deletadas:',`${a}`,false)
.addField('Mensagens Editadas:',`${b}`,false)
.addField('Entrada de Membros:',`${c}`,false)
.addField('Sa??da de Membros:',`${d}`,false)
.addField('Puni????es:',`${e}`,false)
.addField('Informa????es em Entrada:',`${i}`,false)
.addField('Advert??ncias:',`${j}`,false)
.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
.setColor('#f3052f');
message.channel.send({embed}).then(sentMsg => sentMsg.delete(30000));
  
return;    
}     
    
case 'deletadas': {

if (servidor && servidor.logg_MD)                 
if (!message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, voc?? precisa ter poder administrativo para ter acesso aos informes.`).then(sentMsg => sentMsg.delete(10000));
     
if (!mention)
return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, voc?? precisa me falar o canal que quer o evento em quest??o.`).then(sentMsg => sentMsg.delete(10000));
      
servidor.logg_MD = mention.id
servidor.save();
message.channel.send(`<:DeletadasK:513425705636462596> **|** ${message.author}, seu informes foi definido em ${mention}!`).then(sentMsg => sentMsg.delete(10000));
 
      
return;    
}  
case 'editadas': {

if (servidor && servidor.logg_MUP)                 
if (!message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, voc?? precisa ter poder administrativo para ter acesso aos informes.`).then(sentMsg => sentMsg.delete(10000));
     
if (!mention)
return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, voc?? precisa me falar o canal que quer o evento em quest??o.`).then(sentMsg => sentMsg.delete(10000));
      
servidor.logg_MUP = mention.id
servidor.save();
message.channel.send(`<:EditadasK:513429684571078657> **|** ${message.author}, seu informes foi definido em ${mention}!`).then(sentMsg => sentMsg.delete(10000));
      
      
return;    
} 
case 'entradas': {

if (servidor && servidor.logg_mGA)                 
if (!message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, voc?? precisa ter poder administrativo para ter acesso aos informes.`).then(sentMsg => sentMsg.delete(10000));
     
if (!mention)
return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, voc?? precisa me falar o canal que quer o evento em quest??o.`).then(sentMsg => sentMsg.delete(10000));
      
servidor.logg_mGA = mention.id
servidor.save();
message.channel.send(`<:EntradaK:513429685263269960> **|** ${message.author}, seu informes foi definido em ${mention}!`).then(sentMsg => sentMsg.delete(10000));
      
      
return;    
} 
case 'sa??das': {

if (servidor && servidor.logg_mGR)                 
if (!message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, voc?? precisa ter poder administrativo para ter acesso aos informes.`).then(sentMsg => sentMsg.delete(10000));
     
if (!mention)
return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, voc?? precisa me falar o canal que quer o evento em quest??o.`).then(sentMsg => sentMsg.delete(10000));
      
servidor.logg_mGR = mention.id
servidor.save();
message.channel.send(`<:SaidaK:513429684768211044> **|** ${message.author}, seu informes foi definido em ${mention}!`).then(sentMsg => sentMsg.delete(10000));
      
      
return;    
} 
case 'puni????es': {

if (servidor && servidor.banAction)                 
if (!message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, voc?? precisa ter poder administrativo para ter acesso aos informes.`).then(sentMsg => sentMsg.delete(10000));
     
if (!mention)
return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, voc?? precisa me falar o canal que quer o evento em quest??o.`).then(sentMsg => sentMsg.delete(10000));
      
servidor.logg_banAction = mention.id
servidor.save();
message.channel.send(`<:BanidoK:513429685468790795> **|** ${message.author}, seu informes foi definido em ${mention}!`).then(sentMsg => sentMsg.delete(10000));
  

return;    
}

case 'filtradas': {

if (servidor && servidor.wordsAction)                 
if (!['244489368717230090','314966364873818112'].includes(message.author.id) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, voc?? precisa ter poder administrativo para ter acesso aos informes.`).then(sentMsg => sentMsg.delete(10000));
     
if (!mention)
return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, voc?? precisa me falar o canal que quer o evento em quest??o.`).then(sentMsg => sentMsg.delete(10000));
      
servidor.logg_wordsAction = mention.id
servidor.save();
message.channel.send(`<:VocabularioK:513433879013490698> **|** ${message.author}, seu informes foi definido em ${mention}!`).then(sentMsg => sentMsg.delete(10000));
  

return;    
}

case 'adv': {

if (servidor && servidor.logg_adv)                 
if (!['244489368717230090','314966364873818112'].includes(message.author.id) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, voc?? precisa ter poder administrativo para ter acesso aos informes.`).then(sentMsg => sentMsg.delete(10000));
     
if (!mention)
return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, voc?? precisa me falar o canal que quer o evento em quest??o.`).then(sentMsg => sentMsg.delete(10000));
      
servidor.logg_adv = mention.id
servidor.save();
message.channel.send(`<:AdvK:513429685179252756> **|** ${message.author}, seu informes foi definido em ${mention}!`).then(sentMsg => sentMsg.delete(10000));
  

return;    
}

case 'info': {

if (servidor && servidor.userinfoAction)                 
if (!message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, voc?? precisa ter poder administrativo para ter acesso aos informes.`).then(sentMsg => sentMsg.delete(10000));
     
if (!mention)
return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, voc?? precisa me falar o canal que quer o evento em quest??o.`).then(sentMsg => sentMsg.delete(10000));
      
servidor.logg_userinfoAction = mention.id
servidor.save();
message.channel.send(`<:InfoK:513429684977926178> **|** ${message.author}, seu informes foi definido em ${mention}!`).then(sentMsg => sentMsg.delete(10000));
  

return;    
}

case 'silenciamento': {

if (servidor && servidor.userinfoAction)                 
if (!message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, voc?? precisa ter poder administrativo para ter acesso aos informes.`).then(sentMsg => sentMsg.delete(10000));
     
if (!mention)
return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, voc?? precisa me falar o canal que quer o evento em quest??o.`).then(sentMsg => sentMsg.delete(10000));
      
servidor.logg_mute = mention.id
servidor.save();
message.channel.send(`<:MutadoK:513139718981156877> **|** ${message.author}, seu informes foi definido em ${mention}!`).then(sentMsg => sentMsg.delete(10000));
  

return;    
}

case 'vocabul??rio': {

if (servidor && servidor.wordsAction)                 
if (!message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, voc?? precisa ter poder administrativo para ter acesso aos informes.`).then(sentMsg => sentMsg.delete(10000));
     
if (!mention)
return message.channel.send(`<:Kael:512721559887151104> **|** ${message.author}, voc?? precisa me falar o canal que quer o evento em quest??o.`).then(sentMsg => sentMsg.delete(10000));
      
servidor.logg_wordsAction = mention.id
servidor.save();
message.channel.send(`<:SabaoK:513816458304946177> **|** ${message.author}, seu informes foi definido em ${mention}!`).then(sentMsg => sentMsg.delete(10000));
  
return;    
}

     }
     
if (!newSuffix.length < 1) {     
if (message.content.startsWith(servidor.prefixo + 'informes desativar deletadas')) {
 
servidor.logg_MD = '';
servidor.save();
message.channel.send(`<:DeletadasK:513425705636462596> **|** ${message.author}, voc?? desativou o informes de mensagens deletadas!`).then(sentMsg => sentMsg.delete(10000));
}
    
}

if (!newArgo.length < 2) {     
if (message.content.startsWith(servidor.prefixo + 'informes desativar editadas')) {
 
servidor.logg_MUP = '';
servidor.save();
message.channel.send(`<:EditadasK:513429684571078657> **|** ${message.author}, voc?? desativou o informes de mensagens editadas.`).then(sentMsg => sentMsg.delete(10000));
}
    
}

if (!newOne.length < 3) {     
if (message.content.startsWith(servidor.prefixo + 'informes desativar entradas')) {
 
servidor.logg_mGA = '';
servidor.save();
message.channel.send(`<:EntradaK:513429685263269960> **|** ${message.author}, voc?? desativou o informes de entradas!`).then(sentMsg => sentMsg.delete(10000));
}
    
}
     
if (!newTwo.length < 4) {     
if (message.content.startsWith(servidor.prefixo + 'informes desativar sa??das')) {
 
servidor.logg_mGR = '';
servidor.save();
message.channel.send(`<:SaidaK:513429684768211044> **|** ${message.author}, voc?? desativou o informes de sa??das!`).then(sentMsg => sentMsg.delete(10000));
}
    
}

if (!newFive.length < 5) {     
if (message.content.startsWith(servidor.prefixo + 'informes desativar banidos')) {
 
servidor.logg_banAction = '';
servidor.save();
message.channel.send(`<:BanidoK:513429685468790795> **|** ${message.author}, voc?? desativou o informes de banimentos e desbanimentos!`).then(sentMsg => sentMsg.delete(10000));
}
    
}

if (!newSix.length < 6) {     
if (message.content.startsWith(servidor.prefixo + 'informes desativar vocabul??rio')) {
 
servidor.logg_wordsAction = [];
servidor.save();
message.channel.send(`<:VocabularioK:513433879013490698> **|** ${message.author}, voc?? desativou o informes de vocabul??rio filtrado!`).then(sentMsg => sentMsg.delete(10000));
}
    
}

if (!newSeven.length < 7) {     
if (message.content.startsWith(servidor.prefixo + 'informes desativar advert??ncia')) {
 
servidor.logg_adv = '';
servidor.save();
message.channel.send(`<:AdvK:513429685179252756> **|** ${message.author}, voc?? desativou o informes de advert??ncias!`).then(sentMsg => sentMsg.delete(10000));
}
    
}

if (!atapo.length < 9) {     
if (message.content.startsWith(servidor.prefixo + 'informes desativar info')) {
 
servidor.logg_userinfoAction = false;
servidor.save();
message.channel.send(`<:InfoK:513429684977926178> **|** ${message.author}, voc?? desativou o informes de informa????es de entrada!`).then(sentMsg => sentMsg.delete(10000));
}
    
}

if (!azu.length < 10) {     
if (message.content.startsWith(servidor.prefixo + 'informes desativar silenciamentos')) {
 
servidor.logg_mute = '';
servidor.save();
message.channel.send(`<:MutadoK:513139718981156877> **|** ${message.author}, voc?? desativou o informes de silenciamento!`).then(sentMsg => sentMsg.delete(10000));
}
    
}

if (!aqua.length < 11) {     
if (message.content.startsWith(servidor.prefixo + 'informes desativar vocabul??rio')) {
 
servidor.logg_wordsAction = '';
servidor.save();
message.channel.send(`<:SabaoK:513816458304946177> **|** ${message.author}, voc?? desativou o informes de vocabul??rio!`).then(sentMsg => sentMsg.delete(10000));
}
    
}
     
  }
});  
    
    
    
};

exports.aliases = ['logs','modlogs','modlog','loggs'];
