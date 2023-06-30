<template>
  <div class="overflow-x-hidden tab:max-h-screen tab:overflow-y-hidden">
    <MeshBakground class="fixed top-0 left-0 fixed z-[-1]" />
    <NavBar class="absolute hidden tab:flex left-0 top-0 px-4 md:px-10 tab:px-[5vw] z-10 max-h-[10vh]" />
    <div
      class="flex flex-col gap-2 tab:gap-16 tab:flex-row tab:h-[90vh] tab:pt-[10vh] tab:pb-[10vh] tab:mt-[10vh] w-screen px-4 tab:px-0 pb-8">
      <LeftPane
        class="tab:mx-auto w-full tab:w-fit tab:min-h-0 tab:min-w-fit min-h-full overflow-hidden leftpane tab:py-0 py-12 tab:pl-[10vh] tab:pr-0" />
      <RightPane class="max-w-full overflow-x-hidden overflow-y-scroll mx-auto w-full rightpane desktop:pr-[5vw]" />
    </div>
  </div>
</template>

<style>
.rightpane::-webkit-scrollbar {
  width: 10px;
}

.rightpane::-webkit-scrollbar-track {
  @apply drop-shadow-2xl backdrop-grayscale;
  background: transparent;
}

.rightpane::-webkit-scrollbar-thumb {
  @apply bg-accentdark rounded-xl;
}
</style>