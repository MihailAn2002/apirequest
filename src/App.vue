<template>
  <div>
    <AddProduct />
    <EditProduct v-if="selectedProduct" :product="selectedProduct" />
    <ProductList @edit="selectProduct" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useProductStore } from '@/stores/productStore';

import AddProduct from './components/AddProduct.vue'
import EditProduct from './components/EditProduct.vue'
import ProductList from './components/ProductList.vue'

export default {
  name: 'App', 
  components: {
    AddProduct,  
    EditProduct, 
    ProductList,
  },
  setup() {
    const store = useProductStore();
    const selectedProduct = ref(null);

    // Загружаем данные при монтировании компонента
    onMounted(() => {
      store.loadProducts();
    });

    // Функция для выбора продукта для редактирования
    const selectProduct = (product) => {
      selectedProduct.value = product;
    };

    return { selectedProduct, selectProduct, loading: store.loading, error: store.error };

  },
}
</script>

<style>
/* Стили */
</style>
