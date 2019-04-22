
class MessagingSystem {

    constructor(){
 
        throw new Error('Esse objeto não deve ser instaciado.');
        this.messages = {};	
    }
 
    @import '/messagingSystem/MessagingSystem_show.js'; 
    
    @import '/messagingSystem/MessagingSystem_hide.js'; 
    
    @import '/messagingSystem/MessagingSystem_setUpMessage.js'; 

}

