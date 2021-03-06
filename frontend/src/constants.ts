import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Constants {
    public MUSIC_PATH : string = "/assets/music/";
    public IMAGES_PATH : string = "/assets/images/";
    public USERS_API_URL: string = "http://localhost:3600/users";
    public MUSIC_API_URL: string = "http://localhost:3600/music";
    public FILES_API_URL: string = "http://localhost:3600/file/";
    public AUTH_API_URL: string = "http://localhost:3600/auth";
    public HTTP_OPTIONS_JSON = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      };
    
    
}
