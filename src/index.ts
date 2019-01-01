import {Observable, BehaviorSubject} from 'rxjs';

export function getCookieObservable(): Observable<string> {
    const key = 'cookie';
    const target = Object.getPrototypeOf(Object.getPrototypeOf(document));
    const setter = Object.getOwnPropertyDescriptor(target, key).set;
    const subject = new BehaviorSubject<string>(document.cookie);
    Object.defineProperty(target, key, {
        set: value => {
            setter.call(document, value);
            subject.next(document.cookie);
        }
    });
    return subject.asObservable();
}

export function cookieOnChange(callback: (cookie: string) => any) {
    const key = 'cookie';
    const target = Object.getPrototypeOf(Object.getPrototypeOf(document));
    const setter = Object.getOwnPropertyDescriptor(target, key).set;
    Object.defineProperty(target, key, {
        set: value => {
            setter.call(document, value);
            callback(document.cookie);
        }
    });
}


