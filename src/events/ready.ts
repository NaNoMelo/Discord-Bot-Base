import { Event } from "../classes/Events"

export default new Event("ready", (client) => {
    console.log("Bot is online", client.user?.tag)
})
