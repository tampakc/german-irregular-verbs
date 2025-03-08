import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyComponent } from './pages/study/study.component';
import { QuizComponent } from './pages/quiz/quiz.component';

export const routes: Routes = [
  { path: 'study', component: StudyComponent },
  { path: 'quiz', component: QuizComponent },
  { path: '', redirectTo: '/study', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
