<template>
    <div>
        <button @click="getAllFn">点击查看</button>
        <p>查询某一本书</p>
        <input type="text" v-model="bName">
        <button @click="searchFn">查询</button>
    </div>
</template>

<script>

import axios from "axios";

axios.defaults.baseURL = "http://123.57.109.30:3006"

export default {
    data() {
        return {
            bName: ''
        }
    },
    methods: {
        getAllFn() {
            axios({
                method: 'get',
                url: '/api/getbooks'
            }).then(function (response) {
                console.log(response.data);
            })
        },
        searchFn() {
            axios({
                method: 'get',
                url: 'http://123.57.109.30:3006/api/getbooks',
                params: {
                    bookname: this.bName
                }
            }).then(function (response) {
                console.log(response.data);
            })
        }
    }
}
</script>

<style></style>