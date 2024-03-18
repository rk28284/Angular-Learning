
  <div style="overflow: auto;">
    <table mat-table [dataSource]="stocks" matSort class="mat-table">
      <!-- Symbol Column -->
      <ng-container matColumnDef="symbol">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>
          <mat-icon matTooltip="Abbreviation">info</mat-icon> SYMBOL
        </th>
        <td mat-cell *matCellDef="let stock">
          <div class="badge">{{ getFirstLetter(stock.symbol) }}</div>
          {{ stock.symbol }} ({{ stock.openHighLowSignal }})
        </td>
      </ng-container>
  
      <!-- LTP Column -->
      <ng-container matColumnDef="ltp">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>
          <mat-icon matTooltip="Abbreviation">info</mat-icon> LTP
        </th>
        <td mat-cell *matCellDef="let stock" [style.color]="stock.pctChange > 0 ? 'green' : 'red'">
          {{ stock.ltp }} {{ stock.change }} ({{ stock.pctChange }} %)
        </td>
      </ng-container>
  
      <!-- Momentum Column -->
      <ng-container matColumnDef="momentum">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>
          <mat-icon matTooltip="Abbreviation">info</mat-icon> MOMENTUM
        </th>
        <td mat-cell *matCellDef="let stock">{{ stock.stockOutperformanceRank }} {{ stock.stockMomentumRank }}</td>
      </ng-container>
  
      <!-- Open Column -->
      <ng-container matColumnDef="open">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>
          <mat-icon matTooltip="Abbreviation">info</mat-icon> OPEN
        </th>
        <td mat-cell *matCellDef="let stock">{{ stock.open }}</td>
      </ng-container>
  
      <!-- Deviation From Pivots Column -->
      <ng-container matColumnDef="deviationFromPivots">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>
          <mat-icon matTooltip="Abbreviation">info</mat-icon> DEVIATION FROM PIVOTS
        </th>
        <td mat-cell *matCellDef="let stock">PP R1</td>
      </ng-container>
  
      <!-- Todays Range Column -->
      <ng-container matColumnDef="todaysRange">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>
          <mat-icon matTooltip="Abbreviation">info</mat-icon> TODAYS RANGE
        </th>
        <td mat-cell *matCellDef="let stock">{{ stock.low }} - {{ stock.high }}</td>
      </ng-container>
  
      <!-- OHL Column -->
      <ng-container matColumnDef="ohl">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>
          <mat-icon matTooltip="Abbreviation">info</mat-icon> OHL
        </th>
        <td mat-cell *matCellDef="let stock">{{ stock.openHighLowSignal }}</td>
      </ng-container>
  
      <!-- Header and Row Definitions -->
      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  </div>
  
  <mat-paginator [pageSizeOptions]="[5, 10, 25, 100]" showFirstLastButtons></mat-paginator>
  