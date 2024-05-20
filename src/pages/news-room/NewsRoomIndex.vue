<template>
  <div class="q-pa-md news-container">
    <div class="news-article bg-white">
      <div class="card">
        <q-img
        class="news-image"
        src="~assets/image1.jpg"
      />
      <div class="article-content">
        <q-card-section style=" margin-top: -75px;">
          <q-btn class="parallelogram-button" flat>
            <div class="date-label">
              <div class="date-day">13</div>
              <div class="date-month">JAN</div>
            </div>
          </q-btn>


        </q-card-section>

        <div class="share-button" style="padding: 15px;">
          <q-btn
            flat
            icon="fas fa-share"
            size="sm"
            @click="shareArticle"
            class="q-ml-md">
            Share
          </q-btn>
        </div>
        <q-separator />
        <div v-if="authors.length > 0">
          <p style="color: red;">{{ authors[0].name }}</p>
        </div>
        <div style="margin-top: -40px;" v-if="news.length > 0">
          <h5><b>{{ news[0].title }}</b></h5>
          <p>{{ news[0].description }}</p>
        </div>
        <div style="margin-top: -30px;" v-if="news.length > 0">
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
  height: 500px; /* Example fixed height */
  object-fit: cover; /* Cover the container without losing aspect ratio */
  object-position: top; /* Align the image content to the top */
}

.parallelogram-button {
  position: relative;
  background-color: red; /* Red background */
  color: white; /* White text color */
  padding: 6px 20px; /* Padding for aesthetic spacing */
  overflow: hidden;
  transform: skew(-10deg);
  border: none; /* No border */
}

.parallelogram-button .date-label {
  transform: skew(10deg);
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the text */
}

.date-day {
  font-size: 20px; /* Larger font size for day */
  font-weight: bold; /* Bold font weight */
}

.date-month {
  font-size: 14px; /* Smaller font size for month */
  letter-spacing: 1px; /* Spacing between letters */
}

.parallelogram-button::after {
  content: '';
  position: absolute;
  right: -20px; /* Position to the right outside of button */
  top: 0;
  bottom: 0;
  width: 30px; /* Width of the slanted part */
  background: inherit; /* Use the same background as the button */
  transform: skewY(-45deg);
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

