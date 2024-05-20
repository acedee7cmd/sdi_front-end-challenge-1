const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // News Room
      { path: '', component: () => import('/src/pages/news-room/NewsRoomIndex.vue') },

      
    ],
    
  },

 
]

export default routes
