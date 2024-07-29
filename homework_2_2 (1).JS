undefined + 1 = NaN // тому що undefined не можна арефметувати
'true' == true = false // 'true' = string, true = Boolean
false == 'false' = false // така ж ситуація як в прошлому прикладі
null == '' = false // null !== String
3 ** (9 / 3) = 27 // спочатку 9 / 3 потім 3 ** 3
!!'false' == !!'true' = true // обидва значення String тому true
0 || '0' && 1 =  // спочатку виконується логічне і(&&) так як воно false і(&&) шукає перший false випадок з кінця
1 < 2 < 3 = true // 1 меньше 2, 2 меньше 3
'foo'+ + +'bar' = fooNaN // конкатенація foo і спроба перетворити bar (+'bar') на number - перетворилось в NaN
3 ** 2 / 3 = 3 // 3 ** 2 = 9 / 3 = 3
1 < 2 > 3 = false // в відповідь записується останнє порівнювання 2 > 3 = false
(+null == false) < 1 = false // +null = 0 ; false = 0, рівняння == не можна порівняти з number тому false
false && true || true = true // тому що логічне і(&&) шукає перший false випадок з кінця і це true
false && (true || true) = false // тому що логічне або(||) не знайшла true випадок тому false
(+null == false) < 1 ** 5 = false // +null == false = true, true !< 1 ** 5