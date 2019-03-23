import {Injectable} from '@angular/core';
import {Http,Jsonp,Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/map';

//import 'rxjs/add/operator/of';
//import 'rxjs/add/observable/of';
declare var window: any;
@Injectable()
export class FlickrService {
    constructor(private _jsonp: Jsonp) { };
    getResult(query: string) {
     let url =`https://api.flickr.com/services/feeds/photos_public.gne?tags=${query}&format=json&callback=jsonFlickrFeed`;
        return this._jsonp
        .request(url)
        .map( res =>res.json())
        .catch((error:Response | any) =>{  // as flickr's call back can't be invoked looks not compliance with jsonp callback mechanism. so ingnor any errors to go forwarding
            console.log("error is " + error);
            return Observable.of([window.flickrJsonObject]);  //native js varable for storeing JSONP from flickr as fallback soltuion
        }).map((val) => {
                console.log('val' + val[0]);
                    return val[0].items.map((item: any) => {
                        return {
                            url: item.media.m,
                            title: item.title,
                            tags :item.tags,
                            author : item.author,
                            thumbernail: item.link
                        }
                    })
        });
    }
}
