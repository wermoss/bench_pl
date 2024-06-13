<template>
  <div class="text-3xl pb-2">{{ sectionTitle }}</div>
  <span class="block bg-[#FFCB04] h-[2px] w-20 my-2"></span>

  <div class="pt-2 pb-10">
    {{ sectionSubtitle }}
  </div>
  <div class="bg-gray-100 p-8 rounded">
    <form id="contactForm" @submit.prevent="sendEmail" class="tracking-wide">
      <label for="name" class="text-sm">Imię i nazwisko</label><br />
      <input
        type="text"
        id="name"
        name="name"
        v-model="name"
        class="w-full mt-2 mb-2 px-4 py-2 outline-none border-[1px] border-[transparent] focus:border-[1px] focus:border-[#000000]"
      /><br />
      <label for="company" class="text-sm">Nazwa firmy</label><br />
      <input
        type="text"
        id="company"
        name="company"
        v-model="company"
        class="w-full mt-2 mb-2 px-4 py-2 outline-none border-[1px] border-[transparent] focus:border-[1px] focus:border-[#000000]"
      /><br />
      <label for="email" class="text-sm">Adres email</label><br />
      <input
        type="email"
        id="email"
        name="email"
        v-model="email"
        class="w-full mt-2 mb-2 px-4 py-2 outline-none border-[1px] border-[transparent] focus:border-[1px] focus:border-[#000000]"
      /><br />
      <label for="message" class="text-sm">Treść wiadomości</label><br />
      <textarea
        id="message"
        name="message"
        v-model="message"
        class="w-full mt-2 mb-2 px-4 h-[200px] py-2 outline-none border-[1px] border-[transparent] focus:border-[1px] focus:border-[#000000]"
      ></textarea
      ><br />
      <div class="flex py-2 mb-8">
        <div>
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            value="TAK"
            v-model="isChecked"
          />
        </div>
        <div class="pl-4 text-[11px]">
          <label for="checkbox"
            >Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z
            ustawą o ochronie danych osobowych w związku z formularzem
            kontaktowym. Podanie danych jest dobrowolne, ale niezbędne do
            przetworzenia zapytania. Zostałem /am poinformowany /a, że
            przysługuje mi prawo dostępu do swoich danych, możliwości ich
            poprawiania, żądania zaprzestania ich przetwarzania. Administratorem
            danych osobowych jest Benchmarket Sp. z o.o. (KRS: 0000698774, NIP:
            6351843655) z siedzibą w Wyrach.</label
          >
        </div>
      </div>
      <input
        type="submit"
        id="submit"
        :disabled="!isFormValid"
        :class="
          isFormValid
            ? 'bg-black text-white px-4 py-2'
            : 'bg-black/50 text-white opacity-50 border-s px-4 py-2'
        "
        value="Wyślij"
      />
      <div v-if="emailStatus === 'success'">Wiadomość wysłana pomyślnie</div>
      <div v-if="emailStatus === 'error'">
        Wystąpił błąd podczas wysyłania wiadomości
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

const prismic = usePrismic();
const { data: form } = useAsyncData("settings", () =>
  prismic.client.getSingle("settings")
);

const sectionTitle = computed(() => form.value?.data.name ?? "");
const sectionSubtitle = computed(() => form.value?.data.description ?? "");

onMounted(() => {
  if (form.value?.type === "settings") {
    console.log(form.value);
  }
});

const config = useRuntimeConfig();
const apiKey = config.public.brevoApiKey;
const emailStatus = ref("");
const name = ref("");
const company = ref("");
const email = ref("");
const message = ref("");
const isChecked = ref(false);

const isFormValid = computed(() => {
  return (
    name.value &&
    company.value &&
    email.value &&
    message.value &&
    isChecked.value
  );
});

const sendEmail = async () => {
  if (!isFormValid.value) {
    return;
  }
  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "Wooboo.pl",
          email: "konrad@wooboo.pl",
        },
        replyTo: {
          email: "konrad@wooboo.pl",
          name: "Wooboo.pl",
        },
        templateId: 5,
        params: {
          FORM_NAME: `${name.value}`,
          FORM_COMPANY: `${company.value}`,
          FORM_EMAIL: `${email.value}`,
          FORM_MESSAGE: `${message.value}`,
        },
        to: [
          {
            email: "konrad@wooboo.pl",
            name: `${name.value}`,
          },
          {
            email: "michal.olejniczak@benchmarket.pl",
            name: `${name.value}`,
          },
        ],
        subject: "Nowy furmularz kontaktowy",
        htmlContent: `<html><head></head><body><p>Imię i nazwisko: ${name.value}</p><p>${message.value}</p><p>Nazwa firmy: ${company.value}</p><p>Email: ${email.value}</p></body></html>`,
        textContent: "Nowy furmularz kontaktowy",
      }),
    });
    console.log(await response.text());
    if (!response.ok) {
      throw new Error("Email sending failed");
    }
    emailStatus.value = "success";
    // Clear the form fields
    name.value = "";
    company.value = "";
    email.value = "";
    message.value = "";
    isChecked.value = false;
  } catch (error) {
    console.error(error);
    emailStatus.value = "error";
  }
};
</script>

<style scoped>
input:focus {
  outline: none !important;
}
</style>
