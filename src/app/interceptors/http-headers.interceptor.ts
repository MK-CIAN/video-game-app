import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { throwError } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'X-RapidAPI-Key': 'f50b86853emshe5b1e2ce9401e8ep185df6jsn4ea1c2b93c15',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
            },
            setParams: {
                key: 'f50b86853emshe5b1e2ce9401e8ep185df6jsn4ea1c2b93c15'
            }
        });
        return next.handle(req);
    }
}
