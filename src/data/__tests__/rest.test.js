import {formatNumber} from '../rest';


test('formats number', ()=>{
    expect(formatNumber(999999)).toEqual('999,999');
    expect(formatNumber(0)).toEqual('0');
    expect(formatNumber()).toEqual();
})