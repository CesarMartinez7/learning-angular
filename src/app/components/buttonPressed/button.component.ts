import { Component } from "@angular/core";


@Component({
    standalone: true,
    templateUrl: "./button.component.html"
})

export default class ButtonPress {
    name : string = "cesar"
    mostrarAlgo(){
        window.alert("Soy tu primer componente Reactivo y no Angulativo ")
    }

    manejarEntradaInput (event: Event){
        console.log(event)
        
        const input = event.target as HTMLInputElement
        this.name = input.value
    }

}