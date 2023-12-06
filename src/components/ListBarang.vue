<template>
    <div class="container mx-auto mt-5">
        <p class="text-2xl font-bold mb-3">Daftar Barang</p>
        <router-link :to="{path: '/add'}">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mb-5">Tambah Barang</button>
        </router-link>
        <table class="min-w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden">
          <thead class="bg-gray-200 text-gray-700">
            <tr>
              <th class="py-2 px-4 border-b">Nama</th>
              <th class="py-2 px-4 border-b">Berat</th>
              <th class="py-2 px-4 border-b">Asal</th>
              <th class="py-2 px-4 border-b">Tujuan</th>
              <th class="py-2 px-4 border-b">Jumlah</th>
              <th class="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="barang in barangs" :key="barang.id" class="hover:bg-gray-100 text-center">
              <td class="py-2 px-4 border-b">{{ barang.nama }}</td>
              <td class="py-2 px-4 border-b">{{ barang.berat }} Kg</td>
              <td class="py-2 px-4 border-b">{{ barang.asal }}</td>
              <td class="py-2 px-4 border-b">{{ barang.tujuan }}</td>
              <td class="py-2 px-4 border-b">{{ barang.jumlah }}</td>
              <td class="py-2 px-4 border-b">
                <router-link :to="{ path: `/edit/${barang.id}` }">
                    <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold text-sm py-2 px-4 rounded mr-2">Update</button>
                </router-link>
                <button @click="deleteBarang(barang.id)" class="bg-red-500 hover:bg-red-700 text-white font-semibold text-sm py-2 px-4 rounded">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            barangs: [],
        };
    },
    mounted() {
        this.fetchBarangs();
    },
    methods: {
        async fetchBarangs() {
            try {
                const response = await axios.get('http://localhost:4000/barang');
                this.barangs = response.data.data;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        async deleteBarang(id){
            try {
                await axios.delete(`http://localhost:4000/barang/${id}`);
                this.fetchBarangs();
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    },
};
</script>

<style scoped>

</style>