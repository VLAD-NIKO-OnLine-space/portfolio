import { makeAutoObservable } from "mobx";
import MyFamily from "../COMPONENTS/MyFamily/MyFamily";
import Sport from "../COMPONENTS/Sport/Sport";



class HobbiesChoice {

    choice = 'code'



    constructor(){
        makeAutoObservable(this)
    }

    changeChoice(choice){
        this.choice = choice
  
    }

}



export default new HobbiesChoice();