export function sendMessage (message) {
    console.log('Vous avez envoyé' + message)
}

export function createConnection(url,roomId)  {
    return {
        connect() {
            console.log('✅ Connecting to "' + roomId + '" room at ' + url + '...')
        }
        ,
        disconnect() {
            console.log('❌ Disconnected from "' + roomId + '" room at ' + url)
        }
    }
}
