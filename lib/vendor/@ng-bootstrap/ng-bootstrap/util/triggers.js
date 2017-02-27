export class Trigger {
    /**
     * @param {?} open
     * @param {?=} close
     */
    constructor(open, close) {
        this.open = open;
        this.close = close;
        if (!close) {
            this.close = open;
        }
    }
    /**
     * @return {?}
     */
    isManual() { return this.open === 'manual' || this.close === 'manual'; }
}
function Trigger_tsickle_Closure_declarations() {
    /** @type {?} */
    Trigger.prototype.open;
    /** @type {?} */
    Trigger.prototype.close;
}
const /** @type {?} */ DEFAULT_ALIASES = {
    hover: ['mouseenter', 'mouseleave']
};
/**
 * @param {?} triggers
 * @param {?=} aliases
 * @return {?}
 */
export function parseTriggers(triggers, aliases = DEFAULT_ALIASES) {
    const /** @type {?} */ trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    const /** @type {?} */ parsedTriggers = trimmedTriggers.split(/\s+/).map(trigger => trigger.split(':')).map((triggerPair) => {
        let /** @type {?} */ alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    });
    const /** @type {?} */ manualTriggers = parsedTriggers.filter(triggerPair => triggerPair.isManual());
    if (manualTriggers.length > 1) {
        throw 'Triggers parse error: only one manual trigger is allowed';
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw 'Triggers parse error: manual trigger can\'t be mixed with other triggers';
    }
    return parsedTriggers;
}
const /** @type {?} */ noopFn = () => { };
/**
 * @param {?} renderer
 * @param {?} nativeElement
 * @param {?} triggers
 * @param {?} openFn
 * @param {?} closeFn
 * @param {?} toggleFn
 * @return {?}
 */
export function listenToTriggers(renderer, nativeElement, triggers, openFn, closeFn, toggleFn) {
    const /** @type {?} */ parsedTriggers = parseTriggers(triggers);
    const /** @type {?} */ listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return noopFn;
    }
    parsedTriggers.forEach((trigger) => {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(nativeElement, trigger.open, toggleFn));
        }
        else {
            listeners.push(renderer.listen(nativeElement, trigger.open, openFn), renderer.listen(nativeElement, trigger.close, closeFn));
        }
    });
    return () => { listeners.forEach(unsubscribeFn => unsubscribeFn()); };
}
//# sourceMappingURL=triggers.js.map