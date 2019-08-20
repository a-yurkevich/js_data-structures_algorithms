// Сортировка вставками
function insertionSort(a) {
  let n = a.length;
  for (let i = 0; i < n; i++) { // Выполняется для каждого элемента массива.
    // Определяется значение текущего элемента, а также индекс предыдущего элемента.
    let v = a[i], j = i - 1;
    // Пока индекс предыдущего элемента >= 0 и его значение больше значения текущего элемента.
    while (j >= 0 && a[j] > v) {
      // Значением следующего за текущим элемента массива становится значение предыдущего элемента.
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = v; // Значением следующего за текущим элемента массива становится значение текущего элемента
  }
  return a;
}

console.log(insertionSort([1, 5, 9, 0, 2, 1]));
