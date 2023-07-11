<template>
  <section
    class="container md:rounded-xl md:mt-8 md:py-4 pb-1 md:pb-0 bg-neutralWhite shadow-sm mx-auto max-w-3xl"
  >
    <!-- header -->
    <div class="pb-7 md:px-7">
      <div class="flex justify-between pt-5 items-center px-4">
        <div class="flex items-center gap-3">
          <h1 class="text-[#151922] font-bold text-base md:text-2xl">
            Notifications
          </h1>
          <div class="px-3 py-px bg-primaryBlue rounded-md text-neutralWhite">
            {{ unreadNotificationCount }}
          </div>
        </div>
        <h1
          @click="markAllAsRead"
          class="text-sm text-dGrayishBlue md:text-base cursor-pointer hover:text-primaryBlue duration-200 ease-in-out"
        >
          Mark all as read
        </h1>
      </div>
    </div>

    <!-- list -->
    <div
      v-for="notification in notifications"
      :key="notification.id"
      class="px-4 md:px-10 mb-3"
    >
      <div
        :class="{
          'rounded-lg bg-vlGrayishBlue  active:scale-[.9]': !isNotificationRead(
            notification.id
          ),
        }"
        class="w-full duration-200 ease-in-out cursor-pointer"
        @click="readNotification(notification.id)"
      >
        <div class="flex items-center">
          <img
            :src="notification.image.src"
            :alt="notification.image.alt"
            class="scale-[.6]"
          />
          <div>
            <p
              class="text-xs xs:text-sm md:text-base font-medium text-dGrayishBlue"
            >
              <span
                :class="{
                  'font-extrabold hover:text-primaryBlue':
                    notification.id === 2,
                }"
                class="xs:text-sm md:text-base duration-200 ease-in-out font-extrabold text-vdBlue pr-1"
                >{{ notification.name }}</span
              >
              {{ notification.action }}
              <span
                :class="{
                  'font-extrabold text-primaryBlue': notification.id === 3,
                  'font-extrabold hover:text-primaryBlue':
                    notification.id === 1,
                }"
                class="font-extrabold duration-200 ease-in-out pl-1"
                >{{ notification.details }}</span
              >
              <span
                v-if="!isNotificationRead(notification.id)"
                :class="{
                  'md:ml-[0.10rem]': notification.id === 2,
                }"
                class="bg-primaryRed px-[0.3rem] ml-2 inline-block py-[0.3rem] rounded-full"
              ></span>
            </p>
            <p class="text-grayishBlue text-xs xs:text-sm md:text-base">
              {{ notification.time }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 md:px-10 mb-3">
      <div class="w-full py-1">
        <div class="flex items-center">
          <img :src="images[3].src" :alt="images[3].alt" class="scale-[.6]" />
          <div>
            <p
              class="text-xs xs:text-sm font-medium md:text-base text-dGrayishBlue mb-1"
            >
              <span
                class="font-extrabold text-vdBlue pr-1 xs:text-sm md:text-base"
                >Rizky Hasanuddin</span
              >
              sent you private message
            </p>
            <p class="text-grayishBlue text-xs xs:text-sm md:text-base">
              5 days ago
            </p>
          </div>
        </div>
        <div class="pl-[5.6rem]">
          <div
            class="border text-dGrayishBlue font-medium rounded-lg text-xs xs:text-sm md:text-base duration-200 ease-in-out hover:bg-lGrayishBlue1 hover:border-lGrayishBlue1 border-lGrayishBlue2 p-4"
          >
            Hello, thanks for setting up the Chess Club. I've been a member for
            a few weeks now and I'm already having lots of fun and improving my
            game.
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 md:px-10 mb-3">
      <div class="w-full py-1">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img :src="images[4].src" :alt="images[4].alt" class="scale-[.6]" />
            <div>
              <p
                class="text-xs xs:text-sm font-medium md:text-base text-dGrayishBlue"
              >
                <span
                  class="font-extrabold text-vdBlue pr-1 xs:text-sm md:text-base"
                  >Kimberly Smith</span
                >
                commented on your picture
              </p>
              <p class="text-grayishBlue text-xs xs:text-sm md:text-base">
                1 week ago
              </p>
            </div>
          </div>
          <img
            :src="images[5].src"
            :alt="images[5].alt"
            class="scale-[.6] shadow-dGrayishBlue hover:shadow-lg rounded-lg duration-200 ease-in-out"
          />
        </div>
      </div>
    </div>
    <div class="px-4 md:px-10 mb-3">
      <div class="w-full py-1">
        <div class="flex items-end">
          <img :src="images[6].src" :alt="images[6].alt" class="scale-[.6]" />
          <div>
            <p
              class="text-xs xs:text-sm font-medium text-dGrayishBlue md:text-base"
            >
              <span
                class="font-extrabold text-vdBlue pr-1 text-xs xs:text-sm md:text-base"
                >Nathan Peterson</span
              >
              reacted to your recent post
              <span class="font-extrabold pl-1 text-xs md:text-base">
                5 end-game strategies to increase your win rate</span
              >
            </p>
            <p class="text-grayishBlue text-xs xs:text-sm md:text-base">
              2 weeks ago
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 md:px-10 mb-3">
      <div class="w-full py-1">
        <div class="flex items-center">
          <img :src="images[7].src" :alt="images[7].alt" class="scale-[.6]" />
          <div>
            <p
              class="text-xs xs:text-sm md:text-base font-medium mb-1 text-dGrayishBlue"
            >
              <span
                class="font-extrabold text-vdBlue xs:text-sm md:text-base pr-1"
                >Anna Kim</span
              >
              left the group
              <span
                class="text-primaryBlue hover:text-dGrayishBlue duration-200 ease-out font-extrabold pl-1 xs:text-sm md:text-base"
                >Chess Club</span
              >
            </p>
            <p class="text-grayishBlue text-xs xs:text-sm md:text-base">
              2 weeks ago
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const notificationRead = ref([]);

const unreadNotificationCount = computed(() => {
  return notifications.filter(
    (notification) => !notificationRead.value.includes(notification.id)
  ).length;
});

const readNotification = (notificationId) => {
  if (!notificationRead.value.includes(notificationId)) {
    notificationRead.value.push(notificationId);
  }
};

const isNotificationRead = (notificationId) => {
  return notificationRead.value.includes(notificationId);
};

const markAllAsRead = () => {
  notificationRead.value = notifications.map((notification) => notification.id);
};

const notifications = [
  {
    id: 1,
    name: "Mark Webber",
    action: "reacted to your recent post",
    details: "My first tournament today!",
    image: {
      src: props.images[0].src,
      alt: props.images[0].alt,
    },
    time: "1m ago",
  },
  {
    id: 2,
    name: "Angela Gray",
    action: "followed you",
    image: {
      src: props.images[1].src,
      alt: props.images[1].alt,
    },
    time: "5m ago",
  },
  {
    id: 3,
    name: "Jacob Thompson",
    action: "has joined your group",
    details: "Chess Club",
    image: {
      src: props.images[2].src,
      alt: props.images[2].alt,
    },
    time: "1 day ago",
  },
];
</script>
