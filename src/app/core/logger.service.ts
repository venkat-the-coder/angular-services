import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn:'root'
    }
)


export class LoggerService{
    constructor() {
        
    }

    log(message : string): void
    {
        const time:String = new  Date().toLocaleTimeString();
        console.log(`Message:${message} ${time}`)
    }

    error(message : string): void
    {
        const time:String = new  Date().toLocaleTimeString();
        console.error(`Error:${message} ${time}`)
    }
}