import { NgModule } from '@angular/core';
import { FirstLetterUpPipe } from './first-letter-up/first-letter-up';
@NgModule({
	declarations: [FirstLetterUpPipe],
	imports: [],
	exports: [FirstLetterUpPipe]
})
export class PipesModule {}
