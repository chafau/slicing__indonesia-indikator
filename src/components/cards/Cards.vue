<template>
  <div
    class="card"
    no-body
    :class="[
      { 'card-lift--hover': hover },
      { shadow: shadow },
      { [`shadow-${shadowSize}`]: shadowSize },
      { [`bg-gradient-${gradient}`]: gradient },
      { [`bg-${type}`]: type },
    ]"
  >
    <slot name="image"></slot>
    <div class="card-header" :class="headerClasses" v-if="$slots.header">
      <slot name="header"> </slot>
    </div>
    <b-card-body :class="bodyClasses" v-if="!noBody">
      <slot></slot>
    </b-card-body>

    <slot v-if="noBody"></slot>

    <div class="card-footer" :class="footerClasses" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'

export default {
  name: "cards",
  props: {
    type: {
      type: String,
      description: "Card type",
    },
    gradient: {
      type: String,
      description: "Card background gradient type (warning,danger etc)",
    },
    hover: {
      type: Boolean,
      description: "Whether card should move on hover",
    },
    shadow: {
      type: Boolean,
      description: "Whether card has shadow",
    },
    shadowSize: {
      type: String,
      description: "Card shadow size",
    },
    noBody: {
      type: Boolean,
      default: false,
      description: "Whether card should have wrapper body class",
    },
    bodyClasses: {
      type: [String, Object, Array],
      description: "Card body css classes",
    },
    headerClasses: {
      type: [String, Object, Array],
      description: "Card header css classes",
    },
    footerClasses: {
      type: [String, Object, Array],
      description: "Card footer css classes",
    },
  },
};
</script>
<style>
</style>
