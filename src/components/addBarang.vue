<template>
    <div class="container mx-auto mt-5">
        <p class="text-2xl font-bold mb-6">Add Barang</p>
        <form @submit.prevent="addBarang" class="max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label for="nama" class="block text-gray-700 text-sm font-medium mb-2">Nama Barang:</label>
            <input v-model="barang.nama" type="text" id="nama" name="nama" class="form-input w-full shadow appearance-none border rounded-lg py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          </div>
          <div class="mb-4">
            <label for="berat" class="block text-sm font-medium mb-2">Berat Barang:</label>
            <div class="relative">
                <input required v-model="barang.berat" type="number" id="berat" name="berat" class="pe-10 form-input w-full shadow appearance-none border rounded-lg py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <div class="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4">
                    <span class="text-gray-500">Kg</span>
                </div>
            </div>
          </div>
          <div class="mb-4">
            <label for="asal" class="block text-gray-700 text-sm font-medium mb-2">Asal Barang:</label>
            <input v-model="barang.asal" type="text" id="asal" name="asal" class="form-input w-full shadow appearance-none border rounded-lg py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          </div>
          <div class="mb-4">
            <label for="tujuan" class="block text-gray-700 text-sm font-medium mb-2">Tujuan Barang:</label>
            <input v-model="barang.tujuan" type="text" id="tujuan" name="tujuan" class="form-input w-full shadow appearance-none border rounded-lg py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          </div>
          <div class="mb-4">
            <label for="jumlah" class="block text-gray-700 text-sm font-medium mb-2">Jumlah Barang:</label>
            <input v-model="barang.jumlah" type="number" id="jumlah" name="jumlah" class="form-input w-full shadow appearance-none border rounded-lg py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          </div>
          <div class="flex items-center justify-start mt-5">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Tambah</button>
          </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            barang: {
                nama: '',
                berat: 1,
                asal: '',
                tujuan: '',
                jumlah: 1,
            },
        };
    },
    methods: {
        async addBarang() {
            try {
                const response = await axios.post('http://localhost:4000/barang',this.barang);
                console.log('Data berhasil ditambahkan:', response.data);
                this.$router.push('/');
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>

<style scoped>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }
</style>