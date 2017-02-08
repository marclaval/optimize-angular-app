/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
import * as import0 from './subscribe';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import9 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import10 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
export declare class Wrapper_Subscribe {
    _eventHandler: Function;
    context: import0.Subscribe;
    _changed: boolean;
    constructor();
    ngOnDetach(view: import1.AppView<any>, componentView: import1.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    ngDoCheck(view: import1.AppView<any>, el: any): boolean;
    checkHost(view: import1.AppView<any>, componentView: import1.AppView<any>, el: any): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import1.AppView<any>, _eventHandler: any): void;
}
export declare const SubscribeNgFactory: import7.ComponentFactory<import0.Subscribe>;
export declare class View_Subscribe_0 extends import1.AppView<import0.Subscribe> {
    _text_0: any;
    _el_1: any;
    _text_2: any;
    _el_3: any;
    _text_4: any;
    _text_5: any;
    _el_6: any;
    _text_7: any;
    _el_8: any;
    _DefaultValueAccessor_8_3: import8.Wrapper_DefaultValueAccessor;
    _NG_VALUE_ACCESSOR_8_4: any[];
    _NgModel_8_5: import9.Wrapper_NgModel;
    _NgControl_8_6: any;
    _NgControlStatus_8_7: import10.Wrapper_NgControlStatus;
    _text_9: any;
    _el_10: any;
    _text_11: any;
    _text_12: any;
    _text_13: any;
    _expr_19: any;
    constructor(viewUtils: import3.ViewUtils, parentView: import1.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import7.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(): void;
    destroyInternal(): void;
    handleEvent_8(eventName: string, $event: any): boolean;
}
