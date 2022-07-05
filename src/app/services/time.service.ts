import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  makePrettyTimeDelta(date: Date): string {
    let deltaInSeconds = (Date.now() - date.getTime()) / 1e3;
    let timeDelta: string
    if (deltaInSeconds < 1 * 60) { timeDelta = `just now` }
    else if (deltaInSeconds < 3600) { timeDelta = `${Math.round(deltaInSeconds / 60)} minutes ago` }
    else if (deltaInSeconds < 24 * 3600) { timeDelta = `${Math.round(deltaInSeconds / 3600)} hours ago`}
    else if (deltaInSeconds < 7 * 24 * 3600) { timeDelta = `${Math.round(deltaInSeconds / (24 * 3600))} days ago`}
    else if (deltaInSeconds < 30.5 * 24 * 3600) { timeDelta = `${Math.round(deltaInSeconds / (7 * 24 * 3600))} weeks ago` }
    else if (deltaInSeconds <= 12 * 30.5 * 24 * 3600) { timeDelta = `${Math.round(deltaInSeconds / (30.5 * 24 * 3600))} months ago` }
    else { timeDelta = `${Math.round(deltaInSeconds / (12 * 30.5 * 24 * 3600))} years ago` }
    return timeDelta
  }
}
