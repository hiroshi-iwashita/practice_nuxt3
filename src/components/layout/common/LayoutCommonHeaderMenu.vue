<template>
  <ul class="menu menu-horizontal p-1 rounded-box">
    <template
      v-for="(item, index) in contents"
      :key="index"
    >
      <!-- menuがない場合 -->
      <template v-if="!item.menus.length" > 
        <li class="hover-bordered">
          <NuxtLink
            :to=" item.to"
            class="link link-hover"
          >
            {{ item.title }}
          </NuxtLink>
        </li>
      </template> <!-- menuがない場合 -->

      <!-- menuがある場合 -->
      <template v-else>
        <li tabindex="0">
          <a>
            {{ item.title }}
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </a>
          <ul class="p-2 bg-base-100">
            <template
              v-for="(menu, index) in item.menus"
              :key="index"
            >
              <li
                v-if="menu.title !== ''"
                class="menu-title"
              >
                <span>{{ menu.title }}</span>
              </li>
              <li
                v-for="(subMenu, index) in menu.subMenus"
                :key="index"
                class="hover-bordered"
              >
                <NuxtLink :to="subMenu.to" class="link link-hover">
                  {{ subMenu.title }}
                </NuxtLink>
              </li>
            </template>
          </ul>
        </li>
      </template>

      </template>
    </ul>
</template>

<script lang="ts" setup>
  // prop
  interface Props {
    contents: object[]
  }

  const props = withDefaults(
    defineProps<Props>(), {
      contents: () => [
        {
          title: 'Nuxt',
          to: '/nuxt/index',
          menus: [
            {
              title: 'Category',
              subMenus: [
                {
                  title: 'Index',
                  to: '/nuxt/index'
                },
                {
                  title: 'Data Fetching',
                  to: '/nuxt/dataFetching'
                }
              ]
            },
            {
              title: 'test',
              subMenus: [
                {
                  title: 'tsss',
                  to: '/nuxt/sss'
                },
                {
                  title: 'test',
                  to: '/nuxt/ga'
                }
              ]
            }
          ]
        },
        {
          title: 'Go',
          to: '/go',
          menus:[]
        },
        {
          title: 'Docs',
          to: '/go/index',
          menus: [
            {
              title: 'saa',
              subMenus: [
                {
                  title: 'Index',
                  to: '/nuxt/index'
                },
                {
                  title: 'Data Fetching',
                  to: '/nuxt/dataFetching'
                }
              ]
            },
            {
              title: 'test',
              subMenus: [
                {
                  title: 'tsss',
                  to: '/nuxt/sss'
                },
                {
                  title: 'test',
                  to: '/nuxt/ga'
                }
              ]
            }
          ]
        }
      ]
    }
  );

</script>
