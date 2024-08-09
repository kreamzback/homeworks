undefined + 1 = NaN // тому що undefined не можна арефметувати
'true' == true = false // тут джаваскрипт намагається перетворити операнди на числа, 'true' == NaN, true == 1
false == 'false' = false // тут джаваскрипт намагається перетворити операнди на числа, 'false' == NaN, false == 0
null == '' = false // null дорівнює лише undefined при нестрогому порівнянні
3 ** (9 / 3) = 27 // спочатку 9 / 3 потім 3 ** 3
!!'false' == !!'true' = true // обидва значення String тому true
0 || '0' && 1 =  // логічне і(&&) виводить перше false що знаходить, якщо не знаходить - виводить останній операнд
1 < 2 < 3 = true // 1 меньше 2, 2 меньше 3
'foo'+ + +'bar' = fooNaN // конкатенація foo і спроба перетворити bar (+'bar') на number - перетворилось в NaN
3 ** 2 / 3 = 3 // 3 ** 2 = 9 / 3 = 3
1 < 2 > 3 = false // спочатку 1 < 2 відповідь = true, потім true > 3 при зведенні до числа true = 1, 1 > 3 = false
(+null == false) < 1 = false // спочатку +null == false = true, потім true < 1 = false
false && true || true = true // результат false && true = false, тому що && шукає перший false випадок і його повертає, потім false || true, || повертає true якщо його находить
false && (true || true) = false // спочатку дія в дужках, відповідь true, потім false && true, && виводить перший false що знаходить, тому відповідь буде false
(+null == false) < 1 ** 5 = false // +null == false буде true, true < 1 ** 5 = false