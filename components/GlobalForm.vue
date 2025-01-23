<script lang="ts" setup>

const name = ref('')
const email = ref('')
const message = ref('')

const handleSubmit = () => {
  if (!name.value || !email.value || !message.value) {
    alert('Please fill out all fields.')
    return
  }

  console.log({
    name: name.value,
    email: email.value,
    message: message.value,
  })

 
  name.value = ''
  email.value = ''
  message.value = ''
  alert('Thank you for contacting us!')
}
</script>

<template>
  <div class="max-w-[300px] md:max-w-[500px] mx-auto p-8 mb-4 bg-white shadow-md rounded-md">
    <h1 class="text-2xl mb-4 text-tealCustom">{{$t('contact_us')}}</h1>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-blueCustom">{{$t('name')}}</label>
        <input
          id="name"
          v-model="name"
          type="text"
          placeholder="Your name"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-tealCustom focus:border-tealCustom"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-blueCustom">{{$t('email')}}</label>
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="Your email"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-tealCustom focus:border-tealCustom"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-blueCustom">{{$t('message')}}</label>
        <textarea
          id="message"
          v-model="message"
          placeholder="Write your message here..."
          rows="4"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-tealCustom focus:border-tealCustom"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          class="w-full px-4 py-2 bg-tealCustom text-white font-semibold rounded-md shadow-md hover:bg-tealCustom focus:outline-none focus:ring-2 focus:ring-tealCustom focus:ring-offset-2"
        >
        {{$t('submit')}}
        </button>
      </div>
    </form>
  </div>
</template>
