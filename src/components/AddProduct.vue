<template>
  <div>
    <h2>Добавить продукт</h2>
    <input v-model="name" placeholder="Название продукта" />
    <input v-model.number="amount" type="number" placeholder="Количество" />
    <button @click="addNewProduct">Добавить</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useProductStore } from '@/stores/productStore';

export default {
  setup() {
    const name = ref('');
    const amount = ref(1);
    const store = useProductStore();

    // Метод для добавления нового продукта
    const addNewProduct = async () => {
      const product = {
        product_name: name.value,
        product_amount: amount.value,
      };

      // Отправка данных в store
      await store.addProduct(product);  // Вызываем метод addProduct из store
      console.log({ product_name: name.value, product_amount: amount.value });

      // Очистка полей после добавления
      name.value = '';
      amount.value = 1;
    };

    return { name, amount, addNewProduct };
  },
};
</script>

<style>
/* Можно добавить стили для формы */
</style>
