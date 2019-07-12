import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { ListModule, RadioModule, GridModule } from "carbon-components-angular";
import { WebSpeechModule } from "./web-speech/web-speech.module";
import { CmdExecutorService } from "./cmd-executor.service";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpModule,
		AppRoutingModule,
		ListModule,
		RadioModule,
		GridModule,
		WebSpeechModule,
		HttpClientModule,
	],
	providers: [
		CmdExecutorService,
		HttpClient,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
