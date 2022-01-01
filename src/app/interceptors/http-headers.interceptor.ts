import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable() 
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept (
        req : HttpRequest<any>,
        next : HttpHandler,
    ) : Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': '9065613b7bmsh59ad138253c7d9bp19066bjsna0f189f2da55',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
            },
            setParams: {
                key: "856367f724274a28b97d095593b33658",
            },
        });
        return next.handle(req);
    }
}