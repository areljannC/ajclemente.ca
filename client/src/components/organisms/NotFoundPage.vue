<script setup lang="ts">
import { ref, onMounted } from 'vue';

const seconds = ref(5);

onMounted(() => {
	const interval = setInterval(() => {
		seconds.value--;
		if (seconds.value <= 0) {
			clearInterval(interval);
			window.location.replace('/');
		}
	}, 1000);
});
</script>

<template>
	<main class="w-screen h-screen flex flex-col px-4">
		<section class="m-auto flex flex-col justify-center items-center text-center">
			<h1 class="text-4xl font-bold">404</h1>
			<p class="text-xl">Sorry, the page you are looking for is probably in another castle.</p>
			<p class="text-lg">Redirecting you to the <a href="/">home page</a> in <span>{{ seconds }}</span> seconds...
			</p>
		</section>
	</main>
</template>