<template>
  <div class="page-wrapper">
    <Navbar />
    <section class="c-section">
      <div class="c-hero">
        <div class="hero-img">
          <img alt="" class="c-img cc-cover" loading="lazy" sizes="(max-width: 767px) 90vw, 88vw" 
          :src="coverImage" >
          <div class="hero-img_overlay" />
        </div>
        <div class="hero-text_block cc-full-width">
          <div class="page-title">          
            {{category.name }} // {{formatDate(insight.date)}}
          </div>
          <h1 class="heading-h2">
            {{insight.title }}
          </h1>
        </div>
        <div class="hero-illustration cc-illustration-one">
          <img alt="" class="c-img" loading="lazy" src="@/public/assets/images/hero-illustration-gold.svg">
        </div>
        <div class="hero-illustration cc-illustration-four">
          <img alt="" class="c-img" loading="lazy" src="@/public/assets/images/popup-illustration-4.svg">
        </div>
        <div class="hero-illustration cc-illustration-five">
          <img alt="" class="c-img" loading="lazy" src="@/public/assets/images/hero-illustration-green.svg">
        </div>
      </div>
    </section>
    <section class="c-section">
      <div class="insights-open">
        <div class="insights-open_inner">
          <div class="insights-open_details">
            <div class="block-quote cc-sm">
              <div class="block-quote_text">
                           {{insight.quote }}

              </div>
            </div>
            <div class="insights-socials_link">
              <div id="w-node-_316c140d-3d1e-cdc1-b2ba-b35a48ca0cf2-37944365" class="insights-socials_inner">
                <div class="footer-link_header">
                  CONNECT WITH US
                </div>
                <div class="social-links">
                  <a class="social-link w-inline-block" >
                    <div class="w-embed"><svg fill="none" viewbox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                      <path d="M27.422 6.33754C26.8994 5.81314 26.2785 5.39706 25.5947 5.11315C24.911 4.82925 24.178 4.68311 23.4376 4.68311C22.6973 4.68311 21.9643 4.82925 21.2805 5.11315C20.5968 5.39706 19.9758 5.81314 19.4533 6.33754L20.7845 7.66879C21.1335 7.31976 21.5479 7.0429 22.0039 6.854C22.46 6.66511 22.9487 6.56789 23.4423 6.56789C23.9359 6.56789 24.4247 6.66511 24.8807 6.854C25.3368 7.0429 25.7511 7.31976 26.1001 7.66879C26.4492 8.01782 26.726 8.43218 26.9149 8.88821C27.1038 9.34423 27.201 9.833 27.201 10.3266C27.201 10.8202 27.1038 11.309 26.9149 11.765C26.726 12.221 26.4492 12.6354 26.1001 12.9844L18.6001 20.4844C17.8965 21.1893 16.9416 21.5858 15.9456 21.5867C14.9496 21.5876 13.9941 21.1928 13.2892 20.4891C12.5843 19.7854 12.1878 18.8306 12.1869 17.8346C12.186 16.8386 12.5809 15.8831 13.2845 15.1782L14.6064 13.8469L13.2845 12.5157L11.9533 13.8469C11.4289 14.3695 11.0128 14.9905 10.7289 15.6742C10.445 16.3579 10.2988 17.091 10.2988 17.8313C10.2988 18.5716 10.445 19.3047 10.7289 19.9884C11.0128 20.6721 11.4289 21.2931 11.9533 21.8157C13.014 22.8629 14.4471 23.4462 15.9376 23.4375C16.6808 23.4406 17.4172 23.2964 18.1043 23.0131C18.7914 22.7299 19.4156 22.3134 19.9408 21.7875L27.4408 14.2875C28.4917 13.2304 29.08 11.7993 29.0764 10.3087C29.0729 8.81803 28.4779 7.38974 27.422 6.33754Z" fill="currentColor" />
                      <path d="M3.9277 23.2688C3.57763 22.9204 3.29985 22.5062 3.1103 22.0501C2.92075 21.594 2.82317 21.1049 2.82317 20.611C2.82317 20.1171 2.92075 19.628 3.1103 19.1719C3.29985 18.7158 3.57763 18.3016 3.9277 17.9532L11.4277 10.4532C11.7761 10.1031 12.1903 9.82535 12.6464 9.6358C13.1025 9.44625 13.5916 9.34868 14.0855 9.34868C14.5794 9.34868 15.0685 9.44625 15.5246 9.6358C15.9807 9.82535 16.3949 10.1031 16.7433 10.4532C17.0912 10.8044 17.365 11.2218 17.5486 11.6808C17.7322 12.1397 17.8218 12.6309 17.8121 13.1251C17.8149 13.6208 17.7195 14.1122 17.5312 14.5709C17.3429 15.0295 17.0656 15.4462 16.7152 15.797L14.7277 17.8126L16.0589 19.1438L18.0464 17.1563C19.1044 16.0984 19.6988 14.6635 19.6988 13.1673C19.6988 11.6711 19.1044 10.2362 18.0464 9.1782C16.9885 8.12024 15.5536 7.52588 14.0574 7.52588C12.5612 7.52588 11.1263 8.12024 10.0683 9.1782L2.56832 16.6782C2.04252 17.201 1.62524 17.8225 1.3405 18.5071C1.05576 19.1917 0.90918 19.9258 0.90918 20.6673C0.90918 21.4087 1.05576 22.1428 1.3405 22.8274C1.62524 23.512 2.04252 24.1336 2.56832 24.6563C3.63597 25.6955 5.07229 26.2687 6.56207 26.2501C8.06498 26.2515 9.50743 25.6584 10.5746 24.6001L9.24332 23.2688C8.89488 23.6189 8.48071 23.8967 8.0246 24.0862C7.5685 24.2758 7.07944 24.3734 6.58551 24.3734C6.09159 24.3734 5.60253 24.2758 5.14642 24.0862C4.69031 23.8967 4.27614 23.6189 3.9277 23.2688Z" fill="currentColor" />
                    </svg></div>
                  </a>
                  <a class="social-link w-inline-block" >
                    <div class="w-embed"><svg fill="none" viewbox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.67481 6.24979C8.67447 6.91283 8.41076 7.54858 7.94169 8.01719C7.47261 8.48579 6.8366 8.74887 6.17356 8.74854C5.51051 8.7482 4.87476 8.48449 4.40615 8.01542C3.93755 7.54634 3.67447 6.91033 3.67481 6.24729C3.67514 5.58424 3.93885 4.94849 4.40792 4.47988C4.877 4.01128 5.51301 3.7482 6.17606 3.74854C6.8391 3.74887 7.47485 4.01258 7.94346 4.48165C8.41206 4.95073 8.67514 5.58674 8.67481 6.24979ZM8.74981 10.5998H3.7498V26.2498H8.74981V10.5998ZM16.6498 10.5998H11.6748V26.2498H16.5998V18.0373C16.5998 13.4623 22.5623 13.0373 22.5623 18.0373V26.2498H27.4998V16.3373C27.4998 8.62479 18.6748 8.91229 16.5998 12.6998L16.6498 10.5998Z" fill="currentColor" />
                    </svg></div>
                  </a>
                  <a class="social-link w-inline-block" >
                    <div class="w-embed"><svg fill="none" viewbox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.625 16.6875H19.4375L20.5625 12.1875H16.625V9.9375C16.625 8.77875 16.625 7.6875 18.875 7.6875H20.5625V3.9075C20.1958 3.85913 18.8109 3.75 17.3484 3.75C14.294 3.75 12.125 5.61412 12.125 9.0375V12.1875H8.75V16.6875H12.125V26.25H16.625V16.6875Z" fill="currentColor" />
                    </svg></div>
                  </a>
                  <a class="social-link w-inline-block" >
                    <div class="w-embed"><svg fill="none" viewbox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.1041 3.75H25.921L17.5819 13.2819L27.3928 26.25H19.7113L13.6955 18.3839L6.81061 26.25H2.99163L11.9116 16.0543L2.5 3.75104H10.3765L15.8145 10.9409L22.1041 3.75ZM20.7651 23.9661H22.88L9.22729 5.91464H6.95789L20.7651 23.9661Z" fill="currentColor" />
                    </svg></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div v-html="insight.content" class="insights-inner_content w-richtext">
          </div>
        </div>
      </div>
      <div class="references">
        <div class="section-header_flex">
          <div class="section-inner_header uc-green-text">
            <div class="heading-h4">
              References
            </div>
          </div>
        </div>
        <div class="references-list">
          <div v-for="(reference, index) in references" :key="reference.id"  class="references-list_item">
            <span class="reference-list_index">[{{index + 1}}] </span>
            <nuxtLink target="_blank" :to="generateUrl(reference.text)" >{{generateUrl(reference.text)}}</nuxtLink>
          </div>
        </div>
      </div>
   

          <!-- <Paginate
          v-model="params.page"
          prevText="Previous Insight"
          nextText="Next Insight"
          containerClass="insights-pagination"
          prevLinkClass="insight-pagination_btn"
          nextLinkClass="insight-pagination_btn"
          :surroundingInsights="surroundingInsights"
          :clickHandler="pageTriggered"
          :pageCount="pagination.last_page" /> -->

      <div class="all-insights_container">
        <div class="section-header_flex">
          <div class="section-inner_header uc-green-text">
            <div class="heading-h4">
              SIMILAR INSIGHTS
            </div>
          </div>
        </div>
        <div class="insights-grid cc-lg">
            <InsightsComponent :insights="insights" class="insights-block cc-sm" />
        </div>
      </div>
    </section>
    <FooterNav />
  </div>
</template>

<script setup lang="ts">
import type { ArticleContent, Image, InsightCategory, References} from "~/types/content"
import { withHttps } from 'ufo'
import type { Pagination } from '~/types'
import { useAllPosts } from '~/composables/states'


const insight = ref<ArticleContent[]>([])
const insights = ref<ArticleContent[]>([])
const coverImage = ref<Image[]>([])
const category = ref<InsightCategory[]>([])
const references = ref<References[]>([])
const currentArticle = ref<ArticleContent[]>([])
const surroundingInsights = ref<Record<string,null>>({})

const pagination = ref<Pagination>(useDefault('pagination'))

const params = ref(sanitizeQuery(useRoute().query))


const route = useRoute()

function generateUrl(text: string): string {
  return withHttps(text.toLowerCase().replace(/\s+/g, '-')) 
}



        const response = await fetch(`https://cms.quicklaw.ng/api/posts?filters[slug]=${route.params.slug}&populate=deep`)
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const data = await response.json()
         insight.value = data.data[0]
         currentArticle.value = data.data[0].id   
         coverImage.value = insight.value.cover_image.url             
         references.value = insight.value.references
         category.value = insight.value.category
         
        



const fetchAllPosts = async () => {
  try {
    const response = await fetch('https://cms.quicklaw.ng/api/posts?populate=deep')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    insights.value = data.data
    pagination.value = usePaginate(lodashOmit(data.value, 'data'))!
  } catch (error) {
    console.error('Error fetching home page data:', error)
  }
}


// get surrounding elements of element in an array
const getSurroundingElement = (array, element) => {
  const minIndex = 0
  console.log(array);
  
  
  const maxIndex = array.length - 1
  const elementIndex = array.findIndex(post => post.slug === element.slug)
  console.log('elementIndex', elementIndex);
  
  let previousElement = null
  let nextElement = null

  if (elementIndex !== -1) {
    if (elementIndex > minIndex) {
      previousElement = elementIndex - 1
    }

    if (elementIndex < maxIndex) {
      nextElement = elementIndex + 1
    }
  }

  return {
    previousElement: array[previousElement],
    nextElement: array[nextElement]
  }

}
useWatch(params, () => {
  useRouter().push({
    path: `/insights/slug`,
    query: params.value
  })
   fetchAllPosts()
})

onMounted(async () => {
  const slug = route.params.slug  
  // await fetchPost({ slug })
  fetchAllPosts()
  surroundingInsights.value = getSurroundingElement(useAllPosts().value, insight.value)
  console.log(surroundingInsights.value)
  console.log(useAllPosts().value);
});

const metaDef = useDefault('meta')
useSeoMeta({
  ...metaDef,
  title: `${metaDef.title} | Insights`,
})
</script>

<style scoped>

</style>
