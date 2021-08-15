<template>
  <div class="robin-side-container">
    <header class="robin-header">
      <RText
        text="Settings"
        fontWeight="400"
        color="rgba(83, 95, 137, 1)"
        :fontSize="17"
      />
      <REditButton @edit="$emit('changesidebartype', 'newchat')" />
    </header>
    <div class="robin-wrapper robin-w-100">
      <RSearchBar />
    </div>
    <div
      class="robin-wrapper robin-flex robin-flex-column robin-flex-align-center robin-h-100 robin-w-100 robin-flex-1 robin-pt-100"
    >
      <RNoChatIcon />
      <div class="robin-mb-13 robin-mt-33">
        <RText text="No Messages Yet" fontWeight="normal" color="#535F89" />
      </div>
      <RTextButton
        text="Start a chat"
        emit="newchat"
        @newchat="$emit('changesidebartype', 'newchat')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RText from './RText/RText.vue'
import REditButton from './REditButton/REditButton.vue'
import RSearchBar from './RSearchBar/RSearchBar.vue'
import RTextButton from './RTextButton/RTextButton.vue'
import RNoChatIcon from './RNoChatIcon/RNoChatIcon.vue'

export default defineComponent({
  name: 'RSideContainer',
  components: {
    RText,
    REditButton,
    RSearchBar,
    RTextButton,
    RNoChatIcon
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

.robin-w-100 {
  width: 100%;
}

.robin-flex-align-center {
  align-items: center;
}

.robin-flex-1 {
  flex: 1;
}

.robin-mb-13 {
  margin-bottom: 0.813rem;
}

.robin-mt-33 {
  margin-top: 2.063rem;
}

.robin-pt-100 {
  padding-top: 6.25rem;
}
</style>
