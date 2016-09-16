import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import { HTTP_PROVIDERS,Headers } from '@angular/http';

bootstrap(AppComponent, [HTTP_PROVIDERS]);
