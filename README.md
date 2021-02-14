# MeleeFrameDataBot
A Discord.JS bot that handles data from meleeframedata.com


# How to build for your own use

## Requirements and resources

Go on to [Discord Developer Portal](https://discord.com/developers/) and head on into the application section and create your application.  
Head on into the **Bot** tab and create a bot account - This account has a Bot Token ***You do not want to leak.*** - Leaking it is bad and can give others access to your bot application, giving you a bad time. In the instance it is leaked, you can regenerate it on the same website you make your application.  

You'll need [Node.JS 14.15.5](https://nodejs.org/en/) or later. Run **npm install** to install dependencies for the bot.

Edit the **.env** file and put your token in with:

discord_token = [botToken]  
prefix = [botPrefix]

Get the characters.db from the [meleeWebProcject](https://github.com/mitchhit234/meleeWebProject) and put it in the **./db/** folder - You'll have to make this folder.  

Use the command **node index.js** to run the discord bot. 
