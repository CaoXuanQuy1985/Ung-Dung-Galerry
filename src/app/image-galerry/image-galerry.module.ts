import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalerryComponent } from './image-galerry.component';
import { ImageCardComponent } from './image-card/image-card.component';

@NgModule({
    declarations: [ImageGalerryComponent, ImageCardComponent],
    exports: [
        ImageGalerryComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ImageGalerryModule { }
