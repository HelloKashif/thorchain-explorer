import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { DashboardComponent } from './dashboard.component';
import { StatsTableComponent } from '../_components/stats-table/stats-table.component';
import { PipesModule } from '../_pipes/pipes.module';
import { NetworkSummaryTableModule } from '../_components/network-summary-table/network-summary-table.module';
import { TxDetailTableDataModule } from '../_components/tx-detail-table-data/tx-detail-table-data.module';
import { LoadingModule } from '../_components/loading/loading.module';
import { VolumeModule } from '../_components/volume/volume.module';
import { TransactionsTableModule } from '../_components/transactions-table/transactions-table.module';
import { ErrorModule } from '../_components/error/error.module';

@NgModule({
  declarations: [DashboardComponent, StatsTableComponent],
  imports: [
    CommonModule,
    PipesModule,
    HighchartsChartModule,
    NetworkSummaryTableModule,
    TxDetailTableDataModule,
    LoadingModule,
    VolumeModule,
    TransactionsTableModule,
    ErrorModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent
      }
    ])
  ]
})
export class DashboardModule { }
