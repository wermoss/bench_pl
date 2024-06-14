<template>
  <div class="text-3xl pb-2">{{ sectionTitle }}</div>
  <span class="block bg-[#FFCB04] h-[2px] w-20 my-2"></span>

  <div class="pt-2 pb-10">
    {{ sectionSubtitle }}
  </div>
  <div class="bg-gray-100 p-8 rounded">
    <form
      id="contactForm"
      @submit.prevent="sendEmailAndSMS"
      class="tracking-wide"
    >
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
      /><br /><label for="phone" class="text-sm">Telefon</label><br />
      <div
        class="flex items-center border border-transparent focus-within:border-black"
      >
        <span class="bg-white pl-4 py-2">+48</span>
        <input
          type="text"
          id="phone"
          name="phone"
          maxlength="9"
          v-model="userPhone"
          class="w-full pl-2 py-2 outline-none border-transparent focus:border-black"
        />
      </div>
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
const userPhone = ref(""); // Zmieniono nazwę zmiennej z 'phone' na 'userPhone'
const email = ref("");
const message = ref("");
const isChecked = ref(false);
const sendSMSAllowed = ref(true);

const isFormValid = computed(() => {
  return (
    name.value &&
    company.value &&
    userPhone.value && // Zmieniono nazwę zmiennej z 'phone' na 'userPhone'
    email.value &&
    message.value &&
    isChecked.value
  );
});

const ensurePrefix = () => {
  userPhone.value = userPhone.value.replace(/\D/g, ""); // Remove non-digit characters
  if (!userPhone.value.startsWith("48")) {
    userPhone.value = "48" + userPhone.value;
  }
};

const sendEmailAndSMS = async () => {
  if (!isFormValid.value) {
    return;
  }
  ensurePrefix(); // Ensure the phone number is correctly formatted

  try {
    let response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "Benchmarket.pl",
          email: "services@benchmarket.pl",
        },
        replyTo: {
          name: "Benchmarket.pl",
          email: "services@benchmarket.pl",
        },
        templateId: 1,
        params: {
          FORM_NAME: `${name.value}`,
          FORM_COMPANY: `${company.value}`,
          FORM_PHONE: `${userPhone.value}`, // Zmieniono nazwę zmiennej z 'phone' na 'userPhone'
          FORM_EMAIL: `${email.value}`,
          FORM_MESSAGE: `${message.value}`,
        },
        to: [
          {
            name: "Benchmarket.pl",
            email: "services@benchmarket.pl",
          },
        ],
        subject: "Nowa wiadomość ze strony internetowej",
      }),
    });

    if (!response.ok) {
      throw new Error("Email sending failed");
    }

    console.log("Email sent successfully to", "services@benchmarket.pl");

    // Second email sending block
    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "Benchmarket.pl",
          email: "services@benchmarket.pl",
        },
        replyTo: {
          name: "Benchmarket.pl",
          email: "services@benchmarket.pl",
        },
        templateId: 3, // Use template mr 3 for the second email
        to: [
          {
            name: name.value, // Use the name from the form
            email: email.value, // Use the email from the form
          },
        ],
        subject: "Potwierdzenie otrzymania wiadomości",
      }),
    });

    console.log("Email sent successfully to", email.value);

    if (sendSMSAllowed.value) {
      await sendSMS(
        userPhone.value, // Use 'userPhone.value' for the phone number
        "Dziekujemy za kontakt. Skontaktujemy sie tak szybko jak to tylko mozliwe. Zespol Doradcow Podatkowych / Benchmarket.pl "
      );
      // console.log("SMS sent successfully to", userPhone.value); // Corrected to use 'userPhone.value'

      await sendSMS(
        "48450066055",
        "Panowie, wlasnie wypelniono formularz na stronie internetowej. Warto zajrzec na maila :)"
      );
      // console.log("SMS sent successfully to", "48450066055");
    }

    emailStatus.value = "success";
    name.value = "";
    company.value = "";
    userPhone.value = ""; // Zmieniono nazwę zmiennej z 'phone' na 'userPhone'
    email.value = "";
    message.value = "";
    isChecked.value = false;
  } catch (error) {
    console.error(error);
    emailStatus.value = "error";
  }
};

const sendSMS = async (recipient, content) => {
  try {
    const response = await fetch(
      "https://api.brevo.com/v3/transactionalSMS/sms",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "api-key": apiKey,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          type: "transactional",
          unicodeEnabled: false,
          sender: "Benchmarket",
          recipient: recipient,
          content: content,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("SMS sending failed");
    }

    console.log("SMS sent successfully to", recipient);
  } catch (error) {
    console.error("Failed to send SMS to", recipient, error);
  }
};
</script>

<style scoped>
input:focus {
  outline: none !important;
}
</style>
