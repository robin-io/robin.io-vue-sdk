<template>
  <div class="robin-side-container">
    <header class="robin-header">
      <RText
        text="Archived Chats"
        fontWeight="400"
        color="rgba(83, 95, 137, 1)"
        :fontSize="17"
      />
      <RCloseButton @close="$emit('changesidebartype', 'primary')" />
    </header>
    <div
      class="robin-wrapper robin-card-container robin-flex robin-flex-column robin-mt-75"
    >
      <div class="robin-card robin-flex robin-flex-align-center">
        <div class="robin-card-info robin-mr-12">
          <RAvatar />
        </div>
        <div
          class="robin-card-info robin-h-100 robin-h-100 robin-flex robin-flex-column robin-flex-space-between robin-pt-4 robin-pb-4˝ robin-flex-1"
        >
          <div class="robin-flex robin-flex-space-between">
            <RText
              text="Users Name"
              fontWeight="normal"
              color="#000000"
              :fontSize="16"
              :lineHeight="20"
            />

            <RText
              as="p"
              text="Yesterday"
              fontWeight="normal"
              color="#566BA0"
              :fontSize="8"
              :lineHeight="18"
            />
          </div>
          <div class="robin-flex robin-flex-space-between">
            <RText
              as="p"
              text="We believe life is vast, and..."
              fontWeight="normal"
              color="#7A7A7A"
              :fontSize="12"
              :lineHeight="18"
            />

            <RText
              as="p"
              text="Archived"
              fontWeight="normal"
              color="#15AE73"
              :fontSize="8"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RText from './RText/RText.vue'
import RCloseButton from './RCloseButton/RCloseButton.vue'
import RAvatar from './RAvatar/RAvatar.vue'

export default defineComponent({
  name: 'RSideContainer',
  components: {
    RText,
    RCloseButton,
    RAvatar
  }
})
</script>

<style scoped>
.robin-side-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  box-shadow: 0px 2px 20px rgba(0, 104, 255, 0.06);
}

header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 3.563rem 1.5rem 1.5rem;
}

.robin-wrapper {
  padding: 0 1.5rem;
}

.robin-pt-10 {
  padding-top: 0.625rem;
}

.robin-pt-4 {
  padding-top: 0.25rem;
}

.robin-pb-4 {
  padding-bottom: 0.25rem;
}

.robin-pb-11 {
  padding-bottom: 0.688rem;
}

.robin-card-container {
  width: 100%;
}

.robin-card-container .robin-card {
  border-bottom: 1px solid #f4f6f8;
  padding: 1rem 0 1.1rem;
  transition: all 0.15s;
}

.robin-card-container:last-child .robin-card {
  border-bottom: none;
}

.robin-card:hover {
  background-color: #f0f3f5;
  border-radius: 4px;
  cursor: pointer;
  padding: 1rem 0.75rem 1.1rem;
}

.robin-flex {
  display: flex;
}

.robin-flex-column {
  flex-direction: column;
}

.robin-flex-space-between {
  justify-content: space-between;
}

.robin-ml-auto {
  margin-left: auto;
}

.robin-mr-12 {
  margin-right: 0.75rem;
}

.robin-h-100 {
  height: 100%;
}

.robin-flex-align-center {
  align-items: center;
}

.robin-flex-1 {
  flex: 1;
}

.robin-mt-75 {
  margin-top: 4.688rem;
}
</style>
