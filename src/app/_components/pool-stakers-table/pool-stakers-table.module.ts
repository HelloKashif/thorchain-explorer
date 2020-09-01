import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoolStakersTableComponent } from './pool-stakers-table.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../_pipes/pipes.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { TxDetailTableDataModule } from '../tx-detail-table-data/tx-detail-table-data.module';

@NgModule({
  declarations: [PoolStakersTableComponent],
  imports: [
    CommonModule,
    PipesModule,
    FontAwesomeModule,
    // TxDetailTableDataModule, //@Todo do we need this
    RouterModule
  ],
  exports: [PoolStakersTableComponent]
})
export class PoolStakersTableModule { }
