<template>
    <div>
        <span>介绍</span>
        <textarea name="intro" id="" cols="30" rows="10"></textarea>
    </div>
</template>

<script>
export default {
    created() {
        console.log("userIntro created");
    },
    unmounted() {
        console.log("userIntro unmounted");
    }
}
</script>

<style></style>