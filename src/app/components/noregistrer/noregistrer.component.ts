import { Component, Input } from "@angular/core";


@Component({
    templateUrl : "./noregistrer.component.html",
    selector: "no-registrer",
})

export default class NoRegistrer {
    @Input() message: string = ""
}