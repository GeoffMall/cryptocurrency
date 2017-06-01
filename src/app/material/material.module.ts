import {NgModule} from "@angular/core";
import {
  MdAutocompleteModule, MdButtonModule, MdButtonToggleModule, MdCardModule, MdCheckboxModule, MdChipsModule,
  MdDialogModule, MdGridListModule, MdIconModule, MdInputModule, MdListModule, MdMenuModule, MdProgressBarModule,
  MdProgressSpinnerModule, MdRadioModule, MdSelectModule, MdSidenavModule, MdSliderModule, MdSlideToggleModule,
  MdSnackBarModule, MdTabsModule, MdToolbarModule, MdTooltipModule
} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";




@NgModule({
  imports: [

    BrowserAnimationsModule,

    // Form Control
    MdAutocompleteModule,
    MdCheckboxModule,
    MdInputModule,
    MdRadioModule,
    MdSelectModule,
    MdSliderModule,
    MdSlideToggleModule,

    // Navigation
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,

    // Layout
    MdListModule,
    MdGridListModule,
    MdCardModule,
    MdTabsModule,

    // Buttons, Indicators & Icons
    MdButtonModule,
    MdButtonToggleModule,
    MdChipsModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,

    // Popups & Modals
    MdDialogModule,
    MdTooltipModule,
    MdSnackBarModule,


  ],
  exports: [

    BrowserAnimationsModule,

    // Form Control
    MdAutocompleteModule,
    MdCheckboxModule,
    MdInputModule,
    MdRadioModule,
    MdSelectModule,
    MdSliderModule,
    MdSlideToggleModule,

    // Navigation
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,

    // Layout
    MdListModule,
    MdGridListModule,
    MdCardModule,
    MdTabsModule,

    // Buttons, Indicators & Icons
    MdButtonModule,
    MdButtonToggleModule,
    MdChipsModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,

    // Popups & Modals
    MdDialogModule,
    MdTooltipModule,
    MdSnackBarModule,
  ]
})
export class MaterialModule { }
