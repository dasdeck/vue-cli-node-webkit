<template>
<div>
  <select v-model="selectedId">
    <option v-if="!selectedId" :value="''" selected>[none selected]</option>
    <option v-if="selectedId && !selectedInput" :value="selectedId" selected>[not available]</option>
    <option v-for="input in inputs" :selected="selectedInput===input" :value="input.id">{{input.name}}</option>
  </select>
</div>
</template>

<script>
  import Vue from 'vue'

  export default {
    props: {
      preSelectedInput: {
        default: ''
      }
    },
    data () {
      return { inputs: {} }
    },
    localStorage: {
      selectedId: {
        type: String,
        default: '',
        bind: true
      }
    },
    computed: {
      selectedInput () {
        return this.inputs[this.selectedId] ? this.inputs[this.selectedId] : null
      }
    },
    created () {
      window.$midiSelector = this

      if (this.preSelectedInput) {
        this.selectedId = this.preSelectedInput.id
      }

      navigator.requestMIDIAccess()
      .then(midi => {
        midi.inputs.forEach((input) => {
          Vue.set(this.inputs, input.id, input)
        })
      })
      .then(() => {
        this.$watch('$localStorage.selectedId', () => {
          this.$emit('inputChanged', this.selectedInput)
        }, {immediate: true})
      })
    }
  }
</script>
