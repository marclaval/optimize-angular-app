/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
System.register(['./kthcm', '@angular/core/src/linker/view', '@angular/core/src/linker/view_utils', '@angular/core/src/metadata/view', '@angular/core/src/linker/view_type', '@angular/core/src/change_detection/constants', '@angular/core/src/linker/component_factory'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var import0, import1, import3, import4, import5, import6, import7;
    var Wrapper_Kthcm, renderType_Kthcm_Host, View_Kthcm_Host_0, KthcmNgFactory, styles_Kthcm, renderType_Kthcm, View_Kthcm_0;
    return {
        setters:[
            function (import0_1) {
                import0 = import0_1;
            },
            function (import1_1) {
                import1 = import1_1;
            },
            function (import3_1) {
                import3 = import3_1;
            },
            function (import4_1) {
                import4 = import4_1;
            },
            function (import5_1) {
                import5 = import5_1;
            },
            function (import6_1) {
                import6 = import6_1;
            },
            function (import7_1) {
                import7 = import7_1;
            }],
        execute: function() {
            Wrapper_Kthcm = (function () {
                function Wrapper_Kthcm() {
                    this._changed = false;
                    this.context = new import0.Kthcm();
                }
                Wrapper_Kthcm.prototype.ngOnDetach = function (view, componentView, el) {
                };
                Wrapper_Kthcm.prototype.ngOnDestroy = function () {
                };
                Wrapper_Kthcm.prototype.ngDoCheck = function (view, el) {
                    var changed = this._changed;
                    this._changed = false;
                    return changed;
                };
                Wrapper_Kthcm.prototype.checkHost = function (view, componentView, el) {
                };
                Wrapper_Kthcm.prototype.handleEvent = function (eventName, $event) {
                    var result = true;
                    return result;
                };
                Wrapper_Kthcm.prototype.subscribe = function (view, _eventHandler) {
                    this._eventHandler = _eventHandler;
                };
                return Wrapper_Kthcm;
            }());
            exports_1("Wrapper_Kthcm", Wrapper_Kthcm);
            renderType_Kthcm_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
            View_Kthcm_Host_0 = (function (_super) {
                __extends(View_Kthcm_Host_0, _super);
                function View_Kthcm_Host_0(viewUtils, parentView, parentIndex, parentElement) {
                    _super.call(this, View_Kthcm_Host_0, renderType_Kthcm_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
                }
                View_Kthcm_Host_0.prototype.createInternal = function (rootSelector) {
                    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'd-kthcm', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
                    this.compView_0 = new View_Kthcm_0(this.viewUtils, this, 0, this._el_0);
                    this._Kthcm_0_3 = new Wrapper_Kthcm();
                    this.compView_0.create(this._Kthcm_0_3.context);
                    this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
                    return new import7.ComponentRef_(0, this, this._el_0, this._Kthcm_0_3.context);
                };
                View_Kthcm_Host_0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
                    if (((token === import0.Kthcm) && (0 === requestNodeIndex))) {
                        return this._Kthcm_0_3.context;
                    }
                    return notFoundResult;
                };
                View_Kthcm_Host_0.prototype.detectChangesInternal = function () {
                    this._Kthcm_0_3.ngDoCheck(this, this._el_0);
                    this.compView_0.internalDetectChanges(this.throwOnChange);
                };
                View_Kthcm_Host_0.prototype.destroyInternal = function () {
                    this.compView_0.destroy();
                };
                View_Kthcm_Host_0.prototype.visitRootNodesInternal = function (cb, ctx) {
                    cb(this._el_0, ctx);
                };
                return View_Kthcm_Host_0;
            }(import1.AppView));
            exports_1("KthcmNgFactory", KthcmNgFactory = new import7.ComponentFactory('d-kthcm', View_Kthcm_Host_0, import0.Kthcm));
            styles_Kthcm = [];
            renderType_Kthcm = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_Kthcm, {});
            View_Kthcm_0 = (function (_super) {
                __extends(View_Kthcm_0, _super);
                function View_Kthcm_0(viewUtils, parentView, parentIndex, parentElement) {
                    _super.call(this, View_Kthcm_0, renderType_Kthcm, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
                    this._expr_6 = undefined;
                    this._expr_7 = undefined;
                }
                View_Kthcm_0.prototype.createInternal = function (rootSelector) {
                    var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
                    this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
                    this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'span', import3.EMPTY_INLINE_ARRAY, null);
                    this._text_2 = this.renderer.createText(this._el_1, 'This is a dummy component for Kthcm', null);
                    this._text_3 = this.renderer.createText(parentRenderNode, '\n    ', null);
                    this._el_4 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
                    this._text_5 = this.renderer.createText(parentRenderNode, '\n    ', null);
                    var disposable_0 = import3.subscribeToRenderElement(this, this._el_4, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_4));
                    this.init(null, (this.renderer.directRenderer ? null : [
                        this._text_0,
                        this._el_1,
                        this._text_2,
                        this._text_3,
                        this._el_4,
                        this._text_5
                    ]), [disposable_0]);
                    return null;
                };
                View_Kthcm_0.prototype.detectChangesInternal = function () {
                    var currVal_6 = this.context.msg;
                    import3.checkRenderAttribute(this, this._el_1, 'aria-label', this._expr_6, (this._expr_6 = currVal_6), false, null);
                    var currVal_7 = false;
                    import3.checkRenderProperty(this, this._el_1, 'hidden', this._expr_7, (this._expr_7 = currVal_7), false, null);
                };
                View_Kthcm_0.prototype.handleEvent_4 = function (eventName, $event) {
                    this.markPathToRootAsCheckOnce();
                    var result = true;
                    if ((eventName == 'click')) {
                        var pd_sub_0 = (this.context.doNothing($event) !== false);
                        result = (pd_sub_0 && result);
                    }
                    return result;
                };
                return View_Kthcm_0;
            }(import1.AppView));
            exports_1("View_Kthcm_0", View_Kthcm_0);
        }
    }
});
//# sourceMappingURL=kthcm.ngfactory.js.map