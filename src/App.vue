<template>
  <NotificationPage :images="images" />
</template>

<script setup>
import NotificationPage from "./components/NotificationPage.vue";
import angela from "../src/assets/avatar-angela-gray.webp";
import anna from "../src/assets/avatar-anna-kim.webp";
import jacob from "../src/assets/avatar-jacob-thompson.webp";
import kimberly from "../src/assets/avatar-kimberly-smith.webp";
import mark from "../src/assets/avatar-mark-webber.webp";
import nathan from "../src/assets/avatar-nathan-peterson.webp";
import rizky from "../src/assets/avatar-rizky-hasanuddin.webp";
import chess from "../src/assets/image-chess.webp";
const images = [
  {
    src: mark,
    alt: "Mark Webber",
  },
  {
    src: angela,
    alt: "Angela Gray",
  },
  {
    src: jacob,
    alt: "Jacob Thompson",
  },
  {
    src: rizky,
    alt: "Rizky Hasanuddin",
  },
  {
    src: kimberly,
    alt: "Kimberly Smith",
  },
  {
    src: chess,
    alt: "Chess",
  },
  {
    src: nathan,
    alt: "Nathan Peterson",
  },
  {
    src: anna,
    alt: "Anna Kim",
  },
];
</script>
