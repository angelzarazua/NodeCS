var express = require('express')
var app = express()

var server = require('http').Server(app)
var io  = require('socket.io')(server)
var os = require('os')
var net = require('net')

var interfaces = os.networkInterfaces;
var address = [];

for (var k in interfaces) {
    for(var k2 in interfaces[k]){
        var address = interfaces[k][k2];
        if(address.family == 'IPv4' && !address.internal()){
            console.log(address.address)
            addresses.push(address.address)
        }
    }
}

var HOST = addresses[0]
//var PORT = '4444'
var PORT = normalizePort(process.env.PORT || '3000')
var sockets = [];

var ser = net.createServer(function(){
    sockets[0] = so;
    sockets.write(sockets[0]);
    console.log(so);
    console.log('Usuario conectado'+ so.remoteAddress+':'+so.remotePort)

})

io.on('connection', function(socket){
    console.log("Conectado"+socket)
})

server.listen(PORT, function() {
    console.log("Servidor  Activo " + PORT)
})

net.createServer(function(sock){
    console.log('Conectado: ' + sock.remoteAddress + ':' + sock.remotePort)
    sock.on('data', function(data) {
        console.log(data)
    })
}).listen(PORT, HOST)

