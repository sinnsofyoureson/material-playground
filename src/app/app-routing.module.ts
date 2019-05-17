import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sidenav2Component } from './sidenav2/sidenav2.component';
import { LayoutComponent } from './layout/layout.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { Datepicker2Component } from './datepicker2/datepicker2.component';
import { DeviderComponent } from './devider/devider.component';
import { DialogInjectableComponent } from './dialog-injectable/dialog-injectable.component';
import { DialogScrollComponent } from './dialog-scroll/dialog-scroll.component';
import { DialogSimpleComponent  } from './dialog-simple/dialog-simple.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { PhoneComponent } from './phone/phone.component';
import { FormsCommentComponent } from './forms-comment/forms-comment.component';
import { FormsHintsComponent } from './forms-hints/forms-hints.component';
import { FormsOptionComponent } from './forms-option/forms-option.component';
import { FormsOutlinedComponent } from './forms-outlined/forms-outlined.component';
import { FormsPasswordComponent } from './forms-password/forms-password.component';
import { FormsPrefixComponent } from './forms-prefix/forms-prefix.component';
import { ListComponent } from './list/list.component';
import { LoadingComponent } from './loading/loading.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { SelectCustomComponent } from './select-custom/select-custom.component';
import { SimpleExpansionComponent } from './simple-expansion/simple-expansion.component';
import { SliderComponent } from './slider/slider.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { StepperComponent } from './stepper/stepper.component';
import { TableExpandComponent } from './table-expand/table-expand.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { TableFooterComponent } from './table-footer/table-footer.component';
import { TableHttpComponent } from './table-http/table-http.component';
import { TableSortingComponent } from './table-sorting/table-sorting.component';
import { TabsComponent } from './tabs/tabs.component';
import { ToolipComponent } from './toolip/toolip.component';


const routes: Routes = [
  { path: 'sidenav', component: Sidenav2Component },
  { path: 'layout', component: LayoutComponent },
  { path: 'dialog', component: DialogSimpleComponent },
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'chips', component: ChipsComponent },
  { path: 'datepicker', component: Datepicker2Component },
  { path: 'devider', component: DeviderComponent },
  { path: 'dialog-injectable', component: DialogInjectableComponent },
  { path: 'dialog-scroll', component: DialogScrollComponent },
  { path: 'dialog-simple', component: DialogSimpleComponent },
  { path: 'expansion', component: ExpansionPanelComponent },
  { path: 'phone', component: PhoneComponent },
  { path: 'comment', component: FormsCommentComponent },
  { path: 'hint', component: FormsHintsComponent },
  { path: 'form-option', component: FormsOptionComponent },
  { path: 'form-outlined', component: FormsOutlinedComponent },
  { path: 'password', component: FormsPasswordComponent },
  { path: 'prefix', component: FormsPrefixComponent },
  { path: 'list', component: ListComponent },
  { path: 'load', component: LoadingComponent },
  { path: 'pages', component: PaginatorComponent },
  { path: 'custom-select', component: SelectCustomComponent },
  { path: 'simpl-exp', component: SimpleExpansionComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'snackbar', component: SnackBarComponent },
  { path: 'spinner', component: SpinnerComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'table-expand', component: TableExpandComponent },
  { path: 'table-filter', component: TableFilterComponent },
  { path: 'table-footer', component: TableFooterComponent },
  { path: 'table-http', component: TableHttpComponent },
  { path: 'table-sort', component: TableSortingComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'toolip', component: ToolipComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
