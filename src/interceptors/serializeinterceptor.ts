import {
    UseInterceptors,
    NestInterceptor,
    ExecutionContext,
    CallHandler
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToClass } from "class-transformer";

interface ClassConstructor {
    new(...args: any[]): {}
}

/*
 * Custom User Interceptors
 */
export const Serialze = (dto: ClassConstructor) => UseInterceptors(new SerializeInterceptor(dto));


export class SerializeInterceptor implements NestInterceptor {

    constructor(private dto: any) { }

    intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
        // Run something before a request is handled
        // by the request handler
        return handler.handle().pipe(
            map((data: any) => {
                // Run something before a response is send out
                return plainToClass(this.dto, data, {
                    excludeExtraneousValues: true
                })
            })
        )
    }
}