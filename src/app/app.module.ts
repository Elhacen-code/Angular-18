import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./header/header.component";
import { CardComponent } from "./shared/card/card.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TaskComponent } from "./tasks/task/task.component";
import { ShareModule } from "./shared/share.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    declarations: [AppComponent, UserComponent, HeaderComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule, ShareModule, TasksModule]
})
export class AppModule { }