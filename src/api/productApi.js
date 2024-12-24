import axios from 'axios';

const BASE_URL = 'http://dev.mindwave.kz/api/sandbox/crud';

// Получение данных
export const fetchProducts = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
      } catch (error) {
        console.error('Error fetching products:', error);  
        return [];  
      }
};

// Создание записи
export const createProduct = async (product) => {
  try {
    const response = await axios.post(BASE_URL, product);
    
    return response; // Возвращаем объект нового продукта
  } catch (error) {
    console.error('Error creating product:', error);
    throw new Error('Ошибка при создании продукта'); // Пробрасываем ошибку для обработки
  }
};

// Обновление записи
export const updateProduct = async (id, updatedProduct) => {
  const response = await axios.put(`${BASE_URL}/${id}`, updatedProduct);
  return response.data;
};

// Удаление записи
export const deleteProduct = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};
