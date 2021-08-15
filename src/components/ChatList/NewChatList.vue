<template>
  <div class="robin-side-container">
    <header class="robin-header">
      <RText
        text="New Chat"
        fontWeight="400"
        color="rgba(83, 95, 137, 1)"
        :fontSize="17"
      />
      <RCloseButton @close="$emit('changesidebartype', 'primary')" />
    </header>
    <div class="robin-wrapper robin-w-100">
      <RSearchBar />
    </div>
    <div
      class="robin-wrapper robin-card-container robin-flex robin-flex-column robin-mt-42"
    >
      <div class="robin-card robin-flex robin-flex-align-center">
        <div class="robin-card-info robin-mr-12">
          <RGroupAvatar />
        </div>
        <div
          class="robin-card-info robin-h-100 robin-h-100 robin-flex robin-flex-align-center robin-pt-4 robin-pb-4˝ robin-flex-1"
        >
          <div class="robin-flex">
            <RTextButton
              text="Create A New Group"
              color="#15AE73"
              :fontSize="14"
              :lineHeight="18"
              emit="newgroupchat"
              @newgroupchat="$emit('changesidebartype', 'newgroupchat')"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="robin-wrapper robin-card-container robin-flex robin-flex-column"
    >
      <div class="robin-card robin-flex robin-flex-align-center">
        <div class="robin-card-info robin-mr-12">
          <RNewContactAvatar />
        </div>
        <div
          class="robin-card-info robin-h-100 robin-h-100 robin-flex robin-flex-align-center robin-pt-4 robin-pb-4˝ robin-flex-1"
        >
          <div class="robin-flex">
            <RTextButton
              text="Add New Contact"
              color="#15AE73"
              :fontSize="14"
              :lineHeight="18"
            />
          </div>
        </div>
      </div>
    </div>
    <RAlphabetBlock />
    <div
      class="robin-wrapper robin-card-container robin-flex robin-flex-column robin-grey-200"
    >
      <div
        class="robin-card robin-flex robin-flex-align-center robin-clickable"
      >
        <div class="robin-card-info robin-mr-12">
          <RAvatar />
        </div>
        <div
          class="robin-card-info robin-h-100 robin-h-100 robin-flex robin-flex-align-center robin-pt-4 robin-pb-4˝ robin-flex-1"
        >
          <div class="robin-flex">
            <RText text="Temi Obadofin" :fontSize="14" :lineHeight="18" />
          </div>
        </div>
      </div>
    </div>
    <RAlphabetBlock text="B" />
    <div
      class="robin-wrapper robin-card-container robin-flex robin-flex-column robin-grey-200"
    >
      <div
        class="robin-card robin-flex robin-flex-align-center robin-clickable"
      >
        <div class="robin-card-info robin-mr-12">
          <RAvatar />
        </div>
        <div
          class="robin-card-info robin-h-100 robin-h-100 robin-flex robin-flex-align-center robin-pt-4 robin-pb-4˝ robin-flex-1"
        >
          <div class="robin-flex">
            <RText text="Temi Obadofin" :fontSize="14" :lineHeight="18" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RText from './RText/RText.vue'
import RSearchBar from './RSearchBar/RSearchBar.vue'
import RCloseButton from './RCloseButton/RCloseButton.vue'
import RTextButton from './RTextButton/RTextButton.vue'
import RGroupAvatar from './RGroupAvatar/RGroupAvatar.vue'
import RAvatar from './RAvatar/RAvatar.vue'
import RNewContactAvatar from './RNewContactAvatar/RNewContactAvatar.vue'
import RAlphabetBlock from './RAlphabetBlock/RAlphabetBlock.vue'

export default defineComponent({
  name: 'RSideContainer',
  components: {
    RText,
    RSearchBar,
    RTextButton,
    RGroupAvatar,
    RNewContactAvatar,
    RCloseButton,
    RAvatar,
    RAlphabetBlock
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

.robin-w-100 {
  width: 100%;
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

.robin-alphabet-block {
  width: 100%;
  padding: 0 1.5rem;
  height: 28px;
  background-color: #f3f3f3;
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

.robin-ml-8 {
  margin-left: 0.5rem;
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

.robin-mt-42 {
  margin-top: 2.625rem;
}

.robin-grey-200 {
  background-color: #fafafa;
}

.robin-clickable {
  cursor: pointer;
}

.robin-alphabet-block + .robin-card-container .robin-card:hover {
  background-color: #c8c8c8;
  padding: 1rem 0.75rem 1.1rem;
}
</style>
