import {formatCurrancy} from '../../scripts/utils/money.js';



 describe(' test suite : formatCurrancy ', () => {

    it('convert cents to dollars', () => { //function
        expect (formatCurrancy(2095)).toEqual('20.95');
    });

    it('working with zero ', () => {
        expect (formatCurrancy(0)).toEqual('0.00');
    });

    it('round up to tghe nearest cent ', () => {
        expect (formatCurrancy(2000.5)).toEqual('20.01');
    });
   });