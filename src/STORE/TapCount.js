import { makeAutoObservable } from "mobx";



class TapCount {

    tapCount = 10


    constructor(){
        makeAutoObservable(this)
    }

    plusCount(){
        this.tapCount += 1
    }
    
}



export default new TapCount()