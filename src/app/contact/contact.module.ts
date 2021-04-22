import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ContactComponent } from './components/contact/contact.component';
import { ContactRoutingModule } from './contact-router.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [ContactRoutingModule, CommonModule, MaterialModule],
})
export class ContactModule {}
