/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
System.register(['./qxmlm', '@angular/core/src/linker/view', '@angular/core/src/linker/view_utils', '@angular/core/src/metadata/view', '@angular/core/src/linker/view_type', '@angular/core/src/change_detection/constants', '@angular/core/src/linker/component_factory'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var import0, import1, import3, import4, import5, import6, import7;
    var Wrapper_Qxmlm, renderType_Qxmlm_Host, View_Qxmlm_Host_0, QxmlmNgFactory, styles_Qxmlm, renderType_Qxmlm, View_Qxmlm_0;
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
            Wrapper_Qxmlm = (function () {
                function Wrapper_Qxmlm() {
                    this._changed = false;
                    this.context = new import0.Qxmlm();
                }
                Wrapper_Qxmlm.prototype.ngOnDetach = function (view, componentView, el) {
                };
                Wrapper_Qxmlm.prototype.ngOnDestroy = function () {
                };
                Wrapper_Qxmlm.prototype.ngDoCheck = function (view, el) {
                    var changed = this._changed;
                    this._changed = false;
                    return changed;
                };
                Wrapper_Qxmlm.prototype.checkHost = function (view, componentView, el) {
                };
                Wrapper_Qxmlm.prototype.handleEvent = function (eventName, $event) {
                    var result = true;
                    return result;
                };
                Wrapper_Qxmlm.prototype.subscribe = function (view, _eventHandler) {
                    this._eventHandler = _eventHandler;
                };
                return Wrapper_Qxmlm;
            }());
            exports_1("Wrapper_Qxmlm", Wrapper_Qxmlm);
            renderType_Qxmlm_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
            View_Qxmlm_Host_0 = (function (_super) {
                __extends(View_Qxmlm_Host_0, _super);
                function View_Qxmlm_Host_0(viewUtils, parentView, parentIndex, parentElement) {
                    _super.call(this, View_Qxmlm_Host_0, renderType_Qxmlm_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
                }
                View_Qxmlm_Host_0.prototype.createInternal = function (rootSelector) {
                    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'd-qxmlm', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
                    this.compView_0 = new View_Qxmlm_0(this.viewUtils, this, 0, this._el_0);
                    this._Qxmlm_0_3 = new Wrapper_Qxmlm();
                    this.compView_0.create(this._Qxmlm_0_3.context);
                    this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
                    return new import7.ComponentRef_(0, this, this._el_0, this._Qxmlm_0_3.context);
                };
                View_Qxmlm_Host_0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
                    if (((token === import0.Qxmlm) && (0 === requestNodeIndex))) {
                        return this._Qxmlm_0_3.context;
                    }
                    return notFoundResult;
                };
                View_Qxmlm_Host_0.prototype.detectChangesInternal = function () {
                    this._Qxmlm_0_3.ngDoCheck(this, this._el_0);
                    this.compView_0.internalDetectChanges(this.throwOnChange);
                };
                View_Qxmlm_Host_0.prototype.destroyInternal = function () {
                    this.compView_0.destroy();
                };
                View_Qxmlm_Host_0.prototype.visitRootNodesInternal = function (cb, ctx) {
                    cb(this._el_0, ctx);
                };
                return View_Qxmlm_Host_0;
            }(import1.AppView));
            exports_1("QxmlmNgFactory", QxmlmNgFactory = new import7.ComponentFactory('d-qxmlm', View_Qxmlm_Host_0, import0.Qxmlm));
            styles_Qxmlm = [];
            renderType_Qxmlm = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_Qxmlm, {});
            View_Qxmlm_0 = (function (_super) {
                __extends(View_Qxmlm_0, _super);
                function View_Qxmlm_0(viewUtils, parentView, parentIndex, parentElement) {
                    _super.call(this, View_Qxmlm_0, renderType_Qxmlm, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
                    this._expr_6 = undefined;
                    this._expr_7 = undefined;
                }
                View_Qxmlm_0.prototype.createInternal = function (rootSelector) {
                    var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
                    this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
                    this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'span', import3.EMPTY_INLINE_ARRAY, null);
                    this._text_2 = this.renderer.createText(this._el_1, 'This is a dummy component for Qxmlm', null);
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
                View_Qxmlm_0.prototype.detectChangesInternal = function () {
                    var currVal_6 = this.context.msg;
                    import3.checkRenderAttribute(this, this._el_1, 'aria-label', this._expr_6, (this._expr_6 = currVal_6), false, null);
                    var currVal_7 = false;
                    import3.checkRenderProperty(this, this._el_1, 'hidden', this._expr_7, (this._expr_7 = currVal_7), false, null);
                };
                View_Qxmlm_0.prototype.handleEvent_4 = function (eventName, $event) {
                    this.markPathToRootAsCheckOnce();
                    var result = true;
                    if ((eventName == 'click')) {
                        var pd_sub_0 = (this.context.doNothing($event) !== false);
                        result = (pd_sub_0 && result);
                    }
                    return result;
                };
                return View_Qxmlm_0;
            }(import1.AppView));
            exports_1("View_Qxmlm_0", View_Qxmlm_0);
        }
    }
});
//# sourceMappingURL=qxmlm.ngfactory.js.map