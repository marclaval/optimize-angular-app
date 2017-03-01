export class NgbDate {
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} day
     */
    constructor(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    static from(date) {
        return date ? new NgbDate(date.year, date.month, date.day ? date.day : 1) : null;
    }
    /**
     * @param {?} other
     * @return {?}
     */
    equals(other) {
        return other && this.year === other.year && this.month === other.month && this.day === other.day;
    }
    /**
     * @param {?} other
     * @return {?}
     */
    before(other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day < other.day;
            }
            else {
                return this.month < other.month;
            }
        }
        else {
            return this.year < other.year;
        }
    }
    /**
     * @param {?} other
     * @return {?}
     */
    after(other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day > other.day;
            }
            else {
                return this.month > other.month;
            }
        }
        else {
            return this.year > other.year;
        }
    }
    /**
     * @return {?}
     */
    toString() { return `${this.year}-${this.month}-${this.day}`; }
}
function NgbDate_tsickle_Closure_declarations() {
    /** @type {?} */
    NgbDate.prototype.year;
    /** @type {?} */
    NgbDate.prototype.month;
    /** @type {?} */
    NgbDate.prototype.day;
}
//# sourceMappingURL=ngb-date.js.map