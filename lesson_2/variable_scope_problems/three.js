// Please predict the output of the following programs, and explain why they output what they do.

let basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket);

  let shop2 = function() {
    basket = 'computer';
  };

  const shop3 = () => {
    let basket = 'play station';
    console.log(basket);
  };

  shop1();
  shop2();
  shop3();

  console.log(basket);
}

goShopping();

// empty
// play station
// computer

// When `goShopping` is invoked on line 28, the first log occurs on line 10.
// At this point, `basket` still has it's original value `empty` which is logged.
// Then the local functions `shop1` and `shop2` are invoked changing basket to 'tv' and then 'computer'
// When `shop3` is invoked on line 23, a new variable `basket` is declared scoped to the `shop3` function.
// `shop3` logs the value of `basket`: 'playstation'
// In the last line of `goShopping`, the value of the global `basket` variable is logged which is now 'computer'