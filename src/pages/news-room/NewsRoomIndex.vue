<template>
  <div class="q-pa-md news-container">
    <div class="news-article bg-white">
      <q-img
        class="news-image"
        src="~assets/image1.jpg"
      />
      <div class="article-content">
        <div class="date-badge">13 JAN</div>
        <div class="share-button">
          <q-btn icon="share" flat @click="shareArticle" class="q-ml-md" />Share
        </div>
        <q-separator />
        <div v-if="authors.length > 0">
          <p style="color: red;">{{ authors[0].name }}</p>
        </div>
        <div style="margin-top: -40px;" v-if="news.length > 0">
          <h5><b>{{ news[0].title }}</b></h5>
          <p>{{ news[0].description }}</p>
        </div>
        <div style="margin-top: -40px;" v-if="news.length > 0">
          <p style="color: gray;">{{ news[0].body }}</p>
        </div>

        <div>
          <b><a href="#" style="color: black;">READ ARTICLE</a></b>
        </div>
      </div>
      
      <div class="pagination-container">
        <q-pagination
          v-model="current"
          max="20"
          direction-links
          outline
          color="gray"
          active-design="unelevated"
          active-color="red"
          active-text-color="orange"
          class="custom-pagination"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { defineComponent } from 'vue';
import { ref } from 'vue'


export default {
  name: 'Author',
	async beforeMount() {
		await this.fetchAuthors();
    await this.fetchNews();
	},
	data() {
		return {
      current: ref(10)
    }
	},
	computed: {
    ...mapGetters('Author', {
			authors: 'GET_AUTHORS',
			news: 'GET_NEWS',
			loading: 'GET_LOADING',
		}),
  },
	methods: {
    ...mapActions('Author', [
			'fetchAuthors',
			'fetchNews'
    ]),
  },
}
</script>
<style scoped>
.share-button {
  text-align: right;
  margin-top: -40px;
}

.news-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Full viewport height */
}

.news-article {
  width: 100%;
  max-width: 800px; /* Limit maximum width */
  border-radius: 10px;
  overflow: hidden; /* Ensures that children do not overflow the rounded corners */
}

.news-image {
  width: 100%;
  height: auto;
}

.article-content {
  padding: 20px;
  background: white;
  text-align: left;
}

.date-badge {
  background-color: red;
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
  display: inline-block;
  font-weight: bold;
  margin-bottom: 16px;
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.description {
  font-size: 16px;
  line-height: 1.5;
}
.author-info h3 {
  font-weight: bold;
  margin-top: 10px;
}
.author-info p {
  margin-top: 5px;
  color: #666;
}
.pagination-container {
  width: 100%; /* Take full width to center pagination */
  display: flex;
  padding: 20px;
  justify-content: center; /* Center pagination horizontally */
  margin-top: 20px; /* Spacing from the article content */
}

</style>

