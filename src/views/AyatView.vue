<script>
import { ref } from "vue";
import axios from "axios";

export default {
  data() {
    return {
      cari: "",
      surah: ref([]),
      judul: ref([]),
      name: [],
      translates: ref([]),
      audio: "",
    };
  },

  watch: {
    cari() {
      this.getSurah();
      this.getJudul();
      this.getTranslate();
      this.getAudio();
    },
  },

  mounted() {
    this.getSurah();
    this.getJudul();
    this.getTranslate();
    this.getAudio();
  },

  methods: {
    getSurah() {
      axios
        .get(
          "https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=" +
            this.cari
        )
        .then((response) => {
          this.surah = response.data.verses;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getJudul() {
      axios
        .get(
          "https://api.quran.com/api/v4/chapters/" + this.cari + "?language=id"
        )
        .then((response) => {
          this.judul = response.data.chapter;
          this.name = this.judul?.translated_name;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getTranslate() {
      axios
        .get(
          "https://api.quran.com/api/v4/quran/translations/39?chapter_number=" +
            this.cari
        )
        .then((response) => {
          this.translates = response.data.translations;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAudio() {
      axios
        .get("https://api.quran.com/api/v4/chapter_recitations/7/" + this.cari)
        .then((response) => {
          this.audio = response.data.audio_file;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <div class="text-center">
    <h1>Masukkan Nomor Surah!</h1>
    <input
      v-model="cari"
      class="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
    <div v-if="cari">
      <div class="mt-5">
        <h1>{{ judul?.name_complex }}</h1>
        <br />
        <h1>{{ name?.name }}</h1>
        <br />
        <h2>Diturunkan di : {{ judul?.revelation_place }}</h2>
      </div>
      <p v-if="audio" class="text-lg-center mt-3">
        <audio v-bind:src="audio?.audio_url" controls></audio>
      </p>
      </div>
    </div>
    <div v-if = "cari" v-for="(ayat, i) in surah" :key="i" class="card">
      <div class="card-body">
        <h5 class="card-title text-lg-end">
          {{ ayat?.text_uthmani }}{{ ayat?.verse_key }}
        </h5>
        <!-- <p v-html="translates[i]?.text" class="translate"></p> -->
        <p class="card-title text-end">{{ translates[i]?.text }}</p>
      </div>
    </div>
</template>

<style scoped>
.ayat {
  margin-top: 25px;
  font-weight: bold;
  font-size: 20px;
  text-align: end;
}
.translate {
  margin-top: 25px;
  font-weight: bold;
  font-size: 17px;
  text-align: start;
}
h1,
h2 {
  margin-top: 5px;
  font-weight: bold;
  font-size: 30px;
  color: #288a52;
}
</style>
