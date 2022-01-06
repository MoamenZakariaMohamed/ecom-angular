import { CheackoutComponent } from './components/cheackout/cheackout.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes:Routes=[
    {path:'',redirectTo:'products',pathMatch:'full'},
    { path: 'products',component:ProductComponent},
    {path:'cart',component:CartComponent},
    {path:'cheackout',component:CheackoutComponent }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}