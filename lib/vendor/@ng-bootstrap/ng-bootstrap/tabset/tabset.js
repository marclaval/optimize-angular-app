import { Component, Input, ContentChildren, Directive, TemplateRef, ContentChild, Output, EventEmitter } from '@angular/core';
import { NgbTabsetConfig } from './tabset-config';
let /** @type {?} */ nextId = 0;
/**
 * This directive should be used to wrap tab titles that need to contain HTML markup or other directives.
 */
export class NgbTabTitle {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgbTabTitle.decorators = [
    { type: Directive, args: [{ selector: 'template[ngbTabTitle]' },] },
];
/** @nocollapse */
NgbTabTitle.ctorParameters = () => [
    { type: TemplateRef, },
];
function NgbTabTitle_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbTabTitle.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbTabTitle.ctorParameters;
    /** @type {?} */
    NgbTabTitle.prototype.templateRef;
}
/**
 * This directive must be used to wrap content to be displayed in a tab.
 */
export class NgbTabContent {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgbTabContent.decorators = [
    { type: Directive, args: [{ selector: 'template[ngbTabContent]' },] },
];
/** @nocollapse */
NgbTabContent.ctorParameters = () => [
    { type: TemplateRef, },
];
function NgbTabContent_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbTabContent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbTabContent.ctorParameters;
    /** @type {?} */
    NgbTabContent.prototype.templateRef;
}
/**
 * A directive representing an individual tab.
 */
export class NgbTab {
    constructor() {
        /**
         * Unique tab identifier. Must be unique for the entire document for proper accessibility support.
         */
        this.id = `ngb-tab-${nextId++}`;
        /**
         * Allows toggling disabled state of a given state. Disabled tabs can't be selected.
         */
        this.disabled = false;
    }
}
NgbTab.decorators = [
    { type: Directive, args: [{ selector: 'ngb-tab' },] },
];
/** @nocollapse */
NgbTab.ctorParameters = () => [];
NgbTab.propDecorators = {
    'id': [{ type: Input },],
    'title': [{ type: Input },],
    'disabled': [{ type: Input },],
    'contentTpl': [{ type: ContentChild, args: [NgbTabContent,] },],
    'titleTpl': [{ type: ContentChild, args: [NgbTabTitle,] },],
};
function NgbTab_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbTab.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbTab.ctorParameters;
    /** @type {?} */
    NgbTab.propDecorators;
    /**
     * Unique tab identifier. Must be unique for the entire document for proper accessibility support.
     * @type {?}
     */
    NgbTab.prototype.id;
    /**
     * Simple (string only) title. Use the "NgbTabTitle" directive for more complex use-cases.
     * @type {?}
     */
    NgbTab.prototype.title;
    /**
     * Allows toggling disabled state of a given state. Disabled tabs can't be selected.
     * @type {?}
     */
    NgbTab.prototype.disabled;
    /** @type {?} */
    NgbTab.prototype.contentTpl;
    /** @type {?} */
    NgbTab.prototype.titleTpl;
}
/**
 * A component that makes it easy to create tabbed interface.
 */
export class NgbTabset {
    /**
     * @param {?} config
     */
    constructor(config) {
        /**
         * A tab change event fired right before the tab selection happens. See NgbTabChangeEvent for payload details
         */
        this.tabChange = new EventEmitter();
        this.type = config.type;
        this.justify = config.justify;
    }
    /**
     * Selects the tab with the given id and shows its associated pane.
     * Any other tab that was previously selected becomes unselected and its associated pane is hidden.
     * @param {?} tabId
     * @return {?}
     */
    select(tabId) {
        let /** @type {?} */ selectedTab = this._getTabById(tabId);
        if (selectedTab && !selectedTab.disabled && this.activeId !== selectedTab.id) {
            let /** @type {?} */ defaultPrevented = false;
            this.tabChange.emit({ activeId: this.activeId, nextId: selectedTab.id, preventDefault: () => { defaultPrevented = true; } });
            if (!defaultPrevented) {
                this.activeId = selectedTab.id;
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        // auto-correct activeId that might have been set incorrectly as input
        let /** @type {?} */ activeTab = this._getTabById(this.activeId);
        this.activeId = activeTab ? activeTab.id : (this.tabs.length ? this.tabs.first.id : null);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    _getTabById(id) {
        let /** @type {?} */ tabsWithId = this.tabs.filter(tab => tab.id === id);
        return tabsWithId.length ? tabsWithId[0] : null;
    }
}
NgbTabset.decorators = [
    { type: Component, args: [{
                selector: 'ngb-tabset',
                exportAs: 'ngbTabset',
                template: `
    <ul [class]="'nav nav-' + type + ' justify-content-' + justify" role="tablist">
      <li class="nav-item" *ngFor="let tab of tabs">
        <a [id]="tab.id" class="nav-link" [class.active]="tab.id === activeId" [class.disabled]="tab.disabled"
          href (click)="!!select(tab.id)" role="tab" [attr.aria-controls]="tab.id + '-panel'" [attr.aria-expanded]="tab.id === activeId">
          {{tab.title}}<template [ngTemplateOutlet]="tab.titleTpl?.templateRef"></template>
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <template ngFor let-tab [ngForOf]="tabs">
        <div class="tab-pane active" *ngIf="tab.id === activeId" role="tabpanel" [attr.aria-labelledby]="tab.id" id="{{tab.id}}-panel">
          <template [ngTemplateOutlet]="tab.contentTpl.templateRef"></template>
        </div>
      </template>
    </div>
  `
            },] },
];
/** @nocollapse */
NgbTabset.ctorParameters = () => [
    { type: NgbTabsetConfig, },
];
NgbTabset.propDecorators = {
    'tabs': [{ type: ContentChildren, args: [NgbTab,] },],
    'activeId': [{ type: Input },],
    'justify': [{ type: Input },],
    'type': [{ type: Input },],
    'tabChange': [{ type: Output },],
};
function NgbTabset_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbTabset.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbTabset.ctorParameters;
    /** @type {?} */
    NgbTabset.propDecorators;
    /** @type {?} */
    NgbTabset.prototype.tabs;
    /**
     * An identifier of an initially selected (active) tab. Use the "select" method to switch a tab programmatically.
     * @type {?}
     */
    NgbTabset.prototype.activeId;
    /**
     * The horizontal alignment of the nav with flexbox utilities. Can be one of 'start', 'center' or 'end'
     * @type {?}
     */
    NgbTabset.prototype.justify;
    /**
     * Type of navigation to be used for tabs. Can be one of 'tabs' or 'pills'.
     * @type {?}
     */
    NgbTabset.prototype.type;
    /**
     * A tab change event fired right before the tab selection happens. See NgbTabChangeEvent for payload details
     * @type {?}
     */
    NgbTabset.prototype.tabChange;
}
//# sourceMappingURL=tabset.js.map