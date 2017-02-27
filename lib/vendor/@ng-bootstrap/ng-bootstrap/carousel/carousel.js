import { Component, Directive, TemplateRef, ContentChildren, Input } from '@angular/core';
import { NgbCarouselConfig } from './carousel-config';
let /** @type {?} */ nextId = 0;
/**
 * Represents an individual slide to be used within a carousel.
 */
export class NgbSlide {
    /**
     * @param {?} tplRef
     */
    constructor(tplRef) {
        this.tplRef = tplRef;
        /**
         * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
         * Will be auto-generated if not provided.
         */
        this.id = `ngb-slide-${nextId++}`;
    }
}
NgbSlide.decorators = [
    { type: Directive, args: [{ selector: 'template[ngbSlide]' },] },
];
/** @nocollapse */
NgbSlide.ctorParameters = () => [
    { type: TemplateRef, },
];
NgbSlide.propDecorators = {
    'id': [{ type: Input },],
};
function NgbSlide_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbSlide.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbSlide.ctorParameters;
    /** @type {?} */
    NgbSlide.propDecorators;
    /**
     * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
     * Will be auto-generated if not provided.
     * @type {?}
     */
    NgbSlide.prototype.id;
    /** @type {?} */
    NgbSlide.prototype.tplRef;
}
/**
 * Directive to easily create carousels based on Bootstrap's markup.
 */
export class NgbCarousel {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.interval = config.interval;
        this.wrap = config.wrap;
        this.keyboard = config.keyboard;
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        let /** @type {?} */ activeSlide = this._getSlideById(this.activeId);
        this.activeId = activeSlide ? activeSlide.id : (this.slides.length ? this.slides.first.id : null);
    }
    /**
     * @return {?}
     */
    ngOnInit() { this._startTimer(); }
    /**
     * @return {?}
     */
    ngOnDestroy() { clearInterval(this._slideChangeInterval); }
    /**
     * Navigate to a slide with the specified identifier.
     * @param {?} slideId
     * @return {?}
     */
    select(slideId) {
        this.cycleToSelected(slideId);
        this._restartTimer();
    }
    /**
     * Navigate to the next slide.
     * @return {?}
     */
    prev() {
        this.cycleToPrev();
        this._restartTimer();
    }
    /**
     * Navigate to the next slide.
     * @return {?}
     */
    next() {
        this.cycleToNext();
        this._restartTimer();
    }
    /**
     * Stops the carousel from cycling through items.
     * @return {?}
     */
    pause() { this._stopTimer(); }
    /**
     * Restarts cycling through the carousel slides from left to right.
     * @return {?}
     */
    cycle() { this._startTimer(); }
    /**
     * @return {?}
     */
    cycleToNext() { this.cycleToSelected(this._getNextSlide(this.activeId)); }
    /**
     * @return {?}
     */
    cycleToPrev() { this.cycleToSelected(this._getPrevSlide(this.activeId)); }
    /**
     * @param {?} slideIdx
     * @return {?}
     */
    cycleToSelected(slideIdx) {
        let /** @type {?} */ selectedSlide = this._getSlideById(slideIdx);
        if (selectedSlide) {
            this.activeId = selectedSlide.id;
        }
    }
    /**
     * @return {?}
     */
    keyPrev() {
        if (this.keyboard) {
            this.prev();
        }
    }
    /**
     * @return {?}
     */
    keyNext() {
        if (this.keyboard) {
            this.next();
        }
    }
    /**
     * @return {?}
     */
    _restartTimer() {
        this._stopTimer();
        this._startTimer();
    }
    /**
     * @return {?}
     */
    _startTimer() {
        if (this.interval > 0) {
            this._slideChangeInterval = setInterval(() => { this.cycleToNext(); }, this.interval);
        }
    }
    /**
     * @return {?}
     */
    _stopTimer() { clearInterval(this._slideChangeInterval); }
    /**
     * @param {?} slideId
     * @return {?}
     */
    _getSlideById(slideId) {
        let /** @type {?} */ slideWithId = this.slides.filter(slide => slide.id === slideId);
        return slideWithId.length ? slideWithId[0] : null;
    }
    /**
     * @param {?} slideId
     * @return {?}
     */
    _getSlideIdxById(slideId) {
        return this.slides.toArray().indexOf(this._getSlideById(slideId));
    }
    /**
     * @param {?} currentSlideId
     * @return {?}
     */
    _getNextSlide(currentSlideId) {
        const /** @type {?} */ slideArr = this.slides.toArray();
        const /** @type {?} */ currentSlideIdx = this._getSlideIdxById(currentSlideId);
        const /** @type {?} */ isLastSlide = currentSlideIdx === slideArr.length - 1;
        return isLastSlide ? (this.wrap ? slideArr[0].id : slideArr[slideArr.length - 1].id) :
            slideArr[currentSlideIdx + 1].id;
    }
    /**
     * @param {?} currentSlideId
     * @return {?}
     */
    _getPrevSlide(currentSlideId) {
        const /** @type {?} */ slideArr = this.slides.toArray();
        const /** @type {?} */ currentSlideIdx = this._getSlideIdxById(currentSlideId);
        const /** @type {?} */ isFirstSlide = currentSlideIdx === 0;
        return isFirstSlide ? (this.wrap ? slideArr[slideArr.length - 1].id : slideArr[0].id) :
            slideArr[currentSlideIdx - 1].id;
    }
}
NgbCarousel.decorators = [
    { type: Component, args: [{
                selector: 'ngb-carousel',
                exportAs: 'ngbCarousel',
                host: {
                    'class': 'carousel slide',
                    '[style.display]': '"block"',
                    'tabIndex': '0',
                    '(mouseenter)': 'pause()',
                    '(mouseleave)': 'cycle()',
                    '(keydown.arrowLeft)': 'keyPrev()',
                    '(keydown.arrowRight)': 'keyNext()'
                },
                template: `
    <ol class="carousel-indicators">
      <li *ngFor="let slide of slides" [id]="slide.id" [class.active]="slide.id === activeId" (click)="cycleToSelected(slide.id)"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div *ngFor="let slide of slides" class="carousel-item" [class.active]="slide.id === activeId">
        <template [ngTemplateOutlet]="slide.tplRef"></template>
      </div>
    </div>
    <a class="left carousel-control-prev" role="button" (click)="cycleToPrev()">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control-next" role="button" (click)="cycleToNext()">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
    `
            },] },
];
/** @nocollapse */
NgbCarousel.ctorParameters = () => [
    { type: NgbCarouselConfig, },
];
NgbCarousel.propDecorators = {
    'slides': [{ type: ContentChildren, args: [NgbSlide,] },],
    'interval': [{ type: Input },],
    'wrap': [{ type: Input },],
    'keyboard': [{ type: Input },],
    'activeId': [{ type: Input },],
};
function NgbCarousel_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbCarousel.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgbCarousel.ctorParameters;
    /** @type {?} */
    NgbCarousel.propDecorators;
    /** @type {?} */
    NgbCarousel.prototype.slides;
    /** @type {?} */
    NgbCarousel.prototype._slideChangeInterval;
    /**
     * Amount of time in milliseconds before next slide is shown.
     * @type {?}
     */
    NgbCarousel.prototype.interval;
    /**
     * Whether can wrap from the last to the first slide.
     * @type {?}
     */
    NgbCarousel.prototype.wrap;
    /**
     * A flag for allowing navigation via keyboard
     * @type {?}
     */
    NgbCarousel.prototype.keyboard;
    /**
     * The active slide id.
     * @type {?}
     */
    NgbCarousel.prototype.activeId;
}
export const /** @type {?} */ NGB_CAROUSEL_DIRECTIVES = [NgbCarousel, NgbSlide];
//# sourceMappingURL=carousel.js.map