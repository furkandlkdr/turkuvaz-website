<template>
    <div>
        <h1>Contact Us</h1>
        <form>
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name" required>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div>
                <label for="phone">Phone:</label>
                <input type="tel" id="phone" v-model="phone" required>
            </div>
            <div>
                <label for="message">Message:</label>
                <textarea id="message" v-model="message" required></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            message: ''
        };
    }
};
</script>

<style scoped>
h1 {
    text-align: center;
}
form {
    max-width: 400px;
    margin: 0 auto;
}
label {
    display: block;
    margin-bottom: 5px;
}
input,
textarea {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
}
button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
}
</style>