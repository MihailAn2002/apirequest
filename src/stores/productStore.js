import { defineStore } from 'pinia';
import { fetchProducts, createProduct, updateProduct, deleteProduct } from '@/api/productApi';


export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
    loading: false,
    error: null,
  }),

  actions: {
    async loadProducts() {
      this.loading = true; // Устанавливаем статус загрузки
      try {
        const response = await fetchProducts();
        this.products = response.content.rows; // Заполняем список продуктов
        console.log(this.products)
      } catch (error) {
        this.error = 'Ошибка при загрузке данных';
        console.error(error);
      } finally {
        this.loading = false; // Завершаем загрузку
      }
    },

    async addProduct(product) {
      try {
        const newProduct = await createProduct(product); 
        this.products.push(newProduct); // Добавляем продукт в локальный список
        this.loadProducts();
      } catch {
        this.error = 'Ошибка при добавлении продукта';
      }
    },

    async editProduct(id, updatedProduct) {
      try {
        await updateProduct(id, updatedProduct);
        const index = this.products.findIndex((p) => p.id === id);
        if (index !== -1) {
          this.products[index] = { ...this.products[index], ...updatedProduct };
        }
      } catch {
        this.error = 'Ошибка при обновлении продукта';
      }
    },

    async removeProduct(id) {
      try {
        await deleteProduct(id);
        this.products = this.products.filter((p) => p.id !== id); // Удаляем продукт
      } catch {
        this.error = 'Ошибка при удалении продукта';
      } 
    },
  },
});
