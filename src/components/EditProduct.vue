<template>
  <div v-if="product">
    <h2>Редактировать продукт</h2>
    <input v-model="name" placeholder="Название продукта" />
    <input v-model.number="amount" type="number" placeholder="Количество" />
    <button @click="updateProduct">Сохранить</button>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useProductStore } from '@/stores/productStore';

export default {
  props: ['product'],
  setup(props) {
    const name = ref(props.product.product_name);
    const amount = ref(props.product.product_amount);
    const store = useProductStore();

    const updateProduct = () => {
      store.editProduct(props.product.id, { product_name: name.value, product_amount: amount.value });
    };

    watch(() => props.product, (newProduct) => {
      name.value = newProduct.product_name;
      amount.value = newProduct.product_amount;
    });

    return { name, amount, updateProduct };
  },
};
</script>


<style>

</style>