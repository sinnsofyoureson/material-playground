import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// материал
import {MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatStepperModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatChipsModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

// http
import {HttpClientModule} from '@angular/common/http';

// формы
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ButtonsComponent } from './buttons/buttons.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
//import { DatepickerComponent } from './datepicker/datepicker.component';
import { Datepicker2Component } from './datepicker2/datepicker2.component';
import { FormsOutlinedComponent } from './forms-outlined/forms-outlined.component';
import { FormsOptionComponent } from './forms-option/forms-option.component';
import { FormsPasswordComponent } from './forms-password/forms-password.component';
import { FormsPrefixComponent } from './forms-prefix/forms-prefix.component';
import { FormsCommentComponent } from './forms-comment/forms-comment.component';
import { FormsHintsComponent } from './forms-hints/forms-hints.component';
import { SelectCustomComponent } from './select-custom/select-custom.component';
import { SliderComponent } from './slider/slider.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { Sidenav2Component } from './sidenav2/sidenav2.component';
import { DeviderComponent } from './devider/devider.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list/list.component';
import { StepperComponent } from './stepper/stepper.component';
import { SimpleExpansionComponent } from './simple-expansion/simple-expansion.component';
import { TabsComponent } from './tabs/tabs.component';
import { BadgeComponent } from './badge/badge.component';
import { ChipsComponent } from './chips/chips.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoadingComponent } from './loading/loading.component';
import { DialogSimpleComponent, DialogSimpleDialog } from './dialog-simple/dialog-simple.component';
import { DialogInjectableComponent, DialogDataExampleDialog } from './dialog-injectable/dialog-injectable.component';
import { DialogScrollComponent, DialogContentExampleDialog } from './dialog-scroll/dialog-scroll.component';
import { SnackBarComponent, PizzaPartyComponent } from './snack-bar/snack-bar.component';
import { ToolipComponent } from './toolip/toolip.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { TableSortingComponent } from './table-sorting/table-sorting.component';
import { TableExpandComponent } from './table-expand/table-expand.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { TableFooterComponent } from './table-footer/table-footer.component';
import { TableHttpComponent } from './table-http/table-http.component';
import { PhoneComponent, MyTelInput } from './phone/phone.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    AutocompleteComponent,
    CheckboxComponent,
    //DatepickerComponent,
    Datepicker2Component,
    FormsOutlinedComponent,
    FormsOptionComponent,
    FormsPasswordComponent,
    FormsPrefixComponent,
    FormsCommentComponent,
    FormsHintsComponent,
    SelectCustomComponent,
    SliderComponent,
    SidenavComponent,
    Sidenav2Component,
    DeviderComponent,
    ExpansionPanelComponent,
    LayoutComponent,
    ListComponent,
    StepperComponent,
    SimpleExpansionComponent,
    TabsComponent,
    BadgeComponent,
    ChipsComponent,
    SpinnerComponent,
    LoadingComponent,
    DialogSimpleComponent,
    DialogSimpleDialog, // нужно добавлять компонент с дополнительным диалогом
    DialogInjectableComponent,
    DialogDataExampleDialog, // нужно добавлять компонент с дополнительным диалогом
    DialogScrollComponent,
    DialogContentExampleDialog, // нужно добавлять компонент с дополнительным диалогом
    SnackBarComponent, PizzaPartyComponent,
    ToolipComponent,
    PaginatorComponent,
    TableSortingComponent,
    TableExpandComponent,
    TableFilterComponent,
    TableFooterComponent,
    TableHttpComponent,
    PhoneComponent,
    MyTelInput,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // материал
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatRadioModule,
    MatListModule,
    MatExpansionModule,
    MatGridListModule,
    MatStepperModule,
    MatTabsModule,
    MatBadgeModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    
    
    
    // формы
    FormsModule,
    ReactiveFormsModule,

    // http
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogDataExampleDialog, DialogContentExampleDialog, DialogSimpleDialog, PizzaPartyComponent // и сюда тоже диалог
  ]
})
export class AppModule { }
