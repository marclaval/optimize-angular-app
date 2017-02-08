/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
System.register(['./list', '@angular/core/src/linker/view', '@angular/core/src/linker/view_utils', '@angular/core/src/metadata/view', '@angular/core/src/linker/view_type', '@angular/core/src/change_detection/constants', '@angular/core/src/linker/component_factory', '@ng-bootstrap/ng-bootstrap/pagination/pagination', '../../node_modules/@ng-bootstrap/ng-bootstrap/pagination/pagination.ngfactory', '@ng-bootstrap/ng-bootstrap/pagination/pagination-config'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var import0, import1, import3, import4, import5, import6, import7, import8, import9, import10;
    var Wrapper_List, renderType_List_Host, View_List_Host_0, ListNgFactory, styles_List, renderType_List, View_List_0;
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
            },
            function (import8_1) {
                import8 = import8_1;
            },
            function (import9_1) {
                import9 = import9_1;
            },
            function (import10_1) {
                import10 = import10_1;
            }],
        execute: function() {
            Wrapper_List = (function () {
                function Wrapper_List() {
                    this._changed = false;
                    this.context = new import0.List();
                }
                Wrapper_List.prototype.ngOnDetach = function (view, componentView, el) {
                };
                Wrapper_List.prototype.ngOnDestroy = function () {
                };
                Wrapper_List.prototype.ngDoCheck = function (view, el) {
                    var changed = this._changed;
                    this._changed = false;
                    return changed;
                };
                Wrapper_List.prototype.checkHost = function (view, componentView, el) {
                };
                Wrapper_List.prototype.handleEvent = function (eventName, $event) {
                    var result = true;
                    return result;
                };
                Wrapper_List.prototype.subscribe = function (view, _eventHandler) {
                    this._eventHandler = _eventHandler;
                };
                return Wrapper_List;
            }());
            exports_1("Wrapper_List", Wrapper_List);
            renderType_List_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
            View_List_Host_0 = (function (_super) {
                __extends(View_List_Host_0, _super);
                function View_List_Host_0(viewUtils, parentView, parentIndex, parentElement) {
                    _super.call(this, View_List_Host_0, renderType_List_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
                }
                View_List_Host_0.prototype.createInternal = function (rootSelector) {
                    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'list', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
                    this.compView_0 = new View_List_0(this.viewUtils, this, 0, this._el_0);
                    this._List_0_3 = new Wrapper_List();
                    this.compView_0.create(this._List_0_3.context);
                    this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
                    return new import7.ComponentRef_(0, this, this._el_0, this._List_0_3.context);
                };
                View_List_Host_0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
                    if (((token === import0.List) && (0 === requestNodeIndex))) {
                        return this._List_0_3.context;
                    }
                    return notFoundResult;
                };
                View_List_Host_0.prototype.detectChangesInternal = function () {
                    this._List_0_3.ngDoCheck(this, this._el_0);
                    this.compView_0.internalDetectChanges(this.throwOnChange);
                };
                View_List_Host_0.prototype.destroyInternal = function () {
                    this.compView_0.destroy();
                };
                View_List_Host_0.prototype.visitRootNodesInternal = function (cb, ctx) {
                    cb(this._el_0, ctx);
                };
                return View_List_Host_0;
            }(import1.AppView));
            exports_1("ListNgFactory", ListNgFactory = new import7.ComponentFactory('list', View_List_Host_0, import0.List));
            styles_List = [];
            renderType_List = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_List, {});
            View_List_0 = (function (_super) {
                __extends(View_List_0, _super);
                function View_List_0(viewUtils, parentView, parentIndex, parentElement) {
                    _super.call(this, View_List_0, renderType_List, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
                    this._expr_14 = undefined;
                }
                View_List_0.prototype.createInternal = function (rootSelector) {
                    var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
                    this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
                    this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
                    this._text_2 = this.renderer.createText(this._el_1, '\n      ', null);
                    this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'h2', import3.EMPTY_INLINE_ARRAY, null);
                    this._text_4 = this.renderer.createText(this._el_3, 'Paginated list', null);
                    this._text_5 = this.renderer.createText(this._el_1, '\n      ', null);
                    this._el_6 = import3.createRenderElement(this.renderer, this._el_1, 'ngb-pagination', import3.EMPTY_INLINE_ARRAY, null);
                    this.compView_6 = new import9.View_NgbPagination_0(this.viewUtils, this, 6, this._el_6);
                    this._NgbPagination_6_3 = new import9.Wrapper_NgbPagination(this.parentView.injectorGet(import10.NgbPaginationConfig, this.parentIndex));
                    this.compView_6.create(this._NgbPagination_6_3.context);
                    this._text_7 = this.renderer.createText(this._el_1, '\n      ', null);
                    this._el_8 = import3.createRenderElement(this.renderer, this._el_1, 'pre', import3.EMPTY_INLINE_ARRAY, null);
                    this._text_9 = this.renderer.createText(this._el_8, '', null);
                    this._text_10 = this.renderer.createText(this._el_1, '\n    ', null);
                    this._text_11 = this.renderer.createText(parentRenderNode, '\n  ', null);
                    var disposable_0 = import3.subscribeToRenderElement(this, this._el_6, new import3.InlineArray2(2, 'pageChange', null), this.eventHandler(this.handleEvent_6));
                    this._NgbPagination_6_3.subscribe(this, this.eventHandler(this.handleEvent_6), true);
                    this.init(null, (this.renderer.directRenderer ? null : [
                        this._text_0,
                        this._el_1,
                        this._text_2,
                        this._el_3,
                        this._text_4,
                        this._text_5,
                        this._el_6,
                        this._text_7,
                        this._el_8,
                        this._text_9,
                        this._text_10,
                        this._text_11
                    ]), [disposable_0]);
                    return null;
                };
                View_List_0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
                    if (((token === import8.NgbPagination) && (6 === requestNodeIndex))) {
                        return this._NgbPagination_6_3.context;
                    }
                    return notFoundResult;
                };
                View_List_0.prototype.detectChangesInternal = function () {
                    var currVal_6_0_0 = 70;
                    this._NgbPagination_6_3.check_collectionSize(this, currVal_6_0_0, false);
                    var currVal_6_0_1 = this.context.page;
                    this._NgbPagination_6_3.check_page(this, currVal_6_0_1, false);
                    if (this._NgbPagination_6_3.ngDoCheck(this, this._el_6)) {
                        this.compView_6.markAsCheckOnce();
                    }
                    var currVal_14 = import3.inlineInterpolate(1, 'Current page: ', this.context.page, '');
                    import3.checkRenderText(this, this._text_9, this._expr_14, (this._expr_14 = currVal_14), false);
                    this.compView_6.internalDetectChanges(this.throwOnChange);
                };
                View_List_0.prototype.destroyInternal = function () {
                    this.compView_6.destroy();
                    this._NgbPagination_6_3.ngOnDestroy();
                };
                View_List_0.prototype.handleEvent_6 = function (eventName, $event) {
                    this.markPathToRootAsCheckOnce();
                    var result = true;
                    if ((eventName == 'pageChange')) {
                        var pd_sub_0 = ((this.context.page = $event) !== false);
                        result = (pd_sub_0 && result);
                    }
                    return result;
                };
                return View_List_0;
            }(import1.AppView));
            exports_1("View_List_0", View_List_0);
        }
    }
});
//# sourceMappingURL=list.ngfactory.js.map