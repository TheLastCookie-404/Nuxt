<template>
  <div>
    <div class="h-[300vh]">
      <div class="fixed top-0 left-0 size-full place-content-center">
        <div class="w-fit m-auto text-9xl font-medium scaleTextAnim">
          <div class="flex">
            <div>HE</div>
            <div class="scaleLetterAnim">L</div>
            <div>P</div>
          </div>
        </div>
        <div class="absolute size-full top-0 left-0 grid place-content-center">
          <div class="size-[250vh] backdrop-invert rounded-full scaleCircleAnim" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: false,
  });
</script>

<style scoped lang="css">
  .scaleTextAnim {
    animation: ScaleText;
    animation-duration: 1ms; /* Firefox requires this to apply the animation */
    animation-timeline: scroll(block nearest);
  }

  @keyframes ScaleText {
    0% {
      transform: scale(0);
    }
    25%,
    50%,
    100% {
      transform: scale(100%);
    }
  }

  .scaleLetterAnim {
    animation: ScaleLetter;
    animation-duration: 1ms; /* Firefox requires this to apply the animation */
    animation-timeline: scroll(block nearest);
  }

  @keyframes ScaleLetter {
    0%,
    25% {
      transform: scaleY(100%);
    }
    50%,
    100% {
      transform: scaleY(-100%) translateY(-1rem);
    }
  }

  .scaleCircleAnim {
    animation: ScaleCircle;
    animation-duration: 1ms; /* Firefox requires this to apply the animation */
    animation-timeline: scroll();
  }

  @keyframes ScaleCircle {
    0%,
    25%,
    50%,
    75% {
      transform: scale(0);
    }
    100% {
      transform: scale(100%);
    }
  }
</style>
