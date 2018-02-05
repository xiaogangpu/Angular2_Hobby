import {Directive, TemplateRef, ViewContainerRef, Input} from "@angular/core";

@Directive({
    selector: "[tabTransclude]"
})
export class TabTranscludeDirective {

    public tabReference: TemplateRef<any>;

    constructor(public viewRef: ViewContainerRef) {
    }

    @Input()
    set tabTransclude(templateRef: TemplateRef<any>) {
        this.tabReference = templateRef;
        if (templateRef) {
            this.viewRef.createEmbeddedView(templateRef);
        }
    }

    get tabTransclude() {
        return this.tabReference;
    }

}
