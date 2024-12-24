<template>
  <div>
    <h2>Список продуктов</h2>
    <div v-if="loading">Загрузка...</div>
    <div v-if="error">{{ error }}</div>
    <ul v-if="!loading && !error">
      <li v-for="product in products" :key="product.id">
        {{ product.product_name }} : Количество ({{ product.product_amount }})
        <button @click="$emit('edit', product)">Редактировать</button>
        <button @click="removeProduct(product.id)">Удалить</button>
      </li>
    </ul>
  </div> 
</template>

<script>
import { computed, onMounted } from 'vue';
import { useProductStore } from '@/stores/productStore';

export default {
  emits: ['edit'], 
  setup() {
    const store = useProductStore();

    // Создаем реактивную ссылку на products через computed
    const products = computed(() => store.products);
    const loading = computed(() => store.loading);
    const error = computed(() => store.error);

    const removeProduct = (id) => {
      store.removeProduct(id);
    };

    // Загружаем данные при монтировании компонента
    onMounted(() => {
      store.loadProducts();
    });

    return {
      products,
      loading,
      error,
      removeProduct,
    };
  },
};

</script>

<style>
/* Стили */
</style>
