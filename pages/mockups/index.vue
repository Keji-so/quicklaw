<template>
  <div class="container relative mx-auto flex h-full min-h-screen flex-col space-y-4 px-4 pb-32 pt-4 md:pb-24">
    <div>
      <div class="break-words text-4xl font-bold leading-none">
        Table (Mockups) - Nuxt3:SSR:Boilerplate
      </div>
      <div class="text-2xl leading-none text-gray-700">
        Customer SSR
      </div>
    </div>

    <!-- Stats -->
    <ClientOnly>
      <div class="stats mb-4 inline-flex w-full shadow">
        <Shimmer
          v-if="postAnalytics.isWorking"
          class="h-20 w-full"
        />
        <template v-else>
          <div class="place-items-left stat">
            <div class="stat-title">
              Total Mockups
            </div>
            <div class="stat-value">
              {{ mockupstats.get('published', [[formatNumber, '0,0'], numberEmptyState]) }}
            </div>
            <div
              class="stat-desc cursor-default text-primary"
              :title="mockupstats.get('last_published.created_at', [formatDate, numberEmptyState])"
            >
              Last Published :
              <span v-if="mockupstats.get('last_published.created_at')">
                {{ mockupstats.get('last_published.created_at', [fromNow, numberEmptyState]) }}
              </span>
              <span v-else>---</span>
            </div>
          </div>

          <div class="place-items-left stat">
            <div class="stat-title">
              Total Views
            </div>
            <div class="stat-value">
              {{ mockupstats.get('total_views', [[formatNumber, '0,0'], numberEmptyState]) }}
            </div>
          </div>

          <div class="place-items-left stat">
            <div class="stat-title">
              Total Downloads
            </div>
            <div class="stat-value">
              {{ mockupstats.get('total_downloads', [[formatNumber, '0,0'], numberEmptyState]) }}
            </div>
            <div
              class="stat-desc cursor-default text-primary"
              :title="mockupstats.get('last_download.created_at', [formatDate])"
            >
              Last Download:
              <span v-if="mockupstats.get('last_download.created_at')">
                {{ mockupstats.get('last_download.created_at', [fromNow]) }}
              </span>
              <span v-else>---</span>
            </div>
          </div>

          <div class="place-items-left stat cursor-pointer">
            <div class="stat-title">
              Most Downloaded
            </div>
            <div class="stat-value text-[24px] font-medium capitalize">
              {{ mockupstats.get('most_download.title') ?? '---' }}
            </div>
            <div
              class="stat-desc cursor-default text-primary"
              :title="mockupstats.get('most_download.last_downloaded', [formatDate])"
            >
              Last Downloaded:
              <span v-if="mockupstats.get('most_download.last_downloaded')">
                {{ mockupstats.get('most_download.last_downloaded', [fromNow]) }}
              </span>
              <span v-else>---</span>
            </div>
          </div>
        </template>
      </div>
    </ClientOnly>

    <!-- Search and Actions -->
    <ClientOnly fallbackTag="div">
      <div class="flex flex-wrap space-y-3">
        <div class="form-control mr-2 w-full max-w-[500px] md:w-1/2">
          <div class="flex items-center">
            <input
              v-debounce:300ms="searchTriggered"
              class="input input-bordered w-[500px]"
              placeholder="Search title"
              type="text"
              :value="params.search"
            >
          </div>
        </div>
        <div class="ml-auto flex space-x-2 self-center">
          <button
            class="btn btn-warning btn-sm"
            @click="useToast().show('Some cool action')"
          >
            Action
          </button>
          <NuxtLink
            class="btn btn-warning btn-sm"
            to="/toasts"
          >
            Toasts
          </NuxtLink>
        </div>
      </div>
    </ClientOnly>

    <!-- Table -->
    <ClientOnly>
      <Transition
        mode="out-in"
        name="fade"
      >
        <!-- When loading -->
        <div v-if="postsAll.isWorking">
          <TableShimmer
            v-for="item in 6"
            :key="item"
          />
        </div>
        <!-- When data was found -->
        <div
          v-else-if="mockups.length > 0"
          class="overflow-x-auto overflow-y-hidden"
        >
          <table class="table table-zebra table-pin-rows mb-28">
            <thead class="z-20">
              <tr>
                <th>S/N</th>
                <th>Title</th>
                <th>Location</th>
                <th>
                  <div
                    class="flex justify-center"
                    title="Downloads"
                  >
                    <Icon name="gg:software-download" />
                  </div>
                </th>
                <th>
                  <div
                    class="flex justify-center"
                    title="Views"
                  >
                    <Icon name="gg:eye-alt" />
                  </div>
                </th>
                <th>Status</th>
                <th>Uploaded At</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(asset, index) in mockups"
                :key="asset.get('id')"
              >
                <td>
                  <Dropdown
                    :menuItems="getMenuItems(asset.obj)"
                    :text="pagination.cursor(index)"
                  />
                </td>
                <td class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle h-12 w-12 cursor-pointer">
                      <img src="https://placehold.co/400/000/fff">
                      <!-- We use placehold in it's place to avoid unnecessary bandwidth usage -->
                      <!-- <img :src="asset.get('featured_image')" /> -->
                    </div>
                  </div>
                  <div
                    class="font-bold"
                    :title="asset.get('title')"
                  >
                    {{ lodashTruncate(asset.get('title'), { length: 20, separator: ' ' }) }}
                  </div>
                </td>
                <td v-if="asset">
                  {{ lodashStartCase(asset.get('location')) }}
                </td>
                <td v-else>
                  N/A
                </td>
                <td class="text-center">
                  {{ asset.get('downloads_count') }}
                </td>
                <td class="text-center">
                  {{ asset.get('view_count') }}
                </td>
                <td>
                  <select
                    class="select select-xs w-[6.5rem]"
                    :class="asset.get('current_status') !== 'published' ? 'bg-error text-white focus:text-white' : ''"
                    :value="asset.get('current_status')"
                    @change="changeMockupStatus(asset.obj, $event)"
                  >
                    <option
                      disabled
                      selected
                      value=""
                    >
                      Change Status
                    </option>
                    <option value="published">
                      Published
                    </option>
                    <option value="draft">
                      Draft
                    </option>
                    <option value="archived">
                      Archived
                    </option>
                  </select>
                </td>
                <td>
                  {{ fromNow(asset.get('created_at')) }}
                </td>
              </tr>
              <tr />
            </tbody>
          </table>
        </div>
        <!-- When data was not found -->
        <div
          v-else
          class="flex flex-auto items-center justify-center"
        >
          {{ noResultCopy }}
        </div>
      </Transition>
    </ClientOnly>

    <!-- Pagination -->
    <ClientOnly>
      <div class="mt-8 flex justify-center">
        <Paginate
          v-model="params.page"
          :clickHandler="pageTriggered"
          :pageCount="pagination.last_page"
        />
      </div>
    </ClientOnly>
  </div>

  <FooterNav />
</template>

<script setup lang="ts">
import type { Asset } from '~/types/assets'
import type { DropdownMenuItem, PaginatedCollection, Pagination } from '~/types'

const { vDebounce } = useDirectives()

definePageMeta({
  middleware: ['auth']
})

const params = ref(sanitizeQuery(useRoute().query))
const pagination = ref<Pagination>(useDefault('pagination'))
const mockups = ref(useRecords<Asset>([]))
const mockupstats = ref(useRecord({}))

const postsAll = useFetchState('/posts/all')
const postAnalytics = useFetchState('analytics/posts')

const noResultCopy = computed(() => {
  if (postsAll.value.error) {
    if (!useOnline().value)
      return 'Network error, check connectivity'
    else
      return postsAll.value.error
  }
  else {
    return `No Results found for "${params.value.search}"`
  }
})

const fetchData = async () => {
  const { data } = await useGet<PaginatedCollection<Asset>>(postsAll.value.url, params.value)

  if (data.value) {
    mockups.value = useRecords<Asset>(data.value.data)
    pagination.value = usePaginate(lodashOmit(data.value, 'data'))
  }
}

fetchData()

const fetchMockupStats = async () => {
  const { data, error } = await useGet(postAnalytics.value.url)

  if (error.value)
    useToast().show(error.value?.message)

  if (data.value)
    mockupstats.value = useRecord(data.value)
}
fetchMockupStats()

const changeMockupStatus = async (asset: Asset, newStatus: any) => {
  asset.current_status = newStatus.target.value
  await usePost('', {
    id: asset.id,
    new_status: asset.current_status
  })

  fetchMockupStats()
}

const pageTriggered = (page: number) => {
  mockups.value = []
  params.value = sanitizeQuery({ ...params.value, ...{ page } })
}

const searchTriggered = (search: number) => {
  mockups.value = []
  params.value = sanitizeQuery({ ...params.value, ...{ search, page: undefined } })
}

const getMenuItems = (asset: Asset): DropdownMenuItem[] => [
  {
    name: 'View',
    function: () => {
      useToast().show('View was clicked')
    }
  },
  {
    name: 'Edit',
    function: () => {
      useToast().show('Edit was clicked')
    }
  },
  {
    name: 'View Resources',
    link: { url: `/mockups/${asset.id}?type=asset`, target: '_blank' },
    show: asset.kind === 'post'
  },
  {
    name: 'Delete',
    cssClass: ['bg-red-500', 'hover:!bg-red-700', '!text-white']
  }
]

useWatch(params, () => {
  useRouter().push({
    query: params.value
  })

  fetchData()
})

const metaDef = useDefault('meta')
useSeoMeta({
  ...metaDef,
  title: `${metaDef.title} - All Mockups`,
  ogImage: 'https://nuxt.com/social.jpg'
})
</script>
