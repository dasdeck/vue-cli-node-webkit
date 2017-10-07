<template>
  <div>
    <div v-for="note in notes">
      {{note.text}}
    </div>
  </div>
</template>
<script>
export default {
  firebase () {
    return { notes: this.$db.ref('notes') }
  }
}
</script>
